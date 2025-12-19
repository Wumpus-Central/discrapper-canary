n.d(e, { o: () => _ });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(443702),
    a = n(87065),
    o = n(743587),
    T = n(43384),
    S = n(726985),
    c = n(388032);
let E = (0, l.wf)(s.n.BILLING_PANEL, {
        usePredicate: () => (0, u.gN)("BillingPanel"),
        useTitle: () => c.intl.string(c.t.oeUm2s),
        buildLayout: () => [a.$, T.L, o.B],
        hideInStreamerMode: !0,
    }),
    d = (0, l.wf)(s.n.BILLING_PANEL, {
        usePredicate: () => !(0, u.gN)("LegacyBillingPanel"),
        useTitle: () => c.intl.string(c.t.oeUm2s),
        StronglyDiscouragedCustomComponent: r.ZP,
        buildLayout: () => [],
    }),
    _ = (0, l.m7)(s.n.BILLING_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.oeUm2s),
        icon: i.ciH,
        getLegacySearchKey: () => ((0, u.Gl)("BillingPanel") ? void 0 : S.s6.BILLING),
        buildLayout: () => ((0, u.Gl)("BillingPanel") ? [E] : [d]),
    });
