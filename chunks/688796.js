"use strict";
n.d(t, { G: () => d, default: () => _ });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(87719),
    a = n(81456),
    o = n(831318),
    l = n(788868),
    u = n(339984),
    c = n(375708);
function d(e) {
    let { uploadType: t } = e;
    return (
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 688796));
            return (n) => (0, i.jsx)(e, { uploadType: t, onSecondaryClick: r.closeAllModals, ...n });
        }),
        !0
    );
}
function _(e) {
    let { uploadType: t, onClose: n, onSecondaryClick: r, ...d } = e,
        _ = t === u.HL.AVATAR || t === u.HL.BANNER,
        f = (0, a.A)(t === u.HL.AVATAR ? l.e.ANIMATED_AVATAR_MODAL_UPSELL : l.e.ANIMATED_BANNER_MODAL_UPSELL);
    return _
        ? (0, i.jsx)(o.A, {
              title: t === u.HL.AVATAR ? c.intl.string(c.t.X7tO60) : c.intl.string(c.t.zXPa2C),
              subtitle: t === u.HL.AVATAR ? c.intl.string(c.t.ifCRdB) : c.intl.string(c.t.yQAnf4),
              graphic: f,
              onSecondaryClick: () => {
                  r?.(), (0, s.x)(n);
              },
              secondaryCTA: c.intl.string(c.t.PcTCB7),
              onClose: n,
              ...d,
          })
        : null;
}
