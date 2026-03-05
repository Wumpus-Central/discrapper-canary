"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    r = n(990078),
    a = n(397927),
    o = n(775602),
    c = n(890687),
    d = n(92246),
    u = n(792620),
    h = n(793683),
    A = n(985018);
function m(e) {
    let { quest: t, questContent: n, sourceQuestContent: m, onClose: p, size: g = "md" } = e,
        _ = (0, c.LS)(t),
        f = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        x = null != (0, d._Z)(t.config),
        C = (0, u.vv)(t),
        E = (0, h.v)({
            quest: t,
            questContent: n,
            sourceQuestContent: m,
            onCloseModal: p,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        I =
            t.userStatus?.claimedAt != null
                ? x
                    ? A.intl.string(A.t.WYchde)
                    : A.intl.string(A.t.vTgCWx)
                : A.intl.string(A.t.cfY4PE),
        N =
            t.userStatus?.completedAt == null
                ? _
                    ? A.intl.string(A.t.NJ6Bnm)
                    : C
                      ? A.intl.string(A.t.USNO1K)
                      : void 0
                : void 0;
    return (0, i.jsx)(r.m, {
        text: N,
        children: (0, i.jsx)("div", {
            children: (0, i.jsx)(a.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: a.Vs8,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: e.userStatus?.completedAt === null,
                                    fill: l.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(t, f),
                onClick: E,
                text: I,
                disabled: t.userStatus?.completedAt == null,
                size: g,
            }),
        }),
    });
}
