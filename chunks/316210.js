s.d(t, { default: () => g });
var n = s(200651),
    a = s(192379),
    i = s(481060),
    r = s(600164),
    o = s(63063),
    l = s(497505),
    c = s(918701),
    d = s(981631),
    m = s(388032),
    x = s(176714),
    u = s(708901);
let _ = (e) => {
    switch (e) {
        case l.jn.QUEST_BAR:
        case l.jn.QUEST_BAR_V2:
            return {
                location: !0,
                age: !0,
                activity: !0
            };
        case l.jn.ACTIVITY_PANEL:
        case l.jn.QUESTS_EMBED:
        case l.jn.QUEST_LIVE_STREAM:
            return { activity: !0 };
        default:
            return;
    }
};
function g(e) {
    let { transitionState: t, onClose: s, questContent: l, quest: g } = e,
        f = _(l),
        j = a.useMemo(() => {
            var e;
            return (0, c.Fs)({
                isTargetedDisclosure: null != f,
                gamePublisher: g.config.messages.gamePublisher,
                gameTitle: g.config.messages.gameTitle,
                cosponsorName: null === (e = g.config.cosponsorMetadata) || void 0 === e ? void 0 : e.name
            });
        }, [g, f]);
    return (0, n.jsxs)(i.Y0X, {
        transitionState: t,
        size: i.CgR.DYNAMIC,
        className: x.modalRoot,
        children: [
            (0, n.jsxs)(i.xBx, {
                direction: r.Z.Direction.VERTICAL,
                separator: !1,
                className: x.modalHeader,
                children: [
                    (0, n.jsxs)('div', {
                        className: x.modalTop,
                        children: [
                            (0, n.jsx)('div', {
                                className: x.iconFrame,
                                children: (0, n.jsx)('img', {
                                    className: x.icon,
                                    alt: '',
                                    src: u
                                })
                            }),
                            (0, n.jsx)(i.olH, {
                                className: x.closeBtn,
                                onClick: s
                            })
                        ]
                    }),
                    (0, n.jsx)(i.X6q, {
                        variant: 'heading-xl/bold',
                        children: m.intl.string(m.t.GcsZKC)
                    })
                ]
            }),
            (0, n.jsxs)(i.hzk, {
                className: x.modalContent,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        className: x.upperBodyText,
                        children: j
                    }),
                    (0, n.jsx)(h, { targetedTraits: f }),
                    (0, n.jsx)(i.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: m.intl.format(m.t.tzq9WV, { privacySettingsUrl: o.Z.getArticleURL(d.BhN.QUESTS_PRIVACY_CONTROLS) })
                    })
                ]
            }),
            (0, n.jsx)(i.mzw, {
                className: x.footer,
                children: (0, n.jsx)(i.zxk, {
                    onClick: s,
                    children: m.intl.string(m.t.cpT0Cg)
                })
            })
        ]
    });
}
function f(e) {
    let { location: t, age: s, activity: a } = e;
    return (0, n.jsxs)('ul', {
        className: x.targetList,
        children: [
            t &&
                (0, n.jsx)(j, {
                    icon: i.enf,
                    children: m.intl.string(m.t.xQSdPj)
                }),
            s &&
                (0, n.jsx)(j, {
                    icon: i.tBG,
                    children: m.intl.string(m.t.mYt7hY)
                }),
            a &&
                (0, n.jsx)(j, {
                    icon: i.iWm,
                    children: m.intl.string(m.t.XAsWxc)
                })
        ]
    });
}
function h(e) {
    let { targetedTraits: t } = e;
    return null != t ? (0, n.jsx)(f, { ...t }) : null;
}
function j(e) {
    let { icon: t, children: s } = e;
    return (0, n.jsxs)(i.Text, {
        variant: 'text-sm/medium',
        tag: 'li',
        className: x.targetItem,
        children: [
            (0, n.jsx)(t, {
                size: 'xs',
                color: 'currentColor'
            }),
            s
        ]
    });
}
