(e(667532), e(321073));
var i = e(477900),
    l = e(582128),
    r = e(444550),
    a = e(189213),
    s = e(289873),
    u = e(834730),
    o = e(683071),
    d = e(682163),
    c = e(71393),
    p = e(915043),
    g = e(792996),
    x = e(315357);
e.d(
    n,
    {},
    {
        GuildSubscriptionSelectionModal: function (t) {
            let { transitionState: n, onClose: e, sku: b, onSelect: h, currentGuildId: y } = t,
                [f, m] = l.useState(),
                { guilds: v, isFetching: I } = (0, p.sD)(b.applicationId, b.id, !0),
                j = l.useMemo(() => {
                    if (!I && null != y)
                        return (
                            v.findIndex((t) => {
                                let { id: n } = t;
                                return n === y;
                            }) >= 0
                        );
                }, [y, v, I]);
            l.useLayoutEffect(() => {
                j && m(y);
            }, [y, j]);
            let S = l.useMemo(() => {
                let t = [];
                for (let n of v) {
                    let e = { value: n.id, label: n.name };
                    j && n.id === y ? t.unshift(e) : t.push(e);
                }
                return t;
            }, [y, v, j]);
            return (0, i.jsx)(a.a, {
                title: g.intl.string(g.t["xgtI/K"]),
                subtitle: g.intl.string(g.t.rAXXxN),
                transitionState: n,
                onClose: e,
                actions: [
                    { variant: "secondary", text: g.intl.string(g.t.cpT0Cq), onClick: e },
                    {
                        variant: "primary",
                        text: g.intl.string(g.t["cY+Oob"]),
                        disabled: null == f,
                        onClick: function () {
                            null != f && (h(f), e());
                        },
                    },
                ],
                children: I
                    ? (0, i.jsx)(s.y, { type: s.y.Type.PULSING_ELLIPSIS, className: x.u })
                    : S.length > 0
                      ? (0, i.jsx)(r.p, {
                            "aria-label": g.intl.string(g.t["5qyruI"]),
                            options: S,
                            value: f,
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
                                        (0, i.jsx)(u.E, { variant: "body-md/normal", children: n }),
                                        e === y &&
                                            (0, i.jsx)(u.E, {
                                                variant: "body-xs/normal",
                                                color: "text-default",
                                                children: g.intl.string(g.t.RjtuAI),
                                            }),
                                    ],
                                });
                            },
                            "data-migration-pending": !0,
                        })
                      : (0, i.jsx)(o.w, { type: "warning", message: g.intl.string(g.t.M2TbbK), role: "none" }),
            });
        },
    },
);
