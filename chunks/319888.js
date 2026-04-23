"use strict";
n.d(t, { A: () => l }), n(321073);
let r = { 1: "bold", 4: "underline" },
    i = { 30: "black", 31: "red", 32: "green", 33: "yellow", 34: "blue", 35: "magenta", 36: "cyan", 37: "white" },
    s = { 40: "black", 41: "red", 42: "green", 43: "yellow", 44: "blue", 45: "magenta", 46: "cyan", 47: "white" },
    a = /\x1B\[(\d+(?:[:;]\d+)*)m/,
    o = RegExp(`(?=${a.source})`);
function l() {
    let e = [
        ...u("foreground", i, ["38", "39"], !0),
        ...u("background", s, ["48", "49"], !0),
        ...u("style", r, [], !1),
        { className: "ansi-control-sequence", begin: a, starts: { end: o, endsParent: !0 } },
    ];
    return (
        (function (e) {
            for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1);
        })(e),
        { contains: [{ begin: o, contains: e }] }
    );
}
function u(e, t, n, r) {
    let i = ["0", ...n];
    return (
        r && i.push(...Object.keys(t)),
        Object.entries(t).map((t) => {
            let [n, r] = t;
            return {
                className: `ansi-${e}-${r}`,
                endsParent: !0,
                begin: o,
                "on:begin": (e, t) => {
                    let r = e[1].split(";");
                    for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), r))
                        e === n ? (t.data.isOn = !0) : i.includes(e) && (t.data.isOn = !1);
                    t.data.isOn || t.ignoreMatch();
                },
            };
        })
    );
}
