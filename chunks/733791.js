l(321073);
var t = l(582128),
    r = l(435558),
    i = l(855986),
    a = l(778858),
    u = l(587895),
    c = l(47167),
    s = l(851767),
    o = l(808728),
    d = l(696451),
    p = l(71393),
    m = l(576705),
    f = l(994500),
    h = l(287809),
    A = l(722701),
    j = l(811587),
    g = l(260498),
    b = l(426035),
    v = l(652215),
    x = l(191850),
    k = l(792996);
function y(e) {
    return (0, c.m1)(e, h.default, f.A);
}
function N(e) {
    return e.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` }));
}
function _(e) {
    let { previewAppName: n } = e;
    return null == n ? null : { key: "preview-app", kind: "app", label: n };
}
l.d(
    n,
    {},
    {
        Bs: function (e) {
            return (
                (function (e) {
                    let { guildId: n, botUserIds: l } = (0, i.bG)(
                        [g.Ay, u.A, d.Ay],
                        () => {
                            let n = null == e ? null : g.Ay.getProject(e),
                                l = n?.guild_id;
                            return null == n || null == l
                                ? { guildId: null, botUserIds: [] }
                                : {
                                      guildId: l,
                                      botUserIds: [(0, b.Du)(n), (0, b.ug)(n)].filter(
                                          (e) => null != e && null == d.Ay.getMember(l, e),
                                      ),
                                  };
                        },
                        [e],
                        r.isEqual,
                    );
                    t.useEffect(() => {
                        null != n && l.length > 0 && a.A.requestMembersById(n, l, !1);
                    }, [n, l]);
                })(e),
                (0, i.bG)(
                    [g.Ay, p.A, o.A, d.Ay, s.A, u.A, m.A, h.default, f.A],
                    () => {
                        let n = null == e ? null : g.Ay.getProject(e);
                        return null == n
                            ? null
                            : (function (e) {
                                  let n = null == e.guild_id ? null : p.A.getGuild(e.guild_id);
                                  if (null == n || "in_server" !== (0, b.kF)(e)) return null;
                                  let l = (0, b.xI)(n.id, e.application_id),
                                      t = l.filter((e) => m.A.can(v.xBc.MANAGE_CHANNELS, e));
                                  return {
                                      projectName: e.name,
                                      appName: u.A.getApplication(e.application_id)?.name ?? e.name,
                                      previewAppName:
                                          null == e.preview_application_id
                                              ? null
                                              : (u.A.getApplication(e.preview_application_id)?.name ??
                                                `${e.name} (Preview)`),
                                      guildName: n.name,
                                      channelNames: t.map(y),
                                      keptChannelNames: l.filter((e) => !t.includes(e)).map(y),
                                      canRemoveBot: (0, b.wv)(n, (0, b.Du)(e)),
                                      canRemovePreviewBot:
                                          null == e.preview_application_id || (0, b.wv)(n, (0, b.ug)(e)),
                                  };
                              })(n);
                    },
                    [e],
                    r.isEqual,
                )
            );
        },
        CU: function (e) {
            return (0, i.bG)(
                [g.Ay, A.A],
                () => {
                    var n;
                    let l = null == e ? null : g.Ay.getProject(e);
                    return (
                        null != l &&
                        ((n = A.A.getPublishStatus(l.id)),
                        "user" === l.install_scope && null != n && (0, j.lE)(n.publishState))
                    );
                },
                [e],
            );
        },
        J: function (e) {
            let { appName: n, guildName: l } = e;
            return k.intl.formatToPlainString(x.default["9CvVB9"], { app: n, server: l });
        },
        Kd: function (e) {
            return N(e.channelNames);
        },
        L4: _,
        Mi: function (e) {
            let { keptChannelNames: n } = e;
            if (0 === n.length) return null;
            let l = new Intl.ListFormat(k.intl.currentLocale, { type: "conjunction" }).format(n.map((e) => `#${e}`));
            return k.intl.formatToPlainString(x.default.pE4Cec, { channels: l });
        },
        WX: function (e) {
            return e;
        },
        fI: function (e) {
            let n = [{ key: "project", kind: "project", label: e.projectName }];
            n.push(...N(e.channelNames));
            let l = _(e);
            return (null != l && n.push(l), n);
        },
        p_: function (e) {
            let { appName: n, guildName: l } = e;
            return k.intl.formatToPlainString(x.default.SNFGxP, { app: n, server: l });
        },
    },
);
