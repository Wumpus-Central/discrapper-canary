n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(192308),
    l = n(231723),
    a = n(253932),
    s = n(652215);
function o(e, t) {
    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.bm.getSetting() || o
        ? (0, r.openModalLazy)(
              async () => {
                  let { default: t } = await Promise.all([
                      n.e("80813"),
                      n.e("77598"),
                      n.e("84074"),
                      n.e("66759"),
                      n.e("20287"),
                      n.e("28367"),
                      n.e("58337"),
                      n.e("18441"),
                      n.e("21690"),
                      n.e("31644"),
                      n.e("9915"),
                      n.e("20683"),
                      n.e("80436"),
                      n.e("96553"),
                      n.e("6809"),
                      n.e("27838"),
                      n.e("97162"),
                      n.e("95782"),
                      n.e("85160"),
                      n.e("10534"),
                  ]).then(n.bind(n, 308229));
                  return (n) => (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              { modalKey: "camera-preview", contextKey: t === s.BRT.POPOUT ? l.KX : l.SY },
          )
        : e?.();
}
