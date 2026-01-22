n.d(t, {
    L7: () => g,
    qA: () => A,
});
var r = n(627968),
    l = n(311907),
    i = n(397927),
    a = n(253932),
    s = n(780964),
    o = n(840065),
    c = n(711014),
    u = n(115063),
    d = n(704037),
    f = n(652215),
    p = n(536482),
    h = n(985018),
    b = n(259533);
let g = () => {
    (0, o.openUserSettings)(s.X.ACTIVITY_PRIVACY_PANEL, {
        section: f.nc_.ACTIVITY_PRIVACY,
    });
};

function m(e) {
    let { children: t, onClick: n } = e;
    return (0, r.jsxs)(i.DUT, {
        className: b.E1,
        onClick: n,
        children: [
            (0, r.jsx)("div", {
                className: b.j3,
                children: t,
            }),
            (0, r.jsx)(i._BQ, {
                color: i.LU0.colors.TEXT_SUBTLE,
                size: "xs",
            }),
        ],
    });
}

function A(e) {
    let { onClosePopout: t } = e,
        n = a.tz.useSetting(),
        s = (0, l.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()),
        o = (0, u.Kk)(),
        f = s.filter((e) => !o.has(e));
    return 0 === s.length
        ? null
        : (0, r.jsxs)(m, {
              onClick: () => {
                  t(), g();
              },
              children: [
                  (0, r.jsx)(i.Text, {
                      variant: "text-sm/semibold",
                      children: h.intl.string(n ? p.default["3GrhnF"] : p.default["54ycKJ"]),
                  }),
                  (0, r.jsx)(d.l, {
                      guildIds: f,
                  }),
              ],
          });
}
