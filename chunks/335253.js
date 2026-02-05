i.d(t, { default: () => C });
var n = i(627968);
i(64700);
var l = i(397927),
    r = i(442433),
    d = i(847767),
    a = i(358367),
    s = i(793574),
    o = i(50268),
    u = i(235052),
    c = i(222311),
    A = i(237749),
    _ = i(961350),
    g = i(661455),
    E = i(291247),
    f = i(159817),
    b = i(652215),
    x = i(985018);
let C = (0, a.A)(
    (0, d.A)(
        function (e) {
            let { user: t, channel: i, guildId: d, onSelect: a, onInteraction: s, context: b } = e,
                C = i.id,
                m = t.isNonUserBot(),
                h = t.id === _.default.getId(),
                v = (0, c.A)(t),
                M = (0, A.A)(t, d, C),
                D = (0, g.n)({ isOwnSettings: h, userId: t.id, channelId: C, guildId: d, context: b }),
                [I, j] = (0, g.O)(t, C, d),
                S = (0, E.A)(t, d, C),
                U = (0, o.A)({ id: t.id, label: x.intl.string(x.t["/AXYnE"]) }),
                T = (0, u.A)(t.id, i),
                V = (0, f.A)({ user: t, guildId: d, channel: i, context: b });
            return (0, n.jsx)(l.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: r.Z_,
                "aria-label": x.intl.string(x.t.liqwPJ),
                onSelect: a,
                onInteraction: s,
                variant: "fixed",
                children:
                    !m &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(l.rXV, { children: [v, M] }),
                            T,
                            V,
                            D,
                            !h &&
                                (0, n.jsx)(l.rXV, {
                                    children: (0, n.jsxs)(l.Drp, {
                                        id: "more-options",
                                        label: x.intl.string(x.t.PdRCRg),
                                        children: [I, (0, n.jsx)(l.rXV, { children: S }), j],
                                    }),
                                }),
                            h && (0, n.jsx)(l.rXV, { children: U }),
                        ],
                    }),
            });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [s.A.VOICE_USER],
);
