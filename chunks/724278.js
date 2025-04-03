t.d(n, { Z: () => P }), t(266796);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    d = t(442837),
    o = t(481060),
    s = t(447543),
    c = t(906732),
    u = t(565138),
    _ = t(372769),
    g = t(884902),
    p = t(171368),
    m = t(271383),
    I = t(430824),
    f = t(51144),
    v = t(897285),
    N = t(978227),
    h = t(894017),
    E = t(79874),
    C = t(315416),
    b = t(236373),
    x = t(854698),
    T = t(391174),
    y = t(810561),
    L = t(390966),
    j = t(390072),
    S = t(981631),
    D = t(388032),
    O = t(244231);
function U(e) {
    var n;
    let { creator: t, guildId: l, channelId: r } = e,
        { analyticsLocations: a } = (0, c.ZP)(),
        s = (0, d.e7)([m.ZP], () => m.ZP.getMember(l, t.id), [t, l]),
        u = (0, g.E)(null == s ? void 0 : s.guildId, null == s ? void 0 : s.colorStrings);
    return (0, i.jsxs)('div', {
        className: O.row,
        children: [
            (0, i.jsx)(o.qEK, {
                size: o.EFr.SIZE_20,
                src: t.getAvatarURL(l, 20),
                'aria-label': null != (n = null == s ? void 0 : s.nick) ? n : f.ZP.getName(t),
                className: O.icon
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: D.NW.format(D.t['66DLFh'], {
                    usernameHook: function () {
                        var e, n;
                        return (0, i.jsx)(
                            o.P3F,
                            {
                                onClick: () =>
                                    (0, p.openUserProfileModal)({
                                        guildId: l,
                                        channelId: r,
                                        userId: t.id,
                                        roleId: null == s ? void 0 : s.colorRoleId,
                                        sourceAnalyticsLocations: a,
                                        analyticsLocation: { section: S.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG }
                                    }),
                                className: O.creator,
                                tag: 'span',
                                role: 'link',
                                children: (0, i.jsx)(o.PUh, {
                                    name: null != (e = null == s ? void 0 : s.nick) ? e : f.ZP.getName(t),
                                    color: null != (n = null == s ? void 0 : s.colorString) ? n : void 0,
                                    roleGradient: u
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
function G(e) {
    let { guild: n, onClick: t, onClose: r } = e,
        d = l.useCallback(
            (e) => {
                null == t || t(e), null != t && (null == r || r(e));
            },
            [t, r]
        ),
        s = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: a()(O.guildIcon, O.icon)
                }),
                (0, i.jsx)(_.Z, {
                    guild: n,
                    tooltipPosition: 'top',
                    tooltipColor: o.ua7.Colors.PRIMARY,
                    size: 16,
                    className: O.guildBadge
                }),
                (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: O.linkText,
                    children: n.name
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: O.row,
        children:
            null != t
                ? (0, i.jsx)(o.P3F, {
                      onClick: d,
                      className: O.clickable,
                      role: 'link',
                      children: s
                  })
                : s
    });
}
function Z(e) {
    let { userCount: n, onClick: t } = e;
    return (0, i.jsxs)('div', {
        className: O.row,
        children: [
            (0, i.jsx)(o.BFJ, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: O.icon
            }),
            (0, i.jsx)(o.P3F, {
                onClick: t,
                className: O.interestedCount,
                children: (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: D.NW.format(D.t['+DLsDw'], { count: n })
                })
            })
        ]
    });
}
function P(e) {
    let { guildEvent: n, guild: t, channel: r, headerId: a, onClose: c, onClickInterestedCount: u, isHub: _ = !1, containerRef: g, recurrenceId: p, setRecurrenceId: m } = e,
        f = (0, d.e7)([I.Z], () => null != I.Z.getGuild(t.id), [t.id]),
        { startTime: S, endTime: D } = (0, E.ZP)(n, p),
        P = (0, C.Z)(n.guild_id, n.id, p),
        W = l.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, s.Bk)(n);
            },
            [n]
        ),
        z = (0, h.Z)(p, n.id),
        k = (0, N.Z)(n);
    l.useEffect(() => {
        v.Z.getGuildEventUserCounts(t.id, n.id, null != p ? [p] : []), v.Z.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, p]);
    let A = (0, b.KV)(n.recurrence_rule),
        R = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, x.lh)(z, S, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
    return (0, i.jsxs)('div', {
        ref: g,
        children: [
            (0, i.jsxs)('div', {
                className: O.header,
                children: [
                    (0, i.jsx)(L.z, {
                        startTime: S.toISOString(),
                        endTime: null == D ? void 0 : D.toISOString(),
                        status: null != R ? R : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: p
                    }),
                    (0, i.jsx)(o.X6q, {
                        id: a,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: O.title,
                        children: n.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: O.body,
                children: [
                    (0, i.jsx)(G, {
                        guild: t,
                        onClick: f ? W : void 0,
                        onClose: c
                    }),
                    (0, i.jsx)(j.Z, {
                        guildScheduledEvent: n,
                        channel: r,
                        onClose: c
                    }),
                    null != P &&
                        (0, i.jsx)(Z, {
                            userCount: P,
                            onClick: u
                        }),
                    !_ &&
                        null != k &&
                        (0, i.jsx)(
                            U,
                            {
                                creator: k,
                                guildId: t.id,
                                channelId: null == r ? void 0 : r.id
                            },
                            k.id
                        ),
                    null != n.description &&
                        (0, i.jsx)('div', {
                            className: O.description,
                            children: (0, i.jsx)(T.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id
                            })
                        })
                ]
            }),
            null != A && (0, i.jsx)('hr', { className: O.divider }),
            null != A &&
                (0, i.jsx)(y.Z, {
                    guildId: t.id,
                    recurrenceRule: A,
                    guildEventId: n.id,
                    onRecurrenceClick: m,
                    hideScroller: !0,
                    activeRecurrenceId: p
                })
        ]
    });
}
