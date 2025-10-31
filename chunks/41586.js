n.d(t, { Z: () => O }), n(388685), n(781311);
var r = n(951288),
    l = n(647438),
    i = n(954955),
    o = n.n(i),
    a = n(498607),
    s = n.n(a),
    c = n(149765),
    u = n(399606),
    d = n(481060),
    C = n(102560),
    m = n(496675),
    b = n(910693),
    p = n(893966),
    f = n(527379),
    h = n(855935),
    g = n(231338),
    j = n(388032),
    x = n(124831);
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
        a = (0, u.e7)([p.Z], () => p.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]),
        O = (0, u.e7)([m.Z], () => m.Z.can(c.$e(g.Pl.MANAGE_GUILD, g.Pl.KICK_MEMBERS), n)),
        H = l.useCallback(() => {
            null != n && O && (0, d.ZDy)(async () => (e) => (0, r.jsx)(C.Z, y(v({}, e), { guild: n })));
        }, [n, O]),
        _ = (0, u.e7)([p.Z], () => p.Z.getSearchStateByGuildId(n.id), [n.id], s()),
        w = (0, b.gm)(n.id),
        [S, Z] = l.useState(_.query),
        N = l.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && w(), (0, f.Dr)(n.id, { query: t });
            },
            [n.id, w],
        ),
        D = l.useMemo(() => o()(N, 300), [N]),
        R = l.useCallback(
            (e) => {
                Z(e), D(e);
            },
            [D],
        ),
        L = l.useCallback(() => {
            Z(""), N("");
        }, [N]);
    return (
        l.useImperativeHandle(t, () => ({
            resetSearchText() {
                Z("");
            },
        })),
        (0, r.jsxs)("div", {
            className: x.searchHeaderContainer,
            children: [
                (0, r.jsx)("div", {
                    className: x.searchHeader,
                    children: a
                        ? (0, r.jsx)(d.Heading, {
                              variant: "heading-md/medium",
                              children: j.intl.string(j.t.y12ALM),
                          })
                        : (0, r.jsx)(d.Heading, {
                              variant: "heading-md/medium",
                              children: j.intl.string(j.t.BUqwK8),
                          }),
                }),
                (0, r.jsx)("div", {
                    className: x.searchInput,
                    children: (0, r.jsx)("div", {
                        className: x.searchHeader,
                        children: (0, r.jsx)(d.E1j, {
                            size: "sm",
                            query: S,
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
                    children: (0, r.jsx)(d.yRy, {
                        targetElementRef: i,
                        animation: d.yRy.Animation.FADE,
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
                                d.Button,
                                y(v({}, n), {
                                    buttonRef: i,
                                    text: j.intl.string(j.t.XvNMNk),
                                    onClick: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: d.uVW,
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
                            children: (0, r.jsx)(d.Button, {
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
