(n.d(t, { Z: () => N }), n(388685), n(781311));
var r = n(255367),
    l = n(73800),
    o = n(954955),
    i = n.n(o),
    a = n(498607),
    s = n.n(a),
    c = n(149765),
    u = n(399606),
    d = n(780384),
    C = n(755721),
    m = n(481060),
    b = n(102560),
    p = n(210887),
    f = n(496675),
    h = n(910693),
    j = n(588215),
    g = n(893966),
    x = n(527379),
    v = n(855935),
    y = n(231338),
    O = n(388032),
    _ = n(630620);
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let N = l.forwardRef(function (e, t) {
    let { guild: n } = e,
        o = l.useRef(null),
        a = (0, u.e7)([g.Z], () => g.Z.hasDefaultSearchStateByGuildId(n.id), [n.id]),
        N = (0, u.e7)([p.Z], () => (0, d.wj)(p.Z.theme)),
        S = (0, u.e7)([f.Z], () => f.Z.can(c.$e(y.Pl.MANAGE_GUILD, y.Pl.KICK_MEMBERS), n)),
        D = l.useCallback(() => {
            null != n && S && (0, m.ZDy)(async () => (e) => (0, r.jsx)(b.Z, w(H({}, e), { guild: n })));
        }, [n, S]),
        Z = (0, u.e7)([g.Z], () => g.Z.getSearchStateByGuildId(n.id), [n.id], s()),
        R = (0, h.gm)(n.id),
        [L, I] = l.useState(Z.query),
        P = null != Z.selectedSort && Z.selectedSort !== j.d$.ORDER_BY_GUILD_JOINED_AT_DESC && Z.selectedSort !== j.d$.ORDER_BY_UNSPECIFIED,
        M = l.useCallback(
            (e) => {
                let t = e.trim();
                (t.length > 0 && R(), (0, x.Dr)(n.id, { query: t }));
            },
            [n.id, R]
        ),
        V = l.useMemo(() => i()(M, 300), [M]),
        E = l.useCallback(
            (e) => {
                (I(e), V(e));
            },
            [V]
        ),
        T = l.useCallback(() => {
            (I(''), M(''));
        }, [M]);
    return (
        l.useImperativeHandle(t, () => ({
            resetSearchText() {
                I('');
            }
        })),
        (0, r.jsxs)('div', {
            className: _.searchHeaderContainer,
            children: [
                (0, r.jsx)('div', {
                    className: _.searchHeader,
                    children: a
                        ? (0, r.jsx)(m.X6q, {
                              variant: 'heading-md/medium',
                              children: O.intl.string(O.t.y12ALC)
                          })
                        : (0, r.jsx)(m.X6q, {
                              variant: 'heading-md/medium',
                              children: O.intl.string(O.t.BUqwKy)
                          })
                }),
                (0, r.jsx)('div', {
                    className: _.searchInput,
                    children: (0, r.jsx)('div', {
                        className: _.searchHeader,
                        children: (0, r.jsx)(m.E1j, {
                            className: _.searchBar,
                            query: L,
                            placeholder: O.intl.string(O.t.NVoAMz),
                            onChange: E,
                            onClear: T,
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
                    children: (0, r.jsx)(m.yRy, {
                        targetElementRef: o,
                        animation: m.yRy.Animation.FADE,
                        position: 'bottom',
                        spacing: 4,
                        align: 'left',
                        renderPopout: () =>
                            (0, r.jsx)(v.Z, {
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
                                            for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                                            return l;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                                    }
                                    return l;
                                })(e, ['onClick']);
                            return (0, r.jsx)(
                                C.zx,
                                w(H({}, n), {
                                    buttonRef: o,
                                    onClick: t,
                                    'aria-label': O.intl.string(O.t.XvNMNj),
                                    color: N ? C.zx.Colors.PRIMARY : C.zx.Colors.TRANSPARENT,
                                    look: N ? C.zx.Looks.FILLED : C.zx.Looks.OUTLINED,
                                    size: C.zx.Sizes.SMALL,
                                    children: (0, r.jsxs)('div', {
                                        className: _.sortButton,
                                        children: [
                                            (0, r.jsx)(m.uVW, {
                                                size: 'xs',
                                                color: P ? m.TVs.colors.INTERACTIVE_ACTIVE.css : m.TVs.colors.HEADER_SECONDARY.css
                                            }),
                                            (0, r.jsx)(m.Text, {
                                                variant: 'text-sm/medium',
                                                color: P ? 'interactive-active' : 'header-secondary',
                                                className: _.sortText,
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
                    className: _.tableOptions,
                    children:
                        S &&
                        (0, r.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: _.__invalid_pruneButton,
                            children: (0, r.jsx)(m.zxk, {
                                variant: 'critical-secondary',
                                size: 'sm',
                                text: O.intl.string(O.t['2mIlKS']),
                                onClick: D,
                                'aria-label': O.intl.string(O.t.zbyz7u)
                            })
                        })
                })
            ]
        })
    );
});
