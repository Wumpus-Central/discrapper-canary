n.d(t, { Z: () => S });
var i = n(255367),
    r = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(565138),
    a = n(241559),
    c = n(527379),
    d = n(430824),
    u = n(944486),
    h = n(914010),
    _ = n(626135),
    E = n(528011),
    p = n(666657),
    I = n(533244),
    g = n(981631),
    f = n(176505),
    C = n(388032),
    O = n(302654);
function S(e) {
    var t, S;
    let { onDismiss: T } = e,
        m = (0, l.e7)([h.Z], () => h.Z.getGuildId()),
        N = (0, l.e7)([u.Z], () => (null != m ? u.Z.getChannelId(m) : null), [m]),
        R = null != m ? m : null,
        A = (0, l.e7)([d.Z], () => (null != R ? d.Z.getGuild(R) : null), [R]),
        { shouldShowIncidentActions: y, incidentData: b, isUnderLockdown: P } = (0, E.mI)(R),
        D = (0, a.n2)(null != (t = null == A ? void 0 : A.id) ? t : g.lds),
        v = r.useCallback(() => null != A && (0, c._X)(A.id), [A]);
    if (null == A || null == b || !y) return null;
    let M = (e) => {
            if (e && D && N !== f.oC.MEMBER_SAFETY && v())
                return void _.default.track(g.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: g.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: A.id
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: p.Zu.NAGBAR,
                        alertType: (0, I.T1)(b)
                    },
                    { default: t } = await Promise.all([n.e('58175'), n.e('6584')]).then(n.bind(n, 664452));
                return (n) => {
                    var r, l;
                    return (0, i.jsx)(
                        t,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        ((i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i));
                                    }));
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                guildId: A.id,
                                analyticsData: e
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r)
                    );
                };
            });
        },
        k = (0, i.jsx)(s.Z, {
            className: O.guildIcon,
            guild: A,
            size: s.Z.Sizes.MINI
        }),
        U = (0, I.OY)(b, A.name);
    if (null != (null != (S = b.dmsDisabledUntil) ? S : b.invitesDisabledUntil) && P)
        return (0, i.jsxs)(o.qXd, {
            className: O.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, i.jsx)(o.RyX, {
                    onClick: T,
                    noticeType: g.kVF.GUILD_RAID_NOTIFICATION
                }),
                k,
                U,
                (0, i.jsx)(o.EyT, {
                    className: O.actionButton,
                    onClick: () => M(!1),
                    children: (0, i.jsxs)('div', {
                        className: O.actionButtonInner,
                        children: [
                            (0, i.jsx)(o.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: C.intl.string(C.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let L = (0, I.CG)(b) ? C.intl.formatToPlainString(C.t.tZTx2N, { guildName: A.name }) : (0, I.kk)(b) ? C.intl.formatToPlainString(C.t['1bSmxs'], { guildName: A.name }) : C.intl.formatToPlainString(C.t.W87xDA, { guildName: A.name }),
        j = D && N === f.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(o.qXd, {
        className: O.notice,
        color: o.DM8.WARNING,
        children: [
            (0, i.jsx)(o.RyX, {
                onClick: T,
                noticeType: g.kVF.GUILD_RAID_NOTIFICATION
            }),
            k,
            L,
            !j &&
                (0, i.jsx)(o.EyT, {
                    className: O.actionButton,
                    onClick: () => M(!0),
                    children: (0, i.jsx)('div', {
                        className: O.actionButtonInner,
                        children: (0, i.jsx)('span', { children: C.intl.string(C.t.zDJDho) })
                    })
                })
        ]
    });
}
