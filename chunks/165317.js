n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(442837),
    i = n(28664),
    a = n(481060),
    s = n(607070),
    c = n(509212),
    u = n(113434),
    d = n(497505),
    m = n(937797),
    p = n(472144),
    f = n(644646),
    v = n(969227),
    E = n(215113),
    g = n(46140),
    O = n(388032),
    h = n(124530);
let b = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));
function S(e) {
    var t, n, S, C;
    let { tooltipPosition: y } = e,
        { quest: _, sourceQuestContent: x, onClose: j } = o.useContext(E.VideoQuestModalContext),
        { enabled: D } = m.EO.useConfig({ location: g.dr.VIDEO_MODAL }),
        [P, T] = o.useState(!1),
        R = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        I = o.useRef(null == (t = _.userStatus) ? void 0 : t.completedAt),
        [N, A] = o.useState(!1),
        w = (0, c.w8)(_.config),
        { completedRatio: k, completedRatioDisplay: M } = (0, u.I)(_),
        L = (null == (n = _.userStatus) ? void 0 : n.completedAt) != null,
        V = (null == (S = _.userStatus) ? void 0 : S.claimedAt) != null,
        Z = O.intl.formatToPlainString(L && !V && D ? O.t.NRp4K4 : O.t["12IWP2"], { rewardName: w });
    o.useEffect(() => {
        var e, t;
        null == I.current && (null == (e = _.userStatus) ? void 0 : e.completedAt) != null && D && A(!0),
            (I.current = null == (t = _.userStatus) ? void 0 : t.completedAt);
    }, [null == (C = _.userStatus) ? void 0 : C.completedAt, D]);
    let F = (0, v.D)({
            quest: _,
            questContent: d.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: x,
            onClick: j,
            shouldShowShopIfAlreadyClaimed: !1,
        }),
        B = L && D;
    return (0, r.jsxs)("div", {
        className: h.progressWrapper,
        children: [
            L &&
                (0, r.jsx)(a.Fmz, {
                    importData: b,
                    className: h.confetti,
                    loop: !1,
                    autoplay: !1,
                    shouldAnimate: N && !R,
                }),
            (0, r.jsx)(i.u, {
                position: y,
                text: Z,
                onTooltipShow: () => {
                    T(!0);
                },
                onTooltipHide: () => {
                    T(!1);
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
                        percentComplete: k,
                        percentCompleteText: P ? M : void 0,
                        percentCompleteTextVariant: "text-sm/medium",
                        children: (0, r.jsx)(f.Z, {
                            className: h.questProgressRewardTile,
                            quest: _,
                            questContent: d.jn.VIDEO_MODAL,
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
