n.d(t, { A: () => G });
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(452027),
    s = n(534890),
    E = n(834730),
    _ = n(289873),
    u = n(173936),
    o = n(477262),
    c = n(761640),
    d = n(706752),
    A = n(744432),
    g = n(829887),
    T = n(486974),
    I = n(985018),
    N = n(645267);
function G(e) {
    let { userId: t, guildId: n } = e,
        G = (0, r.bG)([c.Ay], () => c.Ay.getGuildSidebarState(n), [n]),
        { messagesCount: m, linksCount: O, mediaCount: S } = (0, A.u5)(t, n),
        R = new Intl.NumberFormat(I.intl.currentLocale).format(m),
        D = new Intl.NumberFormat(I.intl.currentLocale).format(O),
        h = new Intl.NumberFormat(I.intl.currentLocale).format(S),
        L = a.useCallback(
            async (e) => {
                if (null == G) return;
                let l = (0, A.ry)(t, e, { include_nsfw: !0 });
                await (0, d.z)(n, t, G.baseChannelId, { modViewPanel: T.g.MESSAGE_HISTORY, additionalSearchQuery: l });
            },
            [n, G, t],
        );
    return (0, l.jsx)(i.D, {
        label: I.intl.string(I.t.vCn2Tn),
        children: (0, l.jsxs)(g.SQ, {
            children: [
                (0, l.jsx)(g.RU, {
                    icon: (0, l.jsx)(s.o, { size: "custom", color: "currentColor", width: g.mb, height: g.mb }),
                    name: (0, l.jsx)(E.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: I.intl.string(I.t.OIgYlQ),
                    }),
                    description:
                        m === A.zu
                            ? (0, l.jsx)(_.y, { type: _.t.SPINNING_CIRCLE, className: N.S })
                            : (0, l.jsx)(E.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: R,
                              }),
                    onNavigate: m > 0 ? () => L(A.SA.MESSAGES) : void 0,
                }),
                (0, l.jsx)(g.RU, {
                    icon: (0, l.jsx)(u.q, { size: "custom", width: g.mb, height: g.mb }),
                    name: (0, l.jsx)(E.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: I.intl.string(I.t.DFSvTt),
                    }),
                    description:
                        O === A.zu
                            ? (0, l.jsx)(_.y, { type: _.t.SPINNING_CIRCLE, className: N.S })
                            : (0, l.jsx)(E.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: D,
                              }),
                    onNavigate: O > 0 ? () => L(A.SA.LINKS) : void 0,
                }),
                (0, l.jsx)(g.RU, {
                    icon: (0, l.jsx)(o.s, { size: "custom", width: g.mb, height: g.mb }),
                    name: (0, l.jsx)(E.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: I.intl.string(I.t["Aw9+/M"]),
                    }),
                    description:
                        S === A.zu
                            ? (0, l.jsx)(_.y, { type: _.t.SPINNING_CIRCLE, className: N.S })
                            : (0, l.jsx)(E.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: h,
                              }),
                    onNavigate: S > 0 ? () => L(A.SA.MEDIA) : void 0,
                }),
            ],
        }),
    });
}
