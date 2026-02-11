"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(47167),
    a = n(734057),
    o = n(994500),
    d = n(287809),
    c = n(239705),
    u = n(985018),
    g = n(434499);
function m(e) {
    let { action: t, triggerType: n, toggled: m, onToggleAction: x } = e,
        h = (e) => () => x(e),
        _ = (0, c.x)(t.type, t, n),
        A = t.metadata?.channelId,
        p = (0, s.bG)([d.default, o.A, a.A], () => {
            let e = a.A.getChannel(A);
            return null == e ? null : (0, r.m1)(e, d.default, o.A);
        }, [A]);
    if (null == _) return null;
    let { headerText: f, descriptionText: j, icon: N } = _;
    return (0, i.jsxs)("div", {
        className: g.Ik,
        children: [
            (0, i.jsx)("div", {
                className: g.TV,
                children: (0, i.jsx)(N, { size: "md", color: "currentColor", className: g.gE }),
            }),
            (0, i.jsxs)("div", {
                className: g.xj,
                children: [
                    (0, i.jsx)(l.Heading, { variant: "heading-sm/semibold", children: f }),
                    (0, i.jsx)(l.Text, { color: "interactive-text-default", variant: "text-xs/medium", children: j }),
                    m &&
                        (0, i.jsxs)(l.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [
                                null != p && u.intl.format(u.t["8Sr/ar"], { channelName: p }),
                                (0, i.jsx)(l.DUT, {
                                    onClick: h(!0),
                                    className: g._2,
                                    tag: "span",
                                    role: "link",
                                    children: u.intl.string(u.t["3gUsJb"]),
                                }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(l.DUT, {
                    onClick: _.isEditable ? h(!1) : void 0,
                    children: (0, i.jsx)(l.P7L, { checked: m, disabled: !_.isEditable }),
                }),
            }),
        ],
    });
}
