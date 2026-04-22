s.d(t, { A: () => f });
var n = s(627968),
    l = s(64700),
    i = s(311907),
    a = s(990078),
    o = s(604121),
    r = s(939249),
    u = s(775602),
    d = s(773669),
    c = s(252424),
    m = s(341915),
    x = s(92246),
    A = s(453384),
    h = s(646764),
    g = s(793683),
    p = s(201257),
    C = s(985018),
    S = s(693086);
let v = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));
function f() {
    let {
            quest: e,
            sourceQuestContent: t,
            onClose: s,
            progressSec: f,
            targetSec: j,
        } = l.useContext(p.VideoQuestModalContext),
        [N, O] = l.useState(!1),
        E = (0, i.bG)([u.A], () => u.A.useReducedMotion),
        M = (0, i.bG)([d.default], () => d.default.locale),
        _ = l.useRef(e.userStatus?.completedAt),
        [T, y] = l.useState(!1),
        D = (0, x.mq)(e.config),
        V = e.userStatus?.completedAt != null,
        P = j > 0 ? Math.min(f / j, 0.99) : 0,
        b = V ? 1 : P,
        k = (0, c.l9)(M, b, { roundingMode: "floor" }),
        I = e.userStatus?.claimedAt != null,
        L = C.intl.formatToPlainString(V && !I ? C.t.NRp4K4 : C.t["12IWP2"], { rewardName: D });
    l.useEffect(() => {
        null == _.current && e.userStatus?.completedAt != null && y(!0), (_.current = e.userStatus?.completedAt);
    }, [e.userStatus?.completedAt]);
    let Q = (0, g.v)({
        quest: e,
        questContent: m.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: s,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, n.jsxs)("div", {
        className: S.Tr,
        children: [
            V && (0, n.jsx)(o.a, { importData: v, className: S.t_, loop: !1, autoplay: !1, shouldAnimate: T && !E }),
            (0, n.jsx)(a.m, {
                position: "top",
                text: L,
                onTooltipShow: () => {
                    O(!0);
                },
                onTooltipHide: () => {
                    O(!1);
                },
                children: (0, n.jsx)(r.D, {
                    className: S.md,
                    style: V ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        V && Q(e);
                    },
                    children: (0, n.jsx)(A.A, {
                        size: 48,
                        percentComplete: b,
                        overlayText: N ? k : void 0,
                        overlayTextVariant: "text-sm/medium",
                        children: (0, n.jsx)(h.A, {
                            fullWidth: !0,
                            quest: e,
                            questContent: m.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: t,
                        }),
                    }),
                }),
            }),
        ],
    });
}
