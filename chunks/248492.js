n.d(t, { A: () => A });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(692617),
    s = n(534514),
    d = n(834730),
    o = n(824552),
    c = n(573435),
    u = n(973172),
    _ = n(186272),
    m = n(546183),
    h = n(661191),
    g = n(985018),
    p = n(80701),
    x = n(532406);
let A = (e) => {
    let { entry: t } = e,
        { name: n } = t,
        A = (0, i.bG)([m.default], () => m.default.getNewestTokenForApplication(t.id)),
        f = t.getIconURL(40) ?? x,
        v = (0, u.A)({ application: t }),
        b = a.useRef(!1);
    a.useEffect(() => {
        b.current || (o.A.fetch(), (b.current = !0));
    }, []);
    let N = null != A ? h.default.extractTimestamp(A.id) : void 0;
    return (0, l.jsxs)("div", {
        className: p.kL,
        children: [
            (0, l.jsx)(s.D, {
                className: p.wx,
                variant: "heading-sm/semibold",
                children: g.intl.string(g.t["aYfK/w"]),
            }),
            (0, l.jsx)("div", {
                className: p.vU,
                children: (0, l.jsxs)("div", {
                    className: p.qi,
                    children: [
                        (0, l.jsx)(c.Ay, {
                            mask: c.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: p.VE,
                            children: (0, l.jsx)("img", { src: f, alt: "", className: p.Z2 }),
                        }),
                        (0, l.jsxs)("div", {
                            className: p.FS,
                            children: [
                                (0, l.jsx)(d.E, { color: "text-strong", variant: "text-md/medium", children: n }),
                                v.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(d.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, _.A)(v.length),
                                              }),
                                              (0, l.jsx)(r.A, { className: p.uM, guilds: v, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(d.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != N &&
                                                  (0, l.jsx)(d.E, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: g.intl.formatToPlainString(g.t.C9rUO8, {
                                                          authorizedAt: N,
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
