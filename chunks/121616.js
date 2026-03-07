n.d(t, { d: () => _ });
var i = n(64700),
    s = n(814278),
    l = n(419954),
    a = n(933297),
    r = n(723702),
    o = n(780964),
    d = n(179014),
    c = n(437690),
    u = n(985018);
let _ = (0, l.zZ)(o.X.VOICE_SECURITY_CATEGORY, {
    useTitle: () => u.intl.string(u.t.xVk85F),
    useInlineNotice: function () {
        return i.useMemo(
            () => ({
                type: a.lT.INLINE_NOTICE,
                noticeType: "info",
                useText: () => u.intl.format(u.t["/6sFWa"], { helpArticle: (0, s.aW)() }),
            }),
            [],
        );
    },
    usePredicate: () => (0, r.isDesktop)(),
    buildLayout: () => [d.r, c.f],
});
