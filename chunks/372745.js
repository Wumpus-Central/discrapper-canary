n.d(t, { u: () => x });
var i = n(311907),
    s = n(521933),
    l = n(419954),
    a = n(933297),
    r = n(287809),
    o = n(780964),
    d = n(876696),
    u = n(577117),
    c = n(208417),
    g = n(438748),
    m = n(12756),
    _ = n(351603),
    A = n(678447),
    h = n(648699),
    p = n(985018);
let x = (0, l.zZ)(o.X.ACCOUNT_INFO_CATEGORY, {
    usePredicate: () => (0, i.bG)([r.default], () => null != r.default.getCurrentUser()),
    useTitle: () => p.intl.string(p.t.apNo4l),
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
                        useTitle: () => p.intl.string(p.t.tuGzBT),
                        useText: () => p.intl.string(p.t.NAzplE),
                        button: { useText: () => p.intl.string(p.t.lm1UKt), onClick: () => (0, d.S)(e) },
                    }
              : {
                    type: a.lT.INLINE_NOTICE,
                    noticeType: "critical",
                    useTitle: () => p.intl.string(p.t["/3qnL/"]),
                    useText: () => p.intl.string(p.t.qKs3vg),
                    button: { useText: () => p.intl.string(p.t["7psymi"]), onClick: () => s.A.openClaimAccountModal() },
                };
    },
    buildLayout: () => [h.h, m.C, _.N, A.n, g.k, u.F, c.j],
});
