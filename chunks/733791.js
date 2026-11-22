n(321073);
var t = n(582128),
    i = n(435558),
    u = n(855986),
    r = n(778858),
    a = n(587895),
    o = n(47167),
    d = n(851767),
    p = n(808728),
    c = n(696451),
    f = n(71393),
    s = n(576705),
    g = n(994500),
    m = n(287809),
    A = n(722701),
    _ = n(811587),
    v = n(260498),
    h = n(951178),
    y = n(426035),
    b = n(652215),
    k = n(191850),
    w = n(792996);
let N = [v.Ay, f.A, p.A, c.Ay, d.A, a.A, s.A, m.default, g.A];
function j(l) {
    var e, n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.guild_id,
        i = null == t ? null : f.A.getGuild(t);
    if (
        null == i ||
        ((e = l),
        (n = i.id) === e.guild_id
            ? "in_server" !== (0, y.kF)(e)
            : "guild" !== e.install_scope || e.guild_ids?.includes(n) !== !0)
    )
        return null;
    let u = (0, y.xI)(i.id, l.application_id),
        r = u.filter((l) => s.A.can(b.xBc.MANAGE_CHANNELS, l));
    return {
        projectName: l.name,
        appName: a.A.getApplication(l.application_id)?.name ?? l.name,
        previewAppName:
            null == l.preview_application_id || i.id !== l.guild_id
                ? null
                : (a.A.getApplication(l.preview_application_id)?.name ?? `${l.name} (Preview)`),
        guildId: i.id,
        guildName: i.name,
        channelNames: r.map(C),
        keptChannelNames: u.filter((l) => !r.includes(l)).map(C),
        canRemoveBot: (0, y.wv)(i, (0, y.Du)(l)),
        canRemovePreviewBot: null == l.preview_application_id || (0, y.wv)(i, (0, y.ug)(l)),
    };
}
function C(l) {
    return (0, o.m1)(l, m.default, g.A);
}
let P = [];
n.d(
    e,
    {},
    {
        Bs: function (l) {
            var e;
            let n;
            return (
                (e = l),
                (n = (0, u.bG)(
                    [v.Ay, a.A, c.Ay, f.A],
                    () => {
                        let l = null == e ? null : v.Ay.getProject(e);
                        return null == l || null == l.guild_id
                            ? P
                            : [l.guild_id, ...(0, h.Jr)(l).filter((e) => e !== l.guild_id)]
                                  .filter((l) => null != f.A.getGuild(l))
                                  .map((e) => ({
                                      guildId: e,
                                      botUserIds: [(0, y.Du)(l), e === l.guild_id ? (0, y.ug)(l) : null].filter(
                                          (l) => null != l && null == c.Ay.getMember(e, l),
                                      ),
                                  }))
                                  .filter((l) => {
                                      let { botUserIds: e } = l;
                                      return e.length > 0;
                                  });
                    },
                    [e],
                    i.isEqual,
                )),
                t.useEffect(() => {
                    for (let { guildId: l, botUserIds: e } of n) r.A.requestMembersById(l, e, !1);
                }, [n]),
                (0, u.bG)(
                    N,
                    () => {
                        let e = null == l ? null : v.Ay.getProject(l);
                        return null == e ? null : j(e);
                    },
                    [l],
                    i.isEqual,
                )
            );
        },
        CU: function (l) {
            return (0, u.bG)(
                [v.Ay, A.A],
                () => {
                    var e;
                    let n = null == l ? null : v.Ay.getProject(l);
                    return (
                        null != n &&
                        ((e = A.A.getPublishStatus(n.id)),
                        "user" === n.install_scope && null != e && (0, _.l)(e.publishState))
                    );
                },
                [l],
            );
        },
        J: function (l) {
            let { appName: e, guildName: n } = l,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return w.intl.formatToPlainString(k.default["9CvVB9"], {
                app: e,
                server: new Intl.ListFormat(w.intl.currentLocale, { type: "conjunction" }).format([
                    n,
                    ...t.map((l) => l.guildName),
                ]),
            });
        },
        Mi: function (l) {
            let { keptChannelNames: e } = l;
            if (0 === e.length) return null;
            let n = new Intl.ListFormat(w.intl.currentLocale, { type: "conjunction" }).format(e.map((l) => `#${l}`));
            return w.intl.formatToPlainString(k.default.pE4Cec, { channels: n });
        },
        WX: function (l) {
            return l;
        },
        fI: function (l) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = [{ key: "project", kind: "project", label: l.projectName }];
            [l, ...e].forEach((l, t) => {
                let { guildName: i, channelNames: u } = l;
                for (let l of u)
                    n.push({
                        key: `channel:${t}:${l}`,
                        kind: "channel",
                        label:
                            0 === e.length
                                ? `#${l}`
                                : w.intl.formatToPlainString(k.default.kCC2X2, { channel: l, server: i }),
                    });
            });
            let t = (function (l) {
                let { previewAppName: e } = l;
                return null == e ? null : { key: "preview-app", kind: "app", label: e };
            })(l);
            return (null != t && n.push(t), n);
        },
        zu: function (l) {
            return (0, h.Jr)(l)
                .filter((e) => e !== l.guild_id)
                .map((e) => j(l, e))
                .filter((l) => null != l);
        },
    },
);
