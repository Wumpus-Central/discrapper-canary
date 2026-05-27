s.d(t, { A: () => g });
var n = s(627968);
s(64700);
var l = s(17928),
    i = s(661531),
    a = s(990078),
    o = s(242644),
    r = s(821609),
    u = s(775602),
    c = s(31587),
    d = s(801365),
    m = s(792620),
    x = s(793683),
    h = s(375708);
function g(e) {
    let { quest: t, questContent: s, sourceQuestContent: g, onClose: p, size: C = "md" } = e,
        S = (0, c.LS)(t),
        f = (0, l.bG)([u.A], () => u.A.useReducedMotion),
        A = null != (0, d._Z)(t.config),
        v = (0, m.vv)(t),
        j = (0, x.v)({
            quest: t,
            questContent: s,
            sourceQuestContent: g,
            onCloseModal: p,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        N =
            t.userStatus?.claimedAt != null
                ? A
                    ? h.intl.string(h.t.WYchde)
                    : h.intl.string(h.t.vTgCWx)
                : h.intl.string(h.t.cfY4PE),
        O =
            t.userStatus?.completedAt == null
                ? S
                    ? h.intl.string(h.t.NJ6Bnm)
                    : v
                      ? h.intl.string(h.t.USNO1K)
                      : void 0
                : void 0;
    return (0, n.jsx)(a.m, {
        text: O,
        children: (0, n.jsx)("div", {
            children: (0, n.jsx)(r.$, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: o.V,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: e.userStatus?.completedAt === null,
                                    fill: i.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(t, f),
                onClick: j,
                text: N,
                disabled: t.userStatus?.completedAt == null,
                size: C,
            }),
        }),
    });
}
