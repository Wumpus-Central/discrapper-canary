var i = n(621466);
let r = /[\u0300-\u036f]/g,
    a = /[\uD800-\uDBFF][\uDC00-\uDFFF]/,
    s = null == String.prototype.normalize ? (e) => e : (e) => e.normalize("NFD").replace(r, "").normalize("NFC"),
    l =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let t = n(209034),
                      i = "";
                  return (
                      [...e.normalize("NFD")].forEach((e) => {
                          i += t[e] ?? e;
                      }),
                      i.normalize("NFD").toLocaleLowerCase()
                  );
              };
n.d(
    t,
    { xI: () => i.xI },
    {
        $G: function (e) {
            return null == e ? "" : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
        },
        EJ: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\u2026";
            if (null == e || null == t) return "";
            if (e.length > t) {
                let i = a.test(e) ? [...e].slice(0, t - n.length).join("") : e.substring(0, t - n.length);
                return `${i.replace(/[\s.]+$/, "")}${n}`;
            }
            return e;
        },
        S8: l,
        oN: function (e) {
            return null != e
                ? e
                      .replace(/'s /g, " ")
                      .replace(/\w+/g, (e) => e[0])
                      .replace(/\s/g, "")
                : "";
        },
        sS: s,
    },
);
