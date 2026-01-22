n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(158954),
    a = n(964486),
    s = n(933297),
    o = n(471675);

function l(e) {
    let { notice: t } = e,
        { noticeType: n, useText: s } = t,
        o = s();
    return (
        (0, a.Ay)(() => {
            var e;
            null == (e = t.trackView) || e.call(t);
        }),
        (0, r.jsx)(i.wx6, {
            type: n,
            children: o,
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
        case s.W.INLINE_NOTICE:
            return (0, r.jsx)(l, {
                notice: t,
            });
        case s.W.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(c, {
                notice: t,
            });
    }
}

function d(e) {
    let { notice: t } = e;
    return (0, r.jsx)("div", {
        className: o.l,
        children: (0, r.jsx)(u, {
            notice: t,
        }),
    });
}
