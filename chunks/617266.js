n.d(t, { F: () => z });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    i = n(913527),
    o = n.n(i),
    u = n(91192),
    c = n(442837),
    d = n(481060),
    f = n(700582),
    b = n(493773),
    h = n(724757),
    m = n(212819),
    p = n(933557),
    g = n(266076),
    y = n(810123),
    v = n(448486),
    j = n(987509),
    x = n(131704),
    O = n(592125),
    _ = n(430824),
    N = n(496675),
    S = n(158776),
    P = n(306680),
    w = n(699516),
    E = n(594174),
    C = n(55935),
    Z = n(823379),
    L = n(51144),
    D = n(981631),
    M = n(490897),
    T = n(388032),
    k = n(120575);
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function I(e) {
    let { destination: t, icon: n, label: a, subLabel: i, selected: o, disabled: c, onPressDestination: f, 'aria-setsize': h, 'aria-posinset': m } = e,
        p = (0, u.JA)(t.id),
        g = l.useRef(!1),
        y = l.useCallback(() => {
            c || null == f || f(t);
        }, [f, c, t]);
    return (
        (0, b.zq)(() => () => {
            g.current &&
                ((g.current = !1),
                null == f ||
                    f(t, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, r.jsxs)(
            d.P3F,
            A(
                W(
                    {
                        className: s()(k.destinationRow, { [k.disabled]: c }),
                        onClick: y,
                        'aria-selected': o,
                        'aria-setsize': h,
                        'aria-posinset': m
                    },
                    p
                ),
                {
                    children: [
                        (0, r.jsxs)('div', {
                            className: k.identity,
                            children: [
                                (0, r.jsx)('div', {
                                    className: k.iconWrapper,
                                    children: n
                                }),
                                (0, r.jsxs)('div', {
                                    className: k.labels,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            tag: 'strong',
                                            className: k.label,
                                            variant: 'text-md/semibold',
                                            lineClamp: 1,
                                            children: a
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            className: k.subLabel,
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: i
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(d.XZJ, {
                            type: d.XZJ.Types.INVERTED,
                            displayOnly: !0,
                            size: 24,
                            value: o,
                            className: k.checkbox
                        })
                    ]
                }
            )
        )
    );
}
function F(e) {
    var { user: t, subLabel: n } = e,
        l = R(e, ['user', 'subLabel']);
    let a = L.ZP.useName(t),
        s = L.ZP.useUserTag(t, { decoration: 'never' }),
        i = (0, c.e7)([w.Z], () => w.Z.getNickname(t.id)),
        o = (0, c.e7)([S.Z], () => S.Z.getStatus(t.id));
    return (0, r.jsx)(
        I,
        A(W({}, l), {
            icon: (0, r.jsx)(f.Z, {
                'aria-hidden': !0,
                size: d.EFr.SIZE_32,
                user: t,
                status: o
            }),
            label: null != i ? i : a,
            subLabel: null != n ? n : s
        })
    );
}
function q(e) {
    var { channel: t, subLabel: n } = e,
        l = R(e, ['channel', 'subLabel']);
    let a = (0, p.ZP)(t),
        s = (0, v._)(t);
    return (0, r.jsx)(
        I,
        A(W({}, l), {
            icon: (0, r.jsx)(g.Z, {
                'aria-hidden': !0,
                size: d.EFr.SIZE_32,
                channel: t,
                experimentLocation: 'application-command-modal'
            }),
            label: a,
            subLabel: null != n ? n : s
        })
    );
}
function U(e) {
    var { channel: t, subLabel: n } = e,
        l = R(e, ['channel', 'subLabel']);
    let a = (0, c.e7)([_.Z], () => _.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, p.ZP)(t),
        i = (0, c.e7)([O.Z, E.default, w.Z], () => {
            let e = O.Z.getChannel(t.parent_id);
            return null == e ? null : (0, p.F6)(e, E.default, w.Z, !1);
        }),
        u = (0, c.e7)([P.ZP], () => P.ZP.lastMessageTimestamp(t.id, M.W.CHANNEL)),
        f = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.Mmi : d.VL1;
        f = (0, r.jsxs)('div', {
            className: k.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: d.TVs.colors.TEXT_SECONDARY,
                    className: k.subLabelIcon
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: i
                }),
                null != u
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Text, {
                                  className: k.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, C.Xf)(o()(u))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, r.jsx)(
        I,
        A(W({}, l), {
            icon: (0, r.jsx)(y.Z, {
                size: y.E.SMALL_32,
                guild: a,
                channel: t
            }),
            label: s,
            subLabel: null != n ? n : f
        })
    );
}
function z(e) {
    var { rowData: t, selectedDestinations: n, handleToggleDestination: a, disableSelection: s, originDestination: i } = e,
        o = R(e, ['rowData', 'selectedDestinations', 'handleToggleDestination', 'disableSelection', 'originDestination']);
    let c = l.useMemo(() => [t.length], [t.length]),
        f = l.useCallback(() => 48, []),
        b = l.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(j.hC)) ? e : [];
        }, [n]),
        p = l.useCallback(
            (e) => {
                let { section: n, row: l } = e;
                if (n > 0) return;
                let { type: o, record: u } = t[l];
                if (o === m.h8.HEADER) return;
                let c =
                        o === m.h8.USER
                            ? {
                                  type: 'user',
                                  id: u.id
                              }
                            : {
                                  type: 'channel',
                                  id: u.id
                              },
                    d = (0, j.hC)(c),
                    f = (function (e, t) {
                        if (t instanceof x.Sf && (0, x.Km)(t.type)) {
                            if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(N.Z.can(D.Plq.MANAGE_CHANNELS, t) || N.Z.can(D.Plq.MANAGE_MESSAGES, t))) return { label: T.NW.string(T.t.Icu3bW) };
                            if (t.isThread() || t.isForumPost() || !N.Z.can(D.Plq.USE_APPLICATION_COMMANDS, t)) return { label: T.NW.string(T.t.v8MLq6) };
                            let n = (0, j.dL)(t.id);
                            if (e.id === n.id) return { label: T.NW.string(T.t.mD4gqa) };
                        }
                    })(i, u),
                    h = b.includes(d),
                    p = {
                        key: d,
                        destination: c,
                        subLabel: null != f ? f.label : void 0,
                        disabled: (s && !h) || null != f,
                        selected: h,
                        onPressDestination: a,
                        'aria-posinset': l + 1,
                        'aria-setsize': t.length
                    };
                return o === m.h8.USER ? (0, r.jsx)(F, W({ user: u }, p)) : o === m.h8.GROUP_DM ? (0, r.jsx)(q, W({ channel: u }, p)) : o === m.h8.TEXT_CHANNEL || o === m.h8.VOICE_CHANNEL ? (0, r.jsx)(U, W({ channel: u }, p)) : void (0, Z.vE)(o);
            },
            [s, a, i, t, b]
        ),
        g = l.useRef(null),
        y = (0, h.Z)('share-command-modal', g);
    return (0, r.jsx)(u.bG, {
        navigator: y,
        children: (0, r.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = R(e, ['ref']);
                return (0, r.jsx)(
                    d.YAO,
                    A(
                        W(
                            {
                                scrollerRef: (e) => {
                                    var n;
                                    (g.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                }
                            },
                            n,
                            o
                        ),
                        {
                            sections: c,
                            sectionHeight: 0,
                            renderRow: p,
                            rowHeight: f
                        }
                    )
                );
            }
        })
    });
}
