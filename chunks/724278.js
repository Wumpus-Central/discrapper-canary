t.d(n, {
    Z: function () {
        return O;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    d = t(442837),
    o = t(481060),
    c = t(447543),
    s = t(906732),
    u = t(565138),
    _ = t(372769),
    g = t(171368),
    p = t(271383),
    m = t(430824),
    I = t(51144),
    v = t(897285),
    h = t(978227),
    f = t(894017),
    E = t(79874),
    C = t(315416),
    T = t(236373),
    b = t(854698),
    L = t(391174),
    x = t(810561),
    S = t(390966),
    D = t(390072),
    U = t(981631),
    y = t(388032),
    N = t(295267);
function G(e) {
    var n;
    let { creator: t, guildId: a, channelId: l } = e,
        { analyticsLocations: r } = (0, s.ZP)(),
        c = (0, d.e7)([p.ZP], () => p.ZP.getMember(a, t.id), [t, a]);
    return (0, i.jsxs)('div', {
        className: N.row,
        children: [
            (0, i.jsx)(o.Avatar, {
                size: o.AvatarSizes.SIZE_20,
                src: t.getAvatarURL(a, 20),
                'aria-label': null !== (n = null == c ? void 0 : c.nick) && void 0 !== n ? n : I.ZP.getName(t),
                className: N.icon
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: y.intl.format(y.t['66DLFh'], {
                    usernameHook: function () {
                        var e, n;
                        return (0, i.jsx)(
                            o.Clickable,
                            {
                                onClick: () =>
                                    (0, g.openUserProfileModal)({
                                        guildId: a,
                                        channelId: l,
                                        userId: t.id,
                                        roleId: null == c ? void 0 : c.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                        analyticsLocation: { section: U.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG }
                                    }),
                                className: N.creator,
                                tag: 'span',
                                role: 'link',
                                children: (0, i.jsx)(o.NameWithRole, {
                                    name: null !== (e = null == c ? void 0 : c.nick) && void 0 !== e ? e : I.ZP.getName(t),
                                    color: null !== (n = null == c ? void 0 : c.colorString) && void 0 !== n ? n : void 0
                                })
                            },
                            'open-user-profile'
                        );
                    }
                })
            })
        ]
    });
}
function Z(e) {
    let { guild: n, onClick: t, onClose: l } = e,
        d = a.useCallback(
            (e) => {
                null == t || t(e), null != t && (null == l || l(e));
            },
            [t, l]
        ),
        c = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: r()(N.guildIcon, N.icon)
                }),
                (0, i.jsx)(_.Z, {
                    guild: n,
                    tooltipPosition: 'top',
                    tooltipColor: o.Tooltip.Colors.PRIMARY,
                    size: 16,
                    className: N.guildBadge
                }),
                (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: N.linkText,
                    children: n.name
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: N.row,
        children:
            null != t
                ? (0, i.jsx)(o.Clickable, {
                      onClick: d,
                      className: N.clickable,
                      role: 'link',
                      children: c
                  })
                : c
    });
}
function j(e) {
    let { userCount: n, onClick: t } = e;
    return (0, i.jsxs)('div', {
        className: N.row,
        children: [
            (0, i.jsx)(o.GroupIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: N.icon
            }),
            (0, i.jsx)(o.Clickable, {
                onClick: t,
                className: N.interestedCount,
                children: (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: y.intl.format(y.t['+DLsDw'], { count: n })
                })
            })
        ]
    });
}
function O(e) {
    let { guildEvent: n, guild: t, channel: l, headerId: r, onClose: s, onClickInterestedCount: u, isHub: _ = !1, containerRef: g, recurrenceId: p, setRecurrenceId: I } = e,
        U = (0, d.e7)([m.Z], () => null != m.Z.getGuild(t.id), [t.id]),
        { startTime: y, endTime: O } = (0, E.ZP)(n, p),
        A = (0, C.Z)(n.guild_id, n.id, p),
        z = a.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, c.B)(n);
            },
            [n]
        ),
        B = (0, f.Z)(p, n.id),
        R = (0, h.Z)(n);
    a.useEffect(() => {
        v.Z.getGuildEventUserCounts(t.id, n.id, null != p ? [p] : []), v.Z.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, p]);
    let P = (0, T.KV)(n.recurrence_rule),
        k = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, b.lh)(B, y, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
    return (0, i.jsxs)('div', {
        ref: g,
        children: [
            (0, i.jsxs)('div', {
                className: N.header,
                children: [
                    (0, i.jsx)(S.z, {
                        startTime: y.toISOString(),
                        endTime: null == O ? void 0 : O.toISOString(),
                        status: null != k ? k : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: p
                    }),
                    (0, i.jsx)(o.Heading, {
                        id: r,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: N.title,
                        children: n.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: N.body,
                children: [
                    (0, i.jsx)(Z, {
                        guild: t,
                        onClick: U ? z : void 0,
                        onClose: s
                    }),
                    (0, i.jsx)(D.Z, {
                        guildScheduledEvent: n,
                        channel: l,
                        onClose: s
                    }),
                    null != A &&
                        (0, i.jsx)(j, {
                            userCount: A,
                            onClick: u
                        }),
                    !_ &&
                        null != R &&
                        (0, i.jsx)(
                            G,
                            {
                                creator: R,
                                guildId: t.id,
                                channelId: null == l ? void 0 : l.id
                            },
                            R.id
                        ),
                    null != n.description &&
                        (0, i.jsx)('div', {
                            className: N.description,
                            children: (0, i.jsx)(L.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id
                            })
                        })
                ]
            }),
            null != P && (0, i.jsx)('hr', { className: N.divider }),
            null != P &&
                (0, i.jsx)(x.Z, {
                    guildId: t.id,
                    recurrenceRule: P,
                    guildEventId: n.id,
                    onRecurrenceClick: I,
                    hideScroller: !0,
                    activeRecurrenceId: p
                })
        ]
    });
}
