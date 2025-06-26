n.d(t, { Z: () => w }), n(388685), n(781311);
var r = n(255367),
    l = n(73800),
    o = n(954955),
    i = n.n(o),
    a = n(498607),
    s = n.n(a),
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
    O = n(388032),
    y = n(630620);
function _(e) {
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
function H(e, t) {
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
let w = l.forwardRef(function (e, t) {
    let { guild: n } = e,
        o = l.useRef(null),
        a = (0, u.e7)([j.Z], () => j.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]),
        w = (0, u.e7)([b.Z], () => (0, d.wj)(b.Z.theme)),
        N = (0, u.e7)([p.Z], () => p.Z.can(c.$e(v.Pl.MANAGE_GUILD, v.Pl.KICK_MEMBERS), n)),
        S = l.useCallback(() => {
            null != n && N && (0, C.ZDy)(async () => (e) => (0, r.jsx)(m.Z, H(_({}, e), { guild: n })));
        }, [n, N]),
        D = (0, u.e7)([j.Z], () => j.Z.getSearchStateByGuildId(n.id), [n.id], s()),
        Z = (0, f.gm)(n.id),
        [L, R] = l.useState(D.query),
        I = null != D.selectedSort && D.selectedSort !== h.d$.ORDER_BY_GUILD_JOINED_AT_DESC && D.selectedSort !== h.d$.ORDER_BY_UNSPECIFIED,
        P = l.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && Z(), (0, g.Dr)(n.id, { query: t });
            },
            [n.id, Z]
        ),
        M = l.useMemo(() => i()(P, 300), [P]),
        V = l.useCallback(
            (e) => {
                R(e), M(e);
            },
            [M]
        ),
        E = l.useCallback(() => {
            R(''), P('');
        }, [P]);
    return (
        l.useImperativeHandle(t, () => ({
            resetSearchText() {
                R('');
            }
        })),
        (0, r.jsxs)('div', {
            className: y.searchHeaderContainer,
            children: [
                (0, r.jsx)('div', {
                    className: y.searchHeader,
                    children: a
                        ? (0, r.jsx)(C.X6q, {
                              variant: 'heading-md/medium',
                              children: O.intl.string(O.t.y12ALC)
                          })
                        : (0, r.jsx)(C.X6q, {
                              variant: 'heading-md/medium',
                              children: O.intl.string(O.t.BUqwKy)
                          })
                }),
                (0, r.jsx)('div', {
                    className: y.searchInput,
                    children: (0, r.jsx)('div', {
                        className: y.searchHeader,
                        children: (0, r.jsx)(C.E1j, {
                            className: y.searchBar,
                            query: L,
                            placeholder: O.intl.string(O.t.NVoAMz),
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
                    children: (0, r.jsx)(C.yRy, {
                        targetElementRef: o,
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
                                H(_({}, n), {
                                    buttonRef: o,
                                    onClick: t,
                                    'aria-label': O.intl.string(O.t.XvNMNj),
                                    color: w ? C.zxk.Colors.PRIMARY : C.zxk.Colors.TRANSPARENT,
                                    look: w ? C.zxk.Looks.FILLED : C.zxk.Looks.OUTLINED,
                                    size: C.zxk.Sizes.SMALL,
                                    children: (0, r.jsxs)('div', {
                                        className: y.sortButton,
                                        children: [
                                            (0, r.jsx)(C.uVW, {
                                                size: 'xs',
                                                color: I ? C.TVs.colors.INTERACTIVE_ACTIVE.css : C.TVs.colors.HEADER_SECONDARY.css
                                            }),
                                            (0, r.jsx)(C.Text, {
                                                variant: 'text-sm/medium',
                                                color: I ? 'interactive-active' : 'header-secondary',
                                                className: y.sortText,
                                                children: O.intl.string(O.t.XvNMNj)
                                            })
                                        ]
                                    })
                                })
                            );
                        }
                    })
                }),
                (0, r.jsx)('div', {
                    className: y.tableOptions,
                    children:
                        N &&
                        (0, r.jsx)(C.zxk, {
                            className: y.__invalid_pruneButton,
                            onClick: S,
                            'aria-label': O.intl.string(O.t.zbyz7u),
                            color: C.zxk.Colors.RED,
                            look: C.zxk.Looks.OUTLINED,
                            size: C.zxk.Sizes.SMALL,
                            children: O.intl.string(O.t['2mIlKS'])
                        })
                })
            ]
        })
    );
});
