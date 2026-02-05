"use strict";
n.d(t, { A: () => I });
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(87664),
    o = n(517164),
    l = n(20805),
    u = n(83971),
    c = n(583846),
    d = n(890330),
    _ = n(961350),
    f = n(734057),
    p = n(290863),
    h = n(977997),
    m = n(840907),
    g = n(652215);
let E = [],
    A = [];
function I(e) {
    let { recentActivityTabEnabled: t } = (0, m.s)({ location: "useUserProfileActivity" }),
        n = (0, a.bG)([_.default], () => _.default.getId() === e),
        I = (0, s.A)(e),
        T = (0, a.bG)([p.A], () => p.A.getActivities(e)),
        y = (0, a.bG)([o.A], () => (n || t ? o.A.getUserOutbox(e) : void 0)),
        S = (0, a.bG)([h.A], () => h.A.getVoiceStateForUser(e)),
        v = (0, a.bG)([f.A], () => f.A.getChannel(S?.channelId)),
        C = (0, d.v)("UserProfileActivity", v),
        b = (0, r.useMemo)(
            () =>
                T.filter((e) => {
                    let { type: t } = e;
                    return t === g.$pd.HANG_STATUS ? C : t !== g.$pd.CUSTOM_STATUS;
                }),
            [T, C],
        ),
        { live: N, recent: R } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    b,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t = y?.entries.filter(
                    (t) =>
                        !(0, c.Hd)(t) &&
                        ((0, l.Tq)(t)
                            ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, u.qb)(t, e))
                            : (0, l.Lf)(t)
                              ? !e.some((e) => null != e && (0, u.SU)(t, e))
                              : (0, l.$R)(t)),
                );
            return { live: 0 === e.length ? E : e, recent: null == t || 0 === t.length ? A : t };
        }, [b, y?.entries]);
    return { live: N, recent: R, stream: I, outbox: y };
}
