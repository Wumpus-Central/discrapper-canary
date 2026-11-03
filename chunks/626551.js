r.d(t, { $M: () => i, W$: () => n, rQ: () => a });
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
    l = { 1: "bold", 2: "dim", 3: "italic", 4: "underline", 7: "reverse", 8: "hidden", 9: "strikethrough" },
    o = /\x1B\[([0-?]*)([ -/]*)([@-~])/g;
function u(e) {
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
function i(e) {
    let t, r, i;
    return ((t = null),
    (r = null),
    (i = new Set()),
    {
        parse(e) {
            let s = [],
                a = 0;
            do {
                let p = (function (e, t) {
                        o.lastIndex = t;
                        let r = o.exec(e);
                        if (r) {
                            let [, e, t, n] = r;
                            return {
                                sequence: "m" !== n || t || /^[<=>?]/.test(e) ? [] : e.split(";"),
                                startPosition: r.index,
                                position: r.index + r[0].length,
                            };
                        }
                        return { position: e.length };
                    })(e, a),
                    f = p.sequence ? e.substring(a, p.startPosition) : e.substring(a);
                if (
                    (f.length > 0 &&
                        s.push({ value: f, position: a, foreground: t, background: r, decorations: new Set(i) }),
                    p.sequence)
                ) {
                    let e = (function (e) {
                        let t = [];
                        for (; e.length > 0;) {
                            let r = e.shift();
                            if (!r) continue;
                            let o = Number.parseInt(r);
                            if (!Number.isNaN(o))
                                if (0 === o) t.push({ type: "resetAll" });
                                else if (o <= 9) l[o] && t.push({ type: "setDecoration", value: l[o] });
                                else if (o <= 29) {
                                    let e = l[o - 20];
                                    e &&
                                        (t.push({ type: "resetDecoration", value: e }),
                                        "dim" === e && t.push({ type: "resetDecoration", value: "bold" }));
                                } else if (o <= 37)
                                    t.push({ type: "setForegroundColor", value: { type: "named", name: n[o - 30] } });
                                else if (38 === o) {
                                    let r = u(e);
                                    r && t.push({ type: "setForegroundColor", value: r });
                                } else if (39 === o) t.push({ type: "resetForegroundColor" });
                                else if (o <= 47)
                                    t.push({ type: "setBackgroundColor", value: { type: "named", name: n[o - 40] } });
                                else if (48 === o) {
                                    let r = u(e);
                                    r && t.push({ type: "setBackgroundColor", value: r });
                                } else
                                    49 === o
                                        ? t.push({ type: "resetBackgroundColor" })
                                        : 53 === o
                                          ? t.push({ type: "setDecoration", value: "overline" })
                                          : 55 === o
                                            ? t.push({ type: "resetDecoration", value: "overline" })
                                            : o >= 90 && o <= 97
                                              ? t.push({
                                                    type: "setForegroundColor",
                                                    value: { type: "named", name: n[o - 90 + 8] },
                                                })
                                              : o >= 100 &&
                                                o <= 107 &&
                                                t.push({
                                                    type: "setBackgroundColor",
                                                    value: { type: "named", name: n[o - 100 + 8] },
                                                });
                        }
                        return t;
                    })(p.sequence);
                    for (let n of e)
                        "resetAll" === n.type
                            ? ((t = null), (r = null), i.clear())
                            : "resetForegroundColor" === n.type
                              ? (t = null)
                              : "resetBackgroundColor" === n.type
                                ? (r = null)
                                : "resetDecoration" === n.type && i.delete(n.value);
                    for (let n of e)
                        "setForegroundColor" === n.type
                            ? (t = n.value)
                            : "setBackgroundColor" === n.type
                              ? (r = n.value)
                              : "setDecoration" === n.type && i.add(n.value);
                }
                a = p.position;
            } while (a < e.length);
            return s;
        },
    }).parse(e);
}
var s = {
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
function a(e = s) {
    let t;
    function r(e) {
        return `#${e.map((e) => Math.max(0, Math.min(e, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    return {
        value: function (l) {
            switch (l.type) {
                case "named":
                    return e[l.name];
                case "rgb":
                    return r(l.rgb);
                case "table":
                    var o;
                    return (
                        (o = l.index),
                        (function () {
                            if (t) return t;
                            t = [];
                            for (let r = 0; r < n.length; r++) t.push(e[n[r]]);
                            let l = [0, 95, 135, 175, 215, 255];
                            for (let e = 0; e < 6; e++)
                                for (let n = 0; n < 6; n++) for (let o = 0; o < 6; o++) t.push(r([l[e], l[n], l[o]]));
                            let o = 8;
                            for (let e = 0; e < 24; e++, o += 10) t.push(r([o, o, o]));
                            return t;
                        })()[o]
                    );
            }
        },
    };
}
