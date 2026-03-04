"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    l = n(311907),
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
        C = (0, l.bG)([d.A], () => d.A.getGuildId()),
        p = (0, l.bG)([_.A], () => (null != C ? _.A.getChannelId(C) : null), [C]),
        P = C ?? null,
        D = (0, l.bG)([c.A], () => (null != P ? c.A.getGuild(P) : null), [P]),
        { shouldShowIncidentActions: M, incidentData: g, isUnderLockdown: U } = (0, u.Li)(P),
        m = (0, o.fw)(D?.id ?? N.dJq),
        h = r.useCallback(() => null != D && (0, E.aZ)(D.id), [D]);
    if (null == D || null == g || !M) return null;
    let y = (e) => {
            e && m && p !== R.VV.MEMBER_SAFETY && h()
                ? A.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: N.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: D.id,
                  })
                : (0, s.mMO)(async () => {
                      let e = { source: T.Eo.NAGBAR, alertType: (0, I.$5)(g) },
                          { default: t } = await n.e("43233").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: D.id, analyticsData: e });
                  });
        },
        f = (0, i.jsx)(a.Ay, { className: O.$f, guild: D, size: a.Ay.Sizes.MINI }),
        k = (0, I.ql)(g, D.name);
    if (null != (g.dmsDisabledUntil ?? g.invitesDisabledUntil) && U)
        return (0, i.jsxs)(s.$Td, {
            className: O.lm,
            color: s.Hv$.NEUTRAL,
            children: [
                (0, i.jsx)(s.PMB, { onClick: t, noticeType: N.kqX.GUILD_RAID_NOTIFICATION }),
                f,
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
    let L = (0, I.P$)(g)
            ? S.intl.formatToPlainString(S.t.tZTx2E, { guildName: D.name })
            : (0, I.Qm)(g)
              ? S.intl.formatToPlainString(S.t["1bSmxr"], { guildName: D.name })
              : S.intl.formatToPlainString(S.t.W87xDE, { guildName: D.name }),
        x = m && p === R.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(s.$Td, {
        className: O.lm,
        color: s.Hv$.WARNING,
        children: [
            (0, i.jsx)(s.PMB, { onClick: t, noticeType: N.kqX.GUILD_RAID_NOTIFICATION }),
            f,
            L,
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
