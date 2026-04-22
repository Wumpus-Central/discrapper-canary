"use strict";
n.d(t, { A: () => o }), n(321073);
let i = { 1: "bold", 4: "underline" },
    l = { 30: "black", 31: "red", 32: "green", 33: "yellow", 34: "blue", 35: "magenta", 36: "cyan", 37: "white" },
    s = { 40: "black", 41: "red", 42: "green", 43: "yellow", 44: "blue", 45: "magenta", 46: "cyan", 47: "white" },
    r = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    a = RegExp(`(?=${r.source})`);
function o() {
    let e = [
        ...c("foreground", l, ["38", "39"], !0),
        ...c("background", s, ["48", "49"], !0),
        ...c("style", i, [], !1),
        { className: "ansi-control-sequence", begin: r, starts: { end: a, endsParent: !0 } },
    ];
    return (
        (function (e) {
            for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
        })(e),
        { contains: [{ begin: a, contains: e }] }
    );
}
function c(e, t, n, i) {
    let l = ["0", ...n];
    return (
        i && l.push(...Object.keys(t)),
        Object.entries(t).map((t) => {
            let [n, i] = t;
            return {
                className: `ansi-${e}-${i}`,
                endsParent: !0,
                begin: a,
                "on:begin": (e, t) => {
                    let i = e[1].split(";");
                    for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), i))
                        e === n ? (t.data.isOn = !0) : l.includes(e) && (t.data.isOn = !1);
                    t.data.isOn || t.ignoreMatch();
                },
            };
        })
    );
}
