(l.d(n, { default: () => Z }), l(539854), l(388685), l(472816), l(794429));
var t = l(255367),
    i = l(73800),
    a = l(658722),
    r = l.n(a),
    o = l(399606),
    s = l(481060),
    u = l(596454),
    c = l(110924),
    d = l(471445),
    m = l(313201),
    h = l(907040),
    p = l(734893),
    v = l(813197),
    x = l(592125),
    j = l(984933),
    g = l(430824),
    f = l(768581),
    b = l(823379),
    y = l(700785),
    C = l(969632),
    N = l(580357),
    I = l(981631),
    O = l(185923),
    S = l(388032),
    _ = l(70164);
function T(e) {
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
function k(e, n) {
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
function E(e, n) {
    switch (e) {
        case p.oi.VIEW:
            return y.Uu(I.Plq.VIEW_CHANNEL, n);
        case p.oi.CHAT:
            if (I.TPd.GUILD_THREADS_ONLY.has(n.type)) return y.Uu(I.Plq.SEND_MESSAGES_IN_THREADS, n) || y.Uu(I.Plq.SEND_MESSAGES, n);
            return y.Uu(I.Plq.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function P() {
    return {
        channelId: [],
        title: [],
        description: [],
        actionType: [],
        emoji: [],
        icon: []
    };
}
function w(e) {
    let n = P(),
        l = x.Z.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < p.Wz) && n.title.push(S.intl.formatToPlainString(S.t.iu6AGh, { minLength: p.Wz })),
        null == e.actionType ||
            null == l ||
            E(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case p.oi.VIEW:
                            return S.intl.string(S.t.lD7FOT);
                        case p.oi.CHAT:
                            return S.intl.string(S.t.fIF2U1);
                        default:
                            (0, b.vE)(e);
                    }
                })(e.actionType)
            ),
        n
    );
}
function Z(e) {
    var n, l, a, b, y;
    let { transitionState: Z, onClose: M, guildId: z, action: D, onSave: G, onDelete: U } = e,
        A = (0, m.Dt)(),
        B = i.useRef(null),
        H = i.useRef(null),
        [R] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = x.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: e.channelId,
                          label: n.name
                      };
            })(D)
        ),
        [F, L] = i.useState(R),
        X = (0, o.e7)([x.Z], () => x.Z.getChannel(null == F ? void 0 : F.value)),
        q = (null == X ? void 0 : X.isMediaChannel()) === !0,
        W = i.useMemo(
            () => [
                {
                    value: p.oi.VIEW,
                    name: S.intl.string(S.t.jfieR0)
                },
                {
                    value: p.oi.CHAT,
                    name: (null == X ? void 0 : X.type) === I.d4z.GUILD_FORUM ? (q ? S.intl.string(S.t['1EgDpK']) : S.intl.string(S.t.x5Di7O)) : S.intl.string(S.t['R+dC4O'])
                }
            ],
            [null == X ? void 0 : X.type, q]
        ),
        [V, Y] = i.useState(P()),
        [K, Q] = i.useState(null != (n = null == D ? void 0 : D.title) ? n : ''),
        J = (0, o.e7)([C.Z], () => {
            let e = C.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return (null != R && n.delete(R.value), n);
        }),
        [$, ee] = i.useState(null == D ? null : null != (y = W.find((e) => e.value === D.actionType)) ? y : null),
        [en, el] = i.useState(null != (l = null == D ? void 0 : D.emoji) ? l : null),
        et = (0, o.e7)([C.Z], () => {
            var e;
            return null == (e = C.Z.getNewMemberAction(null == D ? void 0 : D.channelId)) ? void 0 : e.icon;
        }),
        [ei, ea] = i.useState(
            null != et && null != F
                ? f.ZP.getNewMemberActionIconURL({
                      channelId: F.value,
                      icon: et
                  })
                : null
        ),
        er = (0, c.Z)(ei),
        eo = (0, c.Z)(en),
        es = null == K || 0 === K.length || null == $ || null == F,
        eu = Object.values(V).flat().length > 0,
        ec = i.useCallback(() => {
            if (null == F || null == $ || K.length <= 0) return;
            let e = {
                    channelId: F.value,
                    title: K,
                    description: '',
                    actionType: $.value,
                    emoji: null != en ? en : null,
                    icon: null != et ? et : null
                },
                n = ei !== er || en !== eo;
            (G(e, null != ei ? ei : null, n), M());
        }, [G, M, K, $, F, en, et, ei, er, eo]),
        ed = i.useCallback(() => {
            (null == U || U(), M());
        }, [U, M]),
        em = i.useCallback(
            (e) => {
                (Q(e),
                    Y(
                        w({
                            channelId: null == F ? void 0 : F.value,
                            title: e,
                            description: '',
                            actionType: null == $ ? void 0 : $.value,
                            emoji: null != en ? en : void 0
                        })
                    ));
            },
            [Q, Y, F, $, en]
        ),
        eh = i.useCallback(
            (e) => {
                (L(e),
                    Y(
                        w({
                            channelId: null == e ? void 0 : e.value,
                            title: K,
                            description: '',
                            actionType: null == $ ? void 0 : $.value,
                            emoji: null != en ? en : void 0
                        })
                    ));
            },
            [L, Y, K, $, en]
        ),
        ep = i.useCallback(
            (e) => {
                (ee(e),
                    Y(
                        w({
                            channelId: null == F ? void 0 : F.value,
                            title: K,
                            description: '',
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != en ? en : void 0
                        })
                    ));
            },
            [ee, Y, F, K, en]
        ),
        ev = i.useCallback(
            (e) =>
                Promise.resolve(
                    j.ZP.getSelectableChannels(z)
                        .filter((n) => !J.has(n.channel.id) && (0, p.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [z, J]
        ),
        ex = i.useCallback(
            (e) => {
                if (null == e || null == z) return null;
                let n = x.Z.getChannel(e.value),
                    l = g.Z.getGuild(z);
                if (null == n || null == l) return null;
                let i = (0, d.KS)(n, l);
                return null == i
                    ? null
                    : (0, t.jsx)(i, {
                          size: 'xs',
                          color: 'customColor',
                          className: _.channelIcon
                      });
            },
            [z]
        ),
        ej = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            (el(n), ea(e));
        }, []),
        eg = i.useCallback(() => (null != ei ? ei : null), [ei, en])(),
        ef = i.useCallback(
            (e) => {
                null != e && ej(e, null);
            },
            [ej]
        ),
        eb = (e) => (n) => {
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
        ey = null;
    return (
        (ey =
            null != eg
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)('img', {
                              src: eg,
                              alt: '',
                              'aria-hidden': !0,
                              className: _.__invalid_image,
                              width: 24,
                              height: 24
                          }),
                          (0, t.jsx)('div', {
                              className: _.imageOverlay,
                              children: (0, t.jsx)(s.vdY, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
                : null != en
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(u.Z, {
                                animated: null != (a = en.animated) && a,
                                emojiId: en.id,
                                emojiName: en.name
                            }),
                            (0, t.jsx)('div', {
                                className: _.imageOverlay,
                                children: (0, t.jsx)(s.vdY, {
                                    size: 'md',
                                    color: 'currentColor'
                                })
                            })
                        ]
                    })
                  : (0, t.jsx)(s.FmF, {
                        size: 'md',
                        color: 'currentColor'
                    })),
        (0, t.jsxs)(s.Y0X, {
            transitionState: Z,
            'aria-labelledby': A,
            parentComponent: 'NewMemberActionModal',
            children: [
                (0, t.jsxs)('div', {
                    className: _.container,
                    children: [
                        (0, t.jsx)(s.olH, {
                            className: _.closeButton,
                            onClick: M
                        }),
                        (0, t.jsxs)('div', {
                            className: _.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [S.intl.string(S.t['j+fhOT']), (0, t.jsx)(N.Z, {})]
                                }),
                                (0, t.jsx)(s.oil, {
                                    value: K,
                                    error: (null != (b = null == K ? void 0 : K.length) ? b : 0) > 0 ? V.title.join(', ') : null,
                                    onChange: em,
                                    placeholder: S.intl.string(S.t.oN1Sm5),
                                    maxLength: p.Z3
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: _.separator }),
                        (0, t.jsxs)('div', {
                            className: _.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [S.intl.string(S.t.jVDc5e), (0, t.jsx)(N.Z, {})]
                                }),
                                (0, t.jsx)(s.VcW, {
                                    value: F,
                                    renderOptionPrefix: ex,
                                    options: ev,
                                    onChange: eh
                                }),
                                (0, t.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: S.intl.string(S.t.cypQPz)
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: _.separator }),
                        (0, t.jsxs)('div', {
                            className: _.splitGroup,
                            children: [
                                (0, t.jsxs)('div', {
                                    children: [
                                        (0, t.jsx)(s.X6q, {
                                            variant: 'heading-md/semibold',
                                            color: 'header-primary',
                                            children: S.intl.string(S.t.gs5rQk)
                                        }),
                                        (0, t.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            children: S.intl.string(S.t.LjsoiY)
                                        })
                                    ]
                                }),
                                (0, t.jsx)('div', {
                                    className: _.iconUploadContainer,
                                    children: (0, t.jsx)(s.yRy, {
                                        position: 'bottom',
                                        renderPopout: (e) => {
                                            let n = e.closePopout,
                                                l = (0, t.jsxs)(t.Fragment, {
                                                    children: [
                                                        (0, t.jsx)(v.ZP, {
                                                            onChange: (e) => {
                                                                (ef(e), n());
                                                            },
                                                            tabIndex: 0
                                                        }),
                                                        (0, t.jsx)(s.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'none',
                                                            children: S.intl.string(S.t['2YKkdX'])
                                                        })
                                                    ]
                                                }),
                                                i = (0, t.jsx)(s.yRy, {
                                                    targetElementRef: B,
                                                    position: 'top',
                                                    renderPopout: (e) => {
                                                        let { closePopout: l } = e;
                                                        return (0, t.jsx)(h.Z, {
                                                            closePopout: () => {
                                                                (l(), n());
                                                            },
                                                            onSelectEmoji: eb(() => {
                                                                (l(), n());
                                                            }),
                                                            pickerIntention: O.Hz.COMMUNITY_CONTENT,
                                                            channel: X
                                                        });
                                                    },
                                                    children: (e) =>
                                                        (0, t.jsx)(
                                                            s.Text,
                                                            k(T({}, e), {
                                                                variant: 'text-sm/medium',
                                                                color: 'none',
                                                                ref: B,
                                                                children: S.intl.string(S.t.amsyNz)
                                                            })
                                                        )
                                                });
                                            return (0, t.jsxs)(s.v2r, {
                                                navId: 'set-image-for-action',
                                                'aria-label': 'upload',
                                                onClose: () => !1,
                                                onSelect: () => !1,
                                                children: [
                                                    (0, t.jsx)(s.sNh, {
                                                        id: 'emoji',
                                                        label: i,
                                                        icon: s.EO4
                                                    }),
                                                    (0, t.jsx)(s.sNh, {
                                                        className: _.uploadMenuItem,
                                                        id: 'upload',
                                                        label: l,
                                                        icon: s.rG2
                                                    }),
                                                    null != eg || null != en
                                                        ? (0, t.jsx)(s.sNh, {
                                                              id: 'clear',
                                                              color: 'danger',
                                                              label: S.intl.string(S.t.ZCLmoa),
                                                              icon: s.XHJ,
                                                              action: () => {
                                                                  ej(null);
                                                              }
                                                          })
                                                        : null
                                                ]
                                            });
                                        },
                                        targetElementRef: H,
                                        children: (e) =>
                                            (0, t.jsx)(
                                                'div',
                                                k(T({}, e), {
                                                    className: _.iconUpload,
                                                    ref: H,
                                                    children: ey
                                                })
                                            )
                                    })
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: _.separator }),
                        (0, t.jsxs)('div', {
                            className: _.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [S.intl.string(S.t.MIMVLS), (0, t.jsx)(N.Z, {})]
                                }),
                                (0, t.jsx)(s.FXm, {
                                    withTransparentBackground: !0,
                                    size: s.FXm.Sizes.NONE,
                                    value: null == $ ? void 0 : $.value,
                                    onChange: ep,
                                    options: null == X ? W : W.map((e) => k(T({}, e), { disabled: !E(e.value, X) }))
                                }),
                                null != $ && V.actionType.length > 0
                                    ? V.actionType.map((e) =>
                                          (0, t.jsx)(
                                              s.Text,
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
                (0, t.jsx)(s.mzw, {
                    children: (0, t.jsxs)('div', {
                        className: _.footerButtons,
                        children: [
                            null != D
                                ? (0, t.jsx)('div', {
                                      className: _.removeButton,
                                      children: (0, t.jsx)(s.zxk, {
                                          variant: 'critical-secondary',
                                          size: 'sm',
                                          text: S.intl.string(S.t.N86XcH),
                                          onClick: ed
                                      })
                                  })
                                : (0, t.jsx)('div', {}),
                            (0, t.jsx)('div', {
                                className: _.rightButtons,
                                children: (0, t.jsxs)(s.hE2, {
                                    size: 'sm',
                                    children: [
                                        (0, t.jsx)(s.zxk, {
                                            variant: 'secondary',
                                            text: S.intl.string(S.t['ETE/oK']),
                                            onClick: M
                                        }),
                                        (0, t.jsx)(s.zxk, {
                                            variant: 'primary',
                                            text: S.intl.string(S.t.R3BPHx),
                                            disabled: es || eu,
                                            onClick: ec
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    );
}
