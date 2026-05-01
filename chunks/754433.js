let r, i, o;
n.d(t, { i: () => l, z: () => s });
var a = n(978862);
function s(e) {
    let t = a.O._sentryDebugIds;
    if (!t) return {};
    let n = Object.keys(t);
    return o && n.length === i
        ? o
        : ((i = n.length),
          (o = n.reduce((n, i) => {
              r || (r = {});
              let o = r[i];
              if (o) n[o[0]] = o[1];
              else {
                  let o = e(i);
                  for (let e = o.length - 1; e >= 0; e--) {
                      let a = o[e],
                          s = a && a.filename,
                          l = t[i];
                      if (s && l) {
                          (n[s] = l), (r[i] = [s, l]);
                          break;
                      }
                  }
              }
              return n;
          }, {})));
}
function l(e, t) {
    let n = s(e);
    if (!n) return [];
    let r = [];
    for (let e of t) e && n[e] && r.push({ type: "sourcemap", code_file: e, debug_id: n[e] });
    return r;
}
