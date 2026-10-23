n.d(t, { RP: () => u, bm: () => l, n1: () => d });
let i = new Map(),
    a = new Map(),
    r = new Map();
function o(e, t, n) {
    c(e, t);
    let i = setTimeout(() => e.delete(t), 1e4);
    e.set(t, { ...n, timer: i });
}
function c(e, t) {
    let n = e.get(t);
    null != n && (clearTimeout(n.timer), e.delete(t));
}
function s(e, t) {
    o(r, t, { projectId: e });
}
function l(e, t) {
    let n = i.get(t);
    null != n && (clearTimeout(n.timer), n.resolve(null));
    let r = a.get(t);
    return null != r
        ? (c(a, t), s(e, t), Promise.resolve({ uploadToken: r.uploadToken }))
        : new Promise((n) => {
              let a = setTimeout(() => {
                  (i.delete(t), n(null));
              }, 5e3);
              i.set(t, { resolve: n, timer: a, projectId: e });
          });
}
function d(e, t, n) {
    let c = i.get(t);
    if (null == c) {
        r.has(t) || o(a, t, { uploadToken: n, projectId: e });
        return;
    }
    (i.delete(t), clearTimeout(c.timer), s(e, t), c.resolve({ uploadToken: n }));
}
function u(e) {
    for (let [t, n] of [...i]) n.projectId === e && (i.delete(t), clearTimeout(n.timer), n.resolve(null));
    for (let t of [a, r]) for (let [n, i] of [...t]) i.projectId === e && c(t, n);
}
