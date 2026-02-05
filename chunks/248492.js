n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(692617),
    s = n(397927),
    d = n(824552),
    o = n(573435),
    u = n(973172),
    c = n(186272),
    m = n(546183),
    _ = n(661191),
    x = n(985018),
    g = n(449154),
    h = n(532406);
let p = (e) => {
    let { entry: t } = e,
        { name: n } = t,
        p = (0, i.bG)([m.default], () => m.default.getNewestTokenForApplication(t.id)),
        A = t.getIconURL(40) ?? h,
        b = (0, u.A)({ application: t }),
        v = a.useRef(!1);
    a.useEffect(() => {
        v.current || (d.A.fetch(), (v.current = !0));
    }, []);
    let f = null != p ? _.default.extractTimestamp(p.id) : void 0;
    return (0, l.jsxs)("div", {
        className: g.kL,
        children: [
            (0, l.jsx)(s.Heading, {
                className: g.wx,
                variant: "heading-sm/semibold",
                children: x.intl.string(x.t["aYfK/w"]),
            }),
            (0, l.jsx)("div", {
                className: g.vU,
                children: (0, l.jsxs)("div", {
                    className: g.qi,
                    children: [
                        (0, l.jsx)(o.Ay, {
                            mask: o.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: g.VE,
                            children: (0, l.jsx)("img", { src: A, alt: "", className: g.Z2 }),
                        }),
                        (0, l.jsxs)("div", {
                            className: g.FS,
                            children: [
                                (0, l.jsx)(s.Text, { color: "text-strong", variant: "text-md/medium", children: n }),
                                b.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(s.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, c.A)(b.length),
                                              }),
                                              (0, l.jsx)(r.A, { className: g.uM, guilds: b, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(s.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != f &&
                                                  (0, l.jsx)(s.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: x.intl.formatToPlainString(x.t.C9rUO8, {
                                                          authorizedAt: f,
                                                      }),
                                                  }),
                                          ],
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
};
