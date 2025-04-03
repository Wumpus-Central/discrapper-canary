n.d(t, {
    F: () => Q,
    G: () => W
}),
    n(47120);
var a,
    r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(913527),
    c = n.n(o),
    u = n(91192),
    d = n(442837),
    m = n(481060),
    p = n(700582),
    h = n(493773),
    g = n(724757),
    _ = n(212819),
    f = n(933557),
    b = n(266076),
    y = n(810123),
    E = n(448486),
    I = n(987509),
    S = n(592125),
    C = n(430824),
    O = n(158776),
    v = n(306680),
    x = n(699516),
    A = n(594174),
    N = n(626135),
    T = n(55935),
    P = n(823379),
    L = n(51144),
    j = n(784384),
    w = n(981631),
    Z = n(490897),
    D = n(388032),
    k = n(691176);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t) {
    if (null == e) return {};
    var n,
        a,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = {},
                l = Object.keys(e);
            for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (a = 0; a < l.length; a++) (n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
var W = (((a = {}).TOGGLE = 'toggle'), (a.SEND = 'send'), a);
function G(e) {
    let { message: t, destination: n, rowMode: a, icon: i, label: o, subLabel: c, selected: d, disabled: p, onPressDestination: g, 'aria-setsize': _, 'aria-posinset': f } = e,
        b = (0, u.JA)(n.id),
        [y, E] = l.useState(!1),
        I = l.useRef(!1),
        S = l.useCallback(() => {
            if ('send' === a) {
                E(!0), (I.current = !0);
                return;
            }
            null == g || g(n);
        }, [a, g, n]),
        C = l.useCallback(() => {
            N.default.track(w.rMx.FORWARD_ONE_TAP_VIEW, {
                channel_id: t.channel_id,
                message_id: t.id
            }),
                (I.current = !1),
                null == g ||
                    g(n, {
                        transitionToDestination: !0,
                        closeAfterSend: !0
                    });
        }, [t.channel_id, t.id, g, n]),
        O = l.useCallback(() => {
            E(!1),
                (I.current = !1),
                N.default.track(w.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id
                });
        }, [t]);
    return (
        (0, h.ZP)(() => () => {
            I.current &&
                ((I.current = !1),
                null == g ||
                    g(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, r.jsxs)(
            m.P3F,
            R(
                M(
                    {
                        className: s()(k.destinationRow, { [k.disabled]: p }),
                        onClick: p || y ? void 0 : S,
                        'aria-selected': d,
                        'aria-setsize': _,
                        'aria-posinset': f
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
                                    children: i
                                }),
                                (0, r.jsxs)('div', {
                                    className: k.labels,
                                    children: [
                                        (0, r.jsx)(m.Text, {
                                            tag: 'strong',
                                            className: k.label,
                                            variant: 'text-md/semibold',
                                            lineClamp: 1,
                                            children: o
                                        }),
                                        (0, r.jsx)(m.Text, {
                                            className: k.subLabel,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: c
                                        })
                                    ]
                                })
                            ]
                        }),
                        'toggle' === a &&
                            !p &&
                            (0, r.jsx)(m.XZJ, {
                                type: m.XZJ.Types.INVERTED,
                                displayOnly: !0,
                                size: 24,
                                value: d,
                                className: k.checkbox
                            }),
                        'send' === a &&
                            !p &&
                            (0, r.jsxs)('div', {
                                className: k.actions,
                                children: [
                                    y
                                        ? (0, r.jsx)(m.zxk, {
                                              size: m.zxk.Sizes.SMALL,
                                              color: m.zxk.Colors.PRIMARY,
                                              look: m.zxk.Looks.LINK,
                                              onClick: C,
                                              children: D.NW.string(D.t['HO/oXl'])
                                          })
                                        : (0, r.jsx)('div', {
                                              className: s()(
                                                  (0, m.nYM)({
                                                      size: m.zxk.Sizes.SMALL,
                                                      color: m.zxk.Colors.BRAND
                                                  }),
                                                  k.fauxButton
                                              ),
                                              children: D.NW.string(D.t.TXNS7e)
                                          }),
                                    y &&
                                        (0, r.jsx)(m.zxk, {
                                            size: m.zxk.Sizes.SMALL,
                                            color: m.zxk.Colors.BRAND,
                                            look: m.zxk.Looks.OUTLINED,
                                            onClick: O,
                                            children: D.NW.string(D.t.KyUKhY)
                                        })
                                ]
                            })
                    ]
                }
            )
        )
    );
}
function U(e) {
    var { user: t, subLabel: n } = e,
        a = F(e, ['user', 'subLabel']);
    let l = L.ZP.useName(t),
        i = L.ZP.useUserTag(t, { decoration: 'never' }),
        s = (0, d.e7)([x.Z], () => x.Z.getNickname(t.id)),
        o = (0, d.e7)([O.Z], () => O.Z.getStatus(t.id));
    return (0, r.jsx)(
        G,
        R(M({}, a), {
            icon: (0, r.jsx)(p.Z, {
                'aria-hidden': !0,
                size: m.EFr.SIZE_32,
                user: t,
                status: o
            }),
            label: null != s ? s : l,
            subLabel: null != n ? n : i
        })
    );
}
function z(e) {
    var { channel: t, subLabel: n } = e,
        a = F(e, ['channel', 'subLabel']);
    let l = (0, f.ZP)(t),
        i = (0, E._)(t);
    return (0, r.jsx)(
        G,
        R(M({}, a), {
            icon: (0, r.jsx)(b.Z, {
                'aria-hidden': !0,
                size: m.EFr.SIZE_32,
                channel: t,
                experimentLocation: 'forward-modal'
            }),
            label: l,
            subLabel: null != n ? n : i
        })
    );
}
function H(e) {
    var { channel: t, subLabel: n } = e,
        a = F(e, ['channel', 'subLabel']);
    let l = (0, d.e7)([C.Z], () => C.Z.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, f.ZP)(t),
        s = (0, d.e7)([S.Z, A.default, x.Z], () => {
            let e = S.Z.getChannel(t.parent_id);
            return null == e ? null : (0, f.F6)(e, A.default, x.Z, !1);
        }),
        o = (0, d.e7)([v.ZP], () => v.ZP.lastMessageTimestamp(t.id, Z.W.CHANNEL)),
        u = null == l ? void 0 : l.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? m.Mmi : m.VL1;
        u = (0, r.jsxs)('div', {
            className: k.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: m.TVs.colors.TEXT_SECONDARY,
                    className: k.subLabelIcon
                }),
                (0, r.jsx)(m.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: s
                }),
                null != o
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(m.Text, {
                                  className: k.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, r.jsx)(m.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, T.Xf)(c()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, r.jsx)(
        G,
        R(M({}, a), {
            icon: (0, r.jsx)(y.Z, {
                size: y.E.SMALL_32,
                guild: l,
                channel: t
            }),
            label: i,
            subLabel: null != n ? n : u
        })
    );
}
function Q(e) {
    var { rowData: t, rowMode: n, message: a, originChannel: i, selectedDestinations: s, handleToggleDestination: o, disableSelection: c } = e,
        d = F(e, ['rowData', 'rowMode', 'message', 'originChannel', 'selectedDestinations', 'handleToggleDestination', 'disableSelection']);
    let p = l.useMemo(() => [t.length], [t.length]),
        h = l.useCallback(() => 48, []),
        f = l.useMemo(() => {
            var e;
            return null != (e = null == s ? void 0 : s.map(I.hC)) ? e : [];
        }, [s]),
        b = l.useCallback(
            (e) => {
                let { section: l, row: s } = e;
                if (l > 0) return;
                let { type: u, record: d } = t[s];
                if (u === _.h8.HEADER) return;
                let m =
                        u === _.h8.USER
                            ? {
                                  type: 'user',
                                  id: d.id
                              }
                            : {
                                  type: 'channel',
                                  id: d.id
                              },
                    p = (0, I.hC)(m),
                    h = (0, j.HY)(a, i, d),
                    g = f.includes(p),
                    b = {
                        key: p,
                        message: a,
                        destination: m,
                        rowMode: n,
                        subLabel: null != h ? h.label : void 0,
                        disabled: (c && !g) || null != h,
                        selected: g,
                        onPressDestination: o,
                        'aria-posinset': s + 1,
                        'aria-setsize': t.length
                    };
                return u === _.h8.USER ? (0, r.jsx)(U, M({ user: d }, b)) : u === _.h8.GROUP_DM ? (0, r.jsx)(z, M({ channel: d }, b)) : u === _.h8.TEXT_CHANNEL || u === _.h8.VOICE_CHANNEL ? (0, r.jsx)(H, M({ channel: d }, b)) : void (0, P.vE)(u);
            },
            [c, o, a, i, t, n, f]
        ),
        y = l.useRef(null),
        E = (0, g.Z)('forward-modal', y);
    return (0, r.jsx)(u.bG, {
        navigator: E,
        children: (0, r.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = F(e, ['ref']);
                return (0, r.jsx)(
                    m.YAO,
                    R(
                        M(
                            {
                                scrollerRef: (e) => {
                                    var n;
                                    (y.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                }
                            },
                            n,
                            d
                        ),
                        {
                            sections: p,
                            sectionHeight: 0,
                            renderRow: b,
                            rowHeight: h
                        }
                    )
                );
            }
        })
    });
}
