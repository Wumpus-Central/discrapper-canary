t.d(n, { default: () => T }), t(388685), t(953529), t(539854);
var l = t(255367),
    i = t(73800),
    o = t(442837),
    r = t(433517),
    a = t(481060),
    s = t(596454),
    c = t(410575),
    u = t(933557),
    d = t(471445),
    m = t(600164),
    f = t(313201),
    j = t(318766),
    h = t(907040),
    x = t(273039),
    p = t(339085),
    b = t(592125),
    v = t(984933),
    C = t(699516),
    g = t(594174),
    _ = t(700785),
    N = t(995532),
    k = t(514698),
    O = t(845606),
    y = t(981631),
    E = t(185923),
    S = t(388032),
    P = t(808092);
let T = (e) => {
    var n, t;
    let { guildId: T, welcomeChannel: Z, transitionState: w, onSave: z, onClose: B } = e,
        I = i.useRef(null),
        D = (0, f.Dt)(),
        [L, R] = i.useState(null != Z ? Z.channel_id : null),
        [A, H] = i.useState(null != Z ? Z.description : ''),
        [M, K] = i.useState(
            null != Z
                ? {
                      id: Z.emoji_id,
                      name: Z.emoji_name
                  }
                : null
        ),
        [W, Y] = i.useState(!1),
        q = (0, o.e7)([p.ZP], () => ((null == M ? void 0 : M.id) != null ? p.ZP.getUsableCustomEmojiById(M.id) : null)),
        G = (0, o.e7)([v.ZP], () => v.ZP.getChannels(T)[v.sH], [T]),
        V = (0, o.e7)([N.Z], () => N.Z.get(T)),
        X = null != (t = null == V || null == (n = V.welcome_channels) ? void 0 : n.map((e) => e.channel_id)) ? t : [],
        [$, U] = i.useState(!1);
    i.useEffect(() => {
        r.K.get(O.S) || setTimeout(() => U(!0), 300);
    }, []);
    let F = [];
    G.forEach((e) => {
        let { channel: n } = e;
        _.Uu(y.Plq.VIEW_CHANNEL, n) &&
            ((null == Z ? void 0 : Z.channel_id) === n.id || !X.includes(n.id)) &&
            F.push({
                value: n.id,
                label: (0, u.F6)(n, g.default, C.Z)
            });
    });
    let J = () => {
            U(!1), B();
        },
        Q = i.useCallback((e) => H(e), []),
        ee = (e) => {
            var n, t, l;
            if (null == e) return void K(null);
            K(
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
        en = i.useCallback(() => {
            r.K.set(O.S, !0), U(!1);
        }, []);
    return (0, l.jsx)(c.Z, {
        page: y.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
        children: (0, l.jsxs)(a.Y0X, {
            transitionState: w,
            'aria-labelledby': D,
            children: [
                (0, l.jsxs)('div', {
                    className: P.modalContents,
                    children: [
                        (0, l.jsx)(a.olH, {
                            onClick: J,
                            className: P.closeButton
                        }),
                        (0, l.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            className: P.headerText,
                            id: D,
                            children: S.intl.string(S.t.cTghws)
                        }),
                        (0, l.jsxs)(a.hjN, {
                            className: P.__invalid_formGroup,
                            children: [
                                (0, l.jsx)(a.VcW, {
                                    options: F,
                                    onChange: (e) => R(e),
                                    value: L,
                                    renderOptionPrefix: (e) => {
                                        var n;
                                        if (null === e) return null;
                                        let t = e.value,
                                            i = b.Z.getChannel(t),
                                            o = null != (n = (0, d.KS)(i)) ? n : a.VL1;
                                        return (0, l.jsx)(o, {
                                            className: P.channelTitleIcon,
                                            size: 'xs',
                                            color: 'currentColor'
                                        });
                                    }
                                }),
                                (0, l.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: P.formDescription,
                                    children: S.intl.string(S.t.VV2929)
                                })
                            ]
                        }),
                        (0, l.jsx)(a.$i$, {}),
                        (0, l.jsx)(a.X6q, {
                            variant: 'heading-md/semibold',
                            className: P.headerText,
                            children: S.intl.string(S.t.bBw6HR)
                        }),
                        (0, l.jsx)(a.hjN, {
                            className: P.__invalid_formGroup,
                            children: (0, l.jsx)(a.oil, {
                                maxLength: 42,
                                value: A,
                                inputClassName: P.input,
                                placeholder: S.intl.string(S.t.h5EOur),
                                onChange: Q
                            })
                        }),
                        (0, l.jsx)(a.$i$, {}),
                        (0, l.jsx)(a.hjN, {
                            className: P.__invalid_formGroup,
                            children: (0, l.jsxs)('div', {
                                className: P.emojiSectionContainer,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: P.emojiTitleContainer,
                                        children: [
                                            (0, l.jsx)(a.X6q, {
                                                variant: 'heading-md/semibold',
                                                children: S.intl.string(S.t.HHniMT)
                                            }),
                                            (0, l.jsx)(a.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-muted',
                                                children: S.intl.string(S.t.c4mfl5)
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(x.Z, {
                                        hasSetEmoji: null != M,
                                        onClick: ee,
                                        children: (0, l.jsx)(a.yRy, {
                                            targetElementRef: I,
                                            renderPopout: (e) => {
                                                let { closePopout: n } = e,
                                                    t = v.ZP.getDefaultChannel(T);
                                                return (0, l.jsx)(h.Z, {
                                                    guildId: T,
                                                    closePopout: n,
                                                    onSelectEmoji: (e, t) => {
                                                        ee(e), t && (n(), null == e && J());
                                                    },
                                                    pickerIntention: E.Hz.COMMUNITY_CONTENT,
                                                    onNavigateAway: J,
                                                    channel: t
                                                });
                                            },
                                            position: 'left',
                                            animation: a.yRy.Animation.NONE,
                                            align: 'bottom',
                                            children: (e, n) => {
                                                var t, i;
                                                let { isShown: o } = n;
                                                return (0, l.jsx)(a.DY3, {
                                                    color: a.FGA.BRAND,
                                                    tooltipClassName: P.tooltip,
                                                    position: 'left',
                                                    text: $ ? S.intl.string(S.t.YL3nfH) : null,
                                                    forceOpen: $,
                                                    children: (0, l.jsx)(
                                                        j.Z,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    l = Object.keys(t);
                                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                                    (l = l.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                                        })
                                                                    )),
                                                                    l.forEach(function (n) {
                                                                        var l;
                                                                        (l = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: l,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0
                                                                                  })
                                                                                : (e[n] = l);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (i = i =
                                                            {
                                                                ref: I,
                                                                onClick: (n) => {
                                                                    var t;
                                                                    en(), null == (t = e.onClick) || t.call(e, n);
                                                                },
                                                                active: o,
                                                                className: P.emojiButton,
                                                                tabIndex: 0,
                                                                renderButtonContents:
                                                                    null != M && (null != M.id || null != M.name)
                                                                        ? () =>
                                                                              (0, l.jsx)(s.Z, {
                                                                                  className: P.emoji,
                                                                                  emojiId: M.id,
                                                                                  emojiName: M.name,
                                                                                  animated: !!(null == q ? void 0 : q.animated)
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
                (0, l.jsxs)(a.mzw, {
                    className: P.footer,
                    justify: m.Z.Justify.BETWEEN,
                    children: [
                        (0, l.jsxs)(m.Z, {
                            grow: 0,
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, l.jsx)(a.zxk, {
                                    onClick: J,
                                    size: a.zxk.Sizes.SMALL,
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.PRIMARY,
                                    children: S.intl.string(S.t['ETE/oK'])
                                }),
                                (0, l.jsx)(a.zxk, {
                                    onClick: () => {
                                        null != L &&
                                            A.length > 0 &&
                                            z({
                                                channel_id: L,
                                                description: A,
                                                emoji_id: null == M ? void 0 : M.id,
                                                emoji_name: null == M ? void 0 : M.name
                                            }),
                                            J();
                                    },
                                    disabled: null == L || 0 === A.length,
                                    children: S.intl.string(S.t.R3BPHx)
                                })
                            ]
                        }),
                        null != Z &&
                            (0, l.jsx)(a.zxk, {
                                onClick: () => {
                                    Y(!0);
                                },
                                size: a.zxk.Sizes.MIN,
                                look: a.zxk.Looks.LINK,
                                color: a.zxk.Colors.RED,
                                children: S.intl.string(S.t.N86XcH)
                            })
                    ]
                }),
                W &&
                    (0, l.jsx)(k.Z, {
                        onConfirm: () => {
                            z(), J();
                        },
                        onCancel: () => Y(!1),
                        channelId: L
                    })
            ]
        })
    });
};
