n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var a = n(834730),
    s = n(13699);
let i = /^(.*?)\s*\(([^()]+)\)$/,
    r = /^([\s\S]*?)\s\((exit \d+)\)$/,
    o = /[[\]{}<>`\xab\xbb;$\\=]/,
    d = /'[^']*'|"[^"]*"/,
    u = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function c(e, t) {
    let n;
    return e.startsWith("$ ")
        ? (0, l.jsxs)("span", { className: s.SS, children: [(0, l.jsx)("strong", { children: "$" }), e.slice(1)] })
        : null == (n = /^\S+/.exec(e))
          ? e
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(a.E, { tag: "span", variant: u[t], color: "none", children: n[0] }),
                    e.slice(n[0].length),
                ],
            });
}
function m(e) {
    let { text: t, variant: n, prose: a } = e;
    if (!0 === a) return t;
    let u = (t.startsWith("$ ") ? r : i).exec(t);
    return null == u || o.test(u[2]) || d.test(u[2])
        ? c(t, n)
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  c(u[1], n),
                  " ",
                  u[2].split(/(\s+)/).map((e, t) => {
                      let n;
                      return /^\s*$/.test(e)
                          ? e
                          : ((n = e.startsWith("+") ? s.sI : e.startsWith("-") || e.startsWith("\u2212") ? s.eh : s.zH),
                            (0, l.jsx)("span", { className: n, children: e }, t));
                  }),
              ],
          });
}
