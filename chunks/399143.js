(n.d(e, { GuildSubscriptionSelectionModal: () => h }), n(667532), n(321073));
var i = n(477900),
    l = n(582128),
    r = n(444550),
    a = n(189213),
    s = n(289873),
    u = n(834730),
    o = n(683071),
    d = n(548118),
    c = n(71393),
    p = n(915043),
    x = n(105292),
    g = n(315357);
function h(t) {
    let { transitionState: e, onClose: n, sku: h, onSelect: b, currentGuildId: f } = t,
        [y, m] = l.useState(),
        { guilds: v, isFetching: I } = (0, p.sD)(h.applicationId, h.id, !0),
        j = l.useMemo(() => {
            if (!I && null != f)
                return (
                    v.findIndex((t) => {
                        let { id: e } = t;
                        return e === f;
                    }) >= 0
                );
        }, [f, v, I]);
    l.useLayoutEffect(() => {
        j && m(f);
    }, [f, j]);
    let S = l.useMemo(() => {
        let t = [];
        for (let e of v) {
            let n = { value: e.id, label: e.name };
            j && e.id === f ? t.unshift(n) : t.push(n);
        }
        return t;
    }, [f, v, j]);
    return (0, i.jsx)(a.a, {
        title: x.intl.string(x.t["xgtI/K"]),
        subtitle: x.intl.string(x.t.rAXXxN),
        transitionState: e,
        onClose: n,
        actions: [
            { variant: "secondary", text: x.intl.string(x.t.cpT0Cq), onClick: n },
            {
                variant: "primary",
                text: x.intl.string(x.t["cY+Oob"]),
                disabled: null == y,
                onClick: function () {
                    null != y && (b(y), n());
                },
            },
        ],
        children: I
            ? (0, i.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS, className: g.u })
            : S.length > 0
              ? (0, i.jsx)(r.p, {
                    "aria-label": x.intl.string(x.t["5qyruI"]),
                    options: S,
                    value: y,
                    onChange: m,
                    renderOptionPrefix: (t) => {
                        let e = t?.value,
                            n = null != e ? c.A.getGuild(e) : null;
                        return null == n ? null : (0, i.jsx)(d.Ay, { guild: n, size: d.Ay.Sizes.MINI });
                    },
                    renderOptionLabel: (t) => {
                        let { label: e, value: n } = t;
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(u.E, { variant: "text-md/normal", children: e }),
                                n === f &&
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
              : (0, i.jsx)(o.w, { type: "warning", message: x.intl.string(x.t.M2TbbK), role: "static" }),
    });
}
