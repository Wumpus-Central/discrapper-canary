(l.d(n, {
    Bs: () => y,
    CU: () => G,
    J: () => B,
    Kd: () => P,
    L4: () => C,
    Mi: () => E,
    WX: () => I,
    fI: () => w,
    p_: () => S,
}),
    l(321073));
var t = l(582128),
    r = l(435558),
    i = l(17928),
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
    A = l(722701),
    j = l(811587),
    x = l(260498),
    g = l(426035),
    v = l(652215),
    b = l(248675),
    k = l(105292);
function N(e) {
    return (0, c.m1)(e, h.default, f.A);
}
function y(e) {
    return (
        (function (e) {
            let { guildId: n, botUserIds: l } = (0, i.bG)(
                [x.Ay, u.A, d.Ay],
                () => {
                    let n = null == e ? null : x.Ay.getProject(e),
                        l = n?.guild_id;
                    return null == n || null == l
                        ? { guildId: null, botUserIds: [] }
                        : {
                              guildId: l,
                              botUserIds: [(0, g.Du)(n), (0, g.ug)(n)].filter(
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
            [x.Ay, p.A, o.Ay, d.Ay, s.A, u.A, m.A, h.default, f.A],
            () => {
                let n = null == e ? null : x.Ay.getProject(e);
                return null == n
                    ? null
                    : (function (e) {
                          let n = null == e.guild_id ? null : p.A.getGuild(e.guild_id);
                          if (null == n || "in_server" !== (0, g.kF)(e)) return null;
                          let l = (0, g.xI)(n.id, e.application_id),
                              t = l.filter((e) => m.A.can(v.xBc.MANAGE_CHANNELS, e));
                          return {
                              projectName: e.name,
                              appName: u.A.getApplication(e.application_id)?.name ?? e.name,
                              previewAppName:
                                  null == e.preview_application_id
                                      ? null
                                      : (u.A.getApplication(e.preview_application_id)?.name ?? `${e.name} (Preview)`),
                              guildName: n.name,
                              channelNames: t.map(N),
                              keptChannelNames: l.filter((e) => !t.includes(e)).map(N),
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
function _(e) {
    return e.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` }));
}
function P(e) {
    return _(e.channelNames);
}
function w(e) {
    let n = [{ key: "project", kind: "project", label: e.projectName }];
    n.push(..._(e.channelNames));
    let l = C(e);
    return (null != l && n.push(l), n);
}
function C(e) {
    let { previewAppName: n } = e;
    return null == n ? null : { key: "preview-app", kind: "app", label: n };
}
function E(e) {
    let { keptChannelNames: n } = e;
    if (0 === n.length) return null;
    let l = new Intl.ListFormat(k.intl.currentLocale, { type: "conjunction" }).format(n.map((e) => `#${e}`));
    return k.intl.formatToPlainString(b.default.pE4Cec, { channels: l });
}
function I(e) {
    return e;
}
function S(e) {
    let { appName: n, guildName: l } = e;
    return k.intl.formatToPlainString(b.default.SNFGxP, { app: n, server: l });
}
function B(e) {
    let { appName: n, guildName: l } = e;
    return k.intl.formatToPlainString(b.default["9CvVB9"], { app: n, server: l });
}
function G(e) {
    return (0, i.bG)(
        [x.Ay, A.A],
        () => {
            var n;
            let l = null == e ? null : x.Ay.getProject(e);
            return (
                null != l &&
                ((n = A.A.getPublishStatus(l.id)), "user" === l.install_scope && null != n && (0, j.lE)(n.publishState))
            );
        },
        [e],
    );
}
