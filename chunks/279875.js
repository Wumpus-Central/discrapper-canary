e.d(n, { GuildSubscriptionSelectionModal: () => p }), e(388685), e(290780), e(539854);
var i = e(54381),
    l = e(473749),
    r = e(793030),
    s = e(481060),
    a = e(565138),
    u = e(430824),
    o = e(270144),
    d = e(388032),
    c = e(250117);
function p(t) {
    let { transitionState: n, onClose: e, sku: p, onSelect: x, currentGuildId: h } = t,
        [g, f] = l.useState(),
        { guilds: j, isFetching: v } = (0, o.CR)(p.applicationId, p.id, !0),
        I = l.useMemo(() => {
            if (!v && null != h)
                return (
                    j.findIndex((t) => {
                        let { id: n } = t;
                        return n === h;
                    }) >= 0
                );
        }, [h, j, v]);
    l.useLayoutEffect(() => {
        I && f(h);
    }, [h, I]);
    let b = l.useMemo(() => {
        let t = [];
        for (let n of j) {
            let e = {
                value: n.id,
                label: n.name,
            };
            I && n.id === h ? t.unshift(e) : t.push(e);
        }
        return t;
    }, [h, j, I]);
    return (0, i.jsx)(r.Modal, {
        title: d.intl.string(d.t["xgtI/K"]),
        subtitle: d.intl.string(d.t.rAXXxN),
        transitionState: n,
        onClose: e,
        actions: [
            {
                variant: "secondary",
                text: d.intl.string(d.t.cpT0Cq),
                onClick: e,
            },
            {
                variant: "primary",
                text: d.intl.string(d.t["cY+Oob"]),
                disabled: null == g,
                onClick: function () {
                    null != g && (x(g), e());
                },
            },
        ],
        children: v
            ? (0, i.jsx)(s.$jN, {
                  type: s.$jN.Type.PULSING_ELLIPSIS,
                  className: c.spinner,
              })
            : b.length > 0
              ? (0, i.jsx)(s.VcW, {
                    "aria-label": d.intl.string(d.t["5qyruI"]),
                    options: b,
                    value: g,
                    onChange: f,
                    renderOptionPrefix: (t) => {
                        let n = null == t ? void 0 : t.value,
                            e = null != n ? u.Z.getGuild(n) : null;
                        return null == e
                            ? null
                            : (0, i.jsx)(a.Z, {
                                  guild: e,
                                  size: a.Z.Sizes.MINI,
                              });
                    },
                    renderOptionLabel: (t) => {
                        let { label: n, value: e } = t;
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: n,
                                }),
                                e === h &&
                                    (0, i.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-secondary",
                                        children: d.intl.string(d.t.RjtuAI),
                                    }),
                            ],
                        });
                    },
                })
              : (0, i.jsx)(s.Wn, {
                    messageType: s.QYI.WARNING,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: d.intl.string(d.t.M2TbbK),
                    }),
                }),
    });
}
