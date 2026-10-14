l.d(t, { CB: () => k, S6: () => y, SJ: () => N, iD: () => w });
var n = l(582128),
    a = l(435558),
    i = l(17928),
    r = l(66834),
    u = l(627363),
    p = l(587895),
    o = l(47167),
    s = l(808728),
    c = l(696451),
    d = l(71393),
    f = l(576705),
    A = l(994500),
    g = l(287809),
    m = l(246338),
    b = l(426035),
    h = l(652215);
let v = " (Preview)";
function N(e) {
    return p.A.getAppIdForBotUserId(e) ?? e;
}
function w(e, t) {
    var l, u;
    let m,
        w,
        y = (0, i.bG)([p.A], () => null != t && p.A.getApplication(t)?.conjureProjectId != null, [t]);
    return (
        n.useEffect(() => {
            null != t && j(t);
        }, [t]),
        n.useEffect(() => {
            if (null != e && y) for (let t of C(e)) j(t);
        }, [e, y]),
        (l = e),
        (u = t),
        (m = (0, i.bG)(
            [p.A],
            () => {
                let e = null == u ? null : p.A.getApplication(u);
                if (e?.conjureProjectId == null) return null;
                let t = e.bot?.username ?? e.name;
                return (t.endsWith(v) ? t.slice(0, -v.length) : t).toLowerCase();
            },
            [u],
        )),
        n.useEffect(() => {
            null != l && null != m && r.A.requestMembers(l, m, 10, !1);
        }, [l, m]),
        (w = (0, i.bG)(
            [c.Ay, g.default, p.A],
            () =>
                null == l || null == m
                    ? []
                    : c.Ay.getMemberIds(l)
                          .filter((e) => {
                              let t = g.default.getUser(e);
                              return t?.bot === !0 && t.username.toLowerCase().startsWith(m);
                          })
                          .map(N)
                          .filter((e) => null == p.A.getApplication(e)),
            [l, m],
            a.isEqual,
        )),
        n.useEffect(() => {
            for (let e of w) j(e);
        }, [w]),
        (0, i.bG)(
            [p.A, d.A, s.Ay, c.Ay, f.A, g.default, A.A],
            () =>
                (function (e, t) {
                    var l, n;
                    let a = null == e ? null : d.A.getGuild(e),
                        i = null == t ? null : p.A.getApplication(t),
                        r = i?.conjureProjectId;
                    if (null == a || null == i || null == r) return null;
                    let u = C(a.id)
                            .map((e) => p.A.getApplication(e))
                            .find((e) => e?.conjureProjectId === r),
                        s = null == u ? [] : (0, b.xI)(a.id, u.id),
                        m =
                            null != u &&
                            (0, b.wv)(a, i.bot?.id) &&
                            (0, b.wv)(a, u.bot?.id) &&
                            ((l = a.id),
                            (n = r),
                            c.Ay.getMemberIds(l).filter(
                                (e) =>
                                    g.default.getUser(e)?.bot === !0 &&
                                    p.A.getApplication(N(e))?.conjureProjectId === n,
                            )).every((e) => (0, b.wv)(a, e)) &&
                            s.every((e) => f.A.can(h.xBc.MANAGE_CHANNELS, e));
                    return {
                        projectId: r,
                        guildId: a.id,
                        guildName: a.name,
                        targetAppName: i.name,
                        rest:
                            null != u && 0 !== s.length && m
                                ? {
                                      appName: u.name,
                                      previewAppName: u.id === i.id ? `${u.name}${v}` : i.name,
                                      channels: s.map((e) => ({ id: e.id, name: (0, o.m1)(e, g.default, A.A) })),
                                      targetIsPreview: u.id !== i.id,
                                  }
                                : null,
                    };
                })(e, t),
            [e, t],
            a.isEqual,
        )
    );
}
function y(e) {
    return [
        ...I(e.channels),
        e.targetIsPreview
            ? { key: "main-app", kind: "app", label: e.appName }
            : { key: "preview-app", kind: "app", label: e.previewAppName },
    ];
}
function k(e, t) {
    return [
        ...I(e.channels.filter((e) => e.id !== t)),
        { key: "main-app", kind: "app", label: e.appName },
        { key: "preview-app", kind: "app", label: e.previewAppName },
    ];
}
function I(e) {
    return e.map((e) => {
        let { id: t, name: l } = e;
        return { key: `channel:${t}`, kind: "channel", label: `#${l}` };
    });
}
function C(e) {
    let t = new Set();
    for (let { channel: l } of s.Ay.getChannels(e)[s.I6]) {
        let e = (0, m.us)(l);
        null != e && t.add(e);
    }
    return [...t];
}
function j(e) {
    null != p.A.getApplication(e) || p.A.isFetchingApplication(e) || (0, u.TA)(e).catch(() => {});
}
