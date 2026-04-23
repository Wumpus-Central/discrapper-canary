n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(477782),
    a = n(192308),
    o = n(49229),
    u = n(662502),
    s = n(994500),
    c = n(287809),
    d = n(652215),
    A = n(985018);
function f(e) {
    let {
            user: t,
            guildId: f,
            channelId: g,
            onBlock: m,
            onIgnore: _,
            onUnblock: I,
            location: p = "ContextMenu",
            appContext: E = d.BRT.APP,
        } = e,
        { id: C } = t,
        S = (0, i.bG)([c.default], () => c.default.getCurrentUser()?.id === C, [C]),
        h = (0, i.bG)([s.A], () => s.A.isBlocked(C), [C]);
    return S
        ? null
        : (0, r.jsx)(l.Dr, {
              id: "block",
              color: (h ? "default" : "danger") ?? "default",
              label: h ? A.intl.string(A.t.XyHpKH) : A.intl.string(A.t.l4Emac),
              action: h
                  ? () => {
                        I?.(), o.A.unblockUser(C, { location: p }), u.A.showUnblockSuccessToast(C, g ?? void 0);
                    }
                  : () => {
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("28969").then(n.bind(n, 994288));
                                return (n) =>
                                    (0, r.jsx)(e, {
                                        ...n,
                                        user: t,
                                        guildId: f,
                                        channelId: g,
                                        onBlock: m,
                                        onIgnore: _,
                                        location: p,
                                    });
                            },
                            { contextKey: (0, a.modalContextFromAppContext)(E) },
                        );
                    },
          });
}
