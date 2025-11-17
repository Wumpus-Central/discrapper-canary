n.d(t, { Z: () => c });
var r = n(54381),
    l = n(793030),
    i = n(28682);
function o(e) {
    let { notice: t } = e,
        { noticeType: n, useText: i } = t,
        o = i();
    return (0, r.jsx)(l.M14, {
        type: n,
        children: o,
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
        case i.y1.INLINE_NOTICE:
            return (0, r.jsx)(o, { notice: t });
        case i.y1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(a, { notice: t });
    }
}
