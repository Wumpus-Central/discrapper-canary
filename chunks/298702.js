l.d(t, { CB: () => y, S6: () => k, SJ: () => N, iD: () => w });
var n = l(582128),
    i = l(435558),
    a = l(17928),
    r = l(66834),
    u = l(627363),
    p = l(587895),
    o = l(47167),
    s = l(808728),
    d = l(696451),
    c = l(71393),
    g = l(576705),
    f = l(994500),
    A = l(287809),
    m = l(246338),
    b = l(426035),
    v = l(652215);
let h = " (Preview)";
function N(e) {
    return p.A.getAppIdForBotUserId(e) ?? e;
}
function w(e, t) {
    var l, u;
    let m,
        w,
        k = (0, a.bG)([p.A], () => null != t && p.A.getApplication(t)?.vibegrationsProjectId != null, [t]);
    return (
        n.useEffect(() => {
            null != t && P(t);
        }, [t]),
        n.useEffect(() => {
            if (null != e && k) for (let t of I(e)) P(t);
        }, [e, k]),
        (l = e),
        (u = t),
        (m = (0, a.bG)(
            [p.A],
            () => {
                let e = null == u ? null : p.A.getApplication(u);
                if (e?.vibegrationsProjectId == null) return null;
                let t = e.bot?.username ?? e.name;
                return (t.endsWith(h) ? t.slice(0, -h.length) : t).toLowerCase();
            },
            [u],
        )),
        n.useEffect(() => {
            null != l && null != m && r.A.requestMembers(l, m, 10, !1);
        }, [l, m]),
        (w = (0, a.bG)(
            [d.Ay, A.default, p.A],
            () =>
                null == l || null == m
                    ? []
                    : d.Ay.getMemberIds(l)
                          .filter((e) => {
                              let t = A.default.getUser(e);
                              return t?.bot === !0 && t.username.toLowerCase().startsWith(m);
                          })
                          .map(N)
                          .filter((e) => null == p.A.getApplication(e)),
            [l, m],
            i.isEqual,
        )),
        n.useEffect(() => {
            for (let e of w) P(e);
        }, [w]),
        (0, a.bG)(
            [p.A, c.A, s.Ay, d.Ay, g.A, A.default, f.A],
            () =>
                (function (e, t) {
                    var l, n;
                    let i = null == e ? null : c.A.getGuild(e),
                        a = null == t ? null : p.A.getApplication(t),
                        r = a?.vibegrationsProjectId;
                    if (null == i || null == a || null == r) return null;
                    let u = I(i.id)
                            .map((e) => p.A.getApplication(e))
                            .find((e) => e?.vibegrationsProjectId === r),
                        s = null == u ? [] : (0, b.xI)(i.id, u.id),
                        m =
                            null != u &&
                            (0, b.wv)(i, a.bot?.id) &&
                            (0, b.wv)(i, u.bot?.id) &&
                            ((l = i.id),
                            (n = r),
                            d.Ay.getMemberIds(l).filter(
                                (e) =>
                                    A.default.getUser(e)?.bot === !0 &&
                                    p.A.getApplication(N(e))?.vibegrationsProjectId === n,
                            )).every((e) => (0, b.wv)(i, e)) &&
                            s.every((e) => g.A.can(v.xBc.MANAGE_CHANNELS, e));
                    return {
                        projectId: r,
                        guildId: i.id,
                        guildName: i.name,
                        targetAppName: a.name,
                        rest:
                            null != u && 0 !== s.length && m
                                ? {
                                      appName: u.name,
                                      previewAppName: u.id === a.id ? `${u.name}${h}` : a.name,
                                      channels: s.map((e) => ({ id: e.id, name: (0, o.m1)(e, A.default, f.A) })),
                                      targetIsPreview: u.id !== a.id,
                                  }
                                : null,
                    };
                })(e, t),
            [e, t],
            i.isEqual,
        )
    );
}
function k(e) {
    return [
        ...C(e.channels),
        e.targetIsPreview
            ? { key: "main-app", kind: "app", label: e.appName }
            : { key: "preview-app", kind: "app", label: e.previewAppName },
    ];
}
function y(e, t) {
    return [
        ...C(e.channels.filter((e) => e.id !== t)),
        { key: "main-app", kind: "app", label: e.appName },
        { key: "preview-app", kind: "app", label: e.previewAppName },
    ];
}
function C(e) {
    return e.map((e) => {
        let { id: t, name: l } = e;
        return { key: `channel:${t}`, kind: "channel", label: `#${l}` };
    });
}
function I(e) {
    let t = new Set();
    for (let { channel: l } of s.Ay.getChannels(e)[s.I6]) {
        let e = (0, m.us)(l);
        null != e && t.add(e);
    }
    return [...t];
}
function P(e) {
    null != p.A.getApplication(e) || p.A.isFetchingApplication(e) || (0, u.TA)(e).catch(() => {});
}
