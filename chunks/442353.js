"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
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
                      n.e("71906"),
                      n.e("41113"),
                      n.e("99368"),
                      n.e("38687"),
                      n.e("80391"),
                      n.e("28367"),
                      n.e("97162"),
                      n.e("95782"),
                      n.e("85160"),
                      n.e("10534"),
                  ]).then(n.bind(n, 308229));
                  return (n) => (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              { modalKey: "camera-preview", contextKey: t === l.BRT.POPOUT ? a.KX : a.SY },
          )
        : e?.();
}
