n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(565138),
    c = n(241559),
    s = n(527379),
    u = n(430824),
    d = n(944486),
    _ = n(914010),
    E = n(626135),
    I = n(528011),
    T = n(666657),
    O = n(533244),
    p = n(981631),
    N = n(176505),
    f = n(388032),
    S = n(752338);
function m(e) {
    var t, m;
    let { onDismiss: R } = e,
        A = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
        g = (0, l.e7)([d.Z], () => (null != A ? d.Z.getChannelId(A) : null), [A]),
        P = null != A ? A : null,
        C = (0, l.e7)([u.Z], () => (null != P ? u.Z.getGuild(P) : null), [P]),
        { shouldShowIncidentActions: D, incidentData: y, isUnderLockdown: h } = (0, I.mI)(P),
        b = (0, c.n2)(null != (t = null == C ? void 0 : C.id) ? t : p.lds),
        U = i.useCallback(() => null != C && (0, s._X)(C.id), [C]);
    if (null == C || null == y || !D) return null;
    let M = (e) => {
            if (e && b && g !== N.oC.MEMBER_SAFETY && U())
                return void E.default.track(p.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: p.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: C.id,
                });
            (0, a.ZDy)(async () => {
                let e = {
                        source: T.Zu.NAGBAR,
                        alertType: (0, O.T1)(y),
                    },
                    { default: t } = await Promise.all([n.e("58175"), n.e("54255")]).then(n.bind(n, 664452));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        t,
                        ((i = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                guildId: C.id,
                                analyticsData: e,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            });
        },
        v = (0, r.jsx)(o.Z, {
            className: S.guildIcon,
            guild: C,
            size: o.Z.Sizes.MINI,
        }),
        Z = (0, O.OY)(y, C.name);
    if (null != (null != (m = y.dmsDisabledUntil) ? m : y.invitesDisabledUntil) && h)
        return (0, r.jsxs)(a.qXd, {
            className: S.notice,
            color: a.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(a.RyX, {
                    onClick: R,
                    noticeType: p.kVF.GUILD_RAID_NOTIFICATION,
                }),
                v,
                Z,
                (0, r.jsx)(a.EyT, {
                    className: S.actionButton,
                    onClick: () => M(!1),
                    children: (0, r.jsxs)("div", {
                        className: S.actionButtonInner,
                        children: [
                            (0, r.jsx)(a.mBM, {
                                size: "xs",
                                color: "currentColor",
                            }),
                            (0, r.jsx)("span", { children: f.intl.string(f.t["c+7oa2"]) }),
                        ],
                    }),
                }),
            ],
        });
    let L = (0, O.CG)(y)
            ? f.intl.formatToPlainString(f.t.tZTx2N, { guildName: C.name })
            : (0, O.kk)(y)
              ? f.intl.formatToPlainString(f.t["1bSmxs"], { guildName: C.name })
              : f.intl.formatToPlainString(f.t.W87xDA, { guildName: C.name }),
        k = b && g === N.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(a.qXd, {
        className: S.notice,
        color: a.DM8.WARNING,
        children: [
            (0, r.jsx)(a.RyX, {
                onClick: R,
                noticeType: p.kVF.GUILD_RAID_NOTIFICATION,
            }),
            v,
            L,
            !k &&
                (0, r.jsx)(a.EyT, {
                    className: S.actionButton,
                    onClick: () => M(!0),
                    children: (0, r.jsx)("div", {
                        className: S.actionButtonInner,
                        children: (0, r.jsx)("span", { children: f.intl.string(f.t.zDJDho) }),
                    }),
                }),
        ],
    });
}
