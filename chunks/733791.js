(l.d(n, {
    Bs: () => N,
    CU: () => S,
    J: () => B,
    Kd: () => _,
    L4: () => w,
    Mi: () => C,
    WX: () => E,
    fI: () => P,
    p_: () => I,
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
    j = l(260498),
    x = l(426035),
    g = l(652215),
    v = l(248675),
    b = l(660183);
function k(e) {
    return (0, c.m1)(e, h.default, f.A);
}
function N(e) {
    return (
        (function (e) {
            let { guildId: n, botUserIds: l } = (0, i.bG)(
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
                r.isEqual,
            );
            t.useEffect(() => {
                null != n && l.length > 0 && a.A.requestMembersById(n, l, !1);
            }, [n, l]);
        })(e),
        (0, i.bG)(
            [j.Ay, p.A, o.Ay, d.Ay, s.A, u.A, m.A, h.default, f.A],
            () => {
                let n = null == e ? null : j.Ay.getProject(e);
                return null == n
                    ? null
                    : (function (e) {
                          let n = null == e.guild_id ? null : p.A.getGuild(e.guild_id);
                          if (null == n || "in_server" !== (0, x.kF)(e)) return null;
                          let l = (0, x.xI)(n.id, e.application_id),
                              t = l.filter((e) => m.A.can(g.xBc.MANAGE_CHANNELS, e));
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
            r.isEqual,
        )
    );
}
function y(e) {
    return e.map((e) => ({ key: `channel:${e}`, kind: "channel", label: `#${e}` }));
}
function _(e) {
    return y(e.channelNames);
}
function P(e) {
    let n = [{ key: "project", kind: "project", label: e.projectName }];
    n.push(...y(e.channelNames));
    let l = w(e);
    return (null != l && n.push(l), n);
}
function w(e) {
    let { previewAppName: n } = e;
    return null == n ? null : { key: "preview-app", kind: "app", label: n };
}
function C(e) {
    let { keptChannelNames: n } = e;
    if (0 === n.length) return null;
    let l = new Intl.ListFormat(b.intl.currentLocale, { type: "conjunction" }).format(n.map((e) => `#${e}`));
    return b.intl.formatToPlainString(v.default.pE4Cec, { channels: l });
}
function E(e) {
    return e;
}
function I(e) {
    let { appName: n, guildName: l } = e;
    return b.intl.formatToPlainString(v.default.SNFGxP, { app: n, server: l });
}
function B(e) {
    let { appName: n, guildName: l } = e;
    return b.intl.formatToPlainString(v.default["9CvVB9"], { app: n, server: l });
}
function S(e) {
    return (0, i.bG)(
        [j.Ay, A.A],
        () => {
            var n;
            let l = null == e ? null : j.Ay.getProject(e);
            return (
                null != l &&
                ((n = A.A.getPublishStatus(l.id)), "user" === l.install_scope && null != n && "unpublished" !== n.state)
            );
        },
        [e],
    );
}
