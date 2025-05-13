n.d(t, { Z: () => S }), n(539854), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(692547),
    o = n(481060),
    s = n(475179),
    l = n(519938),
    c = n(317381),
    u = n(812206),
    d = n(358221),
    f = n(199902),
    _ = n(366050),
    p = n(594174),
    h = n(981631),
    m = n(354459),
    g = n(388032),
    E = n(992955);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { closePopout: t, idle: n, pipWindows: a, voiceChannelId: p, onSelect: E } = e;
    n && t();
    let b = (0, i.e7)([c.ZP], () => c.ZP.getCurrentEmbeddedActivity()),
        y = (0, i.e7)([_.Z], () => _.Z.pipWindow),
        O = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(p)),
        v = (0, i.e7)([d.Z], () => d.Z.getStreamParticipants(p));
    function I(e) {
        (null == y ? void 0 : y.id) !== e.pipWindow.id && (0, l.k3)(e.pipWindow.id);
        let t = e.participant;
        null != t && t.type !== m.fO.ACTIVITY && s.Z.selectParticipant(p, t.id);
    }
    function S(e) {
        if (e.pipWindow.component === h.NYg.EMBED_IFRAME && null != b) {
            var t;
            let e = null == (t = u.Z.getApplication(b.applicationId)) ? void 0 : t.name;
            return null == e ? g.intl.string(g.t['8raC1N']) : g.intl.formatToPlainString(g.t['a9+V+f'], { activityName: e });
        }
        return null == e.participant || e.participant.type !== m.fO.STREAM ? g.intl.string(g.t['ng/Kws']) : g.intl.formatToPlainString(g.t.sqmFRk, { username: e.participant.userNick });
    }
    function T() {
        let e = [],
            t = a.find((e) => e.component === h.NYg.VIDEO);
        return (
            null != t &&
                v.forEach((n) => {
                    let r = f.Z.getActiveStreamForApplicationStream(n.stream),
                        i = n.id === (null == O ? void 0 : O.id) && (null == y ? void 0 : y.id) === t.id;
                    null == r ||
                        i ||
                        e.push({
                            pipWindow: t,
                            participant: n,
                            stream: r
                        });
                }),
            e
        );
    }
    function A(e) {
        var t;
        let n = e.pipWindow.id,
            i = null == (t = e.participant) ? void 0 : t.id,
            a = S(e),
            s = ''.concat(n).concat(null != i ? i : '');
        return (0, r.jsx)(
            o.sNh,
            {
                id: s,
                label: a,
                action: () => I(e)
            },
            s
        );
    }
    return (0, r.jsx)(o.v2r, {
        navId: 'pip-menu',
        'aria-label': 'switch PIP',
        onClose: t,
        onSelect: E,
        children: T().map(A)
    });
}
let S = function (e) {
    let { voiceChannelId: t, idle: n } = e,
        s = Array.from((0, i.e7)([_.Z], () => _.Z.pipWindows).values()).filter((e) => e.component !== h.NYg.EMBED_IFRAME),
        l = (0, i.Wu)([f.Z], () => f.Z.getAllActiveStreamsForChannel(t)).filter((e) => {
            var n;
            return e.ownerId !== (null == (n = p.default.getCurrentUser()) ? void 0 : n.id) && e.channelId === t;
        }),
        c = (1 === s.length && s[0].component === h.NYg.EMBED_IFRAME) || 0 === l.length,
        u = 1 === s.length && l.length <= 1;
    return c || u
        ? null
        : (0, r.jsx)(o.yRy, {
              position: 'bottom',
              renderPopout: (e) =>
                  (0, r.jsx)(
                      I,
                      y(
                          {
                              voiceChannelId: t,
                              pipWindows: s,
                              idle: n
                          },
                          e
                      )
                  ),
              children: (e) =>
                  (0, r.jsx)(
                      o.P3F,
                      v(y({ className: E.menuIcon }, e), {
                          children: (0, r.jsx)(o.Huf, {
                              size: 'md',
                              color: a.Z.unsafe_rawColors.WHITE_500.css
                          })
                      })
                  )
          });
};
