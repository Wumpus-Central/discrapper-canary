n.d(t, { A: () => f });
var a = n(627968);
n(64700);
var i = n(17928),
    l = n(477782),
    r = n(192308),
    o = n(49229),
    s = n(381689),
    d = n(994500),
    c = n(287809),
    u = n(652215),
    _ = n(985018);
function f(e) {
    let {
            user: t,
            guildId: f,
            channelId: p,
            onBlock: A,
            onIgnore: g,
            onUnblock: h,
            location: m = "ContextMenu",
            appContext: x = u.BRT.APP,
        } = e,
        { id: I } = t,
        b = (0, i.bG)([c.default], () => c.default.getCurrentUser()?.id === I, [I]),
        v = (0, i.bG)([d.A], () => d.A.isBlocked(I), [I]);
    return b
        ? null
        : (0, a.jsx)(l.Dr, {
              id: "block",
              color: (v ? "default" : "danger") ?? "default",
              label: v ? _.intl.string(_.t.XyHpKH) : _.intl.string(_.t.l4Emac),
              action: v
                  ? () => {
                        h?.(), o.A.unblockUser(I, { location: m }), s.A.showUnblockSuccessToast(I, p ?? void 0);
                    }
                  : () => {
                        (0, r.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("14788").then(n.bind(n, 262797));
                                return (n) =>
                                    (0, a.jsx)(e, {
                                        ...n,
                                        user: t,
                                        guildId: f,
                                        channelId: p,
                                        onBlock: A,
                                        onIgnore: g,
                                        location: m,
                                    });
                            },
                            { contextKey: (0, r.modalContextFromAppContext)(x) },
                        );
                    },
          });
}
