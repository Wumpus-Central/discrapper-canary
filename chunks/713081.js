n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(827734),
    a = n(990078),
    s = n(397927),
    o = n(775602),
    d = n(890687),
    c = n(92246),
    u = n(792620),
    A = n(793683),
    h = n(985018);
function _(e) {
    let { quest: t, questContent: n, sourceQuestContent: _, onClose: m } = e,
        p = (0, d.LS)(t),
        g = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        E = null != (0, c._Z)(t.config),
        I = (0, u.vv)(t),
        f = (0, A.v)({
            quest: t,
            questContent: n,
            sourceQuestContent: _,
            onCloseModal: m,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        C =
            t.userStatus?.claimedAt != null
                ? E
                    ? h.intl.string(h.t.WYchde)
                    : h.intl.string(h.t.vTgCWx)
                : h.intl.string(h.t.cfY4PE),
        T =
            t.userStatus?.completedAt == null
                ? p
                    ? h.intl.string(h.t.NJ6Bnm)
                    : I
                      ? h.intl.string(h.t.USNO1K)
                      : h.intl.string(h.t["9MnkEh"])
                : void 0;
    return (0, i.jsx)(a.m, {
        text: T,
        children: (0, i.jsx)("div", {
            children: (0, i.jsx)(s.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: s.Vs8,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: e.userStatus?.completedAt === null,
                                    fill: l.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(t, g),
                onClick: f,
                text: C,
                disabled: t.userStatus?.completedAt == null,
            }),
        }),
    });
}
