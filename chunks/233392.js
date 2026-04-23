n.d(t, { d: () => g });
var i = n(64700),
    s = n(814278),
    l = n(419954),
    a = n(933297),
    r = n(723702),
    o = n(780964),
    d = n(819046),
    u = n(620058),
    c = n(985018);
let g = (0, l.zZ)(o.X.VOICE_SECURITY_CATEGORY, {
    useTitle: () => c.intl.string(c.t.xVk85F),
    useInlineNotice: function () {
        return i.useMemo(
            () => ({
                type: a.lT.INLINE_NOTICE,
                noticeType: "info",
                useText: () => c.intl.format(c.t["/6sFWa"], { helpArticle: (0, s.aW)() }),
            }),
            [],
        );
    },
    usePredicate: () => (0, r.isDesktop)(),
    buildLayout: () => [d.r, u.f],
});
