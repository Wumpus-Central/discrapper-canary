t.d(n, { Z: () => z });
var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    d = t(442837),
    s = t(481060),
    o = t(447543),
    c = t(906732),
    u = t(565138),
    _ = t(372769),
    m = t(171368),
    g = t(271383),
    p = t(430824),
    v = t(51144),
    h = t(897285),
    I = t(978227),
    f = t(894017),
    E = t(79874),
    x = t(315416),
    C = t(236373),
    N = t(854698),
    T = t(391174),
    L = t(810561),
    b = t(390966),
    S = t(390072),
    j = t(981631),
    D = t(388032),
    y = t(295267);
function Z(e) {
    var n;
    let { creator: t, guildId: l, channelId: a } = e,
        { analyticsLocations: r } = (0, c.ZP)(),
        o = (0, d.e7)([g.ZP], () => g.ZP.getMember(l, t.id), [t, l]);
    return (0, i.jsxs)('div', {
        className: y.row,
        children: [
            (0, i.jsx)(s.qEK, {
                size: s.EFr.SIZE_20,
                src: t.getAvatarURL(l, 20),
                'aria-label': null !== (n = null == o ? void 0 : o.nick) && void 0 !== n ? n : v.ZP.getName(t),
                className: y.icon
            }),
            (0, i.jsx)(s.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: D.intl.format(D.t['66DLFh'], {
                    usernameHook: function () {
                        var e, n;
                        return (0, i.jsx)(
                            s.P3F,
                            {
                                onClick: () =>
                                    (0, m.openUserProfileModal)({
                                        guildId: l,
                                        channelId: a,
                                        userId: t.id,
                                        roleId: null == o ? void 0 : o.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                        analyticsLocation: { section: j.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG }
                                    }),
                                className: y.creator,
                                tag: 'span',
                                role: 'link',
                                children: (0, i.jsx)(s.PUh, {
                                    name: null !== (e = null == o ? void 0 : o.nick) && void 0 !== e ? e : v.ZP.getName(t),
                                    color: null !== (n = null == o ? void 0 : o.colorString) && void 0 !== n ? n : void 0
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
function U(e) {
    let { guild: n, onClick: t, onClose: a } = e,
        d = l.useCallback(
            (e) => {
                null == t || t(e), null != t && (null == a || a(e));
            },
            [t, a]
        ),
        o = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: r()(y.guildIcon, y.icon)
                }),
                (0, i.jsx)(_.Z, {
                    guild: n,
                    tooltipPosition: 'top',
                    tooltipColor: s.ua7.Colors.PRIMARY,
                    size: 16,
                    className: y.guildBadge
                }),
                (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: y.linkText,
                    children: n.name
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: y.row,
        children:
            null != t
                ? (0, i.jsx)(s.P3F, {
                      onClick: d,
                      className: y.clickable,
                      role: 'link',
                      children: o
                  })
                : o
    });
}
function G(e) {
    let { userCount: n, onClick: t } = e;
    return (0, i.jsxs)('div', {
        className: y.row,
        children: [
            (0, i.jsx)(s.BFJ, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: y.icon
            }),
            (0, i.jsx)(s.P3F, {
                onClick: t,
                className: y.interestedCount,
                children: (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: D.intl.format(D.t['+DLsDw'], { count: n })
                })
            })
        ]
    });
}
function z(e) {
    let { guildEvent: n, guild: t, channel: a, headerId: r, onClose: c, onClickInterestedCount: u, isHub: _ = !1, containerRef: m, recurrenceId: g, setRecurrenceId: v } = e,
        j = (0, d.e7)([p.Z], () => null != p.Z.getGuild(t.id), [t.id]),
        { startTime: D, endTime: z } = (0, E.ZP)(n, g),
        k = (0, x.Z)(n.guild_id, n.id, g),
        R = l.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, o.B)(n);
            },
            [n]
        ),
        B = (0, f.Z)(g, n.id),
        P = (0, I.Z)(n);
    l.useEffect(() => {
        h.Z.getGuildEventUserCounts(t.id, n.id, null != g ? [g] : []), h.Z.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, g]);
    let A = (0, C.KV)(n.recurrence_rule),
        O = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, N.lh)(B, D, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
    return (0, i.jsxs)('div', {
        ref: m,
        children: [
            (0, i.jsxs)('div', {
                className: y.header,
                children: [
                    (0, i.jsx)(b.z, {
                        startTime: D.toISOString(),
                        endTime: null == z ? void 0 : z.toISOString(),
                        status: null != O ? O : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: g
                    }),
                    (0, i.jsx)(s.X6q, {
                        id: r,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: y.title,
                        children: n.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: y.body,
                children: [
                    (0, i.jsx)(U, {
                        guild: t,
                        onClick: j ? R : void 0,
                        onClose: c
                    }),
                    (0, i.jsx)(S.Z, {
                        guildScheduledEvent: n,
                        channel: a,
                        onClose: c
                    }),
                    null != k &&
                        (0, i.jsx)(G, {
                            userCount: k,
                            onClick: u
                        }),
                    !_ &&
                        null != P &&
                        (0, i.jsx)(
                            Z,
                            {
                                creator: P,
                                guildId: t.id,
                                channelId: null == a ? void 0 : a.id
                            },
                            P.id
                        ),
                    null != n.description &&
                        (0, i.jsx)('div', {
                            className: y.description,
                            children: (0, i.jsx)(T.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id
                            })
                        })
                ]
            }),
            null != A && (0, i.jsx)('hr', { className: y.divider }),
            null != A &&
                (0, i.jsx)(L.Z, {
                    guildId: t.id,
                    recurrenceRule: A,
                    guildEventId: n.id,
                    onRecurrenceClick: v,
                    hideScroller: !0,
                    activeRecurrenceId: g
                })
        ]
    });
}
