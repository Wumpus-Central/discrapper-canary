n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(565138),
    l = n(241559),
    c = n(527379),
    u = n(430824),
    d = n(944486),
    f = n(914010),
    _ = n(626135),
    p = n(528011),
    h = n(666657),
    m = n(533244),
    g = n(981631),
    E = n(176505),
    b = n(388032),
    y = n(444470);
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
function v(e) {
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    var t, O;
    let { onDismiss: I } = e,
        S = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        A = (0, o.e7)([d.Z], () => (null != S ? d.Z.getChannelId(S) : null), [S]),
        N = null != S ? S : null,
        C = (0, o.e7)([u.Z], () => (null != N ? u.Z.getGuild(N) : null), [N]),
        { shouldShowIncidentActions: R, incidentData: P, isUnderLockdown: w } = (0, p.mI)(N),
        D = (0, l.n2)(null != (t = null == C ? void 0 : C.id) ? t : g.lds),
        L = i.useCallback(() => null != C && (0, c._X)(C.id), [C]);
    if (null == C || null == P || !R) return null;
    let x = (e) => {
            if (e && D && A !== E.oC.MEMBER_SAFETY && L())
                return void _.default.track(g.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: g.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: C.id,
                });
            (0, a.ZDy)(async () => {
                let e = {
                        source: h.Zu.NAGBAR,
                        alertType: (0, m.T1)(P),
                    },
                    { default: t } = await Promise.all([n.e("58175"), n.e("74662")]).then(n.bind(n, 664452));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        T(v({}, n), {
                            guildId: C.id,
                            analyticsData: e,
                        }),
                    );
            });
        },
        M = (0, r.jsx)(s.Z, {
            className: y.guildIcon,
            guild: C,
            size: s.Z.Sizes.MINI,
        }),
        k = (0, m.OY)(P, C.name);
    if (null != (null != (O = P.dmsDisabledUntil) ? O : P.invitesDisabledUntil) && w)
        return (0, r.jsxs)(a.qXd, {
            className: y.notice,
            color: a.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(a.RyX, {
                    onClick: I,
                    noticeType: g.kVF.GUILD_RAID_NOTIFICATION,
                }),
                M,
                k,
                (0, r.jsx)(a.EyT, {
                    className: y.actionButton,
                    onClick: () => x(!1),
                    children: (0, r.jsxs)("div", {
                        className: y.actionButtonInner,
                        children: [
                            (0, r.jsx)(a.mBM, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)("span", { children: b.intl.string(b.t["c+7oa2"]) }),
                        ],
                    }),
                }),
            ],
        });
    let j = (0, m.CG)(P)
            ? b.intl.formatToPlainString(b.t.tZTx2N, { guildName: C.name })
            : (0, m.kk)(P)
              ? b.intl.formatToPlainString(b.t["1bSmxs"], { guildName: C.name })
              : b.intl.formatToPlainString(b.t.W87xDA, { guildName: C.name }),
        U = D && A === E.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(a.qXd, {
        className: y.notice,
        color: a.DM8.WARNING,
        children: [
            (0, r.jsx)(a.RyX, {
                onClick: I,
                noticeType: g.kVF.GUILD_RAID_NOTIFICATION,
            }),
            M,
            j,
            !U &&
                (0, r.jsx)(a.EyT, {
                    className: y.actionButton,
                    onClick: () => x(!0),
                    children: (0, r.jsx)("div", {
                        className: y.actionButtonInner,
                        children: (0, r.jsx)("span", { children: b.intl.string(b.t.zDJDho) }),
                    }),
                }),
        ],
    });
}
