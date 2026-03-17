"use strict";
n.d(t, { A: () => g });
var r = n(64700),
    i = n(735438),
    s = n(311907),
    a = n(87664),
    o = n(517164),
    l = n(20805),
    u = n(83971),
    c = n(583846),
    d = n(890330),
    _ = n(734057),
    f = n(290863),
    p = n(977997),
    h = n(652215);
let m = [],
    E = [];
function g(e) {
    let t = (0, a.A)(e),
        n = (0, s.bG)([f.A], () => f.A.getActivities(e)),
        g = (0, s.bG)([o.A], () => o.A.getUserOutbox(e)),
        A = (0, s.bG)([p.A], () => p.A.getVoiceStateForUser(e)),
        I = (0, s.bG)([_.A], () => _.A.getChannel(A?.channelId)),
        T = (0, d.v)("UserProfileActivity", I),
        S = (0, r.useMemo)(
            () =>
                n.filter((e) => {
                    let { type: t } = e;
                    return t === h.$pd.HANG_STATUS ? T : t !== h.$pd.CUSTOM_STATUS;
                }),
            [n, T],
        ),
        { live: y, recent: v } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    S,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t = g?.entries.filter(
                    (t) =>
                        !(0, c.Hd)(t) &&
                        ((0, l.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, u.qb)(t, e))
                            : (0, l.Lf)(t)
                              ? !e.some((e) => null != e && (0, u.SU)(t, e))
                              : (0, l.$R)(t)),
                );
            return { live: 0 === e.length ? m : e, recent: null == t || 0 === t.length ? E : t };
        }, [S, g?.entries]);
    return { live: y, recent: v, stream: t, outbox: g };
}
