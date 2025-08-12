n.d(t, { Z: () => h }), n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(313201),
    l = n(240657),
    c = n(765400),
    u = n(916001),
    d = n(388032),
    f = n(75011);
function _(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: i, children: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(f.productThumbnailContainer, i),
        children: [
            s,
            !t &&
                (0, r.jsxs)("div", {
                    className: f.purchaseToUnlockBadge,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: "xs",
                            className: f.lockIcon,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: f.__invalid_unlockText,
                            children: d.intl.string(d.t.YmIiSU),
                        }),
                    ],
                }),
            n &&
                (0, r.jsx)("div", {
                    className: f.draftBadge,
                    children: (0, r.jsx)(c.v, {}),
                }),
        ],
    });
}
function p(e) {
    let { onShowFullDescription: t, variant: n } = e,
        i = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.Text, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-hover",
                    children: d.intl.string(d.t["5fmYjY"]),
                }),
                (0, r.jsx)(a.ZSh, {
                    size: "xs",
                    color: "currentColor",
                    className: f.arrowIcon,
                }),
            ],
        }),
        s = (e) => {
            e.stopPropagation(), null != t && t();
        };
    return null == t
        ? (0, r.jsx)("div", {
              className: f.showMoreButton,
              children: i,
          })
        : (0, r.jsx)(a.P3F, {
              className: o()(f.showMoreButton, f.hasAction),
              onClick: s,
              children: i,
          });
}
function h(e) {
    let {
            imageUrl: t,
            name: n,
            description: i,
            formattedPrice: c,
            role: h,
            ctaComponent: m,
            shouldShowFullDescriptionButton: g = !0,
            onShowFullDescription: E,
            productType: b,
            onTapCard: y,
            actionMenu: O,
            showOpaqueBackground: v = !1,
            hideRoleTag: I = !1,
            lineClamp: T = 1,
            cardWidth: S = 332,
            cardHeight: A,
            thumbnailHeight: N = 187,
            descriptionTextVariant: C = "text-sm/normal",
            isDraft: R = !1,
        } = e,
        P = (0, s.hQ)(),
        w = (e) => {
            e.stopPropagation();
        },
        D = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_, {
                    showDraftBadge: R,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        className: f.productThumbnail,
                        style: { height: N },
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: f.productDetails,
                    children: [
                        (0, r.jsxs)("div", {
                            className: f.productDetailContent,
                            children: [
                                (0, r.jsx)(a.X6q, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    className: f.productName,
                                    id: P,
                                    children: n,
                                }),
                                (0, r.jsx)(a.Rny, {
                                    children: (0, r.jsx)(l.Z, {
                                        variant: C,
                                        color: "text-muted",
                                        lineClamp: T,
                                        text: i,
                                    }),
                                }),
                                g &&
                                    (0, r.jsx)(p, {
                                        onShowFullDescription: E,
                                        variant: C,
                                    }),
                                I || null == h || "" === h.name
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(a.LZC, { size: 16 }), (0, r.jsx)(u.Z, { role: h })],
                                      }),
                            ],
                        }),
                        O,
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: f.purchaseDetails,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: "interactive-active",
                            className: f.__invalid_productPrice,
                            children: null != c ? c : d.intl.string(d.t["4uLhAg"]),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: f.__invalid_productType,
                            children: b,
                        }),
                        (0, r.jsx)("div", {
                            className: f.productActionButton,
                            onClick: w,
                            children: m,
                        }),
                    ],
                }),
            ],
        });
    return null == y
        ? (0, r.jsx)("article", {
              className: o()(f.productCard, v ? f.opaqueBackground : f.solidBackground),
              "aria-labelledby": P,
              children: D,
          })
        : (0, r.jsx)("div", {
              style: {
                  width: S,
                  height: A,
              },
              children: (0, r.jsx)(a.kL8, {
                  tag: "article",
                  "aria-label": d.intl.formatToPlainString(d.t["e+TmJS"], { productName: n }),
                  className: o()(f.productCard, v ? f.opaqueBackground : f.solidBackground, f.cardClickableContainer),
                  onClick: y,
                  children: D,
              }),
          });
}
