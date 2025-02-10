n.d(t, { Z: () => C });
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
    _ = n(314897),
    p = n(271383),
    h = n(594174),
    m = n(970606),
    g = n(645896),
    E = n(905362),
    v = n(353093),
    y = n(900681),
    I = n(284019),
    T = n(308083),
    b = n(981631),
    S = n(388032),
    A = n(652134);
function N(e) {
    e.stopPropagation();
}
let C = r.memo(function (e) {
    var t;
    let { clan: n, isLoading: C, onClose: R, profileViewedAnalytics: O, userId: D } = e,
        L = null == n ? void 0 : n.identityGuildId,
        x = (0, g.Cc)(null != L ? L : null),
        w = null == n ? void 0 : n.tag,
        { newestAnalyticsLocation: P } = (0, l.ZP)(),
        M = r.useMemo(
            () => ({
                tagUserId: D,
                source: P,
                ...O
            }),
            [D, P, O]
        ),
        k = (0, s.e7)([_.default], () => _.default.getId()),
        U = (0, s.e7)([p.ZP], () => (null != L ? p.ZP.getMember(L, k) : null), [L, k]),
        G = (0, s.e7)([c.Z], () => {
            var e;
            return (null == x ? void 0 : x.id) != null && (null === (e = c.Z.getRequest(x.id)) || void 0 === e ? void 0 : e.applicationStatus) === u.wB.SUBMITTED;
        }),
        B = null != x && x.memberCount >= T.Du,
        Z = (0, s.e7)([h.default], () => h.default.getUser(k), [k]),
        F = (null == U ? void 0 : U.joinedAt) != null,
        V = (0, v.Z4)(L, null == Z ? void 0 : Z.primaryGuild),
        j = null != (0, d.Z)(L);
    r.useEffect(() => {
        null != L &&
            (0, m.u0)({
                guildId: L,
                hasJoinRequest: j,
                ...M,
                location: o.Z.CLAN_GUILD_PROFILE
            });
    }, [L, j, M]);
    let H = r.useCallback(
            (e) => {
                null != L && (e.stopPropagation(), e.preventDefault(), null == R || R(), (0, m.hM)(L, m.UE.TAG_ADOPTION), (0, E.SJ)(L));
            },
            [L, R]
        ),
        Y = r.useCallback(() => {
            null != L && ((0, m.hM)(L, m.UE.APPLICATION), (0, f.uL)(b.Z5c.GUILD_MEMBER_VERIFICATION(L)));
        }, [L]),
        W = r.useCallback(() => {
            null != L && ((0, m.hM)(L, m.UE.GUILD), (0, f.XU)(L));
        }, [L]),
        K = r.useMemo(() => {
            var e, t;
            return {
                color: a.zxk.Colors.BRAND,
                size: a.zxk.Sizes.SMALL,
                fullWidth: !0,
                className: A.button,
                themeColor: null !== (t = null == x ? void 0 : null === (e = x.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == x ? void 0 : null === (t = x.branding) || void 0 === t ? void 0 : t.primaryColor]),
        z = r.useMemo(() => {
            var e;
            switch (!0) {
                case !F && j:
                    return (0, i.jsx)(I.Z, {
                        onClick: Y,
                        ...K,
                        children: S.intl.string(S.t.dXvKgY)
                    });
                case !F && (null == x ? void 0 : null === (e = x.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(b.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case F && !V:
                    return (0, i.jsx)(I.Z, {
                        onClick: H,
                        ...K,
                        children: S.intl.string(S.t['1keBy8'])
                    });
                case F && V:
                    return (0, i.jsx)(I.Z, {
                        onClick: W,
                        ...K,
                        children: S.intl.string(S.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [F, j, null == x ? void 0 : x.discoveryProfileFeatures, V, Y, K, H, W]),
        q = r.useMemo(
            () => ({
                className: A.container,
                onClick: N
            }),
            []
        );
    if (null == w || null == x || null == L || C)
        return (0, i.jsx)('div', {
            ...q,
            children: (0, i.jsx)(a.$jN, {})
        });
    let Q = null != z;
    return (0, i.jsxs)('div', {
        ...q,
        children: [
            (0, i.jsx)(y.x, {
                clan: x,
                className: A.cardContainer,
                isMember: F,
                hasPendingJoinRequest: G,
                atMaxMemberCapacity: B
            }),
            Q &&
                (0, i.jsx)('div', {
                    className: A.buttonGroupContainer,
                    children: null != z && z
                })
        ]
    });
});
