n.d(t, {
    A: () => p,
    W: () => h,
});
var l = n(311907),
    r = n(47167),
    i = n(734057),
    a = n(317525),
    o = n(576705),
    c = n(994500),
    s = n(287809),
    u = n(652215),
    d = n(985018);

function m(e, t, n) {
    return 0 === e.length
        ? ""
        : d.intl.format(n ? d.t.cJZxWf : d.t.Kj5GIT, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: t,
          });
}

function p(e) {
    let { guild: t, prompt: n, selectedRoleIds: p, selectedChannelIds: h, itemHook: f } = e,
        g = null == t ? void 0 : t.id,
        v = (0, l.yK)([a.A], () => (null != g ? a.A.getManyRoles(g, p) : []), [g, p]),
        y = (0, l.yK)([i.A, s.default, c.A, o.A], () =>
            Array.from(h)
                .map((e) => i.A.getChannel(e))
                .filter((e) => null != e && o.A.can(u.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, r.m1)(e, s.default, c.A, !0)),
        ),
        j = v.map((e) => "@".concat(e.name)),
        x = (null == n ? void 0 : n.singleSelect) ? "" : d.intl.string(d.t.JshhEl),
        A = "";
    if (0 === y.length && j.length > 0) x = m(j, f);
    else
        y.length > 0 &&
            ((x =
                0 === y.length
                    ? ""
                    : d.intl.format(d.t.Rj841R, {
                          count: y.length,
                          extraCount: Math.max(y.length - 2, 0),
                          channel1: y[0],
                          channel2: y[1],
                          itemHook: f,
                      })),
            j.length > 0 && (A = m(j, f, !0)));
    return {
        helpText: x,
        helpTextAdditional: A,
    };
}

function h(e) {
    let { guild: t, prompt: n, selectedRoleIds: m, selectedChannelIds: p, itemHook: h } = e,
        f = null == t ? void 0 : t.id,
        g = (0, l.yK)([a.A], () => (null != f ? a.A.getManyRoles(f, m) : []), [f, m]),
        v = (0, l.yK)([i.A, s.default, c.A, o.A], () =>
            Array.from(p)
                .map((e) => i.A.getChannel(e))
                .filter((e) => null != e && o.A.can(u.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, r.m1)(e, s.default, c.A, !0)),
        ),
        y = g.map((e) => "@".concat(e.name)),
        j = (null == n ? void 0 : n.singleSelect) ? "" : d.intl.string(d.t.JshhEl);
    return (
        0 === v.length && y.length > 0
            ? (j = d.intl.format(d.t.vdtNYa, {
                  count: y.length,
                  extraCount: Math.max(y.length - 2, 0),
                  role1: y[0],
                  role2: y[1],
                  itemHook: h,
              }))
            : v.length > 0 && 0 === y.length
              ? (j = d.intl.format(d.t.ZKywGU, {
                    count: v.length,
                    extraCount: Math.max(v.length - 2, 0),
                    channel1: v[0],
                    channel2: v[1],
                    itemHook: h,
                }))
              : v.length > 0 &&
                y.length > 0 &&
                (j = d.intl.format(d.t.WewRHM, {
                    channelCount: v.length,
                    extraChannelCount: Math.max(v.length - 2, 0),
                    channel1: v[0],
                    channel2: v[1],
                    itemHook: h,
                    roleCount: y.length,
                    extraRoleCount: Math.max(y.length - 2, 0),
                    role1: y[0],
                    role2: y[1],
                })),
        {
            helpText: j,
            helpTextAdditional: "",
        }
    );
}
