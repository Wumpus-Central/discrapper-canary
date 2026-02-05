n.d(t, { A: () => h, W: () => p });
var l = n(311907),
    i = n(47167),
    a = n(734057),
    r = n(317525),
    o = n(576705),
    s = n(994500),
    c = n(287809),
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
function h(e) {
    let { guild: t, prompt: n, selectedRoleIds: h, selectedChannelIds: p, itemHook: x } = e,
        A = t?.id,
        g = (0, l.yK)([r.A], () => (null != A ? r.A.getManyRoles(A, h) : []), [A, h]),
        f = (0, l.yK)([a.A, c.default, s.A, o.A], () =>
            Array.from(p)
                .map((e) => a.A.getChannel(e))
                .filter((e) => null != e && o.A.can(u.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, i.m1)(e, c.default, s.A, !0)),
        ),
        C = g.map((e) => `@${e.name}`),
        j = n?.singleSelect ? "" : d.intl.string(d.t.JshhEl),
        v = "";
    if (0 === f.length && C.length > 0) j = m(C, x);
    else
        f.length > 0 &&
            ((j =
                0 === f.length
                    ? ""
                    : d.intl.format(d.t.Rj841R, {
                          count: f.length,
                          extraCount: Math.max(f.length - 2, 0),
                          channel1: f[0],
                          channel2: f[1],
                          itemHook: x,
                      })),
            C.length > 0 && (v = m(C, x, !0)));
    return { helpText: j, helpTextAdditional: v };
}
function p(e) {
    let { guild: t, prompt: n, selectedRoleIds: m, selectedChannelIds: h, itemHook: p } = e,
        x = t?.id,
        A = (0, l.yK)([r.A], () => (null != x ? r.A.getManyRoles(x, m) : []), [x, m]),
        g = (0, l.yK)([a.A, c.default, s.A, o.A], () =>
            Array.from(h)
                .map((e) => a.A.getChannel(e))
                .filter((e) => null != e && o.A.can(u.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, i.m1)(e, c.default, s.A, !0)),
        ),
        f = A.map((e) => `@${e.name}`),
        C = n?.singleSelect ? "" : d.intl.string(d.t.JshhEl);
    return (
        0 === g.length && f.length > 0
            ? (C = d.intl.format(d.t.vdtNYa, {
                  count: f.length,
                  extraCount: Math.max(f.length - 2, 0),
                  role1: f[0],
                  role2: f[1],
                  itemHook: p,
              }))
            : g.length > 0 && 0 === f.length
              ? (C = d.intl.format(d.t.ZKywGU, {
                    count: g.length,
                    extraCount: Math.max(g.length - 2, 0),
                    channel1: g[0],
                    channel2: g[1],
                    itemHook: p,
                }))
              : g.length > 0 &&
                f.length > 0 &&
                (C = d.intl.format(d.t.WewRHM, {
                    channelCount: g.length,
                    extraChannelCount: Math.max(g.length - 2, 0),
                    channel1: g[0],
                    channel2: g[1],
                    itemHook: p,
                    roleCount: f.length,
                    extraRoleCount: Math.max(f.length - 2, 0),
                    role1: f[0],
                    role2: f[1],
                })),
        { helpText: C, helpTextAdditional: "" }
    );
}
