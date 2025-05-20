n.d(t, {
    E: () => g,
    Z: () => E
});
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(410575),
    l = n(358221),
    c = n(418469),
    u = n(786138),
    d = n(803647),
    f = n(199902),
    _ = n(594174),
    p = n(5192),
    h = n(981631),
    m = n(388032);
function g(e, t, n) {
    let r = (0, o.e7)([l.Z], () => (null != e ? l.Z.getSelectedParticipantId(e.id) : null)),
        a = (0, o.e7)([f.Z], () => (null != r ? f.Z.getActiveStreamForStreamKey(r) : null), [r]),
        s = (0, o.cj)([_.default], () => n.reduce((e, t) => ((e[t.ownerId] = _.default.getUser(t.ownerId)), e), {}), [n]);
    return i.useMemo(() => {
        if (null == e) return [];
        let r = n.filter((e) => e.ownerId !== (null == t ? void 0 : t.id));
        return 1 === r.length && r[0].ownerId === (null == a ? void 0 : a.ownerId)
            ? []
            : r.map((t) => ({
                  stream: t,
                  username: p.ZP.getName(e.getGuildId(), e.id, s[t.ownerId])
              }));
    }, [s, n, e, a, null == t ? void 0 : t.id]);
}
function E(e) {
    var t;
    let { channel: n, currentUser: i, activeStreams: o, hideSelfOptions: l = !1, showReportOption: f = !1, handleGoLive: _, onClose: p, onSelect: E, appContext: b = h.IlC.APP, disableChangeWindows: y = !1, onInteraction: O } = e,
        v = null != (t = o.find((e) => e.ownerId === (null == i ? void 0 : i.id))) ? t : null,
        I = g(n, i, o),
        S = (0, c.Z)(v, b),
        T = (0, u.b)({
            disableChangeWindows: y,
            stream: v,
            showReportOption: f,
            handleGoLive: _,
            minimal: !0,
            appContext: b
        });
    return (0, r.jsx)(s.Z, {
        section: h.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: E,
            navId: 'manage-streams',
            onClose: p,
            onInteraction: O,
            'aria-label': null != v ? m.intl.string(m.t.S5anIS) : m.intl.string(m.t.fjBNo6),
            children: [
                (0, r.jsx)(a.kSQ, {
                    children: I.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
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
                l ? null : T,
                l
                    ? null
                    : (0, r.jsx)(a.kSQ, {
                          children: (0, r.jsx)(a.sNh, {
                              id: 'more-options',
                              label: m.intl.string(m.t.PdRCRk),
                              children: S
                          })
                      })
            ]
        })
    });
}
