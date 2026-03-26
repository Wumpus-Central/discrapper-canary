n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(854627),
    a = n(778712),
    r = n(985018),
    o = n(173813);
function d(e) {
    let { referrer: t, enablePremiumBrandRefresh: n } = e,
        { avatarSrc: d, eventHandlers: c } = (0, l.A)({
            userId: t?.id,
            size: n ? a._3.SIZE_24 : a._3.SIZE_32,
            animateOnHover: !0,
        });
    return (0, i.jsx)("div", {
        className: o.E2,
        children: (0, i.jsxs)("div", {
            className: o.hA,
            children: [
                (0, i.jsx)("div", {
                    className: o.kR,
                    children: (0, i.jsx)(s.euF, {
                        className: o.Kk,
                        src: d,
                        "aria-label": t.username,
                        size: a._3.SIZE_32,
                        ...c,
                    }),
                }),
                (0, i.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    className: o.Mn,
                    color: "text-strong",
                    children: r.intl.format(r.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
