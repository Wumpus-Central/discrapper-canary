n.d(t, { A: () => C });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(194261),
    a = n(834730),
    o = n(935286),
    d = n(939249),
    c = n(297264),
    u = n(346055),
    m = n(696986),
    h = n(890856),
    g = n(915089),
    p = n(839656),
    A = n(724609),
    x = n(411342),
    f = n(375708),
    I = n(442182);
function E(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: l, children: o } = e;
    return (0, i.jsxs)("div", {
        className: s()(I.v0, l),
        children: [
            o,
            !t &&
                (0, i.jsxs)("div", {
                    className: I.su,
                    children: [
                        (0, i.jsx)(r.LockIcon, {
                            size: "xs",
                            className: I.hz,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(a.E, {
                            variant: "text-sm/normal",
                            color: "text-overlay-light",
                            className: I.__invalid_unlockText,
                            children: f.intl.string(f.t.YmIiSe),
                        }),
                    ],
                }),
            n && (0, i.jsx)("div", { className: I.vW, children: (0, i.jsx)(A.k, {}) }),
        ],
    });
}
function v(e) {
    let { onShowFullDescription: t, variant: n } = e,
        l = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.E, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-text-hover",
                    children: f.intl.string(f.t["5fmYjW"]),
                }),
                (0, i.jsx)(o.E, { size: "xs", color: "currentColor", className: I.D6 }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: I.dO, children: l })
        : (0, i.jsx)(d.D, {
              className: s()(I.dO, I.hY),
              onClick: function (e) {
                  (e.stopPropagation(), null != t && t());
              },
              children: l,
          });
}
function C(e) {
    let {
            imageUrl: t,
            name: n,
            description: l,
            formattedPrice: r,
            role: o,
            ctaComponent: d,
            shouldShowFullDescriptionButton: A = !0,
            onShowFullDescription: C,
            productType: _,
            onTapCard: j,
            actionMenu: N,
            showOpaqueBackground: y = !1,
            hideRoleTag: T = !1,
            lineClamp: S = 1,
            cardWidth: b = 332,
            cardHeight: k,
            thumbnailHeight: R = 187,
            descriptionTextVariant: L = "text-sm/normal",
            isDraft: M = !1,
        } = e,
        P = (0, g.Ld)(),
        D = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E, {
                    showDraftBadge: M,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, i.jsx)("img", { alt: "", src: t, className: I.K_, style: { height: R } }),
                }),
                (0, i.jsxs)("div", {
                    className: I.MS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: I.Ag,
                            children: [
                                (0, i.jsx)(c.D, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: I.tZ,
                                    id: P,
                                    children: n,
                                }),
                                (0, i.jsx)(u.M, {
                                    children: (0, i.jsx)(p.A, {
                                        variant: L,
                                        color: "text-muted",
                                        lineClamp: S,
                                        text: l,
                                    }),
                                }),
                                A && (0, i.jsx)(v, { onShowFullDescription: C, variant: L }),
                                T || null == o || "" === o.name
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
                    className: I.kP,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-active",
                            className: I.__invalid_productPrice,
                            children: r ?? f.intl.string(f.t["4uLhAp"]),
                        }),
                        (0, i.jsx)(a.E, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: I.__invalid_productType,
                            children: _,
                        }),
                        (0, i.jsx)("div", {
                            className: I.QW,
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
        ? (0, i.jsx)("article", { className: s()(I.Um, y ? I.sG : I.Wi), "aria-labelledby": P, children: D })
        : (0, i.jsx)("div", {
              style: { width: b, height: k },
              children: (0, i.jsx)(h.s, {
                  tag: "article",
                  "aria-label": f.intl.formatToPlainString(f.t["e+TmJa"], { productName: n }),
                  className: s()(I.Um, y ? I.sG : I.Wi, I.GA),
                  onClick: j,
                  children: D,
              }),
          });
}
