"use strict";
n.d(t, { b: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(732955),
    u = n(397927),
    c = n(775602),
    d = n(607470),
    _ = n(975571),
    f = n(318346),
    p = n(652215),
    h = n(985018),
    m = n(186541),
    g = n(266770),
    E = n(268920),
    A = n(633217);
let I = () => {
        let e = (0, o.bG)([c.A], () => c.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: m.s,
            children: e
                ? (0, r.jsx)("img", { src: E.A, className: m.Cb, alt: "Orb" })
                : (0, r.jsxs)(d.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: m.Cb,
                      children: [
                          (0, r.jsx)("source", { src: A.A, type: "video/webm" }),
                          (0, r.jsx)("img", { src: E.A, className: m.Cb, alt: "Orb" }),
                      ],
                  }),
        });
    },
    T = (e) => {
        let {
                ctaText: t,
                ctaOnClick: n,
                analyticsPage: a,
                linkPreText: o = h.intl.string(h.t["5qZv9E"]),
                linkText: c = h.intl.string(h.t.XRdyjz),
            } = e,
            d = i.useCallback(() => {
                null != a &&
                    (0, f.Y)({
                        pageType: a,
                        sectionType: p.JJy.ORBS_BALANCE_MENU,
                        ctaObject: p.ZSU.ORBS_LEARN_MORE_LINK,
                    });
            }, [a]);
        return (0, r.jsxs)("div", {
            className: s()(m.kL, g.O),
            children: [
                (0, r.jsx)(I, {}),
                (0, r.jsx)(l.$nd, { text: t, variant: "primary", size: "sm", onClick: n, fullWidth: !0 }),
                (0, r.jsxs)("div", {
                    className: m.kx,
                    children: [
                        void 0 !== o &&
                            (0, r.jsxs)(u.Text, { variant: "text-xs/normal", className: m.D5, children: [o, "\xa0"] }),
                        (0, r.jsx)(u.MzZ, {
                            target: "_blank",
                            rel: "author",
                            href: _.A.getArticleURL(p.MVz.ORBS_FAQ),
                            className: m.CU,
                            onClick: d,
                            children: c,
                        }),
                    ],
                }),
            ],
        });
    };
