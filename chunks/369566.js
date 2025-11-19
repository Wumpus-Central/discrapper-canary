n.d(t, { Z: () => y }), n(388685);
var r = n(473749),
    i = n(392711),
    a = n(442837),
    o = n(545957),
    s = n(353647),
    l = n(26033),
    c = n(180335),
    u = n(561308),
    d = n(741570),
    f = n(314897),
    _ = n(592125),
    p = n(158776),
    h = n(979651),
    m = n(9161),
    g = n(981631);
let E = [],
    b = [];
function y(e) {
    let { recentActivityTabEnabled: t } = (0, m.O)({ location: "useUserProfileActivity" }),
        n = (0, a.e7)([f.default], () => f.default.getId() === e),
        y = (0, o.Z)(e),
        O = (0, a.e7)([p.Z], () => p.Z.getActivities(e)),
        v = (0, a.e7)([s.Z], () => (n || t ? s.Z.getUserOutbox(e) : void 0)),
        I = (0, a.e7)([h.Z], () => h.Z.getVoiceStateForUser(e)),
        T = (0, a.e7)([_.Z], () => _.Z.getChannel(null == I ? void 0 : I.channelId)),
        S = (0, d.E)("UserProfileActivity", T),
        A = (0, r.useMemo)(
            () =>
                O.filter((e) => {
                    let { type: t } = e;
                    return t === g.IIU.HANG_STATUS ? S : t !== g.IIU.CUSTOM_STATUS;
                }),
            [O, S],
        ),
        { live: C, recent: N } = (0, r.useMemo)(() => {
            let e = (0, i.uniqWith)(
                    A,
                    (e, t) =>
                        (null != e.application_id &&
                            null != t.application_id &&
                            e.application_id === t.application_id) ||
                        (null != e.name && null != t.name && e.name === t.name),
                ),
                t =
                    null == v
                        ? void 0
                        : v.entries.filter(
                              (t) =>
                                  !(0, u.Jg)(t) &&
                                  ((0, l.dU)(t)
                                      ? t.extra.entries.length > 0 && !e.some((e) => null != e && (0, c.pB)(t, e))
                                      : (0, l.y0)(t)
                                        ? !e.some((e) => null != e && (0, c.RL)(t, e))
                                        : (0, l.Rh)(t)),
                          );
            return {
                live: 0 === e.length ? E : e,
                recent: null == t || 0 === t.length ? b : t,
            };
        }, [A, null == v ? void 0 : v.entries]);
    return {
        live: C,
        recent: N,
        stream: y,
        outbox: v,
    };
}
