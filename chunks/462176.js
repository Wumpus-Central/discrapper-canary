n.d(t, { Z: () => l }), n(474991), n(398202), n(301563), n(47120), n(653041);
let r = {
        1: 'bold',
        4: 'underline'
    },
    i = {
        30: 'black',
        31: 'red',
        32: 'green',
        33: 'yellow',
        34: 'blue',
        35: 'magenta',
        36: 'cyan',
        37: 'white'
    },
    o = {
        40: 'black',
        41: 'red',
        42: 'green',
        43: 'yellow',
        44: 'blue',
        45: 'magenta',
        46: 'cyan',
        47: 'white'
    },
    a = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    s = new RegExp('(?='.concat(a.source, ')'));
function l() {
    let e = {
            className: 'ansi-control-sequence',
            begin: a,
            starts: {
                end: s,
                endsParent: !0
            }
        },
        t = [...u('foreground', i, ['38', '39'], !0), ...u('background', o, ['48', '49'], !0), ...u('style', r, [], !1), e];
    return (
        d(t),
        {
            contains: [
                {
                    begin: s,
                    contains: t
                }
            ]
        }
    );
}
function c(e, t, n, r) {
    return {
        className: 'ansi-'.concat(e, '-').concat(t),
        endsParent: !0,
        begin: s,
        'on:begin': (e, t) => {
            let i = e[1].split(';');
            for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), i)) e === n ? (t.data.isOn = !0) : r.includes(e) && (t.data.isOn = !1);
            t.data.isOn || t.ignoreMatch();
        }
    };
}
function u(e, t, n, r) {
    let i = ['0', ...n];
    return (
        r && i.push(...Object.keys(t)),
        Object.entries(t).map((t) => {
            let [n, r] = t;
            return c(e, r, n, i);
        })
    );
}
function d(e) {
    for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
}
