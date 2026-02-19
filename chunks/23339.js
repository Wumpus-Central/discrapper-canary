t.d(r, { S8: () => n }), t(621466);
String.prototype.normalize;
let n =
    null == String.prototype.normalize
        ? (e) => e
        : function (e) {
              let r = t(209034),
                  n = "";
              return (
                  [...e.normalize("NFD")].forEach((e) => {
                      n += r[e] ?? e;
                  }),
                  n.normalize("NFD").toLocaleLowerCase()
              );
          };
