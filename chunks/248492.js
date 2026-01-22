n.d(t, {
    A: () => f,
});
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(692617),
    s = n(397927),
    o = n(824552),
    c = n(573435),
    d = n(973172),
    u = n(186272),
    m = n(546183),
    b = n(661191),
    p = n(985018),
    x = n(449154),
    g = n(532406);
let f = (e) => {
    var t, n;
    let { entry: f } = e,
        { name: v } = f,
        h = (0, a.bG)([m.default], () => m.default.getNewestTokenForApplication(f.id)),
        j = null != (t = f.getIconURL(40)) ? t : g,
        _ = (0, d.A)({
            application: f,
        }),
        A = r.useRef(!1);
    r.useEffect(() => {
        A.current || (o.A.fetch(), (A.current = !0));
    }, []);
    let y = null != h ? b.default.extractTimestamp(h.id) : void 0;
    return (0, l.jsxs)("div", {
        className: x.kL,
        children: [
            (0, l.jsx)(s.Heading, {
                className: x.wx,
                variant: "heading-sm/semibold",
                children: p.intl.string(p.t["aYfK/w"]),
            }),
            (0, l.jsx)("div", {
                className: x.vU,
                children: (0, l.jsxs)("div", {
                    className: x.qi,
                    children: [
                        (0, l.jsx)(c.Ay, {
                            mask: c.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: x.VE,
                            children: (0, l.jsx)("img", {
                                src: j,
                                alt: "",
                                className: x.Z2,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: x.FS,
                            children: [
                                (0, l.jsx)(s.Text, {
                                    color: "text-strong",
                                    variant: "text-md/medium",
                                    children: v,
                                }),
                                _.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(s.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, u.A)(_.length),
                                              }),
                                              (0, l.jsx)(i.A, {
                                                  className: x.uM,
                                                  guilds: _,
                                                  maxGuilds: 6,
                                              }),
                                          ],
                                      })
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(s.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: null == (n = f.bot) ? void 0 : n.tag,
                                              }),
                                              null != y &&
                                                  (0, l.jsx)(s.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: p.intl.formatToPlainString(p.t.C9rUO8, {
                                                          authorizedAt: y,
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
