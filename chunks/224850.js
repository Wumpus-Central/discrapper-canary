"use strict";
n.d(t, { A: () => p, n: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(854627),
    c = n(560138),
    d = n(778712),
    _ = n(985018),
    f = n(115640);
function p(e) {
    let { smallerText: t, className: n, textColor: a, isApplicationHome: u, enablePremiumBrandRefresh: p } = e,
        m = (0, o.bG)([c.A], () => c.A.affinities.slice(0, 3).reverse()),
        g = m.map((e, t) =>
            (0, r.jsx)(h, { affinity: e, applyMask: t !== m.length - 1, size: p ? d._3.SIZE_24 : d._3.SIZE_32 }, e.id),
        ),
        E = (e) => (null != e.globalName ? e.globalName : e.username),
        A = i.useMemo(
            () =>
                3 === m.length
                    ? _.intl.formatToPlainString(_.t.c7ETJH, { username: E(m[2]) })
                    : 2 === m.length
                      ? _.intl.formatToPlainString(_.t["st8Rh/"], { username: E(m[1]), otherUsername: E(m[0]) })
                      : 1 === m.length
                        ? _.intl.formatToPlainString(_.t.dpjXPL, { username: E(m[0]) })
                        : "",
            [m],
        );
    if (0 === m.length) return null;
    function I() {
        return p
            ? (0, r.jsx)(l.Text, { variant: "text-sm/medium", color: a, children: A })
            : t || u
              ? (0, r.jsx)(l.Text, { variant: u ? "text-sm/normal" : "text-lg/medium", color: a, children: A })
              : (0, r.jsx)(l.Heading, { variant: "heading-xl/medium", color: a, children: A });
    }
    return (0, r.jsxs)("div", {
        className: s()(p ? f.bD : f.kL, n, { [f.gr]: !p && u }),
        children: [
            (0, r.jsx)("div", { className: f.zc, children: g }),
            (0, r.jsx)("div", { className: f.FS, children: (0, r.jsx)(I, {}) }),
        ],
    });
}
function h(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: a, eventHandlers: o } = (0, u.A)({ userId: t?.id, size: i, animateOnHover: !0 });
    return (0, r.jsx)(l.euF, { className: s()(f.Kk, { [f.dK]: n }), src: a, "aria-label": t.username, size: i, ...o });
}
