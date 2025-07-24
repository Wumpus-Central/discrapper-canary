n.d(t, { Z: () => T });
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
    h = n(626135),
    E = n(528011),
    I = n(666657),
    p = n(533244),
    C = n(981631),
    g = n(176505),
    O = n(388032),
    S = n(302654);
function T(e) {
    var t, T;
    let { onDismiss: f } = e,
        N = (0, l.e7)([_.Z], () => _.Z.getGuildId()),
        m = (0, l.e7)([u.Z], () => (null != N ? u.Z.getChannelId(N) : null), [N]),
        R = null != N ? N : null,
        A = (0, l.e7)([d.Z], () => (null != R ? d.Z.getGuild(R) : null), [R]),
        { shouldShowIncidentActions: y, incidentData: b, isUnderLockdown: P } = (0, E.mI)(R),
        D = (0, a.n2)(null != (t = null == A ? void 0 : A.id) ? t : C.lds),
        v = r.useCallback(() => null != A && (0, c._X)(A.id), [A]);
    if (null == A || null == b || !y) return null;
    let U = (e) => {
            if (e && D && m !== g.oC.MEMBER_SAFETY && v())
                return void h.default.track(C.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: C.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: A.id
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: I.Zu.NAGBAR,
                        alertType: (0, p.T1)(b)
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
        M = (0, i.jsx)(s.Z, {
            className: S.guildIcon,
            guild: A,
            size: s.Z.Sizes.MINI
        }),
        L = (0, p.OY)(b, A.name);
    if (null != (null != (T = b.dmsDisabledUntil) ? T : b.invitesDisabledUntil) && P)
        return (0, i.jsxs)(o.qXd, {
            className: S.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, i.jsx)(o.RyX, {
                    onClick: f,
                    noticeType: C.kVF.GUILD_RAID_NOTIFICATION
                }),
                M,
                L,
                (0, i.jsx)(o.EyT, {
                    className: S.actionButton,
                    onClick: () => U(!1),
                    children: (0, i.jsxs)('div', {
                        className: S.actionButtonInner,
                        children: [
                            (0, i.jsx)(o.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: O.intl.string(O.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let Z = (0, p.CG)(b) ? O.intl.formatToPlainString(O.t.tZTx2N, { guildName: A.name }) : (0, p.kk)(b) ? O.intl.formatToPlainString(O.t['1bSmxs'], { guildName: A.name }) : O.intl.formatToPlainString(O.t.W87xDA, { guildName: A.name }),
        k = D && m === g.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(o.qXd, {
        className: S.notice,
        color: o.DM8.WARNING,
        children: [
            (0, i.jsx)(o.RyX, {
                onClick: f,
                noticeType: C.kVF.GUILD_RAID_NOTIFICATION
            }),
            M,
            Z,
            !k &&
                (0, i.jsx)(o.EyT, {
                    className: S.actionButton,
                    onClick: () => U(!0),
                    children: (0, i.jsx)('div', {
                        className: S.actionButtonInner,
                        children: (0, i.jsx)('span', { children: O.intl.string(O.t.zDJDho) })
                    })
                })
        ]
    });
}
