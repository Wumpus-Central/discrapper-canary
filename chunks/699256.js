"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(219504),
    o = n(975571),
    d = n(923121),
    c = n(352821),
    u = n(949034),
    m = n(250006),
    g = n(652215),
    x = n(539916),
    h = n(985018),
    _ = n(902973);
function A(e) {
    let { guildId: t } = e,
        A = (0, l.bG)([c.A], () => c.A.getEditedConnections()),
        p = (0, l.bG)([c.A], () => c.A.isSubmitting()),
        f = s.useCallback(() => {
            (0, r.mMO)(async () => {
                let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        j = s.useMemo(() => A.map((e) => ({ ...e, id: (0, x.Sq)(e) })), [A]),
        N = s.useCallback((e) => {
            let t = e.map((e) => {
                let { id: t, ...n } = e;
                return n;
            });
            (0, d.Bq)(t);
        }, []),
        { handleDragStart: E, handleDragReset: b, handleDragComplete: T, draggingId: C } = (0, a.A)(j, N),
        { enabled: I } = u.A.useExperiment({ guildId: t, location: "guild_settings" }, { autoTrackExposure: !0 });
    if (!I) return null;
    let v = A.length < x.pA;
    return (0, i.jsxs)("div", {
        className: _.jx,
        children: [
            (0, i.jsxs)("div", {
                className: _.G6,
                children: [
                    (0, i.jsx)(r.Heading, { variant: "heading-lg/bold", children: h.intl.string(h.t.Cl8F8H) }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: h.intl.format(h.t.vqgyJR, {
                            linkedRolesUrl: o.A.getArticleURL(g.MVz.CONNECTION_DETAILS_ADMIN),
                        }),
                    }),
                    !v &&
                        (0, i.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: h.intl.format(h.t.Nc7guW, { max: x.pA }),
                        }),
                ],
            }),
            A.length > 0 &&
                (0, i.jsx)("div", {
                    className: _.eF,
                    children: j.map((e, t) =>
                        (0, i.jsx)(
                            m.A,
                            {
                                connection: e,
                                index: t,
                                onDragStart: E,
                                onDragReset: b,
                                onDragComplete: T,
                                draggingId: C,
                            },
                            e.id,
                        ),
                    ),
                }),
            (0, i.jsxs)("button", {
                className: _.qG,
                onClick: f,
                disabled: !v || p,
                type: "button",
                children: [
                    (0, i.jsx)(r.U1e, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-md/semibold",
                        color: "text-brand",
                        children: h.intl.string(h.t["03EqaC"]),
                    }),
                ],
            }),
        ],
    });
}
