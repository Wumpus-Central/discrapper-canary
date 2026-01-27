n.d(t, {
    R: () => S,
    _: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(575593),
    l = n(311907),
    c = n(554146),
    u = n(435371),
    d = n(397927),
    f = n(713517),
    p = n(379848),
    _ = n(661492),
    h = n(287809),
    m = n(466459),
    g = n(620434),
    E = n(49999),
    y = n(985018),
    b = n(394236);

function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
    let {
            product: t,
            iconSize: n = 20,
            className: a,
            enableHoverEffect: l = !1,
            isCardHovered: c = !0,
            selectedVariantIndex: u,
        } = e,
        f = i.useMemo(() => {
            var e;
            return t.type === s.R.VARIANTS_GROUP && null != u && (null == (e = t.variants) ? void 0 : e[u]) != null
                ? t.variants[u]
                : t;
        }, [t, u]),
        p = f.skuId,
        { isPurchased: h } = (0, m.h)(f),
        g = i.useMemo(() => {
            let e = "6/4";
            switch (t.type) {
                case s.R.NAMEPLATE:
                case s.R.AVATAR_DECORATION:
                    e = "16/9";
                    break;
                case s.R.BUNDLE:
                case s.R.PROFILE_EFFECT:
                default:
                    e = "6/4";
            }
            return {
                type: "dynamic",
                component: d.Oz7.COLLECTIBLES_PREVIEW,
                aspectRatio: e,
                props: {
                    product: t,
                    forCollectedModal: !0,
                },
            };
        }, [t]);
    return h
        ? null
        : (0, _.q)(f)
          ? (0, r.jsx)(T, {
                skuId: p,
                className: o()(l && b.FU, a),
                iconSize: n,
                isCardHovered: c,
                nuxGraphic: g,
            })
          : (0, r.jsx)(T, {
                skuId: p,
                className: o()(b.NY, a),
                iconSize: n,
                isCardHovered: c,
                disabled: !0,
                tooltipOverrideText: y.intl.string(y.t["50TX9k"]),
                nuxGraphic: g,
            });
};

function T(e) {
    let {
            skuId: t,
            className: a,
            iconSize: s = 20,
            disabled: _,
            isCardHovered: m,
            tooltipOverrideText: O,
            nuxGraphic: A,
            onClick: S,
        } = e,
        [T, C] = (0, p.kn)([c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        N = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        w = T === c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        {
            isWishlisted: R,
            isBusy: P,
            handleToggle: D,
        } = (0, g.c)({
            currentUser: N,
            skuId: t,
            onAddSuccess: () => {
                w &&
                    null != A &&
                    ((0, d.mMO)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                I(v({}, t), {
                                    graphic: A,
                                }),
                            );
                    }),
                    C(E.i.USER_DISMISS));
            },
            onError: () => {
                (0, d.showToast)((0, d.createToast)(y.intl.string(y.t.F8FvUy), d.ToastType.FAILURE)),
                    d.ORC.announce(y.intl.string(y.t.F8FvUy));
            },
        }),
        L = i.useRef(null),
        x = (0, f.M)(L),
        M = R ? d.C3E : d.yhu,
        j = R || x ? b.Pc : b.i7,
        k = i.useCallback(
            async (e) => {
                e.stopPropagation(), null == S || S(), await D();
            },
            [S, D],
        ),
        U = R ? y.intl.string(y.t.yr9TTf) : y.intl.string(y.t["8DkMEQ"]);
    return (m || R) && null != N
        ? _
            ? (0, r.jsx)(u.m_, {
                  text: null != O ? O : U,
                  "aria-label": null != O ? O : U,
                  children: (0, r.jsx)(d.DUT, {
                      className: o()(b.ij, b.NY, a),
                      innerRef: L,
                      onClick: (e) => e.stopPropagation(),
                      "aria-disabled": !0,
                      children: (0, r.jsx)(M, {
                          colorClass: b.rM,
                          size: "custom",
                          height: s,
                          width: s,
                      }),
                  }),
              })
            : w
              ? (0, r.jsx)(u.un, {
                    title: y.intl.string(y.t["47Rhc3"]),
                    body: y.intl.string(y.t.PXjA0b),
                    "aria-label": U,
                    children: (0, r.jsx)(d.DUT, {
                        className: o()(b.ij, a),
                        innerRef: L,
                        onClick: k,
                        "aria-label": U,
                        "aria-busy": P,
                        children: (0, r.jsx)(M, {
                            colorClass: j,
                            size: "custom",
                            height: s,
                            width: s,
                        }),
                    }),
                })
              : (0, r.jsx)(
                    u.m_,
                    {
                        text: null != O ? O : U,
                        "aria-label": null != O ? O : U,
                        children: (0, r.jsx)(d.DUT, {
                            className: o()(b.ij, a),
                            innerRef: L,
                            onClick: k,
                            "aria-label": U,
                            "aria-busy": P,
                            children: (0, r.jsx)(M, {
                                colorClass: j,
                                size: "custom",
                                height: s,
                                width: s,
                            }),
                        }),
                    },
                    "wishlist-button-hovering-".concat(m),
                )
        : null;
}
