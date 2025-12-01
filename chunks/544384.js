n.d(t, {
    E: () => g,
    Z: () => E,
});
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(410575),
    l = n(358221),
    c = n(418469),
    u = n(786138),
    d = n(803647),
    f = n(199902),
    p = n(594174),
    _ = n(5192),
    m = n(981631),
    h = n(388032);
function g(e, t, n) {
    let r = (0, a.e7)([l.Z], () => (null != e ? l.Z.getSelectedParticipantId(e.id) : null)),
        o = (0, a.e7)([f.Z], () => (null != r ? f.Z.getActiveStreamForStreamKey(r) : null), [r]),
        s = (0, a.cj)([p.default], () => n.reduce((e, t) => ((e[t.ownerId] = p.default.getUser(t.ownerId)), e), {}), [
            n,
        ]);
    return i.useMemo(() => {
        if (null == e) return [];
        let r = n.filter((e) => e.ownerId !== (null == t ? void 0 : t.id));
        return 1 === r.length && r[0].ownerId === (null == o ? void 0 : o.ownerId)
            ? []
            : r.map((t) => ({
                  stream: t,
                  username: _.ZP.getName(e.getGuildId(), e.id, s[t.ownerId]),
              }));
    }, [s, n, e, o, null == t ? void 0 : t.id]);
}
function E(e) {
    var t;
    let {
            channel: n,
            currentUser: i,
            activeStreams: a,
            hideSelfOptions: l = !1,
            showReportOption: f = !1,
            handleGoLive: p,
            onClose: _,
            onSelect: E,
            appContext: b = m.IlC.APP,
            disableChangeWindows: y = !1,
            onInteraction: O,
        } = e,
        v = null != (t = a.find((e) => e.ownerId === (null == i ? void 0 : i.id))) ? t : null,
        S = g(n, i, a),
        I = (0, c.Z)(v, b),
        T = (0, u.b)({
            disableChangeWindows: y,
            stream: v,
            showReportOption: f,
            handleGoLive: p,
            minimal: !0,
            appContext: b,
        });
    return (0, r.jsx)(s.Z, {
        section: m.jXE.CONTEXT_MENU,
        children: (0, r.jsxs)(o.v2r, {
            onSelect: E,
            navId: "manage-streams",
            onClose: _,
            onInteraction: O,
            "aria-label": null != v ? h.intl.string(h.t.S5anIc) : h.intl.string(h.t.fjBNo1),
            children: [
                (0, r.jsx)(o.kSQ, {
                    children: S.map((e) => {
                        let { stream: t, username: n } = e;
                        return (0, r.jsx)(
                            o.sNh,
                            {
                                id: t.ownerId,
                                label: h.intl.formatToPlainString(h.t["7rkg+/"], { username: n }),
                                icon: o.g5r,
                                action: () => (0, d.Z)(t),
                            },
                            "manage-stream-menu".concat(t.ownerId),
                        );
                    }),
                }),
                l ? null : T,
                l
                    ? null
                    : (0, r.jsx)(o.kSQ, {
                          children: (0, r.jsx)(o.sNh, {
                              id: "more-options",
                              label: h.intl.string(h.t.PdRCRg),
                              children: I,
                          }),
                      }),
            ],
        }),
    });
}
