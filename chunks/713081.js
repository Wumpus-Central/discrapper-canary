n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(827734),
    a = n(990078),
    r = n(397927),
    o = n(775602),
    c = n(890687),
    d = n(92246),
    u = n(792620),
    h = n(793683),
    A = n(985018);
function _(e) {
    let { quest: t, questContent: n, sourceQuestContent: _, onClose: m, size: g = "md" } = e,
        p = (0, c.LS)(t),
        f = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        x = null != (0, d._Z)(t.config),
        E = (0, u.vv)(t),
        I = (0, h.v)({
            quest: t,
            questContent: n,
            sourceQuestContent: _,
            onCloseModal: m,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        C =
            t.userStatus?.claimedAt != null
                ? x
                    ? A.intl.string(A.t.WYchde)
                    : A.intl.string(A.t.vTgCWx)
                : A.intl.string(A.t.cfY4PE),
        N =
            t.userStatus?.completedAt == null
                ? p
                    ? A.intl.string(A.t.NJ6Bnm)
                    : E
                      ? A.intl.string(A.t.USNO1K)
                      : void 0
                : void 0;
    return (0, i.jsx)(a.m, {
        text: N,
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
                                    fill: s.A.colors.ICON_STRONG,
                                    reducedMotion: t,
                                },
                            },
                        };
                })(t, f),
                onClick: I,
                text: C,
                disabled: t.userStatus?.completedAt == null,
                size: g,
            }),
        }),
    });
}
