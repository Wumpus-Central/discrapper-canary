n.d(t, { K: () => m, default: () => h });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(253604),
    a = n(287809),
    r = n(87719),
    o = n(414345),
    d = n(244975),
    c = n(788868),
    u = n(652215),
    _ = n(985018),
    g = n(94184),
    A = n(880223);
function m(e) {
    let { analyticsSource: t, onSubscribeFinish: l } = e,
        r = a.default.getCurrentUser();
    null != r &&
        (0, s.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 407217));
            return (n) =>
                (0, i.jsx)(e, {
                    user: r,
                    analyticsSource: t,
                    analyticsLocation: { section: u.JJy.USER_PROFILE, object: u.ZSU.BUTTON_CTA },
                    onSubscribeFinish: l,
                    ...n,
                });
        });
}
function h(e) {
    let { user: t, onClose: n, ...s } = e;
    return (0, o.g1)({ onPremiumTryItOutProfile: !0, location: "PremiumTryItOutProfileUpsell" })
        ? (0, i.jsx)(d.F, {
              title: _.intl.string(_.t.reVc0M),
              subtitle: _.intl.string(_.t.KckEj7),
              graphic: { src: A.A, type: "image" },
              onSecondaryClick: () => {
                  (0, r.x)(n);
              },
              secondaryCTA: _.intl.string(_.t.PcTCB7),
              onClose: n,
              ...s,
          })
        : (0, i.jsx)(d.A, {
              modalClassName: g.yl,
              modalContentClassName: g.jE,
              type: c.e.TRY_IT_OUT_MODAL_UPSELL,
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
                  className: g.wC,
                  children: (0, i.jsx)(l.A, { containerClassName: g.i1, user: t, disabledInputs: !0 }),
              }),
              ...s,
          });
}
