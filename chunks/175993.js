n.d(t, { Z: () => u });
var r = n(54381),
    l = n(793030),
    i = n(28682),
    o = n(465061);
function a(e) {
    let { notice: t } = e,
        { noticeType: n, useText: i } = t,
        o = i();
    return (0, r.jsx)(l.M14, {
        type: n,
        children: o,
    });
}
function s(e) {
    let { notice: t } = e,
        { render: n } = t;
    return n();
}
function c(e) {
    let { notice: t } = e;
    switch (t.type) {
        case i.y1.INLINE_NOTICE:
            return (0, r.jsx)(a, { notice: t });
        case i.y1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(s, { notice: t });
    }
}
function u(e) {
    let { notice: t } = e;
    return (0, r.jsx)("div", {
        className: o.notice,
        children: (0, r.jsx)(c, { notice: t }),
    });
}
