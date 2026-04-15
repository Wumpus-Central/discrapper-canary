s.d(t, { A: () => S });
var n = s(627968),
    l = s(64700),
    i = s(311907),
    a = s(990078),
    o = s(397927),
    r = s(775602),
    u = s(773669),
    d = s(252424),
    c = s(341915),
    m = s(92246),
    x = s(453384),
    h = s(646764),
    g = s(793683),
    A = s(201257),
    C = s(985018),
    p = s(704558);
let v = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function S() {
    let {
            quest: e,
            sourceQuestContent: t,
            onClose: s,
            progressSec: S,
            targetSec: f,
        } = l.useContext(A.VideoQuestModalContext),
        [j, N] = l.useState(!1),
        O = (0, i.bG)([r.A], () => r.A.useReducedMotion),
        E = (0, i.bG)([u.default], () => u.default.locale),
        _ = l.useRef(e.userStatus?.completedAt),
        [M, T] = l.useState(!1),
        y = (0, m.mq)(e.config),
        V = e.userStatus?.completedAt != null,
        D = f > 0 ? Math.min(S / f, 0.99) : 0,
        P = V ? 1 : D,
        k = (0, d.l9)(E, P, { roundingMode: "floor" }),
        L = e.userStatus?.claimedAt != null,
        b = C.intl.formatToPlainString(V && !L ? C.t.NRp4K4 : C.t["12IWP2"], { rewardName: y });
    l.useEffect(() => {
        null == _.current && e.userStatus?.completedAt != null && T(!0), (_.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let I = (0, g.v)({
        quest: e,
        questContent: c.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: s,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, n.jsxs)("div", {
        className: p.Tr,
        children: [
            V && (0, n.jsx)(o.akl, { importData: v, className: p.t_, loop: !1, autoplay: !1, shouldAnimate: M && !O }),
            (0, n.jsx)(a.m, {
                position: "top",
                text: b,
                onTooltipShow: () => {
                    N(!0);
                },
                onTooltipHide: () => {
                    N(!1);
                },
                children: (0, n.jsx)(o.DUT, {
                    className: p.md,
                    style: V ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        V && I(e);
                    },
                    children: (0, n.jsx)(x.A, {
                        size: 48,
                        percentComplete: P,
                        overlayText: j ? k : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(h.A, {
                            fullWidth: !0,
                            quest: e,
                            questContent: c.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: t,
                        }),
                    }),
                }),
            }),
        ],
    });
}
