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
    E = n(536687),
    g = n(46140),
    O = n(388032),
    h = n(835338);
let b = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function S(e) {
    var t, n, S, y;
    let { tooltipPosition: C } = e,
        { quest: _, sourceQuestContent: x, onClose: j } = o.useContext(E.VideoQuestModalContext),
        { enabled: T } = d.EO.useConfig({ location: g.dr.VIDEO_MODAL }),
        [D, P] = o.useState(!1),
        R = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        I = o.useRef(null == (t = _.userStatus) ? void 0 : t.completedAt),
        [N, w] = o.useState(!1),
        { completedRatio: A, completedRatioDisplay: k } = (0, c.I)(_),
        L = o.useMemo(() => m.r.build(_.config).defaultRewardName, [_]),
        M = (null == (n = _.userStatus) ? void 0 : n.completedAt) != null,
        V = (null == (S = _.userStatus) ? void 0 : S.claimedAt) != null,
        Z = O.intl.formatToPlainString(M && !V && T ? O.t.NRp4K4 : O.t["12IWP2"], { rewardName: L });
    o.useEffect(() => {
        var e, t;
        null == I.current && (null == (e = _.userStatus) ? void 0 : e.completedAt) != null && T && w(!0),
            (I.current = null == (t = _.userStatus) ? void 0 : t.completedAt);
    }, [null == (y = _.userStatus) ? void 0 : y.completedAt, T]);
    let F = (0, v.D)({
            quest: _,
            questContent: u.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: x,
            onClick: j,
            shouldShowShopIfAlreadyClaimed: !1,
        }),
        B = M && T;
    return (0, r.jsxs)("div", {
        className: h.progressWrapper,
        children: [
            M &&
                (0, r.jsx)(a.Fmz, {
                    importData: b,
                    className: h.confetti,
                    loop: !1,
                    autoplay: !1,
                    shouldAnimate: N && !R,
                }),
            (0, r.jsx)(i.u, {
                position: C,
                text: Z,
                onTooltipShow: () => {
                    P(!0);
                },
                onTooltipHide: () => {
                    P(!1);
                },
                children: (0, r.jsx)(a.P3F, {
                    className: h.progressCont,
                    style: B ? { cursor: "pointer" } : void 0,
                    onClick: (e) => {
                        B && F(e);
                    },
                    children: (0, r.jsx)(p.Z, {
                        quest: _,
                        size: 48,
                        percentComplete: A,
                        percentCompleteText: D ? k : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(f.Z, {
                            className: h.questProgressRewardTile,
                            quest: _,
                            questContent: u.jn.VIDEO_MODAL,
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
