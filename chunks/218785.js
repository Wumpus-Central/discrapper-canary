t.d(n, { A: () => h, W: () => p });
var l = t(17928),
    i = t(47167),
    a = t(734057),
    r = t(317525),
    o = t(576705),
    s = t(994500),
    c = t(287809),
    d = t(652215),
    u = t(105292);
function m(e, n, t) {
    return 0 === e.length
        ? ""
        : u.intl.format(t ? u.t.cJZxWf : u.t.Kj5GIT, {
              count: e.length,
              extraCount: Math.max(e.length - 2, 0),
              role1: e[0],
              role2: e[1],
              itemHook: n,
          });
}
function h(e) {
    let { guild: n, prompt: t, selectedRoleIds: h, selectedChannelIds: p, itemHook: g } = e,
        x = n?.id,
        f = (0, l.yK)([r.A], () => (null != x ? r.A.getManyRoles(x, h) : []), [x, h]),
        A = (0, l.yK)([a.A, c.default, s.A, o.A], () =>
            Array.from(p)
                .map((e) => a.A.getChannel(e))
                .filter((e) => null != e && o.A.can(d.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, i.m1)(e, c.default, s.A, !0)),
        ),
        j = f.map((e) => `@${e.name}`),
        C = t?.singleSelect ? "" : u.intl.string(u.t.JshhEl),
        v = "";
    if (0 === A.length && j.length > 0) C = m(j, g);
    else
        A.length > 0 &&
            ((C =
                0 === A.length
                    ? ""
                    : u.intl.format(u.t.Rj841R, {
                          count: A.length,
                          extraCount: Math.max(A.length - 2, 0),
                          channel1: A[0],
                          channel2: A[1],
                          itemHook: g,
                      })),
            j.length > 0 && (v = m(j, g, !0)));
    return { helpText: C, helpTextAdditional: v };
}
function p(e) {
    let { guild: n, prompt: t, selectedRoleIds: m, selectedChannelIds: h, itemHook: p } = e,
        g = n?.id,
        x = (0, l.yK)([r.A], () => (null != g ? r.A.getManyRoles(g, m) : []), [g, m]),
        f = (0, l.yK)([a.A, c.default, s.A, o.A], () =>
            Array.from(h)
                .map((e) => a.A.getChannel(e))
                .filter((e) => null != e && o.A.can(d.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, i.m1)(e, c.default, s.A, !0)),
        ),
        A = x.map((e) => `@${e.name}`),
        j = t?.singleSelect ? "" : u.intl.string(u.t.JshhEl);
    return (
        0 === f.length && A.length > 0
            ? (j = u.intl.format(u.t.vdtNYa, {
                  count: A.length,
                  extraCount: Math.max(A.length - 2, 0),
                  role1: A[0],
                  role2: A[1],
                  itemHook: p,
              }))
            : f.length > 0 && 0 === A.length
              ? (j = u.intl.format(u.t.ZKywGU, {
                    count: f.length,
                    extraCount: Math.max(f.length - 2, 0),
                    channel1: f[0],
                    channel2: f[1],
                    itemHook: p,
                }))
              : f.length > 0 &&
                A.length > 0 &&
                (j = u.intl.format(u.t.WewRHM, {
                    channelCount: f.length,
                    extraChannelCount: Math.max(f.length - 2, 0),
                    channel1: f[0],
                    channel2: f[1],
                    itemHook: p,
                    roleCount: A.length,
                    extraRoleCount: Math.max(A.length - 2, 0),
                    role1: A[0],
                    role2: A[1],
                })),
        { helpText: j, helpTextAdditional: "" }
    );
}
