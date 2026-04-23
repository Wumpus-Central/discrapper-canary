n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(661531),
    r = n(990078),
    a = n(242644),
    o = n(821609),
    d = n(775602),
    c = n(890687),
    u = n(801365),
    h = n(792620),
    A = n(793683),
    _ = n(985018);
function g(e) {
    let { quest: t, questContent: n, sourceQuestContent: g, onClose: m, size: p = "md" } = e,
        f = (0, c.LS)(t),
        E = (0, l.bG)([d.A], () => d.A.useReducedMotion),
        C = null != (0, u._Z)(t.config),
        x = (0, h.vv)(t),
        I = (0, A.v)({
            quest: t,
            questContent: n,
            sourceQuestContent: g,
            onCloseModal: m,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        b =
            t.userStatus?.claimedAt != null
                ? C
                    ? _.intl.string(_.t.WYchde)
                    : _.intl.string(_.t.vTgCWx)
                : _.intl.string(_.t.cfY4PE),
        S =
            t.userStatus?.completedAt == null
                ? f
                    ? _.intl.string(_.t.NJ6Bnm)
                    : x
                      ? _.intl.string(_.t.USNO1K)
                      : void 0
                : void 0;
    return (0, i.jsx)(r.m, {
        text: S,
        children: (0, i.jsx)("div", {
            children: (0, i.jsx)(o.$, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: a.V,
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
                onClick: I,
                text: b,
                disabled: t.userStatus?.completedAt == null,
                size: p,
            }),
        }),
    });
}
