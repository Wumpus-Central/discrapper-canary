i.d(e, { default: () => T });
var n = i(477900),
    s = i(582128),
    r = i(189213),
    l = i(834730),
    c = i(664121),
    a = i(998445),
    u = i(950305),
    o = i(687966),
    d = i(253932),
    x = i(975571),
    h = i(738822),
    m = i(651892),
    g = i(652215),
    E = i(105292),
    S = i(738541);
function T(t) {
    let {
            transitionState: e,
            onClose: i,
            questContent: c,
            adCreativeType: a,
            gamePublisher: u,
            gameTitle: o,
            cosponsorName: T,
            isVideoQuest: f,
            returnRef: C,
        } = t,
        _ = d.H1.useSetting(),
        p = (function (t) {
            switch (t) {
                case h.uF.QUEST_BAR:
                case h.uF.QUEST_BAR_V2:
                    return { location: !0, age: !0, activity: !0 };
                case h.uF.ACTIVITY_PANEL:
                case h.uF.QUESTS_EMBED:
                case h.uF.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(c),
        A = s.useMemo(
            () =>
                (0, m.JM)({
                    adCreativeType: a,
                    isTargetedDisclosure: null != p,
                    isContextualDisclosure: _,
                    gamePublisher: u,
                    gameTitle: o,
                    cosponsorName: T,
                    isVideoQuest: f,
                }),
            [a, u, o, T, f, p, _],
        );
    return (0, n.jsxs)(r.a, {
        size: "sm",
        transitionState: e,
        onClose: i,
        returnRef: C,
        title: E.intl.string(E.t.GcsZKJ),
        actions: [{ onClick: () => i(), text: E.intl.string(E.t.cpT0Cq) }],
        children: [
            (0, n.jsx)(l.E, { variant: "text-sm/medium", color: "text-default", className: S.gt, children: A }),
            (0, n.jsx)(j, { targetedTraits: p, isContextualDisclosure: _ }),
            (0, n.jsx)(l.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: E.intl.format(E.t.tzq9Wa, {
                    privacySettingsUrl: x.A.getArticleURL(g.MVz.QUESTS_PRIVACY_CONTROLS),
                }),
            }),
        ],
    });
}
function j(t) {
    let { targetedTraits: e, isContextualDisclosure: i } = t;
    if (null == e) return null;
    if (i)
        return (0, n.jsx)("ul", {
            className: S.OK,
            children: (0, n.jsx)(f, { icon: c.R, children: E.intl.string(E.t["2bL0wT"]) }),
        });
    let { location: s, age: r, activity: l } = e;
    return (0, n.jsxs)("ul", {
        className: S.OK,
        children: [
            s && (0, n.jsx)(f, { icon: a.GlobeEarthIcon, children: E.intl.string(E.t.xQSdPv) }),
            r && (0, n.jsx)(f, { icon: u.UserIcon, children: E.intl.string(E.t.mYt7hQ) }),
            l && (0, n.jsx)(f, { icon: o.GameControllerIcon, children: E.intl.string(E.t.XAsWxQ) }),
        ],
    });
}
function f(t) {
    let { icon: e, children: i } = t;
    return (0, n.jsxs)(l.E, {
        variant: "text-sm/medium",
        tag: "li",
        className: S.hD,
        children: [(0, n.jsx)(e, { size: "xs", color: "currentColor" }), i],
    });
}
