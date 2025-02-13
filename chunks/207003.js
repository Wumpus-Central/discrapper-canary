l.d(t, { Q: () => w });
var n = l(200651),
    s = l(192379),
    r = l(120356),
    a = l.n(r),
    i = l(913527),
    u = l.n(i),
    o = l(91192),
    c = l(442837),
    d = l(481060),
    h = l(700582),
    f = l(724757),
    m = l(212819),
    p = l(933557),
    x = l(266076),
    g = l(810123),
    b = l(448486),
    _ = l(987509),
    y = l(131704),
    E = l(592125),
    S = l(430824),
    Z = l(496675),
    N = l(158776),
    j = l(306680),
    v = l(699516),
    C = l(594174),
    L = l(55935),
    T = l(823379),
    R = l(51144),
    M = l(981631),
    P = l(490897),
    k = l(388032),
    I = l(36984);
function D(e) {
    let { destination: t, icon: l, label: r, subLabel: i, selected: u, disabled: c, onPressDestination: h, 'aria-setsize': f, 'aria-posinset': m } = e,
        p = (0, o.JA)(t.id),
        x = s.useCallback(() => {
            c || null == h || h(t);
        }, [h, c, t]);
    return (0, n.jsxs)(d.P3F, {
        className: a()(I.destinationRow, { [I.disabled]: c }),
        onClick: x,
        'aria-selected': u,
        'aria-setsize': f,
        'aria-posinset': m,
        ...p,
        children: [
            (0, n.jsxs)('div', {
                className: I.identity,
                children: [
                    (0, n.jsx)('div', {
                        className: I.iconWrapper,
                        children: l
                    }),
                    (0, n.jsxs)('div', {
                        className: I.labels,
                        children: [
                            (0, n.jsx)(d.Text, {
                                tag: 'strong',
                                className: I.label,
                                variant: 'text-md/semibold',
                                lineClamp: 1,
                                children: r
                            }),
                            (0, n.jsx)(d.Text, {
                                className: I.subLabel,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: i
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(d.XZJ, {
                type: d.XZJ.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: u,
                className: I.checkbox
            })
        ]
    });
}
function A(e) {
    let { user: t, subLabel: l, ...s } = e,
        r = R.ZP.useName(t),
        a = R.ZP.useUserTag(t, { decoration: 'never' }),
        i = (0, c.e7)([v.Z], () => v.Z.getNickname(t.id)),
        u = (0, c.e7)([N.Z], () => N.Z.getStatus(t.id));
    return (0, n.jsx)(D, {
        ...s,
        icon: (0, n.jsx)(h.Z, {
            'aria-hidden': !0,
            size: d.EFr.SIZE_32,
            user: t,
            status: u
        }),
        label: null != i ? i : r,
        subLabel: null != l ? l : a
    });
}
function U(e) {
    let { channel: t, subLabel: l, ...s } = e,
        r = (0, p.ZP)(t),
        a = (0, b._)(t);
    return (0, n.jsx)(D, {
        ...s,
        icon: (0, n.jsx)(x.Z, {
            'aria-hidden': !0,
            size: d.EFr.SIZE_32,
            channel: t,
            experimentLocation: 'application-command-modal'
        }),
        label: r,
        subLabel: null != l ? l : a
    });
}
function z(e) {
    let { channel: t, subLabel: l, ...s } = e,
        r = (0, c.e7)([S.Z], () => S.Z.getGuild(null == t ? void 0 : t.guild_id)),
        a = (0, p.ZP)(t),
        i = (0, c.e7)([E.Z, C.default, v.Z], () => {
            let e = E.Z.getChannel(t.parent_id);
            return null == e ? null : (0, p.F6)(e, C.default, v.Z, !1);
        }),
        o = (0, c.e7)([j.ZP], () => j.ZP.lastMessageTimestamp(t.id, P.W.CHANNEL)),
        h = null == r ? void 0 : r.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.Mmi : d.VL1;
        h = (0, n.jsxs)('div', {
            className: I.threadSubLabel,
            children: [
                (0, n.jsx)(e, {
                    color: d.TVs.colors.TEXT_SECONDARY,
                    className: I.subLabelIcon
                }),
                (0, n.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: i
                }),
                null != o
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(d.Text, {
                                  className: I.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, n.jsx)(d.Text, {
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
    return (0, n.jsx)(D, {
        ...s,
        icon: (0, n.jsx)(g.Z, {
            size: g.E.SMALL_32,
            guild: r,
            channel: t
        }),
        label: a,
        subLabel: null != l ? l : h
    });
}
function w(e) {
    let { rowData: t, selectedDestinations: l, handleToggleDestination: r, disableSelection: a, ...i } = e,
        u = s.useMemo(() => [t.length], [t.length]),
        c = s.useCallback(() => 48, []),
        h = s.useMemo(() => {
            var e;
            return null !== (e = null == l ? void 0 : l.map(_.hC)) && void 0 !== e ? e : [];
        }, [l]),
        p = s.useCallback(
            (e) => {
                let { section: l, row: s } = e;
                if (l > 0) return;
                let { type: i, record: u } = t[s];
                if (i === m.h8.HEADER) return;
                let o =
                        i === m.h8.USER
                            ? {
                                  type: 'user',
                                  id: u.id
                              }
                            : {
                                  type: 'channel',
                                  id: u.id
                              },
                    c = (0, _.hC)(o),
                    d = (function (e) {
                        if (e instanceof y.Sf && (0, y.Km)(e.type) && null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(Z.Z.can(M.Plq.MANAGE_CHANNELS, e) || Z.Z.can(M.Plq.MANAGE_MESSAGES, e))) return { label: k.intl.string(k.t.Icu3bW) };
                    })(u),
                    f = h.includes(c),
                    p = {
                        key: c,
                        destination: o,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (a && !f) || null != d,
                        selected: f,
                        onPressDestination: r,
                        'aria-posinset': s + 1,
                        'aria-setsize': t.length
                    };
                return i === m.h8.USER
                    ? (0, n.jsx)(A, {
                          user: u,
                          ...p
                      })
                    : i === m.h8.GROUP_DM
                      ? (0, n.jsx)(U, {
                            channel: u,
                            ...p
                        })
                      : i === m.h8.TEXT_CHANNEL || i === m.h8.VOICE_CHANNEL
                        ? (0, n.jsx)(z, {
                              channel: u,
                              ...p
                          })
                        : void (0, T.vE)(i);
            },
            [a, r, t, h]
        ),
        x = s.useRef(null),
        g = (0, f.Z)('share-command-modal', x);
    return (0, n.jsx)(o.bG, {
        navigator: g,
        children: (0, n.jsx)(o.SJ, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, n.jsx)(d.YAO, {
                    scrollerRef: (e) => {
                        var l;
                        (x.current = e), (t.current = null !== (l = null == e ? void 0 : e.getScrollerNode()) && void 0 !== l ? l : null);
                    },
                    ...l,
                    ...i,
                    sections: u,
                    sectionHeight: 0,
                    renderRow: p,
                    rowHeight: c
                });
            }
        })
    });
}
