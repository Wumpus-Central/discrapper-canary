n.d(t, { Z: () => C }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(442837),
    i = n(28664),
    a = n(481060),
    s = n(607070),
    c = n(49436),
    u = n(937797),
    d = n(968843),
    m = n(115179),
    f = n(836831),
    p = n(644646),
    v = n(969227),
    E = n(215113),
    g = n(324805),
    O = n(388032),
    h = n(559072);
let b = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function C(e) {
    var t, n, C, S;
    let { tooltipPosition: _ } = e,
        { quest: y, sourceQuestContent: x, onClose: j } = o.useContext(E.VideoQuestModalContext),
        { enabled: P } = u.EO.useConfig({ location: g.dr.VIDEO_MODAL }),
        [D, R] = o.useState(!1),
        T = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        I = o.useRef(null == (t = y.userStatus) ? void 0 : t.completedAt),
        [N, A] = o.useState(!1),
        w = (0, m.w8)(y.config),
        { completedRatio: L, completedRatioDisplay: k } = (0, d.I)(y),
        M = (null == (n = y.userStatus) ? void 0 : n.completedAt) != null,
        V = (null == (C = y.userStatus) ? void 0 : C.claimedAt) != null,
        Z = O.intl.formatToPlainString(M && !V && P ? O.t.NRp4K4 : O.t["12IWP2"], { rewardName: w });
    o.useEffect(() => {
        var e, t;
        null == I.current && (null == (e = y.userStatus) ? void 0 : e.completedAt) != null && P && A(!0),
            (I.current = null == (t = y.userStatus) ? void 0 : t.completedAt);
    }, [null == (S = y.userStatus) ? void 0 : S.completedAt, P]);
    let F = (0, v.D)({
            quest: y,
            questContent: c.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: x,
            onClick: j,
            shouldShowShopIfAlreadyClaimed: !1,
        }),
        B = M && P;
    return (0, r.jsxs)("div", {
        className: h.progressWrapper,
        children: [
            M &&
                (0, r.jsx)(a.Fmz, {
                    importData: b,
                    className: h.confetti,
                    loop: !1,
                    autoplay: !1,
                    shouldAnimate: N && !T,
                }),
            (0, r.jsx)(i.u, {
                position: _,
                text: Z,
                onTooltipShow: () => {
                    R(!0);
                },
                onTooltipHide: () => {
                    R(!1);
                },
                children: (0, r.jsx)(a.P3F, {
                    className: h.progressCont,
                    style: B ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        B && F(e);
                    },
                    children: (0, r.jsx)(f.Z, {
                        quest: y,
                        size: 48,
                        percentComplete: L,
                        percentCompleteText: D ? k : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(p.Z, {
                            className: h.questProgressRewardTile,
                            quest: y,
                            questContent: c.jn.VIDEO_MODAL,
                            autoplay: !1,
                            location: g.dr.VIDEO_MODAL,
                            sourceQuestContent: x,
                        }),
                    }),
                }),
            }),
        ],
    });
}
