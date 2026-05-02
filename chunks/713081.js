"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(661531),
    a = n(990078),
    o = n(242644),
    l = n(821609),
    u = n(775602),
    c = n(31587),
    d = n(801365),
    _ = n(792620),
    f = n(793683),
    h = n(375708);
function p(e) {
    let { quest: t, questContent: n, sourceQuestContent: p, onClose: E, size: m = "md" } = e,
        g = (0, c.LS)(t),
        A = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        I = null != (0, d._Z)(t.config),
        T = (0, _.vv)(t),
        S = (0, f.v)({
            quest: t,
            questContent: n,
            sourceQuestContent: p,
            onCloseModal: E,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        N =
            t.userStatus?.claimedAt != null
                ? I
                    ? h.intl.string(h.t.WYchde)
                    : h.intl.string(h.t.vTgCWx)
                : h.intl.string(h.t.cfY4PE),
        y =
            t.userStatus?.completedAt == null
                ? g
                    ? h.intl.string(h.t.NJ6Bnm)
                    : T
                      ? h.intl.string(h.t.USNO1K)
                      : void 0
                : void 0;
    return (0, i.jsx)(a.m, {
        text: y,
        children: (0, i.jsx)("div", {
            children: (0, i.jsx)(l.$, {
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
                                    fill: s.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(t, A),
                onClick: S,
                text: N,
                disabled: t.userStatus?.completedAt == null,
                size: m,
            }),
        }),
    });
}
