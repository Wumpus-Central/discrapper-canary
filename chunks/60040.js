n.d(t, {
    A: () => E,
});
var r = n(627968),
    l = n(64700),
    o = n(311907),
    i = n(827734),
    s = n(990078),
    a = n(397927),
    c = n(775602),
    u = n(341915),
    d = n(890687),
    f = n(92246),
    m = n(793683),
    p = n(717415),
    v = n(985018);

function E() {
    var e, t, n;
    let { quest: E, sourceQuestContent: g, onClose: h } = l.useContext(p.VideoQuestModalContext),
        b = (0, d.LS)(E),
        y = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        O = null != (0, f._Z)(E.config),
        S = (0, m.v)({
            quest: E,
            questContent: u.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: g,
            onCloseModal: h,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        _ =
            (null == (e = E.userStatus) ? void 0 : e.claimedAt) != null
                ? O
                    ? v.intl.string(v.t.WYchde)
                    : v.intl.string(v.t.vTgCWx)
                : v.intl.string(v.t.cfY4PE),
        C =
            (null == (t = E.userStatus) ? void 0 : t.completedAt) == null
                ? b
                    ? v.intl.string(v.t.NJ6Bnm)
                    : v.intl.string(v.t.USNO1K)
                : void 0;
    return (0, r.jsx)(s.m, {
        text: C,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    var n, r;
                    if ((null == (n = e.userStatus) ? void 0 : n.claimedAt) == null)
                        return {
                            type: "rive",
                            asset: a.Vs8,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: (null == (r = e.userStatus) ? void 0 : r.completedAt) === null,
                                    fill: i.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(E, y),
                onClick: S,
                text: _,
                disabled: (null == (n = E.userStatus) ? void 0 : n.completedAt) == null,
            }),
        }),
    });
}
