n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(442837),
    i = n(28664),
    a = n(481060),
    s = n(607070),
    c = n(49436),
    u = n(968843),
    d = n(115179),
    m = n(836831),
    f = n(644646),
    p = n(969227),
    v = n(215113),
    E = n(388032),
    g = n(969937);
let h = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function C(e) {
    var t, n, C, S;
    let { tooltipPosition: b } = e,
        { quest: O, sourceQuestContent: _, onClose: x } = o.useContext(v.VideoQuestModalContext),
        [y, j] = o.useState(!1),
        P = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        D = o.useRef(null == (t = O.userStatus) ? void 0 : t.completedAt),
        [T, R] = o.useState(!1),
        N = (0, d.w8)(O.config),
        { completedRatio: I, completedRatioDisplay: A } = (0, u.I)(O),
        w = (null == (n = O.userStatus) ? void 0 : n.completedAt) != null,
        k = (null == (C = O.userStatus) ? void 0 : C.claimedAt) != null,
        L = E.intl.formatToPlainString(w && !k ? E.t.NRp4K4 : E.t["12IWP2"], { rewardName: N });
    o.useEffect(() => {
        var e, t;
        null == D.current && (null == (e = O.userStatus) ? void 0 : e.completedAt) != null && R(!0),
            (D.current = null == (t = O.userStatus) ? void 0 : t.completedAt);
    }, [null == (S = O.userStatus) ? void 0 : S.completedAt]);
    let M = (0, p.D)({
        quest: O,
        questContent: c.jn.QUEST_HOME_DESKTOP,
        sourceQuestContent: _,
        onCloseModal: x,
        shouldShowShopIfAlreadyClaimed: !1,
    });
    return (0, r.jsxs)("div", {
        className: g.progressWrapper,
        children: [
            w &&
                (0, r.jsx)(a.Fmz, {
                    importData: h,
                    className: g.confetti,
                    loop: !1,
                    autoplay: !1,
                    shouldAnimate: T && !P,
                }),
            (0, r.jsx)(i.u, {
                position: b,
                text: L,
                onTooltipShow: () => {
                    j(!0);
                },
                onTooltipHide: () => {
                    j(!1);
                },
                children: (0, r.jsx)(a.P3F, {
                    className: g.progressCont,
                    style: w ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        w && M(e);
                    },
                    children: (0, r.jsx)(m.Z, {
                        quest: O,
                        size: 48,
                        percentComplete: I,
                        percentCompleteText: y ? A : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(f.Z, {
                            className: g.questProgressRewardTile,
                            quest: O,
                            questContent: c.jn.VIDEO_MODAL,
                            autoplay: !1,
                            sourceQuestContent: _,
                        }),
                    }),
                }),
            }),
        ],
    });
}
