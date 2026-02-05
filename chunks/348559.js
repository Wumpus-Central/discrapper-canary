s.d(e, { default: () => g });
var i = s(627968),
    n = s(64700),
    r = s(158954),
    a = s(397927),
    c = s(975571),
    l = s(341915),
    o = s(651892),
    u = s(792620),
    d = s(652215),
    x = s(985018),
    m = s(784787);
function g(t) {
    let { transitionState: e, onClose: s, questContent: g, quest: T } = t,
        _ = ((t) => {
            switch (t) {
                case l.uF.QUEST_BAR:
                case l.uF.QUEST_BAR_V2:
                    return { location: !0, age: !0, activity: !0 };
                case l.uF.ACTIVITY_PANEL:
                case l.uF.QUESTS_EMBED:
                case l.uF.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(g),
        f = n.useMemo(
            () =>
                (0, o.JM)({
                    isTargetedDisclosure: null != _,
                    gamePublisher: T.config.messages.gamePublisher,
                    gameTitle: T.config.messages.gameTitle,
                    cosponsorName: T.config.cosponsorMetadata?.name,
                    isVideoQuest: (0, u.vv)(T),
                }),
            [T, _],
        );
    return (0, i.jsxs)(r.Modal, {
        size: "sm",
        transitionState: e,
        onClose: s,
        title: x.intl.string(x.t.GcsZKJ),
        actions: [{ onClick: () => s(), text: x.intl.string(x.t.cpT0Cq) }],
        children: [
            (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-default", className: m.gt, children: f }),
            (0, i.jsx)(h, { targetedTraits: _ }),
            (0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: x.intl.format(x.t.tzq9Wa, {
                    privacySettingsUrl: c.A.getArticleURL(d.MVz.QUESTS_PRIVACY_CONTROLS),
                }),
            }),
        ],
    });
}
function h(t) {
    let { targetedTraits: e } = t;
    if (null == e) return null;
    {
        let { location: t, age: s, activity: n } = e;
        return (0, i.jsxs)("ul", {
            className: m.OK,
            children: [
                t && (0, i.jsx)(T, { icon: a.L_e, children: x.intl.string(x.t.xQSdPv) }),
                s && (0, i.jsx)(T, { icon: a.nys, children: x.intl.string(x.t.mYt7hQ) }),
                n && (0, i.jsx)(T, { icon: a._xR, children: x.intl.string(x.t.XAsWxQ) }),
            ],
        });
    }
}
function T(t) {
    let { icon: e, children: s } = t;
    return (0, i.jsxs)(a.Text, {
        variant: "text-sm/medium",
        tag: "li",
        className: m.hD,
        children: [(0, i.jsx)(e, { size: "xs", color: "currentColor" }), s],
    });
}
