n.d(t, { A: () => b });
var o = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    d = n(192308),
    r = n(717398),
    i = n(381689),
    s = n(994500),
    c = n(287809),
    u = n(652215),
    p = n(375708);
function b(e) {
    let {
            user: t,
            guildId: b,
            channelId: k,
            onBlock: h,
            onIgnore: A,
            onUnblock: f,
            location: g = "ContextMenu",
            appContext: x = u.BRT.APP,
        } = e,
        { id: C } = t,
        m = (0, l.bG)([c.default], () => c.default.getCurrentUser()?.id === C, [C]),
        w = (0, l.bG)([s.A], () => s.A.isBlocked(C), [C]);
    return m
        ? null
        : (0, o.jsx)(a.Dr, {
              id: "block",
              color: (w ? "default" : "danger") ?? "default",
              label: w ? p.intl.string(p.t.XyHpKH) : p.intl.string(p.t.l4Emac),
              action: w
                  ? () => {
                        f?.(), r.A.unblockUser(C, { location: g }), i.A.showUnblockSuccessToast(C, k ?? void 0);
                    }
                  : () => {
                        (0, d.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("57750"),
                                    n.e("74370"),
                                    n.e("11523"),
                                    n.e("20683"),
                                    n.e("63618"),
                                    n.e("607"),
                                    n.e("12755"),
                                    n.e("14788"),
                                ]).then(n.bind(n, 262797));
                                return (n) =>
                                    (0, o.jsx)(e, {
                                        ...n,
                                        user: t,
                                        guildId: b,
                                        channelId: k,
                                        onBlock: h,
                                        onIgnore: A,
                                        location: g,
                                    });
                            },
                            { contextKey: (0, d.modalContextFromAppContext)(x) },
                        );
                    },
          });
}
