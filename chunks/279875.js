e.d(n, { GuildSubscriptionSelectionModal: () => p }), e(388685), e(290780), e(539854);
var i = e(54381),
    l = e(473749),
    r = e(793030),
    s = e(668339),
    a = e(481060),
    u = e(565138),
    o = e(430824),
    d = e(270144),
    c = e(388032),
    x = e(250117);
function p(t) {
    let { transitionState: n, onClose: e, sku: p, onSelect: h, currentGuildId: g } = t,
        [f, j] = l.useState(),
        { guilds: v, isFetching: I } = (0, d.CR)(p.applicationId, p.id, !0),
        b = l.useMemo(() => {
            if (!I && null != g)
                return (
                    v.findIndex((t) => {
                        let { id: n } = t;
                        return n === g;
                    }) >= 0
                );
        }, [g, v, I]);
    l.useLayoutEffect(() => {
        b && j(g);
    }, [g, b]);
    let m = l.useMemo(() => {
        let t = [];
        for (let n of v) {
            let e = {
                value: n.id,
                label: n.name,
            };
            b && n.id === g ? t.unshift(e) : t.push(e);
        }
        return t;
    }, [g, v, b]);
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
                    null != f && (h(f), e());
                },
            },
        ],
        children: I
            ? (0, i.jsx)(a.$jN, {
                  type: a.$jN.Type.PULSING_ELLIPSIS,
                  className: x.spinner,
              })
            : m.length > 0
              ? (0, i.jsx)(s.d, {
                    "aria-label": c.intl.string(c.t["5qyruI"]),
                    options: m,
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
                                e === g &&
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: c.intl.string(c.t.RjtuAI),
                                    }),
                            ],
                        });
                    },
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
