t.d(r, { Fv: () => a }), t(35282), t(388685), t(704826), t(374470);
let n = /[\u0300-\u036f]/g;
null == String.prototype.normalize || ((e) => e.normalize("NFD").replace(n, "").normalize("NFC"));
let a =
    null == String.prototype.normalize
        ? (e) => e
        : function (e) {
              let r = t(510085),
                  n = "";
              return (
                  [...e.normalize("NFD")].forEach((e) => {
                      var t;
                      n += null != (t = r[e]) ? t : e;
                  }),
                  n.normalize("NFD").toLocaleLowerCase()
              );
          };
