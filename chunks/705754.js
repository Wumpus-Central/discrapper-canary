n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var a = n(834730),
    i = n(13699);
let s = /^(.*?)\s*\(([^()]+)\)$/,
    r = /[[\]{}<>`\xab\xbb;$\\=]/,
    o = /'[^']*'|"[^"]*"/,
    u = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function d(e, t) {
    let n = /^\S+/.exec(e);
    return null == n
        ? e
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.E, { tag: "span", variant: u[t], color: "none", children: n[0] }),
                  e.slice(n[0].length),
              ],
          });
}
function c(e) {
    let { text: t, variant: n, prose: a } = e;
    if (!0 === a) return t;
    let u = s.exec(t);
    return null == u || r.test(u[2]) || o.test(u[2])
        ? d(t, n)
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  d(u[1], n),
                  " ",
                  u[2].split(/(\s+)/).map((e, t) => {
                      let n;
                      return /^\s*$/.test(e)
                          ? e
                          : ((n = e.startsWith("+") ? i.sI : e.startsWith("-") || e.startsWith("\u2212") ? i.eh : i.zH),
                            (0, l.jsx)("span", { className: n, children: e }, t));
                  }),
              ],
          });
}
