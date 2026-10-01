for (
    var r = "u" > typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
        u = { alt: "altKey", control: "ctrlKey", meta: "metaKey", shift: "shiftKey" },
        n = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: r ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta",
        },
        a = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
        },
        o = 1;
    o < 20;
    o++
)
    a["f" + o] = 111 + o;
function i(e) {
    return n[(e = e.toLowerCase())] || e;
}
t.isKeyHotkey = function (e, t) {
    var r, n, o, s, l;
    return (
        (r = e),
        (n = { byKey: !0 }),
        (o = t),
        !n || "byKey" in n || ((o = n), (n = null)),
        Array.isArray(r) || (r = [r]),
        (s = r.map(function (e) {
            return (function (e, t) {
                var r = t && t.byKey,
                    n = {},
                    o = (e = e.replace("++", "+add")).split("+"),
                    s = o.length;
                for (var l in u) n[u[l]] = !1;
                var c = !0,
                    f = !1,
                    d = void 0;
                try {
                    for (var D, h = o[Symbol.iterator](); !(c = (D = h.next()).done); c = !0) {
                        var C = D.value,
                            v = C.endsWith("?") && C.length > 1;
                        v && (C = C.slice(0, -1));
                        var p = i(C),
                            g = u[p];
                        ((1 !== s && g) ||
                            (r
                                ? (n.key = p)
                                : (n.which = (function (e) {
                                      return a[(e = i(e))] || e.toUpperCase().charCodeAt(0);
                                  })(C))),
                            g && (n[g] = !v || null));
                    }
                } catch (e) {
                    ((f = !0), (d = e));
                } finally {
                    try {
                        !c && h.return && h.return();
                    } finally {
                        if (f) throw d;
                    }
                }
                return n;
            })(e, n);
        })),
        (l = function (e) {
            return s.some(function (t) {
                return (function (e, t) {
                    for (var r in e) {
                        var u = e[r],
                            n = void 0;
                        if (
                            null != u &&
                            (null !=
                                (n =
                                    "key" === r && null != t.key
                                        ? t.key.toLowerCase()
                                        : "which" === r
                                          ? 91 === u && 93 === t.which
                                              ? 91
                                              : t.which
                                          : t[r]) ||
                                !1 !== u) &&
                            n !== u
                        )
                            return !1;
                    }
                    return !0;
                })(t, e);
            });
        }),
        null == o ? l : l(o)
    );
};
