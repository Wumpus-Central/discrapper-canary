s.d(t, { $M: () => n, W$: () => r, rQ: () => p });
var r = [
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
    a = { 1: "bold", 2: "dim", 3: "italic", 4: "underline", 7: "reverse", 8: "hidden", 9: "strikethrough" },
    i = /\x1B\[([0-?]*)([ -/]*)([@-~])/g;
function o(e) {
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
function n(e) {
    let t, s, n;
    return ((t = null),
    (s = null),
    (n = new Set()),
    {
        parse(e) {
            let c = [],
                p = 0;
            do {
                let _ = (function (e, t) {
                        i.lastIndex = t;
                        let s = i.exec(e);
                        if (s) {
                            let [, e, t, r] = s;
                            return {
                                sequence: "m" !== r || t || /^[<=>?]/.test(e) ? [] : e.split(";"),
                                startPosition: s.index,
                                position: s.index + s[0].length,
                            };
                        }
                        return { position: e.length };
                    })(e, p),
                    l = _.sequence ? e.substring(p, _.startPosition) : e.substring(p);
                if (
                    (l.length > 0 &&
                        c.push({ value: l, position: p, foreground: t, background: s, decorations: new Set(n) }),
                    _.sequence)
                ) {
                    let e = (function (e) {
                        let t = [];
                        for (; e.length > 0;) {
                            let s = e.shift();
                            if (!s) continue;
                            let i = Number.parseInt(s);
                            if (!Number.isNaN(i))
                                if (0 === i) t.push({ type: "resetAll" });
                                else if (i <= 9) a[i] && t.push({ type: "setDecoration", value: a[i] });
                                else if (i <= 29) {
                                    let e = a[i - 20];
                                    e &&
                                        (t.push({ type: "resetDecoration", value: e }),
                                        "dim" === e && t.push({ type: "resetDecoration", value: "bold" }));
                                } else if (i <= 37)
                                    t.push({ type: "setForegroundColor", value: { type: "named", name: r[i - 30] } });
                                else if (38 === i) {
                                    let s = o(e);
                                    s && t.push({ type: "setForegroundColor", value: s });
                                } else if (39 === i) t.push({ type: "resetForegroundColor" });
                                else if (i <= 47)
                                    t.push({ type: "setBackgroundColor", value: { type: "named", name: r[i - 40] } });
                                else if (48 === i) {
                                    let s = o(e);
                                    s && t.push({ type: "setBackgroundColor", value: s });
                                } else
                                    49 === i
                                        ? t.push({ type: "resetBackgroundColor" })
                                        : 53 === i
                                          ? t.push({ type: "setDecoration", value: "overline" })
                                          : 55 === i
                                            ? t.push({ type: "resetDecoration", value: "overline" })
                                            : i >= 90 && i <= 97
                                              ? t.push({
                                                    type: "setForegroundColor",
                                                    value: { type: "named", name: r[i - 90 + 8] },
                                                })
                                              : i >= 100 &&
                                                i <= 107 &&
                                                t.push({
                                                    type: "setBackgroundColor",
                                                    value: { type: "named", name: r[i - 100 + 8] },
                                                });
                        }
                        return t;
                    })(_.sequence);
                    for (let r of e)
                        "resetAll" === r.type
                            ? ((t = null), (s = null), n.clear())
                            : "resetForegroundColor" === r.type
                              ? (t = null)
                              : "resetBackgroundColor" === r.type
                                ? (s = null)
                                : "resetDecoration" === r.type && n.delete(r.value);
                    for (let r of e)
                        "setForegroundColor" === r.type
                            ? (t = r.value)
                            : "setBackgroundColor" === r.type
                              ? (s = r.value)
                              : "setDecoration" === r.type && n.add(r.value);
                }
                p = _.position;
            } while (p < e.length);
            return c;
        },
    }).parse(e);
}
var c = {
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
function p(e = c) {
    let t;
    function s(e) {
        return `#${e.map((e) => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    return {
        value: function (a) {
            switch (a.type) {
                case "named":
                    return e[a.name];
                case "rgb":
                    return s(a.rgb);
                case "table":
                    var i;
                    return (
                        (i = a.index),
                        (function () {
                            if (t) return t;
                            t = [];
                            for (let s = 0; s < r.length; s++) t.push(e[r[s]]);
                            let a = [0, 95, 135, 175, 215, 255];
                            for (let e = 0; e < 6; e++)
                                for (let r = 0; r < 6; r++) for (let i = 0; i < 6; i++) t.push(s([a[e], a[r], a[i]]));
                            let i = 8;
                            for (let e = 0; e < 24; e++, i += 10) t.push(s([i, i, i]));
                            return t;
                        })()[i]
                    );
            }
        },
    };
}
