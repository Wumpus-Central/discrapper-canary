n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(263063),
    o = n(134413),
    d = n(221950),
    c = n(71393),
    u = n(309010),
    h = n(967198),
    A = n(954571),
    _ = n(585510),
    m = n(834409),
    g = n(903093),
    p = n(652215),
    f = n(746080),
    x = n(985018),
    E = n(592528);
function I(e) {
    let { onDismiss: t } = e,
        I = (0, s.bG)([h.A], () => h.A.getGuildId()),
        C = (0, s.bG)([u.A], () => (null != I ? u.A.getChannelId(I) : null), [I]),
        N = I ?? null,
        T = (0, s.bG)([c.A], () => (null != N ? c.A.getGuild(N) : null), [N]),
        { shouldShowIncidentActions: S, incidentData: b, isUnderLockdown: v } = (0, _.Li)(N),
        y = (0, o.fw)(T?.id ?? p.dJq),
        j = l.useCallback(() => null != T && (0, d.aZ)(T.id), [T]);
    if (null == T || null == b || !S) return null;
    let R = (e) => {
            e && y && C !== f.VV.MEMBER_SAFETY && j()
                ? A.default.track(p.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: p.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: T.id,
                  })
                : (0, a.mMO)(async () => {
                      let e = { source: m.Eo.NAGBAR, alertType: (0, g.$5)(b) },
                          { default: t } = await n.e("43233").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: T.id, analyticsData: e });
                  });
        },
        O = (0, i.jsx)(r.Ay, { className: E.$f, guild: T, size: r.Ay.Sizes.MINI }),
        L = (0, g.ql)(b, T.name);
    if (null != (b.dmsDisabledUntil ?? b.invitesDisabledUntil) && v)
        return (0, i.jsxs)(a.$Td, {
            className: E.lm,
            color: a.Hv$.NEUTRAL,
            children: [
                (0, i.jsx)(a.PMB, { onClick: t, noticeType: p.kqX.GUILD_RAID_NOTIFICATION }),
                O,
                L,
                (0, i.jsx)(a.zr9, {
                    className: E.hP,
                    onClick: () => R(!1),
                    children: (0, i.jsxs)("div", {
                        className: E.rx,
                        children: [
                            (0, i.jsx)(a.XAi, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: x.intl.string(x.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let M = (0, g.P$)(b)
            ? x.intl.formatToPlainString(x.t.tZTx2E, { guildName: T.name })
            : (0, g.Qm)(b)
              ? x.intl.formatToPlainString(x.t["1bSmxr"], { guildName: T.name })
              : x.intl.formatToPlainString(x.t.W87xDE, { guildName: T.name }),
        D = y && C === f.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(a.$Td, {
        className: E.lm,
        color: a.Hv$.WARNING,
        children: [
            (0, i.jsx)(a.PMB, { onClick: t, noticeType: p.kqX.GUILD_RAID_NOTIFICATION }),
            O,
            M,
            !D &&
                (0, i.jsx)(a.zr9, {
                    className: E.hP,
                    onClick: () => R(!0),
                    children: (0, i.jsx)("div", {
                        className: E.rx,
                        children: (0, i.jsx)("span", { children: x.intl.string(x.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
