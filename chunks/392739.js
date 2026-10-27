n.d(t, { RP: () => u, bm: () => c, n1: () => d });
let r = new Map(),
    s = new Map(),
    o = new Map();
function i(e, t, n) {
    l(e, t);
    let r = setTimeout(() => e.delete(t), 1e4);
    e.set(t, { ...n, timer: r });
}
function l(e, t) {
    let n = e.get(t);
    null != n && (clearTimeout(n.timer), e.delete(t));
}
function a(e, t) {
    i(o, t, { projectId: e });
}
function c(e, t) {
    let n = r.get(t);
    null != n && (clearTimeout(n.timer), n.resolve(null));
    let o = s.get(t);
    return null != o
        ? (l(s, t), a(e, t), Promise.resolve({ uploadToken: o.uploadToken }))
        : new Promise((n) => {
              let s = setTimeout(() => {
                  (r.delete(t), n(null));
              }, 5e3);
              r.set(t, { resolve: n, timer: s, projectId: e });
          });
}
function d(e, t, n) {
    let l = r.get(t);
    if (null == l) {
        o.has(t) || i(s, t, { uploadToken: n, projectId: e });
        return;
    }
    (r.delete(t), clearTimeout(l.timer), a(e, t), l.resolve({ uploadToken: n }));
}
function u(e) {
    for (let [t, n] of [...r]) n.projectId === e && (r.delete(t), clearTimeout(n.timer), n.resolve(null));
    for (let t of [s, o]) for (let [n, r] of [...t]) r.projectId === e && l(t, n);
}
