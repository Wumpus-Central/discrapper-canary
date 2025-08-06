n.d(t, { n: () => s });
var r = n(101284),
    i = n(622916),
    o = n(263449);
let a = 100;
function s(e, t) {
    let n = (0, o.s3)(),
        s = (0, o.aF)();
    if (!n) return;
    let { beforeBreadcrumb: l = null, maxBreadcrumbs: c = a } = n.getOptions();
    if (c <= 0) return;
    let u = {
            timestamp: (0, r.yW)(),
            ...e,
        },
        d = l ? (0, i.Cf)(() => l(u, t)) : u;
    null !== d && (n.emit && n.emit("beforeAddBreadcrumb", d, t), s.addBreadcrumb(d, c));
}
