var i = r(653041);
var a = r(47120);
var s = r(200651);
r(192379);
var o = r(442837),
    l = r(692547),
    u = r(481060),
    c = r(475179),
    d = r(519938),
    f = r(317381),
    _ = r(812206),
    h = r(358221),
    p = r(199902),
    m = r(366050),
    g = r(594174),
    E = r(981631),
    v = r(354459),
    I = r(388032),
    T = r(880397);
function b(e) {
    let { closePopout: n, idle: r, pipWindows: i, voiceChannelId: a, onSelect: l } = e;
    r && n();
    let g = (0, o.e7)([f.ZP], () => f.ZP.getSelfEmbeddedActivityForChannel(a)),
        T = (0, o.e7)([m.Z], () => m.Z.pipWindow),
        b = (0, o.e7)([h.Z], () => h.Z.getSelectedParticipant(a)),
        y = (0, o.e7)([h.Z], () => h.Z.getStreamParticipants(a));
    function S(e) {
        (null == T ? void 0 : T.id) !== e.pipWindow.id && (0, d.k3)(e.pipWindow.id);
        let n = e.participant;
        null != n && n.type !== v.fO.ACTIVITY && c.Z.selectParticipant(a, n.id);
    }
    function A(e) {
        if (e.pipWindow.component === E.NYg.EMBED_IFRAME && null != g) {
            var n;
            let e = null === (n = _.Z.getApplication(g.applicationId)) || void 0 === n ? void 0 : n.name;
            return null == e ? I.intl.string(I.t['8raC1N']) : I.intl.formatToPlainString(I.t['a9+V+f'], { activityName: e });
        }
        return null == e.participant || e.participant.type !== v.fO.STREAM ? I.intl.string(I.t['ng/Kws']) : I.intl.formatToPlainString(I.t.sqmFRk, { username: e.participant.userNick });
    }
    function N() {
        let e = [],
            n = i.find((e) => e.component === E.NYg.VIDEO);
        return (
            null != n &&
                y.forEach((r) => {
                    let i = p.Z.getActiveStreamForApplicationStream(r.stream),
                        a = r.id === (null == b ? void 0 : b.id) && (null == T ? void 0 : T.id) === n.id;
                    null != i &&
                        !a &&
                        e.push({
                            pipWindow: n,
                            participant: r,
                            stream: i
                        });
                }),
            e
        );
    }
    function C(e) {
        var n;
        let r = e.pipWindow.id,
            i = null === (n = e.participant) || void 0 === n ? void 0 : n.id,
            a = A(e),
            o = ''.concat(r).concat(null != i ? i : '');
        return (0, s.jsx)(
            u.MenuItem,
            {
                id: o,
                label: a,
                action: () => S(e)
            },
            o
        );
    }
    return (0, s.jsx)(u.Menu, {
        navId: 'pip-menu',
        'aria-label': 'switch PIP',
        onClose: n,
        onSelect: l,
        children: N().map(C)
    });
}
function y(e) {
    let { voiceChannelId: n, idle: r } = e,
        i = Array.from((0, o.e7)([m.Z], () => m.Z.pipWindows).values()).filter((e) => e.component !== E.NYg.EMBED_IFRAME),
        a = (0, o.Wu)([p.Z], () => p.Z.getAllActiveStreamsForChannel(n)).filter((e) => {
            var r;
            return e.ownerId !== (null === (r = g.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) && e.channelId === n;
        }),
        c = (1 === i.length && i[0].component === E.NYg.EMBED_IFRAME) || 0 === a.length,
        d = 1 === i.length && a.length <= 1;
    return c || d
        ? null
        : (0, s.jsx)(u.Popout, {
              position: 'bottom',
              renderPopout: (e) =>
                  (0, s.jsx)(b, {
                      voiceChannelId: n,
                      pipWindows: i,
                      idle: r,
                      ...e
                  }),
              children: (e) =>
                  (0, s.jsx)(u.Clickable, {
                      className: T.menuIcon,
                      ...e,
                      children: (0, s.jsx)(u.MoreVerticalIcon, {
                          size: 'md',
                          color: l.Z.unsafe_rawColors.WHITE_500.css
                      })
                  })
          });
}
n.Z = y;
