n.d(t, {
    A: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(575593),
    u = n(311907),
    d = n(397927),
    f = n(937008),
    p = n(287070),
    _ = n(576622),
    h = n(287809),
    m = n(674658),
    g = n(898461),
    E = n(203632),
    b = n(14702),
    y = n(764999),
    O = n(985018),
    A = n(245948);

function v(e, t, n) {
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

function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
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

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
    let {
            skuId: t,
            isSelected: n,
            price: a,
            onSelect: o,
            shouldDisplayHeader: v = !1,
            className: I,
            previewHeaderClassName: C,
            hideProfilePreview: N = !1,
        } = e,
        { product: R } = (0, m.q)(t, !0),
        { giftRecipient: w, giftRecipientError: P } = (0, f.Pv)(),
        D = (0, u.bG)([h.default], () => h.default.getCurrentUser()),
        x = (0, y.o7)(R),
        L = i.useRef(null);
    if (null == R) return null;
    let [j] = R.items;
    l()(null != j, "Product item should not be empty");
    let M = () => {
            if ((null == R ? void 0 : R.type) === c.R.BUNDLE) return null;
            switch (j.type) {
                case c.R.AVATAR_DECORATION:
                    return O.intl.string(O.t["7v0T9P"]);
                case c.R.PROFILE_EFFECT:
                    return O.intl.string(O.t.wR5wOo);
                case c.R.NAMEPLATE:
                    return O.intl.string(O.t.x5CoXR);
                default:
                    return null;
            }
        },
        k =
            null != w &&
            w.id !== (null == D ? void 0 : D.id) &&
            R.type !== c.R.BUNDLE &&
            j.type !== c.R.NAMEPLATE &&
            !N,
        U = () => {
            null != t && null != o && o(t);
        };
    return (0, r.jsxs)("div", {
        className: I,
        children: [
            v &&
                (0, r.jsx)("div", {
                    className: s()(A.QU, C),
                    children: (0, r.jsx)(d.D0$, {
                        label: O.intl.string(O.t.PpoJzt),
                        children:
                            k &&
                            (0, r.jsx)(
                                d.YNO,
                                {
                                    targetElementRef: L,
                                    preload: () => (0, _.A)(w.id, w.getAvatarURL(null, 80)),
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            p.A,
                                            T(S({}, e), {
                                                user: w,
                                                pendingAvatar: w.getAvatarURL(null, (0, d.FT9)(d._3J.SIZE_80)),
                                                pendingAvatarDecoration: (0, g.T)(j) ? j : null,
                                                pendingProfileEffect: (0, E.C)(j) ? j : null,
                                                canUsePremiumCustomization: !0,
                                                disabledInputs: !0,
                                                hideExampleButton: !0,
                                            }),
                                        ),
                                    align: "center",
                                    position: "right",
                                    children: (e) =>
                                        (0, r.jsx)(
                                            d.DUT,
                                            T(S({}, e), {
                                                className: A.Nx,
                                                innerRef: L,
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-link",
                                                    children: O.intl.string(O.t["2GnJQL"]),
                                                }),
                                            }),
                                        ),
                                },
                                w.id,
                            ),
                    }),
                }),
            (0, r.jsxs)(d.DUT, {
                tag: "div",
                onClick: U,
                className: s()(A.i1, {
                    [A.no]: n && null == P,
                    [A.cN]: n && null != P,
                }),
                children: [
                    (0, r.jsxs)("div", {
                        className: A.Ug,
                        children: [
                            (0, r.jsx)(b.O, {
                                product: R,
                                fallbackLabel: null,
                            }),
                            (0, r.jsxs)("div", {
                                className: A.JZ,
                                children: [
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        children: x,
                                    }),
                                    (0, r.jsx)(d.Heading, {
                                        variant: "heading-sm/medium",
                                        color: "text-default",
                                        children: M(),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                children: a,
                            }),
                        ],
                    }),
                    n &&
                        null != P &&
                        (0, r.jsx)("div", {
                            className: A.Wh,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: P,
                            }),
                        }),
                ],
            }),
        ],
    });
};
