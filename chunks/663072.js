s.d(e, { default: () => b });
var a = s(627968);
s(64700);
var n = s(523527),
    o = s(976860),
    r = s(954571),
    l = s(244975),
    d = s(788868),
    c = s(652215),
    i = s(985018),
    _ = s(677706);
function b(t) {
    let { onClose: e, ...b } = t,
        C = (0, a.jsx)("img", { src: s(947137), className: _.Qw, alt: "" });
    return (0, a.jsx)(l.A, {
        title: i.intl.string(i.t.YqknLn),
        glowUp: i.intl.string(i.t["3hj4kU"]),
        body: i.intl.string(i.t["3hj4kU"]),
        artElement: C,
        artContainerClassName: _.JS,
        type: d.e.VOICE_FILTERS_UPSELL,
        onClose: e,
        onSubscribeClick: n.A,
        secondaryCTA: i.intl.string(i.t.ZnqyZ2),
        onSecondaryClick: function () {
            (0, n.A)(),
                e(),
                r.default.track(c.HAw.PREMIUM_PROMOTION_OPENED, {
                    location_section: c.JJy.VOICE_FILTERS_UPSELL_MODAL,
                    location_object: c.ZSU.NAVIGATION_LINK,
                }),
                (0, o.pX)(c.BVt.APPLICATION_STORE);
        },
        showEnhancedUpsell: !0,
        enableArtBoxShadow: !1,
        headerClassName: _.wx,
        modalClassName: _.yl,
        smallText: !0,
        footerClassName: _.qr,
        subscribeButtonClassname: _.xF,
        showBetaBadge: !0,
        ...b,
    });
}
