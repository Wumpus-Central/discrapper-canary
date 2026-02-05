n.d(t, { A: () => C });
var r = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(990078),
    a = n(397927),
    o = n(775602),
    u = n(341915),
    c = n(890687),
    d = n(92246),
    m = n(453384),
    E = n(646764),
    f = n(793683),
    p = n(717415),
    v = n(985018),
    h = n(500271);
let _ = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function C(e) {
    let { tooltipPosition: t } = e,
        { quest: n, sourceQuestContent: C, onClose: g } = s.useContext(p.VideoQuestModalContext),
        [S, A] = s.useState(!1),
        x = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        T = s.useRef(n.userStatus?.completedAt),
        [b, D] = s.useState(!1),
        N = (0, d.mq)(n.config),
        { completedRatio: y, completedRatioDisplay: I } = (0, c.O9)(n),
        L = n.userStatus?.completedAt != null,
        R = n.userStatus?.claimedAt != null,
        M = v.intl.formatToPlainString(L && !R ? v.t.NRp4K4 : v.t["12IWP2"], { rewardName: N });
    s.useEffect(() => {
        null == T.current && n.userStatus?.completedAt != null && D(!0), (T.current = n.userStatus?.completedAt);
    }, [n.userStatus?.completedAt]);
    let j = (0, f.v)({
        quest: n,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: C,
        onCloseModal: g,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, r.jsxs)("div", {
        className: h.Tr,
        children: [
            L && (0, r.jsx)(a.akl, { importData: _, className: h.t_, loop: !1, autoplay: !1, shouldAnimate: b && !x }),
            (0, r.jsx)(l.m, {
                position: t,
                text: M,
                onTooltipShow: () => {
                    A(!0);
                },
                onTooltipHide: () => {
                    A(!1);
                },
                children: (0, r.jsx)(a.DUT, {
                    className: h.md,
                    style: L ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        L && j(e);
                    },
                    children: (0, r.jsx)(m.A, {
                        quest: n,
                        size: 48,
                        percentComplete: y,
                        percentCompleteText: S ? I : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(E.A, {
                            className: h.vt,
                            quest: n,
                            questContent: u.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: C,
                        }),
                    }),
                }),
            }),
        ],
    });
}
