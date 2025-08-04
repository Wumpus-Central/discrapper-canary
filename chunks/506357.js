n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(565138),
    s = n(241559),
    c = n(527379),
    u = n(430824),
    d = n(944486),
    _ = n(914010),
    E = n(626135),
    p = n(528011),
    I = n(666657),
    O = n(533244),
    S = n(981631),
    f = n(176505),
    h = n(388032),
    T = n(302654);
function m(e) {
    var t, m;
    let { onDismiss: g } = e,
        N = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
        R = (0, l.e7)([d.Z], () => (null != N ? d.Z.getChannelId(N) : null), [N]),
        y = null != N ? N : null,
        A = (0, l.e7)([u.Z], () => (null != y ? u.Z.getGuild(y) : null), [y]),
        { shouldShowIncidentActions: b, incidentData: C, isUnderLockdown: P } = (0, p.mI)(y),
        D = (0, s.n2)(null != (t = null == A ? void 0 : A.id) ? t : S.lds),
        M = i.useCallback(() => null != A && (0, c._X)(A.id), [A]);
    if (null == A || null == C || !b) return null;
    let j = (e) => {
            if (e && D && R !== f.oC.MEMBER_SAFETY && M())
                return void E.default.track(S.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: S.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: A.id
                });
            (0, a.ZDy)(async () => {
                let e = {
                        source: I.Zu.NAGBAR,
                        alertType: (0, O.T1)(C)
                    },
                    { default: t } = await Promise.all([n.e('58175'), n.e('6584')]).then(n.bind(n, 664452));
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
                                guildId: A.id,
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
        x = (0, r.jsx)(o.Z, {
            className: T.guildIcon,
            guild: A,
            size: o.Z.Sizes.MINI
        }),
        v = (0, O.OY)(C, A.name);
    if (null != (null != (m = C.dmsDisabledUntil) ? m : C.invitesDisabledUntil) && P)
        return (0, r.jsxs)(a.qXd, {
            className: T.notice,
            color: a.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(a.RyX, {
                    onClick: g,
                    noticeType: S.kVF.GUILD_RAID_NOTIFICATION
                }),
                x,
                v,
                (0, r.jsx)(a.EyT, {
                    className: T.actionButton,
                    onClick: () => j(!1),
                    children: (0, r.jsxs)('div', {
                        className: T.actionButtonInner,
                        children: [
                            (0, r.jsx)(a.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: h.intl.string(h.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let k = (0, O.CG)(C) ? h.intl.formatToPlainString(h.t.tZTx2N, { guildName: A.name }) : (0, O.kk)(C) ? h.intl.formatToPlainString(h.t['1bSmxs'], { guildName: A.name }) : h.intl.formatToPlainString(h.t.W87xDA, { guildName: A.name }),
        Z = D && R === f.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(a.qXd, {
        className: T.notice,
        color: a.DM8.WARNING,
        children: [
            (0, r.jsx)(a.RyX, {
                onClick: g,
                noticeType: S.kVF.GUILD_RAID_NOTIFICATION
            }),
            x,
            k,
            !Z &&
                (0, r.jsx)(a.EyT, {
                    className: T.actionButton,
                    onClick: () => j(!0),
                    children: (0, r.jsx)('div', {
                        className: T.actionButtonInner,
                        children: (0, r.jsx)('span', { children: h.intl.string(h.t.zDJDho) })
                    })
                })
        ]
    });
}
