"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(49229),
    o = n(994500),
    l = n(287809),
    u = n(652215),
    c = n(985018);
function d(e) {
    let {
            user: t,
            guildId: d,
            channelId: _,
            onBlock: f,
            onIgnore: p,
            onUnignore: h,
            location: m = "ContextMenu",
            appContext: g = u.BRT.APP,
        } = e,
        { id: E } = t,
        A = (0, i.bG)([l.default], () => l.default.getCurrentUser()?.id === E, [E]),
        { isIgnored: I, isBlocked: T } = (0, i.cf)(
            [o.A],
            () => ({ isIgnored: o.A.isIgnored(E), isBlocked: o.A.isBlocked(E) }),
            [E],
        );
    return A || T
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "ignore",
              label: I ? c.intl.string(c.t["8wXU9B"]) : c.intl.string(c.t.ytCpKs),
              action: I
                  ? () => {
                        h?.(), s.A.unignoreUser(E, m ?? "use-ignore-user-item-web", _ ?? void 0);
                    }
                  : () => {
                        (0, a.mMO)(
                            async () => {
                                let { default: e } = await n.e("28969").then(n.bind(n, 143547));
                                return (n) =>
                                    (0, r.jsx)(e, {
                                        ...n,
                                        guildId: d,
                                        channelId: _,
                                        user: t,
                                        onIgnore: p,
                                        onBlock: f,
                                        location: m,
                                    });
                            },
                            { contextKey: (0, a.TId)(g) },
                        );
                    },
          });
}
