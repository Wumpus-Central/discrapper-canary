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
    O = n(666657),
    f = n(533244),
    I = n(981631),
    h = n(176505),
    T = n(388032),
    S = n(302654);
function m(e) {
    var t, m;
    let { onDismiss: g } = e,
        N = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
        R = (0, l.e7)([d.Z], () => (null != N ? d.Z.getChannelId(N) : null), [N]),
        b = null != N ? N : null,
        y = (0, l.e7)([u.Z], () => (null != b ? u.Z.getGuild(b) : null), [b]),
        { shouldShowIncidentActions: A, incidentData: C, isUnderLockdown: P } = (0, p.mI)(b),
        D = (0, s.n2)(null != (t = null == y ? void 0 : y.id) ? t : I.lds),
        M = i.useCallback(() => null != y && (0, c._X)(y.id), [y]);
    if (null == y || null == C || !A) return null;
    let j = (e) => {
            if (e && D && R !== h.oC.MEMBER_SAFETY && M())
                return void E.default.track(I.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: I.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: y.id
                });
            (0, a.ZDy)(async () => {
                let e = {
                        source: O.Zu.NAGBAR,
                        alertType: (0, f.T1)(C)
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
                                guildId: y.id,
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
            className: S.guildIcon,
            guild: y,
            size: o.Z.Sizes.MINI
        }),
        k = (0, f.OY)(C, y.name);
    if (null != (null != (m = C.dmsDisabledUntil) ? m : C.invitesDisabledUntil) && P)
        return (0, r.jsxs)(a.qXd, {
            className: S.notice,
            color: a.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(a.RyX, {
                    onClick: g,
                    noticeType: I.kVF.GUILD_RAID_NOTIFICATION
                }),
                x,
                k,
                (0, r.jsx)(a.EyT, {
                    className: S.actionButton,
                    onClick: () => j(!1),
                    children: (0, r.jsxs)('div', {
                        className: S.actionButtonInner,
                        children: [
                            (0, r.jsx)(a.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: T.intl.string(T.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let v = (0, f.CG)(C) ? T.intl.formatToPlainString(T.t.tZTx2N, { guildName: y.name }) : (0, f.kk)(C) ? T.intl.formatToPlainString(T.t['1bSmxs'], { guildName: y.name }) : T.intl.formatToPlainString(T.t.W87xDA, { guildName: y.name }),
        L = D && R === h.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(a.qXd, {
        className: S.notice,
        color: a.DM8.WARNING,
        children: [
            (0, r.jsx)(a.RyX, {
                onClick: g,
                noticeType: I.kVF.GUILD_RAID_NOTIFICATION
            }),
            x,
            v,
            !L &&
                (0, r.jsx)(a.EyT, {
                    className: S.actionButton,
                    onClick: () => j(!0),
                    children: (0, r.jsx)('div', {
                        className: S.actionButtonInner,
                        children: (0, r.jsx)('span', { children: T.intl.string(T.t.zDJDho) })
                    })
                })
        ]
    });
}
