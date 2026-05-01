e.d(i, { A: () => A });
var l = e(627968);
e(64700);
var n = e(17928),
    s = e(661531),
    u = e(990078),
    a = e(242644),
    d = e(821609),
    c = e(775602),
    o = e(890687),
    r = e(801365),
    S = e(792620),
    p = e(793683),
    v = e(985018);
function A(t) {
    let { quest: i, questContent: e, sourceQuestContent: A, onClose: h, size: f = "md" } = t,
        g = (0, o.LS)(i),
        m = (0, n.bG)([c.A], () => c.A.useReducedMotion),
        C = null != (0, r._Z)(i.config),
        k = (0, S.vv)(i),
        x = (0, p.v)({
            quest: i,
            questContent: e,
            sourceQuestContent: A,
            onCloseModal: h,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        b =
            i.userStatus?.claimedAt != null
                ? C
                    ? v.intl.string(v.t.WYchde)
                    : v.intl.string(v.t.vTgCWx)
                : v.intl.string(v.t.cfY4PE),
        y =
            i.userStatus?.completedAt == null
                ? g
                    ? v.intl.string(v.t.NJ6Bnm)
                    : k
                      ? v.intl.string(v.t.USNO1K)
                      : void 0
                : void 0;
    return (0, l.jsx)(u.m, {
        text: y,
        children: (0, l.jsx)("div", {
            children: (0, l.jsx)(d.$, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((t, i) => {
                    if (t.userStatus?.claimedAt == null)
                        return {
                            type: "rive",
                            asset: a.V,
                            riveProps: {
                                withReducedMotion: "play",
                                dataBinding: {
                                    locked: t.userStatus?.completedAt === null,
                                    fill: s.A.colors.ICON_STRONG,
                                    reducedMotion: i,
                                },
                            },
                        };
                })(i, m),
                onClick: x,
                text: b,
                disabled: i.userStatus?.completedAt == null,
                size: f,
            }),
        }),
    });
}
