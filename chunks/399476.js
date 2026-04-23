n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(192308),
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
            onBlock: h,
            onIgnore: E,
            onUnignore: f,
            location: g = "ContextMenu",
            appContext: p = s.BRT.APP,
        } = e,
        { id: b } = t,
        S = (0, l.bG)([u.default], () => u.default.getCurrentUser()?.id === b, [b]),
        { isIgnored: v, isBlocked: I } = (0, l.cf)(
            [d.A],
            () => ({ isIgnored: d.A.isIgnored(b), isBlocked: d.A.isBlocked(b) }),
            [b],
        );
    return S || I
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "ignore",
              label: v ? c.intl.string(c.t["8wXU9B"]) : c.intl.string(c.t.ytCpKs),
              action: v
                  ? () => {
                        f?.(), o.A.unignoreUser(b, g ?? "use-ignore-user-item-web", A ?? void 0);
                    }
                  : () => {
                        (0, r.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("14788").then(n.bind(n, 143547));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        guildId: _,
                                        channelId: A,
                                        user: t,
                                        onIgnore: E,
                                        onBlock: h,
                                        location: g,
                                    });
                            },
                            { contextKey: (0, r.modalContextFromAppContext)(p) },
                        );
                    },
          });
}
