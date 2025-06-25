n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(565138),
    c = n(241559),
    s = n(527379),
    u = n(430824),
    d = n(944486),
    _ = n(914010),
    E = n(626135),
    I = n(528011),
    O = n(666657),
    T = n(533244),
    p = n(981631),
    N = n(176505),
    S = n(388032),
    f = n(302654);
function m(e) {
    var t, m;
    let { onDismiss: A } = e,
        R = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
        g = (0, l.e7)([d.Z], () => (null != R ? d.Z.getChannelId(R) : null), [R]),
        P = null != R ? R : null,
        C = (0, l.e7)([u.Z], () => (null != P ? u.Z.getGuild(P) : null), [P]),
        { shouldShowIncidentActions: y, incidentData: b, isUnderLockdown: D } = (0, I.mI)(P),
        h = (0, c.n2)(null != (t = null == C ? void 0 : C.id) ? t : p.lds),
        U = i.useCallback(() => null != C && (0, s._X)(C.id), [C]);
    if (null == C || null == b || !y) return null;
    let M = (e) => {
            if (e && h && g !== N.oC.MEMBER_SAFETY && U())
                return void E.default.track(p.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: p.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: C.id
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: O.Zu.NAGBAR,
                        alertType: (0, T.T1)(b)
                    },
                    { default: t } = await n.e('58175').then(n.bind(n, 664452));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        t,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                guildId: C.id,
                                analyticsData: e
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
                        i)
                    );
                };
            });
        },
        v = (0, r.jsx)(a.Z, {
            className: f.guildIcon,
            guild: C,
            size: a.Z.Sizes.MINI
        }),
        k = (0, T.OY)(b, C.name);
    if (null != (null != (m = b.dmsDisabledUntil) ? m : b.invitesDisabledUntil) && D)
        return (0, r.jsxs)(o.qXd, {
            className: f.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(o.RyX, {
                    onClick: A,
                    noticeType: p.kVF.GUILD_RAID_NOTIFICATION
                }),
                v,
                k,
                (0, r.jsx)(o.EyT, {
                    className: f.actionButton,
                    onClick: () => M(!1),
                    children: (0, r.jsxs)('div', {
                        className: f.actionButtonInner,
                        children: [
                            (0, r.jsx)(o.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: S.intl.string(S.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let L = (0, T.CG)(b) ? S.intl.formatToPlainString(S.t.tZTx2N, { guildName: C.name }) : (0, T.kk)(b) ? S.intl.formatToPlainString(S.t['1bSmxs'], { guildName: C.name }) : S.intl.formatToPlainString(S.t.W87xDA, { guildName: C.name }),
        Z = h && g === N.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(o.qXd, {
        className: f.notice,
        color: o.DM8.WARNING,
        children: [
            (0, r.jsx)(o.RyX, {
                onClick: A,
                noticeType: p.kVF.GUILD_RAID_NOTIFICATION
            }),
            v,
            L,
            !Z &&
                (0, r.jsx)(o.EyT, {
                    className: f.actionButton,
                    onClick: () => M(!0),
                    children: (0, r.jsx)('div', {
                        className: f.actionButtonInner,
                        children: (0, r.jsx)('span', { children: S.intl.string(S.t.zDJDho) })
                    })
                })
        ]
    });
}
