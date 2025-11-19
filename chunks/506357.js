n.d(t, { Z: () => S });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
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
    y = n(752338);
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
        S = (0, a.e7)([f.Z], () => f.Z.getGuildId()),
        A = (0, a.e7)([d.Z], () => (null != S ? d.Z.getChannelId(S) : null), [S]),
        C = null != S ? S : null,
        N = (0, a.e7)([u.Z], () => (null != C ? u.Z.getGuild(C) : null), [C]),
        { shouldShowIncidentActions: R, incidentData: P, isUnderLockdown: D } = (0, p.mI)(C),
        w = (0, l.n2)(null != (t = null == N ? void 0 : N.id) ? t : g.lds),
        L = i.useCallback(() => null != N && (0, c._X)(N.id), [N]);
    if (null == N || null == P || !R) return null;
    let x = (e) => {
            if (e && w && A !== E.oC.MEMBER_SAFETY && L())
                return void _.default.track(g.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: g.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: N.id,
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: h.Zu.NAGBAR,
                        alertType: (0, m.T1)(P),
                    },
                    { default: t } = await n.e("58175").then(n.bind(n, 664452));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        T(v({}, n), {
                            guildId: N.id,
                            analyticsData: e,
                        }),
                    );
            });
        },
        M = (0, r.jsx)(s.Z, {
            className: y.guildIcon,
            guild: N,
            size: s.Z.Sizes.MINI,
        }),
        k = (0, m.OY)(P, N.name);
    if (null != (null != (O = P.dmsDisabledUntil) ? O : P.invitesDisabledUntil) && D)
        return (0, r.jsxs)(o.qXd, {
            className: y.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(o.RyX, {
                    onClick: I,
                    noticeType: g.kVF.GUILD_RAID_NOTIFICATION,
                }),
                M,
                k,
                (0, r.jsx)(o.EyT, {
                    className: y.actionButton,
                    onClick: () => x(!1),
                    children: (0, r.jsxs)("div", {
                        className: y.actionButtonInner,
                        children: [
                            (0, r.jsx)(o.mBM, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)("span", { children: b.intl.string(b.t["c+7oa7"]) }),
                        ],
                    }),
                }),
            ],
        });
    let j = (0, m.CG)(P)
            ? b.intl.formatToPlainString(b.t.tZTx2E, { guildName: N.name })
            : (0, m.kk)(P)
              ? b.intl.formatToPlainString(b.t["1bSmxr"], { guildName: N.name })
              : b.intl.formatToPlainString(b.t.W87xDE, { guildName: N.name }),
        U = w && A === E.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(o.qXd, {
        className: y.notice,
        color: o.DM8.WARNING,
        children: [
            (0, r.jsx)(o.RyX, {
                onClick: I,
                noticeType: g.kVF.GUILD_RAID_NOTIFICATION,
            }),
            M,
            j,
            !U &&
                (0, r.jsx)(o.EyT, {
                    className: y.actionButton,
                    onClick: () => x(!0),
                    children: (0, r.jsx)("div", {
                        className: y.actionButtonInner,
                        children: (0, r.jsx)("span", { children: b.intl.string(b.t.zDJDhr) }),
                    }),
                }),
        ],
    });
}
