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
    m = n(71393),
    g = n(576705),
    f = n(994500),
    s = n(287809),
    A = n(722701),
    v = n(811587),
    _ = n(260498),
    h = n(951178),
    N = n(426035),
    y = n(652215),
    b = n(191850),
    w = n(792996);
let k = [],
    j = [_.Ay, m.A, p.A, c.Ay, d.A, a.A, g.A, s.default, f.A];
function P(e) {
    var l, n;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.guild_id,
        i = null == t ? null : m.A.getGuild(t);
    if (
        null == i ||
        ((l = e),
        (n = i.id) === l.guild_id
            ? "in_server" !== (0, N.kF)(l)
            : "guild" !== l.install_scope || l.guild_ids?.includes(n) !== !0)
    )
        return null;
    let u = (0, N.xI)(i.id, e.application_id),
        r = u.filter((e) => g.A.can(y.xBc.MANAGE_CHANNELS, e));
    return {
        projectName: e.name,
        appName: a.A.getApplication(e.application_id)?.name ?? e.name,
        previewAppName:
            null == e.preview_application_id || i.id !== e.guild_id
                ? null
                : (a.A.getApplication(e.preview_application_id)?.name ?? `${e.name} (Preview)`),
        guildId: i.id,
        guildName: i.name,
        channelNames: r.map(C),
        keptChannelNames: u.filter((e) => !r.includes(e)).map(C),
        canRemoveBot: (0, N.wv)(i, (0, N.Du)(e)),
        canRemovePreviewBot: null == e.preview_application_id || (0, N.wv)(i, (0, N.ug)(e)),
    };
}
function C(e) {
    return (0, o.m1)(e, s.default, f.A);
}
let E = [];
function B(e) {
    let l = (0, u.bG)(
        [_.Ay, a.A, c.Ay, m.A],
        () => {
            let l = null == e ? null : _.Ay.getProject(e);
            return null == l || null == l.guild_id
                ? E
                : [l.guild_id, ...(0, h.Jr)(l).filter((e) => e !== l.guild_id)]
                      .filter((e) => null != m.A.getGuild(e))
                      .map((e) => ({
                          guildId: e,
                          botUserIds: [(0, N.Du)(l), e === l.guild_id ? (0, N.ug)(l) : null].filter(
                              (l) => null != l && null == c.Ay.getMember(e, l),
                          ),
                      }))
                      .filter((e) => {
                          let { botUserIds: l } = e;
                          return l.length > 0;
                      });
        },
        [e],
        i.isEqual,
    );
    t.useEffect(() => {
        for (let { guildId: e, botUserIds: n } of l) r.A.requestMembersById(e, n, !1);
    }, [l]);
}
n.d(
    l,
    {},
    {
        Bs: function (e) {
            return (
                B(e),
                (0, u.bG)(
                    j,
                    () => {
                        let l = null == e ? null : _.Ay.getProject(e);
                        return null == l ? null : P(l);
                    },
                    [e],
                    i.isEqual,
                )
            );
        },
        CU: function (e) {
            return (0, u.bG)(
                [_.Ay, A.A],
                () => {
                    var l;
                    let n = null == e ? null : _.Ay.getProject(e);
                    return (
                        null != n &&
                        ((l = A.A.getPublishStatus(n.id)),
                        "user" === n.install_scope && null != l && (0, v.lE)(l.publishState))
                    );
                },
                [e],
            );
        },
        J: function (e) {
            let { appName: l, guildName: n } = e,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return w.intl.formatToPlainString(b.default["9CvVB9"], {
                app: l,
                server: new Intl.ListFormat(w.intl.currentLocale, { type: "conjunction" }).format([
                    n,
                    ...t.map((e) => e.guildName),
                ]),
            });
        },
        Mi: function (e) {
            let { keptChannelNames: l } = e;
            if (0 === l.length) return null;
            let n = new Intl.ListFormat(w.intl.currentLocale, { type: "conjunction" }).format(l.map((e) => `#${e}`));
            return w.intl.formatToPlainString(b.default.pE4Cec, { channels: n });
        },
        WX: function (e) {
            return e;
        },
        dw: function (e, l) {
            return (0, u.bG)(
                j,
                () => {
                    let n = null == e ? null : _.Ay.getProject(e);
                    return null == n ? null : ((null != l && l !== n.guild_id ? P(n, l) : null) ?? P(n));
                },
                [e, l],
                i.isEqual,
            );
        },
        dy: function (e, l) {
            return e.canRemoveBot || l;
        },
        fI: function (e) {
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = [{ key: "project", kind: "project", label: e.projectName }];
            [e, ...l].forEach((e, t) => {
                let { guildName: i, channelNames: u } = e;
                for (let e of u)
                    n.push({
                        key: `channel:${t}:${e}`,
                        kind: "channel",
                        label:
                            0 === l.length
                                ? `#${e}`
                                : w.intl.formatToPlainString(b.default.kCC2X2, { channel: e, server: i }),
                    });
            });
            let t = (function (e) {
                let { previewAppName: l } = e;
                return null == l ? null : { key: "preview-app", kind: "app", label: l };
            })(e);
            return (null != t && n.push(t), n);
        },
        rU: function (e) {
            return (
                B(e),
                (0, u.bG)(
                    j,
                    () => {
                        let l = _.Ay.getProject(e);
                        return null == l
                            ? k
                            : (0, h.Jr)(l).map((e) => {
                                  var n, t, i, u;
                                  let r;
                                  return (
                                      (n = l),
                                      (t = e),
                                      (r = m.A.getGuild(t)?.name),
                                      {
                                          guildId: t,
                                          guildName: r ?? w.intl.string(b.default["6bhivN"]),
                                          isTestServer: t === n.guild_id && (0, h._7)(n) && (0, h.Jr)(n).length > 1,
                                          removeTarget:
                                              P(n, t) ??
                                              (null == r
                                                  ? ((i = n),
                                                    (u = t),
                                                    {
                                                        projectName: i.name,
                                                        appName: a.A.getApplication(i.application_id)?.name ?? i.name,
                                                        previewAppName: null,
                                                        guildId: u,
                                                        guildName: w.intl.string(b.default["6bhivN"]),
                                                        channelNames: [],
                                                        keptChannelNames: [],
                                                        canRemoveBot: !1,
                                                        canRemovePreviewBot: !1,
                                                    })
                                                  : null),
                                      }
                                  );
                              });
                    },
                    [e],
                    i.isEqual,
                )
            );
        },
        zu: function (e) {
            return (0, h.Jr)(e)
                .filter((l) => l !== e.guild_id)
                .map((l) => P(e, l))
                .filter((e) => null != e);
        },
    },
);
