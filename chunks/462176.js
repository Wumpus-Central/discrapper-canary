n.d(t, { Z: () => l }), n(47120), n(653041);
let i = {
        1: 'bold',
        4: 'underline'
    },
    r = {
        30: 'black',
        31: 'red',
        32: 'green',
        33: 'yellow',
        34: 'blue',
        35: 'magenta',
        36: 'cyan',
        37: 'white'
    },
    a = {
        40: 'black',
        41: 'red',
        42: 'green',
        43: 'yellow',
        44: 'blue',
        45: 'magenta',
        46: 'cyan',
        47: 'white'
    },
    s = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    o = new RegExp('(?='.concat(s.source, ')'));
function l() {
    let e = {
            className: 'ansi-control-sequence',
            begin: s,
            starts: {
                end: o,
                endsParent: !0
            }
        },
        t = [...c('foreground', r, ['38', '39'], !0), ...c('background', a, ['48', '49'], !0), ...c('style', i, [], !1), e];
    return (
        d(t),
        {
            contains: [
                {
                    begin: o,
                    contains: t
                }
            ]
        }
    );
}
function u(e, t, n, i) {
    return {
        className: 'ansi-'.concat(e, '-').concat(t),
        endsParent: !0,
        begin: o,
        'on:begin': (e, t) => {
            let r = e[1].split(';');
            for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), r)) e === n ? (t.data.isOn = !0) : i.includes(e) && (t.data.isOn = !1);
            t.data.isOn || t.ignoreMatch();
        }
    };
}
function c(e, t, n, i) {
    let r = ['0', ...n];
    return (
        i && r.push(...Object.keys(t)),
        Object.entries(t).map((t) => {
            let [n, i] = t;
            return u(e, i, n, r);
        })
    );
}
function d(e) {
    for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
}
