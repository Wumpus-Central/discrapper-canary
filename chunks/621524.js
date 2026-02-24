n.d(e, { GuildSubscriptionSelectionModal: () => x }), n(667532), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(158954),
    s = n(444550),
    a = n(397927),
    u = n(263063),
    o = n(71393),
    d = n(915043),
    c = n(985018),
    p = n(241241);
function x(t) {
    let { transitionState: e, onClose: n, sku: x, onSelect: g, currentGuildId: h } = t,
        [m, b] = l.useState(),
        { guilds: f, isFetching: v } = (0, d.sD)(x.applicationId, x.id, !0),
        y = l.useMemo(() => {
            if (!v && null != h)
                return (
                    f.findIndex((t) => {
                        let { id: e } = t;
                        return e === h;
                    }) >= 0
                );
        }, [h, f, v]);
    l.useLayoutEffect(() => {
        y && b(h);
    }, [h, y]);
    let I = l.useMemo(() => {
        let t = [];
        for (let e of f) {
            let n = { value: e.id, label: e.name };
            y && e.id === h ? t.unshift(n) : t.push(n);
        }
        return t;
    }, [h, f, y]);
    return (0, i.jsx)(r.Modal, {
        title: c.intl.string(c.t["xgtI/K"]),
        subtitle: c.intl.string(c.t.rAXXxN),
        transitionState: e,
        onClose: n,
        actions: [
            { variant: "secondary", text: c.intl.string(c.t.cpT0Cq), onClick: n },
            {
                variant: "primary",
                text: c.intl.string(c.t["cY+Oob"]),
                disabled: null == m,
                onClick: function () {
                    null != m && (g(m), n());
                },
            },
        ],
        children: v
            ? (0, i.jsx)(a.y$y, { type: a.y$y.Type.PULSING_ELLIPSIS, className: p.u })
            : I.length > 0
              ? (0, i.jsx)(s.p, {
                    "aria-label": c.intl.string(c.t["5qyruI"]),
                    options: I,
                    value: m,
                    onChange: b,
                    renderOptionPrefix: (t) => {
                        let e = t?.value,
                            n = null != e ? o.A.getGuild(e) : null;
                        return null == n ? null : (0, i.jsx)(u.A, { guild: n, size: u.A.Sizes.MINI });
                    },
                    renderOptionLabel: (t) => {
                        let { label: e, value: n } = t;
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(a.Text, { variant: "text-md/normal", children: e }),
                                n === h &&
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: c.intl.string(c.t.RjtuAI),
                                    }),
                            ],
                        });
                    },
                    "data-migration-pending": !0,
                })
              : (0, i.jsx)(a.po8, {
                    messageType: a.YCn.WARNING,
                    children: (0, i.jsx)(a.Text, { variant: "text-sm/normal", children: c.intl.string(c.t.M2TbbK) }),
                }),
    });
}
