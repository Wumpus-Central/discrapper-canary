n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(565138),
    s = n(241559),
    c = n(527379),
    u = n(430824),
    d = n(944486),
    m = n(914010),
    h = n(626135),
    f = n(528011),
    p = n(666657),
    _ = n(533244),
    g = n(981631),
    E = n(176505),
    C = n(388032),
    I = n(566751);
function x(e) {
    var t, x;
    let { onDismiss: N } = e,
        v = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
        T = (0, l.e7)([d.Z], () => (null != v ? d.Z.getChannelId(v) : null), [v]),
        S = null != v ? v : null,
        A = (0, l.e7)([u.Z], () => (null != S ? u.Z.getGuild(S) : null), [S]),
        { shouldShowIncidentActions: b, incidentData: j, isUnderLockdown: R } = (0, f.mI)(S),
        Z = (0, s.n2)(null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : g.lds),
        P = r.useCallback(() => null != A && (0, c._X)(A.id), [A]);
    if (null == A || null == j || !b) return null;
    let L = (e) => {
            if (e && Z && T !== E.oC.MEMBER_SAFETY && P()) {
                h.default.track(g.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: g.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: A.id
                });
                return;
            }
            (0, a.openModalLazy)(async () => {
                let e = {
                        source: p.Zu.NAGBAR,
                        alertType: (0, _.T1)(j)
                    },
                    { default: t } = await n.e('58175').then(n.bind(n, 664452));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: A.id,
                        analyticsData: e
                    });
            });
        },
        y = (0, i.jsx)(o.Z, {
            className: I.guildIcon,
            guild: A,
            size: o.Z.Sizes.MINI
        }),
        O = (0, _.OY)(j, A.name);
    if (null != (null !== (x = j.dmsDisabledUntil) && void 0 !== x ? x : j.invitesDisabledUntil) && R)
        return (0, i.jsxs)(a.Notice, {
            className: I.notice,
            color: a.NoticeColors.NEUTRAL,
            children: [
                (0, i.jsx)(a.NoticeCloseButton, {
                    onClick: N,
                    noticeType: g.kVF.GUILD_RAID_NOTIFICATION
                }),
                y,
                O,
                (0, i.jsx)(a.NoticeButton, {
                    className: I.actionButton,
                    onClick: () => L(!1),
                    children: (0, i.jsxs)('div', {
                        className: I.actionButtonInner,
                        children: [
                            (0, i.jsx)(a.LockIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: C.intl.string(C.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let M = (0, _.CG)(j) ? C.intl.formatToPlainString(C.t.tZTx2N, { guildName: A.name }) : (0, _.kk)(j) ? C.intl.formatToPlainString(C.t['1bSmxs'], { guildName: A.name }) : C.intl.formatToPlainString(C.t.W87xDA, { guildName: A.name }),
        k = Z && T === E.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(a.Notice, {
        className: I.notice,
        color: a.NoticeColors.WARNING,
        children: [
            (0, i.jsx)(a.NoticeCloseButton, {
                onClick: N,
                noticeType: g.kVF.GUILD_RAID_NOTIFICATION
            }),
            y,
            M,
            !k &&
                (0, i.jsx)(a.NoticeButton, {
                    className: I.actionButton,
                    onClick: () => L(!0),
                    children: (0, i.jsx)('div', {
                        className: I.actionButtonInner,
                        children: (0, i.jsx)('span', { children: C.intl.string(C.t.zDJDho) })
                    })
                })
        ]
    });
}
