(n(323874), n(14289), n(35956));
var r = n(73153),
    s = n(382541),
    o = n(975189);
n.d(
    t,
    {},
    {
        CM: function (e) {
            return (0, o.b4)(e, "retry remix", (e) => e.sendRetryRemix());
        },
        Io: async function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                [r, o] = await Promise.all([e, (0, s.dv)(t)]),
                i = new URLSearchParams({ ticket: r.ticket });
            for (let e = 1; ; e++) {
                let t = await fetch(`${r.baseUrl}/agent/fork?${i}`, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ dest_ticket: o.ticket, ...(n ? { copy: !0 } : {}) }),
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
        },
        ow: {
            request_upstream_ticket(e, t) {
                let { ws: n } = t;
                !(async function (e, t, n) {
                    try {
                        let { ticket: r } = await (0, s.gA)(n);
                        e.sendUpstreamTicketAck(t, r);
                    } catch (r) {
                        let n = r?.status;
                        e.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
                    }
                })(n, e.id, e.project_id);
            },
            remix_state(e, t) {
                let { projectId: n } = t;
                r.h.dispatch({ type: "CONJURE_REMIX_STATE_SET", projectId: n, pending: e.pending, failed: e.failed });
            },
        },
    },
);
