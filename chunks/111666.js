n.d(t, { Z: () => P }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(642128),
    o = n(442837),
    a = n(481060),
    s = n(570140),
    c = n(868781),
    u = n(122943),
    d = n(540059),
    p = n(665149),
    h = n(184301),
    f = n(347475),
    g = n(592125),
    m = n(158776),
    b = n(699516),
    _ = n(594174),
    E = n(482798),
    O = n(167762),
    N = n(151459),
    v = n(981631),
    y = n(388032),
    I = n(715967);
function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let { className: t } = e,
        n = (0, o.e7)([b.Z], () => b.Z.getPendingCount() > 0),
        E = (0, d.Q3)('FriendsButton'),
        T = (0, a.dQu)(a.TVs.modules.chat.INPUT_ICON_SIZE),
        P = (function () {
            let [e, t] = i.useState(null),
                { showActivityTicker: n } = (0, N.Z)(),
                r = i.useRef({}),
                l = i.useRef(null);
            return (
                i.useEffect(() => {
                    if (!n) {
                        t(null), null != l.current && (window.clearTimeout(l.current), (l.current = null));
                        return;
                    }
                    let e = (e, t, n) => {
                            null == r.current[e] && (r.current[e] = {}), null == n ? delete r.current[e][t] : (r.current[e][t] = n), 0 === Object.keys(r.current[e]).length && delete r.current[e];
                        },
                        i = (e) => {
                            null != l.current && (window.clearTimeout(l.current), (l.current = null)),
                                t(e),
                                (l.current = window.setTimeout(() => {
                                    t(null), (l.current = null);
                                }, 10000));
                        },
                        o = (t, n, l) => {
                            var o, a, s, c, u, d, p, h;
                            if (!b.Z.isFriend(t)) return !1;
                            let f = _.default.getUser(t);
                            if (null == f) return !1;
                            let m = !1,
                                E = null;
                            if (null != n) {
                                let i = n.type;
                                if (
                                    null != i &&
                                    (function (e) {
                                        let t = e.type;
                                        return (t === v.IIU.PLAYING && null != e.application_id) || t === v.IIU.LISTENING || t === v.IIU.WATCHING;
                                    })(n)
                                ) {
                                    let l =
                                        i === v.IIU.WATCHING || i === v.IIU.LISTENING
                                            ? ''
                                                  .concat(i, '-')
                                                  .concat(null !== (c = n.name) && void 0 !== c ? c : '', '-')
                                                  .concat(null !== (u = n.state) && void 0 !== u ? u : '', '-')
                                                  .concat(null !== (d = n.details) && void 0 !== d ? d : '')
                                            : ''.concat(i, '-').concat(null !== (p = n.name) && void 0 !== p ? p : '');
                                    (null === (s = r.current[t]) || void 0 === s ? void 0 : s.presence) !== l &&
                                        ((m = !0),
                                        e(t, 'presence', l),
                                        (E = {
                                            user: f,
                                            activity: n
                                        }));
                                } else (null === (a = r.current[t]) || void 0 === a ? void 0 : a.presence) != null && ((m = !0), e(t, 'presence', null));
                            }
                            if (null != l) {
                                let n = g.Z.getChannel(l);
                                if (null != n) {
                                    let i = 'voice-'.concat(n.id);
                                    (null === (h = r.current[t]) || void 0 === h ? void 0 : h.voice) !== i &&
                                        ((m = !0),
                                        e(t, 'voice', i),
                                        (E = {
                                            user: f,
                                            voiceChannel: n
                                        }));
                                }
                            } else (null === (o = r.current[t]) || void 0 === o ? void 0 : o.voice) != null && ((m = !0), e(t, 'voice', null));
                            return m && null != E && i(E), m;
                        },
                        a = (e) => {
                            for (let t of e.updates) {
                                let e = t.user.id,
                                    n = m.Z.getPrimaryActivity(e);
                                if (o(e, n)) break;
                            }
                        },
                        c = (e) => {
                            for (let t of e.voiceStates) if (o(t.userId, void 0, t.channelId)) break;
                        };
                    return (
                        s.Z.subscribe('PRESENCE_UPDATES', a),
                        s.Z.subscribe('VOICE_STATE_UPDATES', c),
                        () => {
                            s.Z.unsubscribe('PRESENCE_UPDATES', a), s.Z.unsubscribe('VOICE_STATE_UPDATES', c), null != l.current && (window.clearTimeout(l.current), (l.current = null));
                        }
                    );
                }, [n]),
                e
            );
        })(),
        j = (0, a.Yzy)(P, {
            keys: (e) => {
                var t, n, r;
                return null != e
                    ? null != e.voiceChannel
                        ? ''.concat(e.user.id, '-voice-').concat(e.voiceChannel.id)
                        : ''
                              .concat(e.user.id, '-')
                              .concat(null === (t = e.activity) || void 0 === t ? void 0 : t.state, ':')
                              .concat(null === (n = e.activity) || void 0 === n ? void 0 : n.details, ':')
                              .concat(null === (r = e.activity) || void 0 === r ? void 0 : r.name)
                    : 'none';
            },
            from: {
                opacity: 0,
                transform: 'translateY(32px)'
            },
            enter: {
                opacity: 1,
                transform: 'translateY(0px)'
            },
            leave: {
                opacity: 0,
                transform: 'translateY(-32px)'
            },
            config: {
                tension: 300,
                friction: 30
            }
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: I.container,
                children: j((e, t) =>
                    null == t
                        ? null
                        : (0, r.jsx)(a.yRy, {
                              position: 'bottom',
                              align: 'left',
                              preload: () => (0, h.Z)(t.user.id, t.user.getAvatarURL(void 0, 80)),
                              renderPopout: (e) => (0, r.jsx)(f.Z, S(C({}, e), { userId: t.user.id })),
                              children: (n) => {
                                  var i;
                                  return (0, r.jsxs)(
                                      l.animated.div,
                                      S(
                                          C(
                                              {
                                                  className: I.activityWrapper,
                                                  style: e
                                              },
                                              n
                                          ),
                                          {
                                              children: [
                                                  (0, r.jsx)(a.Text, {
                                                      variant: 'text-xs/semibold',
                                                      children: null !== (i = t.user.globalName) && void 0 !== i ? i : t.user.username
                                                  }),
                                                  null != t.voiceChannel
                                                      ? (0, r.jsx)(u.Z, {
                                                            channel: t.voiceChannel,
                                                            textVariant: 'text-xs/medium'
                                                        })
                                                      : (0, r.jsx)(c.Z, {
                                                            activity: t.activity,
                                                            textVariant: 'text-xs/medium'
                                                        })
                                              ]
                                          }
                                      )
                                  );
                              }
                          })
                )
            }),
            (0, r.jsx)(O.O, {
                popoutPosition: 'bottom',
                popoutAlign: 'left',
                children: (e, i, l) =>
                    (0, r.jsx)(
                        p.JO,
                        S(C({}, l), {
                            className: t,
                            onClick: e,
                            icon: a.iFz,
                            iconSize: E ? T : void 0,
                            'aria-label': y.NW.string(y.t.TdEu5e),
                            tooltip: i ? null : y.NW.string(y.t.TdEu5e),
                            selected: i,
                            showBadge: n
                        })
                    )
            })
        ]
    });
}
function P(e) {
    let { className: t } = e,
        { enabled: n } = (0, E.C)({ location: 'friends-button' });
    return n ? (0, r.jsx)(T, { className: t }) : null;
}
