n.d(t, { Z: () => A });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(565138),
    s = n(241559),
    c = n(527379),
    u = n(430824),
    d = n(944486),
    E = n(914010),
    _ = n(626135),
    I = n(528011),
    N = n(666657),
    O = n(533244),
    T = n(981631),
    S = n(176505),
    p = n(388032),
    f = n(302654);
function A(e) {
    var t, A;
    let { onDismiss: R } = e,
        P = (0, l.e7)([E.Z], () => E.Z.getGuildId()),
        C = (0, l.e7)([d.Z], () => (null != P ? d.Z.getChannelId(P) : null), [P]),
        g = null != P ? P : null,
        m = (0, l.e7)([u.Z], () => (null != g ? u.Z.getGuild(g) : null), [g]),
        { shouldShowIncidentActions: D, incidentData: y, isUnderLockdown: h } = (0, I.mI)(g),
        b = (0, s.n2)(null != (t = null == m ? void 0 : m.id) ? t : T.lds),
        U = i.useCallback(() => null != m && (0, c._X)(m.id), [m]);
    if (null == m || null == y || !D) return null;
    let M = (e) => {
            if (e && b && C !== S.oC.MEMBER_SAFETY && U())
                return void _.default.track(T.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: T.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: m.id
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: N.Zu.NAGBAR,
                        alertType: (0, O.T1)(y)
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
                                guildId: m.id,
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
        L = (0, r.jsx)(a.Z, {
            className: f.guildIcon,
            guild: m,
            size: a.Z.Sizes.MINI
        }),
        Z = (0, O.OY)(y, m.name);
    if (null != (null != (A = y.dmsDisabledUntil) ? A : y.invitesDisabledUntil) && h)
        return (0, r.jsxs)(o.qXd, {
            className: f.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(o.RyX, {
                    onClick: R,
                    noticeType: T.kVF.GUILD_RAID_NOTIFICATION
                }),
                L,
                Z,
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
                            (0, r.jsx)('span', { children: p.NW.string(p.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let k = (0, O.CG)(y) ? p.NW.formatToPlainString(p.t.tZTx2N, { guildName: m.name }) : (0, O.kk)(y) ? p.NW.formatToPlainString(p.t['1bSmxs'], { guildName: m.name }) : p.NW.formatToPlainString(p.t.W87xDA, { guildName: m.name }),
        v = b && C === S.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(o.qXd, {
        className: f.notice,
        color: o.DM8.WARNING,
        children: [
            (0, r.jsx)(o.RyX, {
                onClick: R,
                noticeType: T.kVF.GUILD_RAID_NOTIFICATION
            }),
            L,
            k,
            !v &&
                (0, r.jsx)(o.EyT, {
                    className: f.actionButton,
                    onClick: () => M(!0),
                    children: (0, r.jsx)('div', {
                        className: f.actionButtonInner,
                        children: (0, r.jsx)('span', { children: p.NW.string(p.t.zDJDho) })
                    })
                })
        ]
    });
}
