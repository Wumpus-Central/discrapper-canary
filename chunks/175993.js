n.d(t, { Z: () => c });
var r = n(951288),
    l = n(793030),
    o = n(28682);
function i(e) {
    let { notice: t } = e,
        { noticeType: n, useText: o } = t,
        i = o();
    return (0, r.jsx)(l.M14, {
        type: n,
        children: i,
    });
}
function a(e) {
    let { notice: t } = e,
        { render: n } = t;
    return n();
}
function c(e) {
    let { notice: t } = e;
    switch (t.type) {
        case o.y1.INLINE_NOTICE:
            return (0, r.jsx)(i, { notice: t });
        case o.y1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(a, { notice: t });
    }
}
