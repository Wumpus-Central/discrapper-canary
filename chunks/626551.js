var n = [
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
    i = { 1: "bold", 2: "dim", 3: "italic", 4: "underline", 7: "reverse", 8: "hidden", 9: "strikethrough" },
    s = /\x1B\[([0-?]*)([ -/]*)([@-~])/g;
function r(e) {
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
a.d(
    t,
    {},
    {
        $M: function (e) {
            let t, a, g;
            return ((t = null),
            (a = null),
            (g = new Set()),
            {
                parse(e) {
                    let l = [],
                        h = 0;
                    do {
                        let o = (function (e, t) {
                                s.lastIndex = t;
                                let a = s.exec(e);
                                if (a) {
                                    let [, e, t, n] = a;
                                    return {
                                        sequence: "m" !== n || t || /^[<=>?]/.test(e) ? [] : e.split(";"),
                                        startPosition: a.index,
                                        position: a.index + a[0].length,
                                    };
                                }
                                return { position: e.length };
                            })(e, h),
                            u = o.sequence ? e.substring(h, o.startPosition) : e.substring(h);
                        if (
                            (u.length > 0 &&
                                l.push({
                                    value: u,
                                    position: h,
                                    foreground: t,
                                    background: a,
                                    decorations: new Set(g),
                                }),
                            o.sequence)
                        ) {
                            let e = (function (e) {
                                let t = [];
                                for (; e.length > 0;) {
                                    let a = e.shift();
                                    if (!a) continue;
                                    let s = Number.parseInt(a);
                                    if (!Number.isNaN(s))
                                        if (0 === s) t.push({ type: "resetAll" });
                                        else if (s <= 9) i[s] && t.push({ type: "setDecoration", value: i[s] });
                                        else if (s <= 29) {
                                            let e = i[s - 20];
                                            e &&
                                                (t.push({ type: "resetDecoration", value: e }),
                                                "dim" === e && t.push({ type: "resetDecoration", value: "bold" }));
                                        } else if (s <= 37)
                                            t.push({
                                                type: "setForegroundColor",
                                                value: { type: "named", name: n[s - 30] },
                                            });
                                        else if (38 === s) {
                                            let a = r(e);
                                            a && t.push({ type: "setForegroundColor", value: a });
                                        } else if (39 === s) t.push({ type: "resetForegroundColor" });
                                        else if (s <= 47)
                                            t.push({
                                                type: "setBackgroundColor",
                                                value: { type: "named", name: n[s - 40] },
                                            });
                                        else if (48 === s) {
                                            let a = r(e);
                                            a && t.push({ type: "setBackgroundColor", value: a });
                                        } else
                                            49 === s
                                                ? t.push({ type: "resetBackgroundColor" })
                                                : 53 === s
                                                  ? t.push({ type: "setDecoration", value: "overline" })
                                                  : 55 === s
                                                    ? t.push({ type: "resetDecoration", value: "overline" })
                                                    : s >= 90 && s <= 97
                                                      ? t.push({
                                                            type: "setForegroundColor",
                                                            value: { type: "named", name: n[s - 90 + 8] },
                                                        })
                                                      : s >= 100 &&
                                                        s <= 107 &&
                                                        t.push({
                                                            type: "setBackgroundColor",
                                                            value: { type: "named", name: n[s - 100 + 8] },
                                                        });
                                }
                                return t;
                            })(o.sequence);
                            for (let n of e)
                                "resetAll" === n.type
                                    ? ((t = null), (a = null), g.clear())
                                    : "resetForegroundColor" === n.type
                                      ? (t = null)
                                      : "resetBackgroundColor" === n.type
                                        ? (a = null)
                                        : "resetDecoration" === n.type && g.delete(n.value);
                            for (let n of e)
                                "setForegroundColor" === n.type
                                    ? (t = n.value)
                                    : "setBackgroundColor" === n.type
                                      ? (a = n.value)
                                      : "setDecoration" === n.type && g.add(n.value);
                        }
                        h = o.position;
                    } while (h < e.length);
                    return l;
                },
            }).parse(e);
        },
        W$: n,
        rQ: function (e = g) {
            let t;
            function a(e) {
                return `#${e.map((e) => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, "0")).join("")}`;
            }
            return {
                value: function (i) {
                    switch (i.type) {
                        case "named":
                            return e[i.name];
                        case "rgb":
                            return a(i.rgb);
                        case "table":
                            var s;
                            return (
                                (s = i.index),
                                (function () {
                                    if (t) return t;
                                    t = [];
                                    for (let a = 0; a < n.length; a++) t.push(e[n[a]]);
                                    let i = [0, 95, 135, 175, 215, 255];
                                    for (let e = 0; e < 6; e++)
                                        for (let n = 0; n < 6; n++)
                                            for (let s = 0; s < 6; s++) t.push(a([i[e], i[n], i[s]]));
                                    let s = 8;
                                    for (let e = 0; e < 24; e++, s += 10) t.push(a([s, s, s]));
                                    return t;
                                })()[s]
                            );
                    }
                },
            };
        },
    },
);
