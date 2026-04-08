n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(692617),
    s = n(397927),
    d = n(824552),
    o = n(573435),
    c = n(973172),
    u = n(186272),
    _ = n(546183),
    m = n(661191),
    p = n(985018),
    g = n(936557),
    x = n(532406);
let h = (e) => {
    let { entry: t } = e,
        { name: n } = t,
        h = (0, i.bG)([_.default], () => _.default.getNewestTokenForApplication(t.id)),
        A = t.getIconURL(40) ?? x,
        v = (0, c.A)({ application: t }),
        b = a.useRef(!1);
    a.useEffect(() => {
        b.current || (d.A.fetch(), (b.current = !0));
    }, []);
    let f = null != h ? m.default.extractTimestamp(h.id) : void 0;
    return (0, l.jsxs)("div", {
        className: g.kL,
        children: [
            (0, l.jsx)(s.Heading, {
                className: g.wx,
                variant: "heading-sm/semibold",
                children: p.intl.string(p.t["aYfK/w"]),
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
                                v.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(s.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, u.A)(v.length),
                                              }),
                                              (0, l.jsx)(r.A, { className: g.uM, guilds: v, maxGuilds: 6 }),
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
                                                      children: p.intl.formatToPlainString(p.t.C9rUO8, {
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
