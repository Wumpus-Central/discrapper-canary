n(47120);
var l,
    a,
    i = n(200651),
    o = n(192379),
    s = n(120356),
    r = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(846519),
    p = n(212605),
    v = n(481060),
    h = n(100527),
    x = n(906732),
    g = n(70097),
    C = n(237617),
    f = n(318374),
    j = n(717680),
    N = n(594174),
    E = n(962399),
    b = n(626135),
    L = n(823379),
    I = n(709054),
    S = n(39604),
    Z = n(572720),
    k = n(981631),
    T = n(388032),
    y = n(272964),
    M = n(770151);
((a = l || (l = {})).DELETE = 'delete'), (a.EDIT = 'edit'), (a.SHARE = 'share');
function B(e) {
    let { clip: t, isNew: n, videoRef: l } = e,
        a = 0 === t.length,
        [s, r] = o.useMemo(() => {
            let e = t.length,
                n = !1,
                l = null != t.editMetadata ? t.editMetadata.end - t.editMetadata.start : null;
            return null != l && 1000 * l < t.length && ((e = 1000 * l), (n = !0)), [n, d().duration(e)];
        }, [t.length, t.editMetadata]),
        c = ''.concat(r.seconds()).padStart(2, '0');
    return (0, i.jsxs)('div', {
        className: y.clipThumbContainer,
        children: [
            (0, i.jsx)(_, {
                clip: t,
                videoRef: l
            }),
            (0, i.jsxs)('div', {
                className: y.clipBadges,
                children: [
                    a &&
                        (0, i.jsx)('div', {
                            className: y.clipProcessingBadge,
                            children: (0, i.jsx)(v.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                children: T.intl.string(T.t['2Fp7OD'])
                            })
                        }),
                    !a &&
                        n &&
                        (0, i.jsxs)(v.Text, {
                            className: y.clipNewBadge,
                            variant: 'eyebrow',
                            color: 'always-white',
                            children: [
                                (0, i.jsx)(v.SparklesIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: y.newIcon
                                }),
                                T.intl.string(T.t.y2b7CA).toUpperCase()
                            ]
                        }),
                    !a &&
                        (0, i.jsxs)('div', {
                            className: y.clipDurationBadge,
                            children: [
                                s ? (0, i.jsx)(E.Z, { className: y.clipDurationEditIcon }) : null,
                                (0, i.jsx)(v.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    children: ''.concat(r.minutes(), ':').concat(c)
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
    let { clip: n, focused: l, onFocus: a } = e,
        [s, c] = o.useState(n.name),
        d = !n.name,
        [u, m] = o.useState(!1),
        [h, x] = o.useState(null !== (t = n.name) && void 0 !== t ? t : ''),
        [g, C] = o.useState(!1),
        f = async () => {
            C(!0), await (0, S.Tm)(n.id, { name: '' === h ? void 0 : h }), C(!1), m(!1);
        };
    return (o.useEffect(() => {
        if (s !== n.name) {
            var e;
            c(n.name), x(null !== (e = n.name) && void 0 !== e ? e : '');
        }
    }, [n.name, s]),
    u)
        ? (0, i.jsx)(v.TextInput, {
              inputClassName: r()(M['heading-lg/medium'], y.clipTitleInput),
              onClick: (e) => e.stopPropagation(),
              value: h,
              autoFocus: !0,
              onKeyDown: (e) => {
                  'Enter' === e.key && f();
              },
              disabled: g,
              onChange: x,
              onBlur: f
          })
        : (0, i.jsxs)(v.Clickable, {
              className: y.clipTitleInputPlaceholder,
              onFocus: a,
              onClick: (e) => {
                  e.stopPropagation(), m(!0);
              },
              children: [
                  d
                      ? (0, i.jsx)(v.Heading, {
                            className: y.clipTitle,
                            color: 'text-muted',
                            variant: 'heading-lg/medium',
                            children: T.intl.string(T.t['x+/nmJ'])
                        })
                      : (0, i.jsx)(v.Heading, {
                            className: y.clipTitle,
                            color: 'text-normal',
                            variant: 'heading-lg/medium',
                            children: n.name
                        }),
                  l &&
                      (0, i.jsx)(v.PencilIcon, {
                          size: 'custom',
                          'aria-label': T.intl.string(T.t.bt75u7),
                          color: v.tokens.colors.TEXT_MUTED,
                          height: p.Z.sm,
                          width: p.Z.sm,
                          className: y.clipTitleIcon
                      })
              ]
          });
}
function _(e) {
    let { clip: t, videoRef: n } = e,
        l = (0, Z.l)(t);
    return 0 === t.length
        ? (0, i.jsx)(v.Spinner, {
              type: v.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
              className: y.clipThumb
          })
        : null != l
          ? (0, i.jsx)(g.Z, {
                preload: 'metadata',
                muted: !0,
                poster: t.thumbnail,
                src: l,
                loop: !0,
                className: y.clipThumb,
                ref: n
            })
          : (0, i.jsx)('img', {
                alt: '',
                src: t.thumbnail,
                className: y.clipThumb
            });
}
function H(e) {
    let { clip: t, exporting: n, actionsDisabled: l, onBeforeDelete: a, onDelete: s, onEdit: r, onShare: c, onBlur: d } = e,
        u = (0, j.Z)(),
        m = o.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (a(), (0, S.sS)(t.filepath)) : s(t, a), b.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'delete' });
            },
            [s, a, t]
        ),
        p = o.useCallback(
            (e) => {
                e.stopPropagation(), r(t), b.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'edit' });
            },
            [r, t]
        ),
        h = o.useCallback(
            (e) => {
                e.stopPropagation(), c(t), b.default.track(k.rMx.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: 'share' });
            },
            [c, t]
        );
    return (0, i.jsxs)('div', {
        className: y.buttonContainer,
        children: [
            null != s &&
                (0, i.jsx)(v.Tooltip, {
                    text: T.intl.string(T.t.oyYWHB),
                    children: (e) =>
                        (0, i.jsx)(v.Button, {
                            ...e,
                            disabled: l,
                            color: u ? v.Button.Colors.RED : v.Button.Colors.PRIMARY,
                            onClick: m,
                            className: y.button,
                            size: v.Button.Sizes.NONE,
                            look: v.Button.Looks.FILLED,
                            children: (0, i.jsx)(v.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: y.miniIcon
                            })
                        })
                }),
            (0, i.jsx)(v.Tooltip, {
                text: T.intl.string(T.t.bt75u7),
                children: (e) =>
                    (0, i.jsx)(v.Button, {
                        ...e,
                        disabled: l,
                        color: v.Button.Colors.PRIMARY,
                        onClick: p,
                        className: y.button,
                        size: v.Button.Sizes.NONE,
                        look: v.Button.Looks.FILLED,
                        children: (0, i.jsx)(E.Z, { className: y.miniIcon })
                    })
            }),
            (0, i.jsx)(v.Tooltip, {
                text: T.intl.string(T.t.RDE0SU),
                children: (e) => {
                    let { onBlur: t, ...a } = e;
                    return (0, i.jsx)(v.Button, {
                        ...a,
                        disabled: l && !n,
                        submitting: n,
                        color: v.Button.Colors.BRAND,
                        onBlur: (e) => {
                            d(e), null == t || t();
                        },
                        onClick: h,
                        className: y.button,
                        size: v.Button.Sizes.NONE,
                        look: v.Button.Looks.FILLED,
                        children: (0, i.jsx)(v.ShareIcon, {
                            size: 'lg',
                            color: 'currentColor',
                            className: y.miniIcon
                        })
                    });
                }
            })
        ]
    });
}
t.Z = function (e) {
    var t, n, l;
    let { clip: a, exporting: s, actionsDisabled: c, isNew: d, onDelete: p, onEdit: g, onShare: j } = e,
        E = (0, u.Wu)([N.default], () => a.users.map((e) => N.default.getUser(e)).filter(L.lm)),
        { analyticsLocations: S } = (0, x.ZP)(h.Z.CLIPS_GALLERY_ITEM),
        [Z, M] = o.useState(!1),
        _ = o.useRef(null),
        P = (0, C.Z)(null !== (l = null === (t = a.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== l ? l : 0),
        R = o.useRef(
            new m.sW(500, () => {
                var e;
                let t = _.current;
                null != t && t.paused && ((t.currentTime = P.current), null === (e = _.current) || void 0 === e || e.play());
            })
        ),
        w = o.useCallback(() => {
            let e = _.current;
            null != e && (e.pause(), (e.src = ''));
        }, []),
        A = o.useCallback(() => {
            var e;
            M(!0), null === (e = R.current) || void 0 === e || e.delay();
        }, []),
        V = o.useCallback(() => {
            var e, t, n;
            M(!1);
            let l = _.current;
            null === (e = R.current) || void 0 === e || e.cancel(), null != l && (l.pause(), (l.currentTime = null !== (n = null === (t = a.editMetadata) || void 0 === t ? void 0 : t.start) && void 0 !== n ? n : 0));
        }, [null === (n = a.editMetadata) || void 0 === n ? void 0 : n.start]),
        z = o.useCallback(
            (e) => {
                var t, n;
                (null === (n = e.relatedTarget) || void 0 === n ? void 0 : null === (t = n.parentElement) || void 0 === t ? void 0 : t.parentElement) !== e.currentTarget.parentElement && V();
            },
            [V]
        ),
        F = new Date(I.default.extractTimestamp(a.id)),
        O = F.toLocaleDateString(),
        G = F.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        }),
        K = ''.concat(O, ' \u2022 ').concat(G);
    return (0, i.jsx)(x.Gt, {
        value: S,
        children: (0, i.jsxs)(v.ClickableContainer, {
            'aria-disabled': c,
            'aria-label': T.intl.string(T.t.bt75u7),
            onClick: c
                ? void 0
                : () => {
                      g(a), b.default.track(k.rMx.CLIP_GALLERY_CARD_CLICKED);
                  },
            className: r()(y.clipItem, { [y.disabled]: c }),
            onBlur: z,
            onFocus: A,
            onMouseOver: A,
            onMouseLeave: V,
            children: [
                (0, i.jsx)(B, {
                    clip: a,
                    isNew: d,
                    videoRef: _
                }),
                (0, i.jsxs)('div', {
                    className: y.clipFooter,
                    children: [
                        (0, i.jsx)(D, {
                            clip: a,
                            focused: Z,
                            onFocus: A
                        }),
                        (0, i.jsx)(v.Text, {
                            className: y.clipMetadata,
                            color: 'text-normal',
                            variant: 'text-md/medium',
                            children: a.applicationName
                        }),
                        (0, i.jsx)(v.Text, {
                            className: y.clipMetadata,
                            color: 'text-normal',
                            variant: 'text-md/medium',
                            children: K
                        }),
                        (0, i.jsxs)('div', {
                            className: y.usersAndDelete,
                            children: [
                                (0, i.jsx)(f.Z, {
                                    maxUsers: 4,
                                    users: E,
                                    onFocus: (e) => {
                                        var t, n, l, a;
                                        let i = e.relatedTarget,
                                            o = null === (n = e.currentTarget.parentElement) || void 0 === n ? void 0 : null === (t = n.parentElement) || void 0 === t ? void 0 : t.parentElement;
                                        if ((null == i ? void 0 : i.parentElement) !== o) (null == i ? void 0 : null === (a = i.parentElement) || void 0 === a ? void 0 : null === (l = a.parentElement) || void 0 === l ? void 0 : l.parentElement) !== o && A();
                                    }
                                }),
                                Z &&
                                    (0, i.jsx)(H, {
                                        clip: a,
                                        actionsDisabled: c,
                                        exporting: s,
                                        onBeforeDelete: w,
                                        onDelete: p,
                                        onEdit: g,
                                        onShare: j,
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
