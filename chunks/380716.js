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
    g = l(430824),
    j = l(768581),
    f = l(823379),
    b = l(700785),
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
            return b.Uu(N.Plq.VIEW_CHANNEL, n);
        case h.oi.CHAT:
            if (N.TPd.GUILD_THREADS_ONLY.has(n.type)) return b.Uu(N.Plq.SEND_MESSAGES_IN_THREADS, n) || b.Uu(N.Plq.SEND_MESSAGES, n);
            return b.Uu(N.Plq.SEND_MESSAGES, n);
        default:
            return !1;
    }
}
function E() {
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
    let n = E(),
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
                            (0, f.vE)(e);
                    }
                })(e.actionType)
            ),
        n
    );
}
function z(e) {
    var n, l, a, f, b;
    let { transitionState: z, onClose: w, guildId: M, action: Z, onSave: L, onDelete: D } = e,
        A = (0, d.Dt)(),
        G = i.useRef(null),
        R = i.useRef(null),
        [U] = i.useState(
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
        [B, H] = i.useState(U),
        F = (0, o.e7)([v.Z], () => v.Z.getChannel(null == B ? void 0 : B.value)),
        X = (null == F ? void 0 : F.isMediaChannel()) === !0,
        q = i.useMemo(
            () => [
                {
                    value: h.oi.VIEW,
                    name: I.intl.string(I.t.jfieR0)
                },
                {
                    value: h.oi.CHAT,
                    name: (null == F ? void 0 : F.type) === N.d4z.GUILD_FORUM ? (X ? I.intl.string(I.t['1EgDpK']) : I.intl.string(I.t.x5Di7O)) : I.intl.string(I.t['R+dC4O'])
                }
            ],
            [null == F ? void 0 : F.type, X]
        ),
        [W, Y] = i.useState(E()),
        [V, K] = i.useState(null != (n = null == Z ? void 0 : Z.title) ? n : ''),
        Q = (0, o.e7)([y.Z], () => {
            let e = y.Z.getSettings();
            if (null == e.newMemberActions) return new Set();
            let n = new Set(e.newMemberActions.map((e) => e.channelId));
            return null != U && n.delete(U.value), n;
        }),
        [J, $] = i.useState(null == Z ? null : null != (b = q.find((e) => e.value === Z.actionType)) ? b : null),
        [ee, en] = i.useState(null != (l = null == Z ? void 0 : Z.emoji) ? l : null),
        el = (0, o.e7)([y.Z], () => {
            var e;
            return null == (e = y.Z.getNewMemberAction(null == Z ? void 0 : Z.channelId)) ? void 0 : e.icon;
        }),
        [et, ei] = i.useState(null),
        ea = null == V || 0 === V.length || null == J || null == B,
        er = Object.values(W).flat().length > 0,
        eo = i.useCallback(() => {
            if (null == B || null == J || V.length <= 0) return;
            let e = {
                    channelId: B.value,
                    title: V,
                    description: '',
                    actionType: J.value,
                    emoji: null != ee ? ee : null,
                    icon: null != el ? el : null
                },
                n = null != et || null != ee;
            L(e, et, n), w();
        }, [L, w, V, J, B, ee, el, et]),
        es = i.useCallback(() => {
            null == D || D(), w();
        }, [D, w]),
        eu = i.useCallback(
            (e) => {
                K(e),
                    Y(
                        P({
                            channelId: null == B ? void 0 : B.value,
                            title: e,
                            description: '',
                            actionType: null == J ? void 0 : J.value,
                            emoji: null != ee ? ee : void 0
                        })
                    );
            },
            [K, Y, B, J, ee]
        ),
        ec = i.useCallback(
            (e) => {
                H(e),
                    Y(
                        P({
                            channelId: null == e ? void 0 : e.value,
                            title: V,
                            description: '',
                            actionType: null == J ? void 0 : J.value,
                            emoji: null != ee ? ee : void 0
                        })
                    );
            },
            [H, Y, V, J, ee]
        ),
        ed = i.useCallback(
            (e) => {
                $(e),
                    Y(
                        P({
                            channelId: null == B ? void 0 : B.value,
                            title: V,
                            description: '',
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != ee ? ee : void 0
                        })
                    );
            },
            [$, Y, B, V, ee]
        ),
        em = i.useCallback(
            (e) =>
                Promise.resolve(
                    x.ZP.getSelectableChannels(M)
                        .filter((n) => !Q.has(n.channel.id) && (0, h.kb)(n.channel) && r()(e, n.channel.name))
                        .map((e) => ({
                            value: e.channel.id,
                            label: e.channel.name
                        }))
                ),
            [M, Q]
        ),
        eh = i.useCallback(
            (e) => {
                if (null == e || null == M) return null;
                let n = v.Z.getChannel(e.value),
                    l = g.Z.getGuild(M);
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
        ep = i.useCallback(function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            en(n), ei(e);
        }, []),
        ev = i.useCallback(
            () =>
                null != et
                    ? et
                    : null != ee
                      ? null
                      : null != el && null != B
                        ? j.ZP.getNewMemberActionIconURL({
                              channelId: B.value,
                              icon: el
                          })
                        : null,
            [B, el, et, ee]
        )(),
        ex = i.useCallback(
            (e) => {
                null != e && ep(e, null);
            },
            [ep]
        ),
        eg = (e) => (n, l) => {
            var t, i;
            if (null == n) return;
            let a = null;
            ep(
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
        ej = null;
    return (
        (ej =
            null != ev
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)('img', {
                              src: ev,
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
                : null != ee
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(u.Z, {
                                animated: null != (a = ee.animated) && a,
                                emojiId: ee.id,
                                emojiName: ee.name
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
                                    value: V,
                                    error: (null != (f = null == V ? void 0 : V.length) ? f : 0) > 0 ? W.title.join(', ') : null,
                                    onChange: eu,
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
                                    value: B,
                                    renderOptionPrefix: eh,
                                    options: em,
                                    onChange: ec
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
                                                                ex(e), n();
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
                                                    targetElementRef: G,
                                                    position: 'top',
                                                    renderPopout: (e) => {
                                                        let { closePopout: l } = e;
                                                        return (0, t.jsx)(m.Z, {
                                                            closePopout: () => {
                                                                l(), n();
                                                            },
                                                            onSelectEmoji: eg(() => {
                                                                l(), n();
                                                            }),
                                                            pickerIntention: k.Hz.COMMUNITY_CONTENT,
                                                            channel: F
                                                        });
                                                    },
                                                    children: (e) =>
                                                        (0, t.jsx)(
                                                            s.Text,
                                                            _(O({}, e), {
                                                                variant: 'text-sm/medium',
                                                                color: 'none',
                                                                ref: G,
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
                                                            ep(null);
                                                        }
                                                    })
                                                ]
                                            });
                                        },
                                        targetElementRef: R,
                                        children: (e) =>
                                            (0, t.jsx)(
                                                'div',
                                                _(O({}, e), {
                                                    className: S.iconUpload,
                                                    ref: R,
                                                    children: ej
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
                                    value: null == J ? void 0 : J.value,
                                    onChange: ed,
                                    options: null == F ? q : q.map((e) => _(O({}, e), { disabled: !T(e.value, F) }))
                                }),
                                null != J && W.actionType.length > 0
                                    ? W.actionType.map((e) =>
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
                                          onClick: es,
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
                                        disabled: ea || er,
                                        onClick: eo,
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
