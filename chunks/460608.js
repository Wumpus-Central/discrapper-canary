(n.d(t, { Z: () => v }), n(642613), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(597312),
    a = n(793030),
    s = n(442837),
    l = n(179360),
    c = n(616780),
    d = n(899667),
    u = n(720202),
    p = n(271383),
    m = n(430824),
    _ = n(709054),
    f = n(659679),
    x = n(388032),
    b = n(211886);
function v(e) {
    let { guildId: t } = e,
        n = (0, s.Wu)(
            [d.Z],
            () => {
                var e;
                return null != (e = d.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
            },
            [t]
        ),
        v = i.useMemo(() => n.sort((e, t) => (_.default.extractTimestamp(e.id) < _.default.extractTimestamp(t.id) ? 1 : -1)), [n]),
        g = (0, s.Wu)(
            [p.ZP],
            () => {
                let e = new Set();
                return (
                    v.forEach((n) => {
                        null == p.ZP.getMember(t, n.userId) && e.add(n.userId);
                    }),
                    Array.from(e)
                );
            },
            [t, v]
        );
    i.useEffect(() => {
        g.length > 0 && g.forEach((e) => u.Z.requestMember(t, e));
    }, [t, g]);
    let h = i.useMemo(() => (g.length > 0 ? { [t]: g } : {}), [t, g]);
    (0, c.$)(h);
    let E = (0, s.e7)([m.Z], () => {
        var e;
        return null == (e = m.Z.getGuild(t)) ? void 0 : e.premiumSubscriberCount;
    });
    return (i.useEffect(() => {
        E !== n.length && (0, l.C0)(t);
    }, [t, E, n.length]),
    0 === v.length)
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
                      children: v.map((e, t) => (0, r.jsx)(f.Z, { boost: e }, 'boost-activity-'.concat(t)))
                  })
              ]
          });
}
