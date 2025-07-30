n.d(t, { Q: () => z });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    s = n.n(a),
    i = n(913527),
    u = n.n(i),
    o = n(91192),
    c = n(442837),
    d = n(742746),
    f = n(481060),
    b = n(700582),
    p = n(724757),
    h = n(212819),
    m = n(933557),
    g = n(266076),
    y = n(810123),
    x = n(448486),
    v = n(987509),
    S = n(131704),
    E = n(592125),
    j = n(430824),
    Z = n(496675),
    O = n(158776),
    _ = n(306680),
    P = n(699516),
    C = n(594174),
    L = n(55935),
    T = n(823379),
    N = n(51144),
    w = n(981631),
    D = n(490897),
    M = n(388032),
    R = n(277580);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function I(e, t) {
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
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
    }
    return l;
}
function A(e) {
    let { destination: t, icon: n, label: a, subLabel: i, selected: u, disabled: c, onPressDestination: d, 'aria-setsize': b, 'aria-posinset': p } = e,
        h = (0, o.JA)(t.id),
        m = l.useCallback(() => {
            c || null == d || d(t);
        }, [d, c, t]);
    return (0, r.jsxs)(
        f.P3F,
        I(
            k(
                {
                    className: s()(R.destinationRow, { [R.disabled]: c }),
                    onClick: m,
                    'aria-selected': u,
                    'aria-setsize': b,
                    'aria-posinset': p
                },
                h
            ),
            {
                children: [
                    (0, r.jsxs)('div', {
                        className: R.identity,
                        children: [
                            (0, r.jsx)('div', {
                                className: R.iconWrapper,
                                children: n
                            }),
                            (0, r.jsxs)('div', {
                                className: R.labels,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        tag: 'strong',
                                        className: R.label,
                                        variant: 'text-md/semibold',
                                        lineClamp: 1,
                                        children: a
                                    }),
                                    (0, r.jsx)(f.Text, {
                                        className: R.subLabel,
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: i
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(f.XZJ, {
                        type: f.XZJ.Types.INVERTED,
                        displayOnly: !0,
                        size: 24,
                        value: u,
                        className: R.checkbox
                    })
                ]
            }
        )
    );
}
function H(e) {
    var { user: t, subLabel: n } = e,
        l = U(e, ['user', 'subLabel']);
    let a = N.ZP.useName(t),
        s = N.ZP.useUserTag(t, { decoration: 'never' }),
        i = (0, c.e7)([P.Z], () => P.Z.getNickname(t.id)),
        u = (0, c.e7)([O.Z], () => O.Z.getStatus(t.id));
    return (0, r.jsx)(
        A,
        I(k({}, l), {
            icon: (0, r.jsx)(b.Z, {
                'aria-hidden': !0,
                size: f.EFr.SIZE_32,
                user: t,
                status: u
            }),
            label: null != i ? i : a,
            subLabel: null != n ? n : s
        })
    );
}
function F(e) {
    var { channel: t, subLabel: n } = e,
        l = U(e, ['channel', 'subLabel']);
    let a = (0, m.ZP)(t),
        s = (0, x._)(t);
    return (0, r.jsx)(
        A,
        I(k({}, l), {
            icon: (0, r.jsx)(g.Z, {
                'aria-hidden': !0,
                size: f.EFr.SIZE_32,
                channel: t,
                experimentLocation: 'application-command-modal'
            }),
            label: a,
            subLabel: null != n ? n : s
        })
    );
}
function q(e) {
    var { channel: t, subLabel: n } = e,
        l = U(e, ['channel', 'subLabel']);
    let a = (0, c.e7)([j.Z], () => j.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, m.ZP)(t),
        i = (0, c.e7)([E.Z, C.default, P.Z], () => {
            let e = E.Z.getChannel(t.parent_id);
            return null == e ? null : (0, m.F6)(e, C.default, P.Z, !1);
        }),
        o = (0, c.e7)([_.ZP], () => _.ZP.lastMessageTimestamp(t.id, D.W.CHANNEL)),
        d = null == a ? void 0 : a.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? f.Mmi : f.VL1;
        d = (0, r.jsxs)('div', {
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
                    children: i
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
                                  children: (0, L.Xf)(u()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, r.jsx)(
        A,
        I(k({}, l), {
            icon: (0, r.jsx)(y.Z, {
                size: y.E.SMALL_32,
                guild: a,
                channel: t
            }),
            label: s,
            subLabel: null != n ? n : d
        })
    );
}
function z(e) {
    var { rowData: t, selectedDestinations: n, handleToggleDestination: a, disableSelection: s } = e,
        i = U(e, ['rowData', 'selectedDestinations', 'handleToggleDestination', 'disableSelection']);
    let u = l.useMemo(() => [t.length], [t.length]),
        c = l.useCallback(() => 48, []),
        f = l.useMemo(() => {
            var e;
            return null != (e = null == n ? void 0 : n.map(v.hC)) ? e : [];
        }, [n]),
        b = l.useCallback(
            (e) => {
                let { section: n, row: l } = e;
                if (n > 0) return;
                let { type: i, record: u } = t[l];
                if (i === h.h8.HEADER) return;
                let o =
                        i === h.h8.USER
                            ? {
                                  type: 'user',
                                  id: u.id
                              }
                            : {
                                  type: 'channel',
                                  id: u.id
                              },
                    c = (0, v.hC)(o),
                    d = (function (e) {
                        if (e instanceof S.Sf && (0, S.Km)(e.type) && null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(Z.Z.can(w.Plq.MANAGE_CHANNELS, e) || Z.Z.can(w.Plq.MANAGE_MESSAGES, e))) return { label: M.intl.string(M.t.Icu3bW) };
                    })(u),
                    b = f.includes(c),
                    p = {
                        key: c,
                        destination: o,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (s && !b) || null != d,
                        selected: b,
                        onPressDestination: a,
                        'aria-posinset': l + 1,
                        'aria-setsize': t.length
                    };
                return i === h.h8.USER ? (0, r.jsx)(H, k({ user: u }, p)) : i === h.h8.GROUP_DM ? (0, r.jsx)(F, k({ channel: u }, p)) : i === h.h8.TEXT_CHANNEL || i === h.h8.VOICE_CHANNEL ? (0, r.jsx)(q, k({ channel: u }, p)) : void (0, T.vE)(i);
            },
            [s, a, t, f]
        ),
        m = l.useRef(null),
        g = (0, p.Z)('share-command-modal', m);
    return (0, r.jsx)(o.bG, {
        navigator: g,
        children: (0, r.jsx)(o.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = U(e, ['ref']);
                return (0, r.jsx)(
                    d.Tv,
                    I(
                        k(
                            {
                                ref: (e) => {
                                    var n;
                                    ((m.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null));
                                }
                            },
                            n,
                            i
                        ),
                        {
                            sections: u,
                            sectionHeight: 0,
                            renderRow: b,
                            rowHeight: c
                        }
                    )
                );
            }
        })
    });
}
