r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(47120);
var a = r(653041);
let o = {
        1: 'bold',
        4: 'underline'
    },
    s = {
        30: 'black',
        31: 'red',
        32: 'green',
        33: 'yellow',
        34: 'blue',
        35: 'magenta',
        36: 'cyan',
        37: 'white'
    },
    l = {
        40: 'black',
        41: 'red',
        42: 'green',
        43: 'yellow',
        44: 'blue',
        45: 'magenta',
        46: 'cyan',
        47: 'white'
    },
    u = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    c = new RegExp('(?='.concat(u.source, ')'));
function d() {
    let e = {
            className: 'ansi-control-sequence',
            begin: u,
            starts: {
                end: c,
                endsParent: !0
            }
        },
        n = [...p('foreground', s, ['38', '39'], !0), ...p('background', l, ['48', '49'], !0), ...p('style', o, [], !1), e];
    return (
        h(n),
        {
            contains: [
                {
                    begin: c,
                    contains: n
                }
            ]
        }
    );
}
function f(e, n, r, i) {
    return {
        className: 'ansi-'.concat(e, '-').concat(n),
        endsParent: !0,
        begin: c,
        'on:begin': (e, n) => {
            let a = e[1].split(';');
            for (let e of (void 0 === n.data.isOn && (n.data.isOn = !1), a)) e === r ? (n.data.isOn = !0) : i.includes(e) && (n.data.isOn = !1);
            !n.data.isOn && n.ignoreMatch();
        }
    };
}
function p(e, n, r, i) {
    let a = ['0', ...r];
    return (
        i && a.push(...Object.keys(n)),
        Object.entries(n).map((n) => {
            let [r, i] = n;
            return f(e, i, r, a);
        })
    );
}
function h(e) {
    for (let n = 0; n < e.length; n++) e[n].contains = e.slice(n + 1);
}
