"use strict";
for (
    var n = "u" > typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
        r = { alt: "altKey", control: "ctrlKey", meta: "metaKey", shift: "shiftKey" },
        i = {
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
function u(e) {
    return i[(e = e.toLowerCase())] || e;
}
t.isKeyHotkey = function (e, t) {
    var n, i, o, s, l;
    return (
        (n = e),
        (i = { byKey: !0 }),
        (o = t),
        !i || "byKey" in i || ((o = i), (i = null)),
        Array.isArray(n) || (n = [n]),
        (s = n.map(function (e) {
            return (function (e, t) {
                var n = t && t.byKey,
                    i = {},
                    o = (e = e.replace("++", "+add")).split("+"),
                    s = o.length;
                for (var l in r) i[r[l]] = !1;
                var d = !0,
                    c = !1,
                    f = void 0;
                try {
                    for (var h, p = o[Symbol.iterator](); !(d = (h = p.next()).done); d = !0) {
                        var m = h.value,
                            v = m.endsWith("?") && m.length > 1;
                        v && (m = m.slice(0, -1));
                        var _ = u(m),
                            g = r[_];
                        (1 !== s && g) ||
                            (n
                                ? (i.key = _)
                                : (i.which = (function (e) {
                                      return a[(e = u(e))] || e.toUpperCase().charCodeAt(0);
                                  })(m))),
                            g && (i[g] = !v || null);
                    }
                } catch (e) {
                    (c = !0), (f = e);
                } finally {
                    try {
                        !d && p.return && p.return();
                    } finally {
                        if (c) throw f;
                    }
                }
                return i;
            })(e, i);
        })),
        (l = function (e) {
            return s.some(function (t) {
                return (function (e, t) {
                    for (var n in e) {
                        var r = e[n],
                            i = void 0;
                        if (
                            null != r &&
                            (null !=
                                (i =
                                    "key" === n && null != t.key
                                        ? t.key.toLowerCase()
                                        : "which" === n
                                          ? 91 === r && 93 === t.which
                                              ? 91
                                              : t.which
                                          : t[n]) ||
                                !1 !== r) &&
                            i !== r
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
