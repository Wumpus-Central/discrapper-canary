n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(384275),
    s = n(686546),
    c = n(522289),
    d = n(359993),
    u = n(146078),
    _ = n(881998),
    m = n(709054),
    p = n(388032),
    g = n(719706),
    f = n(970952);
let h = (e) => {
    var t, n;
    let { entry: h } = e,
        { name: b } = h,
        x = (0, l.e7)([_.Z], () => _.Z.getNewestTokenForApplication(h.id)),
        v = null != (n = h.getIconURL(40)) ? n : f,
        j = (0, d.Z)({ application: h }),
        y = i.useRef(!1);
    i.useEffect(() => {
        y.current || (o.Z.fetch(), (y.current = !0));
    }, []);
    let O = null != x ? m.default.extractTimestamp(x.id) : void 0;
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(a.Heading, {
                className: g.header,
                variant: "heading-sm/semibold",
                children: p.intl.string(p.t["aYfK//"]),
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
                                (0, r.jsx)(a.Text, {
                                    color: "header-primary",
                                    variant: "text-md/medium",
                                    children: b,
                                }),
                                j.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.Text, {
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
                                              (0, r.jsx)(a.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: null == (t = h.bot) ? void 0 : t.tag,
                                              }),
                                              null != O &&
                                                  (0, r.jsx)(a.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: p.intl.formatToPlainString(p.t.C9rUOz, {
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
