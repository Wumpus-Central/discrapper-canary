n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    s = n(384275),
    o = n(686546),
    c = n(522289),
    d = n(359993),
    u = n(146078),
    m = n(881998),
    p = n(709054),
    g = n(388032),
    _ = n(719706),
    b = n(970952);
let h = (e) => {
    var t, n;
    let { entry: h } = e,
        { name: x } = h,
        f = (0, l.e7)([m.Z], () => m.Z.getNewestTokenForApplication(h.id)),
        v = null != (n = h.getIconURL(40)) ? n : b,
        j = (0, d.Z)({ application: h }),
        y = i.useRef(!1);
    i.useEffect(() => {
        y.current || (s.Z.fetch(), (y.current = !0));
    }, []);
    let O = null != f ? p.default.extractTimestamp(f.id) : void 0;
    return (0, r.jsxs)("div", {
        className: _.container,
        children: [
            (0, r.jsx)(a.X6q, {
                className: _.header,
                variant: "heading-sm/semibold",
                children: g.intl.string(g.t["aYfK//"]),
            }),
            (0, r.jsx)("div", {
                className: _.appContainer,
                children: (0, r.jsxs)("div", {
                    className: _.appInfo,
                    children: [
                        (0, r.jsx)(o.ZP, {
                            mask: o.ZP.Masks.AVATAR_DEFAULT,
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
                                (0, r.jsx)(a.Text, {
                                    color: "header-primary",
                                    variant: "text-md/medium",
                                    children: x,
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
                                                  className: _.guildStack,
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
                                                      children: g.intl.formatToPlainString(g.t.C9rUOz, {
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
