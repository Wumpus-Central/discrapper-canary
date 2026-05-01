n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(231723),
    r = n(253932),
    s = n(652215);
function o(e, t) {
    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.bm.getSetting() || o
        ? (0, l.openModalLazy)(
              async () => {
                  let { default: t } = await Promise.all([
                      n.e("76348"),
                      n.e("80848"),
                      n.e("99786"),
                      n.e("66759"),
                      n.e("20287"),
                      n.e("28367"),
                      n.e("97162"),
                      n.e("95782"),
                      n.e("39176"),
                      n.e("10534"),
                  ]).then(n.bind(n, 308229));
                  return (n) => (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              { modalKey: "camera-preview", contextKey: t === s.BRT.POPOUT ? a.KX : a.SY },
          )
        : e?.();
}
