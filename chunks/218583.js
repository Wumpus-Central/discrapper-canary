var i = n(956518),
    r = n(323073),
    a = n(288254),
    s = n(734057),
    l = n(576705),
    o = n(165610),
    d = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = s.A.getChannel(e);
            if (null == t || t.type !== d.rbe.GUILD_APP) return null;
            let n = t.application_id,
                c = (0, o.HD)(t);
            return null == n ||
                null == c ||
                !l.A.can(d.xBc.VIEW_CHANNEL, t) ||
                (0, r.qR)(t) ||
                (0, a.BV)(t) ||
                null == (0, i.Ay)(n)
                ? null
                : { frameId: (0, o.VA)(n, c), applicationId: n, surface: c };
        },
    },
);
