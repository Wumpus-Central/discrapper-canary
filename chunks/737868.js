n.d(l, { default: () => I }), n(47120), n(653041);
var i = n(200651),
    t = n(192379),
    o = n(442837),
    a = n(433517),
    s = n(481060),
    r = n(596454),
    d = n(410575),
    c = n(933557),
    u = n(471445),
    m = n(600164),
    h = n(313201),
    x = n(318766),
    j = n(907040),
    f = n(273039),
    C = n(339085),
    _ = n(592125),
    p = n(984933),
    v = n(699516),
    N = n(594174),
    g = n(700785),
    k = n(995532),
    b = n(514698),
    E = n(845606),
    T = n(981631),
    S = n(185923),
    Z = n(388032),
    z = n(168427);
let I = (e) => {
    var l, n;
    let { guildId: I, welcomeChannel: L, transitionState: B, onSave: P, onClose: A } = e,
        H = (0, h.Dt)(),
        [y, D] = t.useState(null != L ? L.channel_id : null),
        [R, w] = t.useState(null != L ? L.description : ''),
        [M, O] = t.useState(
            null != L
                ? {
                      id: L.emoji_id,
                      name: L.emoji_name
                  }
                : null
        ),
        [K, W] = t.useState(!1),
        Y = (0, o.e7)([C.ZP], () => ((null == M ? void 0 : M.id) != null ? C.ZP.getUsableCustomEmojiById(M.id) : null)),
        q = (0, o.e7)([p.ZP], () => p.ZP.getChannels(I)[p.sH], [I]),
        G = (0, o.e7)([k.Z], () => k.Z.get(I)),
        V = null !== (n = null == G ? void 0 : null === (l = G.welcome_channels) || void 0 === l ? void 0 : l.map((e) => e.channel_id)) && void 0 !== n ? n : [],
        [X, $] = t.useState(!1);
    t.useEffect(() => {
        a.K.get(E.S) || setTimeout(() => $(!0), 300);
    }, []);
    let U = [];
    q.forEach((e) => {
        let { channel: l } = e;
        g.Uu(T.Plq.VIEW_CHANNEL, l) &&
            ((null == L ? void 0 : L.channel_id) === l.id || !V.includes(l.id)) &&
            U.push({
                value: l.id,
                label: (0, c.F6)(l, N.default, v.Z)
            });
    });
    let F = () => {
            $(!1), A();
        },
        J = t.useCallback((e) => w(e), []),
        Q = (e) => {
            var l, n, i;
            if (null == e) {
                O(null);
                return;
            }
            O(
                null != e.id
                    ? {
                          id: null !== (l = e.id) && void 0 !== l ? l : null,
                          name: null !== (n = e.name) && void 0 !== n ? n : null
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
    return (0, i.jsx)(d.Z, {
        page: T.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
        children: (0, i.jsxs)(s.Y0X, {
            transitionState: B,
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
                                        var l;
                                        if (null === e) return null;
                                        let n = e.value,
                                            t = _.Z.getChannel(n),
                                            o = null !== (l = (0, u.KS)(t)) && void 0 !== l ? l : s.VL1;
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
                                value: R,
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
                                        hasSetEmoji: null != M,
                                        onClick: Q,
                                        children: (0, i.jsx)(s.yRy, {
                                            renderPopout: (e) => {
                                                let { closePopout: l } = e,
                                                    n = p.ZP.getDefaultChannel(I);
                                                return (0, i.jsx)(j.Z, {
                                                    guildId: I,
                                                    closePopout: l,
                                                    onSelectEmoji: (e, n) => {
                                                        Q(e), n && (l(), null == e && F());
                                                    },
                                                    pickerIntention: S.Hz.COMMUNITY_CONTENT,
                                                    onNavigateAway: F,
                                                    channel: n
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'bottom',
                                            children: (e, l) => {
                                                let { isShown: n } = l;
                                                return (0, i.jsx)(s.DY3, {
                                                    color: s.FGA.BRAND,
                                                    tooltipClassName: z.tooltip,
                                                    position: 'left',
                                                    text: X ? Z.intl.string(Z.t.YL3nfH) : null,
                                                    forceOpen: X,
                                                    children: (0, i.jsx)(x.Z, {
                                                        ...e,
                                                        onClick: (l) => {
                                                            var n;
                                                            ee(), null === (n = e.onClick) || void 0 === n || n.call(e, l);
                                                        },
                                                        active: n,
                                                        className: z.emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents:
                                                            null != M && (null != M.id || null != M.name)
                                                                ? () =>
                                                                      (0, i.jsx)(r.Z, {
                                                                          className: z.emoji,
                                                                          emojiId: M.id,
                                                                          emojiName: M.name,
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
                                            R.length > 0 &&
                                            P({
                                                channel_id: y,
                                                description: R,
                                                emoji_id: null == M ? void 0 : M.id,
                                                emoji_name: null == M ? void 0 : M.name
                                            }),
                                            F();
                                    },
                                    disabled: null == y || 0 === R.length,
                                    children: Z.intl.string(Z.t.R3BPHx)
                                })
                            ]
                        }),
                        null != L &&
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
