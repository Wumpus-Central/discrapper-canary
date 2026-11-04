var r = n(582128),
    s = n(855986),
    i = n(73153),
    o = n(975189),
    l = n(569319);
let a = [],
    c = new Map(),
    d = new Map();
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e;
    return e.length === t.length && e.every((e, r) => n(e) === n(t[r]));
}
class p extends s.Ay.Store {
    getApprovals(e) {
        return c.get(e) ?? a;
    }
    getAccess(e) {
        return d.get(e) ?? null;
    }
}
let h = new p(i.h, {
    CONJURE_HOST_APPROVALS_SET(e) {
        let { projectId: t, asks: n } = e;
        return !u(c.get(t) ?? a, n, (e) => e.id) && (c.set(t, n), !0);
    },
    CONJURE_HOST_ACCESS_SET(e) {
        let { projectId: t, requireApproval: n, allowedHosts: r } = e,
            s = d.get(t);
        return (
            !(s?.requireApproval === n && u(s.allowedHosts, r)) &&
            (d.set(t, { requireApproval: n, allowedHosts: r }), !0)
        );
    },
});
n.d(
    t,
    {},
    {
        PI: function (e) {
            return (0, s.bG)(
                [h],
                () => {
                    let t = h.getAccess(e);
                    return t?.requireApproval === !0 ? t.allowedHosts : null;
                },
                [e],
            );
        },
        WT: function (e) {
            return (0, s.bG)([h], () => h.getApprovals(e), [e]);
        },
        _t: function (e) {
            let t = (0, s.bG)([h], () => h.getAccess(e)?.requireApproval ?? null, [e]),
                n = r.useCallback(
                    (t) =>
                        (0, o.b4)(e, "host approval setting", (e) =>
                            e.sendHostAccess({ type: "set_host_access", require_approval: t }),
                        ),
                    [e],
                );
            return (0, l.V)(t, n);
        },
        kA: function (e, t, n) {
            if (
                (0, o.b4)(e, "host approval", (e) =>
                    e.sendHostAccess({ type: "host_approval_answer", id: t, answer: n }),
                )
            ) {
                let n = h.getApprovals(e).filter((e) => e.id !== t);
                i.h.dispatch({ type: "CONJURE_HOST_APPROVALS_SET", projectId: e, asks: n });
            }
        },
        t6: function (e, t) {
            return (0, o.b4)(e, "allowed hosts", (e) => e.sendHostAccess({ type: "set_host_access", remove_host: t }));
        },
        x9: {
            host_approvals(e, t) {
                let { projectId: n } = t;
                i.h.dispatch({ type: "CONJURE_HOST_APPROVALS_SET", projectId: n, asks: e.asks });
            },
            host_access(e, t) {
                let { projectId: n } = t;
                i.h.dispatch({
                    type: "CONJURE_HOST_ACCESS_SET",
                    projectId: n,
                    requireApproval: e.require_approval,
                    allowedHosts: e.allowed_hosts,
                });
            },
        },
    },
);
