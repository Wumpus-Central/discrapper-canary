(e.d(n, { GuildSubscriptionSelectionModal: () => h }), e(667532), e(321073));
var i = e(477900),
    l = e(582128),
    r = e(444550),
    a = e(189213),
    s = e(289873),
    u = e(834730),
    o = e(683071),
    d = e(548118),
    c = e(71393),
    p = e(915043),
    x = e(105292),
    g = e(315357);
function h(t) {
    let { transitionState: n, onClose: e, sku: h, onSelect: b, currentGuildId: f } = t,
        [y, m] = l.useState(),
        { guilds: v, isFetching: I } = (0, p.sD)(h.applicationId, h.id, !0),
        j = l.useMemo(() => {
            if (!I && null != f)
                return (
                    v.findIndex((t) => {
                        let { id: n } = t;
                        return n === f;
                    }) >= 0
                );
        }, [f, v, I]);
    l.useLayoutEffect(() => {
        j && m(f);
    }, [f, j]);
    let S = l.useMemo(() => {
        let t = [];
        for (let n of v) {
            let e = { value: n.id, label: n.name };
            j && n.id === f ? t.unshift(e) : t.push(e);
        }
        return t;
    }, [f, v, j]);
    return (0, i.jsx)(a.a, {
        title: x.intl.string(x.t["xgtI/K"]),
        subtitle: x.intl.string(x.t.rAXXxN),
        transitionState: n,
        onClose: e,
        actions: [
            { variant: "secondary", text: x.intl.string(x.t.cpT0Cq), onClick: e },
            {
                variant: "primary",
                text: x.intl.string(x.t["cY+Oob"]),
                disabled: null == y,
                onClick: function () {
                    null != y && (b(y), e());
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
                        let n = t?.value,
                            e = null != n ? c.A.getGuild(n) : null;
                        return null == e ? null : (0, i.jsx)(d.Ay, { guild: e, size: d.Ay.Sizes.MINI });
                    },
                    renderOptionLabel: (t) => {
                        let { label: n, value: e } = t;
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(u.E, { variant: "text-md/normal", children: n }),
                                e === f &&
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
              : (0, i.jsx)(o.w, { type: "warning", message: x.intl.string(x.t.M2TbbK), role: "none" }),
    });
}
