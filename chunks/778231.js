n.d(t, { Z: () => b });
var r = n(951288),
    a = n(647438),
    i = n(442837),
    o = n(481060),
    l = n(384275),
    s = n(686546),
    c = n(522289),
    d = n(359993),
    u = n(146078),
    _ = n(881998),
    m = n(709054),
    p = n(388032),
    g = n(719706),
    f = n(970952);
let b = (e) => {
    var t, n;
    let { entry: b } = e,
        { name: h } = b,
        x = (0, i.e7)([_.Z], () => _.Z.getNewestTokenForApplication(b.id)),
        v = null != (n = b.getIconURL(40)) ? n : f,
        j = (0, d.Z)({ application: b }),
        y = a.useRef(!1);
    a.useEffect(() => {
        y.current || (l.Z.fetch(), (y.current = !0));
    }, []);
    let C = null != x ? m.default.extractTimestamp(x.id) : void 0;
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)(o.X6q, {
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
                                (0, r.jsx)(o.Text, {
                                    color: "header-primary",
                                    variant: "text-md/medium",
                                    children: h,
                                }),
                                j.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Text, {
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
                                              (0, r.jsx)(o.Text, {
                                                  color: "text-default",
                                                  variant: "text-md/normal",
                                                  children: null == (t = b.bot) ? void 0 : t.tag,
                                              }),
                                              null != C &&
                                                  (0, r.jsx)(o.Text, {
                                                      color: "text-default",
                                                      variant: "text-md/normal",
                                                      children: p.intl.formatToPlainString(p.t.C9rUOz, {
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
