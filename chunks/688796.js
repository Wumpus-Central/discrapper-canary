d.d(c, { G: () => p, default: () => f });
var t = d(627968);
d(64700);
var a = d(397927),
    s = d(87719),
    A = d(377108),
    n = d(244975),
    b = d(788868),
    o = d(339984),
    r = d(985018);
function p(e) {
    let { uploadType: c } = e;
    return (
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(d.bind(d, 688796));
            return (d) => (0, t.jsx)(e, { uploadType: c, onSecondaryClick: a.s7G, ...d });
        }),
        !0
    );
}
function f(e) {
    let { uploadType: c, onClose: d, onSecondaryClick: a, ...p } = e,
        f = c === o.HL.AVATAR || c === o.HL.BANNER,
        i = (0, A.A)(c === o.HL.AVATAR ? b.e.ANIMATED_AVATAR_MODAL_UPSELL : b.e.ANIMATED_BANNER_MODAL_UPSELL);
    return f
        ? (0, t.jsx)(n.F, {
              title: c === o.HL.AVATAR ? r.intl.string(r.t.X7tO60) : r.intl.string(r.t.zXPa2C),
              subtitle: c === o.HL.AVATAR ? r.intl.string(r.t.ifCRdB) : r.intl.string(r.t.yQAnf4),
              graphic: i,
              onSecondaryClick: () => {
                  a?.(), (0, s.x)(d);
              },
              secondaryCTA: r.intl.string(r.t.PcTCB7),
              onClose: d,
              ...p,
          })
        : null;
}
