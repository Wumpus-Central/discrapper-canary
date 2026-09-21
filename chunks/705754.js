n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var a = n(834730),
    s = n(13699);
let i = /^(.*?)\s*\(([^()]+)\)$/,
    r = /[[\]{}<>`\xab\xbb;$\\=]/,
    u = /'[^']*'|"[^"]*"/,
    d = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function o(e, t) {
    let n = /^\S+/.exec(e);
    return null == n
        ? e
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.E, { tag: "span", variant: d[t], color: "none", children: n[0] }),
                  e.slice(n[0].length),
              ],
          });
}
function c(e) {
    let { text: t, variant: n, prose: a } = e;
    if (!0 === a) return t;
    let d = i.exec(t);
    return null == d || r.test(d[2]) || u.test(d[2])
        ? o(t, n)
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  o(d[1], n),
                  " ",
                  d[2].split(/(\s+)/).map((e, t) => {
                      let n;
                      return /^\s*$/.test(e)
                          ? e
                          : ((n = e.startsWith("+") ? s.sI : e.startsWith("-") || e.startsWith("\u2212") ? s.eh : s.zH),
                            (0, l.jsx)("span", { className: n, children: e }, t));
                  }),
              ],
          });
}
