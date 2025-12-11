n.d(t, { Z: () => O }), n(388685), n(781311);
var r = n(54381),
    l = n(473749),
    i = n(954955),
    a = n.n(i),
    o = n(498607),
    s = n.n(o),
    c = n(149765),
    d = n(399606),
    u = n(481060),
    C = n(496675),
    m = n(910693),
    b = n(893966),
    f = n(527379),
    p = n(446535),
    h = n(855935),
    g = n(231338),
    j = n(388032),
    x = n(6306);
function v(e) {
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
function y(e, t) {
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
let O = l.forwardRef(function (e, t) {
    let { guild: n } = e,
        i = l.useRef(null),
        o = (0, d.e7)([b.Z], () => b.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]),
        O = (0, d.e7)([C.Z], () => C.Z.can(c.$e(g.Pl.MANAGE_GUILD, g.Pl.KICK_MEMBERS), n)),
        H = l.useCallback(() => {
            null != n && O && (0, u.ZDy)(async () => (e) => (0, r.jsx)(p.Z, y(v({}, e), { guild: n })));
        }, [n, O]),
        w = (0, d.e7)([b.Z], () => b.Z.getSearchStateByGuildId(n.id), [n.id], s()),
        S = (0, m.gm)(n.id),
        [Z, D] = l.useState(w.query),
        N = l.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && S(), (0, f.Dr)(n.id, { query: t });
            },
            [n.id, S],
        ),
        _ = l.useMemo(() => a()(N, 300), [N]),
        R = l.useCallback(
            (e) => {
                D(e), _(e);
            },
            [_],
        ),
        L = l.useCallback(() => {
            D(""), N("");
        }, [N]);
    return (
        l.useImperativeHandle(t, () => ({
            resetSearchText() {
                D("");
            },
        })),
        (0, r.jsxs)("div", {
            className: x.searchHeaderContainer,
            children: [
                (0, r.jsx)("div", {
                    className: x.searchHeader,
                    children: o
                        ? (0, r.jsx)(u.Heading, {
                              variant: "heading-md/medium",
                              children: j.intl.string(j.t.y12ALM),
                          })
                        : (0, r.jsx)(u.Heading, {
                              variant: "heading-md/medium",
                              children: j.intl.string(j.t.BUqwK8),
                          }),
                }),
                (0, r.jsx)("div", {
                    className: x.searchInput,
                    children: (0, r.jsx)("div", {
                        className: x.searchHeader,
                        children: (0, r.jsx)(u.E1j, {
                            size: "sm",
                            query: Z,
                            placeholder: j.intl.string(j.t["NVoAM+"]),
                            onChange: R,
                            onClear: L,
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
                    children: (0, r.jsx)(u.yRy, {
                        targetElementRef: i,
                        animation: u.yRy.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: () =>
                            (0, r.jsx)(h.Z, {
                                guildId: n.id,
                                onClose: void 0,
                            }),
                        children: (e) => {
                            var { onClick: t } = e,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                l = {},
                                                i = Object.keys(e);
                                            for (r = 0; r < i.length; r++)
                                                (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                            return l;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < i.length; r++)
                                            (n = i[r]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (l[n] = e[n]);
                                    }
                                    return l;
                                })(e, ["onClick"]);
                            return (0, r.jsx)(
                                u.Button,
                                y(v({}, n), {
                                    buttonRef: i,
                                    text: j.intl.string(j.t.XvNMNk),
                                    onClick: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: u.uVW,
                                }),
                            );
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: x.tableOptions,
                    children:
                        O &&
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: x.__invalid_pruneButton,
                            children: (0, r.jsx)(u.Button, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: j.intl.string(j.t["2mIlKQ"]),
                                onClick: H,
                                "aria-label": j.intl.string(j.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
});
