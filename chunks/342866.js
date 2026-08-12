l.d(n, { $: () => g, A: () => f });
var t = l(477900);
l(582128);
var a = l(778712),
    r = l(97808),
    i = l(469054),
    s = l(101058),
    u = l(854627),
    o = l(930349),
    d = l(375708);
let c = a._3.SIZE_72;
function g(e, n) {
    let l = null === e,
        t = void 0 === e;
    return l || (t && null == n)
        ? d.intl.string(d.t["3Xph0/"])
        : t
          ? d.intl.string(d.t["16GpW/"])
          : ((e.assetOrigin === i.E.ARCHIVED_ASSET ? e.originalAsset.description : e.description) ??
            d.intl.string(d.t.cqdtrR));
}
function v(e) {
    let { userId: n, guildId: l, avatarChange: a, shouldAnimate: i, imageInteractingClassName: o } = e,
        { avatarSrc: d } = (0, u.A)({
            userId: n,
            guildId: l,
            avatarOverride: (0, s.V7)({ userId: n, image: a, canAnimate: i }),
            size: c,
            animateOnHover: !i,
        });
    return (0, t.jsx)(r.eu, { src: d, size: c, className: i ? o : void 0, "aria-hidden": !0 });
}
function f(e) {
    let { userId: n, guildId: l, avatarChange: a, imageInteractingClassName: r, ...i } = e;
    return (0, t.jsx)(o.A, {
        ...i,
        accessibleLabel: d.intl.string(d.t.lqaIxI),
        renderPreview: (e) =>
            (0, t.jsx)(v, { userId: n, guildId: l, avatarChange: a, shouldAnimate: e, imageInteractingClassName: r }),
    });
}
