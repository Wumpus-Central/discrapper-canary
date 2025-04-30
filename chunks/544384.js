n.d(t, {
    E: () => E,
    Z: () => b
});
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(410575),
    l = n(358221),
    c = n(418469),
    u = n(786138),
    d = n(803647),
    f = n(199902),
    _ = n(594174),
    p = n(5192),
    h = n(221241),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
    let r = (0, a.e7)([l.Z], () => (null != e ? l.Z.getSelectedParticipantId(e.id) : null)),
        o = (0, a.e7)([f.Z], () => (null != r ? f.Z.getActiveStreamForStreamKey(r) : null), [r]),
        s = (0, a.cj)([_.default], () => n.reduce((e, t) => ((e[t.ownerId] = _.default.getUser(t.ownerId)), e), {}), [n]);
    return i.useMemo(() => {
        if (null == e) return [];
        let r = n.filter((e) => e.ownerId !== (null == t ? void 0 : t.id));
        return 1 === r.length && r[0].ownerId === (null == o ? void 0 : o.ownerId)
            ? []
            : r.map((t) => ({
                  stream: t,
                  username: p.ZP.getName(e.getGuildId(), e.id, s[t.ownerId])
              }));
    }, [s, n, e, o, null == t ? void 0 : t.id]);
}
function b(e) {
    var t;
    let { channel: n, currentUser: i, activeStreams: a, hideSelfOptions: l = !1, showReportOption: f = !1, handleGoLive: _, onClose: p, onSelect: b, appContext: y = m.IlC.APP, disableChangeWindows: O = !1, onInteraction: v } = e,
        I = null != (t = a.find((e) => e.ownerId === (null == i ? void 0 : i.id))) ? t : null,
        S = E(n, i, a),
        T = (0, c.Z)(I, y),
        { simplifiedSettingsEnabled: A } = (0, h.Z)({ location: 'ManageStreamsMenu' }),
        N = (0, u.b)({
            disableChangeWindows: O,
            stream: I,
            showReportOption: f,
            handleGoLive: _,
            simplified: A,
            appContext: y
        });
    return (0, r.jsx)(s.Z, {
        section: m.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: b,
            navId: 'manage-streams',
            onClose: p,
            onInteraction: v,
            'aria-label': null != I ? g.intl.string(g.t.S5anIS) : g.intl.string(g.t.fjBNo6),
            children: [
                (0, r.jsx)(o.kSQ, {
                    children: S.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            o.sNh,
                            {
                                id: t.ownerId,
                                label: g.intl.formatToPlainString(g.t['7rkg+/'], { username: n }),
                                icon: o.g5r,
                                action: () => (0, d.Z)(t)
                            },
                            'manage-stream-menu'.concat(t.ownerId)
                        );
                    })
                }),
                l ? null : N,
                A && !l
                    ? (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(o.sNh, {
                              id: 'more-options',
                              label: g.intl.string(g.t.PdRCRk),
                              children: T
                          })
                      })
                    : null
            ]
        })
    });
}
