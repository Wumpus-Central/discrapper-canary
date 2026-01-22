n.d(t, { A: () => h }), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(915089),
    l = n(308234),
    c = n(724609),
    u = n(411342),
    d = n(985018),
    f = n(721960);
function p(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: i, children: o } = e;
    return (0, r.jsxs)("div", {
        className: a()(f.v0, i),
        children: [
            o,
            !t &&
                (0, r.jsxs)("div", {
                    className: f.su,
                    children: [
                        (0, r.jsx)(s.XAi, {
                            size: "xs",
                            className: f.hz,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: f.__invalid_unlockText,
                            children: d.intl.string(d.t.YmIiSe),
                        }),
                    ],
                }),
            n &&
                (0, r.jsx)("div", {
                    className: f.vW,
                    children: (0, r.jsx)(c.k, {}),
                }),
        ],
    });
}
function _(e) {
    let { onShowFullDescription: t, variant: n } = e,
        i = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.Text, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-text-hover",
                    children: d.intl.string(d.t["5fmYjW"]),
                }),
                (0, r.jsx)(s.EdP, {
                    size: "xs",
                    color: "currentColor",
                    className: f.D6,
                }),
            ],
        }),
        o = (e) => {
            e.stopPropagation(), null != t && t();
        };
    return null == t
        ? (0, r.jsx)("div", {
              className: f.dO,
              children: i,
          })
        : (0, r.jsx)(s.DUT, {
              className: a()(f.dO, f.hY),
              onClick: o,
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
            showOpaqueBackground: A = !1,
            hideRoleTag: v = !1,
            lineClamp: S = 1,
            cardWidth: I = 332,
            cardHeight: T,
            thumbnailHeight: C = 187,
            descriptionTextVariant: N = "text-sm/normal",
            isDraft: R = !1,
        } = e,
        w = (0, o.Ld)(),
        P = (e) => {
            e.stopPropagation();
        },
        D = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p, {
                    showDraftBadge: R,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: t,
                        className: f.K_,
                        style: { height: C },
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: f.MS,
                    children: [
                        (0, r.jsxs)("div", {
                            className: f.Ag,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: f.tZ,
                                    id: w,
                                    children: n,
                                }),
                                (0, r.jsx)(s.M1G, {
                                    children: (0, r.jsx)(l.A, {
                                        variant: N,
                                        color: "text-muted",
                                        lineClamp: S,
                                        text: i,
                                    }),
                                }),
                                g &&
                                    (0, r.jsx)(_, {
                                        onShowFullDescription: E,
                                        variant: N,
                                    }),
                                v || null == h || "" === h.name
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(s.hKd, { size: 16 }), (0, r.jsx)(u.A, { role: h })],
                                      }),
                            ],
                        }),
                        O,
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: f.kP,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "interactive-text-active",
                            className: f.__invalid_productPrice,
                            children: null != c ? c : d.intl.string(d.t["4uLhAp"]),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: f.__invalid_productType,
                            children: b,
                        }),
                        (0, r.jsx)("div", {
                            className: f.QW,
                            onClick: P,
                            children: m,
                        }),
                    ],
                }),
            ],
        });
    return null == y
        ? (0, r.jsx)("article", {
              className: a()(f.Um, A ? f.sG : f.Wi),
              "aria-labelledby": w,
              children: D,
          })
        : (0, r.jsx)("div", {
              style: {
                  width: I,
                  height: T,
              },
              children: (0, r.jsx)(s.sqX, {
                  tag: "article",
                  "aria-label": d.intl.formatToPlainString(d.t["e+TmJa"], { productName: n }),
                  className: a()(f.Um, A ? f.sG : f.Wi, f.GA),
                  onClick: y,
                  children: D,
              }),
          });
}
