"use strict";
n.d(t, { A: () => b });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(692617),
    s = n(534514),
    d = n(834730),
    o = n(824552),
    c = n(573435),
    u = n(973172),
    _ = n(186272),
    m = n(546183),
    p = n(661191),
    h = n(985018),
    g = n(80701),
    f = n(532406);
let b = (e) => {
    let { entry: t } = e,
        { name: n } = t,
        b = (0, r.bG)([m.default], () => m.default.getNewestTokenForApplication(t.id)),
        A = t.getIconURL(40) ?? f,
        x = (0, u.A)({ application: t }),
        v = i.useRef(!1);
    i.useEffect(() => {
        v.current || (o.A.fetch(), (v.current = !0));
    }, []);
    let E = null != b ? p.default.extractTimestamp(b.id) : void 0;
    return (0, a.jsxs)("div", {
        className: g.kL,
        children: [
            (0, a.jsx)(s.D, {
                className: g.wx,
                variant: "heading-sm/semibold",
                children: h.intl.string(h.t["aYfK/w"]),
            }),
            (0, a.jsx)("div", {
                className: g.vU,
                children: (0, a.jsxs)("div", {
                    className: g.qi,
                    children: [
                        (0, a.jsx)(c.Ay, {
                            mask: c.Ay.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: g.VE,
                            children: (0, a.jsx)("img", { src: A, alt: "", className: g.Z2 }),
                        }),
                        (0, a.jsxs)("div", {
                            className: g.FS,
                            children: [
                                (0, a.jsx)(d.E, { color: "text-strong", variant: "text-md/medium", children: n }),
                                x.length > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(d.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, _.A)(x.length),
                                              }),
                                              (0, a.jsx)(l.A, { className: g.uM, guilds: x, maxGuilds: 6 }),
                                          ],
                                      })
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(d.E, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: t.bot?.tag,
                                              }),
                                              null != E &&
                                                  (0, a.jsx)(d.E, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: h.intl.formatToPlainString(h.t.C9rUO8, {
                                                          authorizedAt: E,
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
