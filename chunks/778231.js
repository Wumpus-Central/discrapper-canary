n.d(t, { Z: () => h });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(139117),
    s = n(481060),
    o = n(384275),
    d = n(686546),
    c = n(359993),
    u = n(146078),
    m = n(881998),
    p = n(709054),
    g = n(388032),
    _ = n(719706),
    x = n(970952);
let h = (e) => {
    var t, n;
    let { entry: h } = e,
        { name: b } = h,
        f = (0, i.e7)([m.default], () => m.default.getNewestTokenForApplication(h.id)),
        v = null != (n = h.getIconURL(40)) ? n : x,
        j = (0, c.Z)({ application: h }),
        y = l.useRef(!1);
    l.useEffect(() => {
        y.current || (o.Z.fetch(), (y.current = !0));
    }, []);
    let Z = null != f ? p.default.extractTimestamp(f.id) : void 0;
    return (0, r.jsxs)("div", {
        className: _.container,
        children: [
            (0, r.jsx)(s.Heading, {
                className: _.header,
                variant: "heading-sm/semibold",
                children: g.intl.string(g.t["aYfK/w"]),
            }),
            (0, r.jsx)("div", {
                className: _.appContainer,
                children: (0, r.jsxs)("div", {
                    className: _.appInfo,
                    children: [
                        (0, r.jsx)(d.ZP, {
                            mask: d.ZP.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: _.appIconMask,
                            children: (0, r.jsx)("img", {
                                src: v,
                                alt: "",
                                className: _.appIcon,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.textContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    color: "header-primary",
                                    variant: "text-md/medium",
                                    children: b,
                                }),
                                j.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: (0, u.Z)(j.length),
                                              }),
                                              (0, r.jsx)(a.Z, {
                                                  className: _.guildStack,
                                                  guilds: j,
                                                  maxGuilds: 6,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: null == (t = h.bot) ? void 0 : t.tag,
                                              }),
                                              null != Z &&
                                                  (0, r.jsx)(s.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: g.intl.formatToPlainString(g.t.C9rUO8, {
                                                          authorizedAt: Z,
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
