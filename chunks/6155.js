"use strict";
n.d(t, { A: () => C }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(661531),
    o = n(477782),
    l = n(980707),
    u = n(922016),
    c = n(939249),
    d = n(530005),
    _ = n(367513),
    f = n(31728),
    h = n(933958),
    p = n(587895),
    E = n(313961),
    m = n(616356),
    g = n(334463),
    A = n(287809),
    I = n(652215),
    T = n(806931),
    S = n(375708),
    N = n(27600);
function y(e) {
    let t,
        n,
        { closePopout: r, idle: a, pipWindows: u, voiceChannelId: c, onSelect: d } = e;
    a && r();
    let A = (0, s.bG)([h.Ay], () => h.Ay.getCurrentEmbeddedActivity()),
        N = (0, s.bG)([g.A], () => g.A.pipWindow),
        y = (0, s.bG)([E.A], () => E.A.getSelectedParticipant(c)),
        C = (0, s.bG)([E.A], () => E.A.getStreamParticipants(c));
    return (0, i.jsx)(l.W, {
        "data-menu-migrated": !0,
        navId: "pip-menu",
        "aria-label": "switch PIP",
        onClose: r,
        onSelect: d,
        children: ((t = []),
        null != (n = u.find((e) => e.component === I.o1q.VIDEO)) &&
            C.forEach((e) => {
                let i = m.A.getActiveStreamForApplicationStream(e.stream),
                    r = e.id === y?.id && N?.id === n.id;
                null == i || r || t.push({ pipWindow: n, participant: e, stream: i });
            }),
        t).map(function (e) {
            let t = e.pipWindow.id,
                n = e.participant?.id,
                r = (function (e) {
                    if (e.pipWindow.component === I.o1q.ACTIVITY && null != A) {
                        let e = p.A.getApplication(A.applicationId)?.name;
                        return null == e
                            ? S.intl.string(S.t["8raC1P"])
                            : S.intl.formatToPlainString(S.t["a9+V+V"], { activityName: e });
                    }
                    return null == e.participant || e.participant.type !== T.lp.STREAM
                        ? S.intl.string(S.t["ng/Kwl"])
                        : S.intl.formatToPlainString(S.t.sqmFRg, { username: e.participant.userNick });
                })(e),
                s = `${t}${n ?? ""}`;
            return (0, i.jsx)(
                o.Dr,
                {
                    id: s,
                    label: r,
                    action: () => {
                        let t;
                        return (
                            N?.id !== e.pipWindow.id && (0, f.mf)(e.pipWindow.id),
                            void (
                                null != (t = e.participant) &&
                                t.type !== T.lp.ACTIVITY &&
                                _.A.selectParticipant(c, t.id)
                            )
                        );
                    },
                },
                s,
            );
        }),
    });
}
let C = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        o = r.useRef(null),
        l = Array.from((0, s.bG)([g.A], () => g.A.pipWindows).values()).filter((e) => e.component !== I.o1q.ACTIVITY),
        _ = (0, s.yK)([m.A], () => m.A.getAllActiveStreamsForChannel(t)).filter(
            (e) => e.ownerId !== A.default.getCurrentUser()?.id && e.channelId === t,
        ),
        f = (1 === l.length && l[0].component === I.o1q.ACTIVITY) || 0 === _.length,
        h = 1 === l.length && _.length <= 1;
    return f || h
        ? null
        : (0, i.jsx)(u.Y, {
              targetElementRef: o,
              position: "bottom",
              renderPopout: (e) => (0, i.jsx)(y, { voiceChannelId: t, pipWindows: l, idle: n, ...e }),
              children: (e) =>
                  (0, i.jsx)(c.D, {
                      className: N.ro,
                      ...e,
                      innerRef: o,
                      children: (0, i.jsx)(d.F, { size: "md", color: a.A.unsafe_rawColors.WHITE.css }),
                  }),
          });
};
