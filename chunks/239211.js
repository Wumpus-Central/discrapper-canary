"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(49229),
    o = n(662502),
    l = n(994500),
    u = n(287809),
    c = n(652215),
    d = n(985018);
function _(e) {
    let {
            user: t,
            guildId: _,
            channelId: f,
            onBlock: p,
            onIgnore: h,
            onUnblock: m,
            location: g = "ContextMenu",
            appContext: E = c.BRT.APP,
        } = e,
        { id: A } = t,
        I = (0, i.bG)([u.default], () => u.default.getCurrentUser()?.id === A, [A]),
        T = (0, i.bG)([l.A], () => l.A.isBlocked(A), [A]),
        y = T ? "default" : "danger";
    return I
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "block",
              color: y ?? "default",
              label: T ? d.intl.string(d.t.XyHpKH) : d.intl.string(d.t.l4Emac),
              action: T
                  ? () => {
                        m?.(), s.A.unblockUser(A, { location: g }), o.A.showUnblockSuccessToast(A, f ?? void 0);
                    }
                  : () => {
                        (0, a.mMO)(
                            async () => {
                                let { default: e } = await n.e("28969").then(n.bind(n, 994288));
                                return (n) =>
                                    (0, r.jsx)(e, {
                                        ...n,
                                        user: t,
                                        guildId: _,
                                        channelId: f,
                                        onBlock: p,
                                        onIgnore: h,
                                        location: g,
                                    });
                            },
                            { contextKey: (0, a.TId)(E) },
                        );
                    },
          });
}
