n.d(t, { default: () => O }), n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    o = n(847767),
    a = n(358367),
    u = n(793574),
    c = n(50268),
    d = n(235052),
    s = n(222311),
    A = n(237749),
    _ = n(961350),
    f = n(661455),
    b = n(291247),
    E = n(652215),
    g = n(985018);
let O = (0, a.A)(
    (0, o.A)(
        function (e) {
            let { user: t, channel: n, guildId: o, onSelect: a, onInteraction: u, context: E } = e,
                O = n.id,
                j = t.isNonUserBot(),
                p = t.id === _.default.getId(),
                v = (0, s.A)(t),
                y = (0, A.A)(t, o, O),
                S = (0, f.n)({
                    isOwnSettings: p,
                    userId: t.id,
                    channelId: O,
                    guildId: o,
                    context: E,
                }),
                [h, C] = (0, f.O)(t, O, o),
                I = (0, b.A)(t, o, O),
                x = (0, c.A)({
                    id: t.id,
                    label: g.intl.string(g.t["/AXYnE"]),
                }),
                T = (0, d.A)(t.id, n);
            return (0, r.jsx)(i.W1t, {
                navId: "user-context",
                onClose: l.Z_,
                "aria-label": g.intl.string(g.t.liqwPJ),
                onSelect: a,
                onInteraction: u,
                variant: "fixed",
                children:
                    !j &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(i.rXV, {
                                children: [v, y],
                            }),
                            T,
                            S,
                            !p &&
                                (0, r.jsx)(i.rXV, {
                                    children: (0, r.jsxs)(i.Drp, {
                                        id: "more-options",
                                        label: g.intl.string(g.t.PdRCRg),
                                        children: [h, (0, r.jsx)(i.rXV, { children: I }), C],
                                    }),
                                }),
                            p && (0, r.jsx)(i.rXV, { children: x }),
                        ],
                    }),
            });
        },
        { object: E.ZSU.CONTEXT_MENU },
    ),
    [u.A.VOICE_USER],
);
