l.d(i, { A: () => c });
var t = l(477900);
l(582128);
var r = l(17928),
    u = l(477782),
    e = l(387755),
    g = l(198052),
    s = l(325909),
    a = l(734057),
    d = l(806931),
    p = l(375708);
function c(n, i) {
    let [l, c] = (0, r.yK)(
            [g.A],
            () => [null != i ? g.A.getParticipants(i) : null, null != i ? g.A.getParticipant(i, n.id) : null],
            [i, n.id],
        ),
        o = (0, r.bG)([a.A], () => a.A.getChannel(i)),
        h = !(0, s.o)(n, i) || l?.length === 0 || null == i,
        A = o?.guild_id != null,
        b = null == c,
        _ = null != c && c.type === d.lp.USER && c.ringing;
    if (h) return null;
    if (b) {
        let l = A ? p.intl.string(p.t["3Hv9qQ"]) : p.intl.string(p.t.RDheZm);
        return (0, t.jsx)(u.Dr, {
            id: "ring",
            label: l,
            action: () => {
                e.A.ring(i, [n.id], "user_context_menu");
            },
        });
    }
    return _
        ? (0, t.jsx)(u.Dr, {
              id: "stop-ringing",
              label: p.intl.string(p.t.ygslb0),
              action: () => {
                  e.A.stopRinging(i, [n.id]);
              },
          })
        : null;
}
