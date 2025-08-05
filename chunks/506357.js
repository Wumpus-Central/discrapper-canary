n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(565138),
    l = n(241559),
    c = n(527379),
    u = n(430824),
    d = n(944486),
    f = n(914010),
    _ = n(626135),
    p = n(528011),
    h = n(666657),
    m = n(533244),
    g = n(981631),
    E = n(176505),
    b = n(388032),
    y = n(302654);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    var t, O;
    let { onDismiss: I } = e,
        S = (0, a.e7)([f.Z], () => f.Z.getGuildId()),
        A = (0, a.e7)([d.Z], () => (null != S ? d.Z.getChannelId(S) : null), [S]),
        N = null != S ? S : null,
        C = (0, a.e7)([u.Z], () => (null != N ? u.Z.getGuild(N) : null), [N]),
        { shouldShowIncidentActions: w, incidentData: R, isUnderLockdown: P } = (0, p.mI)(N),
        D = (0, l.n2)(null != (t = null == C ? void 0 : C.id) ? t : g.lds),
        L = i.useCallback(() => null != C && (0, c._X)(C.id), [C]);
    if (null == C || null == R || !w) return null;
    let x = (e) => {
            if (e && D && A !== E.oC.MEMBER_SAFETY && L())
                return void _.default.track(g.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: g.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: C.id
                });
            (0, o.ZDy)(async () => {
                let e = {
                        source: h.Zu.NAGBAR,
                        alertType: (0, m.T1)(R)
                    },
                    { default: t } = await Promise.all([n.e('58175'), n.e('6584')]).then(n.bind(n, 664452));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        T(v({}, n), {
                            guildId: C.id,
                            analyticsData: e
                        })
                    );
            });
        },
        k = (0, r.jsx)(s.Z, {
            className: y.guildIcon,
            guild: C,
            size: s.Z.Sizes.MINI
        }),
        j = (0, m.OY)(R, C.name);
    if (null != (null != (O = R.dmsDisabledUntil) ? O : R.invitesDisabledUntil) && P)
        return (0, r.jsxs)(o.qXd, {
            className: y.notice,
            color: o.DM8.NEUTRAL,
            children: [
                (0, r.jsx)(o.RyX, {
                    onClick: I,
                    noticeType: g.kVF.GUILD_RAID_NOTIFICATION
                }),
                k,
                j,
                (0, r.jsx)(o.EyT, {
                    className: y.actionButton,
                    onClick: () => x(!1),
                    children: (0, r.jsxs)('div', {
                        className: y.actionButtonInner,
                        children: [
                            (0, r.jsx)(o.mBM, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, r.jsx)('span', { children: b.intl.string(b.t['c+7oa2']) })
                        ]
                    })
                })
            ]
        });
    let M = (0, m.CG)(R) ? b.intl.formatToPlainString(b.t.tZTx2N, { guildName: C.name }) : (0, m.kk)(R) ? b.intl.formatToPlainString(b.t['1bSmxs'], { guildName: C.name }) : b.intl.formatToPlainString(b.t.W87xDA, { guildName: C.name }),
        U = D && A === E.oC.MEMBER_SAFETY;
    return (0, r.jsxs)(o.qXd, {
        className: y.notice,
        color: o.DM8.WARNING,
        children: [
            (0, r.jsx)(o.RyX, {
                onClick: I,
                noticeType: g.kVF.GUILD_RAID_NOTIFICATION
            }),
            k,
            M,
            !U &&
                (0, r.jsx)(o.EyT, {
                    className: y.actionButton,
                    onClick: () => x(!0),
                    children: (0, r.jsx)('div', {
                        className: y.actionButtonInner,
                        children: (0, r.jsx)('span', { children: b.intl.string(b.t.zDJDho) })
                    })
                })
        ]
    });
}
