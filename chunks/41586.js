n.d(t, { Z: () => H }), n(47120), n(566702);
var r = n(200651),
    l = n(192379),
    o = n(954955),
    a = n.n(o),
    i = n(498607),
    s = n.n(i),
    c = n(149765),
    u = n(399606),
    d = n(780384),
    C = n(481060),
    m = n(102560),
    b = n(210887),
    p = n(496675),
    f = n(910693),
    h = n(588215),
    j = n(893966),
    g = n(527379),
    x = n(855935),
    v = n(231338),
    y = n(388032),
    O = n(873746);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e, t) {
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
let H = l.forwardRef(function (e, t) {
    let { guild: n } = e,
        o = (0, u.e7)([j.Z], () => j.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]),
        i = (0, u.e7)([b.Z], () => (0, d.wj)(b.Z.theme)),
        H = (0, u.e7)([p.Z], () => p.Z.can(c.$e(v.Pl.MANAGE_GUILD, v.Pl.KICK_MEMBERS), n)),
        w = l.useCallback(() => {
            null != n && H && (0, C.ZDy)(async () => (e) => (0, r.jsx)(m.Z, _(N({}, e), { guild: n })));
        }, [n, H]),
        S = (0, u.e7)([j.Z], () => j.Z.getSearchStateByGuildId(n.id), [n.id], s()),
        D = (0, f.gm)(n.id),
        [Z, L] = l.useState(S.query),
        I = null != S.selectedSort && S.selectedSort !== h.d$.ORDER_BY_GUILD_JOINED_AT_DESC && S.selectedSort !== h.d$.ORDER_BY_UNSPECIFIED,
        R = l.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && D(), (0, g.Dr)(n.id, { query: t });
            },
            [n.id, D]
        ),
        P = l.useMemo(() => a()(R, 300), [R]),
        M = l.useCallback(
            (e) => {
                L(e), P(e);
            },
            [P]
        ),
        V = l.useCallback(() => {
            L(''), R('');
        }, [R]);
    return (
        l.useImperativeHandle(t, () => ({
            resetSearchText() {
                L('');
            }
        })),
        (0, r.jsxs)('div', {
            className: O.searchHeaderContainer,
            children: [
                (0, r.jsx)('div', {
                    className: O.searchHeader,
                    children: o
                        ? (0, r.jsx)(C.X6q, {
                              variant: 'heading-md/medium',
                              children: y.NW.string(y.t.y12ALC)
                          })
                        : (0, r.jsx)(C.X6q, {
                              variant: 'heading-md/medium',
                              children: y.NW.string(y.t.BUqwKy)
                          })
                }),
                (0, r.jsx)('div', {
                    className: O.searchInput,
                    children: (0, r.jsx)('div', {
                        className: O.searchHeader,
                        children: (0, r.jsx)(C.E1j, {
                            className: O.searchBar,
                            query: Z,
                            placeholder: y.NW.string(y.t.NVoAMz),
                            onChange: M,
                            onClear: V,
                            autoComplete: 'off',
                            inputProps: {
                                autoCapitalize: 'none',
                                autoCorrect: 'off',
                                spellCheck: 'false'
                            }
                        })
                    })
                }),
                (0, r.jsx)('div', {
                    children: (0, r.jsx)(C.yRy, {
                        animation: C.yRy.Animation.FADE,
                        position: 'bottom',
                        spacing: 4,
                        align: 'left',
                        renderPopout: () =>
                            (0, r.jsx)(x.Z, {
                                guildId: n.id,
                                onClose: void 0
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
                                                o = Object.keys(e);
                                            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                            return l;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                                    }
                                    return l;
                                })(e, ['onClick']);
                            return (0, r.jsx)(
                                C.zxk,
                                _(N({}, n), {
                                    onClick: t,
                                    'aria-label': y.NW.string(y.t.XvNMNj),
                                    color: i ? C.zxk.Colors.PRIMARY : C.zxk.Colors.TRANSPARENT,
                                    look: i ? C.zxk.Looks.FILLED : C.zxk.Looks.OUTLINED,
                                    size: C.zxk.Sizes.SMALL,
                                    children: (0, r.jsxs)('div', {
                                        className: O.sortButton,
                                        children: [
                                            (0, r.jsx)(C.uVW, {
                                                size: 'xs',
                                                color: I ? C.TVs.colors.INTERACTIVE_ACTIVE.css : C.TVs.colors.HEADER_SECONDARY.css
                                            }),
                                            (0, r.jsx)(C.Text, {
                                                variant: 'text-sm/medium',
                                                color: I ? 'interactive-active' : 'header-secondary',
                                                className: O.sortText,
                                                children: y.NW.string(y.t.XvNMNj)
                                            })
                                        ]
                                    })
                                })
                            );
                        }
                    })
                }),
                (0, r.jsx)('div', {
                    className: O.tableOptions,
                    children:
                        H &&
                        (0, r.jsx)(C.zxk, {
                            className: O.__invalid_pruneButton,
                            onClick: w,
                            'aria-label': y.NW.string(y.t.zbyz7u),
                            color: C.zxk.Colors.RED,
                            look: C.zxk.Looks.OUTLINED,
                            size: C.zxk.Sizes.SMALL,
                            children: y.NW.string(y.t['2mIlKS'])
                        })
                })
            ]
        })
    );
});
