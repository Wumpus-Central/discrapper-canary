n.d(t, { K: () => x, default: () => A });
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
    m = n(985018),
    g = n(375160),
    _ = n(880223);
function x(e) {
    let { analyticsSource: t, onSubscribeFinish: l, stackingBehavior: r } = e,
        o = a.default.getCurrentUser();
    null != o &&
        (0, s.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 407217));
                return (n) =>
                    (0, i.jsx)(e, {
                        user: o,
                        analyticsSource: t,
                        analyticsLocation: { section: u.JJy.USER_PROFILE, object: u.ZSU.BUTTON_CTA },
                        onSubscribeFinish: l,
                        ...n,
                    });
            },
            { stackingBehavior: r },
        );
}
function A(e) {
    let { user: t, onClose: n, ...s } = e;
    return (0, o.g1)({ onPremiumTryItOutProfile: !0, location: "PremiumTryItOutProfileUpsell" })
        ? (0, i.jsx)(d.F, {
              title: m.intl.string(m.t.reVc0M),
              subtitle: m.intl.string(m.t.KckEj7),
              graphic: { src: _.A, type: "image" },
              onSecondaryClick: () => {
                  (0, r.x)(n);
              },
              secondaryCTA: m.intl.string(m.t.PcTCB7),
              onClose: n,
              ...s,
          })
        : (0, i.jsx)(d.A, {
              modalClassName: g.yl,
              modalContentClassName: g.jE,
              type: c.e.TRY_IT_OUT_MODAL_UPSELL,
              title: m.intl.string(m.t.reVc0M),
              body: m.intl.string(m.t.KckEj7),
              glowUp: m.intl.string(m.t.reVc0M),
              onSecondaryClick: () => {
                  (0, r.x)(n);
              },
              secondaryCTA: m.intl.string(m.t.PcTCB7),
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
