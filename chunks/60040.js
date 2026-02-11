"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(827734),
    o = n(990078),
    l = n(397927),
    u = n(775602),
    c = n(341915),
    d = n(890687),
    _ = n(92246),
    f = n(793683),
    h = n(717415),
    p = n(985018);
let g = (e, t) => {
    if (e.userStatus?.claimedAt == null)
        return {
            type: "rive",
            asset: l.Vs8,
            riveProps: {
                withReducedMotion: "play",
                dataBinding: {
                    locked: e.userStatus?.completedAt === null,
                    fill: s.A.colors.ICON_STRONG,
                    reducedMotion: t,
                },
            },
        };
};
function E() {
    let { quest: e, sourceQuestContent: t, onClose: n } = i.useContext(h.VideoQuestModalContext),
        s = (0, d.LS)(e),
        E = (0, a.bG)([u.A], () => u.A.useReducedMotion),
        A = null != (0, _._Z)(e.config),
        I = (0, f.v)({
            quest: e,
            questContent: c.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            onCloseModal: n,
            shouldShowShopIfAlreadyClaimed: !0,
        }),
        T =
            e.userStatus?.claimedAt != null
                ? A
                    ? p.intl.string(p.t.WYchde)
                    : p.intl.string(p.t.vTgCWx)
                : p.intl.string(p.t.cfY4PE),
        y = e.userStatus?.completedAt == null ? (s ? p.intl.string(p.t.NJ6Bnm) : p.intl.string(p.t.USNO1K)) : void 0;
    return (0, r.jsx)(o.m, {
        text: y,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(l.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: g(e, E),
                onClick: I,
                text: T,
                disabled: e.userStatus?.completedAt == null,
            }),
        }),
    });
}
