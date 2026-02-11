n.d(t, { A: () => u });
var i = n(627968),
    s = n(158954),
    a = n(964486),
    l = n(933297),
    r = n(471675);
function o(e) {
    let { notice: t } = e,
        { noticeType: n, useText: l } = t,
        r = l();
    return (
        (0, a.Ay)(() => {
            t.trackView?.();
        }),
        (0, i.jsx)(s.wx6, { type: n, children: r })
    );
}
function c(e) {
    let { notice: t } = e,
        { notice: n } = t;
    return (0, i.jsx)(n, {});
}
function d(e) {
    let { notice: t } = e;
    switch (t.type) {
        case l.lT.INLINE_NOTICE:
            return (0, i.jsx)(o, { notice: t });
        case l.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, i.jsx)(c, { notice: t });
    }
}
function u(e) {
    let { notice: t } = e;
    return (0, i.jsx)("div", { className: r.l, children: (0, i.jsx)(d, { notice: t }) });
}
