n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(308528),
    d = n(313369),
    o = n(267102),
    s = n(964404),
    u = n(961350),
    c = n(734057),
    A = n(994500),
    g = n(309010),
    m = n(652215),
    b = n(985018);
function E(e) {
    let { user: t, context: E, joinCallVideo: f, id: h, onCall: x } = e,
        M = (0, o.aL)(),
        p = (0, i.bG)([u.default], () => u.default.getId() === t.id),
        C = (0, i.bG)([A.A], () => A.A.isBlocked(t.id)),
        S = (0, i.bG)([g.A, c.A], () => g.A.getVoiceChannelId() === c.A.getDMFromUserId(t.id)),
        { copyVariant: I } = d.o.useConfig({ location: "useCallUserItem" });
    if (p || E === m.BRT.POPOUT || S || t.bot || t.isProvisional) return null;
    let j = () => {
            x?.(),
                r.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: f }),
                M.dispatch(m.jej.POPOUT_CLOSE),
                (0, a.s7G)();
        },
        D = !s.Ay.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(a.Drp, {
        id: h ?? "call",
        label: "control" !== I ? b.intl.string(b.t["ZeP+kK"]) : b.intl.string(b.t.JJogjm),
        action: D
            ? () => {
                  (0, a.mMO)(async () => {
                      let { default: e } = await n.e("19106").then(n.bind(n, 279673));
                      return (t) => (0, l.jsx)(e, { onSubmit: j, ...t });
                  });
              }
            : j,
        disabled: C,
    });
}
