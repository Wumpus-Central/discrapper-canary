(n.d(t, {
    F: () => V,
    G: () => U
}),
    n(388685));
var l,
    r = n(255367),
    i = n(73800),
    a = n(120356),
    s = n.n(a),
    o = n(913527),
    c = n.n(o),
    u = n(91192),
    d = n(442837),
    f = n(755721),
    h = n(481060),
    _ = n(700582),
    g = n(493773),
    m = n(724757),
    p = n(212819),
    E = n(933557),
    b = n(266076),
    y = n(810123),
    I = n(448486),
    S = n(987509),
    O = n(592125),
    A = n(430824),
    v = n(158776),
    C = n(306680),
    x = n(699516),
    P = n(594174),
    T = n(626135),
    L = n(55935),
    N = n(823379),
    j = n(51144),
    Z = n(784384),
    w = n(981631),
    D = n(490897),
    R = n(388032),
    k = n(691176);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t) {
    if (null == e) return {};
    var n,
        l,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = {},
                i = Object.keys(e);
            for (l = 0; l < i.length; l++) ((n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]));
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) ((n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
}
var U = (((l = {}).TOGGLE = 'toggle'), (l.SEND = 'send'), l);
function H(e) {
    let { message: t, destination: n, rowMode: l, icon: a, label: o, subLabel: c, selected: d, disabled: _, onPressDestination: m, 'aria-setsize': p, 'aria-posinset': E } = e,
        b = (0, u.JA)(n.id),
        [y, I] = i.useState(!1),
        S = i.useRef(!1),
        O = i.useCallback(() => {
            if ('send' === l) {
                (I(!0), (S.current = !0));
                return;
            }
            null == m || m(n);
        }, [l, m, n]),
        A = i.useCallback(() => {
            (T.default.track(w.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id
            }),
                (S.current = !1),
                null == m ||
                    m(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0
                    }));
        }, [t.channel_id, t.id, m, n]),
        v = i.useCallback(() => {
            (I(!1),
                (S.current = !1),
                T.default.track(w.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id
                }));
        }, [t]);
    return (
        (0, g.ZP)(() => () => {
            S.current &&
                ((S.current = !1),
                null == m ||
                    m(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, r.jsxs)(
            h.P3F,
            G(
                F(
                    {
                        className: s()(k.destinationRow, { [k.disabled]: _ }),
                        onClick: _ || y ? void 0 : O,
                        'aria-selected': d,
                        'aria-setsize': p,
                        'aria-posinset': E
                    },
                    b
                ),
                {
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.identity,
                            children: [
                                (0, r.jsx)('div', {
                                    className: k.iconWrapper,
                                    children: a
                                }),
                                (0, r.jsxs)('div', {
                                    className: k.labels,
                                    children: [
                                        (0, r.jsx)(h.Text, {
                                            tag: 'strong',
                                            className: k.label,
                                            variant: 'text-md/semibold',
                                            lineClamp: 1,
                                            children: o
                                        }),
                                        (0, r.jsx)(h.Text, {
                                            className: k.subLabel,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: c
                                        })
                                    ]
                                })
                            ]
                        }),
                        'toggle' === l &&
                            !_ &&
                            (0, r.jsx)(h.XZJ, {
                                type: h.XZJ.Types.INVERTED,
                                displayOnly: !0,
                                size: 24,
                                value: d,
                                className: k.checkbox
                            }),
                        'send' === l &&
                            !_ &&
                            (0, r.jsxs)('div', {
                                className: k.actions,
                                children: [
                                    y
                                        ? (0, r.jsx)(h.zxk, {
                                              variant: 'secondary',
                                              size: 'sm',
                                              text: R.intl.string(R.t['HO/oXl']),
                                              onClick: A
                                          })
                                        : (0, r.jsx)('div', {
                                              className: s()(
                                                  (0, f.nY)({
                                                      size: f.zx.Sizes.SMALL,
                                                      color: f.zx.Colors.BRAND
                                                  }),
                                                  k.fauxButton
                                              ),
                                              children: R.intl.string(R.t.TXNS7e)
                                          }),
                                    y &&
                                        (0, r.jsx)(f.zx, {
                                            size: f.zx.Sizes.SMALL,
                                            color: f.zx.Colors.BRAND,
                                            look: f.zx.Looks.OUTLINED,
                                            onClick: v,
                                            children: R.intl.string(R.t.KyUKhY)
                                        })
                                ]
                            })
                    ]
                }
            )
        )
    );
}
function W(e) {
    var { user: t, subLabel: n } = e,
        l = M(e, ['user', 'subLabel']);
    let i = j.ZP.useName(t),
        a = j.ZP.useUserTag(t, { decoration: 'never' }),
        s = (0, d.e7)([x.Z], () => x.Z.getNickname(t.id)),
        o = (0, d.e7)([v.Z], () => v.Z.getStatus(t.id));
    return (0, r.jsx)(
        H,
        G(F({}, l), {
            icon: (0, r.jsx)(_.Z, {
                'aria-hidden': !0,
                size: h.EFr.SIZE_32,
                user: t,
                status: o
            }),
            label: null != s ? s : i,
            subLabel: null != n ? n : a
        })
    );
}
function Q(e) {
    var { channel: t, subLabel: n } = e,
        l = M(e, ['channel', 'subLabel']);
    let i = (0, E.ZP)(t),
        a = (0, I._)(t);
    return (0, r.jsx)(
        H,
        G(F({}, l), {
            icon: (0, r.jsx)(b.Z, {
                'aria-hidden': !0,
                size: h.EFr.SIZE_32,
                channel: t,
                experimentLocation: 'forward-modal'
            }),
            label: i,
            subLabel: null != n ? n : a
        })
    );
}
function z(e) {
    var { channel: t, subLabel: n } = e,
        l = M(e, ['channel', 'subLabel']);
    let i = (0, d.e7)([A.Z], () => A.Z.getGuild(null == t ? void 0 : t.guild_id)),
        a = (0, E.ZP)(t),
        s = (0, d.e7)([O.Z, P.default, x.Z], () => {
            let e = O.Z.getChannel(t.parent_id);
            return null == e ? null : (0, E.F6)(e, P.default, x.Z, !1);
        }),
        o = (0, d.e7)([C.ZP], () => C.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
        u = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? h.Mmi : h.VL1;
        u = (0, r.jsxs)('div', {
            className: k.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: h.TVs.colors.TEXT_SECONDARY,
                    className: k.subLabelIcon
                }),
                (0, r.jsx)(h.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: s
                }),
                null != o
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(h.Text, {
                                  className: k.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, L.Xf)(c()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, r.jsx)(
        H,
        G(F({}, l), {
            icon: (0, r.jsx)(y.Z, {
                size: y.E.SMALL_32,
                guild: i,
                channel: t
            }),
            label: a,
            subLabel: null != n ? n : u
        })
    );
}
function V(e) {
    var { rowData: t, rowMode: n, message: l, originChannel: a, selectedDestinations: s, handleToggleDestination: o, disableSelection: c } = e,
        d = M(e, ['rowData', 'rowMode', 'message', 'originChannel', 'selectedDestinations', 'handleToggleDestination', 'disableSelection']);
    let f = i.useMemo(() => [t.length], [t.length]),
        _ = i.useCallback(() => 48, []),
        g = i.useMemo(() => {
            var e;
            return null != (e = null == s ? void 0 : s.map(S.hC)) ? e : [];
        }, [s]),
        E = i.useCallback(
            (e) => {
                let { section: i, row: s } = e;
                if (i > 0) return;
                let { type: u, record: d } = t[s];
                if (u === p.h8.HEADER) return;
                let f =
                        u === p.h8.USER
                            ? {
                                  type: 'user',
                                  id: d.id
                              }
                            : {
                                  type: 'channel',
                                  id: d.id
                              },
                    h = (0, S.hC)(f),
                    _ = (0, Z.HY)(l, a, d),
                    m = g.includes(h),
                    E = {
                        key: h,
                        message: l,
                        destination: f,
                        rowMode: n,
                        subLabel: null != _ ? _.label : void 0,
                        disabled: (c && !m) || null != _,
                        selected: m,
                        onPressDestination: o,
                        'aria-posinset': s + 1,
                        'aria-setsize': t.length
                    };
                return u === p.h8.USER ? (0, r.jsx)(W, F({ user: d }, E)) : u === p.h8.GROUP_DM ? (0, r.jsx)(Q, F({ channel: d }, E)) : u === p.h8.TEXT_CHANNEL || u === p.h8.VOICE_CHANNEL ? (0, r.jsx)(z, F({ channel: d }, E)) : void (0, N.vE)(u);
            },
            [c, o, l, a, t, n, g]
        ),
        b = i.useRef(null),
        y = (0, m.Z)('forward-modal', b);
    return (0, r.jsx)(u.bG, {
        navigator: y,
        children: (0, r.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = M(e, ['ref']);
                return (0, r.jsx)(
                    h.YAO,
                    G(
                        F(
                            {
                                scrollerRef: (e) => {
                                    var n;
                                    ((b.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null));
                                }
                            },
                            n,
                            d
                        ),
                        {
                            sections: f,
                            sectionHeight: 0,
                            renderRow: E,
                            rowHeight: _
                        }
                    )
                );
            }
        })
    });
}
