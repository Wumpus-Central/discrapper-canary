n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(17928),
    r = n(477782),
    a = n(192308),
    o = n(49229),
    d = n(381689),
    u = n(994500),
    s = n(287809),
    c = n(652215),
    A = n(985018);
function E(e) {
    let {
            user: t,
            guildId: E,
            channelId: _,
            onBlock: g,
            onIgnore: I,
            onUnblock: S,
            location: f = "ContextMenu",
            appContext: M = c.BRT.APP,
        } = e,
        { id: y } = t,
        O = (0, i.bG)([s.default], () => s.default.getCurrentUser()?.id === y, [y]),
        N = (0, i.bG)([u.A], () => u.A.isBlocked(y), [y]);
    return O
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "block",
              color: (N ? "default" : "danger") ?? "default",
              label: N ? A.intl.string(A.t.XyHpKH) : A.intl.string(A.t.l4Emac),
              action: N
                  ? () => {
                        S?.(), o.A.unblockUser(y, { location: f }), d.A.showUnblockSuccessToast(y, _ ?? void 0);
                    }
                  : () => {
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("14788").then(n.bind(n, 262797));
                                return (n) =>
                                    (0, l.jsx)(e, {
                                        ...n,
                                        user: t,
                                        guildId: E,
                                        channelId: _,
                                        onBlock: g,
                                        onIgnore: I,
                                        location: f,
                                    });
                            },
                            { contextKey: (0, a.modalContextFromAppContext)(M) },
                        );
                    },
          });
}
