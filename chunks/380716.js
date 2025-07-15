(l.d(n, { default: () => G }), l(539854), l(388685), l(472816), l(794429));
var t = l(255367),
    i = l(73800),
    a = l(658722),
    r = l.n(a),
    o = l(399606),
    s = l(146187),
    u = l(257465),
    c = l(369585),
    d = l(481060),
    m = l(596454),
    p = l(110924),
    h = l(471445),
    v = l(907040),
    g = l(734893),
    x = l(813197),
    j = l(592125),
    f = l(984933),
    b = l(430824),
    y = l(768581),
    C = l(823379),
    I = l(700785),
    N = l(969632),
    O = l(580357),
    S = l(981631),
    T = l(185923),
    _ = l(388032),
    k = l(70164);
function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var l = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(l);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            t.forEach(function (n) {
                var t;
                ((t = l[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = t));
            }));
    }
    return e;
}
function P(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, t);
                  }
                  return l;
              })(Object(n)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
              }),
        e
    );
}
function w(e, n) {
    switch (e) {
        case g.oi.VIEW:
            return I.Uu(S.Plq.VIEW_CHANNEL, n);
        case g.oi.CHAT:
            if (S.TPd.GUILD_THREADS_ONLY.has(n.type)) return I.Uu(S.Plq.SEND_MESSAGES_IN_THREADS, n) || I.Uu(S.Plq.SEND_MESSAGES, n);
            return I.Uu(S.Plq.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function Z() {
    return {
        channelId: [],
        title: [],
        description: [],
        actionType: [],
        emoji: [],
        icon: []
    };
}
function M(e) {
    let n = Z(),
        l = j.Z.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < g.Wz) && n.title.push(_.intl.formatToPlainString(_.t.iu6AGh, { minLength: g.Wz })),
        null == e.actionType ||
            null == l ||
            w(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case g.oi.VIEW:
                            return _.intl.string(_.t.lD7FOT);
                        case g.oi.CHAT:
                            return _.intl.string(_.t.fIF2U1);
                        default:
                            (0, C.vE)(e);
                    }
                })(e.actionType)
            ),
        n
    );
}
function G(e) {
    var n, l, a, C, I;
    let { transitionState: G, onClose: D, guildId: U, action: A, onSave: R, onDelete: z } = e,
        H = i.useRef(null),
        F = i.useRef(null),
        [L] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = j.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: e.channelId,
                          label: n.name
                      };
            })(A)
        ),
        [X, q] = i.useState(L),
        W = (0, o.e7)([j.Z], () => j.Z.getChannel(null == X ? void 0 : X.value)),
        V = (null == W ? void 0 : W.isMediaChannel()) === !0,
        Y = i.useMemo(
            () => [
                {
                    value: g.oi.VIEW,
                    name: _.intl.string(_.t.jfieR0)
                },
                {
                    value: g.oi.CHAT,
                    name: (null == W ? void 0 : W.type) === S.d4z.GUILD_FORUM ? (V ? _.intl.string(_.t['1EgDpK']) : _.intl.string(_.t.x5Di7O)) : _.intl.string(_.t['R+dC4O'])
                }
            ],
            [null == W ? void 0 : W.type, V]
        ),
        [B, K] = i.useState(Z()),
        [Q, J] = i.useState(null != (n = null == A ? void 0 : A.title) ? n : ''),
        $ = (0, o.e7)([N.Z], () => {
            let e = N.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return (null != L && n.delete(L.value), n);
        }),
        [ee, en] = i.useState(null == A ? null : null != (I = Y.find((e) => e.value === A.actionType)) ? I : null),
        [el, et] = i.useState(null != (l = null == A ? void 0 : A.emoji) ? l : null),
        ei = (0, o.e7)([N.Z], () => {
            var e;
            return null == (e = N.Z.getNewMemberAction(null == A ? void 0 : A.channelId)) ? void 0 : e.icon;
        }),
        [ea, er] = i.useState(
            null != ei && null != X
                ? y.ZP.getNewMemberActionIconURL({
                      channelId: X.value,
                      icon: ei
                  })
                : null
        ),
        eo = (0, p.Z)(ea),
        es = (0, p.Z)(el),
        eu = null == Q || 0 === Q.length || null == ee || null == X,
        ec = Object.values(B).flat().length > 0,
        ed = i.useCallback(() => {
            if (null == X || null == ee || Q.length <= 0) return;
            let e = {
                    channelId: X.value,
                    title: Q,
                    description: '',
                    actionType: ee.value,
                    emoji: null != el ? el : null,
                    icon: null != ei ? ei : null
                },
                n = ea !== eo || el !== es;
            (R(e, null != ea ? ea : null, n), D());
        }, [R, D, Q, ee, X, el, ei, ea, eo, es]),
        em = i.useCallback(() => {
            (null == z || z(), D());
        }, [z, D]),
        ep = i.useCallback(
            (e) => {
                (J(e),
                    K(
                        M({
                            channelId: null == X ? void 0 : X.value,
                            title: e,
                            description: '',
                            actionType: null == ee ? void 0 : ee.value,
                            emoji: null != el ? el : void 0
                        })
                    ));
            },
            [J, K, X, ee, el]
        ),
        eh = i.useCallback(
            (e) => {
                (q(e),
                    K(
                        M({
                            channelId: null == e ? void 0 : e.value,
                            title: Q,
                            description: '',
                            actionType: null == ee ? void 0 : ee.value,
                            emoji: null != el ? el : void 0
                        })
                    ));
            },
            [q, K, Q, ee, el]
        ),
        ev = i.useCallback(
            (e) => {
                (en(e),
                    K(
                        M({
                            channelId: null == X ? void 0 : X.value,
                            title: Q,
                            description: '',
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != el ? el : void 0
                        })
                    ));
            },
            [en, K, X, Q, el]
        ),
        eg = i.useCallback(
            (e) =>
                Promise.resolve(
                    f.ZP.getSelectableChannels(U)
                        .filter((n) => !$.has(n.channel.id) && (0, g.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [U, $]
        ),
        ex = i.useCallback(
            (e) => {
                if (null == e || null == U) return null;
                let n = j.Z.getChannel(e.value),
                    l = b.Z.getGuild(U);
                if (null == n || null == l) return null;
                let i = (0, h.KS)(n, l);
                return null == i
                    ? null
                    : (0, t.jsx)(i, {
                          size: 'xs',
                          color: 'customColor',
                          className: k.channelIcon
                      });
            },
            [U]
        ),
        ej = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            (et(n), er(e));
        }, []),
        ef = i.useCallback(() => (null != ea ? ea : null), [ea, el])(),
        eb = i.useCallback(
            (e) => {
                null != e && ej(e, null);
            },
            [ej]
        ),
        ey = (e) => (n) => {
            var l, t;
            let { emoji: i, willClose: a } = n;
            if (null == i) return;
            let r = null;
            (ej(
                null,
                null == i.id
                    ? {
                          id: null,
                          name: null != (l = i.optionallyDiverseSequence) ? l : '',
                          animated: !1
                      }
                    : {
                          id: i.id,
                          name: null != (t = i.originalName) ? t : i.name,
                          animated: i.animated
                      }
            ),
                a && e());
        },
        eC = null;
    eC =
        null != ef
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)('img', {
                          src: ef,
                          alt: '',
                          'aria-hidden': !0,
                          className: k.__invalid_image,
                          width: 24,
                          height: 24
                      }),
                      (0, t.jsx)('div', {
                          className: k.imageOverlay,
                          children: (0, t.jsx)(d.vdY, {
                              size: 'md',
                              color: 'currentColor'
                          })
                      })
                  ]
              })
            : null != el
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(m.Z, {
                            animated: null != (a = el.animated) && a,
                            emojiId: el.id,
                            emojiName: el.name
                        }),
                        (0, t.jsx)('div', {
                            className: k.imageOverlay,
                            children: (0, t.jsx)(d.vdY, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    ]
                })
              : (0, t.jsx)(d.FmF, {
                    size: 'md',
                    color: 'currentColor'
                });
    let eI = i.useMemo(
        () => [
            {
                text: _.intl.string(_.t['ETE/oK']),
                onClick: D,
                variant: 'secondary'
            },
            {
                text: _.intl.string(_.t.R3BPHx),
                variant: 'primary',
                onClick: ed,
                disabled: eu || ec
            }
        ],
        [ed, ec, eu, D]
    );
    return (0, t.jsxs)(u.IX, {
        transitionState: G,
        onClose: D,
        children: [
            (0, t.jsx)('div', {
                className: k.closeButton,
                children: (0, t.jsx)(s.P, { onClick: D })
            }),
            (0, t.jsxs)('div', {
                className: k.container,
                children: [
                    (0, t.jsxs)('div', {
                        className: k.formGroup,
                        children: [
                            (0, t.jsxs)(d.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [_.intl.string(_.t['j+fhOT']), (0, t.jsx)(O.Z, {})]
                            }),
                            (0, t.jsx)(d.oil, {
                                value: Q,
                                error: (null != (C = null == Q ? void 0 : Q.length) ? C : 0) > 0 ? B.title.join(', ') : null,
                                onChange: ep,
                                placeholder: _.intl.string(_.t.oN1Sm5),
                                maxLength: g.Z3
                            })
                        ]
                    }),
                    (0, t.jsx)('div', { className: k.separator }),
                    (0, t.jsxs)('div', {
                        className: k.formGroup,
                        children: [
                            (0, t.jsxs)(d.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [_.intl.string(_.t.jVDc5e), (0, t.jsx)(O.Z, {})]
                            }),
                            (0, t.jsx)(d.VcW, {
                                value: X,
                                renderOptionPrefix: ex,
                                options: eg,
                                onChange: eh
                            }),
                            (0, t.jsx)(d.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: _.intl.string(_.t.cypQPz)
                            })
                        ]
                    }),
                    (0, t.jsx)('div', { className: k.separator }),
                    (0, t.jsxs)('div', {
                        className: k.splitGroup,
                        children: [
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsx)(d.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        children: _.intl.string(_.t.gs5rQk)
                                    }),
                                    (0, t.jsx)(d.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        children: _.intl.string(_.t.LjsoiY)
                                    })
                                ]
                            }),
                            (0, t.jsx)('div', {
                                className: k.iconUploadContainer,
                                children: (0, t.jsx)(d.yRy, {
                                    position: 'bottom',
                                    renderPopout: (e) => {
                                        let n = e.closePopout,
                                            l = (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(x.ZP, {
                                                        onChange: (e) => {
                                                            (eb(e), n());
                                                        },
                                                        tabIndex: 0
                                                    }),
                                                    (0, t.jsx)(d.Text, {
                                                        variant: 'text-sm/medium',
                                                        color: 'none',
                                                        children: _.intl.string(_.t['2YKkdX'])
                                                    })
                                                ]
                                            }),
                                            i = (0, t.jsx)(d.yRy, {
                                                targetElementRef: H,
                                                position: 'top',
                                                renderPopout: (e) => {
                                                    let { closePopout: l } = e;
                                                    return (0, t.jsx)(v.Z, {
                                                        closePopout: () => {
                                                            (l(), n());
                                                        },
                                                        onSelectEmoji: ey(() => {
                                                            (l(), n());
                                                        }),
                                                        pickerIntention: T.Hz.COMMUNITY_CONTENT,
                                                        channel: W
                                                    });
                                                },
                                                children: (e) =>
                                                    (0, t.jsx)(
                                                        d.Text,
                                                        P(E({}, e), {
                                                            variant: 'text-sm/medium',
                                                            color: 'none',
                                                            ref: H,
                                                            children: _.intl.string(_.t.amsyNz)
                                                        })
                                                    )
                                            });
                                        return (0, t.jsxs)(d.v2r, {
                                            navId: 'set-image-for-action',
                                            'aria-label': 'upload',
                                            onClose: () => !1,
                                            onSelect: () => !1,
                                            children: [
                                                (0, t.jsx)(d.sNh, {
                                                    id: 'emoji',
                                                    label: i,
                                                    icon: d.EO4
                                                }),
                                                (0, t.jsx)(d.sNh, {
                                                    className: k.uploadMenuItem,
                                                    id: 'upload',
                                                    label: l,
                                                    icon: d.rG2
                                                }),
                                                null != ef || null != el
                                                    ? (0, t.jsx)(d.sNh, {
                                                          id: 'clear',
                                                          color: 'danger',
                                                          label: _.intl.string(_.t.ZCLmoa),
                                                          icon: d.XHJ,
                                                          action: () => {
                                                              ej(null);
                                                          }
                                                      })
                                                    : null
                                            ]
                                        });
                                    },
                                    targetElementRef: F,
                                    children: (e) =>
                                        (0, t.jsx)(
                                            'div',
                                            P(E({}, e), {
                                                className: k.iconUpload,
                                                ref: F,
                                                children: eC
                                            })
                                        )
                                })
                            })
                        ]
                    }),
                    (0, t.jsx)('div', { className: k.separator }),
                    (0, t.jsxs)('div', {
                        className: k.formGroup,
                        children: [
                            (0, t.jsxs)(d.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [_.intl.string(_.t.MIMVLS), (0, t.jsx)(O.Z, {})]
                            }),
                            (0, t.jsx)(d.FXm, {
                                withTransparentBackground: !0,
                                size: d.FXm.Sizes.NONE,
                                value: null == ee ? void 0 : ee.value,
                                onChange: ev,
                                options: null == W ? Y : Y.map((e) => P(E({}, e), { disabled: !w(e.value, W) }))
                            }),
                            null != ee && B.actionType.length > 0
                                ? B.actionType.map((e) =>
                                      (0, t.jsx)(
                                          d.Text,
                                          {
                                              variant: 'text-xs/normal',
                                              color: 'text-danger',
                                              children: e
                                          },
                                          e
                                      )
                                  )
                                : null
                        ]
                    })
                ]
            }),
            (0, t.jsx)(c.G, {
                actions: eI,
                leading:
                    null != A
                        ? (0, t.jsx)(d.Avr, {
                              text: _.intl.string(_.t.N86XcH),
                              onClick: em,
                              variant: 'critical'
                          })
                        : void 0
            })
        ]
    });
}
