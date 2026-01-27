n.d(t, {
    A: () => g,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(397927),
    s = n(915089),
    o = n(308234),
    c = n(724609),
    u = n(411342),
    d = n(985018),
    p = n(721960);

function m(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: i, children: s } = e;
    return (0, r.jsxs)("div", {
        className: l()(p.v0, i),
        children: [
            s,
            !t &&
                (0, r.jsxs)("div", {
                    className: p.su,
                    children: [
                        (0, r.jsx)(a.XAi, {
                            size: "xs",
                            className: p.hz,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: p.__invalid_unlockText,
                            children: d.intl.string(d.t.YmIiSe),
                        }),
                    ],
                }),
            n &&
                (0, r.jsx)("div", {
                    className: p.vW,
                    children: (0, r.jsx)(c.k, {}),
                }),
        ],
    });
}

function f(e) {
    let { onShowFullDescription: t, variant: n } = e,
        i = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.Text, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-text-hover",
                    children: d.intl.string(d.t["5fmYjW"]),
                }),
                (0, r.jsx)(a.EdP, {
                    size: "xs",
                    color: "currentColor",
                    className: p.D6,
                }),
            ],
        });
    return null == t
        ? (0, r.jsx)("div", {
              className: p.dO,
              children: i,
          })
        : (0, r.jsx)(a.DUT, {
              className: l()(p.dO, p.hY),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: i,
          });
}

function g(e) {
    let {
            imageUrl: t,
            name: n,
            description: i,
            formattedPrice: c,
            role: g,
            ctaComponent: h,
            shouldShowFullDescriptionButton: _ = !0,
            onShowFullDescription: b,
            productType: A,
            onTapCard: y,
            actionMenu: v,
            showOpaqueBackground: x = !1,
            hideRoleTag: O = !1,
            lineClamp: E = 1,
            cardWidth: j = 332,
            cardHeight: C,
            thumbnailHeight: I = 187,
            descriptionTextVariant: S = "text-sm/normal",
            isDraft: T = !1,
        } = e,
        N = (0, s.Ld)(),
        P = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m, {
                    showDraftBadge: T,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        className: p.K_,
                        style: {
                            height: I,
                        },
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: p.MS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: p.Ag,
                            children: [
                                (0, r.jsx)(a.Heading, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: p.tZ,
                                    id: N,
                                    children: n,
                                }),
                                (0, r.jsx)(a.M1G, {
                                    children: (0, r.jsx)(o.A, {
                                        variant: S,
                                        color: "text-muted",
                                        lineClamp: E,
                                        text: i,
                                    }),
                                }),
                                _ &&
                                    (0, r.jsx)(f, {
                                        onShowFullDescription: b,
                                        variant: S,
                                    }),
                                O || null == g || "" === g.name
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(a.hKd, {
                                                  size: 16,
                                              }),
                                              (0, r.jsx)(u.A, {
                                                  role: g,
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                        v,
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: p.kP,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/medium",
                            color: "interactive-text-active",
                            className: p.__invalid_productPrice,
                            children: null != c ? c : d.intl.string(d.t["4uLhAp"]),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: p.__invalid_productType,
                            children: A,
                        }),
                        (0, r.jsx)("div", {
                            className: p.QW,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: h,
                        }),
                    ],
                }),
            ],
        });
    return null == y
        ? (0, r.jsx)("article", {
              className: l()(p.Um, x ? p.sG : p.Wi),
              "aria-labelledby": N,
              children: P,
          })
        : (0, r.jsx)("div", {
              style: {
                  width: j,
                  height: C,
              },
              children: (0, r.jsx)(a.sqX, {
                  tag: "article",
                  "aria-label": d.intl.formatToPlainString(d.t["e+TmJa"], {
                      productName: n,
                  }),
                  className: l()(p.Um, x ? p.sG : p.Wi, p.GA),
                  onClick: y,
                  children: P,
              }),
          });
}
