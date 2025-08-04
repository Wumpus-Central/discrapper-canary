(t.d(n, { Z: () => Z }), t(953529));
var i = t(255367),
    l = t(73800),
    r = t(120356),
    a = t.n(r),
    d = t(442837),
    o = t(481060),
    s = t(447543),
    c = t(906732),
    u = t(565138),
    _ = t(372769),
    g = t(884902),
    p = t(892001),
    m = t(271383),
    f = t(430824),
    I = t(51144),
    v = t(897285),
    h = t(978227),
    C = t(894017),
    E = t(79874),
    b = t(376108),
    x = t(236373),
    T = t(854698),
    y = t(391174),
    L = t(810561),
    j = t(390966),
    N = t(390072),
    S = t(388032),
    D = t(244231);
function O(e) {
    var n, t;
    let { creator: l, guildId: r, channelId: a } = e,
        { analyticsLocations: s } = (0, c.ZP)(),
        u = (0, d.e7)([m.ZP], () => m.ZP.getMember(r, l.id), [l, r]),
        _ = (0, g.X7)(null == u ? void 0 : u.guildId, null == u ? void 0 : u.userId, null != (n = null == u ? void 0 : u.colorStrings) ? n : null);
    return (0, i.jsxs)('div', {
        className: D.row,
        children: [
            (0, i.jsx)(o.qEK, {
                size: o.EFr.SIZE_20,
                src: l.getAvatarURL(r, 20),
                'aria-label': null != (t = null == u ? void 0 : u.nick) ? t : I.ZP.getName(l),
                className: D.icon
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: S.intl.format(S.t['66DLFh'], {
                    usernameHook: function () {
                        var e, n;
                        return (0, i.jsx)(
                            o.P3F,
                            {
                                onClick: () =>
                                    (0, p.openUserProfileModal)({
                                        guildId: r,
                                        channelId: a,
                                        userId: l.id,
                                        roleId: null == u ? void 0 : u.colorRoleId,
                                        sourceAnalyticsLocations: s
                                    }),
                                className: D.creator,
                                tag: 'span',
                                role: 'link',
                                children: (0, i.jsx)(o.PUh, {
                                    name: null != (e = null == u ? void 0 : u.nick) ? e : I.ZP.getName(l),
                                    colorString: null != (n = null == u ? void 0 : u.colorString) ? n : null,
                                    colorStrings: _
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
    let { guild: n, onClick: t, onClose: r } = e,
        d = l.useCallback(
            (e) => {
                (null == t || t(e), null != t && (null == r || r(e)));
            },
            [t, r]
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
function G(e) {
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
                    children: S.intl.format(S.t['+DLsDw'], { count: n })
                })
            })
        ]
    });
}
function Z(e) {
    let { guildEvent: n, guild: t, channel: r, headerId: a, onClose: c, onClickInterestedCount: u, isHub: _ = !1, containerRef: g, recurrenceId: p, setRecurrenceId: m } = e,
        I = (0, d.e7)([f.Z], () => null != f.Z.getGuild(t.id), [t.id]),
        { startTime: S, endTime: Z } = (0, E.ZP)(n, p),
        P = (0, b.Z)(n.guild_id, n.id, p),
        z = l.useCallback(
            (e) => {
                (e.stopPropagation(), null != n && (0, s.Bk)(n));
            },
            [n]
        ),
        A = (0, C.Z)(p, n.id),
        R = (0, h.Z)(n);
    l.useEffect(() => {
        (v.Z.getGuildEventUserCounts(t.id, n.id, null != p ? [p] : []), v.Z.getGuildEventsForCurrentUser(t.id));
    }, [t.id, n.id, p]);
    let k = (0, x.KV)(n.recurrence_rule),
        B = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, T.lh)(A, S, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
    return (0, i.jsxs)('div', {
        ref: g,
        children: [
            (0, i.jsxs)('div', {
                className: D.header,
                children: [
                    (0, i.jsx)(j.z, {
                        startTime: S.toISOString(),
                        endTime: null == Z ? void 0 : Z.toISOString(),
                        status: null != B ? B : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: p
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
                        onClick: I ? z : void 0,
                        onClose: c
                    }),
                    (0, i.jsx)(N.Z, {
                        guildScheduledEvent: n,
                        channel: r,
                        onClose: c
                    }),
                    null != P &&
                        (0, i.jsx)(G, {
                            userCount: P,
                            onClick: u
                        }),
                    !_ &&
                        null != R &&
                        (0, i.jsx)(
                            O,
                            {
                                creator: R,
                                guildId: t.id,
                                channelId: null == r ? void 0 : r.id
                            },
                            R.id
                        ),
                    null != n.description &&
                        (0, i.jsx)('div', {
                            className: D.description,
                            children: (0, i.jsx)(y.Z, {
                                description: n.description,
                                truncate: !1,
                                guildId: t.id
                            })
                        })
                ]
            }),
            null != k && (0, i.jsx)('hr', { className: D.divider }),
            null != k &&
                (0, i.jsx)(L.Z, {
                    guildId: t.id,
                    recurrenceRule: k,
                    guildEventId: n.id,
                    onRecurrenceClick: m,
                    hideScroller: !0,
                    activeRecurrenceId: p
                })
        ]
    });
}
