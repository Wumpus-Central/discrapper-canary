"use strict";
n.d(t, { R: () => I, _: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(575593),
    l = n(311907),
    u = n(554146),
    c = n(435371),
    d = n(397927),
    _ = n(379848),
    f = n(661492),
    p = n(287809),
    h = n(466459),
    m = n(620434),
    g = n(49999),
    E = n(985018),
    A = n(394236);
let I = (e) => {
    let {
            product: t,
            iconSize: n = 20,
            className: a,
            enableHoverEffect: l = !1,
            isCardHovered: u = !0,
            selectedVariantIndex: c,
        } = e,
        _ = i.useMemo(
            () => (t.type === o.R.VARIANTS_GROUP && null != c && t.variants?.[c] != null ? t.variants[c] : t),
            [t, c],
        ),
        p = _.skuId,
        { isPurchased: m } = (0, h.h)(_),
        g = i.useMemo(() => {
            let e = "6/4";
            switch (t.type) {
                case o.R.NAMEPLATE:
                case o.R.AVATAR_DECORATION:
                    e = "16/9";
                    break;
                case o.R.BUNDLE:
                case o.R.PROFILE_EFFECT:
                default:
                    e = "6/4";
            }
            return {
                type: "dynamic",
                component: d.Oz7.COLLECTIBLES_PREVIEW,
                aspectRatio: e,
                props: { product: t, forCollectedModal: !0 },
            };
        }, [t]);
    return m
        ? null
        : (0, f.q)(_)
          ? (0, r.jsx)(T, { skuId: p, className: s()(l && A.FU, a), iconSize: n, isCardHovered: u, nuxGraphic: g })
          : (0, r.jsx)(T, {
                skuId: p,
                className: s()(A.NY, a),
                iconSize: n,
                isCardHovered: u,
                disabled: !0,
                tooltipOverrideText: E.intl.string(E.t["50TX9k"]),
                nuxGraphic: g,
            });
};
function T(e) {
    let {
            skuId: t,
            className: a,
            iconSize: o = 20,
            disabled: f,
            isCardHovered: h,
            tooltipOverrideText: I,
            nuxGraphic: T,
            onClick: y,
        } = e,
        [S, v] = (0, _.kn)([u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        C = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        b = S === u.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        { reducedMotion: N } = i.useContext(d.CZY),
        {
            isWishlisted: R,
            isBusy: O,
            handleToggle: D,
        } = (0, m.c)({
            currentUser: C,
            skuId: t,
            onAddSuccess: () => {
                b &&
                    null != T &&
                    ((0, d.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, r.jsx)(e, { ...t, graphic: T });
                    }),
                    v(g.i.USER_DISMISS));
            },
            onError: () => {
                (0, d.showToast)((0, d.createToast)(E.intl.string(E.t.F8FvUy), d.ToastType.FAILURE)),
                    d.ORC.announce(E.intl.string(E.t.F8FvUy));
            },
        }),
        L = i.useRef(null),
        [w, x] = i.useState(!1),
        P = R && !w,
        M = P ? d.C3E : d.yhu,
        k = P ? A.Pc : A.i7;
    i.useEffect(() => {
        x(!1);
    }, [t]);
    let U = i.useCallback(
            (e) => {
                e.stopPropagation(), y?.(), R || N.enabled ? R && w && x(!1) : x(!0), D();
            },
            [y, D, R, N.enabled, w],
        ),
        G = R ? E.intl.string(E.t.yr9TTf) : E.intl.string(E.t["8DkMEQ"]),
        V = !R && !w,
        F = i.useCallback(
            (e) => {
                e.target === e.currentTarget && w && requestAnimationFrame(() => x(!1));
            },
            [w],
        ),
        B = (e) =>
            N.enabled
                ? (0, r.jsx)(M, { colorClass: e ?? k, size: "custom", height: o, width: o })
                : (0, r.jsxs)("div", {
                      className: s()(A.zc, V && A.QX),
                      children: [
                          (0, r.jsx)("span", {
                              className: s()(A.P0, V && A.bP),
                              children: (0, r.jsx)(M, { colorClass: e ?? k, size: "custom", height: o, width: o }),
                          }),
                          (0, r.jsx)("span", {
                              className: s()(A.Do, w && A.Fb),
                              onAnimationEnd: F,
                              children: (0, r.jsx)(d.C3E, { size: "custom", height: o, width: o }),
                          }),
                      ],
                  });
    return (h || R) && null != C
        ? f
            ? (0, r.jsx)(c.m_, {
                  text: I ?? G,
                  "aria-label": I ?? G,
                  children: (0, r.jsx)(d.DUT, {
                      className: s()(A.ij, A.NY, a),
                      innerRef: L,
                      onClick: (e) => e.stopPropagation(),
                      "aria-disabled": !0,
                      children: (0, r.jsx)(M, { colorClass: A.rM, size: "custom", height: o, width: o }),
                  }),
              })
            : b
              ? (0, r.jsx)(c.un, {
                    title: E.intl.string(E.t["47Rhc3"]),
                    body: E.intl.string(E.t.PXjA0b),
                    "aria-label": G,
                    children: (0, r.jsx)(d.DUT, {
                        className: s()(A.ij, a),
                        innerRef: L,
                        onClick: U,
                        "aria-label": G,
                        "aria-busy": O,
                        children: B(),
                    }),
                })
              : (0, r.jsx)(
                    c.m_,
                    {
                        text: I ?? G,
                        "aria-label": I ?? G,
                        children: (0, r.jsx)(d.DUT, {
                            className: s()(A.ij, a),
                            innerRef: L,
                            onClick: U,
                            "aria-label": G,
                            "aria-busy": O,
                            children: B(),
                        }),
                    },
                    `wishlist-button-hovering-${w || h}`,
                )
        : null;
}
