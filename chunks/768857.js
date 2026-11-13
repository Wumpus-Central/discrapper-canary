var i = n(115560),
    r = n(73153),
    a = n(975189);
let s = new Map();
function l(e) {
    let t = s.get(e);
    null != t && (s.delete(e), clearTimeout(t.timeout), t.reject(Error("Publish eval result unavailable")));
}
n.d(
    t,
    {},
    {
        OB: function (e, t) {
            let n = t?.status;
            (403 === n || 404 === n) && r.h.dispatch({ type: "CONJURE_PUBLISH_EVAL_PROJECT_GONE", projectId: e });
        },
        Wh: {
            publish_eval_result(e, t) {
                let { projectId: n } = t,
                    i = s.get(n);
                i?.requestId === e.request_id && (s.delete(n), clearTimeout(i.timeout), i.resolve(e));
            },
        },
        yD: function (e, t) {
            return new Promise((n, r) => {
                if (s.has(e)) return void r(Error("Publish eval already pending"));
                let o = (0, i.A)(),
                    d = setTimeout(() => l(e), 15e3);
                s.set(e, { requestId: o, resolve: n, reject: r, timeout: d });
                try {
                    let n = (0, a.KY)(e);
                    if (null == n) throw Error("Not connected");
                    n.sendPublishEval({ type: "submit_publish_eval", request_id: o, ...t });
                } catch {
                    l(e);
                }
            });
        },
        yv: l,
    },
);
