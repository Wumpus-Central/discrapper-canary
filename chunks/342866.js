l.d(n, { A: () => g });
var t = l(477900);
l(582128);
var a = l(778712),
    r = l(97808),
    i = l(101058),
    s = l(854627),
    u = l(930349),
    o = l(105292);
let d = a._3.SIZE_72;
function c(e) {
    let { userId: n, guildId: l, avatarChange: a, shouldAnimate: u, imageInteractingClassName: o } = e,
        { avatarSrc: c } = (0, s.A)({
            userId: n,
            guildId: l,
            avatarOverride: (0, i.V7)({ userId: n, image: a, canAnimate: u }),
            size: d,
            animateOnHover: !u,
        });
    return (0, t.jsx)(r.eu, { src: c, size: d, className: u ? o : void 0, "aria-hidden": !0 });
}
function g(e) {
    let { userId: n, guildId: l, avatarChange: a, imageInteractingClassName: r, ...i } = e;
    return (0, t.jsx)(u.A, {
        ...i,
        accessibleLabel: o.intl.string(o.t.lqaIxI),
        renderPreview: (e) =>
            (0, t.jsx)(c, { userId: n, guildId: l, avatarChange: a, shouldAnimate: e, imageInteractingClassName: r }),
    });
}
