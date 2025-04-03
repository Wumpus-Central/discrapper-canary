n.d(t, { Z: () => L }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(846519),
    d = n(212605),
    p = n(481060),
    m = n(100527),
    f = n(906732),
    b = n(70097),
    g = n(237617),
    j = n(318374),
    h = n(717680),
    y = n(594174),
    x = n(962399),
    v = n(626135),
    O = n(823379),
    C = n(709054),
    N = n(39604),
    P = n(572720),
    k = n(981631),
    w = n(388032),
    E = n(20484),
    S = n(954292);
function Z(e) {
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
function D(e, t) {
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
let L = function (e) {
    var t, n, a;
    let { clip: o, exporting: s, actionsDisabled: d, isNew: b, onDelete: h, onEdit: x, onShare: N } = e,
        P = (0, c.Wu)([y.default], () => o.users.map((e) => y.default.getUser(e)).filter(O.lm)),
        { analyticsLocations: S } = (0, f.ZP)(m.Z.CLIPS_GALLERY_ITEM),
        [Z, D] = l.useState(!1),
        L = l.useRef(null),
        M = (0, g.Z)(null != (a = null == (t = o.editMetadata) ? void 0 : t.start) ? a : 0),
        z = l.useRef(
            new u.sW(500, () => {
                var e;
                let t = L.current;
                null != t && t.paused && ((t.currentTime = M.current), null == (e = L.current) || e.play());
            })
        ),
        R = l.useCallback(() => {
            let e = L.current;
            null != e && (e.pause(), (e.src = ''));
        }, []),
        A = l.useCallback(() => {
            var e;
            D(!0), null == (e = z.current) || e.delay();
        }, []),
        H = l.useCallback(() => {
            var e, t, n;
            D(!1);
            let r = L.current;
            null == (e = z.current) || e.cancel(), null != r && (r.pause(), (r.currentTime = null != (n = null == (t = o.editMetadata) ? void 0 : t.start) ? n : 0));
        }, [null == (n = o.editMetadata) ? void 0 : n.start]),
        V = l.useCallback(
            (e) => {
                var t, n;
                (null == (n = e.relatedTarget) || null == (t = n.parentElement) ? void 0 : t.parentElement) !== e.currentTarget.parentElement && H();
            },
            [H]
        ),
        W = new Date(C.default.extractTimestamp(o.id)),
        B = W.toLocaleDateString(),
        F = W.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        }),
        Y = ''.concat(B, ' \u2022 ').concat(F);
    return (0, r.jsx)(f.Gt, {
        value: S,
        children: (0, r.jsxs)(p.kL8, {
            'aria-disabled': d,
            'aria-label': w.NW.string(w.t.bt75u7),
            onClick: d
                ? void 0
                : () => {
                      x(o), v.default.track(k.rMx.CLIP_GALLERY_CARD_CLICKED);
                  },
            className: i()(E.clipItem, { [E.disabled]: d }),
            onBlur: V,
            onFocus: A,
            onMouseOver: A,
            onMouseLeave: H,
            children: [
                (0, r.jsx)(I, {
                    clip: o,
                    isNew: b,
                    videoRef: L
                }),
                (0, r.jsxs)('div', {
                    className: E.clipFooter,
                    children: [
                        (0, r.jsx)(T, {
                            clip: o,
                            focused: Z,
                            onFocus: A
                        }),
                        (0, r.jsx)(p.Text, {
                            className: E.clipMetadata,
                            color: 'text-normal',
                            variant: 'text-md/medium',
                            children: o.applicationName
                        }),
                        (0, r.jsx)(p.Text, {
                            className: E.clipMetadata,
                            color: 'text-normal',
                            variant: 'text-md/medium',
                            children: Y
                        }),
                        (0, r.jsxs)('div', {
                            className: E.usersAndDelete,
                            children: [
                                (0, r.jsx)(j.Z, {
                                    maxUsers: 4,
                                    users: P,
                                    onFocus: (e) => {
                                        var t, n, r, l;
                                        let a = e.relatedTarget,
                                            i = null == (n = e.currentTarget.parentElement) || null == (t = n.parentElement) ? void 0 : t.parentElement;
                                        (null == a ? void 0 : a.parentElement) !== i && (null == a || null == (l = a.parentElement) || null == (r = l.parentElement) ? void 0 : r.parentElement) !== i && A();
                                    }
                                }),
                                Z &&
                                    (0, r.jsx)(_, {
                                        clip: o,
                                        actionsDisabled: d,
                                        exporting: s,
                                        onBeforeDelete: R,
                                        onDelete: h,
                                        onEdit: x,
                                        onShare: N,
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
function I(e) {
    let { clip: t, isNew: n, videoRef: a } = e,
        i = 0 === t.length,
        [o, c] = l.useMemo(() => {
            let e = t.length,
                n = !1,
                r = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
            return null != r && 1000 * r < t.length && ((e = 1000 * r), (n = !0)), [n, s().duration(e)];
        }, [t.length, t.editMetadata]),
        u = ''.concat(c.seconds()).padStart(2, '0');
    return (0, r.jsxs)('div', {
        className: E.clipThumbContainer,
        children: [
            (0, r.jsx)(M, {
                clip: t,
                videoRef: a
            }),
            (0, r.jsxs)('div', {
                className: E.clipBadges,
                children: [
                    i &&
                        (0, r.jsx)('div', {
                            className: E.clipProcessingBadge,
                            children: (0, r.jsx)(p.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: w.NW.string(w.t['2Fp7OD'])
                            })
                        }),
                    !i &&
                        n &&
                        (0, r.jsxs)(p.Text, {
                            className: E.clipNewBadge,
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: [
                                (0, r.jsx)(p.T$Z, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: E.newIcon
                                }),
                                w.NW.string(w.t.y2b7CA).toUpperCase()
                            ]
                        }),
                    !i &&
                        (0, r.jsxs)('div', {
                            className: E.clipDurationBadge,
                            children: [
                                o ? (0, r.jsx)(x.Z, { className: E.clipDurationEditIcon }) : null,
                                (0, r.jsx)(p.Text, {
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
function T(e) {
    var t;
    let { clip: n, focused: a, onFocus: o } = e,
        [s, c] = l.useState(n.name),
        u = !n.name,
        [m, f] = l.useState(!1),
        [b, g] = l.useState(null != (t = n.name) ? t : ''),
        [j, h] = l.useState(!1),
        y = async () => {
            h(!0), await (0, N.Tm)(n.id, { name: '' === b ? void 0 : b }), h(!1), f(!1);
        };
    return (l.useEffect(() => {
        if (s !== n.name) {
            var e;
            c(n.name), g(null != (e = n.name) ? e : '');
        }
    }, [n.name, s]),
    m)
        ? (0, r.jsx)(p.oil, {
              inputClassName: i()(S['heading-lg/medium'], E.clipTitleInput),
              onClick: (e) => e.stopPropagation(),
              value: b,
              autoFocus: !0,
              onKeyDown: (e) => {
                  'Enter' === e.key && y();
              },
              disabled: j,
              onChange: g,
              onBlur: y
          })
        : (0, r.jsxs)(p.P3F, {
              className: E.clipTitleInputPlaceholder,
              onFocus: o,
              onClick: (e) => {
                  e.stopPropagation(), f(!0);
              },
              children: [
                  u
                      ? (0, r.jsx)(p.X6q, {
                            className: E.clipTitle,
                            color: 'text-muted',
                            variant: 'heading-lg/medium',
                            children: w.NW.string(w.t['x+/nmJ'])
                        })
                      : (0, r.jsx)(p.X6q, {
                            className: E.clipTitle,
                            color: 'text-normal',
                            variant: 'heading-lg/medium',
                            children: n.name
                        }),
                  a &&
                      (0, r.jsx)(p.vdY, {
                          size: 'custom',
                          'aria-label': w.NW.string(w.t.bt75u7),
                          color: p.TVs.colors.TEXT_MUTED,
                          height: d.Z.sm,
                          width: d.Z.sm,
                          className: E.clipTitleIcon
                      })
              ]
          });
}
function M(e) {
    let { clip: t, videoRef: n } = e,
        l = (0, P.l)(t);
    return 0 === t.length
        ? (0, r.jsx)(p.$jN, {
              type: p.RAz.SPINNING_CIRCLE_SIMPLE,
              className: E.clipThumb
          })
        : null != l
          ? (0, r.jsx)(b.Z, {
                preload: 'metadata',
                muted: !0,
                poster: t.thumbnail,
                src: l,
                loop: !0,
                className: E.clipThumb,
                ref: n
            })
          : (0, r.jsx)('img', {
                alt: '',
                src: t.thumbnail,
                className: E.clipThumb
            });
}
function _(e) {
    let { clip: t, exporting: n, actionsDisabled: a, onBeforeDelete: i, onDelete: o, onEdit: s, onShare: c, onBlur: u } = e,
        d = (0, h.Z)(),
        m = l.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (i(), (0, N.sS)(t.filepath)) : o(t, i), v.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'delete' });
            },
            [o, i, t]
        ),
        f = l.useCallback(
            (e) => {
                e.stopPropagation(), s(t), v.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'edit' });
            },
            [s, t]
        ),
        b = l.useCallback(
            (e) => {
                e.stopPropagation(), c(t), v.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'share' });
            },
            [c, t]
        );
    return (0, r.jsxs)('div', {
        className: E.buttonContainer,
        children: [
            null != o &&
                (0, r.jsx)(p.ua7, {
                    text: w.NW.string(w.t.oyYWHB),
                    children: (e) =>
                        (0, r.jsx)(
                            p.zxk,
                            D(Z({}, e), {
                                disabled: a,
                                color: d ? p.zxk.Colors.RED : p.zxk.Colors.PRIMARY,
                                onClick: m,
                                className: E.button,
                                size: p.zxk.Sizes.NONE,
                                look: p.zxk.Looks.FILLED,
                                children: (0, r.jsx)(p.XHJ, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: E.miniIcon
                                })
                            })
                        )
                }),
            (0, r.jsx)(p.ua7, {
                text: w.NW.string(w.t.bt75u7),
                children: (e) =>
                    (0, r.jsx)(
                        p.zxk,
                        D(Z({}, e), {
                            disabled: a,
                            color: p.zxk.Colors.PRIMARY,
                            onClick: f,
                            className: E.button,
                            size: p.zxk.Sizes.NONE,
                            look: p.zxk.Looks.FILLED,
                            children: (0, r.jsx)(x.Z, { className: E.miniIcon })
                        })
                    )
            }),
            (0, r.jsx)(p.ua7, {
                text: w.NW.string(w.t.RDE0SU),
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
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                    return l;
                                })(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                            }
                            return l;
                        })(e, ['onBlur']);
                    return (0, r.jsx)(
                        p.zxk,
                        D(Z({}, l), {
                            disabled: a && !n,
                            submitting: n,
                            color: p.zxk.Colors.BRAND,
                            onBlur: (e) => {
                                u(e), null == t || t();
                            },
                            onClick: b,
                            className: E.button,
                            size: p.zxk.Sizes.NONE,
                            look: p.zxk.Looks.FILLED,
                            children: (0, r.jsx)(p.aAc, {
                                size: 'lg',
                                color: 'currentColor',
                                className: E.miniIcon
                            })
                        })
                    );
                }
            })
        ]
    });
}
