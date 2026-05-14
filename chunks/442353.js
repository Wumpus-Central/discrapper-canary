"use strict";
n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(231723),
    a = n(885386),
    o = n(652215);
function l(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.bm.getSetting() || l
        ? (0, r.openModalLazy)(
              async () => {
                  let { default: t } = await Promise.all([
                      n.e("86624"),
                      n.e("94513"),
                      n.e("90238"),
                      n.e("66759"),
                      n.e("28367"),
                      n.e("97162"),
                      n.e("95782"),
                      n.e("39176"),
                      n.e("10534"),
                  ]).then(n.bind(n, 308229));
                  return (n) => (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              { modalKey: "camera-preview", contextKey: t === o.BRT.POPOUT ? s.KX : s.SY },
          )
        : e?.();
}
