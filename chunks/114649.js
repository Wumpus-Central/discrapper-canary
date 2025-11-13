n.d(t, { Z: () => g });
var r = n(951288),
    o = n(647438),
    l = n(692547),
    i = n(28664),
    a = n(481060),
    s = n(509212),
    c = n(113434),
    u = n(497505),
    d = n(937797),
    m = n(969227),
    p = n(536687),
    f = n(46140),
    v = n(388032);
function g() {
    var e, t, n;
    let { quest: g, sourceQuestContent: E, onClose: O } = o.useContext(p.VideoQuestModalContext),
        { enabled: b } = d.EO.useConfig({ location: f.dr.VIDEO_MODAL }),
        h = (0, c.tP)(g),
        S = null != (0, s.LM)(g.config),
        C = (0, m.D)({
            quest: g,
            questContent: u.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: E,
            onClick: O,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        y =
            (null == (e = g.userStatus) ? void 0 : e.claimedAt) != null
                ? S
                    ? v.intl.string(v.t.WYchde)
                    : v.intl.string(v.t.vTgCWx)
                : v.intl.string(v.t.cfY4PE),
        _ =
            (null == (t = g.userStatus) ? void 0 : t.completedAt) == null && b
                ? h
                    ? v.intl.string(v.t.NJ6Bnm)
                    : v.intl.string(v.t.USNO1K)
                : void 0;
    return (0, r.jsx)(i.u, {
        text: _,
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
                                    fill: l.Z.colors.ICON_PRIMARY,
                                },
                            },
                        };
                })(g, b),
                onClick: C,
                text: y,
                disabled: (null == (n = g.userStatus) ? void 0 : n.completedAt) == null,
            }),
        }),
    });
}
