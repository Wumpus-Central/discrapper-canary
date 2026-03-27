n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(263063),
    o = n(134413),
    c = n(221950),
    u = n(71393),
    d = n(309010),
    _ = n(967198),
    E = n(954571),
    T = n(585510),
    A = n(834409),
    I = n(903093),
    p = n(652215),
    N = n(746080),
    m = n(985018),
    R = n(95473);
function h(e) {
    let { onDismiss: t } = e,
        h = (0, r.bG)([_.A], () => _.A.getGuildId()),
        S = (0, r.bG)([d.A], () => (null != h ? d.A.getChannelId(h) : null), [h]),
        g = h ?? null,
        C = (0, r.bG)([u.A], () => (null != g ? u.A.getGuild(g) : null), [g]),
        { shouldShowIncidentActions: O, incidentData: y, isUnderLockdown: x } = (0, T.Li)(g),
        f = (0, o.fw)(C?.id ?? p.dJq),
        P = l.useCallback(() => null != C && (0, c.aZ)(C.id), [C]);
    if (null == C || null == y || !O) return null;
    let D = (e) => {
            e && f && S !== N.VV.MEMBER_SAFETY && P()
                ? E.default.track(p.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: p.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: C.id,
                  })
                : (0, s.mMO)(async () => {
                      let e = { source: A.Eo.NAGBAR, alertType: (0, I.$5)(y) },
                          { default: t } = await n.e("43233").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: C.id, analyticsData: e });
                  });
        },
        U = (0, i.jsx)(a.Ay, { className: R.$f, guild: C, size: a.Ay.Sizes.MINI }),
        M = (0, I.ql)(y, C.name);
    if (null != (y.dmsDisabledUntil ?? y.invitesDisabledUntil) && x)
        return (0, i.jsxs)(s.$Td, {
            className: R.lm,
            color: s.Hv$.NEUTRAL,
            children: [
                (0, i.jsx)(s.PMB, { onClick: t, noticeType: p.kqX.GUILD_RAID_NOTIFICATION }),
                U,
                M,
                (0, i.jsx)(s.zr9, {
                    className: R.hP,
                    onClick: () => D(!1),
                    children: (0, i.jsxs)("div", {
                        className: R.rx,
                        children: [
                            (0, i.jsx)(s.XAi, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: m.intl.string(m.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let L = (0, I.P$)(y)
            ? m.intl.formatToPlainString(m.t.tZTx2E, { guildName: C.name })
            : (0, I.Qm)(y)
              ? m.intl.formatToPlainString(m.t["1bSmxr"], { guildName: C.name })
              : m.intl.formatToPlainString(m.t.W87xDE, { guildName: C.name }),
        j = f && S === N.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(s.$Td, {
        className: R.lm,
        color: s.Hv$.WARNING,
        children: [
            (0, i.jsx)(s.PMB, { onClick: t, noticeType: p.kqX.GUILD_RAID_NOTIFICATION }),
            U,
            L,
            !j &&
                (0, i.jsx)(s.zr9, {
                    className: R.hP,
                    onClick: () => D(!0),
                    children: (0, i.jsx)("div", {
                        className: R.rx,
                        children: (0, i.jsx)("span", { children: m.intl.string(m.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
