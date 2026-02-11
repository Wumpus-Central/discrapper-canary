"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    l = n(775602),
    u = n(341915),
    c = n(890687),
    d = n(92246),
    _ = n(453384),
    f = n(646764),
    h = n(793683),
    p = n(717415),
    g = n(985018),
    E = n(500271);
let A = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));
function I(e) {
    let { tooltipPosition: t } = e,
        { quest: n, sourceQuestContent: I, onClose: T } = i.useContext(p.VideoQuestModalContext),
        [y, S] = i.useState(!1),
        v = (0, a.bG)([l.A], () => l.A.useReducedMotion),
        C = i.useRef(n.userStatus?.completedAt),
        [b, N] = i.useState(!1),
        R = (0, d.mq)(n.config),
        O = () => {
            S(!0);
        },
        D = () => {
            S(!1);
        },
        { completedRatio: L, completedRatioDisplay: w } = (0, c.O9)(n),
        x = n.userStatus?.completedAt != null,
        P = n.userStatus?.claimedAt != null,
        M = g.intl.formatToPlainString(x && !P ? g.t.NRp4K4 : g.t["12IWP2"], { rewardName: R });
    i.useEffect(() => {
        null == C.current && n.userStatus?.completedAt != null && N(!0), (C.current = n.userStatus?.completedAt);
    }, [n.userStatus?.completedAt]);
    let k = (0, h.v)({
        quest: n,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: I,
        onCloseModal: T,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, r.jsxs)("div", {
        className: E.Tr,
        children: [
            x && (0, r.jsx)(o.akl, { importData: A, className: E.t_, loop: !1, autoplay: !1, shouldAnimate: b && !v }),
            (0, r.jsx)(s.m, {
                position: t,
                text: M,
                onTooltipShow: O,
                onTooltipHide: D,
                children: (0, r.jsx)(o.DUT, {
                    className: E.md,
                    style: x ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        x && k(e);
                    },
                    children: (0, r.jsx)(_.A, {
                        quest: n,
                        size: 48,
                        percentComplete: L,
                        percentCompleteText: y ? w : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(f.A, {
                            className: E.vt,
                            quest: n,
                            questContent: u.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: I,
                        }),
                    }),
                }),
            }),
        ],
    });
}
