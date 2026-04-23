s.d(t, { A: () => d });
var r = s(627968);
s(64700);
var a = s(97808),
    i = s(534514),
    n = s(854627),
    l = s(778712),
    o = s(985018),
    c = s(45861);
function d(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: d } = (0, n.A)({ userId: t?.id, size: l._3.SIZE_24, animateOnHover: !0 });
    return (0, r.jsx)("div", {
        className: c.$6,
        children: (0, r.jsxs)("div", {
            className: c.sc,
            children: [
                (0, r.jsx)("div", {
                    className: c.kR,
                    children: (0, r.jsx)(a.eu, { src: s, "aria-label": t.username, size: l._3.SIZE_32, ...d }),
                }),
                (0, r.jsx)(i.D, {
                    variant: "heading-sm/normal",
                    className: c.FS,
                    color: "text-strong",
                    children: o.intl.format(o.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
