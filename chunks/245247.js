n.d(t, { Z: () => O }), n(47120);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    s = n(481060),
    o = n(596454),
    r = n(100527),
    u = n(318766),
    c = n(907040),
    d = n(246133),
    m = n(503817),
    h = n(695346),
    f = n(594174),
    p = n(626135),
    S = n(720449),
    x = n(684269),
    _ = n(678865),
    v = n(676035),
    j = n(926563),
    g = n(875425),
    b = n(981631),
    N = n(185923),
    C = n(388032),
    I = n(381825);
function T(e) {
    let { value: t, label: n } = e;
    return (0, l.jsxs)(
        'div',
        {
            className: I.statusOptionItem,
            children: [
                (0, l.jsx)(s.qbd, {
                    status: t,
                    size: 10,
                    className: I.statusIcon
                }),
                n
            ]
        },
        t
    );
}
function E(e) {
    return e.map((e) =>
        (0, l.jsx)(
            T,
            {
                value: e.value,
                label: e.label
            },
            e.value
        )
    );
}
function O(e) {
    var t, n;
    let { transitionState: O, onClose: k, sourceAnalyticsContext: D, sourceAnalyticsLocations: B } = e,
        { enabledWithStatusSelection: w } = (0, m.hM)({ location: 'CustomStatusModalWithPreview' }),
        A = (0, i.e7)([f.default], () => {
            var e;
            return null !== (e = f.default.getCurrentUser()) && void 0 !== e ? e : null;
        }),
        y = (0, v.a)(),
        [Z, P] = a.useState(null !== (t = null == y ? void 0 : y.state) && void 0 !== t ? t : ''),
        [z, R] = a.useState(null !== (n = null == y ? void 0 : y.emoji) && void 0 !== n ? n : null),
        [L, M] = a.useState((0, _.Z)()),
        [U, Y] = a.useState((0, x.Z)()),
        H = a.useRef(null);
    a.useEffect(() => {
        p.default.track(b.rMx.OPEN_MODAL, {
            type: r.Z.CUSTOM_STATUS_MODAL,
            location_stack: B
        });
    }, [B]),
        a.useEffect(() => {
            if (null != H.current) {
                let e = H.current;
                e.focus(), e.setSelection(Z.length, Z.length);
            }
        });
    let W = (e) => {
            null != e &&
                R(
                    null != e.id
                        ? {
                              id: e.id,
                              name: e.name,
                              animated: e.animated
                          }
                        : {
                              id: null,
                              name: e.optionallyDiverseSequence,
                              animated: !1
                          }
                );
        },
        F = () => {
            let e = h.co.getSetting();
            e !== L && (0, d.Z)(L, e, D), (0, S.Z)(Z, z, U, D), k();
        },
        q = () =>
            null == z
                ? null
                : () =>
                      (0, l.jsx)(o.Z, {
                          className: I.emoji,
                          emojiId: z.id,
                          emojiName: z.name,
                          animated: !!z.animated
                      });
    return (0, l.jsxs)(s.Y0X, {
        transitionState: O,
        children: [
            (0, l.jsxs)(s.xBx, {
                separator: !1,
                className: I.header,
                children: [
                    (0, l.jsx)('div', {
                        className: I.headerTitle,
                        children: (0, l.jsx)(s.X6q, {
                            variant: 'heading-xl/semibold',
                            children: C.intl.string(C.t.Zx4jzM)
                        })
                    }),
                    (0, l.jsx)('div', {
                        className: I.headerCloseButton,
                        children: (0, l.jsx)(s.olH, { onClick: k })
                    })
                ]
            }),
            (0, l.jsxs)(s.hzk, {
                children: [
                    null != A &&
                        (0, l.jsx)('div', {
                            className: I.profilePreview,
                            children: (0, l.jsx)(j.Z, {
                                user: A,
                                previewText: Z,
                                previewEmoji: z,
                                placeHolderText: C.intl.string(C.t['xod36+']),
                                previewStatus: L,
                                transitionState: O
                            })
                        }),
                    (0, l.jsx)(s.hjN, {
                        className: I.formGroup,
                        title: C.intl.string(C.t.UcdRn5),
                        children: (0, l.jsxs)('div', {
                            className: I.inputContainer,
                            children: [
                                (0, l.jsx)('div', {
                                    className: I.emojiButtonContainer,
                                    children: (0, l.jsx)(s.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, l.jsx)(c.Z, {
                                                closePopout: t,
                                                onSelectEmoji: (e, n) => {
                                                    W(e), n && t();
                                                },
                                                pickerIntention: N.Hz.STATUS,
                                                onNavigateAway: k
                                            });
                                        },
                                        position: 'left',
                                        animation: s.yRy.Animation.NONE,
                                        align: 'top',
                                        children: (e, t) => {
                                            let { isShown: n } = t;
                                            return (0, l.jsx)(u.Z, {
                                                ...e,
                                                active: n,
                                                className: I.emojiButton,
                                                tabIndex: 0,
                                                renderButtonContents: q()
                                            });
                                        }
                                    })
                                }),
                                (0, l.jsx)(s.Kx8, {
                                    autosize: !0,
                                    value: Z,
                                    maxLength: g.s0,
                                    rows: 1,
                                    showRemainingCharacterCount: !1,
                                    placeholder: C.intl.string(C.t['xod36+']),
                                    onChange: (e) => {
                                        P(e);
                                    },
                                    onKeyDown: (e) => {
                                        'Enter' === e.key && F();
                                    },
                                    className: I.input,
                                    inputRef: H
                                }),
                                (Z.length > 0 || null != z) &&
                                    (0, l.jsx)('div', {
                                        className: I.clearButtonWrapper,
                                        children: (0, l.jsx)(s.zxk, {
                                            focusProps: {
                                                offset: {
                                                    top: 8,
                                                    bottom: 8,
                                                    left: -2,
                                                    right: -2
                                                }
                                            },
                                            className: I.clearButton,
                                            onClick: () => {
                                                P(''), R(null);
                                            },
                                            look: s.zxk.Looks.BLANK,
                                            size: s.zxk.Sizes.NONE,
                                            children: (0, l.jsx)(s.k$p, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: I.clearIcon
                                            })
                                        })
                                    })
                            ]
                        })
                    }),
                    w &&
                        (0, l.jsxs)(s.hjN, {
                            className: I.formGroup,
                            title: C.intl.string(C.t.zOdg0N),
                            children: [
                                (0, l.jsx)(s.q4e, {
                                    maxVisibleItems: g.Df.length,
                                    value: L,
                                    options: g.Df.map((e) => ({
                                        ...e,
                                        key: e.value,
                                        value: e.value,
                                        label: e.label()
                                    })),
                                    onChange: M,
                                    renderOptionLabel: (e) => {
                                        let { value: t, label: n } = e;
                                        return (0, l.jsx)(T, {
                                            value: t,
                                            label: n
                                        });
                                    },
                                    renderOptionValue: E
                                }),
                                L === s.Skl.INVISIBLE &&
                                    (0, l.jsx)('div', {
                                        className: I.invisibleStatusNotice,
                                        children: (0, l.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            children: C.intl.string(C.t.IUwOOD)
                                        })
                                    })
                            ]
                        })
                ]
            }),
            (0, l.jsx)(s.mzw, {
                children: (0, l.jsxs)('div', {
                    className: I.footer,
                    children: [
                        (0, l.jsx)('div', {
                            className: I.clearAfterSelectContainer,
                            children: (0, l.jsx)(s.q4e, {
                                maxVisibleItems: g.Q9.length,
                                value: U,
                                options: g.Q9.map((e) => ({
                                    ...e,
                                    key: e.value,
                                    value: e.value,
                                    label: e.label()
                                })),
                                onChange: Y,
                                look: s.qQH.CUSTOM,
                                popoutWidth: 200,
                                popoutPosition: 'right'
                            })
                        }),
                        (0, l.jsx)(s.zxk, {
                            type: 'submit',
                            size: s.zxk.Sizes.MEDIUM,
                            color: s.zxk.Colors.BRAND,
                            onClick: F,
                            children: C.intl.string(C.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
