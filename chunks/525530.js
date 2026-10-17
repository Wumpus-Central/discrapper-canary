(n.d(t, { CM: () => a, Io: () => l, ow: () => i }), n(323874), n(14289), n(35956));
var r = n(73153),
    s = n(382541),
    o = n(975189);
let i = {
    request_upstream_ticket(e, t) {
        let { ws: n } = t;
        c(n, e.id, e.project_id);
    },
    remix_state(e, t) {
        let { projectId: n } = t;
        r.h.dispatch({ type: "CONJURE_REMIX_STATE_SET", projectId: n, pending: e.pending, failed: e.failed });
    },
};
async function l(e, t) {
    let [n, r] = await Promise.all([e, (0, s.d)(t)]),
        o = new URLSearchParams({ ticket: n.ticket });
    for (let e = 1; ; e++) {
        let t = await fetch(`${n.baseUrl}/agent/fork?${o}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        }).then(
            (e) => e.status,
            () => null,
        );
        if (null != t && t < 300) return "accepted";
        if (409 === t) return "unreachable";
        if (null != t && t < 500 && 429 !== t) return "rejected";
        if (3 === e) return "unreachable";
        await new Promise((e) => setTimeout(e, 1e3));
    }
}
function a(e) {
    return (0, o.b4)(e, "retry remix", (e) => e.sendRetryRemix());
}
async function c(e, t, n) {
    try {
        let { ticket: r } = await (0, s.g)(n);
        e.sendUpstreamTicketAck(t, r);
    } catch (r) {
        let n = r?.status;
        e.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
    }
}
