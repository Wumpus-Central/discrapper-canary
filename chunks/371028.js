l.d(t, { A: () => u });
var r = l(64700),
    n = l(311907),
    i = l(859241),
    s = l(864310),
    o = l(333354),
    a = l(985018);
function u(e, t) {
    let { spent: l } = (0, s.A)(e),
        u = (0, n.bG)([i.A], () => i.A.getAppliedGuildBoostsForGuild(e), [e]),
        d =
            l -
            r.useMemo(() => {
                var e, t, l;
                return null !=
                    (e =
                        null == u ||
                        null == (l = u.filter) ||
                        null == (t = l.call(u, (e) => !e.ended && null == e.endsAt))
                            ? void 0
                            : t.length)
                    ? e
                    : 0;
            }, [u]);
    return r.useMemo(
        () =>
            d <= 0
                ? {
                      shouldShow: !1,
                      title: "",
                      description: "",
                      requiredBoostCount: 0,
                  }
                : {
                      shouldShow: !0,
                      title: a.intl.string(o.default.n5hQhc),
                      description: a.intl.formatToPlainString(o.default.iAaAiG, {
                          boostCount: d,
                          perksString: t.join(", "),
                      }),
                      requiredBoostCount: d,
                  },
        [d, t],
    );
}
