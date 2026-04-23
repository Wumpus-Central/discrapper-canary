n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    l = n(859241),
    s = n(864310),
    a = n(853513),
    o = n(985018);
function d(e, t) {
    let { spent: n } = (0, s.A)(e),
        d = (0, i.bG)([l.A], () => l.A.getAppliedGuildBoostsForGuild(e), [e]),
        u = n - r.useMemo(() => d?.filter?.((e) => !e.ended && null == e.endsAt)?.length ?? 0, [d]);
    return r.useMemo(
        () =>
            u <= 0
                ? { shouldShow: !1, title: "", description: "", requiredBoostCount: 0 }
                : {
                      shouldShow: !0,
                      title: o.intl.string(a.default.n5hQhc),
                      description: o.intl.formatToPlainString(a.default.iAaAiG, {
                          boostCount: u,
                          perksString: t.join(", "),
                      }),
                      requiredBoostCount: u,
                  },
        [u, t],
    );
}
