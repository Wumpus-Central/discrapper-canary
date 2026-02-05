n.d(t, { default: () => m });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(793574),
    o = n(50268),
    u = n(235052),
    c = n(222311),
    A = n(237749),
    g = n(961350),
    E = n(661455),
    _ = n(291247),
    b = n(652215),
    f = n(985018);
let m = (0, d.A)(
    (0, r.A)(
        function (e) {
            let { user: t, channel: n, guildId: r, onSelect: d, onInteraction: s, context: b } = e,
                m = n.id,
                C = t.isNonUserBot(),
                h = t.id === g.default.getId(),
                M = (0, c.A)(t),
                S = (0, A.A)(t, r, m),
                x = (0, E.n)({ isOwnSettings: h, userId: t.id, channelId: m, guildId: r, context: b }),
                [I, D] = (0, E.O)(t, m, r),
                v = (0, _.A)(t, r, m),
                T = (0, o.A)({ id: t.id, label: f.intl.string(f.t["/AXYnE"]) }),
                j = (0, u.A)(t.id, n);
            return (0, i.jsx)(l.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": f.intl.string(f.t.liqwPJ),
                onSelect: d,
                onInteraction: s,
                variant: "fixed",
                children:
                    !C &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)(l.rXV, { children: [M, S] }),
                            j,
                            x,
                            !h &&
                                (0, i.jsx)(l.rXV, {
                                    children: (0, i.jsxs)(l.Drp, {
                                        id: "more-options",
                                        label: f.intl.string(f.t.PdRCRg),
                                        children: [I, (0, i.jsx)(l.rXV, { children: v }), D],
                                    }),
                                }),
                            h && (0, i.jsx)(l.rXV, { children: T }),
                        ],
                    }),
            });
        },
        { object: b.ZSU.CONTEXT_MENU },
    ),
    [s.A.VOICE_USER],
);
