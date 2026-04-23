n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(192308),
    a = n(534514),
    o = n(834730),
    d = n(245604),
    c = n(219504),
    u = n(975571),
    m = n(923121),
    g = n(352821),
    h = n(949034),
    x = n(250006),
    _ = n(652215),
    p = n(539916),
    A = n(985018),
    E = n(816214);
function f(e) {
    let { guildId: t } = e,
        f = (0, s.bG)([g.A], () => g.A.getEditedConnections()),
        j = (0, s.bG)([g.A], () => g.A.isSubmitting()),
        N = l.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        I = l.useMemo(() => f.map((e) => ({ ...e, id: (0, p.Sq)(e) })), [f]),
        C = l.useCallback((e) => {
            let t = e.map((e) => {
                let { id: t, ...n } = e;
                return n;
            });
            (0, m.Bq)(t);
        }, []),
        { handleDragStart: b, handleDragReset: v, handleDragComplete: S, draggingId: T } = (0, c.A)(I, C),
        { enabled: y } = h.A.useExperiment({ guildId: t, location: "guild_settings" }, { autoTrackExposure: !0 });
    if (!y) return null;
    let R = f.length < p.pA;
    return (0, i.jsxs)("div", {
        className: E.jx,
        children: [
            (0, i.jsxs)("div", {
                className: E.G6,
                children: [
                    (0, i.jsx)(a.D, { variant: "heading-lg/bold", children: A.intl.string(A.t.Cl8F8H) }),
                    (0, i.jsx)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: A.intl.format(A.t.vqgyJR, {
                            linkedRolesUrl: u.A.getArticleURL(_.MVz.CONNECTION_DETAILS_ADMIN),
                        }),
                    }),
                    !R &&
                        (0, i.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.format(A.t.Nc7guW, { max: p.pA }),
                        }),
                ],
            }),
            f.length > 0 &&
                (0, i.jsx)("div", {
                    className: E.eF,
                    children: I.map((e, t) =>
                        (0, i.jsx)(
                            x.A,
                            {
                                connection: e,
                                index: t,
                                onDragStart: b,
                                onDragReset: v,
                                onDragComplete: S,
                                draggingId: T,
                            },
                            e.id,
                        ),
                    ),
                }),
            (0, i.jsxs)("button", {
                className: E.qG,
                onClick: N,
                disabled: !R || j,
                type: "button",
                children: [
                    (0, i.jsx)(d.U, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    (0, i.jsx)(o.E, {
                        variant: "text-md/semibold",
                        color: "text-brand",
                        children: A.intl.string(A.t["03EqaC"]),
                    }),
                ],
            }),
        ],
    });
}
