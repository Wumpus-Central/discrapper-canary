(n.d(t, { Z: () => I }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(893999),
    u = n(442837),
    d = n(846519),
    p = n(212605),
    m = n(755721),
    f = n(481060),
    b = n(100527),
    g = n(906732),
    j = n(70097),
    y = n(237617),
    h = n(318374),
    x = n(594174),
    v = n(962399),
    O = n(626135),
    C = n(823379),
    P = n(709054),
    w = n(39604),
    N = n(572720),
    E = n(981631),
    S = n(388032),
    k = n(20484),
    Z = n(954292);
function D(e) {
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
function L(e, t) {
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
let I = function (e) {
    var t, n, a;
    let { clip: o, exporting: s, actionsDisabled: c, isNew: p, onDelete: m, onEdit: j, onShare: v } = e,
        w = (0, u.Wu)([x.default], () => o.users.map((e) => x.default.getUser(e)).filter(C.lm)),
        { analyticsLocations: N } = (0, g.ZP)(b.Z.CLIPS_GALLERY_ITEM),
        [Z, D] = l.useState(!1),
        L = l.useRef(null),
        I = (0, y.Z)(null != (a = null == (t = o.editMetadata) ? void 0 : t.start) ? a : 0),
        _ = l.useRef(
            new d.sW(500, () => {
                var e;
                let t = L.current;
                null != t && t.paused && ((t.currentTime = I.current), null == (e = L.current) || e.play());
            })
        ),
        R = l.useCallback(() => {
            let e = L.current;
            null != e && (e.pause(), (e.src = ''));
        }, []),
        A = l.useCallback(() => {
            var e;
            (D(!0), null == (e = _.current) || e.delay());
        }, []),
        H = l.useCallback(() => {
            var e, t, n;
            D(!1);
            let r = L.current;
            (null == (e = _.current) || e.cancel(), null != r && (r.pause(), (r.currentTime = null != (n = null == (t = o.editMetadata) ? void 0 : t.start) ? n : 0)));
        }, [null == (n = o.editMetadata) ? void 0 : n.start]),
        V = l.useCallback(
            (e) => {
                var t, n;
                (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? void 0 : t.parentElement) !== e.currentTarget.parentElement && H();
            },
            [H]
        ),
        B = new Date(P.default.extractTimestamp(o.id)),
        F = B.toLocaleDateString(),
        G = B.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        }),
        Y = ''.concat(F, ' \u2022 ').concat(G);
    return (0, r.jsx)(g.Gt, {
        value: N,
        children: (0, r.jsxs)(f.kL8, {
            'aria-disabled': c,
            'aria-label': S.intl.string(S.t.bt75u7),
            onClick: c
                ? void 0
                : () => {
                      (j(o), O.default.track(E.rMx.CLIP_GALLERY_CARD_CLICKED));
                  },
            className: i()(k.clipItem, { [k.disabled]: c }),
            onBlur: V,
            onFocus: A,
            onMouseOver: A,
            onMouseLeave: H,
            children: [
                (0, r.jsx)(T, {
                    clip: o,
                    isNew: p,
                    videoRef: L
                }),
                (0, r.jsxs)('div', {
                    className: k.clipFooter,
                    children: [
                        (0, r.jsx)(M, {
                            clip: o,
                            focused: Z,
                            onFocus: A
                        }),
                        (0, r.jsx)(f.Text, {
                            className: k.clipMetadata,
                            color: 'text-default',
                            variant: 'text-md/medium',
                            children: o.applicationName
                        }),
                        (0, r.jsx)(f.Text, {
                            className: k.clipMetadata,
                            color: 'text-default',
                            variant: 'text-md/medium',
                            children: Y
                        }),
                        (0, r.jsxs)('div', {
                            className: k.usersAndDelete,
                            children: [
                                (0, r.jsx)(h.Z, {
                                    maxUsers: 4,
                                    users: w,
                                    onFocus: (e) => {
                                        var t, n, r, l;
                                        let a = e.relatedTarget,
                                            i = null == (n = e.currentTarget.parentElement) || null == (t = n.parentElement) ? void 0 : t.parentElement;
                                        (null == a ? void 0 : a.parentElement) !== i && (null == a || null == (l = a.parentElement) || null == (r = l.parentElement) ? void 0 : r.parentElement) !== i && A();
                                    }
                                }),
                                Z &&
                                    (0, r.jsx)(z, {
                                        clip: o,
                                        actionsDisabled: c,
                                        exporting: s,
                                        onBeforeDelete: R,
                                        onDelete: m,
                                        onEdit: j,
                                        onShare: v,
                                        onBlur: (e) => {
                                            var t;
                                            (null == (t = e.relatedTarget) ? void 0 : t.parentElement) !== e.currentTarget.parentElement && H();
                                        }
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
function T(e) {
    let { clip: t, isNew: n, videoRef: a } = e,
        i = 0 === t.length,
        [o, c] = l.useMemo(() => {
            let e = t.length,
                n = !1,
                r = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
            return (null != r && 1000 * r < t.length && ((e = 1000 * r), (n = !0)), [n, s().duration(e)]);
        }, [t.length, t.editMetadata]),
        u = ''.concat(c.seconds()).padStart(2, '0');
    return (0, r.jsxs)('div', {
        className: k.clipThumbContainer,
        children: [
            (0, r.jsx)(_, {
                clip: t,
                videoRef: a
            }),
            (0, r.jsxs)('div', {
                className: k.clipBadges,
                children: [
                    i &&
                        (0, r.jsx)('div', {
                            className: k.clipProcessingBadge,
                            children: (0, r.jsx)(f.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: S.intl.string(S.t['2Fp7OD'])
                            })
                        }),
                    !i &&
                        n &&
                        (0, r.jsxs)(f.Text, {
                            className: k.clipNewBadge,
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: [
                                (0, r.jsx)(f.T$Z, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: k.newIcon
                                }),
                                S.intl.string(S.t.y2b7CA).toUpperCase()
                            ]
                        }),
                    !i &&
                        (0, r.jsxs)('div', {
                            className: k.clipDurationBadge,
                            children: [
                                o ? (0, r.jsx)(v.Z, { className: k.clipDurationEditIcon }) : null,
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: ''.concat(c.minutes(), ':').concat(u)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
function M(e) {
    var t;
    let { clip: n, focused: a, onFocus: o } = e,
        [s, c] = l.useState(n.name),
        u = !n.name,
        [d, m] = l.useState(!1),
        [b, g] = l.useState(null != (t = n.name) ? t : ''),
        [j, y] = l.useState(!1),
        h = async () => {
            (y(!0), await (0, w.Tm)(n.id, { name: '' === b ? void 0 : b }), y(!1), m(!1));
        };
    return (l.useEffect(() => {
        if (s !== n.name) {
            var e;
            (c(n.name), g(null != (e = n.name) ? e : ''));
        }
    }, [n.name, s]),
    d)
        ? (0, r.jsx)(f.oil, {
              inputClassName: i()(Z['heading-lg/medium'], k.clipTitleInput),
              onClick: (e) => e.stopPropagation(),
              value: b,
              autoFocus: !0,
              onKeyDown: (e) => {
                  'Enter' === e.key && h();
              },
              disabled: j,
              onChange: g,
              onBlur: h
          })
        : (0, r.jsxs)(f.P3F, {
              className: k.clipTitleInputPlaceholder,
              onFocus: o,
              onClick: (e) => {
                  (e.stopPropagation(), m(!0));
              },
              children: [
                  u
                      ? (0, r.jsx)(f.X6q, {
                            className: k.clipTitle,
                            color: 'text-muted',
                            variant: 'heading-lg/medium',
                            children: S.intl.string(S.t['x+/nmJ'])
                        })
                      : (0, r.jsx)(f.X6q, {
                            className: k.clipTitle,
                            color: 'text-default',
                            variant: 'heading-lg/medium',
                            children: n.name
                        }),
                  a &&
                      (0, r.jsx)(f.vdY, {
                          size: 'custom',
                          'aria-label': S.intl.string(S.t.bt75u7),
                          color: f.TVs.colors.TEXT_MUTED,
                          height: p.Z.sm,
                          width: p.Z.sm,
                          className: k.clipTitleIcon
                      })
              ]
          });
}
function _(e) {
    let { clip: t, videoRef: n } = e,
        l = (0, N.l)(t);
    return 0 === t.length
        ? (0, r.jsx)(f.$jN, {
              type: f.RAz.SPINNING_CIRCLE_SIMPLE,
              className: k.clipThumb
          })
        : null != l
          ? (0, r.jsx)(j.Z, {
                preload: 'metadata',
                muted: !0,
                poster: t.thumbnail,
                src: l,
                loop: !0,
                className: k.clipThumb,
                ref: n
            })
          : (0, r.jsx)('img', {
                alt: '',
                src: t.thumbnail,
                className: k.clipThumb
            });
}
function z(e) {
    let { clip: t, exporting: n, actionsDisabled: a, onBeforeDelete: i, onDelete: o, onEdit: s, onShare: u, onBlur: d } = e,
        p = (0, c.Z)(),
        b = l.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? (i(), (0, w.sS)(t.filepath)) : o(t, i), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'delete' }));
            },
            [o, i, t]
        ),
        g = l.useCallback(
            (e) => {
                (e.stopPropagation(), s(t), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'edit' }));
            },
            [s, t]
        ),
        j = l.useCallback(
            (e) => {
                (e.stopPropagation(), u(t), O.default.track(E.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'share' }));
            },
            [u, t]
        );
    return (0, r.jsxs)('div', {
        className: k.buttonContainer,
        children: [
            null != o &&
                (0, r.jsx)(f.ua7, {
                    text: S.intl.string(S.t.oyYWHB),
                    children: (e) =>
                        (0, r.jsx)(
                            m.zx,
                            L(D({}, e), {
                                disabled: a,
                                color: p ? m.zx.Colors.RED : m.zx.Colors.PRIMARY,
                                onClick: b,
                                className: k.button,
                                size: m.zx.Sizes.NONE,
                                look: m.zx.Looks.FILLED,
                                children: (0, r.jsx)(f.XHJ, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: k.miniIcon
                                })
                            })
                        )
                }),
            (0, r.jsx)(f.ua7, {
                text: S.intl.string(S.t.bt75u7),
                children: (e) =>
                    (0, r.jsx)(
                        m.zx,
                        L(D({}, e), {
                            disabled: a,
                            color: m.zx.Colors.PRIMARY,
                            onClick: g,
                            className: k.button,
                            size: m.zx.Sizes.NONE,
                            look: m.zx.Looks.FILLED,
                            children: (0, r.jsx)(v.Z, { className: k.miniIcon })
                        })
                    )
            }),
            (0, r.jsx)(f.ua7, {
                text: S.intl.string(S.t.RDE0SU),
                children: (e) => {
                    var { onBlur: t } = e,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        l = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                                    return l;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
                            }
                            return l;
                        })(e, ['onBlur']);
                    return (0, r.jsx)(
                        m.zx,
                        L(D({}, l), {
                            disabled: a && !n,
                            submitting: n,
                            color: m.zx.Colors.BRAND,
                            onBlur: (e) => {
                                (d(e), null == t || t());
                            },
                            onClick: j,
                            className: k.button,
                            size: m.zx.Sizes.NONE,
                            look: m.zx.Looks.FILLED,
                            children: (0, r.jsx)(f.aAc, {
                                size: 'lg',
                                color: 'currentColor',
                                className: k.miniIcon
                            })
                        })
                    );
                }
            })
        ]
    });
}
