l.d(n, { default: () => B }), l(47120), l(653041);
var i = l(200651),
    t = l(192379),
    o = l(442837),
    a = l(433517),
    s = l(481060),
    r = l(596454),
    c = l(410575),
    d = l(933557),
    u = l(471445),
    m = l(600164),
    h = l(313201),
    x = l(318766),
    j = l(907040),
    f = l(273039),
    v = l(339085),
    C = l(592125),
    _ = l(984933),
    N = l(699516),
    p = l(594174),
    g = l(700785),
    k = l(995532),
    b = l(514698),
    E = l(845606),
    T = l(981631),
    S = l(185923),
    Z = l(388032),
    z = l(168427);
let B = (e) => {
    var n, l;
    let { guildId: B, welcomeChannel: I, transitionState: L, onSave: P, onClose: A } = e,
        H = (0, h.Dt)(),
        [y, D] = t.useState(null != I ? I.channel_id : null),
        [M, R] = t.useState(null != I ? I.description : ''),
        [w, O] = t.useState(
            null != I
                ? {
                      id: I.emoji_id,
                      name: I.emoji_name
                  }
                : null
        ),
        [K, W] = t.useState(!1),
        Y = (0, o.e7)([v.ZP], () => ((null == w ? void 0 : w.id) != null ? v.ZP.getUsableCustomEmojiById(w.id) : null)),
        q = (0, o.e7)([_.ZP], () => _.ZP.getChannels(B)[_.sH], [B]),
        G = (0, o.e7)([k.Z], () => k.Z.get(B)),
        V = null !== (l = null == G ? void 0 : null === (n = G.welcome_channels) || void 0 === n ? void 0 : n.map((e) => e.channel_id)) && void 0 !== l ? l : [],
        [X, $] = t.useState(!1);
    t.useEffect(() => {
        a.K.get(E.S) || setTimeout(() => $(!0), 300);
    }, []);
    let U = [];
    q.forEach((e) => {
        let { channel: n } = e;
        g.Uu(T.Plq.VIEW_CHANNEL, n) &&
            ((null == I ? void 0 : I.channel_id) === n.id || !V.includes(n.id)) &&
            U.push({
                value: n.id,
                label: (0, d.F6)(n, p.default, N.Z)
            });
    });
    let F = () => {
            $(!1), A();
        },
        J = t.useCallback((e) => R(e), []),
        Q = (e) => {
            var n, l, i;
            if (null == e) {
                O(null);
                return;
            }
            O(
                null != e.id
                    ? {
                          id: null !== (n = e.id) && void 0 !== n ? n : null,
                          name: null !== (l = e.name) && void 0 !== l ? l : null
                      }
                    : {
                          id: null,
                          name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
                      }
            );
        },
        ee = t.useCallback(() => {
            a.K.set(E.S, !0), $(!1);
        }, []);
    return (0, i.jsx)(c.Z, {
        page: T.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
        children: (0, i.jsxs)(s.Y0X, {
            transitionState: L,
            'aria-labelledby': H,
            children: [
                (0, i.jsxs)('div', {
                    className: z.modalContents,
                    children: [
                        (0, i.jsx)(s.olH, {
                            onClick: F,
                            className: z.closeButton
                        }),
                        (0, i.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            className: z.headerText,
                            id: H,
                            children: Z.intl.string(Z.t.cTghws)
                        }),
                        (0, i.jsxs)(s.hjN, {
                            className: z.__invalid_formGroup,
                            children: [
                                (0, i.jsx)(s.VcW, {
                                    options: U,
                                    onChange: (e) => D(e),
                                    value: y,
                                    renderOptionPrefix: (e) => {
                                        var n;
                                        if (null === e) return null;
                                        let l = e.value,
                                            t = C.Z.getChannel(l),
                                            o = null !== (n = (0, u.KS)(t)) && void 0 !== n ? n : s.VL1;
                                        return (0, i.jsx)(o, {
                                            className: z.channelTitleIcon,
                                            size: 'xs',
                                            color: 'currentColor'
                                        });
                                    }
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: z.formDescription,
                                    children: Z.intl.string(Z.t.VV2929)
                                })
                            ]
                        }),
                        (0, i.jsx)(s.$i$, {}),
                        (0, i.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            className: z.headerText,
                            children: Z.intl.string(Z.t.bBw6HR)
                        }),
                        (0, i.jsx)(s.hjN, {
                            className: z.__invalid_formGroup,
                            children: (0, i.jsx)(s.oil, {
                                maxLength: 42,
                                value: M,
                                inputClassName: z.input,
                                placeholder: Z.intl.string(Z.t.h5EOur),
                                onChange: J
                            })
                        }),
                        (0, i.jsx)(s.$i$, {}),
                        (0, i.jsx)(s.hjN, {
                            className: z.__invalid_formGroup,
                            children: (0, i.jsxs)('div', {
                                className: z.emojiSectionContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: z.emojiTitleContainer,
                                        children: [
                                            (0, i.jsx)(s.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: Z.intl.string(Z.t.HHniMT)
                                            }),
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-muted',
                                                children: Z.intl.string(Z.t.c4mfl5)
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        hasSetEmoji: null != w,
                                        onClick: Q,
                                        children: (0, i.jsx)(s.yRy, {
                                            renderPopout: (e) => {
                                                let { closePopout: n } = e,
                                                    l = _.ZP.getDefaultChannel(B);
                                                return (0, i.jsx)(j.Z, {
                                                    guildId: B,
                                                    closePopout: n,
                                                    onSelectEmoji: (e, l) => {
                                                        Q(e), l && (n(), null == e && F());
                                                    },
                                                    pickerIntention: S.Hz.COMMUNITY_CONTENT,
                                                    onNavigateAway: F,
                                                    channel: l
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'bottom',
                                            children: (e, n) => {
                                                let { isShown: l } = n;
                                                return (0, i.jsx)(s.DY3, {
                                                    color: s.FGA.BRAND,
                                                    tooltipClassName: z.tooltip,
                                                    position: 'left',
                                                    text: X ? Z.intl.string(Z.t.YL3nfH) : null,
                                                    forceOpen: X,
                                                    children: (0, i.jsx)(x.Z, {
                                                        ...e,
                                                        onClick: (n) => {
                                                            var l;
                                                            ee(), null === (l = e.onClick) || void 0 === l || l.call(e, n);
                                                        },
                                                        active: l,
                                                        className: z.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents:
                                                            null != w && (null != w.id || null != w.name)
                                                                ? () =>
                                                                      (0, i.jsx)(r.Z, {
                                                                          className: z.emoji,
                                                                          emojiId: w.id,
                                                                          emojiName: w.name,
                                                                          animated: !!(null == Y ? void 0 : Y.animated)
                                                                      })
                                                                : null
                                                    })
                                                });
                                            }
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(s.mzw, {
                    className: z.footer,
                    justify: m.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsxs)(m.Z, {
                            grow: 0,
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(s.zxk, {
                                    onClick: F,
                                    size: s.zxk.Sizes.SMALL,
                                    look: s.zxk.Looks.LINK,
                                    color: s.zxk.Colors.PRIMARY,
                                    children: Z.intl.string(Z.t['ETE/oK'])
                                }),
                                (0, i.jsx)(s.zxk, {
                                    onClick: () => {
                                        null != y &&
                                            M.length > 0 &&
                                            P({
                                                channel_id: y,
                                                description: M,
                                                emoji_id: null == w ? void 0 : w.id,
                                                emoji_name: null == w ? void 0 : w.name
                                            }),
                                            F();
                                    },
                                    disabled: null == y || 0 === M.length,
                                    children: Z.intl.string(Z.t.R3BPHx)
                                })
                            ]
                        }),
                        null != I &&
                            (0, i.jsx)(s.zxk, {
                                onClick: () => {
                                    W(!0);
                                },
                                size: s.zxk.Sizes.MIN,
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.RED,
                                children: Z.intl.string(Z.t.N86XcH)
                            })
                    ]
                }),
                K &&
                    (0, i.jsx)(b.Z, {
                        onConfirm: () => {
                            P(), F();
                        },
                        onCancel: () => W(!1),
                        channelId: y
                    })
            ]
        })
    });
};
