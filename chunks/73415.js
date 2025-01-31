d.d(t, { default: () => p });
var e = d(200651);
d(192379);
var n = d(979554),
    a = d(98278),
    s = d(792254),
    f = d(790527),
    o = d(474936),
    A = d(388032);
function p(c) {
    let { collectableType: t, onClose: d, analyticsSource: p, analyticsLocation: b, onSecondaryClick: i, ...r } = c,
        R = t === n.Z.AVATAR_DECORATION || t === n.Z.PROFILE_EFFECT,
        Z = (0, s.Z)(t === n.Z.AVATAR_DECORATION ? o.cd.AVATAR_DECORATION_MODAL_UPSELL : o.cd.PROFILE_EFFECT_MODAL_UPSELL);
    return R
        ? (0, e.jsx)(f.Z, {
              artURL: Z,
              type: t === n.Z.AVATAR_DECORATION ? o.cd.AVATAR_DECORATION_MODAL_UPSELL : o.cd.PROFILE_EFFECT_MODAL_UPSELL,
              title: t === n.Z.AVATAR_DECORATION ? A.intl.string(A.t.JI7uhY) : A.intl.string(A.t.sYm15e),
              body: t === n.Z.AVATAR_DECORATION ? A.intl.string(A.t['5XvsdX']) : A.intl.string(A.t['Hza+Bg']),
              glowUp: t === n.Z.AVATAR_DECORATION ? A.intl.string(A.t['5XvsdX']) : A.intl.string(A.t['Hza+Bg']),
              onSecondaryClick: () => {
                  i(), (0, a.$)(d);
              },
              secondaryCTA: A.intl.string(A.t.PcTCBw),
              onClose: d,
              enableArtBoxShadow: !1,
              analyticsSource: p,
              analyticsLocation: b,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...r
          })
        : null;
}
