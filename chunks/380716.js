n.d(l, { default: () => E }), n(653041), n(47120), n(536091);
var t = n(200651),
    i = n(192379),
    a = n(658722),
    o = n.n(a),
    r = n(399606),
    s = n(481060),
    u = n(596454),
    c = n(471445),
    d = n(313201),
    m = n(907040),
    h = n(734893),
    v = n(813197),
    x = n(592125),
    p = n(984933),
    g = n(430824),
    j = n(768581),
    C = n(823379),
    N = n(700785),
    I = n(969632),
    k = n(580357),
    f = n(981631),
    S = n(185923),
    b = n(388032),
    _ = n(916753);
function T(e, l) {
    switch (e) {
        case h.oi.VIEW:
            return N.Uu(f.Plq.VIEW_CHANNEL, l);
        case h.oi.CHAT:
            if (f.TPd.GUILD_THREADS_ONLY.has(l.type)) return N.Uu(f.Plq.SEND_MESSAGES_IN_THREADS, l) || N.Uu(f.Plq.SEND_MESSAGES, l);
            return N.Uu(f.Plq.SEND_MESSAGES, l);
        default:
            return !1;
    }
}
function y() {
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
    let l = y(),
        n = x.Z.getChannel(e.channelId);
    return (
        (null == e.title || e.title.length < h.Wz) && l.title.push(b.intl.formatToPlainString(b.t.iu6AGh, { minLength: h.Wz })),
        null == e.actionType ||
            null == n ||
            T(e.actionType, n) ||
            l.actionType.push(
                (function (e) {
                    switch (e) {
                        case h.oi.VIEW:
                            return b.intl.string(b.t.lD7FOT);
                        case h.oi.CHAT:
                            return b.intl.string(b.t.fIF2U1);
                        default:
                            (0, C.vE)(e);
                    }
                })(e.actionType)
            ),
        l
    );
}
function E(e) {
    var l, n, a, C, N;
    let { transitionState: E, onClose: M, guildId: Z, action: L, onSave: P, onDelete: A } = e,
        G = (0, d.Dt)(),
        [O] = i.useState(
            (function (e) {
                if (null == e) return null;
                let l = x.Z.getChannel(e.channelId);
                return null == l
                    ? null
                    : {
                          value: e.channelId,
                          label: l.name
                      };
            })(L)
        ),
        [U, w] = i.useState(O),
        B = (0, r.e7)([x.Z], () => x.Z.getChannel(null == U ? void 0 : U.value)),
        D = (null == B ? void 0 : B.isMediaChannel()) === !0,
        H = i.useMemo(
            () => [
                {
                    value: h.oi.VIEW,
                    name: b.intl.string(b.t.jfieR0)
                },
                {
                    value: h.oi.CHAT,
                    name: (null == B ? void 0 : B.type) === f.d4z.GUILD_FORUM ? (D ? b.intl.string(b.t['1EgDpK']) : b.intl.string(b.t.x5Di7O)) : b.intl.string(b.t['R+dC4O'])
                }
            ],
            [null == B ? void 0 : B.type, D]
        ),
        [R, F] = i.useState(y()),
        [X, q] = i.useState(null !== (l = null == L ? void 0 : L.title) && void 0 !== l ? l : ''),
        W = (0, r.e7)([I.Z], () => {
            let e = I.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let l = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != O && l.delete(O.value), l;
        }),
        [Y, V] = i.useState(null == L ? null : null !== (N = H.find((e) => e.value === L.actionType)) && void 0 !== N ? N : null),
        [K, Q] = i.useState(null !== (n = null == L ? void 0 : L.emoji) && void 0 !== n ? n : null),
        J = (0, r.e7)([I.Z], () => {
            var e;
            return null === (e = I.Z.getNewMemberAction(null == L ? void 0 : L.channelId)) || void 0 === e ? void 0 : e.icon;
        }),
        [$, ee] = i.useState(null),
        el = null == X || 0 === X.length || null == Y || null == U,
        en = Object.values(R).flat().length > 0,
        et = i.useCallback(() => {
            if (null == U || null == Y || X.length <= 0) return;
            let e = {
                    channelId: U.value,
                    title: X,
                    description: '',
                    actionType: Y.value,
                    emoji: null != K ? K : null,
                    icon: null != J ? J : null
                },
                l = null != $ || null != K;
            P(e, $, l), M();
        }, [P, M, X, Y, U, K, J, $]),
        ei = i.useCallback(() => {
            null == A || A(), M();
        }, [A, M]),
        ea = i.useCallback(
            (e) => {
                q(e),
                    F(
                        z({
                            channelId: null == U ? void 0 : U.value,
                            title: e,
                            description: '',
                            actionType: null == Y ? void 0 : Y.value,
                            emoji: null != K ? K : void 0
                        })
                    );
            },
            [q, F, U, Y, K]
        ),
        eo = i.useCallback(
            (e) => {
                w(e),
                    F(
                        z({
                            channelId: null == e ? void 0 : e.value,
                            title: X,
                            description: '',
                            actionType: null == Y ? void 0 : Y.value,
                            emoji: null != K ? K : void 0
                        })
                    );
            },
            [w, F, X, Y, K]
        ),
        er = i.useCallback(
            (e) => {
                V(e),
                    F(
                        z({
                            channelId: null == U ? void 0 : U.value,
                            title: X,
                            description: '',
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != K ? K : void 0
                        })
                    );
            },
            [V, F, U, X, K]
        ),
        es = i.useCallback(
            (e) =>
                Promise.resolve(
                    p.ZP.getSelectableChannels(Z)
                        .filter((l) => !W.has(l.channel.id) && (0, h.kb)(l.channel) && o()(e, l.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [Z, W]
        ),
        eu = i.useCallback(
            (e) => {
                if (null == e || null == Z) return null;
                let l = x.Z.getChannel(e.value),
                    n = g.Z.getGuild(Z);
                if (null == l || null == n) return null;
                let i = (0, c.KS)(l, n);
                return null == i
                    ? null
                    : (0, t.jsx)(i, {
                          size: 'xs',
                          color: 'customColor',
                          className: _.channelIcon
                      });
            },
            [Z]
        ),
        ec = i.useCallback(function (e) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            Q(l), ee(e);
        }, []),
        ed = i.useCallback(
            () =>
                null != $
                    ? $
                    : null != K
                      ? null
                      : null != J && null != U
                        ? j.ZP.getNewMemberActionIconURL({
                              channelId: U.value,
                              icon: J
                          })
                        : null,
            [U, J, $, K]
        )(),
        em = i.useCallback(
            (e) => {
                null != e && ec(e, null);
            },
            [ec]
        ),
        eh = (e) => (l, n) => {
            var t, i;
            if (null == l) return;
            let a = null;
            ec(
                null,
                null == l.id
                    ? {
                          id: null,
                          name: null !== (t = l.optionallyDiverseSequence) && void 0 !== t ? t : '',
                          animated: !1
                      }
                    : {
                          id: l.id,
                          name: null !== (i = l.originalName) && void 0 !== i ? i : l.name,
                          animated: l.animated
                      }
            ),
                n && e();
        },
        ev = null;
    return (
        (ev =
            null != ed
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)('img', {
                              src: ed,
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
                : null != K
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(u.Z, {
                                animated: null !== (a = K.animated) && void 0 !== a && a,
                                emojiId: K.id,
                                emojiName: K.name
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
            transitionState: E,
            'aria-labelledby': G,
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
                                    children: [b.intl.string(b.t['j+fhOT']), (0, t.jsx)(k.Z, {})]
                                }),
                                (0, t.jsx)(s.oil, {
                                    value: X,
                                    error: (null !== (C = null == X ? void 0 : X.length) && void 0 !== C ? C : 0) > 0 ? R.title.join(', ') : null,
                                    onChange: ea,
                                    placeholder: b.intl.string(b.t.oN1Sm5),
                                    maxLength: h.Z3
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
                                    children: [b.intl.string(b.t.jVDc5e), (0, t.jsx)(k.Z, {})]
                                }),
                                (0, t.jsx)(s.VcW, {
                                    value: U,
                                    renderOptionPrefix: eu,
                                    options: es,
                                    onChange: eo
                                }),
                                (0, t.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: b.intl.string(b.t.cypQPz)
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
                                            children: b.intl.string(b.t.gs5rQk)
                                        }),
                                        (0, t.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-muted',
                                            children: b.intl.string(b.t.LjsoiY)
                                        })
                                    ]
                                }),
                                (0, t.jsx)('div', {
                                    className: _.iconUploadContainer,
                                    children: (0, t.jsx)(s.yRy, {
                                        position: 'bottom',
                                        renderPopout: (e) => {
                                            let l = e.closePopout,
                                                n = (0, t.jsxs)(t.Fragment, {
                                                    children: [
                                                        (0, t.jsx)(v.ZP, {
                                                            onChange: (e) => {
                                                                em(e), l();
                                                            },
                                                            tabIndex: 0
                                                        }),
                                                        (0, t.jsx)(s.Text, {
                                                            variant: 'text-sm/medium',
                                                            color: 'none',
                                                            children: b.intl.string(b.t['2YKkdX'])
                                                        })
                                                    ]
                                                }),
                                                i = (0, t.jsx)(s.yRy, {
                                                    position: 'top',
                                                    renderPopout: (e) => {
                                                        let { closePopout: n } = e;
                                                        return (0, t.jsx)(m.Z, {
                                                            closePopout: () => {
                                                                n(), l();
                                                            },
                                                            onSelectEmoji: eh(() => {
                                                                n(), l();
                                                            }),
                                                            pickerIntention: S.Hz.COMMUNITY_CONTENT,
                                                            channel: B
                                                        });
                                                    },
                                                    children: (e) =>
                                                        (0, t.jsx)(s.Text, {
                                                            ...e,
                                                            variant: 'text-sm/medium',
                                                            color: 'none',
                                                            children: b.intl.string(b.t.amsyNz)
                                                        })
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
                                                        label: n,
                                                        icon: s.rG2
                                                    }),
                                                    (0, t.jsx)(s.sNh, {
                                                        id: 'clear',
                                                        color: 'danger',
                                                        label: b.intl.string(b.t.ZCLmoa),
                                                        icon: s.XHJ,
                                                        action: () => {
                                                            ec(null);
                                                        }
                                                    })
                                                ]
                                            });
                                        },
                                        children: (e) =>
                                            (0, t.jsx)('div', {
                                                ...e,
                                                className: _.iconUpload,
                                                children: ev
                                            })
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
                                    children: [b.intl.string(b.t.MIMVLS), (0, t.jsx)(k.Z, {})]
                                }),
                                (0, t.jsx)(s.FXm, {
                                    withTransparentBackground: !0,
                                    size: s.FXm.Sizes.NONE,
                                    value: null == Y ? void 0 : Y.value,
                                    onChange: er,
                                    options:
                                        null == B
                                            ? H
                                            : H.map((e) => ({
                                                  ...e,
                                                  disabled: !T(e.value, B)
                                              }))
                                }),
                                null != Y && R.actionType.length > 0
                                    ? R.actionType.map((e) =>
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
                            null != L
                                ? (0, t.jsx)('div', {
                                      className: _.removeButton,
                                      children: (0, t.jsx)(s.zxk, {
                                          size: s.zxk.Sizes.SMALL,
                                          look: s.zxk.Looks.LINK,
                                          color: s.zxk.Colors.RED,
                                          onClick: ei,
                                          children: b.intl.string(b.t.N86XcH)
                                      })
                                  })
                                : (0, t.jsx)('div', {}),
                            (0, t.jsxs)('div', {
                                className: _.rightButtons,
                                children: [
                                    (0, t.jsx)(s.zxk, {
                                        onClick: M,
                                        size: s.zxk.Sizes.SMALL,
                                        look: s.zxk.Looks.LINK,
                                        color: s.zxk.Colors.PRIMARY,
                                        children: b.intl.string(b.t['ETE/oK'])
                                    }),
                                    (0, t.jsx)(s.zxk, {
                                        disabled: el || en,
                                        onClick: et,
                                        children: b.intl.string(b.t.R3BPHx)
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
