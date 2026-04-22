n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(477782),
    a = n(192308),
    o = n(49229),
    d = n(994500),
    u = n(287809),
    s = n(652215),
    c = n(985018);
function _(e) {
    let {
            user: t,
            guildId: _,
            channelId: A,
            onBlock: f,
            onIgnore: E,
            onUnignore: h,
            location: g = "ContextMenu",
            appContext: b = s.BRT.APP,
        } = e,
        { id: p } = t,
        v = (0, l.bG)([u.default], () => u.default.getCurrentUser()?.id === p, [p]),
        { isIgnored: S, isBlocked: I } = (0, l.cf)(
            [d.A],
            () => ({ isIgnored: d.A.isIgnored(p), isBlocked: d.A.isBlocked(p) }),
            [p],
        );
    return v || I
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "ignore",
              label: S ? c.intl.string(c.t["8wXU9B"]) : c.intl.string(c.t.ytCpKs),
              action: S
                  ? () => {
                        h?.(), o.A.unignoreUser(p, g ?? "use-ignore-user-item-web", A ?? void 0);
                    }
                  : () => {
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("28969").then(n.bind(n, 143547));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        guildId: _,
                                        channelId: A,
                                        user: t,
                                        onIgnore: E,
                                        onBlock: f,
                                        location: g,
                                    });
                            },
                            { contextKey: (0, a.modalContextFromAppContext)(b) },
                        );
                    },
          });
}
