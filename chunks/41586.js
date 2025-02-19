n.d(t, { Z: () => S }), n(47120), n(566702);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(954955),
    s = n.n(i),
    c = n(498607),
    u = n.n(c),
    d = n(149765),
    C = n(399606),
    m = n(780384),
    b = n(481060),
    p = n(102560),
    f = n(210887),
    h = n(496675),
    j = n(910693),
    g = n(588215),
    x = n(893966),
    v = n(527379),
    y = n(855935),
    O = n(231338),
    N = n(388032),
    _ = n(115198);
function H(e) {
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
function w(e, t) {
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
let S = l.forwardRef(function (e, t) {
    let { guild: n } = e,
        o = (0, C.e7)([x.Z], () => x.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]),
        i = (0, C.e7)([f.Z], () => (0, m.wj)(f.Z.theme)),
        c = (0, C.e7)([h.Z], () => h.Z.can(d.$e(O.Pl.MANAGE_GUILD, O.Pl.KICK_MEMBERS), n)),
        S = l.useCallback(() => {
            null != n && c && (0, b.ZDy)(async () => (e) => (0, r.jsx)(p.Z, w(H({}, e), { guild: n })));
        }, [n, c]),
        D = (0, C.e7)([x.Z], () => x.Z.getSearchStateByGuildId(n.id), [n.id], u()),
        Z = (0, j.gm)(n.id),
        [L, I] = l.useState(D.query),
        R = null != D.selectedSort && D.selectedSort !== g.d$.ORDER_BY_GUILD_JOINED_AT_DESC && D.selectedSort !== g.d$.ORDER_BY_UNSPECIFIED,
        P = l.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && Z(), (0, v.Dr)(n.id, { query: t });
            },
            [n.id, Z]
        ),
        M = l.useMemo(() => s()(P, 300), [P]),
        V = l.useCallback(
            (e) => {
                I(e), M(e);
            },
            [M]
        ),
        E = l.useCallback(() => {
            I(''), P('');
        }, [P]);
    return (
        l.useImperativeHandle(t, () => ({
            resetSearchText() {
                I('');
            }
        })),
        (0, r.jsxs)('div', {
            className: a()(_.searchHeaderContainer),
            children: [
                (0, r.jsx)('div', {
                    className: a()(_.searchHeader),
                    children: o
                        ? (0, r.jsx)(b.X6q, {
                              variant: 'heading-md/medium',
                              children: N.NW.string(N.t.y12ALC)
                          })
                        : (0, r.jsx)(b.X6q, {
                              variant: 'heading-md/medium',
                              children: N.NW.string(N.t.BUqwKy)
                          })
                }),
                (0, r.jsx)('div', {
                    className: a()(_.searchInput),
                    children: (0, r.jsx)('div', {
                        className: a()(_.searchHeader),
                        children: (0, r.jsx)(b.E1j, {
                            className: _.searchBar,
                            query: L,
                            placeholder: N.NW.string(N.t.NVoAMz),
                            onChange: V,
                            onClear: E,
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
                    children: (0, r.jsx)(b.yRy, {
                        animation: b.yRy.Animation.FADE,
                        position: 'bottom',
                        spacing: 4,
                        align: 'left',
                        renderPopout: () =>
                            (0, r.jsx)(y.Z, {
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
                                b.zxk,
                                w(H({}, n), {
                                    onClick: t,
                                    'aria-label': N.NW.string(N.t.XvNMNj),
                                    color: i ? b.zxk.Colors.PRIMARY : b.zxk.Colors.TRANSPARENT,
                                    look: i ? b.zxk.Looks.FILLED : b.zxk.Looks.OUTLINED,
                                    size: b.zxk.Sizes.SMALL,
                                    children: (0, r.jsxs)('div', {
                                        className: _.sortButton,
                                        children: [
                                            (0, r.jsx)(b.uVW, {
                                                size: 'xs',
                                                color: R ? b.TVs.colors.INTERACTIVE_ACTIVE.css : b.TVs.colors.HEADER_SECONDARY.css
                                            }),
                                            (0, r.jsx)(b.Text, {
                                                variant: 'text-sm/medium',
                                                color: R ? 'interactive-active' : 'header-secondary',
                                                className: _.sortText,
                                                children: N.NW.string(N.t.XvNMNj)
                                            })
                                        ]
                                    })
                                })
                            );
                        }
                    })
                }),
                (0, r.jsx)('div', {
                    className: a()(_.tableOptions),
                    children:
                        c &&
                        (0, r.jsx)(b.zxk, {
                            className: a()(_.__invalid_pruneButton),
                            onClick: S,
                            'aria-label': N.NW.string(N.t.zbyz7u),
                            color: b.zxk.Colors.RED,
                            look: b.zxk.Looks.OUTLINED,
                            size: b.zxk.Sizes.SMALL,
                            children: N.NW.string(N.t['2mIlKS'])
                        })
                })
            ]
        })
    );
});
