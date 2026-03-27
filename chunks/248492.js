n.d(t, { A: () => g });
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(692617),
    s = n(397927),
    d = n(824552),
    o = n(573435),
    c = n(973172),
    u = n(186272),
    _ = n(546183),
    m = n(661191),
    x = n(985018),
    p = n(936557),
    h = n(532406);
let g = (e) => {
    let { entry: t } = e,
        { name: n } = t,
        g = (0, r.bG)([_.default], () => _.default.getNewestTokenForApplication(t.id)),
        A = t.getIconURL(40) ?? h,
        v = (0, c.A)({ application: t }),
        f = a.useRef(!1);
    a.useEffect(() => {
        f.current || (d.A.fetch(), (f.current = !0));
    }, []);
    let b = null != g ? m.default.extractTimestamp(g.id) : void 0;
    return (0, l.jsxs)("div", {
        className: p.kL,
        children: [
            (0, l.jsx)(s.Heading, {
                className: p.wx,
                variant: "heading-sm/semibold",
                children: x.intl.string(x.t["aYfK/w"]),
            }),
            (0, l.jsx)("div", {
                className: p.vU,
                children: (0, l.jsxs)("div", {
                    className: p.qi,
                    children: [
                        (0, l.jsx)(o.Ay, {
                            mask: o.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: p.VE,
                            children: (0, l.jsx)("img", { src: A, alt: "", className: p.Z2 }),
                        }),
                        (0, l.jsxs)("div", {
                            className: p.FS,
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
                                              (0, l.jsx)(i.A, { className: p.uM, guilds: v, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(s.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != b &&
                                                  (0, l.jsx)(s.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: x.intl.formatToPlainString(x.t.C9rUO8, {
                                                          authorizedAt: b,
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
