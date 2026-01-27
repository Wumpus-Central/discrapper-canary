t.d(r, {
    S8: () => a,
}),
    t(747238),
    t(896048),
    t(812715),
    t(621466);
String.prototype.normalize;
let a =
    null == String.prototype.normalize
        ? (e) => e
        : function (e) {
              let r = t(209034),
                  a = "";
              return (
                  [...e.normalize("NFD")].forEach((e) => {
                      var t;
                      a += null != (t = r[e]) ? t : e;
                  }),
                  a.normalize("NFD").toLocaleLowerCase()
              );
          };
