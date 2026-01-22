n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(263063),
    l = n(134413),
    c = n(221950),
    u = n(71393),
    d = n(309010),
    f = n(967198),
    p = n(954571),
    _ = n(585510),
    h = n(834409),
    m = n(903093),
    g = n(652215),
    E = n(746080),
    b = n(985018),
    y = n(858411);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    var t, O;
    let { onDismiss: v } = e,
        I = (0, a.bG)([f.A], () => f.A.getGuildId()),
        T = (0, a.bG)([d.A], () => (null != I ? d.A.getChannelId(I) : null), [I]),
        C = null != I ? I : null,
        N = (0, a.bG)([u.A], () => (null != C ? u.A.getGuild(C) : null), [C]),
        { shouldShowIncidentActions: R, incidentData: w, isUnderLockdown: P } = (0, _.Li)(C),
        D = (0, l.fw)(null != (t = null == N ? void 0 : N.id) ? t : g.dJq),
        x = i.useCallback(() => null != N && (0, c.aZ)(N.id), [N]);
    if (null == N || null == w || !R) return null;
    let L = (e) => {
            e && D && T !== E.VV.MEMBER_SAFETY && x()
                ? p.default.track(g.HAw.APP_NOTICE_PRIMARY_CTA_OPENED, {
                      notice_type: g.kqX.GUILD_RAID_NOTIFICATION,
                      guild_id: N.id,
                  })
                : (0, s.mMO)(async () => {
                      let e = {
                              source: h.Eo.NAGBAR,
                              alertType: (0, m.$5)(w),
                          },
                          { default: t } = await n.e("43233").then(n.bind(n, 671576));
                      return (n) =>
                          (0, r.jsx)(
                              t,
                              S(A({}, n), {
                                  guildId: N.id,
                                  analyticsData: e,
                              }),
                          );
                  });
        },
        j = (0, r.jsx)(o.A, {
            className: y.$f,
            guild: N,
            size: o.A.Sizes.MINI,
        }),
        M = (0, m.ql)(w, N.name);
    if (null != (null != (O = w.dmsDisabledUntil) ? O : w.invitesDisabledUntil) && P)
        return (0, r.jsxs)(s.$Td, {
            className: y.lm,
            color: s.Hv$.NEUTRAL,
            children: [
                (0, r.jsx)(s.PMB, {
                    onClick: v,
                    noticeType: g.kqX.GUILD_RAID_NOTIFICATION,
                }),
                j,
                M,
                (0, r.jsx)(s.zr9, {
                    className: y.hP,
                    onClick: () => L(!1),
                    children: (0, r.jsxs)("div", {
                        className: y.rx,
                        children: [
                            (0, r.jsx)(s.XAi, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)("span", { children: b.intl.string(b.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let k = (0, m.P$)(w)
            ? b.intl.formatToPlainString(b.t.tZTx2E, { guildName: N.name })
            : (0, m.Qm)(w)
              ? b.intl.formatToPlainString(b.t["1bSmxr"], { guildName: N.name })
              : b.intl.formatToPlainString(b.t.W87xDE, { guildName: N.name }),
        U = D && T === E.VV.MEMBER_SAFETY;
    return (0, r.jsxs)(s.$Td, {
        className: y.lm,
        color: s.Hv$.WARNING,
        children: [
            (0, r.jsx)(s.PMB, {
                onClick: v,
                noticeType: g.kqX.GUILD_RAID_NOTIFICATION,
            }),
            j,
            k,
            !U &&
                (0, r.jsx)(s.zr9, {
                    className: y.hP,
                    onClick: () => L(!0),
                    children: (0, r.jsx)("div", {
                        className: y.rx,
                        children: (0, r.jsx)("span", { children: b.intl.string(b.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
