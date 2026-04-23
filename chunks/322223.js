"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    l = n(311907);
if (21552 == n.j) var s = n(192308);
if (21552 == n.j) var a = n(417098);
if (21552 == n.j) var o = n(194261);
var c = n(263063),
    u = n(134413),
    d = n(221950),
    _ = n(71393),
    E = n(309010),
    A = n(967198),
    m = n(954571),
    I = n(585510),
    T = n(834409),
    N = n(903093),
    g = n(652215),
    p = n(746080),
    C = n(985018),
    f = n(500928);
function R(e) {
    let { onDismiss: t } = e,
        R = (0, l.bG)([A.A], () => A.A.getGuildId()),
        h = (0, l.bG)([E.A], () => (null != R ? E.A.getChannelId(R) : null), [R]),
        S = R ?? null,
        O = (0, l.bG)([_.A], () => (null != S ? _.A.getGuild(S) : null), [S]),
        { shouldShowIncidentActions: x, incidentData: M, isUnderLockdown: D } = (0, I.Li)(S),
        P = (0, u.fw)(O?.id ?? g.dJq),
        U = r.useCallback(() => null != O && (0, d.aZ)(O.id), [O]);
    if (null == O || null == M || !x) return null;
    let y = (e) => {
            e && P && h !== p.VV.MEMBER_SAFETY && U()
                ? m.default.track(g.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: g.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: O.id,
                  })
                : (0, s.openModalLazy)(async () => {
                      let e = { source: T.Eo.NAGBAR, alertType: (0, N.$5)(M) },
                          { default: t } = await n.e("65614").then(n.bind(n, 671576));
                      return (n) => (0, i.jsx)(t, { ...n, guildId: O.id, analyticsData: e });
                  });
        },
        L = (0, i.jsx)(c.Ay, { className: f.$f, guild: O, size: c.Ay.Sizes.MINI }),
        v = (0, N.ql)(M, O.name);
    if (null != (M.dmsDisabledUntil ?? M.invitesDisabledUntil) && D)
        return (0, i.jsxs)(a.$T, {
            className: f.lm,
            color: a.Hv.NEUTRAL,
            children: [
                (0, i.jsx)(a.PM, { onClick: t, noticeType: g.kqX.GUILD_RAID_NOTIFICATION }),
                L,
                v,
                (0, i.jsx)(a.zr, {
                    className: f.hP,
                    onClick: () => y(!1),
                    children: (0, i.jsxs)("div", {
                        className: f.rx,
                        children: [
                            (0, i.jsx)(o.X, { size: "xs", color: "currentColor" }),
                            (0, i.jsx)("span", { children: C.intl.string(C.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let j = (0, N.P$)(M)
            ? C.intl.formatToPlainString(C.t.tZTx2E, { guildName: O.name })
            : (0, N.Qm)(M)
              ? C.intl.formatToPlainString(C.t["1bSmxr"], { guildName: O.name })
              : C.intl.formatToPlainString(C.t.W87xDE, { guildName: O.name }),
        k = P && h === p.VV.MEMBER_SAFETY;
    return (0, i.jsxs)(a.$T, {
        className: f.lm,
        color: a.Hv.WARNING,
        children: [
            (0, i.jsx)(a.PM, { onClick: t, noticeType: g.kqX.GUILD_RAID_NOTIFICATION }),
            L,
            j,
            !k &&
                (0, i.jsx)(a.zr, {
                    className: f.hP,
                    onClick: () => y(!0),
                    children: (0, i.jsx)("div", {
                        className: f.rx,
                        children: (0, i.jsx)("span", { children: C.intl.string(C.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
