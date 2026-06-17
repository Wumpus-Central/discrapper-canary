n.d(e, { GuildSubscriptionSelectionModal: () => h }), n(667532), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(189213),
    a = n(444550),
    s = n(289873),
    u = n(834730),
    d = n(512950),
    o = n(548118),
    c = n(71393),
    p = n(915043),
    x = n(375708),
    g = n(725796);
function h(t) {
    let { transitionState: e, onClose: n, sku: h, onSelect: m, currentGuildId: b } = t,
        [f, v] = l.useState(),
        { guilds: y, isFetching: I } = (0, p.sD)(h.applicationId, h.id, !0),
        j = l.useMemo(() => {
            if (!I && null != b)
                return (
                    y.findIndex((t) => {
                        let { id: e } = t;
                        return e === b;
                    }) >= 0
                );
        }, [b, y, I]);
    l.useLayoutEffect(() => {
        j && v(b);
    }, [b, j]);
    let S = l.useMemo(() => {
        let t = [];
        for (let e of y) {
            let n = { value: e.id, label: e.name };
            j && e.id === b ? t.unshift(n) : t.push(n);
        }
        return t;
    }, [b, y, j]);
    return (0, i.jsx)(r.Modal, {
        title: x.intl.string(x.t["xgtI/K"]),
        subtitle: x.intl.string(x.t.rAXXxN),
        transitionState: e,
        onClose: n,
        actions: [
            { variant: "secondary", text: x.intl.string(x.t.cpT0Cq), onClick: n },
            {
                variant: "primary",
                text: x.intl.string(x.t["cY+Oob"]),
                disabled: null == f,
                onClick: function () {
                    null != f && (m(f), n());
                },
            },
        ],
        children: I
            ? (0, i.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS, className: g.u })
            : S.length > 0
              ? (0, i.jsx)(a.p, {
                    "aria-label": x.intl.string(x.t["5qyruI"]),
                    options: S,
                    value: f,
                    onChange: v,
                    renderOptionPrefix: (t) => {
                        let e = t?.value,
                            n = null != e ? c.A.getGuild(e) : null;
                        return null == n ? null : (0, i.jsx)(o.Ay, { guild: n, size: o.Ay.Sizes.MINI });
                    },
                    renderOptionLabel: (t) => {
                        let { label: e, value: n } = t;
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(u.E, { variant: "text-md/normal", children: e }),
                                n === b &&
                                    (0, i.jsx)(u.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: x.intl.string(x.t.RjtuAI),
                                    }),
                            ],
                        });
                    },
                    "data-migration-pending": !0,
                })
              : (0, i.jsx)(d.p, {
                    messageType: d.Y.WARNING,
                    children: (0, i.jsx)(u.E, { variant: "text-sm/normal", children: x.intl.string(x.t.M2TbbK) }),
                }),
    });
}
