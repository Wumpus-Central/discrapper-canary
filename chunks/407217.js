n.d(t, { K: () => g, default: () => h });
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(253604),
    l = n(287809),
    r = n(87719),
    o = n(414345),
    c = n(244975),
    d = n(788868),
    u = n(652215),
    _ = n(985018),
    m = n(698290),
    A = n(880223);
function g(e) {
    let { analyticsSource: t, onSubscribeFinish: a } = e,
        r = l.default.getCurrentUser();
    null != r &&
        (0, s.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 407217));
            return (n) =>
                (0, i.jsx)(e, {
                    user: r,
                    analyticsSource: t,
                    analyticsLocation: { section: u.JJy.USER_PROFILE, object: u.ZSU.BUTTON_CTA },
                    onSubscribeFinish: a,
                    ...n,
                });
        });
}
function h(e) {
    let { user: t, onClose: n, ...s } = e;
    return (0, o.g1)({ onPremiumTryItOutProfile: !0, location: "PremiumTryItOutProfileUpsell" })
        ? (0, i.jsx)(c.F, {
              title: _.intl.string(_.t.reVc0M),
              subtitle: _.intl.string(_.t.KckEj7),
              graphic: { src: A.A, type: "image" },
              onSecondaryClick: () => {
                  (0, r.x)(n);
              },
              secondaryCTA: _.intl.string(_.t.PcTCB7),
              onClose: n,
              showEnhancedUpsell: !0,
              ...s,
          })
        : (0, i.jsx)(c.A, {
              modalClassName: m.yl,
              modalContentClassName: m.jE,
              type: d.e.TRY_IT_OUT_MODAL_UPSELL,
              title: _.intl.string(_.t.reVc0M),
              body: _.intl.string(_.t.KckEj7),
              glowUp: _.intl.string(_.t.reVc0M),
              onSecondaryClick: () => {
                  (0, r.x)(n);
              },
              secondaryCTA: _.intl.string(_.t.PcTCB7),
              onClose: n,
              enableArtBoxShadow: !1,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: (0, i.jsx)("div", {
                  className: m.wC,
                  children: (0, i.jsx)(a.A, { containerClassName: m.i1, user: t, disabledInputs: !0 }),
              }),
              ...s,
          });
}
