n.d(t, { A: () => f });
var l = n(477900);
n(582128);
var r = n(834730),
    a = n(59678);
let i = /^(.*?)\s*\(([^()]+)\)$/,
    s = /^([\s\S]*?)\s\((exit \d+)\)$/,
    u = /[[\]{}<>`\xab\xbb;$\\=]/,
    o = /'[^']*'|"[^"]*"/,
    c = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function d(e, t) {
    let n;
    return e.startsWith("$ ")
        ? (0, l.jsxs)("span", { className: a.SS, children: [(0, l.jsx)("strong", { children: "$" }), e.slice(1)] })
        : null == (n = /^\S+/.exec(e))
          ? e
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.E, { tag: "span", variant: c[t], color: "none", children: n[0] }),
                    e.slice(n[0].length),
                ],
            });
}
function f(e) {
    let { text: t, variant: n, prose: r } = e;
    if (!0 === r) return t;
    let c = (t.startsWith("$ ") ? s : i).exec(t);
    return null == c || u.test(c[2]) || o.test(c[2])
        ? d(t, n)
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  d(c[1], n),
                  " ",
                  c[2].split(/(\s+)/).map((e, t) => {
                      let n;
                      return /^\s*$/.test(e)
                          ? e
                          : ((n = e.startsWith("+") ? a.sI : e.startsWith("-") || e.startsWith("\u2212") ? a.eh : a.zH),
                            (0, l.jsx)("span", { className: n, children: e }, t));
                  }),
              ],
          });
}
