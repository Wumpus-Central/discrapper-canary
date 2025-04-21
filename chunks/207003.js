n.d(t, { Q: () => q });
var r = n(200651),
    l = n(192379),
    s = n(120356),
    i = n.n(s),
    a = n(913527),
    o = n.n(a),
    u = n(91192),
    c = n(442837),
    d = n(481060),
    f = n(700582),
    b = n(724757),
    p = n(212819),
    h = n(933557),
    m = n(266076),
    y = n(810123),
    g = n(448486),
    j = n(987509),
    x = n(131704),
    O = n(592125),
    v = n(430824),
    _ = n(496675),
    S = n(158776),
    E = n(306680),
    P = n(699516),
    Z = n(594174),
    L = n(55935),
    C = n(823379),
    N = n(51144),
    w = n(981631),
    k = n(490897),
    T = n(388032),
    D = n(277580);
function R(e) {
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
function M(e, t) {
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
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function A(e) {
    let { destination: t, icon: n, label: s, subLabel: a, selected: o, disabled: c, onPressDestination: f, 'aria-setsize': b, 'aria-posinset': p } = e,
        h = (0, u.JA)(t.id),
        m = l.useCallback(() => {
            c || null == f || f(t);
        }, [f, c, t]);
    return (0, r.jsxs)(
        d.P3F,
        M(
            R(
                {
                    className: i()(D.destinationRow, { [D.disabled]: c }),
                    onClick: m,
                    'aria-selected': o,
                    'aria-setsize': b,
                    'aria-posinset': p
                },
                h
            ),
            {
                children: [
                    (0, r.jsxs)('div', {
                        className: D.identity,
                        children: [
                            (0, r.jsx)('div', {
                                className: D.iconWrapper,
                                children: n
                            }),
                            (0, r.jsxs)('div', {
                                className: D.labels,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        tag: 'strong',
                                        className: D.label,
                                        variant: 'text-md/semibold',
                                        lineClamp: 1,
                                        children: s
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        className: D.subLabel,
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: a
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
                        className: D.checkbox
                    })
                ]
            }
        )
    );
}
function U(e) {
    var { user: t, subLabel: n } = e,
        l = I(e, ['user', 'subLabel']);
    let s = N.ZP.useName(t),
        i = N.ZP.useUserTag(t, { decoration: 'never' }),
        a = (0, c.e7)([P.Z], () => P.Z.getNickname(t.id)),
        o = (0, c.e7)([S.Z], () => S.Z.getStatus(t.id));
    return (0, r.jsx)(
        A,
        M(R({}, l), {
            icon: (0, r.jsx)(f.Z, {
                'aria-hidden': !0,
                size: d.EFr.SIZE_32,
                user: t,
                status: o
            }),
            label: null != a ? a : s,
            subLabel: null != n ? n : i
        })
    );
}
function z(e) {
    var { channel: t, subLabel: n } = e,
        l = I(e, ['channel', 'subLabel']);
    let s = (0, h.ZP)(t),
        i = (0, g._)(t);
    return (0, r.jsx)(
        A,
        M(R({}, l), {
            icon: (0, r.jsx)(m.Z, {
                'aria-hidden': !0,
                size: d.EFr.SIZE_32,
                channel: t,
                experimentLocation: 'application-command-modal'
            }),
            label: s,
            subLabel: null != n ? n : i
        })
    );
}
function H(e) {
    var { channel: t, subLabel: n } = e,
        l = I(e, ['channel', 'subLabel']);
    let s = (0, c.e7)([v.Z], () => v.Z.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, h.ZP)(t),
        a = (0, c.e7)([O.Z, Z.default, P.Z], () => {
            let e = O.Z.getChannel(t.parent_id);
            return null == e ? null : (0, h.F6)(e, Z.default, P.Z, !1);
        }),
        u = (0, c.e7)([E.ZP], () => E.ZP.lastMessageTimestamp(t.id, k.W.CHANNEL)),
        f = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.Mmi : d.VL1;
        f = (0, r.jsxs)('div', {
            className: D.threadSubLabel,
            children: [
                (0, r.jsx)(e, {
                    color: d.TVs.colors.TEXT_SECONDARY,
                    className: D.subLabelIcon
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: a
                }),
                null != u
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Text, {
                                  className: D.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, L.Xf)(o()(u))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, r.jsx)(
        A,
        M(R({}, l), {
            icon: (0, r.jsx)(y.Z, {
                size: y.E.SMALL_32,
                guild: s,
                channel: t
            }),
            label: i,
            subLabel: null != n ? n : f
        })
    );
}
function q(e) {
    var { rowData: t, selectedDestinations: n, handleToggleDestination: s, disableSelection: i } = e,
        a = I(e, ['rowData', 'selectedDestinations', 'handleToggleDestination', 'disableSelection']);
    let o = l.useMemo(() => [t.length], [t.length]),
        c = l.useCallback(() => 48, []),
        f = l.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(j.hC)) ? e : [];
        }, [n]),
        h = l.useCallback(
            (e) => {
                let { section: n, row: l } = e;
                if (n > 0) return;
                let { type: a, record: o } = t[l];
                if (a === p.h8.HEADER) return;
                let u =
                        a === p.h8.USER
                            ? {
                                  type: 'user',
                                  id: o.id
                              }
                            : {
                                  type: 'channel',
                                  id: o.id
                              },
                    c = (0, j.hC)(u),
                    d = (function (e) {
                        if (e instanceof x.Sf && (0, x.Km)(e.type) && null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(_.Z.can(w.Plq.MANAGE_CHANNELS, e) || _.Z.can(w.Plq.MANAGE_MESSAGES, e))) return { label: T.intl.string(T.t.Icu3bW) };
                    })(o),
                    b = f.includes(c),
                    h = {
                        key: c,
                        destination: u,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (i && !b) || null != d,
                        selected: b,
                        onPressDestination: s,
                        'aria-posinset': l + 1,
                        'aria-setsize': t.length
                    };
                return a === p.h8.USER ? (0, r.jsx)(U, R({ user: o }, h)) : a === p.h8.GROUP_DM ? (0, r.jsx)(z, R({ channel: o }, h)) : a === p.h8.TEXT_CHANNEL || a === p.h8.VOICE_CHANNEL ? (0, r.jsx)(H, R({ channel: o }, h)) : void (0, C.vE)(a);
            },
            [i, s, t, f]
        ),
        m = l.useRef(null),
        y = (0, b.Z)('share-command-modal', m);
    return (0, r.jsx)(u.bG, {
        navigator: y,
        children: (0, r.jsx)(u.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = I(e, ['ref']);
                return (0, r.jsx)(
                    d.YAO,
                    M(
                        R(
                            {
                                scrollerRef: (e) => {
                                    var n;
                                    (m.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                }
                            },
                            n,
                            a
                        ),
                        {
                            sections: o,
                            sectionHeight: 0,
                            renderRow: h,
                            rowHeight: c
                        }
                    )
                );
            }
        })
    });
}
