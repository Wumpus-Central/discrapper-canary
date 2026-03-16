n.d(t, { A: () => g });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(775602),
    u = n(341915),
    c = n(890687),
    d = n(92246),
    m = n(453384),
    p = n(646764),
    f = n(793683),
    E = n(752231),
    h = n(985018),
    v = n(245327);
let x = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function g() {
    let { quest: e, sourceQuestContent: t, onClose: n } = l.useContext(E.VideoQuestModalContext),
        [g, S] = l.useState(!1),
        A = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        C = l.useRef(e.userStatus?.completedAt),
        [_, b] = l.useState(!1),
        y = (0, d.mq)(e.config),
        { completedRatio: T, completedRatioDisplay: N } = (0, c.O9)(e),
        D = e.userStatus?.completedAt != null,
        R = e.userStatus?.claimedAt != null,
        L = h.intl.formatToPlainString(D && !R ? h.t.NRp4K4 : h.t["12IWP2"], { rewardName: y });
    l.useEffect(() => {
        null == C.current && e.userStatus?.completedAt != null && b(!0), (C.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let M = (0, f.v)({
        quest: e,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: n,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, r.jsxs)("div", {
        className: v.Tr,
        children: [
            D && (0, r.jsx)(a.akl, { importData: x, className: v.t_, loop: !1, autoplay: !1, shouldAnimate: _ && !A }),
            (0, r.jsx)(s.m, {
                position: "top",
                text: L,
                onTooltipShow: () => {
                    S(!0);
                },
                onTooltipHide: () => {
                    S(!1);
                },
                children: (0, r.jsx)(a.DUT, {
                    className: v.md,
                    style: D ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        D && M(e);
                    },
                    children: (0, r.jsx)(m.A, {
                        size: 48,
                        percentComplete: T,
                        percentCompleteText: g ? N : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(p.A, {
                            fullWidth: !0,
                            quest: e,
                            questContent: u.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: t,
                        }),
                    }),
                }),
            }),
        ],
    });
}
