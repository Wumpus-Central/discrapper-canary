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
    _ = n(914010),
    E = n(626135),
    h = n(528011),
    I = n(666657),
    p = n(533244),
    C = n(981631),
    T = n(176505),
    g = n(388032),
    O = n(302654);
function S(e) {
    var t, S;
    let { onDismiss: N } = e,
        f = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
        A = (0, l.e7)([u.Z], () => (null != f ? u.Z.getChannelId(f) : null), [f]),
        R = null != f ? f : null,
        m = (0, l.e7)([d.Z], () => (null != R ? d.Z.getGuild(R) : null), [R]),
        { shouldShowIncidentActions: P, incidentData: y, isUnderLockdown: b } = (0, h.mI)(R),
        D = (0, a.n2)(null != (t = null == m ? void 0 : m.id) ? t : C.lds),
        v = r.useCallback(() => null != m && (0, c._X)(m.id), [m]);
    if (null == m || null == y || !P) return null;
    let U = (e) => {
            if (e && D && A !== T.oC.MEMBER_SAFETY && v())
                return void E.default.track(C.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: C.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: m.id
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: I.Zu.NAGBAR,
                        alertType: (0, p.T1)(y)
                    },
                    { default: t } = await n.e('58175').then(n.bind(n, 664452));
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
                                guildId: m.id,
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
        M = (0, i.jsx)(s.Z, {
            className: O.guildIcon,
            guild: m,
            size: s.Z.Sizes.MINI
        }),
        L = (0, p.OY)(y, m.name);
    if (null != (null != (S = y.dmsDisabledUntil) ? S : y.invitesDisabledUntil) && b)
        return (0, i.jsxs)(o.qXd, {
            className: O.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, i.jsx)(o.RyX, {
                    onClick: N,
                    noticeType: C.kVF.GUILD_RAID_NOTIFICATION
                }),
                M,
                L,
                (0, i.jsx)(o.EyT, {
                    className: O.actionButton,
                    onClick: () => U(!1),
                    children: (0, i.jsxs)('div', {
                        className: O.actionButtonInner,
                        children: [
                            (0, i.jsx)(o.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: g.intl.string(g.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let k = (0, p.CG)(y) ? g.intl.formatToPlainString(g.t.tZTx2N, { guildName: m.name }) : (0, p.kk)(y) ? g.intl.formatToPlainString(g.t['1bSmxs'], { guildName: m.name }) : g.intl.formatToPlainString(g.t.W87xDA, { guildName: m.name }),
        Z = D && A === T.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(o.qXd, {
        className: O.notice,
        color: o.DM8.WARNING,
        children: [
            (0, i.jsx)(o.RyX, {
                onClick: N,
                noticeType: C.kVF.GUILD_RAID_NOTIFICATION
            }),
            M,
            k,
            !Z &&
                (0, i.jsx)(o.EyT, {
                    className: O.actionButton,
                    onClick: () => U(!0),
                    children: (0, i.jsx)('div', {
                        className: O.actionButtonInner,
                        children: (0, i.jsx)('span', { children: g.intl.string(g.t.zDJDho) })
                    })
                })
        ]
    });
}
