l.d(n, { default: () => T }), l(47120), l(266796), l(653041);
var t = l(200651),
    i = l(192379),
    o = l(442837),
    r = l(433517),
    a = l(481060),
    s = l(596454),
    c = l(410575),
    u = l(933557),
    d = l(471445),
    m = l(600164),
    j = l(313201),
    f = l(318766),
    h = l(907040),
    x = l(273039),
    p = l(339085),
    b = l(592125),
    N = l(984933),
    g = l(699516),
    C = l(594174),
    _ = l(700785),
    v = l(995532),
    k = l(514698),
    O = l(845606),
    y = l(981631),
    E = l(185923),
    S = l(388032),
    P = l(495084);
let T = (e) => {
    var n, l;
    let { guildId: T, welcomeChannel: Z, transitionState: w, onSave: z, onClose: W } = e,
        I = (0, j.Dt)(),
        [D, L] = i.useState(null != Z ? Z.channel_id : null),
        [B, A] = i.useState(null != Z ? Z.description : ''),
        [H, R] = i.useState(
            null != Z
                ? {
                      id: Z.emoji_id,
                      name: Z.emoji_name
                  }
                : null
        ),
        [M, K] = i.useState(!1),
        Y = (0, o.e7)([p.ZP], () => ((null == H ? void 0 : H.id) != null ? p.ZP.getUsableCustomEmojiById(H.id) : null)),
        q = (0, o.e7)([N.ZP], () => N.ZP.getChannels(T)[N.sH], [T]),
        G = (0, o.e7)([v.Z], () => v.Z.get(T)),
        V = null != (l = null == G || null == (n = G.welcome_channels) ? void 0 : n.map((e) => e.channel_id)) ? l : [],
        [X, $] = i.useState(!1);
    i.useEffect(() => {
        r.K.get(O.S) || setTimeout(() => $(!0), 300);
    }, []);
    let U = [];
    q.forEach((e) => {
        let { channel: n } = e;
        _.Uu(y.Plq.VIEW_CHANNEL, n) &&
            ((null == Z ? void 0 : Z.channel_id) === n.id || !V.includes(n.id)) &&
            U.push({
                value: n.id,
                label: (0, u.F6)(n, C.default, g.Z)
            });
    });
    let F = () => {
            $(!1), W();
        },
        J = i.useCallback((e) => A(e), []),
        Q = (e) => {
            var n, l, t;
            if (null == e) return void R(null);
            R(
                null != e.id
                    ? {
                          id: null != (n = e.id) ? n : null,
                          name: null != (l = e.name) ? l : null
                      }
                    : {
                          id: null,
                          name: null != (t = e.optionallyDiverseSequence) ? t : null
                      }
            );
        },
        ee = i.useCallback(() => {
            r.K.set(O.S, !0), $(!1);
        }, []);
    return (0, t.jsx)(c.Z, {
        page: y.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
        children: (0, t.jsxs)(a.Y0X, {
            transitionState: w,
            'aria-labelledby': I,
            children: [
                (0, t.jsxs)('div', {
                    className: P.modalContents,
                    children: [
                        (0, t.jsx)(a.olH, {
                            onClick: F,
                            className: P.closeButton
                        }),
                        (0, t.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            className: P.headerText,
                            id: I,
                            children: S.NW.string(S.t.cTghws)
                        }),
                        (0, t.jsxs)(a.hjN, {
                            className: P.__invalid_formGroup,
                            children: [
                                (0, t.jsx)(a.VcW, {
                                    options: U,
                                    onChange: (e) => L(e),
                                    value: D,
                                    renderOptionPrefix: (e) => {
                                        var n;
                                        if (null === e) return null;
                                        let l = e.value,
                                            i = b.Z.getChannel(l),
                                            o = null != (n = (0, d.KS)(i)) ? n : a.VL1;
                                        return (0, t.jsx)(o, {
                                            className: P.channelTitleIcon,
                                            size: 'xs',
                                            color: 'currentColor'
                                        });
                                    }
                                }),
                                (0, t.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: P.formDescription,
                                    children: S.NW.string(S.t.VV2929)
                                })
                            ]
                        }),
                        (0, t.jsx)(a.$i$, {}),
                        (0, t.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            className: P.headerText,
                            children: S.NW.string(S.t.bBw6HR)
                        }),
                        (0, t.jsx)(a.hjN, {
                            className: P.__invalid_formGroup,
                            children: (0, t.jsx)(a.oil, {
                                maxLength: 42,
                                value: B,
                                inputClassName: P.input,
                                placeholder: S.NW.string(S.t.h5EOur),
                                onChange: J
                            })
                        }),
                        (0, t.jsx)(a.$i$, {}),
                        (0, t.jsx)(a.hjN, {
                            className: P.__invalid_formGroup,
                            children: (0, t.jsxs)('div', {
                                className: P.emojiSectionContainer,
                                children: [
                                    (0, t.jsxs)('div', {
                                        className: P.emojiTitleContainer,
                                        children: [
                                            (0, t.jsx)(a.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: S.NW.string(S.t.HHniMT)
                                            }),
                                            (0, t.jsx)(a.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-muted',
                                                children: S.NW.string(S.t.c4mfl5)
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)(x.Z, {
                                        hasSetEmoji: null != H,
                                        onClick: Q,
                                        children: (0, t.jsx)(a.yRy, {
                                            renderPopout: (e) => {
                                                let { closePopout: n } = e,
                                                    l = N.ZP.getDefaultChannel(T);
                                                return (0, t.jsx)(h.Z, {
                                                    guildId: T,
                                                    closePopout: n,
                                                    onSelectEmoji: (e, l) => {
                                                        Q(e), l && (n(), null == e && F());
                                                    },
                                                    pickerIntention: E.Hz.COMMUNITY_CONTENT,
                                                    onNavigateAway: F,
                                                    channel: l
                                                });
                                            },
                                            position: 'left',
                                            animation: a.yRy.Animation.NONE,
                                            align: 'bottom',
                                            children: (e, n) => {
                                                var l, i;
                                                let { isShown: o } = n;
                                                return (0, t.jsx)(a.DY3, {
                                                    color: a.FGA.BRAND,
                                                    tooltipClassName: P.tooltip,
                                                    position: 'left',
                                                    text: X ? S.NW.string(S.t.YL3nfH) : null,
                                                    forceOpen: X,
                                                    children: (0, t.jsx)(
                                                        f.Z,
                                                        ((l = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var l = null != arguments[n] ? arguments[n] : {},
                                                                    t = Object.keys(l);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (t = t.concat(
                                                                        Object.getOwnPropertySymbols(l).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                                        })
                                                                    )),
                                                                    t.forEach(function (n) {
                                                                        var t;
                                                                        (t = l[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: t,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[n] = t);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (i = i =
                                                            {
                                                                onClick: (n) => {
                                                                    var l;
                                                                    ee(), null == (l = e.onClick) || l.call(e, n);
                                                                },
                                                                active: o,
                                                                className: P.emojiButton,
                                                                tabIndex: 0,
                                                                renderButtonContents:
                                                                    null != H && (null != H.id || null != H.name)
                                                                        ? () =>
                                                                              (0, t.jsx)(s.Z, {
                                                                                  className: P.emoji,
                                                                                  emojiId: H.id,
                                                                                  emojiName: H.name,
                                                                                  animated: !!(null == Y ? void 0 : Y.animated)
                                                                              })
                                                                        : null
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                                            : (function (e, n) {
                                                                  var l = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var t = Object.getOwnPropertySymbols(e);
                                                                      l.push.apply(l, t);
                                                                  }
                                                                  return l;
                                                              })(Object(i)).forEach(function (e) {
                                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                                              }),
                                                        l)
                                                    )
                                                });
                                            }
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, t.jsxs)(a.mzw, {
                    className: P.footer,
                    justify: m.Z.Justify.BETWEEN,
                    children: [
                        (0, t.jsxs)(m.Z, {
                            grow: 0,
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, t.jsx)(a.zxk, {
                                    onClick: F,
                                    size: a.zxk.Sizes.SMALL,
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.PRIMARY,
                                    children: S.NW.string(S.t['ETE/oK'])
                                }),
                                (0, t.jsx)(a.zxk, {
                                    onClick: () => {
                                        null != D &&
                                            B.length > 0 &&
                                            z({
                                                channel_id: D,
                                                description: B,
                                                emoji_id: null == H ? void 0 : H.id,
                                                emoji_name: null == H ? void 0 : H.name
                                            }),
                                            F();
                                    },
                                    disabled: null == D || 0 === B.length,
                                    children: S.NW.string(S.t.R3BPHx)
                                })
                            ]
                        }),
                        null != Z &&
                            (0, t.jsx)(a.zxk, {
                                onClick: () => {
                                    K(!0);
                                },
                                size: a.zxk.Sizes.MIN,
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.RED,
                                children: S.NW.string(S.t.N86XcH)
                            })
                    ]
                }),
                M &&
                    (0, t.jsx)(k.Z, {
                        onConfirm: () => {
                            z(), F();
                        },
                        onCancel: () => K(!1),
                        channelId: D
                    })
            ]
        })
    });
};
