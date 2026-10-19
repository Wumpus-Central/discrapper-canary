n.d(t, { Du: () => u, Fc: () => i, MN: () => d, Rd: () => l, fi: () => c });
var r = n(975189),
    s = n(303345);
let o = new Map(),
    l = {
        publish_schedule(e, t) {
            let { schedule: n, error: r } = e,
                { projectId: l } = t,
                i = o.get(l);
            null != i && (o.delete(l), clearTimeout(i.timeout), null != r ? i.reject(new s.A(r)) : i.resolve(n));
        },
    };
function i(e) {
    let t = o.get(e);
    null != t && (o.delete(e), clearTimeout(t.timeout), t.reject(Error("Publishing schedule response unavailable")));
}
function a(e, t) {
    return new Promise((n, s) => {
        if (o.has(e)) return void s(Error("Publishing schedule request already pending"));
        let l = setTimeout(() => i(e), 15e3);
        o.set(e, { resolve: n, reject: s, timeout: l });
        try {
            let n = (0, r.KY)(e);
            if (null == n) throw Error("Not connected");
            n.sendPublishScheduleMessage(t);
        } catch {
            i(e);
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
