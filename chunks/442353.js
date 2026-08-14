"use strict";
n.d(t, { A: () => o });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(231723),
    s = n(885386),
    l = n(652215);
function o(e, t) {
    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    s.bm.getSetting() || o
        ? (0, r.openModalLazy)(
              async () => {
                  let { default: t } = await Promise.all([
                      n.e("411895"),
                      n.e("37393"),
                      n.e("238096"),
                      n.e("242903"),
                      n.e("758751"),
                      n.e("428367"),
                      n.e("597162"),
                      n.e("195782"),
                      n.e("485160"),
                      n.e("410534"),
                  ]).then(n.bind(n, 308229));
                  return (n) => (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              { modalKey: "camera-preview", contextKey: t === l.BRT.POPOUT ? a.KX : a.SY },
          )
        : e?.();
}
