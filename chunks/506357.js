n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
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
    O = n(666657),
    p = n(533244),
    T = n(981631),
    S = n(176505),
    N = n(388032),
    f = n(302654);
function m(e) {
    var t, m;
    let { onDismiss: A } = e,
        g = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
        R = (0, l.e7)([d.Z], () => (null != g ? d.Z.getChannelId(g) : null), [g]),
        C = null != g ? g : null,
        P = (0, l.e7)([u.Z], () => (null != C ? u.Z.getGuild(C) : null), [C]),
        { shouldShowIncidentActions: y, incidentData: b, isUnderLockdown: D } = (0, I.mI)(C),
        h = (0, c.n2)(null != (t = null == P ? void 0 : P.id) ? t : T.lds),
        U = i.useCallback(() => null != P && (0, s._X)(P.id), [P]);
    if (null == P || null == b || !y) return null;
    let M = (e) => {
            if (e && h && R !== S.oC.MEMBER_SAFETY && U())
                return void E.default.track(T.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: T.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: P.id
                });
            (0, a.ZDy)(async () => {
                let e = {
                        source: O.Zu.NAGBAR,
                        alertType: (0, p.T1)(b)
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
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                guildId: P.id,
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
        v = (0, r.jsx)(o.Z, {
            className: f.guildIcon,
            guild: P,
            size: o.Z.Sizes.MINI
        }),
        Z = (0, p.OY)(b, P.name);
    if (null != (null != (m = b.dmsDisabledUntil) ? m : b.invitesDisabledUntil) && D)
        return (0, r.jsxs)(a.qXd, {
            className: f.notice,
            color: a.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(a.RyX, {
                    onClick: A,
                    noticeType: T.kVF.GUILD_RAID_NOTIFICATION
                }),
                v,
                Z,
                (0, r.jsx)(a.EyT, {
                    className: f.actionButton,
                    onClick: () => M(!1),
                    children: (0, r.jsxs)('div', {
                        className: f.actionButtonInner,
                        children: [
                            (0, r.jsx)(a.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: N.intl.string(N.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let L = (0, p.CG)(b) ? N.intl.formatToPlainString(N.t.tZTx2N, { guildName: P.name }) : (0, p.kk)(b) ? N.intl.formatToPlainString(N.t['1bSmxs'], { guildName: P.name }) : N.intl.formatToPlainString(N.t.W87xDA, { guildName: P.name }),
        j = h && R === S.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(a.qXd, {
        className: f.notice,
        color: a.DM8.WARNING,
        children: [
            (0, r.jsx)(a.RyX, {
                onClick: A,
                noticeType: T.kVF.GUILD_RAID_NOTIFICATION
            }),
            v,
            L,
            !j &&
                (0, r.jsx)(a.EyT, {
                    className: f.actionButton,
                    onClick: () => M(!0),
                    children: (0, r.jsx)('div', {
                        className: f.actionButtonInner,
                        children: (0, r.jsx)('span', { children: N.intl.string(N.t.zDJDho) })
                    })
                })
        ]
    });
}
