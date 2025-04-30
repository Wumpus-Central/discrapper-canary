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
    O = n(528011),
    I = n(666657),
    T = n(533244),
    N = n(981631),
    S = n(176505),
    p = n(388032),
    R = n(302654);
function A(e) {
    var t, A;
    let { onDismiss: f } = e,
        P = (0, l.e7)([E.Z], () => E.Z.getGuildId()),
        C = (0, l.e7)([d.Z], () => (null != P ? d.Z.getChannelId(P) : null), [P]),
        D = null != P ? P : null,
        g = (0, l.e7)([u.Z], () => (null != D ? u.Z.getGuild(D) : null), [D]),
        { shouldShowIncidentActions: y, incidentData: m, isUnderLockdown: h } = (0, O.mI)(D),
        b = (0, s.n2)(null != (t = null == g ? void 0 : g.id) ? t : N.lds),
        U = i.useCallback(() => null != g && (0, c._X)(g.id), [g]);
    if (null == g || null == m || !y) return null;
    let M = (e) => {
            if (e && b && C !== S.oC.MEMBER_SAFETY && U())
                return void _.default.track(N.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: N.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: g.id
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: I.Zu.NAGBAR,
                        alertType: (0, T.T1)(m)
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
                                guildId: g.id,
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
        Z = (0, r.jsx)(a.Z, {
            className: R.guildIcon,
            guild: g,
            size: a.Z.Sizes.MINI
        }),
        L = (0, T.OY)(m, g.name);
    if (null != (null != (A = m.dmsDisabledUntil) ? A : m.invitesDisabledUntil) && h)
        return (0, r.jsxs)(o.qXd, {
            className: R.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(o.RyX, {
                    onClick: f,
                    noticeType: N.kVF.GUILD_RAID_NOTIFICATION
                }),
                Z,
                L,
                (0, r.jsx)(o.EyT, {
                    className: R.actionButton,
                    onClick: () => M(!1),
                    children: (0, r.jsxs)('div', {
                        className: R.actionButtonInner,
                        children: [
                            (0, r.jsx)(o.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: p.intl.string(p.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let v = (0, T.CG)(m) ? p.intl.formatToPlainString(p.t.tZTx2N, { guildName: g.name }) : (0, T.kk)(m) ? p.intl.formatToPlainString(p.t['1bSmxs'], { guildName: g.name }) : p.intl.formatToPlainString(p.t.W87xDA, { guildName: g.name }),
        k = b && C === S.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(o.qXd, {
        className: R.notice,
        color: o.DM8.WARNING,
        children: [
            (0, r.jsx)(o.RyX, {
                onClick: f,
                noticeType: N.kVF.GUILD_RAID_NOTIFICATION
            }),
            Z,
            v,
            !k &&
                (0, r.jsx)(o.EyT, {
                    className: R.actionButton,
                    onClick: () => M(!0),
                    children: (0, r.jsx)('div', {
                        className: R.actionButtonInner,
                        children: (0, r.jsx)('span', { children: p.intl.string(p.t.zDJDho) })
                    })
                })
        ]
    });
}
