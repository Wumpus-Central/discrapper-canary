l.d(t, { Z: () => M }), l(47120);
var a = l(200651),
    n = l(192379),
    i = l(120356),
    s = l.n(i),
    r = l(913527),
    o = l.n(r),
    c = l(442837),
    d = l(846519),
    u = l(212605),
    m = l(481060),
    p = l(100527),
    x = l(906732),
    v = l(70097),
    h = l(237617),
    g = l(318374),
    C = l(717680),
    f = l(594174),
    j = l(962399),
    N = l(626135),
    k = l(823379),
    E = l(709054),
    Z = l(39604),
    b = l(572720),
    L = l(981631),
    y = l(388032),
    I = l(890202),
    T = l(25869);
let M = function (e) {
    var t, l, i;
    let { clip: r, exporting: o, actionsDisabled: u, isNew: v, onDelete: C, onEdit: j, onShare: Z } = e,
        b = (0, c.Wu)([f.default], () => r.users.map((e) => f.default.getUser(e)).filter(k.lm)),
        { analyticsLocations: T } = (0, x.ZP)(p.Z.CLIPS_GALLERY_ITEM),
        [M, P] = n.useState(!1),
        z = n.useRef(null),
        w = (0, h.Z)(null !== (i = null === (t = r.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== i ? i : 0),
        R = n.useRef(
            new d.sW(500, () => {
                var e;
                let t = z.current;
                null != t && t.paused && ((t.currentTime = w.current), null === (e = z.current) || void 0 === e || e.play());
            })
        ),
        A = n.useCallback(() => {
            let e = z.current;
            null != e && (e.pause(), (e.src = ''));
        }, []),
        H = n.useCallback(() => {
            var e;
            P(!0), null === (e = R.current) || void 0 === e || e.delay();
        }, []),
        V = n.useCallback(() => {
            var e, t, l;
            P(!1);
            let a = z.current;
            null === (e = R.current) || void 0 === e || e.cancel(), null != a && (a.pause(), (a.currentTime = null !== (l = null === (t = r.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0));
        }, [null === (l = r.editMetadata) || void 0 === l ? void 0 : l.start]),
        B = n.useCallback(
            (e) => {
                var t, l;
                (null === (l = e.relatedTarget) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && V();
            },
            [V]
        ),
        F = new Date(E.default.extractTimestamp(r.id)),
        Y = F.toLocaleDateString(),
        O = F.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        }),
        G = ''.concat(Y, ' \u2022 ').concat(O);
    return (0, a.jsx)(x.Gt, {
        value: T,
        children: (0, a.jsxs)(m.kL8, {
            'aria-disabled': u,
            'aria-label': y.intl.string(y.t.bt75u7),
            onClick: u
                ? void 0
                : () => {
                      j(r), N.default.track(L.rMx.CLIP_GALLERY_CARD_CLICKED);
                  },
            className: s()(I.clipItem, { [I.disabled]: u }),
            onBlur: B,
            onFocus: H,
            onMouseOver: H,
            onMouseLeave: V,
            children: [
                (0, a.jsx)(S, {
                    clip: r,
                    isNew: v,
                    videoRef: z
                }),
                (0, a.jsxs)('div', {
                    className: I.clipFooter,
                    children: [
                        (0, a.jsx)(D, {
                            clip: r,
                            focused: M,
                            onFocus: H
                        }),
                        (0, a.jsx)(m.Text, {
                            className: I.clipMetadata,
                            color: 'text-normal',
                            variant: 'text-md/medium',
                            children: r.applicationName
                        }),
                        (0, a.jsx)(m.Text, {
                            className: I.clipMetadata,
                            color: 'text-normal',
                            variant: 'text-md/medium',
                            children: G
                        }),
                        (0, a.jsxs)('div', {
                            className: I.usersAndDelete,
                            children: [
                                (0, a.jsx)(g.Z, {
                                    maxUsers: 4,
                                    users: b,
                                    onFocus: (e) => {
                                        var t, l, a, n;
                                        let i = e.relatedTarget,
                                            s = null === (l = e.currentTarget.parentElement) || void 0 === l ? void 0 : null === (t = l.parentElement) || void 0 === t ? void 0 : t.parentElement;
                                        (null == i ? void 0 : i.parentElement) !== s && (null == i ? void 0 : null === (n = i.parentElement) || void 0 === n ? void 0 : null === (a = n.parentElement) || void 0 === a ? void 0 : a.parentElement) !== s && H();
                                    }
                                }),
                                M &&
                                    (0, a.jsx)(_, {
                                        clip: r,
                                        actionsDisabled: u,
                                        exporting: o,
                                        onBeforeDelete: A,
                                        onDelete: C,
                                        onEdit: j,
                                        onShare: Z,
                                        onBlur: (e) => {
                                            var t;
                                            (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && V();
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
function S(e) {
    let { clip: t, isNew: l, videoRef: i } = e,
        s = 0 === t.length,
        [r, c] = n.useMemo(() => {
            let e = t.length,
                l = !1,
                a = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
            return null != a && 1000 * a < t.length && ((e = 1000 * a), (l = !0)), [l, o().duration(e)];
        }, [t.length, t.editMetadata]),
        d = ''.concat(c.seconds()).padStart(2, '0');
    return (0, a.jsxs)('div', {
        className: I.clipThumbContainer,
        children: [
            (0, a.jsx)(P, {
                clip: t,
                videoRef: i
            }),
            (0, a.jsxs)('div', {
                className: I.clipBadges,
                children: [
                    s &&
                        (0, a.jsx)('div', {
                            className: I.clipProcessingBadge,
                            children: (0, a.jsx)(m.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: y.intl.string(y.t['2Fp7OD'])
                            })
                        }),
                    !s &&
                        l &&
                        (0, a.jsxs)(m.Text, {
                            className: I.clipNewBadge,
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: [
                                (0, a.jsx)(m.T$Z, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: I.newIcon
                                }),
                                y.intl.string(y.t.y2b7CA).toUpperCase()
                            ]
                        }),
                    !s &&
                        (0, a.jsxs)('div', {
                            className: I.clipDurationBadge,
                            children: [
                                r ? (0, a.jsx)(j.Z, { className: I.clipDurationEditIcon }) : null,
                                (0, a.jsx)(m.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: ''.concat(c.minutes(), ':').concat(d)
                                })
                            ]
                        })
                ]
            })
        ]
    });
}
function D(e) {
    var t;
    let { clip: l, focused: i, onFocus: r } = e,
        [o, c] = n.useState(l.name),
        d = !l.name,
        [p, x] = n.useState(!1),
        [v, h] = n.useState(null !== (t = l.name) && void 0 !== t ? t : ''),
        [g, C] = n.useState(!1),
        f = async () => {
            C(!0), await (0, Z.Tm)(l.id, { name: '' === v ? void 0 : v }), C(!1), x(!1);
        };
    return (n.useEffect(() => {
        if (o !== l.name) {
            var e;
            c(l.name), h(null !== (e = l.name) && void 0 !== e ? e : '');
        }
    }, [l.name, o]),
    p)
        ? (0, a.jsx)(m.oil, {
              inputClassName: s()(T['heading-lg/medium'], I.clipTitleInput),
              onClick: (e) => e.stopPropagation(),
              value: v,
              autoFocus: !0,
              onKeyDown: (e) => {
                  'Enter' === e.key && f();
              },
              disabled: g,
              onChange: h,
              onBlur: f
          })
        : (0, a.jsxs)(m.P3F, {
              className: I.clipTitleInputPlaceholder,
              onFocus: r,
              onClick: (e) => {
                  e.stopPropagation(), x(!0);
              },
              children: [
                  d
                      ? (0, a.jsx)(m.X6q, {
                            className: I.clipTitle,
                            color: 'text-muted',
                            variant: 'heading-lg/medium',
                            children: y.intl.string(y.t['x+/nmJ'])
                        })
                      : (0, a.jsx)(m.X6q, {
                            className: I.clipTitle,
                            color: 'text-normal',
                            variant: 'heading-lg/medium',
                            children: l.name
                        }),
                  i &&
                      (0, a.jsx)(m.vdY, {
                          size: 'custom',
                          'aria-label': y.intl.string(y.t.bt75u7),
                          color: m.TVs.colors.TEXT_MUTED,
                          height: u.Z.sm,
                          width: u.Z.sm,
                          className: I.clipTitleIcon
                      })
              ]
          });
}
function P(e) {
    let { clip: t, videoRef: l } = e,
        n = (0, b.l)(t);
    return 0 === t.length
        ? (0, a.jsx)(m.$jN, {
              type: m.RAz.SPINNING_CIRCLE_SIMPLE,
              className: I.clipThumb
          })
        : null != n
          ? (0, a.jsx)(v.Z, {
                preload: 'metadata',
                muted: !0,
                poster: t.thumbnail,
                src: n,
                loop: !0,
                className: I.clipThumb,
                ref: l
            })
          : (0, a.jsx)('img', {
                alt: '',
                src: t.thumbnail,
                className: I.clipThumb
            });
}
function _(e) {
    let { clip: t, exporting: l, actionsDisabled: i, onBeforeDelete: s, onDelete: r, onEdit: o, onShare: c, onBlur: d } = e,
        u = (0, C.Z)(),
        p = n.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (s(), (0, Z.sS)(t.filepath)) : r(t, s), N.default.track(L.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'delete' });
            },
            [r, s, t]
        ),
        x = n.useCallback(
            (e) => {
                e.stopPropagation(), o(t), N.default.track(L.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'edit' });
            },
            [o, t]
        ),
        v = n.useCallback(
            (e) => {
                e.stopPropagation(), c(t), N.default.track(L.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'share' });
            },
            [c, t]
        );
    return (0, a.jsxs)('div', {
        className: I.buttonContainer,
        children: [
            null != r &&
                (0, a.jsx)(m.ua7, {
                    text: y.intl.string(y.t.oyYWHB),
                    children: (e) =>
                        (0, a.jsx)(m.zxk, {
                            ...e,
                            disabled: i,
                            color: u ? m.zxk.Colors.RED : m.zxk.Colors.PRIMARY,
                            onClick: p,
                            className: I.button,
                            size: m.zxk.Sizes.NONE,
                            look: m.zxk.Looks.FILLED,
                            children: (0, a.jsx)(m.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                className: I.miniIcon
                            })
                        })
                }),
            (0, a.jsx)(m.ua7, {
                text: y.intl.string(y.t.bt75u7),
                children: (e) =>
                    (0, a.jsx)(m.zxk, {
                        ...e,
                        disabled: i,
                        color: m.zxk.Colors.PRIMARY,
                        onClick: x,
                        className: I.button,
                        size: m.zxk.Sizes.NONE,
                        look: m.zxk.Looks.FILLED,
                        children: (0, a.jsx)(j.Z, { className: I.miniIcon })
                    })
            }),
            (0, a.jsx)(m.ua7, {
                text: y.intl.string(y.t.RDE0SU),
                children: (e) => {
                    let { onBlur: t, ...n } = e;
                    return (0, a.jsx)(m.zxk, {
                        ...n,
                        disabled: i && !l,
                        submitting: l,
                        color: m.zxk.Colors.BRAND,
                        onBlur: (e) => {
                            d(e), null == t || t();
                        },
                        onClick: v,
                        className: I.button,
                        size: m.zxk.Sizes.NONE,
                        look: m.zxk.Looks.FILLED,
                        children: (0, a.jsx)(m.aAc, {
                            size: 'lg',
                            color: 'currentColor',
                            className: I.miniIcon
                        })
                    });
                }
            })
        ]
    });
}
