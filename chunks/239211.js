"use strict";
i.d(t, { A: () => p });
var n = i(627968);
i(64700);
var r = i(311907),
    a = i(477782),
    l = i(192308),
    s = i(49229),
    o = i(662502),
    c = i(994500),
    d = i(287809),
    u = i(652215),
    _ = i(985018);
function p(e) {
    let {
            user: t,
            guildId: p,
            channelId: h,
            onBlock: f,
            onIgnore: A,
            onUnblock: g,
            location: m = "ContextMenu",
            appContext: E = u.BRT.APP,
        } = e,
        { id: b } = t,
        v = (0, r.bG)([d.default], () => d.default.getCurrentUser()?.id === b, [b]),
        I = (0, r.bG)([c.A], () => c.A.isBlocked(b), [b]);
    return v
        ? null
        : (0, n.jsx)(a.Dr, {
              id: "block",
              color: (I ? "default" : "danger") ?? "default",
              label: I ? _.intl.string(_.t.XyHpKH) : _.intl.string(_.t.l4Emac),
              action: I
                  ? () => {
                        g?.(), s.A.unblockUser(b, { location: m }), o.A.showUnblockSuccessToast(b, h ?? void 0);
                    }
                  : () => {
                        (0, l.openModalLazy)(
                            async () => {
                                let { default: e } = await i.e("28969").then(i.bind(i, 994288));
                                return (i) =>
                                    (0, n.jsx)(e, {
                                        ...i,
                                        user: t,
                                        guildId: p,
                                        channelId: h,
                                        onBlock: f,
                                        onIgnore: A,
                                        location: m,
                                    });
                            },
                            { contextKey: (0, l.modalContextFromAppContext)(E) },
                        );
                    },
          });
}
