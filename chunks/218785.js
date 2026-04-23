t.d(n, { A: () => h, W: () => p });
var l = t(17928),
    i = t(47167),
    a = t(734057),
    r = t(317525),
    o = t(576705),
    s = t(994500),
    c = t(287809),
    u = t(652215),
    d = t(985018);
function m(e, n, t) {
    return 0 === e.length
        ? ""
        : d.intl.format(t ? d.t.cJZxWf : d.t.Kj5GIT, {
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
        A = (0, l.yK)([r.A], () => (null != x ? r.A.getManyRoles(x, h) : []), [x, h]),
        f = (0, l.yK)([a.A, c.default, s.A, o.A], () =>
            Array.from(p)
                .map((e) => a.A.getChannel(e))
                .filter((e) => null != e && o.A.can(u.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, i.m1)(e, c.default, s.A, !0)),
        ),
        C = A.map((e) => `@${e.name}`),
        j = t?.singleSelect ? "" : d.intl.string(d.t.JshhEl),
        v = "";
    if (0 === f.length && C.length > 0) j = m(C, g);
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
                          itemHook: g,
                      })),
            C.length > 0 && (v = m(C, g, !0)));
    return { helpText: j, helpTextAdditional: v };
}
function p(e) {
    let { guild: n, prompt: t, selectedRoleIds: m, selectedChannelIds: h, itemHook: p } = e,
        g = n?.id,
        x = (0, l.yK)([r.A], () => (null != g ? r.A.getManyRoles(g, m) : []), [g, m]),
        A = (0, l.yK)([a.A, c.default, s.A, o.A], () =>
            Array.from(h)
                .map((e) => a.A.getChannel(e))
                .filter((e) => null != e && o.A.can(u.xBc.VIEW_CHANNEL, e))
                .map((e) => (0, i.m1)(e, c.default, s.A, !0)),
        ),
        f = x.map((e) => `@${e.name}`),
        C = t?.singleSelect ? "" : d.intl.string(d.t.JshhEl);
    return (
        0 === A.length && f.length > 0
            ? (C = d.intl.format(d.t.vdtNYa, {
                  count: f.length,
                  extraCount: Math.max(f.length - 2, 0),
                  role1: f[0],
                  role2: f[1],
                  itemHook: p,
              }))
            : A.length > 0 && 0 === f.length
              ? (C = d.intl.format(d.t.ZKywGU, {
                    count: A.length,
                    extraCount: Math.max(A.length - 2, 0),
                    channel1: A[0],
                    channel2: A[1],
                    itemHook: p,
                }))
              : A.length > 0 &&
                f.length > 0 &&
                (C = d.intl.format(d.t.WewRHM, {
                    channelCount: A.length,
                    extraChannelCount: Math.max(A.length - 2, 0),
                    channel1: A[0],
                    channel2: A[1],
                    itemHook: p,
                    roleCount: f.length,
                    extraRoleCount: Math.max(f.length - 2, 0),
                    role1: f[0],
                    role2: f[1],
                })),
        { helpText: C, helpTextAdditional: "" }
    );
}
