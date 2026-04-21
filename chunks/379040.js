n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(854627),
    r = n(778712),
    a = n(985018),
    o = n(45861);
function d(e) {
    let { referrer: t } = e,
        { avatarSrc: n, eventHandlers: d } = (0, l.A)({ userId: t?.id, size: r._3.SIZE_24, animateOnHover: !0 });
    return (0, i.jsx)("div", {
        className: o.$6,
        children: (0, i.jsxs)("div", {
            className: o.sc,
            children: [
                (0, i.jsx)("div", {
                    className: o.kR,
                    children: (0, i.jsx)(s.euF, { src: n, "aria-label": t.username, size: r._3.SIZE_32, ...d }),
                }),
                (0, i.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    className: o.FS,
                    color: "text-strong",
                    children: a.intl.format(a.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
