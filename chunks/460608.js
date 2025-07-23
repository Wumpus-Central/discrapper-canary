(n.d(t, { Z: () => g }), n(642613), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(597312),
    l = n(793030),
    s = n(442837),
    a = n(179360),
    c = n(616780),
    u = n(899667),
    d = n(720202),
    m = n(271383),
    p = n(430824),
    f = n(709054),
    _ = n(659679),
    x = n(388032),
    v = n(211886);
function g(e) {
    let { guildId: t } = e,
        n = (0, s.Wu)(
            [u.Z],
            () => {
                var e;
                return null != (e = u.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
            },
            [t]
        ),
        g = o.useMemo(() => n.sort((e, t) => (f.default.extractTimestamp(e.id) < f.default.extractTimestamp(t.id) ? 1 : -1)), [n]),
        b = (0, s.Wu)(
            [m.ZP],
            () => {
                let e = new Set();
                return (
                    g.forEach((n) => {
                        null == m.ZP.getMember(t, n.userId) && e.add(n.userId);
                    }),
                    Array.from(e)
                );
            },
            [t, g]
        );
    o.useEffect(() => {
        b.length > 0 && b.forEach((e) => d.Z.requestMember(t, e));
    }, [t, b]);
    let j = o.useMemo(() => (b.length > 0 ? { [t]: b } : {}), [t, b]);
    (0, c.$)(j);
    let E = (0, s.e7)([p.Z], () => {
        var e;
        return null == (e = p.Z.getGuild(t)) ? void 0 : e.premiumSubscriberCount;
    });
    return (o.useEffect(() => {
        E !== n.length && (0, a.C0)(t);
    }, [t, E, n.length]),
    0 === g.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.X6, {
                      className: v.header,
                      variant: 'eyebrow',
                      color: 'text-secondary',
                      children: x.intl.string(x.t.yM9Krq)
                  }),
                  (0, r.jsx)(i.zJ, {
                      className: v.container,
                      fade: !0,
                      children: g.map((e, t) => (0, r.jsx)(_.Z, { boost: e }, 'boost-activity-'.concat(t)))
                  })
              ]
          });
}
