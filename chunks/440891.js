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
function I() {
    let { quest: e, sourceQuestContent: t, onClose: n } = i.useContext(p.VideoQuestModalContext),
        [I, T] = i.useState(!1),
        y = (0, a.bG)([l.A], () => l.A.useReducedMotion),
        S = i.useRef(e.userStatus?.completedAt),
        [v, C] = i.useState(!1),
        b = (0, d.mq)(e.config),
        N = () => {
            T(!0);
        },
        R = () => {
            T(!1);
        },
        { completedRatio: O, completedRatioDisplay: D } = (0, c.O9)(e),
        L = e.userStatus?.completedAt != null,
        w = e.userStatus?.claimedAt != null,
        x = g.intl.formatToPlainString(L && !w ? g.t.NRp4K4 : g.t["12IWP2"], { rewardName: b });
    i.useEffect(() => {
        null == S.current && e.userStatus?.completedAt != null && C(!0), (S.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let P = (0, h.v)({
        quest: e,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: n,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, r.jsxs)("div", {
        className: E.Tr,
        children: [
            L && (0, r.jsx)(o.akl, { importData: A, className: E.t_, loop: !1, autoplay: !1, shouldAnimate: v && !y }),
            (0, r.jsx)(s.m, {
                position: "top",
                text: x,
                onTooltipShow: N,
                onTooltipHide: R,
                children: (0, r.jsx)(o.DUT, {
                    className: E.md,
                    style: L ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        L && P(e);
                    },
                    children: (0, r.jsx)(_.A, {
                        size: 48,
                        percentComplete: O,
                        percentCompleteText: I ? D : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(f.A, {
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
