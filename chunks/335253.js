t.d(e, { default: () => C });
var n = t(627968);
t(64700);
var r = t(980707),
    d = t(477782),
    s = t(442433),
    l = t(847767),
    a = t(358367),
    c = t(793574),
    o = t(50268),
    h = t(309858),
    u = t(844065),
    x = t(237749),
    A = t(495544),
    j = t(661455),
    p = t(696582),
    g = t(652215),
    b = t(375708);
let C = (0, a.A)(
    (0, l.A)(
        function (i) {
            let { user: e, channel: t, guildId: l, onSelect: a, onInteraction: c, context: g } = i,
                C = t.id,
                X = e.isNonUserBot(),
                E = e.id === A.default.getId(),
                I = (0, u.A)(e),
                _ = (0, x.A)(e, l, C),
                f = (0, j.n)({ isOwnSettings: E, userId: e.id, channelId: C, guildId: l, context: g }),
                [k, m] = (0, j.O)(e, C, l),
                v = (0, p.A)(e, l, C),
                U = (0, o.A)({ id: e.id, label: b.intl.string(b.t["/AXYnE"]) }),
                w = (0, h.A)(e.id, t);
            return (0, n.jsx)(r.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: s.Z_,
                "aria-label": b.intl.string(b.t.liqwPJ),
                onSelect: a,
                onInteraction: c,
                variant: "fixed",
                children:
                    !X &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(d.rX, { children: [I, _] }),
                            w,
                            f,
                            !E &&
                                (0, n.jsx)(d.rX, {
                                    children: (0, n.jsxs)(d.Dr, {
                                        id: "more-options",
                                        label: b.intl.string(b.t.PdRCRg),
                                        children: [k, (0, n.jsx)(d.rX, { children: v }), m],
                                    }),
                                }),
                            E && (0, n.jsx)(d.rX, { children: U }),
                        ],
                    }),
            });
        },
        { object: g.ZSU.CONTEXT_MENU },
    ),
    [c.A.VOICE_USER],
);
