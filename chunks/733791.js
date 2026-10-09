(t.d(n, { Bs: () => k, J: () => I, Kd: () => _, Mi: () => y, WX: () => C, fI: () => w, p_: () => P }), t(321073));
var l = t(582128),
    r = t(435558),
    i = t(17928),
    a = t(66834),
    u = t(587895),
    c = t(47167),
    s = t(321191),
    o = t(808728),
    p = t(696451),
    d = t(71393),
    m = t(576705),
    f = t(994500),
    h = t(287809),
    A = t(260498),
    g = t(426035),
    j = t(652215),
    v = t(248675),
    x = t(660183);
function N(e) {
    return (0, c.m1)(e, h.default, f.A);
}
function k(e) {
    return (
        (function (e) {
            let { guildId: n, botUserIds: t } = (0, i.bG)(
                [A.Ay, u.A, p.Ay],
                () => {
                    let n = null == e ? null : A.Ay.getProject(e),
                        t = n?.guild_id;
                    return null == n || null == t
                        ? { guildId: null, botUserIds: [] }
                        : {
                              guildId: t,
                              botUserIds: [(0, g.Du)(n), (0, g.ug)(n)].filter(
                                  (e) => null != e && null == p.Ay.getMember(t, e),
                              ),
                          };
                },
                [e],
                r.isEqual,
            );
            l.useEffect(() => {
                null != n && t.length > 0 && a.A.requestMembersById(n, t, !1);
            }, [n, t]);
        })(e),
        (0, i.bG)(
            [A.Ay, d.A, o.Ay, p.Ay, s.A, u.A, m.A, h.default, f.A],
            () => {
                let n = null == e ? null : A.Ay.getProject(e);
                return null == n
                    ? null
                    : (function (e) {
                          let n = null == e.guild_id ? null : d.A.getGuild(e.guild_id);
                          if (null == n || "in_server" !== (0, g.kF)(e)) return null;
                          let t = (0, g.xI)(n.id, e.application_id),
                              l = t.filter((e) => m.A.can(j.xBc.MANAGE_CHANNELS, e));
                          return {
                              projectName: e.name,
                              appName: u.A.getApplication(e.application_id)?.name ?? e.name,
                              previewAppName:
                                  null == e.preview_application_id
                                      ? null
                                      : (u.A.getApplication(e.preview_application_id)?.name ?? `${e.name} (Preview)`),
                              guildName: n.name,
                              channelNames: l.map(N),
                              keptChannelNames: t.filter((e) => !l.includes(e)).map(N),
                              canRemoveBot: (0, g.wv)(n, (0, g.Du)(e)),
                              canRemovePreviewBot: null == e.preview_application_id || (0, g.wv)(n, (0, g.ug)(e)),
                          };
                      })(n);
            },
            [e],
            r.isEqual,
        )
    );
}
function b(e) {
    return e.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` }));
}
function _(e) {
    return b(e.channelNames);
}
function w(e) {
    let n = [{ key: "project", kind: "project", label: e.projectName }];
    return (
        n.push(...b([...e.channelNames, ...e.keptChannelNames])),
        null != e.previewAppName && n.push({ key: "preview-app", kind: "app", label: e.previewAppName }),
        n
    );
}
function y(e) {
    let { keptChannelNames: n } = e;
    if (0 === n.length) return null;
    let t = new Intl.ListFormat(x.intl.currentLocale, { type: "conjunction" }).format(n.map((e) => `#${e}`));
    return x.intl.formatToPlainString(v.default.pE4Cec, { channels: t });
}
function C(e) {
    return e;
}
function P(e) {
    let { appName: n, guildName: t } = e;
    return x.intl.formatToPlainString(v.default.SNFGxP, { app: n, server: t });
}
function I(e) {
    let { appName: n, guildName: t } = e;
    return x.intl.formatToPlainString(v.default["9CvVB9"], { app: n, server: t });
}
