n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(442837),
    i = n(28664),
    a = n(481060),
    s = n(607070),
    c = n(113434),
    u = n(497505),
    d = n(937797),
    m = n(566078),
    p = n(472144),
    f = n(644646),
    v = n(969227),
    g = n(215113),
    E = n(46140),
    O = n(388032),
    b = n(559072);
let h = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function S(e) {
    var t, n, S, C;
    let { tooltipPosition: y } = e,
        { quest: _, sourceQuestContent: x, onClose: j } = o.useContext(g.VideoQuestModalContext),
        { enabled: D } = d.EO.useConfig({ location: E.dr.VIDEO_MODAL }),
        [T, P] = o.useState(!1),
        R = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        I = o.useRef(null == (t = _.userStatus) ? void 0 : t.completedAt),
        [N, w] = o.useState(!1),
        { completedRatio: A, completedRatioDisplay: k } = (0, c.I)(_),
        M = o.useMemo(() => m.r.build(_.config).defaultRewardName, [_]),
        L = (null == (n = _.userStatus) ? void 0 : n.completedAt) != null,
        V = (null == (S = _.userStatus) ? void 0 : S.claimedAt) != null,
        Z = O.intl.formatToPlainString(L && !V && D ? O.t.NRp4K4 : O.t["12IWP2"], { rewardName: M });
    o.useEffect(() => {
        var e, t;
        null == I.current && (null == (e = _.userStatus) ? void 0 : e.completedAt) != null && D && w(!0),
            (I.current = null == (t = _.userStatus) ? void 0 : t.completedAt);
    }, [null == (C = _.userStatus) ? void 0 : C.completedAt, D]);
    let F = (0, v.D)({
            quest: _,
            questContent: u.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: x,
            onClick: j,
            shouldShowShopIfAlreadyClaimed: !1,
        }),
        B = L && D;
    return (0, r.jsxs)("div", {
        className: b.progressWrapper,
        children: [
            L &&
                (0, r.jsx)(a.Fmz, {
                    importData: h,
                    className: b.confetti,
                    loop: !1,
                    autoplay: !1,
                    shouldAnimate: N && !R,
                }),
            (0, r.jsx)(i.u, {
                position: y,
                text: Z,
                onTooltipShow: () => {
                    P(!0);
                },
                onTooltipHide: () => {
                    P(!1);
                },
                children: (0, r.jsx)(a.P3F, {
                    className: b.progressCont,
                    style: B ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        B && F(e);
                    },
                    children: (0, r.jsx)(p.Z, {
                        quest: _,
                        size: 48,
                        percentComplete: A,
                        percentCompleteText: T ? k : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(f.Z, {
                            className: b.questProgressRewardTile,
                            quest: _,
                            questContent: u.jn.VIDEO_MODAL,
                            autoplay: !1,
                            location: E.dr.VIDEO_MODAL,
                            sourceQuestContent: x,
                        }),
                    }),
                }),
            }),
        ],
    });
}
