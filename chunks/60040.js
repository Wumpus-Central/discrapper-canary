n.d(t, { A: () => v });
var r = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(827734),
    a = n(990078),
    o = n(397927),
    u = n(775602),
    c = n(341915),
    d = n(890687),
    m = n(92246),
    E = n(793683),
    f = n(717415),
    p = n(985018);
function v() {
    let { quest: e, sourceQuestContent: t, onClose: n } = s.useContext(f.VideoQuestModalContext),
        v = (0, d.LS)(e),
        h = (0, i.bG)([u.A], () => u.A.useReducedMotion),
        _ = null != (0, m._Z)(e.config),
        C = (0, E.v)({
            quest: e,
            questContent: c.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            onCloseModal: n,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        g =
            e.userStatus?.claimedAt != null
                ? _
                    ? p.intl.string(p.t.WYchde)
                    : p.intl.string(p.t.vTgCWx)
                : p.intl.string(p.t.cfY4PE),
        S = e.userStatus?.completedAt == null ? (v ? p.intl.string(p.t.NJ6Bnm) : p.intl.string(p.t.USNO1K)) : void 0;
    return (0, r.jsx)(a.m, {
        text: S,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(o.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: o.Vs8,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: e.userStatus?.completedAt === null,
                                    fill: l.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(e, h),
                onClick: C,
                text: g,
                disabled: e.userStatus?.completedAt == null,
            }),
        }),
    });
}
