(t.d(n, { Z: () => b }), t(642613), t(388685));
var r = t(255367),
    i = t(73800),
    o = t(597312),
    a = t(793030),
    s = t(442837),
    l = t(179360),
    c = t(616780),
    u = t(899667),
    d = t(720202),
    m = t(271383),
    p = t(430824),
    _ = t(709054),
    f = t(659679),
    x = t(388032),
    v = t(211886);
function b(e) {
    let { guildId: n } = e,
        t = (0, s.Wu)(
            [u.Z],
            () => {
                var e;
                return null != (e = u.Z.getAppliedGuildBoostsForGuild(n)) ? e : [];
            },
            [n]
        ),
        b = i.useMemo(() => t.sort((e, n) => (_.default.extractTimestamp(e.id) < _.default.extractTimestamp(n.id) ? 1 : -1)), [t]),
        g = (0, s.Wu)(
            [m.ZP],
            () => {
                let e = new Set();
                return (
                    b.forEach((t) => {
                        null == m.ZP.getMember(n, t.userId) && e.add(t.userId);
                    }),
                    Array.from(e)
                );
            },
            [n, b]
        );
    i.useEffect(() => {
        g.length > 0 && g.forEach((e) => d.Z.requestMember(n, e));
    }, [n, g]);
    let h = i.useMemo(() => (g.length > 0 ? { [n]: g } : {}), [n, g]);
    (0, c.$)(h);
    let j = (0, s.e7)([p.Z], () => {
        var e;
        return null == (e = p.Z.getGuild(n)) ? void 0 : e.premiumSubscriberCount;
    });
    return (i.useEffect(() => {
        j !== t.length && (0, l.C0)(n);
    }, [n, j, t.length]),
    0 === b.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.X6, {
                      className: v.header,
                      variant: 'eyebrow',
                      color: 'text-secondary',
                      children: x.intl.string(x.t.yM9Krq)
                  }),
                  (0, r.jsx)(o.zJ, {
                      className: v.container,
                      fade: !0,
                      children: b.map((e, n) => (0, r.jsx)(f.Z, { boost: e }, 'boost-activity-'.concat(n)))
                  })
              ]
          });
}
