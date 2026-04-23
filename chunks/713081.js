n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(827734),
    a = n(990078),
    r = n(818407),
    o = n(821609),
    d = n(775602),
    c = n(890687),
    u = n(92246),
    h = n(792620),
    A = n(793683),
    _ = n(985018);
function m(e) {
    let { quest: t, questContent: n, sourceQuestContent: m, onClose: g, size: p = "md" } = e,
        f = (0, c.LS)(t),
        E = (0, l.bG)([d.A], () => d.A.useReducedMotion),
        x = null != (0, u._Z)(t.config),
        I = (0, h.vv)(t),
        C = (0, A.v)({
            quest: t,
            questContent: n,
            sourceQuestContent: m,
            onCloseModal: g,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        b =
            t.userStatus?.claimedAt != null
                ? x
                    ? _.intl.string(_.t.WYchde)
                    : _.intl.string(_.t.vTgCWx)
                : _.intl.string(_.t.cfY4PE),
        N =
            t.userStatus?.completedAt == null
                ? f
                    ? _.intl.string(_.t.NJ6Bnm)
                    : I
                      ? _.intl.string(_.t.USNO1K)
                      : void 0
                : void 0;
    return (0, i.jsx)(a.m, {
        text: N,
        children: (0, i.jsx)("div", {
            children: (0, i.jsx)(o.$, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: r.V,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: e.userStatus?.completedAt === null,
                                    fill: s.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(t, E),
                onClick: C,
                text: b,
                disabled: t.userStatus?.completedAt == null,
                size: p,
            }),
        }),
    });
}
