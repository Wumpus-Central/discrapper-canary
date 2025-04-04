n.d(t, {
    E: () => g,
    Z: () => E
});
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(410575),
    s = n(358221),
    l = n(418469),
    c = n(786138),
    u = n(803647),
    d = n(199902),
    f = n(594174),
    _ = n(5192),
    p = n(221241),
    h = n(981631),
    m = n(388032);
function g(e, t, n) {
    let r = (0, i.e7)([s.Z], () => (null != e ? s.Z.getSelectedParticipantId(e.id) : null)),
        o = (0, i.e7)([d.Z], () => (null != r ? d.Z.getActiveStreamForStreamKey(r) : null), [r]);
    return (0, i.Wu)(
        [f.default],
        () => {
            if (null == e) return [];
            let r = n
                .filter((e) => e.ownerId !== (null == t ? void 0 : t.id))
                .map((t) => ({
                    stream: t,
                    username: _.ZP.getName(e.getGuildId(), e.id, f.default.getUser(t.ownerId))
                }));
            return 1 === r.length && r[0].stream.ownerId === (null == o ? void 0 : o.ownerId) ? [] : r;
        },
        [e, o, n, t]
    );
}
function E(e) {
    var t;
    let { channel: n, currentUser: i, activeStreams: s, hideSelfOptions: d = !1, showReportOption: f = !1, handleGoLive: _, onClose: E, onSelect: b, appContext: y = h.IlC.APP, disableChangeWindows: v = !1, onInteraction: O } = e,
        I = null != (t = s.find((e) => e.ownerId === (null == i ? void 0 : i.id))) ? t : null,
        S = g(n, i, s),
        T = (0, l.Z)(I, y),
        { simplifiedSettingsEnabled: N } = (0, p.Z)({ location: 'ManageStreamsMenu' }),
        A = (0, c.b)({
            disableChangeWindows: v,
            stream: I,
            showReportOption: f,
            handleGoLive: _,
            simplified: N,
            appContext: y
        });
    return (0, r.jsx)(a.Z, {
        section: h.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: b,
            navId: 'manage-streams',
            onClose: E,
            onInteraction: O,
            'aria-label': null != I ? m.NW.string(m.t.S5anIS) : m.NW.string(m.t.fjBNo6),
            children: [
                (0, r.jsx)(o.kSQ, {
                    children: S.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            o.sNh,
                            {
                                id: t.ownerId,
                                label: m.NW.formatToPlainString(m.t['7rkg+/'], { username: n }),
                                icon: o.g5r,
                                action: () => (0, u.Z)(t)
                            },
                            'manage-stream-menu'.concat(t.ownerId)
                        );
                    })
                }),
                d ? null : A,
                N && !d
                    ? (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(o.sNh, {
                              id: 'more-options',
                              label: m.NW.string(m.t.PdRCRk),
                              children: T
                          })
                      })
                    : null
            ]
        })
    });
}
