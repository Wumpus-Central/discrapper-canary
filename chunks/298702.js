var t = n(582128),
    i = n(435558),
    a = n(855986),
    u = n(778858),
    r = n(627363),
    p = n(587895),
    d = n(47167),
    A = n(808728),
    c = n(696451),
    o = n(71393),
    f = n(576705),
    s = n(994500),
    m = n(287809),
    g = n(246338),
    h = n(426035),
    b = n(652215);
let v = " (Preview)";
function w(e) {
    return p.A.getAppIdForBotUserId(e) ?? e;
}
function N(e) {
    return f.A.can(b.xBc.MANAGE_CHANNELS, e);
}
function I(e) {
    return e.map((e) => (0, d.m1)(e, m.default, s.A));
}
function k(e) {
    let l = new Set();
    for (let { channel: n } of A.A.getChannels(e)[A.I]) {
        let e = (0, g.us)(n);
        null != e && l.add(e);
    }
    return [...l];
}
function j(e) {
    null != p.A.getApplication(e) || p.A.isFetchingApplication(e) || (0, r.TA)(e).catch(() => {});
}
n.d(
    l,
    {},
    {
        CB: function (e, l) {
            return [
                ...e.channels
                    .filter((e) => e.id !== l)
                    .map((e) => {
                        let { id: l, name: n } = e;
                        return { key: `channel:${l}`, kind: "channel", label: `#${n}` };
                    }),
                { key: "main-app", kind: "app", label: e.appName },
                { key: "preview-app", kind: "app", label: e.previewAppName },
            ];
        },
        SJ: w,
        iD: function (e, l) {
            var n, r;
            let g,
                C,
                E = (0, a.bG)([p.A], () => null != l && p.A.getApplication(l)?.conjureProjectId != null, [l]);
            return (
                t.useEffect(() => {
                    null != l && j(l);
                }, [l]),
                t.useEffect(() => {
                    if (null != e && E) for (let l of k(e)) j(l);
                }, [e, E]),
                (n = e),
                (r = l),
                (g = (0, a.bG)(
                    [p.A],
                    () => {
                        let e = null == r ? null : p.A.getApplication(r);
                        if (e?.conjureProjectId == null) return null;
                        let l = e.bot?.username ?? e.name;
                        return (l.endsWith(v) ? l.slice(0, -v.length) : l).toLowerCase();
                    },
                    [r],
                )),
                t.useEffect(() => {
                    null != n && null != g && u.A.requestMembers(n, g, 10, !1);
                }, [n, g]),
                (C = (0, a.bG)(
                    [c.Ay, m.default, p.A],
                    () =>
                        null == n || null == g
                            ? []
                            : c.Ay.getMemberIds(n)
                                  .filter((e) => {
                                      let l = m.default.getUser(e);
                                      return l?.bot === !0 && l.username.toLowerCase().startsWith(g);
                                  })
                                  .map(w)
                                  .filter((e) => null == p.A.getApplication(e)),
                    [n, g],
                    i.isEqual,
                )),
                t.useEffect(() => {
                    for (let e of C) j(e);
                }, [C]),
                (0, a.bG)(
                    [p.A, o.A, A.A, c.Ay, f.A, m.default, s.A],
                    () =>
                        (function (e, l) {
                            var n, t;
                            let i = null == e ? null : o.A.getGuild(e),
                                a = null == l ? null : p.A.getApplication(l),
                                u = a?.conjureProjectId;
                            if (null == i || null == a || null == u) return null;
                            let r = k(i.id)
                                    .map((e) => p.A.getApplication(e))
                                    .find((e) => e?.conjureProjectId === u),
                                A = null == r ? [] : (0, h.xI)(i.id, r.id),
                                g =
                                    ((n = i.id),
                                    (t = u),
                                    c.Ay.getMemberIds(n).filter(
                                        (e) =>
                                            m.default.getUser(e)?.bot === !0 &&
                                            p.A.getApplication(w(e))?.conjureProjectId === t,
                                    )),
                                j =
                                    null != r &&
                                    (0, h.wv)(i, a.bot?.id) &&
                                    (0, h.wv)(i, r.bot?.id) &&
                                    g.every((e) => (0, h.wv)(i, e)) &&
                                    A.every((e) => f.A.can(b.xBc.MANAGE_CHANNELS, e)),
                                C = null != r ? r.id !== a.id : a.name.endsWith(v),
                                E = C ? void 0 : g.find((e) => w(e) !== a.id);
                            return {
                                projectId: u,
                                guildId: i.id,
                                guildName: i.name,
                                targetAppName: a.name,
                                targetIsPreview: C,
                                deletableChannelNames: I(A.filter(N)),
                                keptChannelNames: I(A.filter((e) => !N(e))),
                                previewApp:
                                    null == E
                                        ? null
                                        : {
                                              name: p.A.getApplication(w(E))?.name ?? `${a.name}${v}`,
                                              canRemove: (0, h.wv)(i, E),
                                          },
                                rest:
                                    null != r && 0 !== A.length && j
                                        ? {
                                              appName: r.name,
                                              previewAppName: r.id === a.id ? `${r.name}${v}` : a.name,
                                              channels: A.map((e) => ({
                                                  id: e.id,
                                                  name: (0, d.m1)(e, m.default, s.A),
                                              })),
                                              targetIsPreview: r.id !== a.id,
                                          }
                                        : null,
                            };
                        })(e, l),
                    [e, l],
                    i.isEqual,
                )
            );
        },
    },
);
