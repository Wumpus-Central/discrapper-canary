n.d(t, { Z: () => A });
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
    N = n(528011),
    I = n(666657),
    T = n(533244),
    O = n(981631),
    S = n(176505),
    P = n(388032),
    p = n(841514);
function A(e) {
    var t, A;
    let { onDismiss: R } = e,
        C = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        f = (0, l.e7)([E.Z], () => (null != C ? E.Z.getChannelId(C) : null), [C]),
        D = null != C ? C : null,
        m = (0, l.e7)([u.Z], () => (null != D ? u.Z.getGuild(D) : null), [D]),
        { shouldShowIncidentActions: g, incidentData: h, isUnderLockdown: y } = (0, N.mI)(D),
        U = (0, s.n2)(null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : O.lds),
        b = i.useCallback(() => null != m && (0, c._X)(m.id), [m]);
    if (null == m || null == h || !g) return null;
    let k = (e) => {
            if (e && U && f !== S.oC.MEMBER_SAFETY && b()) {
                _.default.track(O.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: O.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: m.id
                });
                return;
            }
            (0, o.ZDy)(async () => {
                let e = {
                        source: I.Zu.NAGBAR,
                        alertType: (0, T.T1)(h)
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
        M = (0, r.jsx)(a.Z, {
            className: p.guildIcon,
            guild: m,
            size: a.Z.Sizes.MINI
        }),
        v = (0, T.OY)(h, m.name);
    if (null != (null !== (A = h.dmsDisabledUntil) && void 0 !== A ? A : h.invitesDisabledUntil) && y)
        return (0, r.jsxs)(o.qXd, {
            className: p.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(o.RyX, {
                    onClick: R,
                    noticeType: O.kVF.GUILD_RAID_NOTIFICATION
                }),
                M,
                v,
                (0, r.jsx)(o.EyT, {
                    className: p.actionButton,
                    onClick: () => k(!1),
                    children: (0, r.jsxs)('div', {
                        className: p.actionButtonInner,
                        children: [
                            (0, r.jsx)(o.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: P.NW.string(P.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let Z = (0, T.CG)(h) ? P.NW.formatToPlainString(P.t.tZTx2N, { guildName: m.name }) : (0, T.kk)(h) ? P.NW.formatToPlainString(P.t['1bSmxs'], { guildName: m.name }) : P.NW.formatToPlainString(P.t.W87xDA, { guildName: m.name }),
        L = U && f === S.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(o.qXd, {
        className: p.notice,
        color: o.DM8.WARNING,
        children: [
            (0, r.jsx)(o.RyX, {
                onClick: R,
                noticeType: O.kVF.GUILD_RAID_NOTIFICATION
            }),
            M,
            Z,
            !L &&
                (0, r.jsx)(o.EyT, {
                    className: p.actionButton,
                    onClick: () => k(!0),
                    children: (0, r.jsx)('div', {
                        className: p.actionButtonInner,
                        children: (0, r.jsx)('span', { children: P.NW.string(P.t.zDJDho) })
                    })
                })
        ]
    });
}
