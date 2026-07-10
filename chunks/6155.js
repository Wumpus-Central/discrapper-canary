"use strict";
n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(661531),
    l = n(477782),
    o = n(980707),
    d = n(922016),
    c = n(939249),
    u = n(530005),
    _ = n(367513),
    E = n(31728),
    A = n(933958),
    h = n(587895),
    I = n(313961),
    f = n(616356),
    p = n(334463),
    T = n(287809),
    m = n(652215),
    g = n(806931),
    S = n(375708),
    N = n(27600);
function C(e) {
    let t,
        n,
        { closePopout: r, idle: s, pipWindows: d, voiceChannelId: c, onSelect: u } = e;
    s && r();
    let T = (0, a.bG)([A.Ay], () => A.Ay.getCurrentEmbeddedActivity()),
        N = (0, a.bG)([p.A], () => p.A.pipWindow),
        C = (0, a.bG)([I.A], () => I.A.getSelectedParticipant(c)),
        R = (0, a.bG)([I.A], () => I.A.getStreamParticipants(c));
    return (0, i.jsx)(o.W, {
        "data-menu-migrated": !0,
        navId: "pip-menu",
        "aria-label": "switch PIP",
        onClose: r,
        onSelect: u,
        children: ((t = []),
        null != (n = d.find((e) => e.component === m.o1q.VIDEO)) &&
            R.forEach((e) => {
                let i = f.A.getActiveStreamForApplicationStream(e.stream),
                    r = e.id === C?.id && N?.id === n.id;
                null == i || r || t.push({ pipWindow: n, participant: e, stream: i });
            }),
        t).map(function (e) {
            let t = e.pipWindow.id,
                n = e.participant?.id,
                r = (function (e) {
                    if (e.pipWindow.component === m.o1q.ACTIVITY && null != T) {
                        let e = h.A.getApplication(T.applicationId)?.name;
                        return null == e
                            ? S.intl.string(S.t["8raC1P"])
                            : S.intl.formatToPlainString(S.t["a9+V+V"], { activityName: e });
                    }
                    return null == e.participant || e.participant.type !== g.lp.STREAM
                        ? S.intl.string(S.t["ng/Kwl"])
                        : S.intl.formatToPlainString(S.t.sqmFRg, { username: e.participant.userNick });
                })(e),
                a = `${t}${n ?? ""}`;
            return (0, i.jsx)(
                l.Dr,
                {
                    id: a,
                    label: r,
                    action: () => {
                        let t;
                        return (
                            N?.id !== e.pipWindow.id && (0, E.mf)(e.pipWindow.id),
                            void (
                                null != (t = e.participant) &&
                                t.type !== g.lp.ACTIVITY &&
                                _.A.selectParticipant(c, t.id)
                            )
                        );
                    },
                },
                a,
            );
        }),
    });
}
let R = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        l = r.useRef(null),
        o = Array.from((0, a.bG)([p.A], () => p.A.pipWindows).values()).filter((e) => e.component !== m.o1q.ACTIVITY),
        _ = (0, a.yK)([f.A], () => f.A.getAllActiveStreamsForChannel(t)).filter(
            (e) => e.ownerId !== T.default.getCurrentUser()?.id && e.channelId === t,
        ),
        E = (1 === o.length && o[0].component === m.o1q.ACTIVITY) || 0 === _.length,
        A = 1 === o.length && _.length <= 1;
    return E || A
        ? null
        : (0, i.jsx)(d.Y, {
              targetElementRef: l,
              position: "bottom",
              renderPopout: (e) => (0, i.jsx)(C, { voiceChannelId: t, pipWindows: o, idle: n, ...e }),
              children: (e) =>
                  (0, i.jsx)(c.D, {
                      className: N.ro,
                      ...e,
                      innerRef: l,
                      children: (0, i.jsx)(u.F, { size: "md", color: s.A.unsafe_rawColors.WHITE.css }),
                  }),
          });
};
