n.d(t, { Z: () => h }), n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(313201),
    l = n(240657),
    c = n(765400),
    u = n(916001),
    d = n(388032),
    f = n(833398);
function _(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: i, children: s } = e;
    return (0, r.jsxs)("div", {
        className: a()(f.productThumbnailContainer, i),
        children: [
            s,
            !t &&
                (0, r.jsxs)("div", {
                    className: f.purchaseToUnlockBadge,
                    children: [
                        (0, r.jsx)(o.mBM, {
                            size: "xs",
                            className: f.lockIcon,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: f.__invalid_unlockText,
                            children: d.intl.string(d.t.YmIiSe),
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
                (0, r.jsx)(o.Text, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-hover",
                    children: d.intl.string(d.t["5fmYjW"]),
                }),
                (0, r.jsx)(o.ZSh, {
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
        : (0, r.jsx)(o.P3F, {
              className: a()(f.showMoreButton, f.hasAction),
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
            thumbnailHeight: C = 187,
            descriptionTextVariant: N = "text-sm/normal",
            isDraft: R = !1,
        } = e,
        P = (0, s.hQ)(),
        D = (e) => {
            e.stopPropagation();
        },
        w = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_, {
                    showDraftBadge: R,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        className: f.productThumbnail,
                        style: { height: C },
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: f.productDetails,
                    children: [
                        (0, r.jsxs)("div", {
                            className: f.productDetailContent,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    className: f.productName,
                                    id: P,
                                    children: n,
                                }),
                                (0, r.jsx)(o.Rny, {
                                    children: (0, r.jsx)(l.Z, {
                                        variant: N,
                                        color: "text-muted",
                                        lineClamp: T,
                                        text: i,
                                    }),
                                }),
                                g &&
                                    (0, r.jsx)(p, {
                                        onShowFullDescription: E,
                                        variant: N,
                                    }),
                                I || null == h || "" === h.name
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(o.LZC, { size: 16 }), (0, r.jsx)(u.Z, { role: h })],
                                      }),
                            ],
                        }),
                        O,
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: f.purchaseDetails,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "interactive-active",
                            className: f.__invalid_productPrice,
                            children: null != c ? c : d.intl.string(d.t["4uLhAp"]),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: f.__invalid_productType,
                            children: b,
                        }),
                        (0, r.jsx)("div", {
                            className: f.productActionButton,
                            onClick: D,
                            children: m,
                        }),
                    ],
                }),
            ],
        });
    return null == y
        ? (0, r.jsx)("article", {
              className: a()(f.productCard, v ? f.opaqueBackground : f.solidBackground),
              "aria-labelledby": P,
              children: w,
          })
        : (0, r.jsx)("div", {
              style: {
                  width: S,
                  height: A,
              },
              children: (0, r.jsx)(o.kL8, {
                  tag: "article",
                  "aria-label": d.intl.formatToPlainString(d.t["e+TmJa"], { productName: n }),
                  className: a()(f.productCard, v ? f.opaqueBackground : f.solidBackground, f.cardClickableContainer),
                  onClick: y,
                  children: w,
              }),
          });
}
