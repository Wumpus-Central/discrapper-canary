n.d(t, { Z: () => u });
var r = n(54381),
    i = n(793030),
    a = n(970013),
    o = n(465061);
function s(e) {
    let { notice: t } = e,
        { noticeType: n, useText: a } = t,
        o = a();
    return (0, r.jsx)(i.M14, {
        type: n,
        children: o,
    });
}
function l(e) {
    let { notice: t } = e,
        { notice: n } = t;
    return (0, r.jsx)(n, {});
}
function c(e) {
    let { notice: t } = e;
    switch (t.type) {
        case a.v.INLINE_NOTICE:
            return (0, r.jsx)(s, { notice: t });
        case a.v.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(l, { notice: t });
    }
}
function u(e) {
    let { notice: t } = e;
    return (0, r.jsx)("div", {
        className: o.notice,
        children: (0, r.jsx)(c, { notice: t }),
    });
}
