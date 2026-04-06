n.d(t, { u: () => p });
var i = n(311907),
    s = n(521933),
    l = n(419954),
    a = n(933297),
    r = n(287809),
    o = n(780964),
    d = n(876696),
    c = n(577117),
    u = n(208417),
    m = n(438748),
    g = n(12756),
    _ = n(351603),
    x = n(678447),
    A = n(648699),
    h = n(985018);
let p = (0, l.zZ)(o.X.ACCOUNT_INFO_CATEGORY, {
    usePredicate: () => (0, i.bG)([r.default], () => null != r.default.getCurrentUser()),
    useTitle: () => h.intl.string(h.t.apNo4l),
    useInlineNotice: function () {
        let e = (0, i.bG)([r.default], () => r.default.getCurrentUser());
        return null == e
            ? null
            : e.isClaimed()
              ? null == e.email || e.verified
                  ? null
                  : {
                        type: a.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useTitle: () => h.intl.string(h.t.tuGzBT),
                        useText: () => h.intl.string(h.t.NAzplE),
                        button: { useText: () => h.intl.string(h.t.lm1UKt), onClick: () => (0, d.S)(e) },
                    }
              : {
                    type: a.lT.INLINE_NOTICE,
                    noticeType: "critical",
                    useTitle: () => h.intl.string(h.t["/3qnL/"]),
                    useText: () => h.intl.string(h.t.qKs3vg),
                    button: { useText: () => h.intl.string(h.t["7psymi"]), onClick: () => s.A.openClaimAccountModal() },
                };
    },
    buildLayout: () => [A.h, g.C, _.N, x.n, m.k, c.F, u.j],
});
