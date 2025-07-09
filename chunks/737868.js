(t.d(n, { default: () => Z }), t(388685), t(953529), t(539854));
var l = t(255367),
    i = t(73800),
    o = t(442837),
    r = t(433517),
    a = t(755721),
    s = t(481060),
    c = t(596454),
    u = t(410575),
    d = t(933557),
    m = t(471445),
    f = t(600164),
    j = t(313201),
    h = t(318766),
    x = t(907040),
    p = t(273039),
    b = t(339085),
    v = t(592125),
    C = t(984933),
    g = t(699516),
    _ = t(594174),
    N = t(700785),
    y = t(995532),
    O = t(514698),
    E = t(845606),
    k = t(981631),
    S = t(185923),
    P = t(388032),
    T = t(495084);
let Z = (e) => {
    var n, t;
    let { guildId: Z, welcomeChannel: w, transitionState: B, onSave: D, onClose: z } = e,
        I = i.useRef(null),
        H = (0, j.Dt)(),
        [L, R] = i.useState(null != w ? w.channel_id : null),
        [A, M] = i.useState(null != w ? w.description : ''),
        [W, q] = i.useState(
            null != w
                ? {
                      id: w.emoji_id,
                      name: w.emoji_name
                  }
                : null
        ),
        [G, K] = i.useState(!1),
        V = (0, o.e7)([b.ZP], () => ((null == W ? void 0 : W.id) != null ? b.ZP.getUsableCustomEmojiById(W.id) : null)),
        X = (0, o.e7)([C.ZP], () => C.ZP.getChannels(Z)[C.sH], [Z]),
        Y = (0, o.e7)([y.Z], () => y.Z.get(Z)),
        $ = null != (t = null == Y || null == (n = Y.welcome_channels) ? void 0 : n.map((e) => e.channel_id)) ? t : [],
        [U, F] = i.useState(!1);
    i.useEffect(() => {
        r.K.get(E.S) || setTimeout(() => F(!0), 300);
    }, []);
    let J = [];
    X.forEach((e) => {
        let { channel: n } = e;
        N.Uu(k.Plq.VIEW_CHANNEL, n) &&
            ((null == w ? void 0 : w.channel_id) === n.id || !$.includes(n.id)) &&
            J.push({
                value: n.id,
                label: (0, d.F6)(n, _.default, g.Z)
            });
    });
    let Q = () => {
            (F(!1), z());
        },
        ee = i.useCallback((e) => M(e), []),
        en = (e) => {
            var n, t, l;
            if (null == e) return void q(null);
            q(
                null != e.id
                    ? {
                          id: null != (n = e.id) ? n : null,
                          name: null != (t = e.name) ? t : null
                      }
                    : {
                          id: null,
                          name: null != (l = e.optionallyDiverseSequence) ? l : null
                      }
            );
        },
        et = i.useCallback(() => {
            (r.K.set(E.S, !0), F(!1));
        }, []);
    return (0, l.jsx)(u.Z, {
        page: k.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
        children: (0, l.jsxs)(s.Y0X, {
            transitionState: B,
            'aria-labelledby': H,
            parentComponent: 'CreateWelcomeChannelModal',
            children: [
                (0, l.jsxs)('div', {
                    className: T.modalContents,
                    children: [
                        (0, l.jsx)(s.olH, {
                            onClick: Q,
                            className: T.closeButton
                        }),
                        (0, l.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            className: T.headerText,
                            id: H,
                            children: P.intl.string(P.t.cTghws)
                        }),
                        (0, l.jsxs)(s.hjN, {
                            className: T.__invalid_formGroup,
                            children: [
                                (0, l.jsx)(s.VcW, {
                                    options: J,
                                    onChange: (e) => R(e),
                                    value: L,
                                    renderOptionPrefix: (e) => {
                                        var n;
                                        if (null === e) return null;
                                        let t = e.value,
                                            i = v.Z.getChannel(t),
                                            o = null != (n = (0, m.KS)(i)) ? n : s.VL1;
                                        return (0, l.jsx)(o, {
                                            className: T.channelTitleIcon,
                                            size: 'xs',
                                            color: 'currentColor'
                                        });
                                    }
                                }),
                                (0, l.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: T.formDescription,
                                    children: P.intl.string(P.t.VV2929)
                                })
                            ]
                        }),
                        (0, l.jsx)(s.$i$, {}),
                        (0, l.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            className: T.headerText,
                            children: P.intl.string(P.t.bBw6HR)
                        }),
                        (0, l.jsx)(s.hjN, {
                            className: T.__invalid_formGroup,
                            children: (0, l.jsx)(s.oil, {
                                maxLength: 42,
                                value: A,
                                inputClassName: T.input,
                                placeholder: P.intl.string(P.t.h5EOur),
                                onChange: ee
                            })
                        }),
                        (0, l.jsx)(s.$i$, {}),
                        (0, l.jsx)(s.hjN, {
                            className: T.__invalid_formGroup,
                            children: (0, l.jsxs)('div', {
                                className: T.emojiSectionContainer,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: T.emojiTitleContainer,
                                        children: [
                                            (0, l.jsx)(s.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: P.intl.string(P.t.HHniMT)
                                            }),
                                            (0, l.jsx)(s.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-muted',
                                                children: P.intl.string(P.t.c4mfl5)
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(p.Z, {
                                        hasSetEmoji: null != W,
                                        onClick: en,
                                        children: (0, l.jsx)(s.yRy, {
                                            targetElementRef: I,
                                            renderPopout: (e) => {
                                                let { closePopout: n } = e,
                                                    t = C.ZP.getDefaultChannel(Z);
                                                return (0, l.jsx)(x.Z, {
                                                    guildId: Z,
                                                    closePopout: n,
                                                    onSelectEmoji: (e) => {
                                                        let { emoji: t, willClose: l } = e;
                                                        (en(t), l && (n(), null == t && Q()));
                                                    },
                                                    pickerIntention: S.Hz.COMMUNITY_CONTENT,
                                                    onNavigateAway: Q,
                                                    channel: t
                                                });
                                            },
                                            position: 'left',
                                            animation: s.yRy.Animation.NONE,
                                            align: 'bottom',
                                            children: (e, n) => {
                                                var t, i;
                                                let { isShown: o } = n;
                                                return (0, l.jsx)(s.DY3, {
                                                    color: s.FGA.BRAND,
                                                    tooltipClassName: T.tooltip,
                                                    position: 'left',
                                                    text: U ? P.intl.string(P.t.YL3nfH) : null,
                                                    forceOpen: U,
                                                    children: (0, l.jsx)(
                                                        h.Z,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    l = Object.keys(t);
                                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                                    (l = l.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                        })
                                                                    )),
                                                                    l.forEach(function (n) {
                                                                        var l;
                                                                        ((l = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: l,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[n] = l));
                                                                    }));
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (i = i =
                                                            {
                                                                ref: I,
                                                                onClick: (n) => {
                                                                    var t;
                                                                    (et(), null == (t = e.onClick) || t.call(e, n));
                                                                },
                                                                active: o,
                                                                className: T.emojiButton,
                                                                tabIndex: 0,
                                                                renderButtonContents:
                                                                    null != W && (null != W.id || null != W.name)
                                                                        ? () =>
                                                                              (0, l.jsx)(c.Z, {
                                                                                  className: T.emoji,
                                                                                  emojiId: W.id,
                                                                                  emojiName: W.name,
                                                                                  animated: !!(null == V ? void 0 : V.animated)
                                                                              })
                                                                        : null
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var l = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, l);
                                                                  }
                                                                  return t;
                                                              })(Object(i)).forEach(function (e) {
                                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                                              }),
                                                        t)
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
                (0, l.jsxs)(s.mzw, {
                    className: T.footer,
                    justify: f.Z.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(f.Z, {
                            grow: 0,
                            align: f.Z.Align.CENTER,
                            children: (0, l.jsxs)(s.hE2, {
                                direction: 'horizontal-reverse',
                                children: [
                                    (0, l.jsx)(s.zxk, {
                                        variant: 'secondary',
                                        size: 'sm',
                                        text: P.intl.string(P.t['ETE/oK']),
                                        onClick: Q
                                    }),
                                    (0, l.jsx)(s.zxk, {
                                        variant: 'primary',
                                        text: P.intl.string(P.t.R3BPHx),
                                        onClick: () => {
                                            (null != L &&
                                                A.length > 0 &&
                                                D({
                                                    channel_id: L,
                                                    description: A,
                                                    emoji_id: null == W ? void 0 : W.id,
                                                    emoji_name: null == W ? void 0 : W.name
                                                }),
                                                Q());
                                        },
                                        disabled: null == L || 0 === A.length
                                    })
                                ]
                            })
                        }),
                        null != w &&
                            (0, l.jsx)(a.zx, {
                                onClick: () => {
                                    K(!0);
                                },
                                size: a.zx.Sizes.MIN,
                                look: a.zx.Looks.LINK,
                                color: a.zx.Colors.RED,
                                children: P.intl.string(P.t.N86XcH)
                            })
                    ]
                }),
                G &&
                    (0, l.jsx)(O.Z, {
                        onConfirm: () => {
                            (D(), Q());
                        },
                        onCancel: () => K(!1),
                        channelId: L
                    })
            ]
        })
    });
};
