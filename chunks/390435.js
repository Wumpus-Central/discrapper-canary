n.d(t, {
    w: () => u,
});
var r = n(621466),
    l = n(397927),
    i = n(267102),
    a = n(712687),
    s = n(203982),
    o = n(406975),
    c = n(652215);
let u = (function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
})(
    {
        POP_LAYER: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action(e) {
                if ((0, l.ny_)()) return !1;
                if (s._.hasSubscribers(c.jej.CALL_DECLINE)) return s._.dispatch(c.jej.CALL_DECLINE), !1;
                if (a.A.close()) return !1;
                if ((0, r.vq)(e.target)) {
                    let t = (0, i.mU)(e.target);
                    if (null == t ? void 0 : t.hasSubscribers(c.jej.POPOUT_CLOSE))
                        return t.dispatch(c.jej.POPOUT_CLOSE), !1;
                }
                if (s._.hasSubscribers(c.jej.MODAL_CLOSE)) return s._.dispatch(c.jej.MODAL_CLOSE), !1;
                s._.dispatch(c.jej.LAYER_POP_ESCAPE_KEY);
            },
        },
    },
    o.Ay,
);
