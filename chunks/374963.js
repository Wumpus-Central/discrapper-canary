n.d(t, { A: () => v }), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(111956),
    o = n.n(i),
    a = n(33851),
    s = n.n(a),
    c = n(136722),
    d = n(417597),
    u = n(397927),
    C = n(576705),
    f = n(504049),
    b = n(266047),
    m = n(221950),
    p = n(512068),
    j = n(779662),
    g = n(818348),
    h = n(985018),
    x = n(985911);
function y(e) {
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
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = l.forwardRef(function (e, t) {
    let { guild: n } = e,
        i = l.useRef(null),
        a = (0, d.bG)([b.A], () => b.A.hasDefaultSearchStateByGuildId(n.id), [n.id]),
        v = (0, d.bG)([C.A], () => C.A.can(c.kg(g.xB.MANAGE_GUILD, g.xB.KICK_MEMBERS), n)),
        H = l.useCallback(() => {
            null != n && v && (0, u.mMO)(async () => (e) => (0, r.jsx)(p.A, O(y({}, e), { guild: n })));
        }, [n, v]),
        w = (0, d.bG)([b.A], () => b.A.getSearchStateByGuildId(n.id), [n.id], s()),
        A = (0, f.Ks)(n.id),
        [D, S] = l.useState(w.query),
        _ = l.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && A(), (0, m.Ld)(n.id, { query: t });
            },
            [n.id, A],
        ),
        N = l.useMemo(() => o()(_, 300), [_]),
        P = l.useCallback(
            (e) => {
                S(e), N(e);
            },
            [N],
        ),
        V = l.useCallback(() => {
            S(""), _("");
        }, [_]);
    return (
        l.useImperativeHandle(t, () => ({
            resetSearchText() {
                S("");
            },
        })),
        (0, r.jsxs)("div", {
            className: x.db,
            children: [
                (0, r.jsx)("div", {
                    className: x.wL,
                    children: a
                        ? (0, r.jsx)(u.Heading, {
                              variant: "heading-md/medium",
                              children: h.intl.string(h.t.y12ALM),
                          })
                        : (0, r.jsx)(u.Heading, {
                              variant: "heading-md/medium",
                              children: h.intl.string(h.t.BUqwK8),
                          }),
                }),
                (0, r.jsx)("div", {
                    className: x.Rt,
                    children: (0, r.jsx)("div", {
                        className: x.wL,
                        children: (0, r.jsx)(u.IWV, {
                            size: "sm",
                            query: D,
                            placeholder: h.intl.string(h.t["NVoAM+"]),
                            onChange: P,
                            onClear: V,
                            autoComplete: "off",
                            inputProps: {
                                autoCapitalize: "none",
                                autoCorrect: "off",
                                spellCheck: "false",
                            },
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(u.YNO, {
                        targetElementRef: i,
                        animation: u.YNO.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: () =>
                            (0, r.jsx)(j.A, {
                                guildId: n.id,
                                onClose: void 0,
                            }),
                        children: (e) => {
                            let { onClick: t } = e,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        l,
                                        i = {};
                                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                                        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                            (r = n[l]),
                                                !(t.indexOf(r) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                    (i[r] = e[r]);
                                        return i;
                                    }
                                    if (
                                        ((i = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                l = {},
                                                i = Object.getOwnPropertyNames(e);
                                            for (r = 0; r < i.length; r++)
                                                (n = i[r]),
                                                    !(t.indexOf(n) >= 0) &&
                                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                        (l[n] = e[n]);
                                            return l;
                                        })(e, t)),
                                        Object.getOwnPropertySymbols)
                                    )
                                        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                            (r = n[l]),
                                                !(t.indexOf(r) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                    (i[r] = e[r]);
                                    return i;
                                })(e, ["onClick"]);
                            return (0, r.jsx)(
                                u.Button,
                                O(y({}, n), {
                                    buttonRef: i,
                                    text: h.intl.string(h.t.XvNMNk),
                                    onClick: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: u.JNJ,
                                }),
                            );
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: x.nw,
                    children:
                        v &&
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: x.__invalid_pruneButton,
                            children: (0, r.jsx)(u.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: h.intl.string(h.t["2mIlKQ"]),
                                onClick: H,
                                "aria-label": h.intl.string(h.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
});
