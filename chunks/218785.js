n.d(t, { A: () => h, W: () => p });
var l = n(17928),
    i = n(47167),
    a = n(734057),
    r = n(317525),
    o = n(576705),
    s = n(994500),
    c = n(287809),
    u = n(652215),
    d = n(375708);
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
    let { guild: t, prompt: n, selectedRoleIds: h, selectedChannelIds: p, itemHook: g } = e,
        x = t?.id,
        f = (0, l.yK)([r.A], () => (null != x ? r.A.getManyRoles(x, h) : []), [x, h]),
        A = (0, l.yK)([a.A, c.default, s.A, o.A], () =>
            Array.from(p)
                .map((e) => a.A.getChannel(e))
                .filter((e) => null != e && o.A.can(u.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, i.m1)(e, c.default, s.A, !0)),
        ),
        C = f.map((e) => `@${e.name}`),
        j = n?.singleSelect ? "" : d.intl.string(d.t.JshhEl),
        v = "";
    if (0 === A.length && C.length > 0) j = m(C, g);
    else
        A.length > 0 &&
            ((j =
                0 === A.length
                    ? ""
                    : d.intl.format(d.t.Rj841R, {
                          count: A.length,
                          extraCount: Math.max(A.length - 2, 0),
                          channel1: A[0],
                          channel2: A[1],
                          itemHook: g,
                      })),
            C.length > 0 && (v = m(C, g, !0)));
    return { helpText: j, helpTextAdditional: v };
}
function p(e) {
    let { guild: t, prompt: n, selectedRoleIds: m, selectedChannelIds: h, itemHook: p } = e,
        g = t?.id,
        x = (0, l.yK)([r.A], () => (null != g ? r.A.getManyRoles(g, m) : []), [g, m]),
        f = (0, l.yK)([a.A, c.default, s.A, o.A], () =>
            Array.from(h)
                .map((e) => a.A.getChannel(e))
                .filter((e) => null != e && o.A.can(u.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, i.m1)(e, c.default, s.A, !0)),
        ),
        A = x.map((e) => `@${e.name}`),
        C = n?.singleSelect ? "" : d.intl.string(d.t.JshhEl);
    return (
        0 === f.length && A.length > 0
            ? (C = d.intl.format(d.t.vdtNYa, {
                  count: A.length,
                  extraCount: Math.max(A.length - 2, 0),
                  role1: A[0],
                  role2: A[1],
                  itemHook: p,
              }))
            : f.length > 0 && 0 === A.length
              ? (C = d.intl.format(d.t.ZKywGU, {
                    count: f.length,
                    extraCount: Math.max(f.length - 2, 0),
                    channel1: f[0],
                    channel2: f[1],
                    itemHook: p,
                }))
              : f.length > 0 &&
                A.length > 0 &&
                (C = d.intl.format(d.t.WewRHM, {
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
        { helpText: C, helpTextAdditional: "" }
    );
}
