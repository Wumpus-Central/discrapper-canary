n.d(t, { A: () => u });
var i = n(627968),
    s = n(158954),
    r = n(964486),
    a = n(933297),
    l = n(471675);
function o(e) {
    let { notice: t } = e,
        { noticeType: n, useText: a } = t,
        l = a();
    return (
        (0, r.Ay)(() => {
            t.trackView?.();
        }),
        (0, i.jsx)(s.wx6, { type: n, children: l })
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
        case a.W.INLINE_NOTICE:
            return (0, i.jsx)(o, { notice: t });
        case a.W.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, i.jsx)(c, { notice: t });
    }
}
function u(e) {
    let { notice: t } = e;
    return (0, i.jsx)("div", { className: l.l, children: (0, i.jsx)(d, { notice: t }) });
}
