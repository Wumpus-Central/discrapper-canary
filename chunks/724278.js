t.d(n, { Z: () => G }), t(266796);
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    d = t(442837),
    o = t(481060),
    s = t(447543),
    c = t(906732),
    u = t(565138),
    _ = t(372769),
    p = t(171368),
    g = t(271383),
    m = t(430824),
    I = t(51144),
    f = t(897285),
    v = t(978227),
    N = t(894017),
    h = t(79874),
    E = t(315416),
    C = t(236373),
    b = t(854698),
    x = t(391174),
    T = t(810561),
    y = t(390966),
    L = t(390072),
    j = t(981631),
    S = t(388032),
    D = t(244231);
function O(e) {
    var n;
    let { creator: t, guildId: r, channelId: l } = e,
        { analyticsLocations: a } = (0, c.ZP)(),
        s = (0, d.e7)([g.ZP], () => g.ZP.getMember(r, t.id), [t, r]);
    return (0, i.jsxs)('div', {
        className: D.row,
        children: [
            (0, i.jsx)(o.qEK, {
                size: o.EFr.SIZE_20,
                src: t.getAvatarURL(r, 20),
                'aria-label': null != (n = null == s ? void 0 : s.nick) ? n : I.ZP.getName(t),
                className: D.icon
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: S.NW.format(S.t['66DLFh'], {
                    usernameHook: function () {
                        var e, n;
                        return (0, i.jsx)(
                            o.P3F,
                            {
                                onClick: () =>
                                    (0, p.openUserProfileModal)({
                                        guildId: r,
                                        channelId: l,
                                        userId: t.id,
                                        roleId: null == s ? void 0 : s.colorRoleId,
                                        sourceAnalyticsLocations: a,
                                        analyticsLocation: { section: j.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG }
                                    }),
                                className: D.creator,
                                tag: 'span',
                                role: 'link',
                                children: (0, i.jsx)(o.PUh, {
                                    name: null != (e = null == s ? void 0 : s.nick) ? e : I.ZP.getName(t),
                                    color: null != (n = null == s ? void 0 : s.colorString) ? n : void 0
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
    let { guild: n, onClick: t, onClose: l } = e,
        d = r.useCallback(
            (e) => {
                null == t || t(e), null != t && (null == l || l(e));
            },
            [t, l]
        ),
        s = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.MINI,
                    active: !0,
                    className: a()(D.guildIcon, D.icon)
                }),
                (0, i.jsx)(_.Z, {
                    guild: n,
                    tooltipPosition: 'top',
                    tooltipColor: o.ua7.Colors.PRIMARY,
                    size: 16,
                    className: D.guildBadge
                }),
                (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: D.linkText,
                    children: n.name
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: D.row,
        children:
            null != t
                ? (0, i.jsx)(o.P3F, {
                      onClick: d,
                      className: D.clickable,
                      role: 'link',
                      children: s
                  })
                : s
    });
}
function Z(e) {
    let { userCount: n, onClick: t } = e;
    return (0, i.jsxs)('div', {
        className: D.row,
        children: [
            (0, i.jsx)(o.BFJ, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: D.icon
            }),
            (0, i.jsx)(o.P3F, {
                onClick: t,
                className: D.interestedCount,
                children: (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: S.NW.format(S.t['+DLsDw'], { count: n })
                })
            })
        ]
    });
}
function G(e) {
    let { guildEvent: n, guild: t, channel: l, headerId: a, onClose: c, onClickInterestedCount: u, isHub: _ = !1, containerRef: p, recurrenceId: g, setRecurrenceId: I } = e,
        j = (0, d.e7)([m.Z], () => null != m.Z.getGuild(t.id), [t.id]),
        { startTime: S, endTime: G } = (0, h.ZP)(n, g),
        P = (0, E.Z)(n.guild_id, n.id, g),
        W = r.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, s.Bk)(n);
            },
            [n]
        ),
        z = (0, N.Z)(g, n.id),
        k = (0, v.Z)(n);
    r.useEffect(() => {
        f.Z.getGuildEventUserCounts(t.id, n.id, null != g ? [g] : []), f.Z.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, g]);
    let A = (0, C.KV)(n.recurrence_rule),
        R = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, b.lh)(z, S, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
    return (0, i.jsxs)('div', {
        ref: p,
        children: [
            (0, i.jsxs)('div', {
                className: D.header,
                children: [
                    (0, i.jsx)(y.z, {
                        startTime: S.toISOString(),
                        endTime: null == G ? void 0 : G.toISOString(),
                        status: null != R ? R : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: g
                    }),
                    (0, i.jsx)(o.X6q, {
                        id: a,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: D.title,
                        children: n.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: D.body,
                children: [
                    (0, i.jsx)(U, {
                        guild: t,
                        onClick: j ? W : void 0,
                        onClose: c
                    }),
                    (0, i.jsx)(L.Z, {
                        guildScheduledEvent: n,
                        channel: l,
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
                            O,
                            {
                                creator: k,
                                guildId: t.id,
                                channelId: null == l ? void 0 : l.id
                            },
                            k.id
                        ),
                    null != n.description &&
                        (0, i.jsx)('div', {
                            className: D.description,
                            children: (0, i.jsx)(x.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id
                            })
                        })
                ]
            }),
            null != A && (0, i.jsx)('hr', { className: D.divider }),
            null != A &&
                (0, i.jsx)(T.Z, {
                    guildId: t.id,
                    recurrenceRule: A,
                    guildEventId: n.id,
                    onRecurrenceClick: I,
                    hideScroller: !0,
                    activeRecurrenceId: g
                })
        ]
    });
}
