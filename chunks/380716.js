l.d(n, { default: () => E }), l(653041), l(47120), l(86693), l(536091);
var t = l(200651),
    a = l(192379),
    i = l(658722),
    r = l.n(i),
    o = l(399606),
    s = l(481060),
    u = l(596454),
    c = l(471445),
    d = l(313201),
    m = l(907040),
    h = l(734893),
    p = l(813197),
    v = l(592125),
    x = l(984933),
    j = l(430824),
    g = l(768581),
    N = l(823379),
    b = l(700785),
    f = l(969632),
    y = l(580357),
    C = l(981631),
    k = l(185923),
    I = l(388032),
    S = l(70164);
function O(e) {
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
}
function _(e, n) {
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
function T(e, n) {
    switch (e) {
        case h.oi.VIEW:
            return b.Uu(C.Plq.VIEW_CHANNEL, n);
        case h.oi.CHAT:
            if (C.TPd.GUILD_THREADS_ONLY.has(n.type)) return b.Uu(C.Plq.SEND_MESSAGES_IN_THREADS, n) || b.Uu(C.Plq.SEND_MESSAGES, n);
            return b.Uu(C.Plq.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function W() {
    return {
        channelId: [],
        title: [],
        description: [],
        actionType: [],
        emoji: [],
        icon: []
    };
}
function P(e) {
    let n = W(),
        l = v.Z.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < h.Wz) && n.title.push(I.NW.formatToPlainString(I.t.iu6AGh, { minLength: h.Wz })),
        null == e.actionType ||
            null == l ||
            T(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case h.oi.VIEW:
                            return I.NW.string(I.t.lD7FOT);
                        case h.oi.CHAT:
                            return I.NW.string(I.t.fIF2U1);
                        default:
                            (0, N.vE)(e);
                    }
                })(e.actionType)
            ),
        n
    );
}
function E(e) {
    var n, l, i, N, b;
    let { transitionState: E, onClose: z, guildId: w, action: M, onSave: Z, onDelete: L } = e,
        D = (0, d.Dt)(),
        [A] = a.useState(
            (function (e) {
                if (null == e) return null;
                let n = v.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: e.channelId,
                          label: n.name
                      };
            })(M)
        ),
        [G, U] = a.useState(A),
        B = (0, o.e7)([v.Z], () => v.Z.getChannel(null == G ? void 0 : G.value)),
        H = (null == B ? void 0 : B.isMediaChannel()) === !0,
        R = a.useMemo(
            () => [
                {
                    value: h.oi.VIEW,
                    name: I.NW.string(I.t.jfieR0)
                },
                {
                    value: h.oi.CHAT,
                    name: (null == B ? void 0 : B.type) === C.d4z.GUILD_FORUM ? (H ? I.NW.string(I.t['1EgDpK']) : I.NW.string(I.t.x5Di7O)) : I.NW.string(I.t['R+dC4O'])
                }
            ],
            [null == B ? void 0 : B.type, H]
        ),
        [F, X] = a.useState(W()),
        [q, Y] = a.useState(null != (n = null == M ? void 0 : M.title) ? n : ''),
        V = (0, o.e7)([f.Z], () => {
            let e = f.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != A && n.delete(A.value), n;
        }),
        [K, Q] = a.useState(null == M ? null : null != (b = R.find((e) => e.value === M.actionType)) ? b : null),
        [J, $] = a.useState(null != (l = null == M ? void 0 : M.emoji) ? l : null),
        ee = (0, o.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getNewMemberAction(null == M ? void 0 : M.channelId)) ? void 0 : e.icon;
        }),
        [en, el] = a.useState(null),
        et = null == q || 0 === q.length || null == K || null == G,
        ea = Object.values(F).flat().length > 0,
        ei = a.useCallback(() => {
            if (null == G || null == K || q.length <= 0) return;
            let e = {
                    channelId: G.value,
                    title: q,
                    description: '',
                    actionType: K.value,
                    emoji: null != J ? J : null,
                    icon: null != ee ? ee : null
                },
                n = null != en || null != J;
            Z(e, en, n), z();
        }, [Z, z, q, K, G, J, ee, en]),
        er = a.useCallback(() => {
            null == L || L(), z();
        }, [L, z]),
        eo = a.useCallback(
            (e) => {
                Y(e),
                    X(
                        P({
                            channelId: null == G ? void 0 : G.value,
                            title: e,
                            description: '',
                            actionType: null == K ? void 0 : K.value,
                            emoji: null != J ? J : void 0
                        })
                    );
            },
            [Y, X, G, K, J]
        ),
        es = a.useCallback(
            (e) => {
                U(e),
                    X(
                        P({
                            channelId: null == e ? void 0 : e.value,
                            title: q,
                            description: '',
                            actionType: null == K ? void 0 : K.value,
                            emoji: null != J ? J : void 0
                        })
                    );
            },
            [U, X, q, K, J]
        ),
        eu = a.useCallback(
            (e) => {
                Q(e),
                    X(
                        P({
                            channelId: null == G ? void 0 : G.value,
                            title: q,
                            description: '',
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != J ? J : void 0
                        })
                    );
            },
            [Q, X, G, q, J]
        ),
        ec = a.useCallback(
            (e) =>
                Promise.resolve(
                    x.ZP.getSelectableChannels(w)
                        .filter((n) => !V.has(n.channel.id) && (0, h.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [w, V]
        ),
        ed = a.useCallback(
            (e) => {
                if (null == e || null == w) return null;
                let n = v.Z.getChannel(e.value),
                    l = j.Z.getGuild(w);
                if (null == n || null == l) return null;
                let a = (0, c.KS)(n, l);
                return null == a
                    ? null
                    : (0, t.jsx)(a, {
                          size: 'xs',
                          color: 'customColor',
                          className: S.channelIcon
                      });
            },
            [w]
        ),
        em = a.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            $(n), el(e);
        }, []),
        eh = a.useCallback(
            () =>
                null != en
                    ? en
                    : null != J
                      ? null
                      : null != ee && null != G
                        ? g.ZP.getNewMemberActionIconURL({
                              channelId: G.value,
                              icon: ee
                          })
                        : null,
            [G, ee, en, J]
        )(),
        ep = a.useCallback(
            (e) => {
                null != e && em(e, null);
            },
            [em]
        ),
        ev = (e) => (n, l) => {
            var t, a;
            if (null == n) return;
            let i = null;
            em(
                null,
                null == n.id
                    ? {
                          id: null,
                          name: null != (t = n.optionallyDiverseSequence) ? t : '',
                          animated: !1
                      }
                    : {
                          id: n.id,
                          name: null != (a = n.originalName) ? a : n.name,
                          animated: n.animated
                      }
            ),
                l && e();
        },
        ex = null;
    return (
        (ex =
            null != eh
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)('img', {
                              src: eh,
                              alt: '',
                              'aria-hidden': !0,
                              className: S.__invalid_image,
                              width: 24,
                              height: 24
                          }),
                          (0, t.jsx)('div', {
                              className: S.imageOverlay,
                              children: (0, t.jsx)(s.vdY, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
                : null != J
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(u.Z, {
                                animated: null != (i = J.animated) && i,
                                emojiId: J.id,
                                emojiName: J.name
                            }),
                            (0, t.jsx)('div', {
                                className: S.imageOverlay,
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
            transitionState: E,
            'aria-labelledby': D,
            children: [
                (0, t.jsxs)('div', {
                    className: S.container,
                    children: [
                        (0, t.jsx)(s.olH, {
                            className: S.closeButton,
                            onClick: z
                        }),
                        (0, t.jsxs)('div', {
                            className: S.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [I.NW.string(I.t['j+fhOT']), (0, t.jsx)(y.Z, {})]
                                }),
                                (0, t.jsx)(s.oil, {
                                    value: q,
                                    error: (null != (N = null == q ? void 0 : q.length) ? N : 0) > 0 ? F.title.join(', ') : null,
                                    onChange: eo,
                                    placeholder: I.NW.string(I.t.oN1Sm5),
                                    maxLength: h.Z3
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: S.separator }),
                        (0, t.jsxs)('div', {
                            className: S.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [I.NW.string(I.t.jVDc5e), (0, t.jsx)(y.Z, {})]
                                }),
                                (0, t.jsx)(s.VcW, {
                                    value: G,
                                    renderOptionPrefix: ed,
                                    options: ec,
                                    onChange: es
                                }),
                                (0, t.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: I.NW.string(I.t.cypQPz)
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: S.separator }),
                        (0, t.jsxs)('div', {
                            className: S.splitGroup,
                            children: [
                                (0, t.jsxs)('div', {
                                    children: [
                                        (0, t.jsx)(s.X6q, {
                                            variant: 'heading-md/semibold',
                                            color: 'header-primary',
                                            children: I.NW.string(I.t.gs5rQk)
                                        }),
                                        (0, t.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            children: I.NW.string(I.t.LjsoiY)
                                        })
                                    ]
                                }),
                                (0, t.jsx)('div', {
                                    className: S.iconUploadContainer,
                                    children: (0, t.jsx)(s.yRy, {
                                        position: 'bottom',
                                        renderPopout: (e) => {
                                            let n = e.closePopout,
                                                l = (0, t.jsxs)(t.Fragment, {
                                                    children: [
                                                        (0, t.jsx)(p.ZP, {
                                                            onChange: (e) => {
                                                                ep(e), n();
                                                            },
                                                            tabIndex: 0
                                                        }),
                                                        (0, t.jsx)(s.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'none',
                                                            children: I.NW.string(I.t['2YKkdX'])
                                                        })
                                                    ]
                                                }),
                                                a = (0, t.jsx)(s.yRy, {
                                                    position: 'top',
                                                    renderPopout: (e) => {
                                                        let { closePopout: l } = e;
                                                        return (0, t.jsx)(m.Z, {
                                                            closePopout: () => {
                                                                l(), n();
                                                            },
                                                            onSelectEmoji: ev(() => {
                                                                l(), n();
                                                            }),
                                                            pickerIntention: k.Hz.COMMUNITY_CONTENT,
                                                            channel: B
                                                        });
                                                    },
                                                    children: (e) =>
                                                        (0, t.jsx)(
                                                            s.Text,
                                                            _(O({}, e), {
                                                                variant: 'text-sm/medium',
                                                                color: 'none',
                                                                children: I.NW.string(I.t.amsyNz)
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
                                                        label: a,
                                                        icon: s.EO4
                                                    }),
                                                    (0, t.jsx)(s.sNh, {
                                                        className: S.uploadMenuItem,
                                                        id: 'upload',
                                                        label: l,
                                                        icon: s.rG2
                                                    }),
                                                    (0, t.jsx)(s.sNh, {
                                                        id: 'clear',
                                                        color: 'danger',
                                                        label: I.NW.string(I.t.ZCLmoa),
                                                        icon: s.XHJ,
                                                        action: () => {
                                                            em(null);
                                                        }
                                                    })
                                                ]
                                            });
                                        },
                                        children: (e) =>
                                            (0, t.jsx)(
                                                'div',
                                                _(O({}, e), {
                                                    className: S.iconUpload,
                                                    children: ex
                                                })
                                            )
                                    })
                                })
                            ]
                        }),
                        (0, t.jsx)('div', { className: S.separator }),
                        (0, t.jsxs)('div', {
                            className: S.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [I.NW.string(I.t.MIMVLS), (0, t.jsx)(y.Z, {})]
                                }),
                                (0, t.jsx)(s.FXm, {
                                    withTransparentBackground: !0,
                                    size: s.FXm.Sizes.NONE,
                                    value: null == K ? void 0 : K.value,
                                    onChange: eu,
                                    options: null == B ? R : R.map((e) => _(O({}, e), { disabled: !T(e.value, B) }))
                                }),
                                null != K && F.actionType.length > 0
                                    ? F.actionType.map((e) =>
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
                        className: S.footerButtons,
                        children: [
                            null != M
                                ? (0, t.jsx)('div', {
                                      className: S.removeButton,
                                      children: (0, t.jsx)(s.zxk, {
                                          size: s.zxk.Sizes.SMALL,
                                          look: s.zxk.Looks.LINK,
                                          color: s.zxk.Colors.RED,
                                          onClick: er,
                                          children: I.NW.string(I.t.N86XcH)
                                      })
                                  })
                                : (0, t.jsx)('div', {}),
                            (0, t.jsxs)('div', {
                                className: S.rightButtons,
                                children: [
                                    (0, t.jsx)(s.zxk, {
                                        onClick: z,
                                        size: s.zxk.Sizes.SMALL,
                                        look: s.zxk.Looks.LINK,
                                        color: s.zxk.Colors.PRIMARY,
                                        children: I.NW.string(I.t['ETE/oK'])
                                    }),
                                    (0, t.jsx)(s.zxk, {
                                        disabled: et || ea,
                                        onClick: ei,
                                        children: I.NW.string(I.t.R3BPHx)
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
