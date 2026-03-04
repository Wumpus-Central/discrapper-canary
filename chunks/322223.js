n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(397927),
    s = n(263063),
    o = n(134413),
    c = n(221950),
    _ = n(71393),
    E = n(309010),
    d = n(967198),
    u = n(954571),
    A = n(585510),
    T = n(834409),
    I = n(903093),
    N = n(652215),
    R = n(746080),
    S = n(985018),
    C = n(858411);
function O(e) {
    let { onDismiss: t } = e,
        O = (0, r.bG)([d.A], () => d.A.getGuildId()),
        p = (0, r.bG)([E.A], () => (null != O ? E.A.getChannelId(O) : null), [O]),
        m = O ?? null,
        P = (0, r.bG)([_.A], () => (null != m ? _.A.getGuild(m) : null), [m]),
        { shouldShowIncidentActions: D, incidentData: g, isUnderLockdown: U } = (0, A.Li)(m),
        M = (0, o.fw)(P?.id ?? N.dJq),
        h = l.useCallback(() => null != P && (0, c.aZ)(P.id), [P]);
    if (null == P || null == g || !D) return null;
    let y = (e) => {
            e && M && p !== R.VV.MEMBER_SAFETY && h()
                ? u.default.track(N.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: N.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: P.id,
                  })
                : (0, a.mMO)(async () => {
                      let e = { source: T.Eo.NAGBAR, alertType: (0, I.$5)(g) },
                          { default: t } = await n.e("43233").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: P.id, analyticsData: e });
                  });
        },
        f = (0, i.jsx)(s.Ay, { className: C.$f, guild: P, size: s.Ay.Sizes.MINI }),
        L = (0, I.ql)(g, P.name);
    if (null != (g.dmsDisabledUntil ?? g.invitesDisabledUntil) && U)
        return (0, i.jsxs)(a.$Td, {
            className: C.lm,
            color: a.Hv$.NEUTRAL,
            children: [
                (0, i.jsx)(a.PMB, { onClick: t, noticeType: N.kqX.GUILD_RAID_NOTIFICATION }),
                f,
                L,
                (0, i.jsx)(a.zr9, {
                    className: C.hP,
                    onClick: () => y(!1),
                    children: (0, i.jsxs)("div", {
                        className: C.rx,
                        children: [
                            (0, i.jsx)(a.XAi, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: S.intl.string(S.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let k = (0, I.P$)(g)
            ? S.intl.formatToPlainString(S.t.tZTx2E, { guildName: P.name })
            : (0, I.Qm)(g)
              ? S.intl.formatToPlainString(S.t["1bSmxr"], { guildName: P.name })
              : S.intl.formatToPlainString(S.t.W87xDE, { guildName: P.name }),
        x = M && p === R.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(a.$Td, {
        className: C.lm,
        color: a.Hv$.WARNING,
        children: [
            (0, i.jsx)(a.PMB, { onClick: t, noticeType: N.kqX.GUILD_RAID_NOTIFICATION }),
            f,
            k,
            !x &&
                (0, i.jsx)(a.zr9, {
                    className: C.hP,
                    onClick: () => y(!0),
                    children: (0, i.jsx)("div", {
                        className: C.rx,
                        children: (0, i.jsx)("span", { children: S.intl.string(S.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
