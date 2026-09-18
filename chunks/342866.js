l.d(n, { $: () => g, A: () => f });
var a = l(477900);
l(582128);
var t = l(778712),
    r = l(97808),
    i = l(469054),
    s = l(101058),
    u = l(854627),
    o = l(930349),
    d = l(375708);
let c = t._3.SIZE_72;
function g(e, n) {
    let l = null === e,
        a = void 0 === e;
    return l || (a && null == n)
        ? d.intl.string(d.t["3Xph0/"])
        : a
          ? d.intl.string(d.t["16GpW/"])
          : ((e.assetOrigin === i.E.ARCHIVED_ASSET ? e.originalAsset.description : e.description) ??
            d.intl.string(d.t.cqdtrR));
}
function v(e) {
    let { userId: n, guildId: l, avatarChange: t, shouldAnimate: i, imageInteractingClassName: o } = e,
        { avatarSrc: d } = (0, u.A)({
            userId: n,
            guildId: l,
            avatarOverride: (0, s.V7)({ userId: n, image: t, canAnimate: i }),
            size: c,
            animateOnHover: !i,
        });
    return (0, a.jsx)(r.eu, { src: d, size: c, className: i ? o : void 0, "aria-hidden": !0 });
}
function f(e) {
    let { userId: n, guildId: l, avatarChange: t, imageInteractingClassName: r, ...i } = e;
    return (0, a.jsx)(o.A, {
        ...i,
        accessibleLabel: d.intl.string(d.t.lqaIxI),
        renderPreview: (e) =>
            (0, a.jsx)(v, { userId: n, guildId: l, avatarChange: t, shouldAnimate: e, imageInteractingClassName: r }),
    });
}
