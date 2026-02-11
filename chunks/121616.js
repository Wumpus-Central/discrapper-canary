i.d(t, { d: () => _ });
var n = i(64700),
    l = i(814278),
    s = i(419954),
    r = i(933297),
    a = i(780964),
    u = i(179014),
    o = i(437690),
    d = i(985018);
let _ = (0, s.zZ)(a.X.VOICE_SECURITY_CATEGORY, {
    useTitle: () => d.intl.string(d.t.xVk85F),
    useInlineNotice: function () {
        return n.useMemo(
            () => ({
                type: r.lT.INLINE_NOTICE,
                noticeType: "info",
                useText: () => d.intl.format(d.t["/6sFWa"], { helpArticle: (0, l.aW)() }),
            }),
            [],
        );
    },
    buildLayout: () => [u.r, o.f],
});
