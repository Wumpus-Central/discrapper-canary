n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(263063),
    o = n(134413),
    E = n(221950),
    c = n(71393),
    _ = n(309010),
    d = n(967198),
    A = n(954571),
    u = n(585510),
    T = n(834409),
    I = n(903093),
    N = n(652215),
    R = n(746080),
    S = n(985018),
    O = n(858411);
function C(e) {
    let { onDismiss: t } = e,
        C = (0, r.bG)([d.A], () => d.A.getGuildId()),
        P = (0, r.bG)([_.A], () => (null != C ? _.A.getChannelId(C) : null), [C]),
        D = C ?? null,
        p = (0, r.bG)([c.A], () => (null != D ? c.A.getGuild(D) : null), [D]),
        { shouldShowIncidentActions: m, incidentData: U, isUnderLockdown: M } = (0, u.Li)(D),
        h = (0, o.fw)(p?.id ?? N.dJq),
        g = l.useCallback(() => null != p && (0, E.aZ)(p.id), [p]);
    if (null == p || null == U || !m) return null;
    let y = (e) => {
            e && h && P !== R.VV.MEMBER_SAFETY && g()
                ? A.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: N.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: p.id,
                  })
                : (0, s.mMO)(async () => {
                      let e = { source: T.Eo.NAGBAR, alertType: (0, I.$5)(U) },
                          { default: t } = await n.e("43233").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: p.id, analyticsData: e });
                  });
        },
        L = (0, i.jsx)(a.A, { className: O.$f, guild: p, size: a.A.Sizes.MINI }),
        k = (0, I.ql)(U, p.name);
    if (null != (U.dmsDisabledUntil ?? U.invitesDisabledUntil) && M)
        return (0, i.jsxs)(s.$Td, {
            className: O.lm,
            color: s.Hv$.NEUTRAL,
            children: [
                (0, i.jsx)(s.PMB, { onClick: t, noticeType: N.kqX.GUILD_RAID_NOTIFICATION }),
                L,
                k,
                (0, i.jsx)(s.zr9, {
                    className: O.hP,
                    onClick: () => y(!1),
                    children: (0, i.jsxs)("div", {
                        className: O.rx,
                        children: [
                            (0, i.jsx)(s.XAi, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: S.intl.string(S.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let f = (0, I.P$)(U)
            ? S.intl.formatToPlainString(S.t.tZTx2E, { guildName: p.name })
            : (0, I.Qm)(U)
              ? S.intl.formatToPlainString(S.t["1bSmxr"], { guildName: p.name })
              : S.intl.formatToPlainString(S.t.W87xDE, { guildName: p.name }),
        x = h && P === R.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(s.$Td, {
        className: O.lm,
        color: s.Hv$.WARNING,
        children: [
            (0, i.jsx)(s.PMB, { onClick: t, noticeType: N.kqX.GUILD_RAID_NOTIFICATION }),
            L,
            f,
            !x &&
                (0, i.jsx)(s.zr9, {
                    className: O.hP,
                    onClick: () => y(!0),
                    children: (0, i.jsx)("div", {
                        className: O.rx,
                        children: (0, i.jsx)("span", { children: S.intl.string(S.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
