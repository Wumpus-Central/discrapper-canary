n.d(t, { Z: () => T }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(200100),
    a = n(442837),
    o = n(481060),
    s = n(570140),
    c = n(868781),
    u = n(122943),
    d = n(540059),
    p = n(665149),
    h = n(670188),
    f = n(592125),
    g = n(158776),
    m = n(699516),
    b = n(594174),
    _ = n(482798),
    E = n(167762),
    O = n(151459),
    N = n(981631),
    y = n(388032),
    I = n(398435);
function v(e) {
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
function C(e, t) {
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
function S(e) {
    let { className: t } = e,
        n = (0, a.e7)([m.Z], () => m.Z.getPendingCount() > 0),
        _ = (0, d.Q3)('FriendsButton'),
        S = (0, o.dQu)(o.TVs.modules.chat.INPUT_ICON_SIZE),
        T = (function () {
            let [e, t] = i.useState(null),
                { showActivityTicker: n } = (0, O.Z)(),
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
                        a = (t, n, l) => {
                            var a, o, s, c, u, d, p, h;
                            if (!m.Z.isFriend(t)) return !1;
                            let g = b.default.getUser(t);
                            if (null == g) return !1;
                            let _ = !1,
                                E = null;
                            if (null != n) {
                                let i = n.type;
                                if (
                                    null != i &&
                                    (function (e) {
                                        let t = e.type;
                                        return (t === N.IIU.PLAYING && null != e.application_id) || t === N.IIU.LISTENING || t === N.IIU.WATCHING;
                                    })(n)
                                ) {
                                    let l =
                                        i === N.IIU.WATCHING || i === N.IIU.LISTENING
                                            ? ''
                                                  .concat(i, '-')
                                                  .concat(null != (c = n.name) ? c : '', '-')
                                                  .concat(null != (u = n.state) ? u : '', '-')
                                                  .concat(null != (d = n.details) ? d : '')
                                            : ''.concat(i, '-').concat(null != (p = n.name) ? p : '');
                                    (null == (s = r.current[t]) ? void 0 : s.presence) !== l &&
                                        ((_ = !0),
                                        e(t, 'presence', l),
                                        (E = {
                                            user: g,
                                            activity: n
                                        }));
                                } else (null == (o = r.current[t]) ? void 0 : o.presence) != null && ((_ = !0), e(t, 'presence', null));
                            }
                            if (null != l) {
                                let n = f.Z.getChannel(l);
                                if (null != n) {
                                    let i = 'voice-'.concat(n.id);
                                    (null == (h = r.current[t]) ? void 0 : h.voice) !== i &&
                                        ((_ = !0),
                                        e(t, 'voice', i),
                                        (E = {
                                            user: g,
                                            voiceChannel: n
                                        }));
                                }
                            } else (null == (a = r.current[t]) ? void 0 : a.voice) != null && ((_ = !0), e(t, 'voice', null));
                            return _ && null != E && i(E), _;
                        },
                        o = (e) => {
                            for (let t of e.updates) {
                                let e = t.user.id,
                                    n = g.Z.getPrimaryActivity(e);
                                if (a(e, n)) break;
                            }
                        },
                        c = (e) => {
                            for (let t of e.voiceStates) if (a(t.userId, void 0, t.channelId)) break;
                        };
                    return (
                        s.Z.subscribe('PRESENCE_UPDATES', o),
                        s.Z.subscribe('VOICE_STATE_UPDATES', c),
                        () => {
                            s.Z.unsubscribe('PRESENCE_UPDATES', o), s.Z.unsubscribe('VOICE_STATE_UPDATES', c), null != l.current && (window.clearTimeout(l.current), (l.current = null));
                        }
                    );
                }, [n]),
                e
            );
        })(),
        P = (0, o.Yzy)(T, {
            keys: (e) => {
                var t, n, r;
                return null != e
                    ? null != e.voiceChannel
                        ? ''.concat(e.user.id, '-voice-').concat(e.voiceChannel.id)
                        : ''
                              .concat(e.user.id, '-')
                              .concat(null == (t = e.activity) ? void 0 : t.state, ':')
                              .concat(null == (n = e.activity) ? void 0 : n.details, ':')
                              .concat(null == (r = e.activity) ? void 0 : r.name)
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
                children: P((e, t) =>
                    null == t
                        ? null
                        : (0, r.jsx)(h.Z, {
                              position: 'bottom',
                              align: 'left',
                              userId: t.user.id,
                              children: (n) => {
                                  var i;
                                  return (0, r.jsxs)(
                                      l.animated.div,
                                      C(
                                          v(
                                              {
                                                  className: I.activityWrapper,
                                                  style: e
                                              },
                                              n
                                          ),
                                          {
                                              children: [
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-xs/semibold',
                                                      children: null != (i = t.user.globalName) ? i : t.user.username
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
            (0, r.jsx)(E.Or, {
                popoutPosition: 'bottom',
                popoutAlign: 'left',
                children: (e, i, l) =>
                    (0, r.jsx)(
                        p.JO,
                        C(v({}, l), {
                            className: t,
                            onClick: e,
                            icon: o.iFz,
                            iconSize: _ ? S : void 0,
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
function T(e) {
    let { className: t } = e,
        { enabled: n } = (0, _.C)({ location: 'friends-button' });
    return n ? (0, r.jsx)(S, { className: t }) : null;
}
