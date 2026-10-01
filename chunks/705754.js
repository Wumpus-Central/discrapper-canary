n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var a = n(834730),
    i = n(13699);
let s = /^(.*?)\s*\(([^()]+)\)$/,
    r = /^([\s\S]*?)\s\((exit \d+)\)$/,
    o = /[[\]{}<>`\xab\xbb;$\\=]/,
    u = /'[^']*'|"[^"]*"/,
    d = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function c(e, t) {
    let n;
    return e.startsWith("$ ")
        ? (0, l.jsxs)("span", { className: i.SS, children: [(0, l.jsx)("strong", { children: "$" }), e.slice(1)] })
        : null == (n = /^\S+/.exec(e))
          ? e
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(a.E, { tag: "span", variant: d[t], color: "none", children: n[0] }),
                    e.slice(n[0].length),
                ],
            });
}
function m(e) {
    let { text: t, variant: n, prose: a } = e;
    if (!0 === a) return t;
    let d = (t.startsWith("$ ") ? r : s).exec(t);
    return null == d || o.test(d[2]) || u.test(d[2])
        ? c(t, n)
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  c(d[1], n),
                  " ",
                  d[2].split(/(\s+)/).map((e, t) => {
                      let n;
                      return /^\s*$/.test(e)
                          ? e
                          : ((n = e.startsWith("+") ? i.sI : e.startsWith("-") || e.startsWith("\u2212") ? i.eh : i.zH),
                            (0, l.jsx)("span", { className: n, children: e }, t));
                  }),
              ],
          });
}
