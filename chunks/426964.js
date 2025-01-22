var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(481060),
    l = r(442837),
    u = r(100527),
    c = r(906732),
    d = r(216742),
    f = r(246364),
    p = r(937111),
    h = r(741606),
    _ = r(703656),
    m = r(698305),
    g = r(314897),
    E = r(271383),
    v = r(594174),
    y = r(51144),
    b = r(970606),
    I = r(963202),
    T = r(645896),
    S = r(905362),
    A = r(353093),
    C = r(574410),
    N = r(900681),
    R = r(284019),
    O = r(308083),
    D = r(981631),
    x = r(388032),
    L = r(420930);
function w(e) {
    e.stopPropagation();
}
n.Z = o.memo(function (e) {
    var n, r;
    let { clan: i, isLoading: P, onClose: M, profileViewedAnalytics: k, userId: U } = e,
        B = null == i ? void 0 : i.identityGuildId,
        G = (0, T.Cc)(null != B ? B : null),
        Z = null == i ? void 0 : i.tag,
        F = (0, I.i)('clan_guild_profile'),
        { enabled: V } = (0, d.I)(),
        { enabled: j } = C.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [H, Y] = o.useState(!1),
        [W, K] = o.useState(''),
        z = (0, l.e7)([v.default], () => v.default.getUser(U)),
        { newestAnalyticsLocation: q } = (0, c.ZP)(),
        Q = o.useMemo(
            () => ({
                tagUserId: U,
                source: q,
                ...k
            }),
            [U, q, k]
        ),
        X = (0, l.e7)([g.default], () => g.default.getId()),
        J = (0, l.e7)([E.ZP], () => (null != B ? E.ZP.getMember(B, X) : null), [B, X]),
        $ = (0, l.e7)([p.Z], () => {
            var e;
            return (null == G ? void 0 : G.id) != null && (null === (e = p.Z.getRequest(G.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.wB.SUBMITTED;
        }),
        ee = null != G && G.memberCount >= O.Du,
        et = (0, l.e7)([v.default], () => v.default.getUser(X), [X]),
        en = (null == J ? void 0 : J.joinedAt) != null,
        er = (0, A.Z4)(B, null == et ? void 0 : et.primaryGuild),
        ei = null != (0, h.Z)(B),
        ea = (0, I.i)('ClanGuildProfile');
    o.useEffect(() => {
        null != B &&
            (0, b.u0)({
                guildId: B,
                hasJoinRequest: ei,
                ...Q,
                location: u.Z.CLAN_GUILD_PROFILE
            });
    }, [B, ei, Q]);
    let eo = o.useCallback(() => {
            (0, b.hM)(B, b.UE.ASK_TO_JOIN), Y(!H);
        }, [B, H]),
        es = o.useCallback(async () => {
            if (null != z)
                try {
                    await (0, m.Z)({
                        userId: z.id,
                        content: W,
                        openChannel: !0,
                        location: 'guildProfilePopout'
                    });
                } catch (e) {}
        }, [z, W]),
        el = o.useCallback(
            (e) => {
                if (null != B) e.stopPropagation(), e.preventDefault(), null == M || M(), (0, b.hM)(B, b.UE.TAG_ADOPTION), (0, S.SJ)(B);
            },
            [B, M]
        ),
        eu = o.useCallback(
            (e) => {
                if (null == G || null == B) return;
                if ((e.stopPropagation(), e.preventDefault(), null == M || M(), !ei))
                    (0, b.hM)(B, b.UE.APPLY_FLOW),
                        (0, S.qF)(B, G, {
                            source: null == Q ? void 0 : Q.source,
                            messageId: null == Q ? void 0 : Q.messageId,
                            tagUserId: null == Q ? void 0 : Q.tagUserId,
                            location: u.Z.CLAN_GUILD_PROFILE
                        });
            },
            [G, B, ei, M, Q]
        ),
        ec = o.useCallback(() => {
            if (null != B) (0, b.hM)(B, b.UE.APPLICATION), (0, _.uL)(D.Z5c.GUILD_MEMBER_VERIFICATION(B));
        }, [B]),
        ed = o.useCallback(() => {
            if (null != B) (0, b.hM)(B, b.UE.GUILD), (0, _.XU)(B);
        }, [B]),
        ef = o.useMemo(() => {
            var e, n;
            return {
                color: s.Button.Colors.BRAND,
                size: s.Button.Sizes.SMALL,
                fullWidth: !0,
                className: L.button,
                themeColor: null !== (n = null == G ? void 0 : null === (e = G.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== n ? n : null
            };
        }, [null == G ? void 0 : null === (n = G.branding) || void 0 === n ? void 0 : n.primaryColor]),
        ep = o.useMemo(() => {
            var e;
            switch (!0) {
                case !en && ei:
                    return (0, a.jsx)(R.Z, {
                        onClick: ec,
                        ...ef,
                        children: x.intl.string(x.t.dXvKgY)
                    });
                case !en && (null == G ? void 0 : null === (e = G.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(D.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !en && ea:
                    return (0, a.jsx)(R.Z, {
                        onClick: eu,
                        ...ef,
                        children: x.intl.string(x.t.YfkjGh)
                    });
                case en && !er:
                    return (0, a.jsx)(R.Z, {
                        onClick: el,
                        ...ef,
                        children: x.intl.string(x.t['1keBy8'])
                    });
                case en && er:
                    return (0, a.jsx)(R.Z, {
                        onClick: ed,
                        ...ef,
                        children: x.intl.string(x.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [en, ei, null == G ? void 0 : G.discoveryProfileFeatures, ea, er, ec, ef, eu, el, ed]),
        eh = o.useMemo(
            () => ({
                className: L.container,
                onClick: w
            }),
            []
        );
    if (null == Z || null == G || null == B || P)
        return (0, a.jsx)('div', {
            ...eh,
            children: (0, a.jsx)(s.Spinner, {})
        });
    let e_ = !en && !F && null != z && !ei && j && !H,
        em = null != ep || (F && V) || e_,
        eg = null !== (r = y.ZP.getName(z)) && void 0 !== r ? r : '';
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                ...eh,
                children: [
                    (0, a.jsx)(N.xV, {
                        clan: G,
                        className: L.cardContainer,
                        isMember: en,
                        hasPendingJoinRequest: $,
                        atMaxMemberCapacity: ee
                    }),
                    em &&
                        (0, a.jsxs)('div', {
                            className: L.buttonGroupContainer,
                            children: [
                                null != ep && ep,
                                e_ &&
                                    (0, a.jsx)(R.Z, {
                                        onClick: eo,
                                        ...ef,
                                        children: x.intl.string(x.t.HzLAb2)
                                    })
                            ]
                        })
                ]
            }),
            H &&
                (0, a.jsxs)(s.Dialog, {
                    className: L.askToJoinInputWrapper,
                    children: [
                        (0, a.jsx)(s.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: x.intl.format(x.t.k5d4Wl, { username: eg })
                        }),
                        (0, a.jsxs)('div', {
                            className: L.inputRow,
                            children: [
                                (0, a.jsx)(s.TextInput, {
                                    inputClassName: L.input,
                                    value: W,
                                    onChange: K,
                                    placeholder: x.intl.formatToPlainString(x.t['4c+CAw'], { channel: eg })
                                }),
                                (0, a.jsx)(s.Button, {
                                    className: L.sendButton,
                                    color: s.Button.Colors.BRAND,
                                    onClick: es,
                                    children: x.intl.string(x.t.TXNS7e)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
