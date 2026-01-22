i.d(e, { d: () => A });
var n = i(64700),
    l = i(814278),
    s = i(419954),
    r = i(933297),
    u = i(780964),
    a = i(179014),
    o = i(437690),
    T = i(985018);
let A = (0, s.zZ)(u.X.VOICE_SECURITY_CATEGORY, {
    useTitle: () => T.intl.string(T.t.WWaFn5),
    useNotice: function () {
        return n.useMemo(
            () => ({
                type: r.W.INLINE_NOTICE,
                noticeType: "info",
                useText: () => T.intl.format(T.t["/6sFWa"], { helpArticle: (0, l.aW)() }),
            }),
            [],
        );
    },
    buildLayout: () => [a.r, o.f],
});
