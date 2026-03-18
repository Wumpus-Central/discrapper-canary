"use strict";
n.d(t, { K6: () => _, gT: () => p, hJ: () => m, l1: () => f, ok: () => h });
var r = n(311907),
    i = n(517164),
    s = n(20805),
    a = n(15285),
    o = n(622543),
    l = n(290863),
    u = n(832163),
    c = n(533562),
    d = n(652215);
function _(e) {
    let { userIds: t } = e,
        n = (0, r.bG)([u.A], () => u.A.getStorefrontDetectableGameAndApplicationIds());
    return (0, r.bG)(
        [i.A],
        () =>
            t.some((e) =>
                i.A.getUserOutbox(e)?.entries.some((e) => null != e && (0, s.zD)(e) && n.has(e.extra.application_id)),
            ),
        [n, t],
    );
}
function f(e) {
    return (0, r.bG)([o.A], () => {
        for (let t of e) {
            let e = o.A.getMutualGuilds(t);
            if (null != e) {
                for (let t of e) if (t.guild.features.has(d.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) return !0;
            }
        }
        return !1;
    }, [e]);
}
function p(e) {
    let { userIds: t } = e,
        n = (0, r.bG)([u.A], () => u.A.getStorefrontDetectableGameAndApplicationIds()),
        i = (0, r.bG)([l.A], () => {
            for (let e of t)
                for (let t of l.A.getActivities(e)) if (null != t.application_id && n.has(t.application_id)) return !0;
            return !1;
        }, [n, t]),
        s = (0, c.W)();
    return i || null != s;
}
function h() {
    let e = (0, r.bG)([u.A], () => u.A.getStorefrontDetectableGameAndApplicationIds());
    return (0, r.bG)([a.Ay], () => a.Ay.getGamesSeen(!1, !1).some((t) => null != t.id && e.has(t.id)), [e]);
}
function m() {
    let e = (0, r.bG)([u.A], () => u.A.getStorefrontDetectableGameAndApplicationIds());
    return (0, r.bG)(
        [a.Ay],
        () => a.Ay.getRunningGames().some((t) => null != t.id && e.has(t.id) && a.Ay.isDetectionEnabled(t)),
        [e],
    );
}
