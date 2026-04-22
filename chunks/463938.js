n.d(t, { j: () => I });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(827734),
    o = n(834730),
    d = n(939249),
    c = n(534514),
    u = n(5373),
    h = n(701785),
    A = n(65995),
    _ = n(976860),
    m = n(147925),
    g = n(652215),
    p = n(746080),
    f = n(985018),
    E = n(33011);
function x(e, t) {
    return (0, i.jsx)(o.E, { variant: "text-xs/bold", color: "text-default", children: e }, t);
}
let I = l.memo(function (e) {
    let { guild: t } = e,
        n = (0, a.bG)([h.h], () => h.h.getNewMemberActions(t.id), [t.id]),
        I = (0, a.bG)([A.A], () => A.A.getCompletedActions(t.id)),
        C = l.useMemo(() => {
            if (null == n || null == I) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != I[t.channelId] && e++;
                }),
                e
            );
        }, [I, n]),
        b = null == n ? 0 : n.length,
        N = (0, s.rm)(`progress-bar-${t.id}`);
    return (0, i.jsxs)("li", {
        children: [
            (0, i.jsxs)(d.D, {
                ...N,
                role: "button",
                focusProps: { offset: { right: 4 } },
                className: E.G9,
                onClick: function () {
                    (0, _.pX)(g.BVt.CHANNEL(t.id, p.VV.GUILD_HOME));
                },
                children: [
                    (0, i.jsxs)("div", {
                        className: E.A1,
                        children: [
                            (0, i.jsx)(c.D, { variant: "heading-sm/bold", children: f.intl.string(f.t.SnrR3x) }),
                            (0, i.jsxs)("div", {
                                className: E.Ib,
                                children: [
                                    (0, i.jsx)(o.E, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        className: E.Cv,
                                        children: f.intl.format(f.t.eqZ1lW, {
                                            numberHook: x,
                                            total: b.toString(),
                                            completed: C.toString(),
                                        }),
                                    }),
                                    (0, i.jsx)(m.A, {
                                        className: E.UE,
                                        width: 16,
                                        height: 16,
                                        direction: m.A.Directions.RIGHT,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(u.i, {
                        className: E.hr,
                        foregroundGradientColor: [
                            r.A.unsafe_rawColors.GREEN_300.css,
                            r.A.unsafe_rawColors.GREEN_230.css,
                        ],
                        percent: (C / b) * 100 + 3,
                        animate: !0,
                    }),
                ],
            }),
            (0, i.jsx)("div", { role: "separator", className: E.yF }),
        ],
    });
});
