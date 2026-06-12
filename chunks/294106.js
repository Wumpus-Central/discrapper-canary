"use strict";
for (
    var n = "u" > typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
        i = { alt: "altKey", control: "ctrlKey", meta: "metaKey", shift: "shiftKey" },
        r = {
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
            mod: n ? "meta" : "control",
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
        s = {
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
        a = 1;
    a < 20;
    a++
)
    s["f" + a] = 111 + a;
function o(e) {
    return r[(e = e.toLowerCase())] || e;
}
t.isKeyHotkey = function (e, t) {
    var n, r, a, l, u;
    return (
        (n = e),
        (r = { byKey: !0 }),
        (a = t),
        !r || "byKey" in r || ((a = r), (r = null)),
        Array.isArray(n) || (n = [n]),
        (l = n.map(function (e) {
            return (function (e, t) {
                var n = t && t.byKey,
                    r = {},
                    a = (e = e.replace("++", "+add")).split("+"),
                    l = a.length;
                for (var u in i) r[i[u]] = !1;
                var c = !0,
                    d = !1,
                    _ = void 0;
                try {
                    for (var h, f = a[Symbol.iterator](); !(c = (h = f.next()).done); c = !0) {
                        var p = h.value,
                            E = p.endsWith("?") && p.length > 1;
                        E && (p = p.slice(0, -1));
                        var m = o(p),
                            g = i[m];
                        (1 !== l && g) ||
                            (n
                                ? (r.key = m)
                                : (r.which = (function (e) {
                                      return s[(e = o(e))] || e.toUpperCase().charCodeAt(0);
                                  })(p))),
                            g && (r[g] = !E || null);
                    }
                } catch (e) {
                    (d = !0), (_ = e);
                } finally {
                    try {
                        !c && f.return && f.return();
                    } finally {
                        if (d) throw _;
                    }
                }
                return r;
            })(e, r);
        })),
        (u = function (e) {
            return l.some(function (t) {
                return (function (e, t) {
                    for (var n in e) {
                        var i = e[n],
                            r = void 0;
                        if (
                            null != i &&
                            (null !=
                                (r =
                                    "key" === n && null != t.key
                                        ? t.key.toLowerCase()
                                        : "which" === n
                                          ? 91 === i && 93 === t.which
                                              ? 91
                                              : t.which
                                          : t[n]) ||
                                !1 !== i) &&
                            r !== i
                        )
                            return !1;
                    }
                    return !0;
                })(t, e);
            });
        }),
        null == a ? u : u(a)
    );
};
