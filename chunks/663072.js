s.d(e, { default: () => h });
var n = s(627968);
s(64700);
var a = s(523527),
    l = s(976860),
    o = s(954571),
    i = s(414345),
    r = s(244975),
    c = s(788868),
    d = s(652215),
    C = s(985018),
    _ = s(677706),
    b = s(947137);
function h(t) {
    let { onClose: e, ...h } = t,
        p = (0, n.jsx)("img", { src: s(947137), className: _.Qw, alt: "" });
    function g() {
        (0, a.A)(),
            e(),
            o.default.track(d.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: d.JJy.VOICE_FILTERS_UPSELL_MODAL,
                location_object: d.ZSU.NAVIGATION_LINK,
            }),
            (0, l.pX)(d.BVt.APPLICATION_STORE);
    }
    return (0, i.g1)({ location: "VoiceFiltersUpsell" })
        ? (0, n.jsx)(r.F, {
              title: C.intl.string(C.t.YqknLn),
              subtitle: C.intl.string(C.t["3hj4kU"]),
              graphic: { src: b, type: "image" },
              secondaryCTA: C.intl.string(C.t.ZnqyZ2),
              onSecondaryClick: g,
              onClose: e,
              showEnhancedUpsell: !0,
              showBetaBadge: !0,
              ...h,
          })
        : (0, n.jsx)(r.A, {
              title: C.intl.string(C.t.YqknLn),
              glowUp: C.intl.string(C.t["3hj4kU"]),
              body: C.intl.string(C.t["3hj4kU"]),
              artElement: p,
              artContainerClassName: _.JS,
              type: c.e.VOICE_FILTERS_UPSELL,
              onClose: e,
              onSubscribeClick: a.A,
              secondaryCTA: C.intl.string(C.t.ZnqyZ2),
              onSecondaryClick: g,
              showEnhancedUpsell: !0,
              enableArtBoxShadow: !1,
              headerClassName: _.wx,
              modalClassName: _.yl,
              smallText: !0,
              footerClassName: _.qr,
              subscribeButtonClassname: _.xF,
              showBetaBadge: !0,
              ...h,
          });
}
