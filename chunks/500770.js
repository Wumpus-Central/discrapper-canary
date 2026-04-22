n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(194261),
    r = n(834730),
    o = n(935286),
    d = n(939249),
    c = n(534514),
    u = n(247928),
    m = n(696986),
    _ = n(890856),
    h = n(915089),
    p = n(308234),
    g = n(724609),
    A = n(411342),
    f = n(985018),
    x = n(48131);
function C(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: l, children: o } = e;
    return (0, i.jsxs)("div", {
        className: a()(x.v0, l),
        children: [
            o,
            !t &&
                (0, i.jsxs)("div", {
                    className: x.su,
                    children: [
                        (0, i.jsx)(s.X, { size: "xs", className: x.hz, color: "currentColor", "aria-hidden": !0 }),
                        (0, i.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: x.__invalid_unlockText,
                            children: f.intl.string(f.t.YmIiSe),
                        }),
                    ],
                }),
            n && (0, i.jsx)("div", { className: x.vW, children: (0, i.jsx)(g.k, {}) }),
        ],
    });
}
function E(e) {
    let { onShowFullDescription: t, variant: n } = e,
        l = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.E, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-text-hover",
                    children: f.intl.string(f.t["5fmYjW"]),
                }),
                (0, i.jsx)(o.E, { size: "xs", color: "currentColor", className: x.D6 }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: x.dO, children: l })
        : (0, i.jsx)(d.D, {
              className: a()(x.dO, x.hY),
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
            formattedPrice: s,
            role: o,
            ctaComponent: d,
            shouldShowFullDescriptionButton: g = !0,
            onShowFullDescription: I,
            productType: v,
            onTapCard: b,
            actionMenu: T,
            showOpaqueBackground: S = !1,
            hideRoleTag: y = !1,
            lineClamp: N = 1,
            cardWidth: j = 332,
            cardHeight: L,
            thumbnailHeight: R = 187,
            descriptionTextVariant: P = "text-sm/normal",
            isDraft: w = !1,
        } = e,
        D = (0, h.Ld)(),
        k = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C, {
                    showDraftBadge: w,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, i.jsx)("img", { alt: "", src: t, className: x.K_, style: { height: R } }),
                }),
                (0, i.jsxs)("div", {
                    className: x.MS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.Ag,
                            children: [
                                (0, i.jsx)(c.D, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: x.tZ,
                                    id: D,
                                    children: n,
                                }),
                                (0, i.jsx)(u.M, {
                                    children: (0, i.jsx)(p.A, {
                                        variant: P,
                                        color: "text-muted",
                                        lineClamp: N,
                                        text: l,
                                    }),
                                }),
                                g && (0, i.jsx)(E, { onShowFullDescription: I, variant: P }),
                                y || null == o || "" === o.name
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(m.h, { size: 16 }), (0, i.jsx)(A.A, { role: o })],
                                      }),
                            ],
                        }),
                        T,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: x.kP,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-active",
                            className: x.__invalid_productPrice,
                            children: s ?? f.intl.string(f.t["4uLhAp"]),
                        }),
                        (0, i.jsx)(r.E, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: x.__invalid_productType,
                            children: v,
                        }),
                        (0, i.jsx)("div", {
                            className: x.QW,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: d,
                        }),
                    ],
                }),
            ],
        });
    return null == b
        ? (0, i.jsx)("article", { className: a()(x.Um, S ? x.sG : x.Wi), "aria-labelledby": D, children: k })
        : (0, i.jsx)("div", {
              style: { width: j, height: L },
              children: (0, i.jsx)(_.s, {
                  tag: "article",
                  "aria-label": f.intl.formatToPlainString(f.t["e+TmJa"], { productName: n }),
                  className: a()(x.Um, S ? x.sG : x.Wi, x.GA),
                  onClick: b,
                  children: k,
              }),
          });
}
