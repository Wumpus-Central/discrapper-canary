n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(194261),
    a = n(834730),
    o = n(935286),
    d = n(939249),
    c = n(534514),
    u = n(346055),
    m = n(696986),
    h = n(890856),
    g = n(915089),
    p = n(839656),
    A = n(724609),
    x = n(411342),
    f = n(375708),
    E = n(859715);
function I(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: l, children: o } = e;
    return (0, i.jsxs)("div", {
        className: s()(E.v0, l),
        children: [
            o,
            !t &&
                (0, i.jsxs)("div", {
                    className: E.su,
                    children: [
                        (0, i.jsx)(r.X, { size: "xs", className: E.hz, color: "currentColor", "aria-hidden": !0 }),
                        (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: E.__invalid_unlockText,
                            children: f.intl.string(f.t.YmIiSe),
                        }),
                    ],
                }),
            n && (0, i.jsx)("div", { className: E.vW, children: (0, i.jsx)(A.k, {}) }),
        ],
    });
}
function C(e) {
    let { onShowFullDescription: t, variant: n } = e,
        l = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.E, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-text-hover",
                    children: f.intl.string(f.t["5fmYjW"]),
                }),
                (0, i.jsx)(o.E, { size: "xs", color: "currentColor", className: E.D6 }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: E.dO, children: l })
        : (0, i.jsx)(d.D, {
              className: s()(E.dO, E.hY),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: l,
          });
}
function v(e) {
    let {
            imageUrl: t,
            name: n,
            description: l,
            formattedPrice: r,
            role: o,
            ctaComponent: d,
            shouldShowFullDescriptionButton: A = !0,
            onShowFullDescription: v,
            productType: _,
            onTapCard: j,
            actionMenu: N,
            showOpaqueBackground: T = !1,
            hideRoleTag: y = !1,
            lineClamp: S = 1,
            cardWidth: b = 332,
            cardHeight: L,
            thumbnailHeight: k = 187,
            descriptionTextVariant: R = "text-sm/normal",
            isDraft: P = !1,
        } = e,
        M = (0, g.Ld)(),
        D = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I, {
                    showDraftBadge: P,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, i.jsx)("img", { alt: "", src: t, className: E.K_, style: { height: k } }),
                }),
                (0, i.jsxs)("div", {
                    className: E.MS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: E.Ag,
                            children: [
                                (0, i.jsx)(c.D, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: E.tZ,
                                    id: M,
                                    children: n,
                                }),
                                (0, i.jsx)(u.M, {
                                    children: (0, i.jsx)(p.A, {
                                        variant: R,
                                        color: "text-muted",
                                        lineClamp: S,
                                        text: l,
                                    }),
                                }),
                                A && (0, i.jsx)(C, { onShowFullDescription: v, variant: R }),
                                y || null == o || "" === o.name
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(m.h, { size: 16 }), (0, i.jsx)(x.A, { role: o })],
                                      }),
                            ],
                        }),
                        N,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: E.kP,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-active",
                            className: E.__invalid_productPrice,
                            children: r ?? f.intl.string(f.t["4uLhAp"]),
                        }),
                        (0, i.jsx)(a.E, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: E.__invalid_productType,
                            children: _,
                        }),
                        (0, i.jsx)("div", {
                            className: E.QW,
                            onClick: function (e) {
                                e.stopPropagation();
                            },
                            children: d,
                        }),
                    ],
                }),
            ],
        });
    return null == j
        ? (0, i.jsx)("article", { className: s()(E.Um, T ? E.sG : E.Wi), "aria-labelledby": M, children: D })
        : (0, i.jsx)("div", {
              style: { width: b, height: L },
              children: (0, i.jsx)(h.s, {
                  tag: "article",
                  "aria-label": f.intl.formatToPlainString(f.t["e+TmJa"], { productName: n }),
                  className: s()(E.Um, T ? E.sG : E.Wi, E.GA),
                  onClick: j,
                  children: D,
              }),
          });
}
