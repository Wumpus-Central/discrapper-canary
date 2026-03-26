n.d(t, { A: () => u });
var i = n(627968),
    s = n(158954),
    l = n(964486),
    a = n(933297),
    r = n(38456);
function o(e) {
    let { notice: t } = e,
        { noticeType: n, useText: a } = t,
        r = a();
    return (
        (0, l.Ay)(() => {
            t.trackView?.();
        }),
        (0, i.jsx)(s.wx6, { type: n, children: r })
    );
}
function d(e) {
    let { notice: t } = e,
        { notice: n } = t;
    return (0, i.jsx)(n, {});
}
function c(e) {
    let { notice: t } = e;
    switch (t.type) {
        case a.lT.INLINE_NOTICE:
            return (0, i.jsx)(o, { notice: t });
        case a.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, i.jsx)(d, { notice: t });
    }
}
function u(e) {
    let { notice: t } = e;
    return (0, i.jsx)("div", { className: r.l, children: (0, i.jsx)(c, { notice: t }) });
}
