var i = n(158390),
    r = n(70283),
    a = n(451988),
    s = n(439372),
    l = n(682618),
    o = n(982240),
    d = n(46653),
    c = n(927813),
    u = n(442928),
    _ = n(422533),
    E = n(475489);
let A = new i.A(E.Mf, E.if),
    f = new i.A(E.Mf, E.if),
    h = new a.J_(E.T, u.c$);
function I(e) {
    return e === d.default.getId();
}
function p() {
    (_.A.persist(), f.pending || (0, u.Wv)());
}
class m extends s.A {
    actions = {
        ORB_VOID_MODAL_OPEN: () => {
            ((0, u.RJ)(), null == o.Ay.getBadgeById(r.$.ORB_VOID) && (0, l.Ay)(r.$.ORB_VOID));
        },
        ORB_VOID_STATE_FETCH_SUCCESS: (e) => {
            let { userId: t } = e;
            I(t) && (A.succeed(), (0, u.c$)());
        },
        ORB_VOID_STATE_FETCH_FAIL: (e) => {
            let { userId: t } = e;
            I(t) && (_.A.isModalOpen || _.A.isRejected) && A.fail(u.RJ);
        },
        ORB_VOID_CLICK: (e) => {
            let { flushNow: t } = e;
            t ? (0, u.c$)() : h.delay(!1);
        },
        ORB_VOID_FLUSH: () => {
            (h.cancel(), p());
        },
        ORB_VOID_BURN_SUCCESS: (e) => {
            let { userId: t, snapshot: n } = e;
            I(t) && (f.succeed(), (0, u.AP)(n.balance), p());
        },
        ORB_VOID_BURN_FAILURE: (e) => {
            let { userId: t, retryable: n, error: i } = e;
            I(t) && (n ? f.fail(u.Wv, null != i.retryAfter ? i.retryAfter * c.A.Millis.SECOND : void 0) : (0, u.RJ)());
        },
        ORB_VOID_MODAL_CLOSE: () => {
            (0, u.c$)();
        },
        LOGOUT: () => {
            (h.cancel(), A.cancel(), f.cancel());
        },
    };
}
let g = new m();
n.d(t, {}, { A: g });
