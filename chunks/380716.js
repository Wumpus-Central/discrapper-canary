(l.d(n, { default: () => w }), l(539854), l(388685), l(472816), l(794429));
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
    g = l(984933),
    j = l(430824),
    f = l(768581),
    b = l(823379),
    y = l(700785),
    C = l(969632),
    N = l(580357),
    k = l(981631),
    I = l(185923),
    S = l(388032),
    O = l(70164);
function _(e) {
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
function T(e, n) {
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
            return y.Uu(k.Plq.VIEW_CHANNEL, n);
        case p.oi.CHAT:
            if (k.TPd.GUILD_THREADS_ONLY.has(n.type)) return y.Uu(k.Plq.SEND_MESSAGES_IN_THREADS, n) || y.Uu(k.Plq.SEND_MESSAGES, n);
            return y.Uu(k.Plq.SEND_MESSAGES, n);
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
function z(e) {
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
function w(e) {
    var n, l, a, b, y;
    let { transitionState: w, onClose: M, guildId: Z, action: L, onSave: A, onDelete: D } = e,
        G = (0, m.Dt)(),
        R = i.useRef(null),
        U = i.useRef(null),
        [B] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = x.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: e.channelId,
                          label: n.name
                      };
            })(L)
        ),
        [H, F] = i.useState(B),
        X = (0, o.e7)([x.Z], () => x.Z.getChannel(null == H ? void 0 : H.value)),
        q = (null == X ? void 0 : X.isMediaChannel()) === !0,
        W = i.useMemo(
            () => [
                {
                    value: p.oi.VIEW,
                    name: S.intl.string(S.t.jfieR0)
                },
                {
                    value: p.oi.CHAT,
                    name: (null == X ? void 0 : X.type) === k.d4z.GUILD_FORUM ? (q ? S.intl.string(S.t['1EgDpK']) : S.intl.string(S.t.x5Di7O)) : S.intl.string(S.t['R+dC4O'])
                }
            ],
            [null == X ? void 0 : X.type, q]
        ),
        [Y, V] = i.useState(P()),
        [K, Q] = i.useState(null != (n = null == L ? void 0 : L.title) ? n : ''),
        J = (0, o.e7)([C.Z], () => {
            let e = C.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return (null != B && n.delete(B.value), n);
        }),
        [$, ee] = i.useState(null == L ? null : null != (y = W.find((e) => e.value === L.actionType)) ? y : null),
        [en, el] = i.useState(null != (l = null == L ? void 0 : L.emoji) ? l : null),
        et = (0, o.e7)([C.Z], () => {
            var e;
            return null == (e = C.Z.getNewMemberAction(null == L ? void 0 : L.channelId)) ? void 0 : e.icon;
        }),
        [ei, ea] = i.useState(
            null != et && null != H
                ? f.ZP.getNewMemberActionIconURL({
                      channelId: H.value,
                      icon: et
                  })
                : null
        ),
        er = (0, c.Z)(ei),
        eo = (0, c.Z)(en),
        es = null == K || 0 === K.length || null == $ || null == H,
        eu = Object.values(Y).flat().length > 0,
        ec = i.useCallback(() => {
            if (null == H || null == $ || K.length <= 0) return;
            let e = {
                    channelId: H.value,
                    title: K,
                    description: '',
                    actionType: $.value,
                    emoji: null != en ? en : null,
                    icon: null != et ? et : null
                },
                n = ei !== er || en !== eo;
            (A(e, null != ei ? ei : null, n), M());
        }, [A, M, K, $, H, en, et, ei, er, eo]),
        ed = i.useCallback(() => {
            (null == D || D(), M());
        }, [D, M]),
        em = i.useCallback(
            (e) => {
                (Q(e),
                    V(
                        z({
                            channelId: null == H ? void 0 : H.value,
                            title: e,
                            description: '',
                            actionType: null == $ ? void 0 : $.value,
                            emoji: null != en ? en : void 0
                        })
                    ));
            },
            [Q, V, H, $, en]
        ),
        eh = i.useCallback(
            (e) => {
                (F(e),
                    V(
                        z({
                            channelId: null == e ? void 0 : e.value,
                            title: K,
                            description: '',
                            actionType: null == $ ? void 0 : $.value,
                            emoji: null != en ? en : void 0
                        })
                    ));
            },
            [F, V, K, $, en]
        ),
        ep = i.useCallback(
            (e) => {
                (ee(e),
                    V(
                        z({
                            channelId: null == H ? void 0 : H.value,
                            title: K,
                            description: '',
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != en ? en : void 0
                        })
                    ));
            },
            [ee, V, H, K, en]
        ),
        ev = i.useCallback(
            (e) =>
                Promise.resolve(
                    g.ZP.getSelectableChannels(Z)
                        .filter((n) => !J.has(n.channel.id) && (0, p.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [Z, J]
        ),
        ex = i.useCallback(
            (e) => {
                if (null == e || null == Z) return null;
                let n = x.Z.getChannel(e.value),
                    l = j.Z.getGuild(Z);
                if (null == n || null == l) return null;
                let i = (0, d.KS)(n, l);
                return null == i
                    ? null
                    : (0, t.jsx)(i, {
                          size: 'xs',
                          color: 'customColor',
                          className: O.channelIcon
                      });
            },
            [Z]
        ),
        eg = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            (el(n), ea(e));
        }, []),
        ej = i.useCallback(() => (null != ei ? ei : null), [ei, en])(),
        ef = i.useCallback(
            (e) => {
                null != e && eg(e, null);
            },
            [eg]
        ),
        eb = (e) => (n) => {
            var l, t;
            let { emoji: i, willClose: a } = n;
            if (null == i) return;
            let r = null;
            (eg(
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
            null != ej
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)('img', {
                              src: ej,
                              alt: '',
                              'aria-hidden': !0,
                              className: O.__invalid_image,
                              width: 24,
                              height: 24
                          }),
                          (0, t.jsx)('div', {
                              className: O.imageOverlay,
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
                                className: O.imageOverlay,
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
            transitionState: w,
            'aria-labelledby': G,
            parentComponent: 'NewMemberActionModal',
            children: [
                (0, t.jsxs)('div', {
                    className: O.container,
                    children: [
                        (0, t.jsx)(s.olH, {
                            className: O.closeButton,
                            onClick: M
                        }),
                        (0, t.jsxs)('div', {
                            className: O.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [S.intl.string(S.t['j+fhOT']), (0, t.jsx)(N.Z, {})]
                                }),
                                (0, t.jsx)(s.oil, {
                                    value: K,
                                    error: (null != (b = null == K ? void 0 : K.length) ? b : 0) > 0 ? Y.title.join(', ') : null,
                                    onChange: em,
                                    placeholder: S.intl.string(S.t.oN1Sm5),
                                    maxLength: p.Z3
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: O.separator }),
                        (0, t.jsxs)('div', {
                            className: O.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [S.intl.string(S.t.jVDc5e), (0, t.jsx)(N.Z, {})]
                                }),
                                (0, t.jsx)(s.VcW, {
                                    value: H,
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
                        (0, t.jsx)('div', { className: O.separator }),
                        (0, t.jsxs)('div', {
                            className: O.splitGroup,
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
                                    className: O.iconUploadContainer,
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
                                                    targetElementRef: R,
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
                                                            pickerIntention: I.Hz.COMMUNITY_CONTENT,
                                                            channel: X
                                                        });
                                                    },
                                                    children: (e) =>
                                                        (0, t.jsx)(
                                                            s.Text,
                                                            T(_({}, e), {
                                                                variant: 'text-sm/medium',
                                                                color: 'none',
                                                                ref: R,
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
                                                        className: O.uploadMenuItem,
                                                        id: 'upload',
                                                        label: l,
                                                        icon: s.rG2
                                                    }),
                                                    null != ej || null != en
                                                        ? (0, t.jsx)(s.sNh, {
                                                              id: 'clear',
                                                              color: 'danger',
                                                              label: S.intl.string(S.t.ZCLmoa),
                                                              icon: s.XHJ,
                                                              action: () => {
                                                                  eg(null);
                                                              }
                                                          })
                                                        : null
                                                ]
                                            });
                                        },
                                        targetElementRef: U,
                                        children: (e) =>
                                            (0, t.jsx)(
                                                'div',
                                                T(_({}, e), {
                                                    className: O.iconUpload,
                                                    ref: U,
                                                    children: ey
                                                })
                                            )
                                    })
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: O.separator }),
                        (0, t.jsxs)('div', {
                            className: O.formGroup,
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
                                    options: null == X ? W : W.map((e) => T(_({}, e), { disabled: !E(e.value, X) }))
                                }),
                                null != $ && Y.actionType.length > 0
                                    ? Y.actionType.map((e) =>
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
                        className: O.footerButtons,
                        children: [
                            null != L
                                ? (0, t.jsx)('div', {
                                      className: O.removeButton,
                                      children: (0, t.jsx)(s.zxk, {
                                          size: s.zxk.Sizes.SMALL,
                                          look: s.zxk.Looks.LINK,
                                          color: s.zxk.Colors.RED,
                                          onClick: ed,
                                          children: S.intl.string(S.t.N86XcH)
                                      })
                                  })
                                : (0, t.jsx)('div', {}),
                            (0, t.jsxs)('div', {
                                className: O.rightButtons,
                                children: [
                                    (0, t.jsx)(s.zxk, {
                                        onClick: M,
                                        size: s.zxk.Sizes.SMALL,
                                        look: s.zxk.Looks.LINK,
                                        color: s.zxk.Colors.PRIMARY,
                                        children: S.intl.string(S.t['ETE/oK'])
                                    }),
                                    (0, t.jsx)(s.zxk, {
                                        disabled: es || eu,
                                        onClick: ec,
                                        children: S.intl.string(S.t.R3BPHx)
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    );
}
