n.d(t, { O: () => I, default: () => p, n: () => v });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(793574),
    o = n(734337),
    u = n(855187),
    c = n(479335),
    A = n(470743),
    g = n(50268),
    b = n(961350),
    f = n(239211),
    E = n(399476),
    m = n(301541),
    x = n(198229),
    h = n(243949),
    C = n(972432),
    S = n(652215),
    j = n(985018);
function v(e) {
    let { isOwnSettings: t, userId: n, channelId: a, guildId: r, context: d } = e,
        s = (0, h.A)({ userId: n, guildId: r, channelId: a, icon: l.nys, label: j.intl.string(j.t.iXAna6) }),
        c = (0, m.A)(n, d, l.oyn),
        g = (0, C.A)(n),
        b = (0, x.A)(n),
        f = (0, o.A)(n),
        E = (0, u.A)(n),
        S = (0, A.A)();
    return [(0, i.jsxs)(l.rXV, { children: [s, c] }), (0, i.jsxs)(l.rXV, { children: [g, b, f, E, t && S] })];
}
function I(e, t, n) {
    let a = (0, c.u)({ userId: e.id, channelId: t, guildId: n, minimal: !0 }),
        r = (0, g.A)({ id: e.id, label: j.intl.string(j.t["/AXYnE"]) }),
        d = (0, E.A)({ user: e, guildId: n, channelId: t, location: "GuildVoiceUserContextMenu" }),
        s = (0, f.A)({ user: e, guildId: n, channelId: t, location: "GuildVoiceUserContextMenu" }),
        o = (0, i.jsxs)(l.rXV, { children: [a, r] });
    return [(0, i.jsxs)(l.rXV, { children: [d, s] }), o];
}
let p = (0, d.A)(
    (0, r.A)(
        function (e) {
            let { user: t, channel: n, onSelect: r, onInteraction: d, context: s } = e,
                o = n.id,
                u = t.isNonUserBot(),
                c = t.id === b.default.getId(),
                A = v({ isOwnSettings: c, userId: t.id, channelId: o, context: s }),
                f = I(t, o),
                E = (0, g.A)({ id: t.id, label: j.intl.string(j.t["/AXYnE"]) });
            return (0, i.jsx)(l.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "user-context",
                onClose: a.Z_,
                "aria-label": j.intl.string(j.t.liqwPJ),
                onSelect: r,
                onInteraction: d,
                variant: "fixed",
                children:
                    !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            A,
                            !c &&
                                (0, i.jsx)(l.rXV, {
                                    children: (0, i.jsx)(l.Drp, {
                                        id: "more-options",
                                        label: j.intl.string(j.t.PdRCRg),
                                        children: f,
                                    }),
                                }),
                            c && (0, i.jsx)(l.rXV, { children: E }),
                        ],
                    }),
            });
        },
        { object: S.ZSU.CONTEXT_MENU },
    ),
    [s.A.VOICE_USER],
);
