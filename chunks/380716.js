l.d(n, { default: () => z }), l(539854), l(388685), l(472816), l(794429);
var t = l(255367),
    i = l(73800),
    a = l(658722),
    r = l.n(a),
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
    b = l(823379),
    f = l(700785),
    y = l(969632),
    C = l(580357),
    N = l(981631),
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
            return f.Uu(N.Plq.VIEW_CHANNEL, n);
        case h.oi.CHAT:
            if (N.TPd.GUILD_THREADS_ONLY.has(n.type)) return f.Uu(N.Plq.SEND_MESSAGES_IN_THREADS, n) || f.Uu(N.Plq.SEND_MESSAGES, n);
            return f.Uu(N.Plq.SEND_MESSAGES, n);
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
function E(e) {
    let n = P(),
        l = v.Z.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < h.Wz) && n.title.push(I.intl.formatToPlainString(I.t.iu6AGh, { minLength: h.Wz })),
        null == e.actionType ||
            null == l ||
            T(e.actionType, l) ||
            n.actionType.push(
                (function (e) {
                    switch (e) {
                        case h.oi.VIEW:
                            return I.intl.string(I.t.lD7FOT);
                        case h.oi.CHAT:
                            return I.intl.string(I.t.fIF2U1);
                        default:
                            (0, b.vE)(e);
                    }
                })(e.actionType)
            ),
        n
    );
}
function z(e) {
    var n, l, a, b, f;
    let { transitionState: z, onClose: w, guildId: M, action: Z, onSave: L, onDelete: D } = e,
        A = (0, d.Dt)(),
        [G] = i.useState(
            (function (e) {
                if (null == e) return null;
                let n = v.Z.getChannel(e.channelId);
                return null == n
                    ? null
                    : {
                          value: e.channelId,
                          label: n.name
                      };
            })(Z)
        ),
        [U, B] = i.useState(G),
        H = (0, o.e7)([v.Z], () => v.Z.getChannel(null == U ? void 0 : U.value)),
        R = (null == H ? void 0 : H.isMediaChannel()) === !0,
        F = i.useMemo(
            () => [
                {
                    value: h.oi.VIEW,
                    name: I.intl.string(I.t.jfieR0)
                },
                {
                    value: h.oi.CHAT,
                    name: (null == H ? void 0 : H.type) === N.d4z.GUILD_FORUM ? (R ? I.intl.string(I.t['1EgDpK']) : I.intl.string(I.t.x5Di7O)) : I.intl.string(I.t['R+dC4O'])
                }
            ],
            [null == H ? void 0 : H.type, R]
        ),
        [X, q] = i.useState(P()),
        [W, Y] = i.useState(null != (n = null == Z ? void 0 : Z.title) ? n : ''),
        V = (0, o.e7)([y.Z], () => {
            let e = y.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != G && n.delete(G.value), n;
        }),
        [K, Q] = i.useState(null == Z ? null : null != (f = F.find((e) => e.value === Z.actionType)) ? f : null),
        [J, $] = i.useState(null != (l = null == Z ? void 0 : Z.emoji) ? l : null),
        ee = (0, o.e7)([y.Z], () => {
            var e;
            return null == (e = y.Z.getNewMemberAction(null == Z ? void 0 : Z.channelId)) ? void 0 : e.icon;
        }),
        [en, el] = i.useState(null),
        et = null == W || 0 === W.length || null == K || null == U,
        ei = Object.values(X).flat().length > 0,
        ea = i.useCallback(() => {
            if (null == U || null == K || W.length <= 0) return;
            let e = {
                    channelId: U.value,
                    title: W,
                    description: '',
                    actionType: K.value,
                    emoji: null != J ? J : null,
                    icon: null != ee ? ee : null
                },
                n = null != en || null != J;
            L(e, en, n), w();
        }, [L, w, W, K, U, J, ee, en]),
        er = i.useCallback(() => {
            null == D || D(), w();
        }, [D, w]),
        eo = i.useCallback(
            (e) => {
                Y(e),
                    q(
                        E({
                            channelId: null == U ? void 0 : U.value,
                            title: e,
                            description: '',
                            actionType: null == K ? void 0 : K.value,
                            emoji: null != J ? J : void 0
                        })
                    );
            },
            [Y, q, U, K, J]
        ),
        es = i.useCallback(
            (e) => {
                B(e),
                    q(
                        E({
                            channelId: null == e ? void 0 : e.value,
                            title: W,
                            description: '',
                            actionType: null == K ? void 0 : K.value,
                            emoji: null != J ? J : void 0
                        })
                    );
            },
            [B, q, W, K, J]
        ),
        eu = i.useCallback(
            (e) => {
                Q(e),
                    q(
                        E({
                            channelId: null == U ? void 0 : U.value,
                            title: W,
                            description: '',
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != J ? J : void 0
                        })
                    );
            },
            [Q, q, U, W, J]
        ),
        ec = i.useCallback(
            (e) =>
                Promise.resolve(
                    x.ZP.getSelectableChannels(M)
                        .filter((n) => !V.has(n.channel.id) && (0, h.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [M, V]
        ),
        ed = i.useCallback(
            (e) => {
                if (null == e || null == M) return null;
                let n = v.Z.getChannel(e.value),
                    l = j.Z.getGuild(M);
                if (null == n || null == l) return null;
                let i = (0, c.KS)(n, l);
                return null == i
                    ? null
                    : (0, t.jsx)(i, {
                          size: 'xs',
                          color: 'customColor',
                          className: S.channelIcon
                      });
            },
            [M]
        ),
        em = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            $(n), el(e);
        }, []),
        eh = i.useCallback(
            () =>
                null != en
                    ? en
                    : null != J
                      ? null
                      : null != ee && null != U
                        ? g.ZP.getNewMemberActionIconURL({
                              channelId: U.value,
                              icon: ee
                          })
                        : null,
            [U, ee, en, J]
        )(),
        ep = i.useCallback(
            (e) => {
                null != e && em(e, null);
            },
            [em]
        ),
        ev = (e) => (n, l) => {
            var t, i;
            if (null == n) return;
            let a = null;
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
                          name: null != (i = n.originalName) ? i : n.name,
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
                                animated: null != (a = J.animated) && a,
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
            transitionState: z,
            'aria-labelledby': A,
            children: [
                (0, t.jsxs)('div', {
                    className: S.container,
                    children: [
                        (0, t.jsx)(s.olH, {
                            className: S.closeButton,
                            onClick: w
                        }),
                        (0, t.jsxs)('div', {
                            className: S.formGroup,
                            children: [
                                (0, t.jsxs)(s.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    children: [I.intl.string(I.t['j+fhOT']), (0, t.jsx)(C.Z, {})]
                                }),
                                (0, t.jsx)(s.oil, {
                                    value: W,
                                    error: (null != (b = null == W ? void 0 : W.length) ? b : 0) > 0 ? X.title.join(', ') : null,
                                    onChange: eo,
                                    placeholder: I.intl.string(I.t.oN1Sm5),
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
                                    children: [I.intl.string(I.t.jVDc5e), (0, t.jsx)(C.Z, {})]
                                }),
                                (0, t.jsx)(s.VcW, {
                                    value: U,
                                    renderOptionPrefix: ed,
                                    options: ec,
                                    onChange: es
                                }),
                                (0, t.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: I.intl.string(I.t.cypQPz)
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
                                            children: I.intl.string(I.t.gs5rQk)
                                        }),
                                        (0, t.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            children: I.intl.string(I.t.LjsoiY)
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
                                                            children: I.intl.string(I.t['2YKkdX'])
                                                        })
                                                    ]
                                                }),
                                                i = (0, t.jsx)(s.yRy, {
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
                                                            channel: H
                                                        });
                                                    },
                                                    children: (e) =>
                                                        (0, t.jsx)(
                                                            s.Text,
                                                            _(O({}, e), {
                                                                variant: 'text-sm/medium',
                                                                color: 'none',
                                                                children: I.intl.string(I.t.amsyNz)
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
                                                        className: S.uploadMenuItem,
                                                        id: 'upload',
                                                        label: l,
                                                        icon: s.rG2
                                                    }),
                                                    (0, t.jsx)(s.sNh, {
                                                        id: 'clear',
                                                        color: 'danger',
                                                        label: I.intl.string(I.t.ZCLmoa),
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
                                    children: [I.intl.string(I.t.MIMVLS), (0, t.jsx)(C.Z, {})]
                                }),
                                (0, t.jsx)(s.FXm, {
                                    withTransparentBackground: !0,
                                    size: s.FXm.Sizes.NONE,
                                    value: null == K ? void 0 : K.value,
                                    onChange: eu,
                                    options: null == H ? F : F.map((e) => _(O({}, e), { disabled: !T(e.value, H) }))
                                }),
                                null != K && X.actionType.length > 0
                                    ? X.actionType.map((e) =>
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
                            null != Z
                                ? (0, t.jsx)('div', {
                                      className: S.removeButton,
                                      children: (0, t.jsx)(s.zxk, {
                                          size: s.zxk.Sizes.SMALL,
                                          look: s.zxk.Looks.LINK,
                                          color: s.zxk.Colors.RED,
                                          onClick: er,
                                          children: I.intl.string(I.t.N86XcH)
                                      })
                                  })
                                : (0, t.jsx)('div', {}),
                            (0, t.jsxs)('div', {
                                className: S.rightButtons,
                                children: [
                                    (0, t.jsx)(s.zxk, {
                                        onClick: w,
                                        size: s.zxk.Sizes.SMALL,
                                        look: s.zxk.Looks.LINK,
                                        color: s.zxk.Colors.PRIMARY,
                                        children: I.intl.string(I.t['ETE/oK'])
                                    }),
                                    (0, t.jsx)(s.zxk, {
                                        disabled: et || ei,
                                        onClick: ea,
                                        children: I.intl.string(I.t.R3BPHx)
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
