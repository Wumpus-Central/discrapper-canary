n.d(t, { Z: () => y }), n(653041), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(475179),
    l = n(519938),
    u = n(317381),
    c = n(812206),
    d = n(358221),
    f = n(199902),
    _ = n(366050),
    p = n(594174),
    h = n(981631),
    m = n(354459),
    g = n(388032),
    E = n(154681);
function v(e) {
    let { closePopout: t, idle: n, pipWindows: a, voiceChannelId: p, onSelect: E } = e;
    n && t();
    let v = (0, r.e7)([u.ZP], () => u.ZP.getSelfEmbeddedActivityForChannel(p)),
        y = (0, r.e7)([_.Z], () => _.Z.pipWindow),
        I = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(p)),
        T = (0, r.e7)([d.Z], () => d.Z.getStreamParticipants(p));
    function b(e) {
        (null == y ? void 0 : y.id) !== e.pipWindow.id && (0, l.k3)(e.pipWindow.id);
        let t = e.participant;
        null != t && t.type !== m.fO.ACTIVITY && o.Z.selectParticipant(p, t.id);
    }
    function S(e) {
        if (e.pipWindow.component === h.NYg.EMBED_IFRAME && null != v) {
            var t;
            let e = null === (t = c.Z.getApplication(v.applicationId)) || void 0 === t ? void 0 : t.name;
            return null == e ? g.intl.string(g.t['8raC1N']) : g.intl.formatToPlainString(g.t['a9+V+f'], { activityName: e });
        }
        return null == e.participant || e.participant.type !== m.fO.STREAM ? g.intl.string(g.t['ng/Kws']) : g.intl.formatToPlainString(g.t.sqmFRk, { username: e.participant.userNick });
    }
    function A() {
        let e = [],
            t = a.find((e) => e.component === h.NYg.VIDEO);
        return (
            null != t &&
                T.forEach((n) => {
                    let i = f.Z.getActiveStreamForApplicationStream(n.stream),
                        r = n.id === (null == I ? void 0 : I.id) && (null == y ? void 0 : y.id) === t.id;
                    null == i ||
                        r ||
                        e.push({
                            pipWindow: t,
                            participant: n,
                            stream: i
                        });
                }),
            e
        );
    }
    function N(e) {
        var t;
        let n = e.pipWindow.id,
            r = null === (t = e.participant) || void 0 === t ? void 0 : t.id,
            a = S(e),
            o = ''.concat(n).concat(null != r ? r : '');
        return (0, i.jsx)(
            s.sNh,
            {
                id: o,
                label: a,
                action: () => b(e)
            },
            o
        );
    }
    return (0, i.jsx)(s.v2r, {
        navId: 'pip-menu',
        'aria-label': 'switch PIP',
        onClose: t,
        onSelect: E,
        children: A().map(N)
    });
}
let y = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        o = Array.from((0, r.e7)([_.Z], () => _.Z.pipWindows).values()).filter((e) => e.component !== h.NYg.EMBED_IFRAME),
        l = (0, r.Wu)([f.Z], () => f.Z.getAllActiveStreamsForChannel(t)).filter((e) => {
            var n;
            return e.ownerId !== (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && e.channelId === t;
        }),
        u = (1 === o.length && o[0].component === h.NYg.EMBED_IFRAME) || 0 === l.length,
        c = 1 === o.length && l.length <= 1;
    return u || c
        ? null
        : (0, i.jsx)(s.yRy, {
              position: 'bottom',
              renderPopout: (e) =>
                  (0, i.jsx)(v, {
                      voiceChannelId: t,
                      pipWindows: o,
                      idle: n,
                      ...e
                  }),
              children: (e) =>
                  (0, i.jsx)(s.P3F, {
                      className: E.menuIcon,
                      ...e,
                      children: (0, i.jsx)(s.Huf, {
                          size: 'md',
                          color: a.Z.unsafe_rawColors.WHITE_500.css
                      })
                  })
          });
};
