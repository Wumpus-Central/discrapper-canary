n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(308528),
    d = n(267102),
    s = n(964404),
    o = n(961350),
    u = n(734057),
    c = n(994500),
    A = n(309010),
    g = n(652215),
    b = n(985018);
function m(e) {
    let { user: t, context: m, joinCallVideo: f, id: E, onCall: x } = e,
        h = (0, d.aL)(),
        C = (0, i.bG)([o.default], () => o.default.getId() === t.id),
        M = (0, i.bG)([c.A], () => c.A.isBlocked(t.id)),
        p = (0, i.bG)([A.A, u.A], () => A.A.getVoiceChannelId() === u.A.getDMFromUserId(t.id));
    if (C || m === g.BRT.POPOUT || p || t.bot || t.isProvisional) return null;
    let j = () => {
            x?.(),
                r.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: f }),
                h.dispatch(g.jej.POPOUT_CLOSE),
                (0, a.s7G)();
        },
        v = !s.Ay.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(a.Drp, {
        id: E ?? "call",
        label: b.intl.string(b.t["ZeP+kK"]),
        action: v
            ? () => {
                  (0, a.mMO)(async () => {
                      let { default: e } = await n.e("19106").then(n.bind(n, 279673));
                      return (t) => (0, l.jsx)(e, { onSubmit: j, ...t });
                  });
              }
            : j,
        disabled: M,
    });
}
