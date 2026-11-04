var r = n(975189),
    s = n(303345);
let i = new Map();
function o(e) {
    let t = i.get(e);
    null != t && (i.delete(e), clearTimeout(t.timeout), t.reject(Error("Publishing schedule response unavailable")));
}
function l(e, t) {
    return new Promise((n, s) => {
        if (i.has(e)) return void s(Error("Publishing schedule request already pending"));
        let l = setTimeout(() => o(e), 15e3);
        i.set(e, { resolve: n, reject: s, timeout: l });
        try {
            let n = (0, r.KY)(e);
            if (null == n) throw Error("Not connected");
            n.sendPublishScheduleMessage(t);
        } catch {
            o(e);
        }
    });
}
n.d(
    t,
    {},
    {
        Du: function (e, t) {
            return l(e, { type: "set_publish_schedule", trigger: t, supports_errors: !0 });
        },
        Fc: o,
        MN: function (e) {
            return l(e, { type: "delete_publish_schedule", supports_errors: !0 });
        },
        Rd: {
            publish_schedule(e, t) {
                let { schedule: n, error: r } = e,
                    { projectId: o } = t,
                    l = i.get(o);
                null != l && (i.delete(o), clearTimeout(l.timeout), null != r ? l.reject(new s.A(r)) : l.resolve(n));
            },
        },
        fi: function (e) {
            return l(e, { type: "get_publish_schedule" });
        },
    },
);
