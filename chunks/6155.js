"use strict";
n.d(t, { A: () => O }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(827734),
    o = n(477782),
    l = n(861672),
    u = n(265872),
    d = n(939249),
    c = n(530005),
    _ = n(367513),
    f = n(31728),
    E = n(933958),
    h = n(587895),
    p = n(313961),
    m = n(616356),
    g = n(334463),
    A = n(287809),
    I = n(652215),
    T = n(806931),
    S = n(985018),
    y = n(429904);
function N(e) {
    let t,
        n,
        { closePopout: i, idle: a, pipWindows: u, voiceChannelId: d, onSelect: c } = e;
    a && i();
    let A = (0, s.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()),
        y = (0, s.bG)([g.A], () => g.A.pipWindow),
        N = (0, s.bG)([p.A], () => p.A.getSelectedParticipant(d)),
        O = (0, s.bG)([p.A], () => p.A.getStreamParticipants(d));
    return (0, r.jsx)(l.W, {
        "data-menu-migrated": !0,
        navId: "pip-menu",
        "aria-label": "switch PIP",
        onClose: i,
        onSelect: c,
        children: ((t = []),
        null != (n = u.find((e) => e.component === I.o1q.VIDEO)) &&
            O.forEach((e) => {
                let r = m.A.getActiveStreamForApplicationStream(e.stream),
                    i = e.id === N?.id && y?.id === n.id;
                null == r || i || t.push({ pipWindow: n, participant: e, stream: r });
            }),
        t).map(function (e) {
            let t = e.pipWindow.id,
                n = e.participant?.id,
                i = (function (e) {
                    if (e.pipWindow.component === I.o1q.ACTIVITY && null != A) {
                        let e = h.A.getApplication(A.applicationId)?.name;
                        return null == e
                            ? S.intl.string(S.t["8raC1P"])
                            : S.intl.formatToPlainString(S.t["a9+V+V"], { activityName: e });
                    }
                    return null == e.participant || e.participant.type !== T.lp.STREAM
                        ? S.intl.string(S.t["ng/Kwl"])
                        : S.intl.formatToPlainString(S.t.sqmFRg, { username: e.participant.userNick });
                })(e),
                s = `${t}${n ?? ""}`;
            return (0, r.jsx)(
                o.Dr,
                {
                    id: s,
                    label: i,
                    action: () => {
                        let t;
                        return (
                            y?.id !== e.pipWindow.id && (0, f.mf)(e.pipWindow.id),
                            void (
                                null != (t = e.participant) &&
                                t.type !== T.lp.ACTIVITY &&
                                _.A.selectParticipant(d, t.id)
                            )
                        );
                    },
                },
                s,
            );
        }),
    });
}
let O = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        o = i.useRef(null),
        l = Array.from((0, s.bG)([g.A], () => g.A.pipWindows).values()).filter((e) => e.component !== I.o1q.ACTIVITY),
        _ = (0, s.yK)([m.A], () => m.A.getAllActiveStreamsForChannel(t)).filter(
            (e) => e.ownerId !== A.default.getCurrentUser()?.id && e.channelId === t,
        ),
        f = (1 === l.length && l[0].component === I.o1q.ACTIVITY) || 0 === _.length,
        E = 1 === l.length && _.length <= 1;
    return f || E
        ? null
        : (0, r.jsx)(u.Y, {
              targetElementRef: o,
              position: "bottom",
              renderPopout: (e) => (0, r.jsx)(N, { voiceChannelId: t, pipWindows: l, idle: n, ...e }),
              children: (e) =>
                  (0, r.jsx)(d.D, {
                      className: y.ro,
                      ...e,
                      innerRef: o,
                      children: (0, r.jsx)(c.F, { size: "md", color: a.A.unsafe_rawColors.WHITE.css }),
                  }),
          });
};
