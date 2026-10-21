n.d(t, { RP: () => d, bm: () => s, n1: () => u });
let r = new Map(),
    i = new Map(),
    a = new Map();
function o(e, t, n) {
    l(e, t);
    let r = setTimeout(() => e.delete(t), 1e4);
    e.set(t, { ...n, timer: r });
}
function l(e, t) {
    let n = e.get(t);
    null != n && (clearTimeout(n.timer), e.delete(t));
}
function c(e, t) {
    o(a, t, { projectId: e });
}
function s(e, t) {
    let n = r.get(t);
    null != n && (clearTimeout(n.timer), n.resolve(null));
    let a = i.get(t);
    return null != a
        ? (l(i, t), c(e, t), Promise.resolve({ uploadToken: a.uploadToken }))
        : new Promise((n) => {
              let i = setTimeout(() => {
                  (r.delete(t), n(null));
              }, 5e3);
              r.set(t, { resolve: n, timer: i, projectId: e });
          });
}
function u(e, t, n) {
    let l = r.get(t);
    if (null == l) {
        a.has(t) || o(i, t, { uploadToken: n, projectId: e });
        return;
    }
    (r.delete(t), clearTimeout(l.timer), c(e, t), l.resolve({ uploadToken: n }));
}
function d(e) {
    for (let [t, n] of [...r]) n.projectId === e && (r.delete(t), clearTimeout(n.timer), n.resolve(null));
    for (let t of [i, a]) for (let [n, r] of [...t]) r.projectId === e && l(t, n);
}
