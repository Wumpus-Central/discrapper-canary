n.d(t, { A: () => h });
var i = n(439372),
    r = n(901341),
    a = n(858899),
    s = n(976860),
    l = n(569745),
    o = n(751841),
    d = n(313537),
    c = n(191850),
    u = n(792996);
let _ = !1,
    E = function (e) {
        _ ||
            ((_ = !0),
            (0, s.mw)((t) => {
                let n = e();
                return (
                    null != n &&
                    !!(0, l.Q)(t) &&
                    (0, o.Xj)(t) !== n &&
                    ((0, a.P0)({ text: u.intl.string(c.default["PyD/rD"]), variant: "critical" }), !0)
                );
            }));
    },
    A = function (e) {
        (0, o.Xj)((0, s.JK)().location.pathname) !== e && (0, s.pX)((0, d.z$)(e));
    };
class f extends i.A {
    actions = { POST_CONNECTION_OPEN: m, CONJURE_PUBLISH_EVAL_PENDING: p };
}
let h = new f();
function I() {
    return (0, r.jo)()?.projectId ?? null;
}
function p() {
    E(I);
}
function m() {
    let e = I();
    null != e && (p(), A(e));
}
