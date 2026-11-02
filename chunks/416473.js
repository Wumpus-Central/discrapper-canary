n.d(t, { Du: () => u, Fc: () => l, MN: () => d, Rd: () => o, fi: () => c });
var r = n(975189),
    s = n(303345);
let i = new Map(),
    o = {
        publish_schedule(e, t) {
            let { schedule: n, error: r } = e,
                { projectId: o } = t,
                l = i.get(o);
            null != l && (i.delete(o), clearTimeout(l.timeout), null != r ? l.reject(new s.A(r)) : l.resolve(n));
        },
    };
function l(e) {
    let t = i.get(e);
    null != t && (i.delete(e), clearTimeout(t.timeout), t.reject(Error("Publishing schedule response unavailable")));
}
function a(e, t) {
    return new Promise((n, s) => {
        if (i.has(e)) return void s(Error("Publishing schedule request already pending"));
        let o = setTimeout(() => l(e), 15e3);
        i.set(e, { resolve: n, reject: s, timeout: o });
        try {
            let n = (0, r.KY)(e);
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
