n(321073);
var t = n(582128),
    u = n(435558),
    i = n(855986),
    r = n(778858),
    a = n(587895),
    p = n(47167),
    c = n(851767),
    o = n(808728),
    d = n(696451),
    s = n(71393),
    A = n(576705),
    m = n(994500),
    f = n(287809),
    g = n(722701),
    h = n(811587),
    v = n(260498),
    _ = n(426035),
    b = n(652215),
    y = n(191850),
    k = n(792996);
function w(e) {
    return (0, p.m1)(e, f.default, m.A);
}
n.d(
    l,
    {},
    {
        Bs: function (e) {
            return (
                (function (e) {
                    let { guildId: l, botUserIds: n } = (0, i.bG)(
                        [v.Ay, a.A, d.Ay],
                        () => {
                            let l = null == e ? null : v.Ay.getProject(e),
                                n = l?.guild_id;
                            return null == l || null == n
                                ? { guildId: null, botUserIds: [] }
                                : {
                                      guildId: n,
                                      botUserIds: [(0, _.Du)(l), (0, _.ug)(l)].filter(
                                          (e) => null != e && null == d.Ay.getMember(n, e),
                                      ),
                                  };
                        },
                        [e],
                        u.isEqual,
                    );
                    t.useEffect(() => {
                        null != l && n.length > 0 && r.A.requestMembersById(l, n, !1);
                    }, [l, n]);
                })(e),
                (0, i.bG)(
                    [v.Ay, s.A, o.A, d.Ay, c.A, a.A, A.A, f.default, m.A],
                    () => {
                        let l = null == e ? null : v.Ay.getProject(e);
                        return null == l
                            ? null
                            : (function (e) {
                                  let l = null == e.guild_id ? null : s.A.getGuild(e.guild_id);
                                  if (null == l || "in_server" !== (0, _.kF)(e)) return null;
                                  let n = (0, _.xI)(l.id, e.application_id),
                                      t = n.filter((e) => A.A.can(b.xBc.MANAGE_CHANNELS, e));
                                  return {
                                      projectName: e.name,
                                      appName: a.A.getApplication(e.application_id)?.name ?? e.name,
                                      previewAppName:
                                          null == e.preview_application_id
                                              ? null
                                              : (a.A.getApplication(e.preview_application_id)?.name ??
                                                `${e.name} (Preview)`),
                                      guildName: l.name,
                                      channelNames: t.map(w),
                                      keptChannelNames: n.filter((e) => !t.includes(e)).map(w),
                                      canRemoveBot: (0, _.wv)(l, (0, _.Du)(e)),
                                      canRemovePreviewBot:
                                          null == e.preview_application_id || (0, _.wv)(l, (0, _.ug)(e)),
                                  };
                              })(l);
                    },
                    [e],
                    u.isEqual,
                )
            );
        },
        CU: function (e) {
            return (0, i.bG)(
                [v.Ay, g.A],
                () => {
                    var l;
                    let n = null == e ? null : v.Ay.getProject(e);
                    return (
                        null != n &&
                        ((l = g.A.getPublishStatus(n.id)),
                        "user" === n.install_scope && null != l && (0, h.lE)(l.publishState))
                    );
                },
                [e],
            );
        },
        J: function (e) {
            let { appName: l, guildName: n } = e;
            return k.intl.formatToPlainString(y.default["9CvVB9"], { app: l, server: n });
        },
        Mi: function (e) {
            let { keptChannelNames: l } = e;
            if (0 === l.length) return null;
            let n = new Intl.ListFormat(k.intl.currentLocale, { type: "conjunction" }).format(l.map((e) => `#${e}`));
            return k.intl.formatToPlainString(y.default.pE4Cec, { channels: n });
        },
        WX: function (e) {
            return e;
        },
        fI: function (e) {
            let l = [{ key: "project", kind: "project", label: e.projectName }];
            l.push(...e.channelNames.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` })));
            let n = (function (e) {
                let { previewAppName: l } = e;
                return null == l ? null : { key: "preview-app", kind: "app", label: l };
            })(e);
            return (null != n && l.push(n), l);
        },
    },
);
