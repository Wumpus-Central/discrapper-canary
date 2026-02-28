"use strict";
r.d(t, { S8: () => o, sS: () => i }), r(621466);
let n = /[\u0300-\u036f]/g,
    i = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(n, "").normalize("NFC"),
    o =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let t = r(209034),
                      n = "";
                  return (
                      [...e.normalize("NFD")].forEach((e) => {
                          n += t[e] ?? e;
                      }),
                      n.normalize("NFD").toLocaleLowerCase()
                  );
              };
