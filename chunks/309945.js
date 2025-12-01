n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    o = n(657707),
    l = n(793030),
    a = n(442837),
    s = n(692547),
    c = n(899667),
    u = n(317169),
    d = n(130231),
    p = n(388032),
    f = n(874622);
function m(e) {
    let { guildId: t, powerupNames: n, warnings: m } = e,
        { spent: g } = (0, u.Z)(t),
        v = (0, a.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(t), [t]),
        x =
            g -
            i.useMemo(() => {
                var e, t, n;
                return null !=
                    (n =
                        null == v ||
                        null == (t = v.filter) ||
                        null == (e = t.call(v, (e) => !e.ended && null == e.endsAt))
                            ? void 0
                            : e.length)
                    ? n
                    : 0;
            }, [v]);
    return x <= 0
        ? null
        : (0, r.jsxs)("div", {
              className: f.container,
              children: [
                  (0, r.jsx)(o.Mgn, {
                      color: s.Z.colors.TEXT_FEEDBACK_WARNING,
                      className: f.icon,
                  }),
                  (0, r.jsx)(l.xvT, {
                      variant: "text-md/semibold",
                      color: "text-feedback-warning",
                      children: p.intl.string(d.default.n5hQhc),
                  }),
                  (0, r.jsxs)(l.xvT, {
                      variant: "text-sm/medium",
                      children: [
                          p.intl.formatToPlainString(d.default.iAaAiG, {
                              boostCount: x,
                              perksString: n.join(", "),
                          }),
                          null == m
                              ? void 0
                              : m.map((e, t) =>
                                    (0, r.jsx)(
                                        l.xvT,
                                        {
                                            variant: "text-sm/medium",
                                            color: "text-feedback-warning",
                                            className: f.warning,
                                            children: e,
                                        },
                                        "warning-".concat(t),
                                    ),
                                ),
                      ],
                  }),
              ],
          });
}
