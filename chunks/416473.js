n.d(t, { Du: () => u, Fc: () => l, MN: () => d, Rd: () => i, fi: () => c });
var s = n(975189),
    r = n(303345);
let o = new Map(),
    i = {
        publish_schedule(e, t) {
            let { schedule: n, error: s } = e,
                { projectId: i } = t,
                l = o.get(i);
            null != l && (o.delete(i), clearTimeout(l.timeout), null != s ? l.reject(new r.A(s)) : l.resolve(n));
        },
    };
function l(e) {
    let t = o.get(e);
    null != t && (o.delete(e), clearTimeout(t.timeout), t.reject(Error("Publishing schedule response unavailable")));
}
function a(e, t) {
    return new Promise((n, r) => {
        if (o.has(e)) return void r(Error("Publishing schedule request already pending"));
        let i = setTimeout(() => l(e), 15e3);
        o.set(e, { resolve: n, reject: r, timeout: i });
        try {
            let n = (0, s.KY)(e);
            if (null == n) throw Error("Not connected");
            n.sendPublishScheduleMessage(t);
        } catch {
            l(e);
        }
    });
}
function c(e) {
    return a(e, { type: "get_publish_schedule" });
}
function d(e) {
    return a(e, { type: "delete_publish_schedule", supports_errors: !0 });
}
function u(e, t) {
    return a(e, { type: "set_publish_schedule", trigger: t, supports_errors: !0 });
}
