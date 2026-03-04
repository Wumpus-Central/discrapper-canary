"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    a = n(990078),
    r = n(397927),
    o = n(775602),
    c = n(890687),
    d = n(92246),
    u = n(792620),
    h = n(793683),
    A = n(985018);
function p(e) {
    let { quest: t, questContent: n, sourceQuestContent: p, onClose: m } = e,
        g = (0, c.LS)(t),
        _ = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        f = null != (0, d._Z)(t.config),
        x = (0, u.vv)(t),
        C = (0, h.v)({
            quest: t,
            questContent: n,
            sourceQuestContent: p,
            onCloseModal: m,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        E =
            t.userStatus?.claimedAt != null
                ? f
                    ? A.intl.string(A.t.WYchde)
                    : A.intl.string(A.t.vTgCWx)
                : A.intl.string(A.t.cfY4PE),
        I =
            t.userStatus?.completedAt == null
                ? g
                    ? A.intl.string(A.t.NJ6Bnm)
                    : x
                      ? A.intl.string(A.t.USNO1K)
                      : A.intl.string(A.t["9MnkEh"])
                : void 0;
    return (0, i.jsx)(a.m, {
        text: I,
        children: (0, i.jsx)("div", {
            children: (0, i.jsx)(r.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: r.Vs8,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: e.userStatus?.completedAt === null,
                                    fill: l.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(t, _),
                onClick: C,
                text: E,
                disabled: t.userStatus?.completedAt == null,
            }),
        }),
    });
}
