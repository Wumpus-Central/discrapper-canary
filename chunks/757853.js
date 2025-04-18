n.d(t, {
    F: () => z,
    G: () => G
}),
    n(388685);
var l,
    r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(913527),
    c = n.n(o),
    u = n(91192),
    d = n(442837),
    f = n(481060),
    h = n(700582),
    _ = n(493773),
    g = n(724757),
    m = n(212819),
    p = n(933557),
    b = n(266076),
    E = n(810123),
    y = n(448486),
    I = n(987509),
    S = n(592125),
    A = n(430824),
    O = n(158776),
    N = n(306680),
    v = n(699516),
    x = n(594174),
    C = n(626135),
    P = n(55935),
    L = n(823379),
    T = n(51144),
    j = n(784384),
    Z = n(981631),
    w = n(490897),
    D = n(388032),
    R = n(691176);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function F(e, t) {
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
                a = Object.keys(e);
            for (l = 0; l < a.length; l++) (n = a[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (l = 0; l < a.length; l++) (n = a[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
var G = (((l = {}).TOGGLE = 'toggle'), (l.SEND = 'send'), l);
function W(e) {
    let { message: t, destination: n, rowMode: l, icon: i, label: o, subLabel: c, selected: d, disabled: h, onPressDestination: g, 'aria-setsize': m, 'aria-posinset': p } = e,
        b = (0, u.JA)(n.id),
        [E, y] = a.useState(!1),
        I = a.useRef(!1),
        S = a.useCallback(() => {
            if ('send' === l) {
                y(!0), (I.current = !0);
                return;
            }
            null == g || g(n);
        }, [l, g, n]),
        A = a.useCallback(() => {
            C.default.track(Z.rMx.FORWARD_ONE_TAP_VIEW, {
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
        O = a.useCallback(() => {
            y(!1),
                (I.current = !1),
                C.default.track(Z.rMx.FORWARD_ONE_TAP_UNDO, {
                    channel_id: t.channel_id,
                    message_id: t.id
                });
        }, [t]);
    return (
        (0, _.ZP)(() => () => {
            I.current &&
                ((I.current = !1),
                null == g ||
                    g(n, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, r.jsxs)(
            f.P3F,
            F(
                k(
                    {
                        className: s()(R.destinationRow, { [R.disabled]: h }),
                        onClick: h || E ? void 0 : S,
                        'aria-selected': d,
                        'aria-setsize': m,
                        'aria-posinset': p
                    },
                    b
                ),
                {
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.identity,
                            children: [
                                (0, r.jsx)('div', {
                                    className: R.iconWrapper,
                                    children: i
                                }),
                                (0, r.jsxs)('div', {
                                    className: R.labels,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            tag: 'strong',
                                            className: R.label,
                                            variant: 'text-md/semibold',
                                            lineClamp: 1,
                                            children: o
                                        }),
                                        (0, r.jsx)(f.Text, {
                                            className: R.subLabel,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: c
                                        })
                                    ]
                                })
                            ]
                        }),
                        'toggle' === l &&
                            !h &&
                            (0, r.jsx)(f.XZJ, {
                                type: f.XZJ.Types.INVERTED,
                                displayOnly: !0,
                                size: 24,
                                value: d,
                                className: R.checkbox
                            }),
                        'send' === l &&
                            !h &&
                            (0, r.jsxs)('div', {
                                className: R.actions,
                                children: [
                                    E
                                        ? (0, r.jsx)(f.zxk, {
                                              size: f.zxk.Sizes.SMALL,
                                              color: f.zxk.Colors.PRIMARY,
                                              look: f.zxk.Looks.LINK,
                                              onClick: A,
                                              children: D.NW.string(D.t['HO/oXl'])
                                          })
                                        : (0, r.jsx)('div', {
                                              className: s()(
                                                  (0, f.nYM)({
                                                      size: f.zxk.Sizes.SMALL,
                                                      color: f.zxk.Colors.BRAND
                                                  }),
                                                  R.fauxButton
                                              ),
                                              children: D.NW.string(D.t.TXNS7e)
                                          }),
                                    E &&
                                        (0, r.jsx)(f.zxk, {
                                            size: f.zxk.Sizes.SMALL,
                                            color: f.zxk.Colors.BRAND,
                                            look: f.zxk.Looks.OUTLINED,
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
        l = M(e, ['user', 'subLabel']);
    let a = T.ZP.useName(t),
        i = T.ZP.useUserTag(t, { decoration: 'never' }),
        s = (0, d.e7)([v.Z], () => v.Z.getNickname(t.id)),
        o = (0, d.e7)([O.Z], () => O.Z.getStatus(t.id));
    return (0, r.jsx)(
        W,
        F(k({}, l), {
            icon: (0, r.jsx)(h.Z, {
                'aria-hidden': !0,
                size: f.EFr.SIZE_32,
                user: t,
                status: o
            }),
            label: null != s ? s : a,
            subLabel: null != n ? n : i
        })
    );
}
function H(e) {
    var { channel: t, subLabel: n } = e,
        l = M(e, ['channel', 'subLabel']);
    let a = (0, p.ZP)(t),
        i = (0, y._)(t);
    return (0, r.jsx)(
        W,
        F(k({}, l), {
            icon: (0, r.jsx)(b.Z, {
                'aria-hidden': !0,
                size: f.EFr.SIZE_32,
                channel: t,
                experimentLocation: 'forward-modal'
            }),
            label: a,
            subLabel: null != n ? n : i
        })
    );
}
function Q(e) {
    var { channel: t, subLabel: n } = e,
        l = M(e, ['channel', 'subLabel']);
    let a = (0, d.e7)([A.Z], () => A.Z.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, p.ZP)(t),
        s = (0, d.e7)([S.Z, x.default, v.Z], () => {
            let e = S.Z.getChannel(t.parent_id);
            return null == e ? null : (0, p.F6)(e, x.default, v.Z, !1);
        }),
        o = (0, d.e7)([N.ZP], () => N.ZP.lastMessageTimestamp(t.id, w.W.CHANNEL)),
        u = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? f.Mmi : f.VL1;
        u = (0, r.jsxs)('div', {
            className: R.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: f.TVs.colors.TEXT_SECONDARY,
                    className: R.subLabelIcon
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: s
                }),
                null != o
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Text, {
                                  className: R.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, r.jsx)(f.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, P.Xf)(c()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, r.jsx)(
        W,
        F(k({}, l), {
            icon: (0, r.jsx)(E.Z, {
                size: E.E.SMALL_32,
                guild: a,
                channel: t
            }),
            label: i,
            subLabel: null != n ? n : u
        })
    );
}
function z(e) {
    var { rowData: t, rowMode: n, message: l, originChannel: i, selectedDestinations: s, handleToggleDestination: o, disableSelection: c } = e,
        d = M(e, ['rowData', 'rowMode', 'message', 'originChannel', 'selectedDestinations', 'handleToggleDestination', 'disableSelection']);
    let h = a.useMemo(() => [t.length], [t.length]),
        _ = a.useCallback(() => 48, []),
        p = a.useMemo(() => {
            var e;
            return null != (e = null == s ? void 0 : s.map(I.hC)) ? e : [];
        }, [s]),
        b = a.useCallback(
            (e) => {
                let { section: a, row: s } = e;
                if (a > 0) return;
                let { type: u, record: d } = t[s];
                if (u === m.h8.HEADER) return;
                let f =
                        u === m.h8.USER
                            ? {
                                  type: 'user',
                                  id: d.id
                              }
                            : {
                                  type: 'channel',
                                  id: d.id
                              },
                    h = (0, I.hC)(f),
                    _ = (0, j.HY)(l, i, d),
                    g = p.includes(h),
                    b = {
                        key: h,
                        message: l,
                        destination: f,
                        rowMode: n,
                        subLabel: null != _ ? _.label : void 0,
                        disabled: (c && !g) || null != _,
                        selected: g,
                        onPressDestination: o,
                        'aria-posinset': s + 1,
                        'aria-setsize': t.length
                    };
                return u === m.h8.USER ? (0, r.jsx)(U, k({ user: d }, b)) : u === m.h8.GROUP_DM ? (0, r.jsx)(H, k({ channel: d }, b)) : u === m.h8.TEXT_CHANNEL || u === m.h8.VOICE_CHANNEL ? (0, r.jsx)(Q, k({ channel: d }, b)) : void (0, L.vE)(u);
            },
            [c, o, l, i, t, n, p]
        ),
        E = a.useRef(null),
        y = (0, g.Z)('forward-modal', E);
    return (0, r.jsx)(u.bG, {
        navigator: y,
        children: (0, r.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = M(e, ['ref']);
                return (0, r.jsx)(
                    f.YAO,
                    F(
                        k(
                            {
                                scrollerRef: (e) => {
                                    var n;
                                    (E.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                }
                            },
                            n,
                            d
                        ),
                        {
                            sections: h,
                            sectionHeight: 0,
                            renderRow: b,
                            rowHeight: _
                        }
                    )
                );
            }
        })
    });
}
