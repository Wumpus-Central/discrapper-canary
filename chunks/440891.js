n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    o = n(311907),
    i = n(990078),
    s = n(397927),
    a = n(775602),
    c = n(341915),
    u = n(890687),
    d = n(92246),
    f = n(453384),
    m = n(646764),
    p = n(793683),
    v = n(717415),
    E = n(985018),
    g = n(500271);
let h = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function b(e) {
    var t, n, b, y;
    let { tooltipPosition: O } = e,
        { quest: S, sourceQuestContent: _, onClose: C } = l.useContext(v.VideoQuestModalContext),
        [x, A] = l.useState(!1),
        j = (0, o.bG)([a.A], () => a.A.useReducedMotion),
        T = l.useRef(null == (t = S.userStatus) ? void 0 : t.completedAt),
        [D, w] = l.useState(!1),
        N = (0, d.mq)(S.config),
        { completedRatio: P, completedRatioDisplay: I } = (0, u.O9)(S),
        L = (null == (n = S.userStatus) ? void 0 : n.completedAt) != null,
        R = (null == (b = S.userStatus) ? void 0 : b.claimedAt) != null,
        k = E.intl.formatToPlainString(L && !R ? E.t.NRp4K4 : E.t["12IWP2"], {
            rewardName: N,
        });
    l.useEffect(() => {
        var e, t;
        null == T.current && (null == (e = S.userStatus) ? void 0 : e.completedAt) != null && w(!0),
            (T.current = null == (t = S.userStatus) ? void 0 : t.completedAt);
    }, [null == (y = S.userStatus) ? void 0 : y.completedAt]);
    let M = (0, p.v)({
        quest: S,
        questContent: c.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: _,
        onCloseModal: C,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, r.jsxs)("div", {
        className: g.Tr,
        children: [
            L &&
                (0, r.jsx)(s.akl, {
                    importData: h,
                    className: g.t_,
                    loop: !1,
                    autoplay: !1,
                    shouldAnimate: D && !j,
                }),
            (0, r.jsx)(i.m, {
                position: O,
                text: k,
                onTooltipShow: () => {
                    A(!0);
                },
                onTooltipHide: () => {
                    A(!1);
                },
                children: (0, r.jsx)(s.DUT, {
                    className: g.md,
                    style: L
                        ? {
                              cursor: "pointer",
                          }
                        : void 0,
                    onClick: (e) => {
                        L && M(e);
                    },
                    children: (0, r.jsx)(f.A, {
                        quest: S,
                        size: 48,
                        percentComplete: P,
                        percentCompleteText: x ? I : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(m.A, {
                            className: g.vt,
                            quest: S,
                            questContent: c.uF.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: _,
                        }),
                    }),
                }),
            }),
        ],
    });
}
