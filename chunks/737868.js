l.d(n, { default: () => T }), l(388685), l(953529), l(539854);
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
    g = l(984933),
    C = l(699516),
    _ = l(594174),
    v = l(700785),
    N = l(995532),
    k = l(514698),
    O = l(845606),
    y = l(981631),
    E = l(185923),
    S = l(388032),
    P = l(495084);
let T = (e) => {
    var n, l;
    let { guildId: T, welcomeChannel: Z, transitionState: w, onSave: z, onClose: I } = e,
        D = (0, j.Dt)(),
        [L, B] = i.useState(null != Z ? Z.channel_id : null),
        [A, H] = i.useState(null != Z ? Z.description : ''),
        [R, M] = i.useState(
            null != Z
                ? {
                      id: Z.emoji_id,
                      name: Z.emoji_name
                  }
                : null
        ),
        [K, W] = i.useState(!1),
        Y = (0, o.e7)([p.ZP], () => ((null == R ? void 0 : R.id) != null ? p.ZP.getUsableCustomEmojiById(R.id) : null)),
        q = (0, o.e7)([g.ZP], () => g.ZP.getChannels(T)[g.sH], [T]),
        G = (0, o.e7)([N.Z], () => N.Z.get(T)),
        V = null != (l = null == G || null == (n = G.welcome_channels) ? void 0 : n.map((e) => e.channel_id)) ? l : [],
        [X, $] = i.useState(!1);
    i.useEffect(() => {
        r.K.get(O.S) || setTimeout(() => $(!0), 300);
    }, []);
    let U = [];
    q.forEach((e) => {
        let { channel: n } = e;
        v.Uu(y.Plq.VIEW_CHANNEL, n) &&
            ((null == Z ? void 0 : Z.channel_id) === n.id || !V.includes(n.id)) &&
            U.push({
                value: n.id,
                label: (0, u.F6)(n, _.default, C.Z)
            });
    });
    let F = () => {
            $(!1), I();
        },
        J = i.useCallback((e) => H(e), []),
        Q = (e) => {
            var n, l, t;
            if (null == e) return void M(null);
            M(
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
            'aria-labelledby': D,
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
                            id: D,
                            children: S.intl.string(S.t.cTghws)
                        }),
                        (0, t.jsxs)(a.hjN, {
                            className: P.__invalid_formGroup,
                            children: [
                                (0, t.jsx)(a.VcW, {
                                    options: U,
                                    onChange: (e) => B(e),
                                    value: L,
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
                                    children: S.intl.string(S.t.VV2929)
                                })
                            ]
                        }),
                        (0, t.jsx)(a.$i$, {}),
                        (0, t.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            className: P.headerText,
                            children: S.intl.string(S.t.bBw6HR)
                        }),
                        (0, t.jsx)(a.hjN, {
                            className: P.__invalid_formGroup,
                            children: (0, t.jsx)(a.oil, {
                                maxLength: 42,
                                value: A,
                                inputClassName: P.input,
                                placeholder: S.intl.string(S.t.h5EOur),
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
                                                children: S.intl.string(S.t.HHniMT)
                                            }),
                                            (0, t.jsx)(a.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-muted',
                                                children: S.intl.string(S.t.c4mfl5)
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)(x.Z, {
                                        hasSetEmoji: null != R,
                                        onClick: Q,
                                        children: (0, t.jsx)(a.yRy, {
                                            renderPopout: (e) => {
                                                let { closePopout: n } = e,
                                                    l = g.ZP.getDefaultChannel(T);
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
                                                    text: X ? S.intl.string(S.t.YL3nfH) : null,
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
                                                                    null != R && (null != R.id || null != R.name)
                                                                        ? () =>
                                                                              (0, t.jsx)(s.Z, {
                                                                                  className: P.emoji,
                                                                                  emojiId: R.id,
                                                                                  emojiName: R.name,
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
                                    children: S.intl.string(S.t['ETE/oK'])
                                }),
                                (0, t.jsx)(a.zxk, {
                                    onClick: () => {
                                        null != L &&
                                            A.length > 0 &&
                                            z({
                                                channel_id: L,
                                                description: A,
                                                emoji_id: null == R ? void 0 : R.id,
                                                emoji_name: null == R ? void 0 : R.name
                                            }),
                                            F();
                                    },
                                    disabled: null == L || 0 === A.length,
                                    children: S.intl.string(S.t.R3BPHx)
                                })
                            ]
                        }),
                        null != Z &&
                            (0, t.jsx)(a.zxk, {
                                onClick: () => {
                                    W(!0);
                                },
                                size: a.zxk.Sizes.MIN,
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.RED,
                                children: S.intl.string(S.t.N86XcH)
                            })
                    ]
                }),
                K &&
                    (0, t.jsx)(k.Z, {
                        onConfirm: () => {
                            z(), F();
                        },
                        onCancel: () => W(!1),
                        channelId: L
                    })
            ]
        })
    });
};
