var i = r(653041);
var a = r(47120);
var o = r(200651);
r(192379);
var s = r(442837),
    l = r(692547),
    u = r(481060),
    c = r(475179),
    d = r(519938),
    f = r(317381),
    p = r(812206),
    h = r(358221),
    _ = r(199902),
    m = r(366050),
    g = r(594174),
    E = r(981631),
    v = r(354459),
    y = r(388032),
    b = r(880397);
function I(e) {
    let { closePopout: n, idle: r, pipWindows: i, voiceChannelId: a, onSelect: l } = e;
    r && n();
    let g = (0, s.e7)([f.ZP], () => f.ZP.getSelfEmbeddedActivityForChannel(a)),
        b = (0, s.e7)([m.Z], () => m.Z.pipWindow),
        I = (0, s.e7)([h.Z], () => h.Z.getSelectedParticipant(a)),
        T = (0, s.e7)([h.Z], () => h.Z.getStreamParticipants(a));
    function S(e) {
        (null == b ? void 0 : b.id) !== e.pipWindow.id && (0, d.k3)(e.pipWindow.id);
        let n = e.participant;
        null != n && n.type !== v.fO.ACTIVITY && c.Z.selectParticipant(a, n.id);
    }
    function A(e) {
        if (e.pipWindow.component === E.NYg.EMBED_IFRAME && null != g) {
            var n;
            let e = null === (n = p.Z.getApplication(g.applicationId)) || void 0 === n ? void 0 : n.name;
            return null == e ? y.intl.string(y.t['8raC1N']) : y.intl.formatToPlainString(y.t['a9+V+f'], { activityName: e });
        }
        return null == e.participant || e.participant.type !== v.fO.STREAM ? y.intl.string(y.t['ng/Kws']) : y.intl.formatToPlainString(y.t.sqmFRk, { username: e.participant.userNick });
    }
    function C() {
        let e = [],
            n = i.find((e) => e.component === E.NYg.VIDEO);
        return (
            null != n &&
                T.forEach((r) => {
                    let i = _.Z.getActiveStreamForApplicationStream(r.stream),
                        a = r.id === (null == I ? void 0 : I.id) && (null == b ? void 0 : b.id) === n.id;
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
    function N(e) {
        var n;
        let r = e.pipWindow.id,
            i = null === (n = e.participant) || void 0 === n ? void 0 : n.id,
            a = A(e),
            s = ''.concat(r).concat(null != i ? i : '');
        return (0, o.jsx)(
            u.MenuItem,
            {
                id: s,
                label: a,
                action: () => S(e)
            },
            s
        );
    }
    return (0, o.jsx)(u.Menu, {
        navId: 'pip-menu',
        'aria-label': 'switch PIP',
        onClose: n,
        onSelect: l,
        children: C().map(N)
    });
}
function T(e) {
    let { voiceChannelId: n, idle: r } = e,
        i = Array.from((0, s.e7)([m.Z], () => m.Z.pipWindows).values()).filter((e) => e.component !== E.NYg.EMBED_IFRAME),
        a = (0, s.Wu)([_.Z], () => _.Z.getAllActiveStreamsForChannel(n)).filter((e) => {
            var r;
            return e.ownerId !== (null === (r = g.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) && e.channelId === n;
        }),
        c = (1 === i.length && i[0].component === E.NYg.EMBED_IFRAME) || 0 === a.length,
        d = 1 === i.length && a.length <= 1;
    return c || d
        ? null
        : (0, o.jsx)(u.Popout, {
              position: 'bottom',
              renderPopout: (e) =>
                  (0, o.jsx)(I, {
                      voiceChannelId: n,
                      pipWindows: i,
                      idle: r,
                      ...e
                  }),
              children: (e) =>
                  (0, o.jsx)(u.Clickable, {
                      className: b.menuIcon,
                      ...e,
                      children: (0, o.jsx)(u.MoreVerticalIcon, {
                          size: 'md',
                          color: l.Z.unsafe_rawColors.WHITE_500.css
                      })
                  })
          });
}
n.Z = T;
