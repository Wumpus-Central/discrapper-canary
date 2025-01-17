var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(442837),
    u = r(100527),
    c = r(906732),
    d = r(216742),
    f = r(246364),
    _ = r(937111),
    h = r(741606),
    p = r(703656),
    m = r(698305),
    g = r(314897),
    E = r(271383),
    v = r(594174),
    I = r(51144),
    T = r(970606),
    b = r(963202),
    y = r(645896),
    S = r(905362),
    A = r(353093),
    N = r(574410),
    C = r(900681),
    R = r(284019),
    O = r(308083),
    D = r(981631),
    L = r(388032),
    x = r(420930);
function w(e) {
    e.stopPropagation();
}
n.Z = s.memo(function (e) {
    var n, r;
    let { clan: i, isLoading: P, onClose: M, profileViewedAnalytics: k, userId: U } = e,
        B = null == i ? void 0 : i.identityGuildId,
        G = (0, y.Cc)(null != B ? B : null),
        Z = null == i ? void 0 : i.tag,
        F = (0, b.i)('clan_guild_profile'),
        { enabled: V } = (0, d.I)(),
        { enabled: j } = N.w.useExperiment({ location: 'ClanGuildProfile' }, { autoTrackExposure: !1 }),
        [H, Y] = s.useState(!1),
        [W, K] = s.useState(''),
        z = (0, l.e7)([v.default], () => v.default.getUser(U)),
        { newestAnalyticsLocation: q } = (0, c.ZP)(),
        Q = s.useMemo(
            () => ({
                tagUserId: U,
                source: q,
                ...k
            }),
            [U, q, k]
        ),
        X = (0, l.e7)([g.default], () => g.default.getId()),
        J = (0, l.e7)([E.ZP], () => (null != B ? E.ZP.getMember(B, X) : null), [B, X]),
        $ = (0, l.e7)([_.Z], () => {
            var e;
            return (null == G ? void 0 : G.id) != null && (null === (e = _.Z.getRequest(G.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.wB.SUBMITTED;
        }),
        ee = null != G && G.memberCount >= O.Du,
        et = (0, l.e7)([v.default], () => v.default.getUser(X), [X]),
        en = (null == J ? void 0 : J.joinedAt) != null,
        er = (0, A.Z4)(B, null == et ? void 0 : et.primaryGuild),
        ei = null != (0, h.Z)(B),
        ea = (0, b.i)('ClanGuildProfile');
    s.useEffect(() => {
        null != B &&
            (0, T.u0)({
                guildId: B,
                hasJoinRequest: ei,
                ...Q,
                location: u.Z.CLAN_GUILD_PROFILE
            });
    }, [B, ei, Q]);
    let es = s.useCallback(() => {
            (0, T.hM)(B, T.UE.ASK_TO_JOIN), Y(!H);
        }, [B, H]),
        eo = s.useCallback(async () => {
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
        el = s.useCallback(
            (e) => {
                if (null != B) e.stopPropagation(), e.preventDefault(), null == M || M(), (0, T.hM)(B, T.UE.TAG_ADOPTION), (0, S.SJ)(B);
            },
            [B, M]
        ),
        eu = s.useCallback(
            (e) => {
                if (null == G || null == B) return;
                if ((e.stopPropagation(), e.preventDefault(), null == M || M(), !ei))
                    (0, T.hM)(B, T.UE.APPLY_FLOW),
                        (0, S.qF)(B, G, {
                            source: null == Q ? void 0 : Q.source,
                            messageId: null == Q ? void 0 : Q.messageId,
                            tagUserId: null == Q ? void 0 : Q.tagUserId,
                            location: u.Z.CLAN_GUILD_PROFILE
                        });
            },
            [G, B, ei, M, Q]
        ),
        ec = s.useCallback(() => {
            if (null != B) (0, T.hM)(B, T.UE.APPLICATION), (0, p.uL)(D.Z5c.GUILD_MEMBER_VERIFICATION(B));
        }, [B]),
        ed = s.useCallback(() => {
            if (null != B) (0, T.hM)(B, T.UE.GUILD), (0, p.XU)(B);
        }, [B]),
        ef = s.useMemo(() => {
            var e, n;
            return {
                color: o.Button.Colors.BRAND,
                size: o.Button.Sizes.SMALL,
                fullWidth: !0,
                className: x.button,
                themeColor: null !== (n = null == G ? void 0 : null === (e = G.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== n ? n : null
            };
        }, [null == G ? void 0 : null === (n = G.branding) || void 0 === n ? void 0 : n.primaryColor]),
        e_ = s.useMemo(() => {
            var e;
            switch (!0) {
                case !en && ei:
                    return (0, a.jsx)(R.Z, {
                        onClick: ec,
                        ...ef,
                        children: L.intl.string(L.t.dXvKgY)
                    });
                case !en && (null == G ? void 0 : null === (e = G.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(D.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case !en && ea:
                    return (0, a.jsx)(R.Z, {
                        onClick: eu,
                        ...ef,
                        children: L.intl.string(L.t.YfkjGh)
                    });
                case en && !er:
                    return (0, a.jsx)(R.Z, {
                        onClick: el,
                        ...ef,
                        children: L.intl.string(L.t['1keBy8'])
                    });
                case en && er:
                    return (0, a.jsx)(R.Z, {
                        onClick: ed,
                        ...ef,
                        children: L.intl.string(L.t.muzrLS)
                    });
                default:
                    return null;
            }
        }, [en, ei, null == G ? void 0 : G.discoveryProfileFeatures, ea, er, ec, ef, eu, el, ed]),
        eh = s.useMemo(
            () => ({
                className: x.container,
                onClick: w
            }),
            []
        );
    if (null == Z || null == G || null == B || P)
        return (0, a.jsx)('div', {
            ...eh,
            children: (0, a.jsx)(o.Spinner, {})
        });
    let ep = !en && !F && null != z && !ei && j && !H,
        em = null != e_ || (F && V) || ep,
        eg = null !== (r = I.ZP.getName(z)) && void 0 !== r ? r : '';
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)('div', {
                ...eh,
                children: [
                    (0, a.jsx)(C.xV, {
                        clan: G,
                        className: x.cardContainer,
                        isMember: en,
                        hasPendingJoinRequest: $,
                        atMaxMemberCapacity: ee
                    }),
                    em &&
                        (0, a.jsxs)('div', {
                            className: x.buttonGroupContainer,
                            children: [
                                null != e_ && e_,
                                ep &&
                                    (0, a.jsx)(R.Z, {
                                        onClick: es,
                                        ...ef,
                                        children: L.intl.string(L.t.HzLAb2)
                                    })
                            ]
                        })
                ]
            }),
            H &&
                (0, a.jsxs)(o.Dialog, {
                    className: x.askToJoinInputWrapper,
                    children: [
                        (0, a.jsx)(o.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/normal',
                            children: L.intl.format(L.t.k5d4Wl, { username: eg })
                        }),
                        (0, a.jsxs)('div', {
                            className: x.inputRow,
                            children: [
                                (0, a.jsx)(o.TextInput, {
                                    inputClassName: x.input,
                                    value: W,
                                    onChange: K,
                                    placeholder: L.intl.formatToPlainString(L.t['4c+CAw'], { channel: eg })
                                }),
                                (0, a.jsx)(o.Button, {
                                    className: x.sendButton,
                                    color: o.Button.Colors.BRAND,
                                    onClick: eo,
                                    children: L.intl.string(L.t.TXNS7e)
                                })
                            ]
                        })
                    ]
                })
        ]
    });
});
