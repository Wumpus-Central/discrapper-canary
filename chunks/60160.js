n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var a = n(834730),
    r = n(59678);
let i = /^(.*?)\s*\(([^()]+)\)$/,
    s = /^([\s\S]*?)\s\((exit \d+)\)$/,
    u = /[[\]{}<>`\xab\xbb;$\\=]/,
    o = /'[^']*'|"[^"]*"/,
    d = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function c(e, t) {
    let n;
    return e.startsWith("$ ")
        ? (0, l.jsxs)("span", { className: r.SS, children: [(0, l.jsx)("strong", { children: "$" }), e.slice(1)] })
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
    let d = (t.startsWith("$ ") ? s : i).exec(t);
    return null == d || u.test(d[2]) || o.test(d[2])
        ? c(t, n)
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  c(d[1], n),
                  " ",
                  d[2].split(/(\s+)/).map((e, t) => {
                      let n;
                      return /^\s*$/.test(e)
                          ? e
                          : ((n = e.startsWith("+") ? r.sI : e.startsWith("-") || e.startsWith("\u2212") ? r.eh : r.zH),
                            (0, l.jsx)("span", { className: n, children: e }, t));
                  }),
              ],
          });
}
