(t.d(n, { Z: () => g }), t(642613), t(388685));
var r = t(255367),
    i = t(73800),
    o = t(597312),
    a = t(793030),
    s = t(442837),
    l = t(179360),
    c = t(616780),
    d = t(899667),
    u = t(720202),
    m = t(271383),
    p = t(430824),
    _ = t(709054),
    f = t(659679),
    x = t(388032),
    b = t(211886);
function g(e) {
    let { guildId: n } = e,
        t = (0, s.Wu)(
            [d.Z],
            () => {
                var e;
                return null != (e = d.Z.getAppliedGuildBoostsForGuild(n)) ? e : [];
            },
            [n]
        ),
        g = i.useMemo(() => t.sort((e, n) => (_.default.extractTimestamp(e.id) < _.default.extractTimestamp(n.id) ? 1 : -1)), [t]),
        v = (0, s.Wu)(
            [m.ZP],
            () => {
                let e = new Set();
                return (
                    g.forEach((t) => {
                        null == m.ZP.getMember(n, t.userId) && e.add(t.userId);
                    }),
                    Array.from(e)
                );
            },
            [n, g]
        );
    i.useEffect(() => {
        v.length > 0 && v.forEach((e) => u.Z.requestMember(n, e));
    }, [n, v]);
    let h = i.useMemo(() => (v.length > 0 ? { [n]: v } : {}), [n, v]);
    (0, c.$)(h);
    let j = (0, s.e7)([p.Z], () => {
        var e;
        return null == (e = p.Z.getGuild(n)) ? void 0 : e.premiumSubscriberCount;
    });
    return (i.useEffect(() => {
        j !== t.length && (0, l.C0)(n);
    }, [n, j, t.length]),
    0 === g.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.X6, {
                      className: b.header,
                      variant: 'eyebrow',
                      color: 'text-secondary',
                      children: x.intl.string(x.t.yM9Krq)
                  }),
                  (0, r.jsx)(o.zJ, {
                      className: b.container,
                      fade: !0,
                      children: g.map((e, n) => (0, r.jsx)(f.Z, { boost: e }, 'boost-activity-'.concat(n)))
                  })
              ]
          });
}
