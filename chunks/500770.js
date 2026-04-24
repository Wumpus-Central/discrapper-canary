n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(194261),
    s = n(834730),
    o = n(935286),
    c = n(939249),
    d = n(534514),
    u = n(247928),
    _ = n(696986),
    m = n(890856),
    h = n(915089),
    p = n(839656),
    g = n(724609),
    f = n(411342),
    x = n(985018),
    A = n(859715);
function C(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: l, children: o } = e;
    return (0, i.jsxs)("div", {
        className: a()(A.v0, l),
        children: [
            o,
            !t &&
                (0, i.jsxs)("div", {
                    className: A.su,
                    children: [
                        (0, i.jsx)(r.X, { size: "xs", className: A.hz, color: "currentColor", "aria-hidden": !0 }),
                        (0, i.jsx)(s.E, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: A.__invalid_unlockText,
                            children: x.intl.string(x.t.YmIiSe),
                        }),
                    ],
                }),
            n && (0, i.jsx)("div", { className: A.vW, children: (0, i.jsx)(g.k, {}) }),
        ],
    });
}
function v(e) {
    let { onShowFullDescription: t, variant: n } = e,
        l = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.E, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-text-hover",
                    children: x.intl.string(x.t["5fmYjW"]),
                }),
                (0, i.jsx)(o.E, { size: "xs", color: "currentColor", className: A.D6 }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: A.dO, children: l })
        : (0, i.jsx)(c.D, {
              className: a()(A.dO, A.hY),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: l,
          });
}
function I(e) {
    let {
            imageUrl: t,
            name: n,
            description: l,
            formattedPrice: r,
            role: o,
            ctaComponent: c,
            shouldShowFullDescriptionButton: g = !0,
            onShowFullDescription: I,
            productType: E,
            onTapCard: b,
            actionMenu: y,
            showOpaqueBackground: T = !1,
            hideRoleTag: j = !1,
            lineClamp: N = 1,
            cardWidth: S = 332,
            cardHeight: k,
            thumbnailHeight: L = 187,
            descriptionTextVariant: R = "text-sm/normal",
            isDraft: w = !1,
        } = e,
        P = (0, h.Ld)(),
        D = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C, {
                    showDraftBadge: w,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, i.jsx)("img", { alt: "", src: t, className: A.K_, style: { height: L } }),
                }),
                (0, i.jsxs)("div", {
                    className: A.MS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: A.Ag,
                            children: [
                                (0, i.jsx)(d.D, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: A.tZ,
                                    id: P,
                                    children: n,
                                }),
                                (0, i.jsx)(u.M, {
                                    children: (0, i.jsx)(p.A, {
                                        variant: R,
                                        color: "text-muted",
                                        lineClamp: N,
                                        text: l,
                                    }),
                                }),
                                g && (0, i.jsx)(v, { onShowFullDescription: I, variant: R }),
                                j || null == o || "" === o.name
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(_.h, { size: 16 }), (0, i.jsx)(f.A, { role: o })],
                                      }),
                            ],
                        }),
                        y,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: A.kP,
                    children: [
                        (0, i.jsx)(s.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-active",
                            className: A.__invalid_productPrice,
                            children: r ?? x.intl.string(x.t["4uLhAp"]),
                        }),
                        (0, i.jsx)(s.E, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: A.__invalid_productType,
                            children: E,
                        }),
                        (0, i.jsx)("div", {
                            className: A.QW,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: c,
                        }),
                    ],
                }),
            ],
        });
    return null == b
        ? (0, i.jsx)("article", { className: a()(A.Um, T ? A.sG : A.Wi), "aria-labelledby": P, children: D })
        : (0, i.jsx)("div", {
              style: { width: S, height: k },
              children: (0, i.jsx)(m.s, {
                  tag: "article",
                  "aria-label": x.intl.formatToPlainString(x.t["e+TmJa"], { productName: n }),
                  className: a()(A.Um, T ? A.sG : A.Wi, A.GA),
                  onClick: b,
                  children: D,
              }),
          });
}
