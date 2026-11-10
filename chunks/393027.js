var s = i(477900),
    c = i(582128),
    n = i(192308),
    o = i(519707),
    a = i(38145),
    l = i(87719),
    u = i(49792),
    r = i(831318),
    d = i(682901),
    _ = i(792996);
i.d(
    t,
    {},
    {
        default: function (e) {
            let { premiumUpsellType: t, title: i, body: p, onClose: A, onSecondaryClick: C, ...h } = e,
                [L, k] = c.useState(!1),
                E = (0, u.A)(t),
                b = (0, o.J)("profile_decoration_upsell_checkout"),
                O = t === d.e.AVATAR_DECORATION_MODAL_UPSELL || t === d.e.PROFILE_EFFECT_MODAL_UPSELL;
            return L
                ? null
                : (0, s.jsx)(r.A, {
                      title: i,
                      subtitle: p,
                      graphic: E,
                      onSubscribeModalClose:
                          O && b
                              ? async function () {
                                    (k(!0), await A());
                                }
                              : void 0,
                      onSecondaryClick: () => {
                          (C(), O && b && ((0, n.s7)(), (0, a.M)()), (0, l.x)(A));
                      },
                      secondaryCTA: _.intl.string(_.t.PcTCB7),
                      onClose: A,
                      ...h,
                  });
        },
    },
);
