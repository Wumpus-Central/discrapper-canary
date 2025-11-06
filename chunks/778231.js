n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(139117),
    s = n(481060),
    o = n(384275),
    c = n(686546),
    d = n(359993),
    u = n(146078),
    m = n(881998),
    p = n(709054),
    g = n(388032),
    _ = n(719706),
    h = n(970952);
let b = (e) => {
    var t, n;
    let { entry: b } = e,
        { name: x } = b,
        f = (0, l.e7)([m.default], () => m.default.getNewestTokenForApplication(b.id)),
        v = null != (n = b.getIconURL(40)) ? n : h,
        j = (0, d.Z)({ application: b }),
        y = i.useRef(!1);
    i.useEffect(() => {
        y.current || (o.Z.fetch(), (y.current = !0));
    }, []);
    let O = null != f ? p.default.extractTimestamp(f.id) : void 0;
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
                        (0, r.jsx)(c.ZP, {
                            mask: c.ZP.Masks.AVATAR_DEFAULT,
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
                                    children: x,
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
                                                  children: null == (t = b.bot) ? void 0 : t.tag,
                                              }),
                                              null != O &&
                                                  (0, r.jsx)(s.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: g.intl.formatToPlainString(g.t.C9rUO8, {
                                                          authorizedAt: O,
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
