"use strict";
n.d(t, { A: () => h, n: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(854627),
    c = n(560138),
    d = n(778712),
    _ = n(985018),
    f = n(969969);
function h(e) {
    let { smallerText: t, className: n, textColor: s, isApplicationHome: u, enablePremiumBrandRefresh: h } = e,
        m = (0, o.bG)([c.A], () => c.A.affinities.slice(0, 3).reverse()),
        E = m.map((e, t) =>
            (0, r.jsx)(p, { affinity: e, applyMask: t !== m.length - 1, size: h ? d._3.SIZE_24 : d._3.SIZE_32 }, e.id),
        ),
        g = (e) => (null != e.globalName ? e.globalName : e.username),
        A = i.useMemo(
            () =>
                3 === m.length
                    ? _.intl.formatToPlainString(_.t.c7ETJH, { username: g(m[2]) })
                    : 2 === m.length
                      ? _.intl.formatToPlainString(_.t["st8Rh/"], { username: g(m[1]), otherUsername: g(m[0]) })
                      : 1 === m.length
                        ? _.intl.formatToPlainString(_.t.dpjXPL, { username: g(m[0]) })
                        : "",
            [m],
        );
    if (0 === m.length) return null;
    function I() {
        return h
            ? (0, r.jsx)(l.Text, { variant: "text-sm/medium", color: s, children: A })
            : t || u
              ? (0, r.jsx)(l.Text, { variant: u ? "text-sm/normal" : "text-lg/medium", color: s, children: A })
              : (0, r.jsx)(l.Heading, { variant: "heading-xl/medium", color: s, children: A });
    }
    return (0, r.jsxs)("div", {
        className: a()(h ? f.bD : f.kL, n, { [f.gr]: !h && u }),
        children: [
            (0, r.jsx)("div", { className: f.zc, children: E }),
            (0, r.jsx)("div", { className: f.FS, children: (0, r.jsx)(I, {}) }),
        ],
    });
}
function p(e) {
    let { affinity: t, applyMask: n, size: i } = e,
        { avatarSrc: s, eventHandlers: o } = (0, u.A)({ userId: t?.id, size: i, animateOnHover: !0 });
    return (0, r.jsx)(l.euF, { className: a()(f.Kk, { [f.dK]: n }), src: s, "aria-label": t.username, size: i, ...o });
}
