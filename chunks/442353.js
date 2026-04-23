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
                  let { default: t } = await Promise.all([n.e("95782"), n.e("78270")]).then(n.bind(n, 308229));
                  return (n) => (0, i.jsx)(t, { ...n, onEnable: e, videoEnabled: !1 });
              },
              { modalKey: "camera-preview", contextKey: t === s.BRT.POPOUT ? l.KX : l.SY },
          )
        : e?.();
}
