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
    l = n(682901),
    c = n(418469),
    u = n(786138),
    d = n(803647),
    f = n(199902),
    p = n(594174),
    _ = n(5192),
    h = n(981631),
    m = n(388032);
function g(e, t, n) {
    let r = (0, i.e7)([s.Z], () => (null != e ? s.Z.getSelectedParticipantId(e.id) : null)),
        o = (0, i.e7)([f.Z], () => (null != r ? f.Z.getActiveStreamForStreamKey(r) : null), [r]);
    return (0, i.Wu)(
        [p.default],
        () => {
            if (null == e) return [];
            let r = n
                .filter((e) => e.ownerId !== (null == t ? void 0 : t.id))
                .map((t) => ({
                    stream: t,
                    username: _.ZP.getName(e.getGuildId(), e.id, p.default.getUser(t.ownerId))
                }));
            return 1 === r.length && r[0].stream.ownerId === (null == o ? void 0 : o.ownerId) ? [] : r;
        },
        [e, o, n, t]
    );
}
function E(e) {
    var t;
    let { channel: n, currentUser: i, activeStreams: s, hideSelfOptions: f = !1, showReportOption: p = !1, handleGoLive: _, onClose: E, onSelect: v, appContext: b = h.IlC.APP, disableChangeWindows: y = !1, onInteraction: O } = e,
        S = null !== (t = s.find((e) => e.ownerId === (null == i ? void 0 : i.id))) && void 0 !== t ? t : null,
        I = g(n, i, s),
        T = (0, c.Z)(S, b),
        { enabled: N } = (0, l.Z)({ location: 'ManageStreamsMenu' }),
        A = (0, u.b)({
            disableChangeWindows: y,
            stream: S,
            showReportOption: p,
            handleGoLive: _,
            simplified: N,
            appContext: b
        });
    return (0, r.jsx)(a.Z, {
        section: h.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: v,
            navId: 'manage-streams',
            onClose: E,
            onInteraction: O,
            'aria-label': null != S ? m.NW.string(m.t.S5anIS) : m.NW.string(m.t.fjBNo6),
            children: [
                (0, r.jsx)(o.kSQ, {
                    children: I.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            o.sNh,
                            {
                                id: t.ownerId,
                                label: m.NW.formatToPlainString(m.t['7rkg+/'], { username: n }),
                                icon: o.g5r,
                                action: () => (0, d.Z)(t)
                            },
                            'manage-stream-menu'.concat(t.ownerId)
                        );
                    })
                }),
                f ? null : A,
                N && !f
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
