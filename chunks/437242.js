n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    s = n(47167),
    a = n(734057),
    c = n(994500),
    o = n(287809),
    d = n(239705),
    u = n(985018),
    f = n(86181);
function g(e) {
    var t;
    let { action: n, triggerType: g, toggled: b, onToggleAction: m } = e,
        p = (e) => () => m(e),
        x = (0, d.x)(n.type, n, g),
        h = null == (t = n.metadata) ? void 0 : t.channelId,
        j = (0, i.bG)([o.default, c.A, a.A], () => {
            let e = a.A.getChannel(h);
            return null == e ? null : (0, s.m1)(e, o.default, c.A);
        }, [h]);
    if (null == x) return null;
    let { headerText: O, descriptionText: y, icon: v } = x;
    return (0, r.jsxs)("div", {
        className: f.Ik,
        children: [
            (0, r.jsx)("div", {
                className: f.TV,
                children: (0, r.jsx)(v, {
                    size: "md",
                    color: "currentColor",
                    className: f.gE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: f.xj,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-sm/semibold",
                        children: O,
                    }),
                    (0, r.jsx)(l.Text, {
                        color: "interactive-text-default",
                        variant: "text-xs/medium",
                        children: y,
                    }),
                    b &&
                        (0, r.jsxs)(l.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [
                                null != j && u.intl.format(u.t["8Sr/ar"], { channelName: j }),
                                (0, r.jsx)(l.DUT, {
                                    onClick: p(!0),
                                    className: f._2,
                                    tag: "span",
                                    role: "link",
                                    children: u.intl.string(u.t["3gUsJb"]),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(l.DUT, {
                    onClick: x.isEditable ? p(!1) : void 0,
                    children: (0, r.jsx)(l.P7L, {
                        checked: b,
                        disabled: !x.isEditable,
                    }),
                }),
            }),
        ],
    });
}
