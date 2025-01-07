n.d(t, {
    F: function () {
        return U;
    }
});
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(913527),
    o = n.n(a),
    u = n(91192),
    c = n(442837),
    d = n(481060),
    h = n(700582),
    f = n(493773),
    m = n(724757),
    g = n(212819),
    p = n(933557),
    b = n(266076),
    x = n(810123),
    v = n(448486),
    C = n(987509),
    S = n(131704),
    y = n(592125),
    N = n(430824),
    Z = n(496675),
    _ = n(158776),
    j = n(306680),
    E = n(699516),
    M = n(594174),
    L = n(55935),
    T = n(823379),
    P = n(51144),
    w = n(981631),
    A = n(490897),
    R = n(388032),
    k = n(5859);
function D(e) {
    let { destination: t, icon: n, label: i, subLabel: a, selected: o, disabled: c, onPressDestination: h, 'aria-setsize': m, 'aria-posinset': g } = e,
        p = (0, u.JA)(t.id),
        b = r.useRef(!1),
        x = r.useCallback(() => {
            !c && (null == h || h(t));
        }, [h, c, t]);
    return (
        (0, f.Z)(() => () => () => {
            b.current &&
                ((b.current = !1),
                null == h ||
                    h(t, {
                        transitionToDestination: !1,
                        closeAfterSend: !1
                    }));
        }),
        (0, l.jsxs)(d.Clickable, {
            className: s()(k.destinationRow, { [k.disabled]: c }),
            onClick: x,
            'aria-selected': o,
            'aria-setsize': m,
            'aria-posinset': g,
            ...p,
            children: [
                (0, l.jsxs)('div', {
                    className: k.identity,
                    children: [
                        (0, l.jsx)('div', {
                            className: k.iconWrapper,
                            children: n
                        }),
                        (0, l.jsxs)('div', {
                            className: k.labels,
                            children: [
                                (0, l.jsx)(d.Text, {
                                    tag: 'strong',
                                    className: k.label,
                                    variant: 'text-md/semibold',
                                    lineClamp: 1,
                                    children: i
                                }),
                                (0, l.jsx)(d.Text, {
                                    className: k.subLabel,
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
                    value: o,
                    className: k.checkbox
                })
            ]
        })
    );
}
function I(e) {
    let { user: t, subLabel: n, ...r } = e,
        i = P.ZP.useName(t),
        s = P.ZP.useUserTag(t, { decoration: 'never' }),
        a = (0, c.e7)([E.Z], () => E.Z.getNickname(t.id)),
        o = (0, c.e7)([_.Z], () => _.Z.getStatus(t.id));
    return (0, l.jsx)(D, {
        ...r,
        icon: (0, l.jsx)(h.Z, {
            'aria-hidden': !0,
            size: d.AvatarSizes.SIZE_32,
            user: t,
            status: o
        }),
        label: null != a ? a : i,
        subLabel: null != n ? n : s
    });
}
function F(e) {
    let { channel: t, subLabel: n, ...r } = e,
        i = (0, p.ZP)(t),
        s = (0, v._)(t);
    return (0, l.jsx)(D, {
        ...r,
        icon: (0, l.jsx)(b.Z, {
            'aria-hidden': !0,
            size: d.AvatarSizes.SIZE_32,
            channel: t,
            experimentLocation: 'application-command-modal'
        }),
        label: i,
        subLabel: null != n ? n : s
    });
}
function H(e) {
    let { channel: t, subLabel: n, ...r } = e,
        i = (0, c.e7)([N.Z], () => N.Z.getGuild(null == t ? void 0 : t.guild_id)),
        s = (0, p.ZP)(t),
        a = (0, c.e7)([y.Z, M.default, E.Z], () => {
            let e = y.Z.getChannel(t.parent_id);
            return null == e ? null : (0, p.F6)(e, M.default, E.Z, !1);
        }),
        u = (0, c.e7)([j.ZP], () => j.ZP.lastMessageTimestamp(t.id, A.W.CHANNEL)),
        h = null == i ? void 0 : i.name;
    if (t.isThread() || t.isForumPost()) {
        let e = t.isForumPost() ? d.ForumIcon : d.TextIcon;
        h = (0, l.jsxs)('div', {
            className: k.threadSubLabel,
            children: [
                (0, l.jsx)(e, {
                    color: d.tokens.colors.TEXT_SECONDARY,
                    className: k.subLabelIcon
                }),
                (0, l.jsx)(d.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    lineClamp: 1,
                    children: a
                }),
                null != u
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.Text, {
                                  className: k.subLabelSeparator,
                                  variant: 'text-xs/medium',
                                  color: 'text-secondary',
                                  children: '\u2022'
                              }),
                              (0, l.jsx)(d.Text, {
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
    return (0, l.jsx)(D, {
        ...r,
        icon: (0, l.jsx)(x.Z, {
            size: x.E.SMALL_32,
            guild: i,
            channel: t
        }),
        label: s,
        subLabel: null != n ? n : h
    });
}
function U(e) {
    let { rowData: t, selectedDestinations: n, handleToggleDestination: i, disableSelection: s, originDestination: a, ...o } = e,
        c = r.useMemo(() => [t.length], [t.length]),
        h = r.useCallback(() => 48, []),
        f = r.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.map(C.hC)) && void 0 !== e ? e : [];
        }, [n]),
        p = r.useCallback(
            (e) => {
                let { section: n, row: r } = e;
                if (n > 0) return;
                let { type: o, record: u } = t[r];
                if (o === g.h8.HEADER) return;
                let c =
                        o === g.h8.USER
                            ? {
                                  type: 'user',
                                  id: u.id
                              }
                            : {
                                  type: 'channel',
                                  id: u.id
                              },
                    d = (0, C.hC)(c),
                    h = (function (e, t) {
                        if (t instanceof S.Sf && (0, S.Km)(t.type)) {
                            if (null != t.rateLimitPerUser && t.rateLimitPerUser > 0 && !(Z.Z.can(w.Plq.MANAGE_CHANNELS, t) || Z.Z.can(w.Plq.MANAGE_MESSAGES, t))) return { label: R.intl.string(R.t.Icu3bW) };
                            if (t.isThread() || t.isForumPost() || !Z.Z.can(w.Plq.USE_APPLICATION_COMMANDS, t)) return { label: R.intl.string(R.t.v8MLq6) };
                            let n = (0, C.dL)(t.id);
                            if (e.id === n.id) return { label: R.intl.string(R.t.mD4gqa) };
                        }
                    })(a, u),
                    m = f.includes(d),
                    p = {
                        key: d,
                        destination: c,
                        subLabel: null != h ? h.label : void 0,
                        disabled: (s && !m) || null != h,
                        selected: m,
                        onPressDestination: i,
                        'aria-posinset': r + 1,
                        'aria-setsize': t.length
                    };
                if (o === g.h8.USER)
                    return (0, l.jsx)(I, {
                        user: u,
                        ...p
                    });
                if (o === g.h8.GROUP_DM)
                    return (0, l.jsx)(F, {
                        channel: u,
                        ...p
                    });
                if (o === g.h8.TEXT_CHANNEL || o === g.h8.VOICE_CHANNEL)
                    return (0, l.jsx)(H, {
                        channel: u,
                        ...p
                    });
                else (0, T.vE)(o);
            },
            [s, i, a, t, f]
        ),
        b = r.useRef(null),
        x = (0, m.Z)('share-command-modal', b);
    return (0, l.jsx)(u.bG, {
        navigator: x,
        children: (0, l.jsx)(u.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, l.jsx)(d.ModalListContent, {
                    scrollerRef: (e) => {
                        var n;
                        (b.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                    },
                    ...n,
                    ...o,
                    sections: c,
                    sectionHeight: 0,
                    renderRow: p,
                    rowHeight: h
                });
            }
        })
    });
}
