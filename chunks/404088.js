i.d(e, { default: () => g });
var s = i(54381),
    n = i(473749),
    r = i(793030),
    a = i(481060),
    c = i(63063),
    l = i(49436),
    o = i(304696),
    u = i(254579),
    d = i(981631),
    m = i(388032),
    x = i(838462);
function g(t) {
    let { transitionState: e, onClose: i, questContent: g, quest: T } = t,
        h = ((t) => {
            switch (t) {
                case l.jn.QUEST_BAR:
                case l.jn.QUEST_BAR_V2:
                    return {
                        location: !0,
                        age: !0,
                        activity: !0,
                    };
                case l.jn.ACTIVITY_PANEL:
                case l.jn.QUESTS_EMBED:
                case l.jn.QUEST_LIVE_STREAM:
                    return { activity: !0 };
                default:
                    return;
            }
        })(g),
        p = n.useMemo(() => {
            var t;
            return (0, o.Fs)({
                isTargetedDisclosure: null != h,
                gamePublisher: T.config.messages.gamePublisher,
                gameTitle: T.config.messages.gameTitle,
                cosponsorName: null == (t = T.config.cosponsorMetadata) ? void 0 : t.name,
                isVideoQuest: (0, u.q8)(T),
            });
        }, [T, h]);
    return (0, s.jsxs)(r.Modal, {
        size: "sm",
        transitionState: e,
        onClose: i,
        title: m.intl.string(m.t.GcsZKJ),
        actions: [
            {
                onClick: () => i(),
                text: m.intl.string(m.t.cpT0Cq),
            },
        ],
        children: [
            (0, s.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: x.upperBodyText,
                children: p,
            }),
            (0, s.jsx)(f, { targetedTraits: h }),
            (0, s.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: m.intl.format(m.t.tzq9Wa, {
                    privacySettingsUrl: c.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS),
                }),
            }),
        ],
    });
}
function f(t) {
    let { targetedTraits: e } = t;
    if (null == e) return null;
    {
        let { location: t, age: i, activity: n } = e;
        return (0, s.jsxs)("ul", {
            className: x.targetList,
            children: [
                t &&
                    (0, s.jsx)(T, {
                        icon: a.enf,
                        children: m.intl.string(m.t.xQSdPv),
                    }),
                i &&
                    (0, s.jsx)(T, {
                        icon: a.tBG,
                        children: m.intl.string(m.t.mYt7hQ),
                    }),
                n &&
                    (0, s.jsx)(T, {
                        icon: a.iWm,
                        children: m.intl.string(m.t.XAsWxQ),
                    }),
            ],
        });
    }
}
function T(t) {
    let { icon: e, children: i } = t;
    return (0, s.jsxs)(a.Text, {
        variant: "text-sm/medium",
        tag: "li",
        className: x.targetItem,
        children: [
            (0, s.jsx)(e, {
                size: "xs",
                color: "currentColor",
            }),
            i,
        ],
    });
}
