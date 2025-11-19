n.d(t, {
    O: () => g,
    Z: () => m,
}),
    n(583741);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(518950),
    u = n(357355),
    d = n(268685),
    f = n(388032),
    _ = n(784016);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let { smallerText: t, className: n, textColor: a, isApplicationHome: c, enablePremiumBrandRefresh: p } = e,
        h = (0, s.e7)([u.Z], () => u.Z.affinities.slice(0, 3).reverse()),
        m = h.map((e, t) =>
            (0, r.jsx)(
                g,
                {
                    affinity: e,
                    applyMask: t !== h.length - 1,
                    size: p ? d.EF.SIZE_24 : d.EF.SIZE_32,
                },
                e.id,
            ),
        ),
        E = (e) => (null != e.globalName ? e.globalName : e.username),
        b = i.useMemo(
            () =>
                3 === h.length
                    ? f.intl.formatToPlainString(f.t.c7ETJH, { username: E(h[2]) })
                    : 2 === h.length
                      ? f.intl.formatToPlainString(f.t["st8Rh/"], {
                            username: E(h[1]),
                            otherUsername: E(h[0]),
                        })
                      : 1 === h.length
                        ? f.intl.formatToPlainString(f.t.dpjXPL, { username: E(h[0]) })
                        : "",
            [h],
        );
    if (0 === h.length) return null;
    function y() {
        return p
            ? (0, r.jsx)(l.Text, {
                  variant: "text-sm/medium",
                  color: a,
                  children: b,
              })
            : t || c
              ? (0, r.jsx)(l.Text, {
                    variant: c ? "text-sm/normal" : "text-lg/medium",
                    color: a,
                    children: b,
                })
              : (0, r.jsx)(l.Heading, {
                    variant: "heading-xl/medium",
                    color: a,
                    children: b,
                });
    }
    return (0, r.jsxs)("div", {
        className: o()(p ? _.premiumBrandRefreshContainer : _.container, n, { [_.v2Container]: !p && c }),
        children: [
            (0, r.jsx)("div", {
                className: _.iconContainer,
                children: m,
            }),
            (0, r.jsx)("div", {
                className: _.textContainer,
                children: (0, r.jsx)(y, {}),
            }),
        ],
    });
}
function g(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: a, eventHandlers: s } = (0, c.Z)({
            userId: null == t ? void 0 : t.id,
            size: i,
            animateOnHover: !0,
        });
    return (0, r.jsx)(
        l.qEK,
        h(
            {
                className: o()(_.icon, { [_.mask]: n }),
                src: a,
                "aria-label": t.username,
                size: i,
            },
            s,
        ),
    );
}
