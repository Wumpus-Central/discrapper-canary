s.d(t, { A: () => v });
var n = s(627968),
    l = s(64700),
    i = s(311907),
    a = s(990078),
    o = s(397927),
    r = s(775602),
    u = s(341915),
    d = s(890687),
    c = s(92246),
    m = s(453384),
    x = s(646764),
    h = s(793683),
    C = s(201257),
    A = s(985018),
    p = s(369865);
let g = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function v() {
    let { quest: e, sourceQuestContent: t, onClose: s } = l.useContext(C.VideoQuestModalContext),
        [v, j] = l.useState(!1),
        f = (0, i.bG)([r.A], () => r.A.useReducedMotion),
        S = l.useRef(e.userStatus?.completedAt),
        [N, O] = l.useState(!1),
        E = (0, c.mq)(e.config),
        { completedRatio: _, completedRatioDisplay: M } = (0, d.O9)(e),
        T = e.userStatus?.completedAt != null,
        V = e.userStatus?.claimedAt != null,
        y = A.intl.formatToPlainString(T && !V ? A.t.NRp4K4 : A.t["12IWP2"], { rewardName: E });
    l.useEffect(() => {
        null == S.current && e.userStatus?.completedAt != null && O(!0), (S.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let D = (0, h.v)({
        quest: e,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: s,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, n.jsxs)("div", {
        className: p.Tr,
        children: [
            T && (0, n.jsx)(o.akl, { importData: g, className: p.t_, loop: !1, autoplay: !1, shouldAnimate: N && !f }),
            (0, n.jsx)(a.m, {
                position: "top",
                text: y,
                onTooltipShow: () => {
                    j(!0);
                },
                onTooltipHide: () => {
                    j(!1);
                },
                children: (0, n.jsx)(o.DUT, {
                    className: p.md,
                    style: T ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        T && D(e);
                    },
                    children: (0, n.jsx)(m.A, {
                        size: 48,
                        percentComplete: _,
                        percentCompleteText: v ? M : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(x.A, {
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
