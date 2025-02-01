n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(442837),
    o = n(100527),
    l = n(906732),
    u = n(246364),
    c = n(937111),
    d = n(741606),
    f = n(703656),
    _ = n(698305),
    p = n(314897),
    h = n(271383),
    m = n(594174),
    g = n(51144),
    E = n(970606),
    v = n(645896),
    y = n(905362),
    I = n(353093),
    T = n(574410),
    b = n(900681),
    S = n(284019),
    A = n(308083),
    N = n(981631),
    C = n(388032),
    R = n(420930);
function O(e) {
    e.stopPropagation();
}
let D = r.memo(function (e) {
    var t, n;
    let { clan: D, isLoading: x, onClose: L, profileViewedAnalytics: P, userId: w } = e,
        M = null == D ? void 0 : D.identityGuildId,
        k = (0, v.Cc)(null != M ? M : null),
        U = null == D ? void 0 : D.tag,
        { enabled: G } = T.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [B, Z] = r.useState(!1),
        [F, V] = r.useState(''),
        j = (0, s.e7)([m.default], () => m.default.getUser(w)),
        { newestAnalyticsLocation: H } = (0, l.ZP)(),
        Y = r.useMemo(
            () => ({
                tagUserId: w,
                source: H,
                ...P
            }),
            [w, H, P]
        ),
        W = (0, s.e7)([p.default], () => p.default.getId()),
        K = (0, s.e7)([h.ZP], () => (null != M ? h.ZP.getMember(M, W) : null), [M, W]),
        z = (0, s.e7)([c.Z], () => {
            var e;
            return (null == k ? void 0 : k.id) != null && (null === (e = c.Z.getRequest(k.id)) || void 0 === e ? void 0 : e.applicationStatus) === u.wB.SUBMITTED;
        }),
        q = null != k && k.memberCount >= A.Du,
        Q = (0, s.e7)([m.default], () => m.default.getUser(W), [W]),
        X = (null == K ? void 0 : K.joinedAt) != null,
        J = (0, I.Z4)(M, null == Q ? void 0 : Q.primaryGuild),
        $ = null != (0, d.Z)(M);
    r.useEffect(() => {
        null != M &&
            (0, E.u0)({
                guildId: M,
                hasJoinRequest: $,
                ...Y,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [M, $, Y]);
    let ee = r.useCallback(() => {
            (0, E.hM)(M, E.UE.ASK_TO_JOIN), Z(!B);
        }, [M, B]),
        et = r.useCallback(async () => {
            if (null != j)
                try {
                    await (0, _.Z)({
                        userId: j.id,
                        content: F,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [j, F]),
        en = r.useCallback(
            (e) => {
                null != M && (e.stopPropagation(), e.preventDefault(), null == L || L(), (0, E.hM)(M, E.UE.TAG_ADOPTION), (0, y.SJ)(M));
            },
            [M, L]
        ),
        ei = r.useCallback(() => {
            null != M && ((0, E.hM)(M, E.UE.APPLICATION), (0, f.uL)(N.Z5c.GUILD_MEMBER_VERIFICATION(M)));
        }, [M]),
        er = r.useCallback(() => {
            null != M && ((0, E.hM)(M, E.UE.GUILD), (0, f.XU)(M));
        }, [M]),
        ea = r.useMemo(() => {
            var e, t;
            return {
                color: a.zxk.Colors.BRAND,
                size: a.zxk.Sizes.SMALL,
                fullWidth: !0,
                className: R.button,
                themeColor: null !== (t = null == k ? void 0 : null === (e = k.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == k ? void 0 : null === (t = k.branding) || void 0 === t ? void 0 : t.primaryColor]),
        es = r.useMemo(() => {
            var e;
            switch (!0) {
                case !X && $:
                    return (0, i.jsx)(S.Z, {
                        onClick: ei,
                        ...ea,
                        children: C.intl.string(C.t.dXvKgY)
                    });
                case !X && (null == k ? void 0 : null === (e = k.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(N.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case X && !J:
                    return (0, i.jsx)(S.Z, {
                        onClick: en,
                        ...ea,
                        children: C.intl.string(C.t['1keBy8'])
                    });
                case X && J:
                    return (0, i.jsx)(S.Z, {
                        onClick: er,
                        ...ea,
                        children: C.intl.string(C.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [X, $, null == k ? void 0 : k.discoveryProfileFeatures, J, ei, ea, en, er]),
        eo = r.useMemo(
            () => ({
                className: R.container,
                onClick: O
            }),
            []
        );
    if (null == U || null == k || null == M || x)
        return (0, i.jsx)('div', {
            ...eo,
            children: (0, i.jsx)(a.$jN, {})
        });
    let el = !X && null != j && !$ && G && !B,
        eu = null != es || el,
        ec = null !== (n = g.ZP.getName(j)) && void 0 !== n ? n : '';
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                ...eo,
                children: [
                    (0, i.jsx)(b.x, {
                        clan: k,
                        className: R.cardContainer,
                        isMember: X,
                        hasPendingJoinRequest: z,
                        atMaxMemberCapacity: q
                    }),
                    eu &&
                        (0, i.jsxs)('div', {
                            className: R.buttonGroupContainer,
                            children: [
                                null != es && es,
                                el &&
                                    (0, i.jsx)(S.Z, {
                                        onClick: ee,
                                        ...ea,
                                        children: C.intl.string(C.t.HzLAb2)
                                    })
                            ]
                        })
                ]
            }),
            B &&
                (0, i.jsxs)(a.VqE, {
                    className: R.askToJoinInputWrapper,
                    children: [
                        (0, i.jsx)(a.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: C.intl.format(C.t.k5d4Wl, { username: ec })
                        }),
                        (0, i.jsxs)('div', {
                            className: R.inputRow,
                            children: [
                                (0, i.jsx)(a.oil, {
                                    inputClassName: R.input,
                                    value: F,
                                    onChange: V,
                                    placeholder: C.intl.formatToPlainString(C.t['4c+CAw'], { channel: ec })
                                }),
                                (0, i.jsx)(a.zxk, {
                                    className: R.sendButton,
                                    color: a.zxk.Colors.BRAND,
                                    onClick: et,
                                    children: C.intl.string(C.t.TXNS7e)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
