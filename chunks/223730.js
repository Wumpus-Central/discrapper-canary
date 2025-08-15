n.d(t, {
    K: () => _,
    y: () => b,
});
var r = n(951288),
    i = n(442837),
    l = n(481060),
    o = n(230711),
    a = n(695346),
    s = n(771845),
    c = n(88658),
    u = n(782896),
    d = n(981631),
    p = n(933554),
    f = n(388032),
    h = n(95049);
let g = () => {
    o.Z.open(d.oAB.ACTIVITY_PRIVACY);
};
function m(e) {
    let { children: t, onClick: n } = e;
    return (0, r.jsxs)(l.P3F, {
        className: h.chevronButton,
        onClick: n,
        children: [
            (0, r.jsx)("div", {
                className: h.chevronButtonContent,
                children: t,
            }),
            (0, r.jsx)(l.Fbu, {
                color: l.TVs.colors.TEXT_SECONDARY,
                size: "xs",
            }),
        ],
    });
}
function b(e) {
    let { onClosePopout: t } = e,
        n = a.G6.useSetting(),
        o = (0, i.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()),
        d = (0, c._o)(),
        h = o.filter((e) => !d.has(e));
    return 0 === o.length
        ? null
        : (0, r.jsxs)(m, {
              onClick: () => {
                  t(), g();
              },
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: f.intl.string(n ? p.default["3GrhnJ"] : p.default["54ycKC"]),
                  }),
                  (0, r.jsx)(u.c, { guildIds: h }),
              ],
          });
}
function _(e) {
    let { onClosePopout: t } = e;
    return (0, r.jsx)(l.P3F, {
        className: h.customizeLink,
        onClick: () => {
            t(), g();
        },
        children: (0, r.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: f.intl.string(f.t["ZrN+DQ"]),
        }),
    });
}
