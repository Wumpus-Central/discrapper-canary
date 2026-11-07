n.d(t, { A: () => A });
var i = n(582128),
    r = n(158390),
    l = n(855986),
    s = n(934058),
    a = n(620632),
    o = n(73153),
    d = n(46653),
    u = n(951178),
    c = n(652215);
function h(e) {
    return { userId: e, inflight: !1, queued: !1, requestedVersion: null };
}
let m = h(void 0);
function g() {
    let e = d.default.getId();
    return (m.userId !== e && (m = h(e)), m);
}
async function p() {
    let e,
        t = g();
    if (t.inflight) {
        t.queued = !0;
        return;
    }
    t.inflight = !0;
    try {
        let { body: t } = await a.Bo.get({
            url: c.Rsh.CONJURE_PROJECTS,
            query: { supported_surfaces: u.q7.OVERLAY },
            rejectWithError: !0,
        });
        e = { type: "CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_SUCCESS", projects: t };
    } catch {
        e = { type: "CONJURE_SERVER_OVERLAY_WIDGETS_FETCH_FAIL" };
    }
    ((t.inflight = !1), g() === t && (o.h.dispatch(e), t.queued && ((t.queued = !1), p())));
}
function f(e) {
    let t = g();
    t.requestedVersion !== e && ((t.requestedVersion = e), p());
}
let x = new r.A(3e4, 3e5);
function A(e) {
    let { refetchOnMount: t } = e,
        n = (0, l.bG)([s.A], () => s.A.getServerStaleVersion()),
        r = (0, l.bG)([s.A], () => s.A.getServerFetchFailures()),
        a = i.useRef(!1);
    (i.useEffect(() => {
        if (!a.current) {
            if (((a.current = !0), t)) ((g().requestedVersion = n), p());
            else f(n);
            return;
        }
        let e = setTimeout(() => f(n), s.A.hasServerFetchSucceeded() ? 2e3 + 3e4 * Math.random() : 0);
        return () => clearTimeout(e);
    }, [n]),
        i.useEffect(() => {
            0 === r ? x.succeed() : x.pending || x.fail(() => p());
        }, [r]));
}
