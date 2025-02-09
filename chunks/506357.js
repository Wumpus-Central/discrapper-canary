n.d(t, { Z: () => O });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(565138),
    o = n(241559),
    c = n(527379),
    u = n(430824),
    E = n(944486),
    d = n(914010),
    _ = n(626135),
    I = n(528011),
    T = n(666657),
    N = n(533244),
    A = n(981631),
    S = n(176505),
    R = n(388032),
    C = n(118181);
function O(e) {
    var t, O;
    let { onDismiss: P } = e,
        D = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        m = (0, r.e7)([E.Z], () => (null != D ? E.Z.getChannelId(D) : null), [D]),
        p = null != D ? D : null,
        h = (0, r.e7)([u.Z], () => (null != p ? u.Z.getGuild(p) : null), [p]),
        { shouldShowIncidentActions: U, incidentData: M, isUnderLockdown: g } = (0, I.mI)(p),
        k = (0, o.n2)(null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : A.lds),
        Z = l.useCallback(() => null != h && (0, c._X)(h.id), [h]);
    if (null == h || null == M || !U) return null;
    let f = (e) => {
            if (e && k && m !== S.oC.MEMBER_SAFETY && Z()) {
                _.default.track(A.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: A.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: h.id
                });
                return;
            }
            (0, a.ZDy)(async () => {
                let e = {
                        source: T.Zu.NAGBAR,
                        alertType: (0, N.T1)(M)
                    },
                    { default: t } = await n.e('58175').then(n.bind(n, 664452));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: h.id,
                        analyticsData: e
                    });
            });
        },
        L = (0, i.jsx)(s.Z, {
            className: C.guildIcon,
            guild: h,
            size: s.Z.Sizes.MINI
        }),
        V = (0, N.OY)(M, h.name);
    if (null != (null !== (O = M.dmsDisabledUntil) && void 0 !== O ? O : M.invitesDisabledUntil) && g)
        return (0, i.jsxs)(a.qXd, {
            className: C.notice,
            color: a.DM8.NEUTRAL,
            children: [
                (0, i.jsx)(a.RyX, {
                    onClick: P,
                    noticeType: A.kVF.GUILD_RAID_NOTIFICATION
                }),
                L,
                V,
                (0, i.jsx)(a.EyT, {
                    className: C.actionButton,
                    onClick: () => f(!1),
                    children: (0, i.jsxs)('div', {
                        className: C.actionButtonInner,
                        children: [
                            (0, i.jsx)(a.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: R.intl.string(R.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let F = (0, N.CG)(M) ? R.intl.formatToPlainString(R.t.tZTx2N, { guildName: h.name }) : (0, N.kk)(M) ? R.intl.formatToPlainString(R.t['1bSmxs'], { guildName: h.name }) : R.intl.formatToPlainString(R.t.W87xDA, { guildName: h.name }),
        x = k && m === S.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(a.qXd, {
        className: C.notice,
        color: a.DM8.WARNING,
        children: [
            (0, i.jsx)(a.RyX, {
                onClick: P,
                noticeType: A.kVF.GUILD_RAID_NOTIFICATION
            }),
            L,
            F,
            !x &&
                (0, i.jsx)(a.EyT, {
                    className: C.actionButton,
                    onClick: () => f(!0),
                    children: (0, i.jsx)('div', {
                        className: C.actionButtonInner,
                        children: (0, i.jsx)('span', { children: R.intl.string(R.t.zDJDho) })
                    })
                })
        ]
    });
}
