"use strict";
n.d(t, { A: () => T }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(827734),
    o = n(397927),
    l = n(367513),
    u = n(31728),
    c = n(933958),
    d = n(587895),
    _ = n(313961),
    f = n(616356),
    p = n(334463),
    h = n(287809),
    m = n(652215),
    E = n(806931),
    g = n(985018),
    A = n(27600);
function I(e) {
    let { closePopout: t, idle: n, pipWindows: i, voiceChannelId: a, onSelect: h } = e;
    n && t();
    let A = (0, s.bG)([c.Ay], () => c.Ay.getCurrentEmbeddedActivity()),
        I = (0, s.bG)([p.A], () => p.A.pipWindow),
        T = (0, s.bG)([_.A], () => _.A.getSelectedParticipant(a)),
        S = (0, s.bG)([_.A], () => _.A.getStreamParticipants(a));
    function y(e) {
        I?.id !== e.pipWindow.id && (0, u.mf)(e.pipWindow.id);
        let t = e.participant;
        null != t && t.type !== E.lp.ACTIVITY && l.A.selectParticipant(a, t.id);
    }
    function v(e) {
        if (e.pipWindow.component === m.o1q.ACTIVITY && null != A) {
            let e = d.A.getApplication(A.applicationId)?.name;
            return null == e
                ? g.intl.string(g.t["8raC1P"])
                : g.intl.formatToPlainString(g.t["a9+V+V"], { activityName: e });
        }
        return null == e.participant || e.participant.type !== E.lp.STREAM
            ? g.intl.string(g.t["ng/Kwl"])
            : g.intl.formatToPlainString(g.t.sqmFRg, { username: e.participant.userNick });
    }
    function N() {
        let e = [],
            t = i.find((e) => e.component === m.o1q.VIDEO);
        return (
            null != t &&
                S.forEach((n) => {
                    let r = f.A.getActiveStreamForApplicationStream(n.stream),
                        i = n.id === T?.id && I?.id === t.id;
                    null == r || i || e.push({ pipWindow: t, participant: n, stream: r });
                }),
            e
        );
    }
    function C(e) {
        let t = e.pipWindow.id,
            n = e.participant?.id,
            i = v(e),
            s = `${t}${n ?? ""}`;
        return (0, r.jsx)(o.Drp, { id: s, label: i, action: () => y(e) }, s);
    }
    return (0, r.jsx)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "pip-menu",
        "aria-label": "switch PIP",
        onClose: t,
        onSelect: h,
        children: N().map(C),
    });
}
let T = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        l = i.useRef(null),
        u = Array.from((0, s.bG)([p.A], () => p.A.pipWindows).values()).filter((e) => e.component !== m.o1q.ACTIVITY),
        c = (0, s.yK)([f.A], () => f.A.getAllActiveStreamsForChannel(t)).filter(
            (e) => e.ownerId !== h.default.getCurrentUser()?.id && e.channelId === t,
        ),
        d = (1 === u.length && u[0].component === m.o1q.ACTIVITY) || 0 === c.length,
        _ = 1 === u.length && c.length <= 1;
    return d || _
        ? null
        : (0, r.jsx)(o.YNO, {
              targetElementRef: l,
              position: "bottom",
              renderPopout: (e) => (0, r.jsx)(I, { voiceChannelId: t, pipWindows: u, idle: n, ...e }),
              children: (e) =>
                  (0, r.jsx)(o.DUT, {
                      className: A.ro,
                      ...e,
                      innerRef: l,
                      children: (0, r.jsx)(o.FHP, { size: "md", color: a.A.unsafe_rawColors.WHITE.css }),
                  }),
          });
};
