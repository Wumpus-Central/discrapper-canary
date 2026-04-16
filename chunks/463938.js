n.d(t, { j: () => f });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(827734),
    o = n(397927),
    d = n(701785),
    c = n(65995),
    u = n(976860),
    h = n(147925),
    A = n(652215),
    _ = n(746080),
    m = n(985018),
    p = n(33011);
function g(e, t) {
    return (0, i.jsx)(o.Text, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let f = l.memo(function (e) {
    let { guild: t } = e,
        n = (0, a.bG)([d.h], () => d.h.getNewMemberActions(t.id), [t.id]),
        f = (0, a.bG)([c.A], () => c.A.getCompletedActions(t.id)),
        E = l.useMemo(() => {
            if (null == n || null == f) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != f[t.channelId] && e++;
                }),
                e
            );
        }, [f, n]),
        x = null == n ? 0 : n.length,
        I = (0, s.rm)(`progress-bar-${t.id}`);
    return (0, i.jsxs)("li", {
        children: [
            (0, i.jsxs)(o.DUT, {
                ...I,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: p.G9,
                onClick: function () {
                    (0, u.pX)(A.BVt.CHANNEL(t.id, _.VV.GUILD_HOME));
                },
                children: [
                    (0, i.jsxs)("div", {
                        className: p.A1,
                        children: [
                            (0, i.jsx)(o.Heading, { variant: "heading-sm/bold", children: m.intl.string(m.t.SnrR3x) }),
                            (0, i.jsxs)("div", {
                                className: p.Ib,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: p.Cv,
                                        children: m.intl.format(m.t.eqZ1lW, {
                                            numberHook: g,
                                            total: x.toString(),
                                            completed: E.toString(),
                                        }),
                                    }),
                                    (0, i.jsx)(h.A, {
                                        className: p.UE,
                                        width: 16,
                                        height: 16,
                                        direction: h.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.iCB, {
                        className: p.hr,
                        foregroundGradientColor: [
                            r.A.unsafe_rawColors.GREEN_300.css,
                            r.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (E / x) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, i.jsx)("div", { role: "separator", className: p.yF }),
        ],
    });
});
