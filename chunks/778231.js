n.d(t, { Z: () => h });
var r = n(255367),
    a = n(73800),
    i = n(442837),
    l = n(481060),
    o = n(384275),
    s = n(686546),
    c = n(522289),
    d = n(359993),
    u = n(146078),
    m = n(881998),
    p = n(709054),
    _ = n(388032),
    g = n(719706),
    b = n(970952);
let h = (e) => {
    var t, n;
    let { entry: h } = e,
        { name: x } = h,
        f = (0, i.e7)([m.Z], () => m.Z.getNewestTokenForApplication(h.id)),
        v = null != (n = h.getIconURL(40)) ? n : b,
        j = (0, d.Z)({ application: h }),
        y = a.useRef(!1);
    a.useEffect(() => {
        y.current || (o.Z.fetch(), (y.current = !0));
    }, []);
    let C = null != f ? p.default.extractTimestamp(f.id) : void 0;
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(l.X6q, {
                className: g.header,
                variant: "heading-sm/semibold",
                children: _.intl.string(_.t["aYfK//"]),
            }),
            (0, r.jsx)("div", {
                className: g.appContainer,
                children: (0, r.jsxs)("div", {
                    className: g.appInfo,
                    children: [
                        (0, r.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: g.appIconMask,
                            children: (0, r.jsx)("img", {
                                src: v,
                                alt: "",
                                className: g.appIcon,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: g.textContainer,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    color: "header-primary",
                                    variant: "text-md/medium",
                                    children: x,
                                }),
                                j.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(l.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, u.Z)(j.length),
                                              }),
                                              (0, r.jsx)(c.Z, {
                                                  className: g.guildStack,
                                                  guilds: j,
                                                  maxGuilds: 6,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(l.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: null == (t = h.bot) ? void 0 : t.tag,
                                              }),
                                              null != C &&
                                                  (0, r.jsx)(l.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: _.intl.formatToPlainString(_.t.C9rUOz, {
                                                          authorizedAt: C,
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
