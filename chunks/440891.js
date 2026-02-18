n.d(t, { A: () => S });
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
    E = n(793683),
    f = n(717415),
    v = n(985018),
    h = n(500271);
let g = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function S() {
    let { quest: e, sourceQuestContent: t, onClose: n } = l.useContext(f.VideoQuestModalContext),
        [S, C] = l.useState(!1),
        A = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        x = l.useRef(e.userStatus?.completedAt),
        [_, b] = l.useState(!1),
        T = (0, d.mq)(e.config),
        { completedRatio: y, completedRatioDisplay: N } = (0, c.O9)(e),
        D = e.userStatus?.completedAt != null,
        L = e.userStatus?.claimedAt != null,
        I = v.intl.formatToPlainString(D && !L ? v.t.NRp4K4 : v.t["12IWP2"], { rewardName: T });
    l.useEffect(() => {
        null == x.current && e.userStatus?.completedAt != null && b(!0), (x.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let j = (0, E.v)({
        quest: e,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: n,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, r.jsxs)("div", {
        className: h.Tr,
        children: [
            D && (0, r.jsx)(a.akl, { importData: g, className: h.t_, loop: !1, autoplay: !1, shouldAnimate: _ && !A }),
            (0, r.jsx)(s.m, {
                position: "top",
                text: I,
                onTooltipShow: () => {
                    C(!0);
                },
                onTooltipHide: () => {
                    C(!1);
                },
                children: (0, r.jsx)(a.DUT, {
                    className: h.md,
                    style: D ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        D && j(e);
                    },
                    children: (0, r.jsx)(m.A, {
                        size: 48,
                        percentComplete: y,
                        percentCompleteText: S ? N : void 0,
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
