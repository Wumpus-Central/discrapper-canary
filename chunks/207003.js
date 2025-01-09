n.d(t, {
    Q: function () {
        return H;
    }
});
var l = n(200651),
    r = n(192379),
    s = n(120356),
    i = n.n(s),
    a = n(913527),
    u = n.n(a),
    o = n(91192),
    c = n(442837),
    d = n(481060),
    f = n(700582),
    h = n(724757),
    m = n(212819),
    b = n(933557),
    p = n(266076),
    x = n(810123),
    g = n(448486),
    y = n(987509),
    C = n(131704),
    S = n(592125),
    v = n(430824),
    E = n(496675),
    Z = n(158776),
    N = n(306680),
    L = n(699516),
    _ = n(594174),
    j = n(55935),
    M = n(823379),
    T = n(51144),
    R = n(981631),
    k = n(490897),
    P = n(388032),
    I = n(409267);
function D(e) {
    let { destination: t, icon: n, label: s, subLabel: a, selected: u, disabled: c, onPressDestination: f, 'aria-setsize': h, 'aria-posinset': m } = e,
        b = (0, o.JA)(t.id),
        p = r.useCallback(() => {
            !c && (null == f || f(t));
        }, [f, c, t]);
    return (0, l.jsxs)(d.Clickable, {
        className: i()(I.destinationRow, { [I.disabled]: c }),
        onClick: p,
        'aria-selected': u,
        'aria-setsize': h,
        'aria-posinset': m,
        ...b,
        children: [
            (0, l.jsxs)('div', {
                className: I.identity,
                children: [
                    (0, l.jsx)('div', {
                        className: I.iconWrapper,
                        children: n
                    }),
                    (0, l.jsxs)('div', {
                        className: I.labels,
                        children: [
                            (0, l.jsx)(d.Text, {
                                tag: 'strong',
                                className: I.label,
                                variant: 'text-md/semibold',
                                lineClamp: 1,
                                children: s
                            }),
                            (0, l.jsx)(d.Text, {
                                className: I.subLabel,
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: a
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(d.Checkbox, {
                type: d.Checkbox.Types.INVERTED,
                displayOnly: !0,
                size: 24,
                value: u,
                className: I.checkbox
            })
        ]
    });
}
function A(e) {
    let { user: t, subLabel: n, ...r } = e,
        s = T.ZP.useName(t),
        i = T.ZP.useUserTag(t, { decoration: 'never' }),
        a = (0, c.e7)([L.Z], () => L.Z.getNickname(t.id)),
        u = (0, c.e7)([Z.Z], () => Z.Z.getStatus(t.id));
    return (0, l.jsx)(D, {
        ...r,
        icon: (0, l.jsx)(f.Z, {
            'aria-hidden': !0,
            size: d.AvatarSizes.SIZE_32,
            user: t,
            status: u
        }),
        label: null != a ? a : s,
        subLabel: null != n ? n : i
    });
}
function U(e) {
    let { channel: t, subLabel: n, ...r } = e,
        s = (0, b.ZP)(t),
        i = (0, g._)(t);
    return (0, l.jsx)(D, {
        ...r,
        icon: (0, l.jsx)(p.Z, {
            'aria-hidden': !0,
            size: d.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: 'application-command-modal'
        }),
        label: s,
        subLabel: null != n ? n : i
    });
}
function B(e) {
    let { channel: t, subLabel: n, ...r } = e,
        s = (0, c.e7)([v.Z], () => v.Z.getGuild(null == t ? void 0 : t.guild_id)),
        i = (0, b.ZP)(t),
        a = (0, c.e7)([S.Z, _.default, L.Z], () => {
            let e = S.Z.getChannel(t.parent_id);
            return null == e ? null : (0, b.F6)(e, _.default, L.Z, !1);
        }),
        o = (0, c.e7)([N.ZP], () => N.ZP.lastMessageTimestamp(t.id, k.W.CHANNEL)),
        f = null == s ? void 0 : s.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.ForumIcon : d.TextIcon;
        f = (0, l.jsxs)('div', {
            className: I.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: d.tokens.colors.TEXT_SECONDARY,
                    className: I.subLabelIcon
                }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: a
                }),
                null != o
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Text, {
                                  className: I.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, l.jsx)(d.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: (0, j.Xf)(u()(o))
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    return (0, l.jsx)(D, {
        ...r,
        icon: (0, l.jsx)(x.Z, {
            size: x.E.SMALL_32,
            guild: s,
            channel: t
        }),
        label: i,
        subLabel: null != n ? n : f
    });
}
function H(e) {
    let { rowData: t, selectedDestinations: n, handleToggleDestination: s, disableSelection: i, ...a } = e,
        u = r.useMemo(() => [t.length], [t.length]),
        c = r.useCallback(() => 48, []),
        f = r.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.map(y.hC)) && void 0 !== e ? e : [];
        }, [n]),
        b = r.useCallback(
            (e) => {
                let { section: n, row: r } = e;
                if (n > 0) return;
                let { type: a, record: u } = t[r];
                if (a === m.h8.HEADER) return;
                let o =
                        a === m.h8.USER
                            ? {
                                  type: 'user',
                                  id: u.id
                              }
                            : {
                                  type: 'channel',
                                  id: u.id
                              },
                    c = (0, y.hC)(o),
                    d = (function (e) {
                        if (e instanceof C.Sf && (0, C.Km)(e.type) && null != e.rateLimitPerUser && e.rateLimitPerUser > 0 && !(E.Z.can(R.Plq.MANAGE_CHANNELS, e) || E.Z.can(R.Plq.MANAGE_MESSAGES, e))) return { label: P.intl.string(P.t.Icu3bW) };
                    })(u),
                    h = f.includes(c),
                    b = {
                        key: c,
                        destination: o,
                        subLabel: null != d ? d.label : void 0,
                        disabled: (i && !h) || null != d,
                        selected: h,
                        onPressDestination: s,
                        'aria-posinset': r + 1,
                        'aria-setsize': t.length
                    };
                if (a === m.h8.USER)
                    return (0, l.jsx)(A, {
                        user: u,
                        ...b
                    });
                if (a === m.h8.GROUP_DM)
                    return (0, l.jsx)(U, {
                        channel: u,
                        ...b
                    });
                if (a === m.h8.TEXT_CHANNEL || a === m.h8.VOICE_CHANNEL)
                    return (0, l.jsx)(B, {
                        channel: u,
                        ...b
                    });
                else (0, M.vE)(a);
            },
            [i, s, t, f]
        ),
        p = r.useRef(null),
        x = (0, h.Z)('share-command-modal', p);
    return (0, l.jsx)(o.bG, {
        navigator: x,
        children: (0, l.jsx)(o.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsx)(d.ModalListContent, {
                    scrollerRef: (e) => {
                        var n;
                        (p.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                    },
                    ...n,
                    ...a,
                    sections: u,
                    sectionHeight: 0,
                    renderRow: b,
                    rowHeight: c
                });
            }
        })
    });
}
