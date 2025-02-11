n.d(t, {
    E: () => g,
    Z: () => E
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(410575),
    o = n(358221),
    l = n(682901),
    u = n(418469),
    c = n(786138),
    d = n(803647),
    f = n(199902),
    _ = n(594174),
    p = n(5192),
    h = n(981631),
    m = n(388032);
function g(e, t, n) {
    let i = (0, r.e7)([o.Z], () => (null != e ? o.Z.getSelectedParticipantId(e.id) : null)),
        a = (0, r.e7)([f.Z], () => (null != i ? f.Z.getActiveStreamForStreamKey(i) : null), [i]);
    return (0, r.Wu)(
        [_.default],
        () => {
            if (null == e) return [];
            let i = n
                .filter((e) => e.ownerId !== (null == t ? void 0 : t.id))
                .map((t) => ({
                    stream: t,
                    username: p.ZP.getName(e.getGuildId(), e.id, _.default.getUser(t.ownerId))
                }));
            return 1 === i.length && i[0].stream.ownerId === (null == a ? void 0 : a.ownerId) ? [] : i;
        },
        [e, a, n, t]
    );
}
function E(e) {
    var t;
    let { channel: n, currentUser: r, activeStreams: o, hideSelfOptions: f = !1, showReportOption: _ = !1, handleGoLive: p, onClose: E, onSelect: v, appContext: y = h.IlC.APP, disableChangeWindows: I = !1 } = e,
        T = null !== (t = o.find((e) => e.ownerId === (null == r ? void 0 : r.id))) && void 0 !== t ? t : null,
        b = g(n, r, o),
        S = (0, u.Z)(T, y),
        { enabled: A } = (0, l.Z)({ location: 'ManageStreamsMenu' }),
        N = (0, c.b)({
            disableChangeWindows: I,
            stream: T,
            showReportOption: _,
            handleGoLive: p,
            simplified: A,
            appContext: y
        });
    return (0, i.jsx)(s.Z, {
        section: h.jXE.CONTEXT_MENU,
        children: (0, i.jsxs)(a.v2r, {
            onSelect: v,
            navId: 'manage-streams',
            onClose: E,
            'aria-label': null != T ? m.intl.string(m.t.S5anIS) : m.intl.string(m.t.fjBNo6),
            children: [
                (0, i.jsx)(a.kSQ, {
                    children: b.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, i.jsx)(
                            a.sNh,
                            {
                                id: t.ownerId,
                                label: m.intl.formatToPlainString(m.t['7rkg+/'], { username: n }),
                                icon: a.g5r,
                                action: () => (0, d.Z)(t)
                            },
                            'manage-stream-menu'.concat(t.ownerId)
                        );
                    })
                }),
                f ? null : N,
                A && !f
                    ? (0, i.jsx)(a.kSQ, {
                          children: (0, i.jsx)(a.sNh, {
                              id: 'more-options',
                              label: m.intl.string(m.t.PdRCRk),
                              children: S
                          })
                      })
                    : null
            ]
        })
    });
}
