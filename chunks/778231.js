n.d(t, { Z: () => x });
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
    b = n(709054),
    p = n(388032),
    g = n(501859),
    f = n(970952);
let x = (e) => {
    var t, n;
    let { entry: x } = e,
        { name: h } = x,
        v = (0, i.e7)([m.default], () => m.default.getNewestTokenForApplication(x.id)),
        _ = null != (n = x.getIconURL(40)) ? n : f,
        j = (0, c.Z)({ application: x }),
        y = l.useRef(!1);
    l.useEffect(() => {
        y.current || (o.Z.fetch(), (y.current = !0));
    }, []);
    let O = null != v ? b.default.extractTimestamp(v.id) : void 0;
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(s.Heading, {
                className: g.header,
                variant: "heading-sm/semibold",
                children: p.intl.string(p.t["aYfK/w"]),
            }),
            (0, r.jsx)("div", {
                className: g.appContainer,
                children: (0, r.jsxs)("div", {
                    className: g.appInfo,
                    children: [
                        (0, r.jsx)(d.ZP, {
                            mask: d.ZP.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: g.appIconMask,
                            children: (0, r.jsx)("img", {
                                src: _,
                                alt: "",
                                className: g.appIcon,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: g.textContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    color: "text-strong",
                                    variant: "text-md/medium",
                                    children: h,
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
                                                  className: g.guildStack,
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
                                                  children: null == (t = x.bot) ? void 0 : t.tag,
                                              }),
                                              null != O &&
                                                  (0, r.jsx)(s.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: p.intl.formatToPlainString(p.t.C9rUO8, {
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
