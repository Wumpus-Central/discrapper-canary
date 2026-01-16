n.d(t, { Z: () => E });
var r = n(54381),
    o = n(473749),
    l = n(442837),
    i = n(692547),
    a = n(28664),
    s = n(481060),
    c = n(607070),
    u = n(49436),
    d = n(968843),
    m = n(115179),
    f = n(969227),
    p = n(215113),
    v = n(388032);
function E() {
    var e, t, n;
    let { quest: E, sourceQuestContent: g, onClose: h } = o.useContext(p.VideoQuestModalContext),
        C = (0, d.tP)(E),
        S = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        b = null != (0, m.LM)(E.config),
        O = (0, f.D)({
            quest: E,
            questContent: u.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: g,
            onCloseModal: h,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        _ =
            (null == (e = E.userStatus) ? void 0 : e.claimedAt) != null
                ? b
                    ? v.intl.string(v.t.WYchde)
                    : v.intl.string(v.t.vTgCWx)
                : v.intl.string(v.t.cfY4PE),
        y =
            (null == (t = E.userStatus) ? void 0 : t.completedAt) == null
                ? C
                    ? v.intl.string(v.t.NJ6Bnm)
                    : v.intl.string(v.t.USNO1K)
                : void 0;
    return (0, r.jsx)(a.u, {
        text: y,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(s.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    var n, r;
                    if ((null == (n = e.userStatus) ? void 0 : n.claimedAt) == null)
                        return {
                            type: "rive",
                            asset: s.ax1,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: (null == (r = e.userStatus) ? void 0 : r.completedAt) === null,
                                    fill: i.Z.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(E, S),
                onClick: O,
                text: _,
                disabled: (null == (n = E.userStatus) ? void 0 : n.completedAt) == null,
            }),
        }),
    });
}
