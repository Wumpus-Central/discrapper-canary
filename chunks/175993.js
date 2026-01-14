n.d(t, { Z: () => d });
var r = n(54381),
    i = n(793030),
    a = n(493773),
    o = n(970013),
    s = n(992406);
function l(e) {
    let { notice: t } = e,
        { noticeType: n, useText: o } = t,
        s = o();
    return (
        (0, a.ZP)(() => {
            var e;
            null == (e = t.trackView) || e.call(t);
        }),
        (0, r.jsx)(i.M14, {
            type: n,
            children: s,
        })
    );
}
function c(e) {
    let { notice: t } = e,
        { notice: n } = t;
    return (0, r.jsx)(n, {});
}
function u(e) {
    let { notice: t } = e;
    switch (t.type) {
        case o.v.INLINE_NOTICE:
            return (0, r.jsx)(l, { notice: t });
        case o.v.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(c, { notice: t });
    }
}
function d(e) {
    let { notice: t } = e;
    return (0, r.jsx)("div", {
        className: s.notice,
        children: (0, r.jsx)(u, { notice: t }),
    });
}
