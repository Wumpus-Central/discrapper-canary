d.d(c, { G: () => r, default: () => f });
var t = d(627968);
d(64700);
var a = d(192308),
    s = d(87719),
    A = d(377108),
    n = d(831318),
    b = d(788868),
    o = d(339984),
    p = d(985018);
function r(e) {
    let { uploadType: c } = e;
    return (
        (0, a.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(d.bind(d, 688796));
            return (d) => (0, t.jsx)(e, { uploadType: c, onSecondaryClick: a.closeAllModals, ...d });
        }),
        !0
    );
}
function f(e) {
    let { uploadType: c, onClose: d, onSecondaryClick: a, ...r } = e,
        f = c === o.HL.AVATAR || c === o.HL.BANNER,
        i = (0, A.A)(c === o.HL.AVATAR ? b.e.ANIMATED_AVATAR_MODAL_UPSELL : b.e.ANIMATED_BANNER_MODAL_UPSELL);
    return f
        ? (0, t.jsx)(n.A, {
              title: c === o.HL.AVATAR ? p.intl.string(p.t.X7tO60) : p.intl.string(p.t.zXPa2C),
              subtitle: c === o.HL.AVATAR ? p.intl.string(p.t.ifCRdB) : p.intl.string(p.t.yQAnf4),
              graphic: i,
              onSecondaryClick: () => {
                  a?.(), (0, s.x)(d);
              },
              secondaryCTA: p.intl.string(p.t.PcTCB7),
              onClose: d,
              ...r,
          })
        : null;
}
