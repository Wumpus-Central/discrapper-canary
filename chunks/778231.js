n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(384275),
    s = n(686546),
    c = n(522289),
    d = n(359993),
    u = n(146078),
    m = n(881998),
    _ = n(709054),
    p = n(388032),
    x = n(719706),
    g = n(970952);
let f = (e) => {
    var t, n;
    let { entry: f } = e,
        { name: b } = f,
        h = (0, l.e7)([m.Z], () => m.Z.getNewestTokenForApplication(f.id)),
        v = null != (n = f.getIconURL(40)) ? n : g,
        j = (0, d.Z)({ application: f }),
        y = i.useRef(!1);
    i.useEffect(() => {
        y.current || (o.Z.fetch(), (y.current = !0));
    }, []);
    let O = null != h ? _.default.extractTimestamp(h.id) : void 0;
    return (0, r.jsxs)("div", {
        className: x.container,
        children: [
            (0, r.jsx)(a.X6q, {
                className: x.header,
                variant: "heading-sm/semibold",
                children: p.intl.string(p.t["aYfK//"]),
            }),
            (0, r.jsx)("div", {
                className: x.appContainer,
                children: (0, r.jsxs)("div", {
                    className: x.appInfo,
                    children: [
                        (0, r.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 40,
                            height: 40,
                            className: x.appIconMask,
                            children: (0, r.jsx)("img", {
                                src: v,
                                alt: "",
                                className: x.appIcon,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: x.textContainer,
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
                                                  className: x.guildStack,
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
                                                  children: null == (t = f.bot) ? void 0 : t.tag,
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
