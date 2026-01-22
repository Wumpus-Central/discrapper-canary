n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(87664),
    o = n(517164),
    l = n(20805),
    c = n(83971),
    u = n(583846),
    d = n(890330),
    f = n(961350),
    p = n(734057),
    _ = n(290863),
    h = n(977997),
    m = n(840907),
    g = n(652215);
let E = [],
    b = [];

function y(e) {
    let { recentActivityTabEnabled: t } = (0, m.s)({
            location: "useUserProfileActivity",
        }),
        n = (0, a.bG)([f.default], () => f.default.getId() === e),
        y = (0, s.A)(e),
        O = (0, a.bG)([_.A], () => _.A.getActivities(e)),
        A = (0, a.bG)([o.A], () => (n || t ? o.A.getUserOutbox(e) : void 0)),
        v = (0, a.bG)([h.A], () => h.A.getVoiceStateForUser(e)),
        S = (0, a.bG)([p.A], () => p.A.getChannel(null == v ? void 0 : v.channelId)),
        I = (0, d.v)("UserProfileActivity", S),
        T = (0, r.useMemo)(
            () =>
                O.filter((e) => {
                    let { type: t } = e;
                    return t === g.$pd.HANG_STATUS ? I : t !== g.$pd.CUSTOM_STATUS;
                }),
            [O, I],
        ),
        { live: C, recent: N } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    T,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t =
                    null == A
                        ? void 0
                        : A.entries.filter(
                              (t) =>
                                  !(0, u.Hd)(t) &&
                                  ((0, l.Tq)(t)
                                      ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, c.qb)(t, e))
                                      : (0, l.Lf)(t)
                                        ? !e.some((e) => null != e && (0, c.SU)(t, e))
                                        : (0, l.$R)(t)),
                          );
            return {
                live: 0 === e.length ? E : e,
                recent: null == t || 0 === t.length ? b : t,
            };
        }, [T, null == A ? void 0 : A.entries]);
    return {
        live: C,
        recent: N,
        stream: y,
        outbox: A,
    };
}
