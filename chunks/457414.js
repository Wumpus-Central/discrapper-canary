"use strict";
s.d(t, { A: () => h });
var n = s(627968);
s(64700);
var l = s(172218),
    r = s(534514),
    a = s(834730),
    i = s(349288),
    o = s(854818),
    c = s(212407),
    d = s(815280),
    u = s(985018),
    g = s(537947);
let h = (e) => {
    let { immersiveBannerBlock: t, onVisibilityChange: s } = e,
        h = (0, l.K)(
            (e) => {
                s?.(e);
            },
            0.33,
            null != s,
        ),
        { bannerUrl: _, bannerAnimatedUrl: m } = (0, c.qY)(t),
        p = null != t.textColor ? { color: t.textColor } : void 0,
        f = null != t.body && "" !== t.body,
        E = null != t.helpCenterUrl && "" !== t.helpCenterUrl;
    return (0, n.jsxs)("div", {
        ref: h,
        className: g.BX,
        children: [
            (0, n.jsx)("div", {
                className: g.vK,
                children: null != _ && (0, n.jsx)(d.A, { bannerStatic: _, bannerAnimated: m }),
            }),
            (0, n.jsx)("div", {
                className: g.HQ,
                children: (0, n.jsxs)("div", {
                    className: g.Yn,
                    children: [
                        null != t.endTime ? (0, n.jsx)(o.e, { endDate: t.endTime, size: "lg" }) : null,
                        (0, n.jsx)(r.D, {
                            variant: "heading-xxl/bold",
                            className: g.DD,
                            color: "text-strong",
                            style: { ...p },
                            children: t.title,
                        }),
                        f || E
                            ? (0, n.jsxs)(a.E, {
                                  variant: "text-md/medium",
                                  style: { ...p },
                                  children: [
                                      f && t.body,
                                      f && E && " ",
                                      E &&
                                          (0, n.jsx)(i.Anchor, {
                                              href: t.helpCenterUrl,
                                              className: g.CU,
                                              style: { ...p },
                                              children: u.intl.string(u.t.O7ADgv),
                                          }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
};
