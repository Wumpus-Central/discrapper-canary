n.d(t, { A: () => _ });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    a = n(194261),
    r = n(834730),
    o = n(935286),
    c = n(939249),
    d = n(297264),
    u = n(346055),
    m = n(696986),
    h = n(890856),
    g = n(915089),
    p = n(839656),
    A = n(724609),
    x = n(411342),
    f = n(375708),
    E = n(442182);
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
                        (0, i.jsx)(a.LockIcon, {
                            size: "xs",
                            className: E.hz,
                            color: "currentColor",
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-overlay-light",
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
                (0, i.jsx)(r.E, {
                    variant: n,
                    color: null != t ? "text-link" : "interactive-text-hover",
                    children: f.intl.string(f.t["5fmYjW"]),
                }),
                (0, i.jsx)(o.E, { size: "xs", color: "currentColor", className: E.D6 }),
            ],
        });
    return null == t
        ? (0, i.jsx)("div", { className: E.dO, children: l })
        : (0, i.jsx)(c.D, {
              className: s()(E.dO, E.hY),
              onClick: function (e) {
                  e.stopPropagation(), null != t && t();
              },
              children: l,
          });
}
function _(e) {
    let {
            imageUrl: t,
            name: n,
            description: l,
            formattedPrice: a,
            role: o,
            ctaComponent: c,
            shouldShowFullDescriptionButton: A = !0,
            onShowFullDescription: _,
            productType: v,
            onTapCard: N,
            actionMenu: j,
            showOpaqueBackground: T = !1,
            hideRoleTag: S = !1,
            lineClamp: y = 1,
            cardWidth: b = 332,
            cardHeight: R,
            thumbnailHeight: L = 187,
            descriptionTextVariant: M = "text-sm/normal",
            isDraft: k = !1,
        } = e,
        O = (0, g.Ld)(),
        P = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I, {
                    showDraftBadge: k,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, i.jsx)("img", { alt: "", src: t, className: E.K_, style: { height: L } }),
                }),
                (0, i.jsxs)("div", {
                    className: E.MS,
                    children: [
                        (0, i.jsxs)("div", {
                            className: E.Ag,
                            children: [
                                (0, i.jsx)(d.D, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: E.tZ,
                                    id: O,
                                    children: n,
                                }),
                                (0, i.jsx)(u.M, {
                                    children: (0, i.jsx)(p.A, {
                                        variant: M,
                                        color: "text-muted",
                                        lineClamp: y,
                                        text: l,
                                    }),
                                }),
                                A && (0, i.jsx)(C, { onShowFullDescription: _, variant: M }),
                                S || null == o || "" === o.name
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(m.h, { size: 16 }), (0, i.jsx)(x.A, { role: o })],
                                      }),
                            ],
                        }),
                        j,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: E.kP,
                    children: [
                        (0, i.jsx)(r.E, {
                            variant: "text-md/medium",
                            color: "interactive-text-active",
                            className: E.__invalid_productPrice,
                            children: a ?? f.intl.string(f.t["4uLhAp"]),
                        }),
                        (0, i.jsx)(r.E, {
                            variant: "text-xxs/normal",
                            color: "text-default",
                            className: E.__invalid_productType,
                            children: v,
                        }),
                        (0, i.jsx)("div", {
                            className: E.QW,
                            onClick: function (e) {
                                e.stopPropagation();
                            },
                            children: c,
                        }),
                    ],
                }),
            ],
        });
    return null == N
        ? (0, i.jsx)("article", { className: s()(E.Um, T ? E.sG : E.Wi), "aria-labelledby": O, children: P })
        : (0, i.jsx)("div", {
              style: { width: b, height: R },
              children: (0, i.jsx)(h.s, {
                  tag: "article",
                  "aria-label": f.intl.formatToPlainString(f.t["e+TmJa"], { productName: n }),
                  className: s()(E.Um, T ? E.sG : E.Wi, E.GA),
                  onClick: N,
                  children: P,
              }),
          });
}
