n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(854627),
    r = n(778712),
    a = n(985018),
    o = n(45861);
function d(e) {
    let { referrer: t, enablePremiumBrandRefresh: n } = e,
        { avatarSrc: d, eventHandlers: c } = (0, l.A)({
            userId: t?.id,
            size: n ? r._3.SIZE_24 : r._3.SIZE_32,
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
                        size: r._3.SIZE_32,
                        ...c,
                    }),
                }),
                (0, i.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    className: o.Mn,
                    color: "text-strong",
                    children: a.intl.format(a.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
