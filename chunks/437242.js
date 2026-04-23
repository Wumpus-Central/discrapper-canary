n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(534514),
    r = n(834730),
    a = n(939249),
    o = n(658675),
    d = n(47167),
    c = n(734057),
    u = n(994500),
    m = n(287809),
    g = n(239705),
    h = n(985018),
    x = n(411374);
function _(e) {
    let { action: t, triggerType: n, toggled: _, onToggleAction: p } = e,
        A = (e) => () => p(e),
        E = (0, g.x)(t.type, t, n),
        f = t.metadata?.channelId,
        j = (0, l.bG)([m.default, u.A, c.A], () => {
            let e = c.A.getChannel(f);
            return null == e ? null : (0, d.m1)(e, m.default, u.A);
        }, [f]);
    if (null == E) return null;
    let { headerText: N, descriptionText: I, icon: C } = E;
    return (0, i.jsxs)("div", {
        className: x.Ik,
        children: [
            (0, i.jsx)("div", {
                className: x.TV,
                children: (0, i.jsx)(C, { size: "md", color: "currentColor", className: x.gE }),
            }),
            (0, i.jsxs)("div", {
                className: x.xj,
                children: [
                    (0, i.jsx)(s.D, { variant: "heading-sm/semibold", children: N }),
                    (0, i.jsx)(r.E, { color: "interactive-text-default", variant: "text-xs/medium", children: I }),
                    _ &&
                        (0, i.jsxs)(r.E, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [
                                null != j && h.intl.format(h.t["8Sr/ar"], { channelName: j }),
                                (0, i.jsx)(a.D, {
                                    onClick: A(!0),
                                    className: x._2,
                                    tag: "span",
                                    role: "link",
                                    children: h.intl.string(h.t["3gUsJb"]),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(a.D, {
                    onClick: E.isEditable ? A(!1) : void 0,
                    children: (0, i.jsx)(o.P, { checked: _, disabled: !E.isEditable }),
                }),
            }),
        ],
    });
}
