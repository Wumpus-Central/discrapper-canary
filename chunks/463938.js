n.d(t, { j: () => f });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(827734),
    o = n(397927),
    c = n(701785),
    d = n(65995),
    u = n(976860),
    h = n(147925),
    A = n(652215),
    _ = n(746080),
    m = n(985018),
    g = n(139715);
function p(e, t) {
    return (0, i.jsx)(o.Text, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let f = l.memo(function (e) {
    let { guild: t } = e,
        n = (0, a.bG)([c.h], () => c.h.getNewMemberActions(t.id), [t.id]),
        f = (0, a.bG)([d.A], () => d.A.getCompletedActions(t.id)),
        x = l.useMemo(() => {
            if (null == n || null == f) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != f[t.channelId] && e++;
                }),
                e
            );
        }, [f, n]),
        E = null == n ? 0 : n.length,
        I = (0, s.rm)(`progress-bar-${t.id}`);
    return (0, i.jsxs)("li", {
        children: [
            (0, i.jsxs)(o.DUT, {
                ...I,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: g.G9,
                onClick: function () {
                    (0, u.pX)(A.BVt.CHANNEL(t.id, _.VV.GUILD_HOME));
                },
                children: [
                    (0, i.jsxs)("div", {
                        className: g.A1,
                        children: [
                            (0, i.jsx)(o.Heading, { variant: "heading-sm/bold", children: m.intl.string(m.t.SnrR3x) }),
                            (0, i.jsxs)("div", {
                                className: g.Ib,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: g.Cv,
                                        children: m.intl.format(m.t.eqZ1lW, {
                                            numberHook: p,
                                            total: E.toString(),
                                            completed: x.toString(),
                                        }),
                                    }),
                                    (0, i.jsx)(h.A, {
                                        className: g.UE,
                                        width: 16,
                                        height: 16,
                                        direction: h.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.iCB, {
                        className: g.hr,
                        foregroundGradientColor: [
                            r.A.unsafe_rawColors.GREEN_300.css,
                            r.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (x / E) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, i.jsx)("div", { role: "separator", className: g.yF }),
        ],
    });
});
