n.d(r, {
    S8: () => o,
    sS: () => l,
}),
    n(747238),
    n(896048),
    n(812715),
    n(621466);
let t = /[\u0300-\u036f]/g,
    l = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(t, "").normalize("NFC"),
    o =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let r = n(209034),
                      t = "";
                  return (
                      [...e.normalize("NFD")].forEach((e) => {
                          var n;
                          t += null != (n = r[e]) ? n : e;
                      }),
                      t.normalize("NFD").toLocaleLowerCase()
                  );
              };
