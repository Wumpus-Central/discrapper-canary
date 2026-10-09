(l.d(n, { Bs: () => b, J: () => I, Kd: () => _, L4: () => w, Mi: () => P, WX: () => C, fI: () => y, p_: () => E }),
    l(321073));
var t = l(582128),
    i = l(435558),
    r = l(17928),
    a = l(66834),
    u = l(587895),
    c = l(47167),
    s = l(321191),
    o = l(808728),
    d = l(696451),
    p = l(71393),
    m = l(576705),
    f = l(994500),
    h = l(287809),
    j = l(42766),
    x = l(426035),
    A = l(652215),
    g = l(248675),
    v = l(660183);
function k(e) {
    return (0, c.m1)(e, h.default, f.A);
}
function b(e) {
    return (
        (function (e) {
            let { guildId: n, botUserIds: l } = (0, r.bG)(
                [j.Ay, u.A, d.Ay],
                () => {
                    let n = null == e ? null : j.Ay.getProject(e),
                        l = n?.guild_id;
                    return null == n || null == l
                        ? { guildId: null, botUserIds: [] }
                        : {
                              guildId: l,
                              botUserIds: [(0, x.Du)(n), (0, x.ug)(n)].filter(
                                  (e) => null != e && null == d.Ay.getMember(l, e),
                              ),
                          };
                },
                [e],
                i.isEqual,
            );
            t.useEffect(() => {
                null != n && l.length > 0 && a.A.requestMembersById(n, l, !1);
            }, [n, l]);
        })(e),
        (0, r.bG)(
            [j.Ay, p.A, o.Ay, d.Ay, s.A, u.A, m.A, h.default, f.A],
            () => {
                let n = null == e ? null : j.Ay.getProject(e);
                return null == n
                    ? null
                    : (function (e) {
                          let n = null == e.guild_id ? null : p.A.getGuild(e.guild_id);
                          if (null == n || "in_server" !== (0, x.kF)(e)) return null;
                          let l = (0, x.xI)(n.id, e.application_id),
                              t = l.filter((e) => m.A.can(A.xBc.MANAGE_CHANNELS, e));
                          return {
                              projectName: e.name,
                              appName: u.A.getApplication(e.application_id)?.name ?? e.name,
                              previewAppName:
                                  null == e.preview_application_id
                                      ? null
                                      : (u.A.getApplication(e.preview_application_id)?.name ?? `${e.name} (Preview)`),
                              guildName: n.name,
                              channelNames: t.map(k),
                              keptChannelNames: l.filter((e) => !t.includes(e)).map(k),
                              canRemoveBot: (0, x.wv)(n, (0, x.Du)(e)),
                              canRemovePreviewBot: null == e.preview_application_id || (0, x.wv)(n, (0, x.ug)(e)),
                          };
                      })(n);
            },
            [e],
            i.isEqual,
        )
    );
}
function N(e) {
    return e.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` }));
}
function _(e) {
    return N(e.channelNames);
}
function y(e) {
    let n = [{ key: "project", kind: "project", label: e.projectName }];
    n.push(...N(e.channelNames));
    let l = w(e);
    return (null != l && n.push(l), n);
}
function w(e) {
    let { previewAppName: n } = e;
    return null == n ? null : { key: "preview-app", kind: "app", label: n };
}
function P(e) {
    let { keptChannelNames: n } = e;
    if (0 === n.length) return null;
    let l = new Intl.ListFormat(v.intl.currentLocale, { type: "conjunction" }).format(n.map((e) => `#${e}`));
    return v.intl.formatToPlainString(g.default.pE4Cec, { channels: l });
}
function C(e) {
    return e;
}
function E(e) {
    let { appName: n, guildName: l } = e;
    return v.intl.formatToPlainString(g.default.SNFGxP, { app: n, server: l });
}
function I(e) {
    let { appName: n, guildName: l } = e;
    return v.intl.formatToPlainString(g.default["9CvVB9"], { app: n, server: l });
}
