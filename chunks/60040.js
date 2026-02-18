n.d(t, { A: () => v });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(827734),
    a = n(990078),
    o = n(397927),
    u = n(775602),
    c = n(341915),
    d = n(890687),
    m = n(92246),
    p = n(793683),
    E = n(717415),
    f = n(985018);
function v() {
    let { quest: e, sourceQuestContent: t, onClose: n } = l.useContext(E.VideoQuestModalContext),
        v = (0, d.LS)(e),
        h = (0, i.bG)([u.A], () => u.A.useReducedMotion),
        g = null != (0, m._Z)(e.config),
        S = (0, p.v)({
            quest: e,
            questContent: c.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            onCloseModal: n,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        C =
            e.userStatus?.claimedAt != null
                ? g
                    ? f.intl.string(f.t.WYchde)
                    : f.intl.string(f.t.vTgCWx)
                : f.intl.string(f.t.cfY4PE),
        A = e.userStatus?.completedAt == null ? (v ? f.intl.string(f.t.NJ6Bnm) : f.intl.string(f.t.USNO1K)) : void 0;
    return (0, r.jsx)(a.m, {
        text: A,
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
                                    fill: s.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(e, h),
                onClick: S,
                text: C,
                disabled: e.userStatus?.completedAt == null,
            }),
        }),
    });
}
