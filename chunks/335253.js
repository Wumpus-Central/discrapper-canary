n.d(t, { default: () => M });
var i = n(627968);
n(64700);
var l = n(861672),
    r = n(477782),
    a = n(442433),
    d = n(847767),
    u = n(358367),
    s = n(793574),
    o = n(50268),
    A = n(235052),
    c = n(222311),
    E = n(237749),
    g = n(961350),
    S = n(661455),
    I = n(291247),
    _ = n(652215),
    f = n(985018);
let M = (0, u.A)(
    (0, d.A)(
        function (e) {
            let { user: t, channel: n, guildId: d, onSelect: u, onInteraction: s, context: _ } = e,
                M = n.id,
                C = t.isNonUserBot(),
                b = t.id === g.default.getId(),
                m = (0, c.A)(t),
                h = (0, E.A)(t, d, M),
                N = (0, S.n)({ isOwnSettings: b, userId: t.id, channelId: M, guildId: d, context: _ }),
                [G, x] = (0, S.O)(t, M, d),
                O = (0, I.A)(t, d, M),
                v = (0, o.A)({ id: t.id, label: f.intl.string(f.t["/AXYnE"]) }),
                D = (0, A.A)(t.id, n);
            return (0, i.jsx)(l.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": f.intl.string(f.t.liqwPJ),
                onSelect: u,
                onInteraction: s,
                variant: "fixed",
                children:
                    !C &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(r.rX, { children: [m, h] }),
                            D,
                            N,
                            !b &&
                                (0, i.jsx)(r.rX, {
                                    children: (0, i.jsxs)(r.Dr, {
                                        id: "more-options",
                                        label: f.intl.string(f.t.PdRCRg),
                                        children: [G, (0, i.jsx)(r.rX, { children: O }), x],
                                    }),
                                }),
                            b && (0, i.jsx)(r.rX, { children: v }),
                        ],
                    }),
            });
        },
        { object: _.ZSU.CONTEXT_MENU },
    ),
    [s.A.VOICE_USER],
);
