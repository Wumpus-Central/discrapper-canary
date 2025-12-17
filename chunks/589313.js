n.d(t, { Z: () => E });
var r = n(54381),
    o = n(473749),
    l = n(692547),
    i = n(28664),
    a = n(481060),
    s = n(49436),
    c = n(937797),
    u = n(968843),
    d = n(115179),
    m = n(969227),
    f = n(215113),
    p = n(324805),
    v = n(388032);
function E() {
    var e, t, n, E;
    let { quest: g, sourceQuestContent: O, onClose: h } = o.useContext(f.VideoQuestModalContext),
        { enabled: b } = c.EO.useConfig({ location: p.dr.VIDEO_MODAL }),
        S = (0, u.tP)(g),
        C = null != (0, d.LM)(g.config),
        _ = (0, m.D)({
            quest: g,
            questContent: s.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: O,
            onClick:
                (0, d.Bg)(g.config) ||
                ((0, d.xN)(g.config) && (null == (e = g.userStatus) ? void 0 : e.claimedAt) != null)
                    ? h
                    : void 0,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        y =
            (null == (t = g.userStatus) ? void 0 : t.claimedAt) != null
                ? C
                    ? v.intl.string(v.t.WYchde)
                    : v.intl.string(v.t.vTgCWx)
                : v.intl.string(v.t.cfY4PE),
        x =
            (null == (n = g.userStatus) ? void 0 : n.completedAt) == null && b
                ? S
                    ? v.intl.string(v.t.NJ6Bnm)
                    : v.intl.string(v.t.USNO1K)
                : void 0;
    return (0, r.jsx)(i.u, {
        text: x,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Button, {
                variant: b ? "secondary" : "primary",
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
                                    fill: l.Z.colors.ICON_STRONG,
                                },
                            },
                        };
                })(g, b),
                onClick: _,
                text: y,
                disabled: (null == (E = g.userStatus) ? void 0 : E.completedAt) == null,
            }),
        }),
    });
}
