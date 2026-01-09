n.d(t, { Z: () => p });
var r = n(54381),
    o = n(473749),
    l = n(692547),
    i = n(28664),
    a = n(481060),
    s = n(49436),
    c = n(968843),
    u = n(115179),
    d = n(969227),
    m = n(215113),
    f = n(388032);
function p() {
    var e, t, n;
    let { quest: p, sourceQuestContent: v, onClose: E } = o.useContext(m.VideoQuestModalContext),
        g = (0, c.tP)(p),
        h = null != (0, u.LM)(p.config),
        C = (0, d.D)({
            quest: p,
            questContent: s.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: v,
            onCloseModal: E,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        S =
            (null == (e = p.userStatus) ? void 0 : e.claimedAt) != null
                ? h
                    ? f.intl.string(f.t.WYchde)
                    : f.intl.string(f.t.vTgCWx)
                : f.intl.string(f.t.cfY4PE),
        b =
            (null == (t = p.userStatus) ? void 0 : t.completedAt) == null
                ? g
                    ? f.intl.string(f.t.NJ6Bnm)
                    : f.intl.string(f.t.USNO1K)
                : void 0;
    return (0, r.jsx)(i.u, {
        text: b,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e) => {
                    var t, n;
                    if ((null == (t = e.userStatus) ? void 0 : t.claimedAt) == null)
                        return {
                            type: "rive",
                            asset: a.ax1,
                            riveProps: {
                                dataBinding: {
                                    locked: (null == (n = e.userStatus) ? void 0 : n.completedAt) === null,
                                    fill: l.Z.colors.ICON_STRONG,
                                },
                            },
                        };
                })(p),
                onClick: C,
                text: S,
                disabled: (null == (n = p.userStatus) ? void 0 : n.completedAt) == null,
            }),
        }),
    });
}
