"use strict";
n.d(t, { A: () => f, n: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(854627),
    u = n(848245),
    c = n(778712),
    d = n(985018),
    _ = n(526081);
function f(e) {
    let { smallerText: t, className: n, textColor: s, isApplicationHome: l, enablePremiumBrandRefresh: f } = e,
        h = (0, u.b)().slice(0, 3).reverse(),
        m = h.map((e, t) =>
            (0, r.jsx)(p, { affinity: e, applyMask: t !== h.length - 1, size: f ? c._3.SIZE_24 : c._3.SIZE_32 }, e.id),
        ),
        E = (e) => (null != e.globalName ? e.globalName : e.username),
        g = i.useMemo(
            () =>
                3 === h.length
                    ? d.intl.formatToPlainString(d.t.c7ETJH, { username: E(h[2]) })
                    : 2 === h.length
                      ? d.intl.formatToPlainString(d.t["st8Rh/"], { username: E(h[1]), otherUsername: E(h[0]) })
                      : 1 === h.length
                        ? d.intl.formatToPlainString(d.t.dpjXPL, { username: E(h[0]) })
                        : "",
            [h],
        );
    if (0 === h.length) return null;
    function A() {
        return f
            ? (0, r.jsx)(o.Text, { variant: "text-sm/medium", color: s, children: g })
            : t || l
              ? (0, r.jsx)(o.Text, { variant: l ? "text-sm/normal" : "text-lg/medium", color: s, children: g })
              : (0, r.jsx)(o.Heading, { variant: "heading-xl/medium", color: s, children: g });
    }
    return (0, r.jsxs)("div", {
        className: a()(f ? _.bD : _.kL, n, { [_.gr]: !f && l }),
        children: [
            (0, r.jsx)("div", { className: _.zc, children: m }),
            (0, r.jsx)("div", { className: _.FS, children: (0, r.jsx)(A, {}) }),
        ],
    });
}
function p(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: s, eventHandlers: u } = (0, l.A)({ userId: t?.id, size: i, animateOnHover: !0 });
    return (0, r.jsx)(o.euF, { className: a()(_.Kk, { [_.dK]: n }), src: s, "aria-label": t.username, size: i, ...u });
}
