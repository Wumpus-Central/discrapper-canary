n.d(t, { F: () => q });
var l = n(200651),
    s = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(913527),
    o = n.n(r),
    u = n(91192),
    c = n(442837),
    d = n(481060),
    h = n(700582),
    m = n(493773),
    f = n(724757),
    b = n(212819),
    g = n(933557),
    p = n(266076),
    x = n(810123),
    _ = n(448486),
    v = n(987509),
    Z = n(131704),
    j = n(592125),
    y = n(430824),
    C = n(496675),
    N = n(158776),
    S = n(306680),
    E = n(699516),
    L = n(594174),
    M = n(55935),
    P = n(823379),
    T = n(51144),
    w = n(981631),
    A = n(490897),
    R = n(388032),
    D = n(5859);
function k(e) {
    let { destination: t, icon: n, label: i, subLabel: r, selected: o, disabled: c, onPressDestination: h, 'aria-setsize': f, 'aria-posinset': b } = e,
        g = (0, u.JA)(t.id),
        p = s.useRef(!1),
        x = s.useCallback(() => {
            c || null == h || h(t);
        }, [h, c, t]);
    return (
        (0, m.ZP)(() => () => () => {
            p.current &&
                ((p.current = !1),
                null == h ||
                    h(t, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, l.jsxs)(d.P3F, {
            className: a()(D.destinationRow, { [D.disabled]: c }),
            onClick: x,
            'aria-selected': o,
            'aria-setsize': f,
            'aria-posinset': b,
            ...g,
            children: [
                (0, l.jsxs)('div', {
                    className: D.identity,
                    children: [
                        (0, l.jsx)('div', {
                            className: D.iconWrapper,
                            children: n
                        }),
                        (0, l.jsxs)('div', {
                            className: D.labels,
                            children: [
                                (0, l.jsx)(d.Text, {
                                    tag: 'strong',
                                    className: D.label,
                                    variant: 'text-md/semibold',
                                    lineClamp: 1,
                                    children: i
                                }),
                                (0, l.jsx)(d.Text, {
                                    className: D.subLabel,
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: r
                                })
                            ]
                        })
                    ]
                }),
                (0, l.jsx)(d.XZJ, {
                    type: d.XZJ.Types.INVERTED,
                    displayOnly: !0,
                    size: 24,
                    value: o,
                    className: D.checkbox
                })
            ]
        })
    );
}
function I(e) {
    let { user: t, subLabel: n, ...s } = e,
        i = T.ZP.useName(t),
        a = T.ZP.useUserTag(t, { decoration: 'never' }),
        r = (0, c.e7)([E.Z], () => E.Z.getNickname(t.id)),
        o = (0, c.e7)([N.Z], () => N.Z.getStatus(t.id));
    return (0, l.jsx)(k, {
        ...s,
        icon: (0, l.jsx)(h.Z, {
            'aria-hidden': !0,
            size: d.EFr.SIZE_32,
            user: t,
            status: o
        }),
        label: null != r ? r : i,
        subLabel: null != n ? n : a
    });
}
function F(e) {
    let { channel: t, subLabel: n, ...s } = e,
        i = (0, g.ZP)(t),
        a = (0, _._)(t);
    return (0, l.jsx)(k, {
        ...s,
        icon: (0, l.jsx)(p.Z, {
            'aria-hidden': !0,
            size: d.EFr.SIZE_32,
            channel: t,
            experimentLocation: 'application-command-modal'
        }),
        label: i,
        subLabel: null != n ? n : a
    });
}
function U(e) {
    let { channel: t, subLabel: n, ...s } = e,
        i = (0, c.e7)([y.Z], () => y.Z.getGuild(null == t ? void 0 : t.guild_id)),
        a = (0, g.ZP)(t),
        r = (0, c.e7)([j.Z, L.default, E.Z], () => {
            let e = j.Z.getChannel(t.parent_id);
            return null == e ? null : (0, g.F6)(e, L.default, E.Z, !1);
        }),
        u = (0, c.e7)([S.ZP], () => S.ZP.lastMessageTimestamp(t.id, A.W.CHANNEL)),
        h = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.Mmi : d.VL1;
        h = (0, l.jsxs)('div', {
            className: D.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: d.TVs.colors.TEXT_SECONDARY,
                    className: D.subLabelIcon
                }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: r
                }),
                null != u
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Text, {
                                  className: D.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, l.jsx)(d.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, M.Xf)(o()(u))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, l.jsx)(k, {
        ...s,
        icon: (0, l.jsx)(x.Z, {
            size: x.E.SMALL_32,
            guild: i,
            channel: t
        }),
        label: a,
        subLabel: null != n ? n : h
    });
}
function q(e) {
    let { rowData: t, selectedDestinations: n, handleToggleDestination: i, disableSelection: a, originDestination: r, ...o } = e,
        c = s.useMemo(() => [t.length], [t.length]),
        h = s.useCallback(() => 48, []),
        m = s.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.map(v.hC)) && void 0 !== e ? e : [];
        }, [n]),
        g = s.useCallback(
            (e) => {
                let { section: n, row: s } = e;
                if (n > 0) return;
                let { type: o, record: u } = t[s];
                if (o === b.h8.HEADER) return;
                let c =
                        o === b.h8.USER
                            ? {
                                  type: 'user',
                                  id: u.id
                              }
                            : {
                                  type: 'channel',
                                  id: u.id
                              },
                    d = (0, v.hC)(c),
                    h = (function (e, t) {
                        if (t instanceof Z.Sf && (0, Z.Km)(t.type)) {
                            if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(C.Z.can(w.Plq.MANAGE_CHANNELS, t) || C.Z.can(w.Plq.MANAGE_MESSAGES, t))) return { label: R.intl.string(R.t.Icu3bW) };
                            if (t.isThread() || t.isForumPost() || !C.Z.can(w.Plq.USE_APPLICATION_COMMANDS, t)) return { label: R.intl.string(R.t.v8MLq6) };
                            let n = (0, v.dL)(t.id);
                            if (e.id === n.id) return { label: R.intl.string(R.t.mD4gqa) };
                        }
                    })(r, u),
                    f = m.includes(d),
                    g = {
                        key: d,
                        destination: c,
                        subLabel: null != h ? h.label : void 0,
                        disabled: (a && !f) || null != h,
                        selected: f,
                        onPressDestination: i,
                        'aria-posinset': s + 1,
                        'aria-setsize': t.length
                    };
                return o === b.h8.USER
                    ? (0, l.jsx)(I, {
                          user: u,
                          ...g
                      })
                    : o === b.h8.GROUP_DM
                      ? (0, l.jsx)(F, {
                            channel: u,
                            ...g
                        })
                      : o === b.h8.TEXT_CHANNEL || o === b.h8.VOICE_CHANNEL
                        ? (0, l.jsx)(U, {
                              channel: u,
                              ...g
                          })
                        : void (0, P.vE)(o);
            },
            [a, i, r, t, m]
        ),
        p = s.useRef(null),
        x = (0, f.Z)('share-command-modal', p);
    return (0, l.jsx)(u.bG, {
        navigator: x,
        children: (0, l.jsx)(u.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsx)(d.YAO, {
                    scrollerRef: (e) => {
                        var n;
                        (p.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                    },
                    ...n,
                    ...o,
                    sections: c,
                    sectionHeight: 0,
                    renderRow: g,
                    rowHeight: h
                });
            }
        })
    });
}
