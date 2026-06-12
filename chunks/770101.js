n.d(e, { default: () => G }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(91871),
    a = n.n(l),
    r = n(189213),
    c = n(17928),
    d = n(892547),
    o = n(834730),
    u = n(939249),
    m = n(398590),
    h = n(548118),
    x = n(976860),
    g = n(71393),
    j = n(711014),
    p = n(473145),
    y = n(652215),
    C = n(375708),
    v = n(249836);
function f(t) {
    let { setQuery: e, query: n } = t;
    return (0, i.jsx)(d.I, {
        placeholder: C.intl.string(C.t.vf3ZTa),
        "aria-label": C.intl.string(C.t.vf3ZTa),
        query: n,
        onChange: e,
        onClear: () => e(""),
    });
}
function w(t) {
    let { isTransfer: e = !1, selectedSlotGuilds: n, onClose: s, onSelectGuild: l, query: r } = t,
        d = (0, c.bG)([j.Ay], () => j.Ay.getFlattenedGuildIds()),
        f = (0, c.yK)([g.A], () =>
            d.reduce((t, e) => {
                let i = g.A.getGuild(e);
                return (
                    null == i ||
                        (null != n && n.some((t) => t.id === e)) ||
                        ((r.length <= 0 || a()(r.toLowerCase(), i?.name.toLowerCase())) && t.push(i)),
                    t
                );
            }, []),
        );
    function w() {
        s(), (0, m.jH)(), (0, x.pX)(y.BVt.GUILD_DISCOVERY);
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            0 === f.length &&
                (0, i.jsx)("div", {
                    className: v.Kl,
                    children: (0, i.jsx)(o.E, {
                        variant: "text-md/normal",
                        children:
                            0 === d.length
                                ? C.intl.format(C.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (t, e) =>
                                          (0, i.jsx)(u.D, { onClick: w, tag: "a", children: t }, e),
                                  })
                                : C.intl.string(C.t.w3GLl9),
                    }),
                }),
            f.map((t) =>
                (0, i.jsxs)(
                    u.D,
                    {
                        className: v.Ss,
                        onClick: () => {
                            l(t);
                        },
                        children: [
                            (0, i.jsx)(h.Ay, { className: v.Bq, guild: t, size: h.Ay.Sizes.SMALL, active: !0 }),
                            (0, i.jsxs)("div", {
                                className: v.Vi,
                                children: [
                                    (0, i.jsx)(o.E, { className: v.tD, variant: "text-md/normal", children: t.name }),
                                    (0, i.jsx)(o.E, {
                                        className: v.w2,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, p.gb)(t.premiumTier),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.E, {
                                className: v.qW,
                                color: "always-white",
                                variant: "text-sm/medium",
                                children: e ? C.intl.string(C.t.dUgaF8) : C.intl.string(C.t.Uj0md3),
                            }),
                        ],
                    },
                    t.id,
                ),
            ),
        ],
    });
}
function G(t) {
    let { onClose: e, onSelectGuild: n, transitionState: l, isTransfer: a = !1, selectedSlotGuilds: c } = t,
        [d, o] = s.useState(""),
        u = async () => {
            await e();
        },
        m = a ? C.intl.string(C.t.IB13DV) : C.intl.string(C.t.cQYceV);
    return (0, i.jsx)(r.Modal, {
        transitionState: l,
        onClose: u,
        size: "md",
        title: m,
        input: (0, i.jsx)(f, { query: d, setQuery: o }),
        actions: [],
        children: (0, i.jsx)(w, { onClose: e, onSelectGuild: n, query: d, isTransfer: a, selectedSlotGuilds: c }),
    });
}
