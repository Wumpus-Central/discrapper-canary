"use strict";
n.d(t, { A: () => g });
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
    m = n(434499);
function g(e) {
    let { action: t, triggerType: n, toggled: g, onToggleAction: x } = e,
        h = (e) => () => x(e),
        _ = (0, c.x)(t.type, t, n),
        p = t.metadata?.channelId,
        A = (0, s.bG)([d.default, o.A, a.A], () => {
            let e = a.A.getChannel(p);
            return null == e ? null : (0, r.m1)(e, d.default, o.A);
        }, [p]);
    if (null == _) return null;
    let { headerText: f, descriptionText: j, icon: N } = _;
    return (0, i.jsxs)("div", {
        className: m.Ik,
        children: [
            (0, i.jsx)("div", {
                className: m.TV,
                children: (0, i.jsx)(N, { size: "md", color: "currentColor", className: m.gE }),
            }),
            (0, i.jsxs)("div", {
                className: m.xj,
                children: [
                    (0, i.jsx)(l.Heading, { variant: "heading-sm/semibold", children: f }),
                    (0, i.jsx)(l.Text, { color: "interactive-text-default", variant: "text-xs/medium", children: j }),
                    g &&
                        (0, i.jsxs)(l.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [
                                null != A && u.intl.format(u.t["8Sr/ar"], { channelName: A }),
                                (0, i.jsx)(l.DUT, {
                                    onClick: h(!0),
                                    className: m._2,
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
                    children: (0, i.jsx)(l.P7L, { checked: g, disabled: !_.isEditable }),
                }),
            }),
        ],
    });
}
