n.d(t, { Z: () => E });
var r = n(54381),
    o = n(473749),
    l = n(692547),
    i = n(28664),
    a = n(481060),
    s = n(313481),
    c = n(49436),
    u = n(937797),
    d = n(115179),
    m = n(969227),
    f = n(215113),
    p = n(324805),
    v = n(388032);
function E() {
    var e, t, n;
    let { quest: E, sourceQuestContent: g, onClose: O } = o.useContext(f.VideoQuestModalContext),
        { enabled: h } = u.EO.useConfig({ location: p.dr.VIDEO_MODAL }),
        b = (0, s.tP)(E),
        C = null != (0, d.LM)(E.config),
        S = (0, m.D)({
            quest: E,
            questContent: c.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: g,
            onClick: O,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        _ =
            (null == (e = E.userStatus) ? void 0 : e.claimedAt) != null
                ? C
                    ? v.intl.string(v.t.WYchde)
                    : v.intl.string(v.t.vTgCWx)
                : v.intl.string(v.t.cfY4PE),
        y =
            (null == (t = E.userStatus) ? void 0 : t.completedAt) == null && h
                ? b
                    ? v.intl.string(v.t.NJ6Bnm)
                    : v.intl.string(v.t.USNO1K)
                : void 0;
    return (0, r.jsx)(i.u, {
        text: y,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Button, {
                variant: h ? "secondary" : "primary",
                fullWidth: !0,
                icon: ((e, t) => {
                    var n, r;
                    if (t && (null == (n = e.userStatus) ? void 0 : n.claimedAt) == null)
                        return {
                            type: "rive",
                            asset: a.ax1,
                            riveProps: {
                                dataBinding: {
                                    locked: (null == (r = e.userStatus) ? void 0 : r.completedAt) === null,
                                    fill: l.Z.colors.ICON_PRIMARY,
                                },
                            },
                        };
                })(E, h),
                onClick: S,
                text: _,
                disabled: (null == (n = E.userStatus) ? void 0 : n.completedAt) == null,
            }),
        }),
    });
}
