t.d(n, { A: () => p });
var i = t(627968);
t(64700);
var o = t(17928),
    r = t(477782),
    s = t(192308),
    d = t(717398),
    l = t(994500),
    a = t(287809),
    u = t(652215),
    c = t(375708);
function p(e) {
    let {
            user: n,
            guildId: p,
            channelId: g,
            onBlock: h,
            onIgnore: k,
            onUnignore: A,
            location: C = "ContextMenu",
            appContext: b = u.BRT.APP,
        } = e,
        { id: x } = n,
        f = (0, o.bG)([a.default], () => a.default.getCurrentUser()?.id === x, [x]),
        { isIgnored: w, isBlocked: B } = (0, o.cf)(
            [l.A],
            () => ({ isIgnored: l.A.isIgnored(x), isBlocked: l.A.isBlocked(x) }),
            [x],
        );
    return f || B
        ? null
        : (0, i.jsx)(r.Dr, {
              id: "ignore",
              label: w ? c.intl.string(c.t["8wXU9B"]) : c.intl.string(c.t.ytCpKs),
              action: w
                  ? () => {
                        A?.(), d.A.unignoreUser(x, C ?? "use-ignore-user-item-web", g ?? void 0);
                    }
                  : () => {
                        (0, s.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    t.e("8516"),
                                    t.e("74370"),
                                    t.e("11523"),
                                    t.e("20683"),
                                    t.e("63618"),
                                    t.e("607"),
                                    t.e("12755"),
                                    t.e("14788"),
                                ]).then(t.bind(t, 143547));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        guildId: p,
                                        channelId: g,
                                        user: n,
                                        onIgnore: k,
                                        onBlock: h,
                                        location: C,
                                    });
                            },
                            { contextKey: (0, s.modalContextFromAppContext)(b) },
                        );
                    },
          });
}
