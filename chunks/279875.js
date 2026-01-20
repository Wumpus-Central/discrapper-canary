e.d(n, { GuildSubscriptionSelectionModal: () => x }), e(388685), e(290780), e(539854);
var i = e(54381),
    l = e(473749),
    r = e(793030),
    s = e(668339),
    a = e(481060),
    u = e(565138),
    o = e(430824),
    d = e(270144),
    c = e(388032),
    p = e(919350);
function x(t) {
    let { transitionState: n, onClose: e, sku: x, onSelect: g, currentGuildId: h } = t,
        [f, j] = l.useState(),
        { guilds: m, isFetching: v } = (0, d.CR)(x.applicationId, x.id, !0),
        I = l.useMemo(() => {
            if (!v && null != h)
                return (
                    m.findIndex((t) => {
                        let { id: n } = t;
                        return n === h;
                    }) >= 0
                );
        }, [h, m, v]);
    l.useLayoutEffect(() => {
        I && j(h);
    }, [h, I]);
    let b = l.useMemo(() => {
        let t = [];
        for (let n of m) {
            let e = {
                value: n.id,
                label: n.name,
            };
            I && n.id === h ? t.unshift(e) : t.push(e);
        }
        return t;
    }, [h, m, I]);
    return (0, i.jsx)(r.Modal, {
        title: c.intl.string(c.t["xgtI/K"]),
        subtitle: c.intl.string(c.t.rAXXxN),
        transitionState: n,
        onClose: e,
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t.cpT0Cq),
                onClick: e,
            },
            {
                variant: "primary",
                text: c.intl.string(c.t["cY+Oob"]),
                disabled: null == f,
                onClick: function () {
                    null != f && (g(f), e());
                },
            },
        ],
        children: v
            ? (0, i.jsx)(a.$jN, {
                  type: a.$jN.Type.PULSING_ELLIPSIS,
                  className: p.spinner,
              })
            : b.length > 0
              ? (0, i.jsx)(s.d, {
                    "aria-label": c.intl.string(c.t["5qyruI"]),
                    options: b,
                    value: f,
                    onChange: j,
                    renderOptionPrefix: (t) => {
                        let n = null == t ? void 0 : t.value,
                            e = null != n ? o.Z.getGuild(n) : null;
                        return null == e
                            ? null
                            : (0, i.jsx)(u.Z, {
                                  guild: e,
                                  size: u.Z.Sizes.MINI,
                              });
                    },
                    renderOptionLabel: (t) => {
                        let { label: n, value: e } = t;
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                e === h &&
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
              : (0, i.jsx)(a.Wn, {
                    messageType: a.QYI.WARNING,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: c.intl.string(c.t.M2TbbK),
                    }),
                }),
    });
}
