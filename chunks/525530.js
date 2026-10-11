(n.d(t, { Qe: () => o, oX: () => i, ow: () => r }), n(323874), n(14289), n(35956));
var s = n(382541);
let r = {
    request_upstream_ticket(e, t) {
        let { ws: n } = t;
        l(n, e.id, e.project_id);
    },
};
class o extends Error {
    status;
    constructor(e) {
        (super(`remix failed (${e})`), (this.status = e));
    }
}
async function i(e, t) {
    let [n, r] = await Promise.all([(0, s.g)(e), (0, s.d)(t)]),
        i = new URLSearchParams({ ticket: n.ticket }),
        l = await fetch(`${n.baseUrl}/agent/fork?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: r.ticket }),
        });
    if (!l.ok) throw new o(l.status);
}
async function l(e, t, n) {
    try {
        let { ticket: r } = await (0, s.g)(n);
        e.sendUpstreamTicketAck(t, r);
    } catch (s) {
        let n = s?.status;
        e.sendUpstreamTicketAck(t, void 0, 403 === n ? "forbidden" : "failed");
    }
}
