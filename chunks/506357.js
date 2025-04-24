n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(565138),
    s = n(241559),
    c = n(527379),
    u = n(430824),
    E = n(944486),
    d = n(914010),
    _ = n(626135),
    I = n(528011),
    O = n(666657),
    T = n(533244),
    N = n(981631),
    S = n(176505),
    R = n(388032),
    A = n(302654);
function p(e) {
    var t, p;
    let { onDismiss: P } = e,
        C = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        D = (0, l.e7)([E.Z], () => (null != C ? E.Z.getChannelId(C) : null), [C]),
        f = null != C ? C : null,
        m = (0, l.e7)([u.Z], () => (null != f ? u.Z.getGuild(f) : null), [f]),
        { shouldShowIncidentActions: g, incidentData: y, isUnderLockdown: U } = (0, I.mI)(f),
        h = (0, s.n2)(null != (t = null == m ? void 0 : m.id) ? t : N.lds),
        b = i.useCallback(() => null != m && (0, c._X)(m.id), [m]);
    if (null == m || null == y || !g) return null;
    let M = (e) => {
            if (e && h && D !== S.oC.MEMBER_SAFETY && b())
                return void _.default.track(N.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: N.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: m.id
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: O.Zu.NAGBAR,
                        alertType: (0, T.T1)(y)
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
        k = (0, r.jsx)(a.Z, {
            className: A.guildIcon,
            guild: m,
            size: a.Z.Sizes.MINI
        }),
        Z = (0, T.OY)(y, m.name);
    if (null != (null != (p = y.dmsDisabledUntil) ? p : y.invitesDisabledUntil) && U)
        return (0, r.jsxs)(o.qXd, {
            className: A.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(o.RyX, {
                    onClick: P,
                    noticeType: N.kVF.GUILD_RAID_NOTIFICATION
                }),
                k,
                Z,
                (0, r.jsx)(o.EyT, {
                    className: A.actionButton,
                    onClick: () => M(!1),
                    children: (0, r.jsxs)('div', {
                        className: A.actionButtonInner,
                        children: [
                            (0, r.jsx)(o.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: R.intl.string(R.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let j = (0, T.CG)(y) ? R.intl.formatToPlainString(R.t.tZTx2N, { guildName: m.name }) : (0, T.kk)(y) ? R.intl.formatToPlainString(R.t['1bSmxs'], { guildName: m.name }) : R.intl.formatToPlainString(R.t.W87xDA, { guildName: m.name }),
        L = h && D === S.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(o.qXd, {
        className: A.notice,
        color: o.DM8.WARNING,
        children: [
            (0, r.jsx)(o.RyX, {
                onClick: P,
                noticeType: N.kVF.GUILD_RAID_NOTIFICATION
            }),
            k,
            j,
            !L &&
                (0, r.jsx)(o.EyT, {
                    className: A.actionButton,
                    onClick: () => M(!0),
                    children: (0, r.jsx)('div', {
                        className: A.actionButtonInner,
                        children: (0, r.jsx)('span', { children: R.intl.string(R.t.zDJDho) })
                    })
                })
        ]
    });
}
