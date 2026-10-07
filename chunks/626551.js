a.d(t, { $M: () => p, W$: () => s, rQ: () => o });
var s = [
        "black",
        "red",
        "green",
        "yellow",
        "blue",
        "magenta",
        "cyan",
        "white",
        "brightBlack",
        "brightRed",
        "brightGreen",
        "brightYellow",
        "brightBlue",
        "brightMagenta",
        "brightCyan",
        "brightWhite",
    ],
    r = { 1: "bold", 2: "dim", 3: "italic", 4: "underline", 7: "reverse", 8: "hidden", 9: "strikethrough" },
    n = /\x1B\[([0-?]*)([ -/]*)([@-~])/g;
function i(e) {
    let t = e.shift();
    if ("2" === t) {
        let t = e.splice(0, 3).map((e) => Number.parseInt(e));
        if (3 !== t.length || t.some((e) => Number.isNaN(e))) return;
        return { type: "rgb", rgb: t };
    }
    if ("5" === t) {
        let t = e.shift();
        if (t) return { type: "table", index: Number(t) };
    }
}
function p(e) {
    let t, a, p;
    return ((t = null),
    (a = null),
    (p = new Set()),
    {
        parse(e) {
            let g = [],
                o = 0;
            do {
                let l = (function (e, t) {
                        n.lastIndex = t;
                        let a = n.exec(e);
                        if (a) {
                            let [, e, t, s] = a;
                            return {
                                sequence: "m" !== s || t || /^[<=>?]/.test(e) ? [] : e.split(";"),
                                startPosition: a.index,
                                position: a.index + a[0].length,
                            };
                        }
                        return { position: e.length };
                    })(e, o),
                    c = l.sequence ? e.substring(o, l.startPosition) : e.substring(o);
                if (
                    (c.length > 0 &&
                        g.push({ value: c, position: o, foreground: t, background: a, decorations: new Set(p) }),
                    l.sequence)
                ) {
                    let e = (function (e) {
                        let t = [];
                        for (; e.length > 0;) {
                            let a = e.shift();
                            if (!a) continue;
                            let n = Number.parseInt(a);
                            if (!Number.isNaN(n))
                                if (0 === n) t.push({ type: "resetAll" });
                                else if (n <= 9) r[n] && t.push({ type: "setDecoration", value: r[n] });
                                else if (n <= 29) {
                                    let e = r[n - 20];
                                    e &&
                                        (t.push({ type: "resetDecoration", value: e }),
                                        "dim" === e && t.push({ type: "resetDecoration", value: "bold" }));
                                } else if (n <= 37)
                                    t.push({ type: "setForegroundColor", value: { type: "named", name: s[n - 30] } });
                                else if (38 === n) {
                                    let a = i(e);
                                    a && t.push({ type: "setForegroundColor", value: a });
                                } else if (39 === n) t.push({ type: "resetForegroundColor" });
                                else if (n <= 47)
                                    t.push({ type: "setBackgroundColor", value: { type: "named", name: s[n - 40] } });
                                else if (48 === n) {
                                    let a = i(e);
                                    a && t.push({ type: "setBackgroundColor", value: a });
                                } else
                                    49 === n
                                        ? t.push({ type: "resetBackgroundColor" })
                                        : 53 === n
                                          ? t.push({ type: "setDecoration", value: "overline" })
                                          : 55 === n
                                            ? t.push({ type: "resetDecoration", value: "overline" })
                                            : n >= 90 && n <= 97
                                              ? t.push({
                                                    type: "setForegroundColor",
                                                    value: { type: "named", name: s[n - 90 + 8] },
                                                })
                                              : n >= 100 &&
                                                n <= 107 &&
                                                t.push({
                                                    type: "setBackgroundColor",
                                                    value: { type: "named", name: s[n - 100 + 8] },
                                                });
                        }
                        return t;
                    })(l.sequence);
                    for (let s of e)
                        "resetAll" === s.type
                            ? ((t = null), (a = null), p.clear())
                            : "resetForegroundColor" === s.type
                              ? (t = null)
                              : "resetBackgroundColor" === s.type
                                ? (a = null)
                                : "resetDecoration" === s.type && p.delete(s.value);
                    for (let s of e)
                        "setForegroundColor" === s.type
                            ? (t = s.value)
                            : "setBackgroundColor" === s.type
                              ? (a = s.value)
                              : "setDecoration" === s.type && p.add(s.value);
                }
                o = l.position;
            } while (o < e.length);
            return g;
        },
    }).parse(e);
}
var g = {
    black: "#000000",
    red: "#bb0000",
    green: "#00bb00",
    yellow: "#bbbb00",
    blue: "#0000bb",
    magenta: "#ff00ff",
    cyan: "#00bbbb",
    white: "#eeeeee",
    brightBlack: "#555555",
    brightRed: "#ff5555",
    brightGreen: "#00ff00",
    brightYellow: "#ffff55",
    brightBlue: "#5555ff",
    brightMagenta: "#ff55ff",
    brightCyan: "#55ffff",
    brightWhite: "#ffffff",
};
function o(e = g) {
    let t;
    function a(e) {
        return `#${e.map((e) => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    return {
        value: function (r) {
            switch (r.type) {
                case "named":
                    return e[r.name];
                case "rgb":
                    return a(r.rgb);
                case "table":
                    var n;
                    return (
                        (n = r.index),
                        (function () {
                            if (t) return t;
                            t = [];
                            for (let a = 0; a < s.length; a++) t.push(e[s[a]]);
                            let r = [0, 95, 135, 175, 215, 255];
                            for (let e = 0; e < 6; e++)
                                for (let s = 0; s < 6; s++) for (let n = 0; n < 6; n++) t.push(a([r[e], r[s], r[n]]));
                            let n = 8;
                            for (let e = 0; e < 24; e++, n += 10) t.push(a([n, n, n]));
                            return t;
                        })()[n]
                    );
            }
        },
    };
}
