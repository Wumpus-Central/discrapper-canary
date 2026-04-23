"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(231723),
    a = n(253932),
    o = n(652215);
function l(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.bm.getSetting() || l
        ? (0, i.openModalLazy)(
              async () => {
                  let { default: t } = await Promise.all([n.e("95782"), n.e("78270")]).then(n.bind(n, 308229));
                  return (n) => (0, r.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              { modalKey: "camera-preview", contextKey: t === o.BRT.POPOUT ? s.KX : s.SY },
          )
        : e?.();
}
