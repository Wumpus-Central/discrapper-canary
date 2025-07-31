(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(66546),
    a = n(442837),
    o = n(481060),
    s = n(570140),
    c = n(868781),
    u = n(122943),
    d = n(665149),
    p = n(670188),
    h = n(592125),
    f = n(158776),
    g = n(699516),
    m = n(594174),
    b = n(482798),
    _ = n(167762),
    O = n(151459),
    E = n(981631),
    y = n(388032),
    v = n(398435);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
        n = (0, a.e7)([g.Z], () => g.Z.getPendingCount() > 0),
        b = (0, o.dQu)(o.TVs.modules.chat.INPUT_ICON_SIZE),
        S = (function () {
            let [e, t] = i.useState(null),
                { showActivityTicker: n } = (0, O.Z)(),
                r = i.useRef({}),
                l = i.useRef(null);
            return (
                i.useEffect(() => {
                    if (!n) {
                        (t(null), null != l.current && (window.clearTimeout(l.current), (l.current = null)));
                        return;
                    }
                    let e = (e, t, n) => {
                            (null == r.current[e] && (r.current[e] = {}), null == n ? delete r.current[e][t] : (r.current[e][t] = n), 0 === Object.keys(r.current[e]).length && delete r.current[e]);
                        },
                        i = (e) => {
                            (null != l.current && (window.clearTimeout(l.current), (l.current = null)),
                                t(e),
                                (l.current = window.setTimeout(() => {
                                    (t(null), (l.current = null));
                                }, 10000)));
                        },
                        a = (t, n, l) => {
                            var a, o, s, c, u, d, p, f;
                            if (!g.Z.isFriend(t)) return !1;
                            let b = m.default.getUser(t);
                            if (null == b) return !1;
                            let _ = !1,
                                O = null;
                            if (null != n) {
                                let i = n.type;
                                if (
                                    null != i &&
                                    (function (e) {
                                        let t = e.type;
                                        return (t === E.IIU.PLAYING && null != e.application_id) || t === E.IIU.LISTENING || t === E.IIU.WATCHING;
                                    })(n)
                                ) {
                                    let l =
                                        i === E.IIU.WATCHING || i === E.IIU.LISTENING
                                            ? ''
                                                  .concat(i, '-')
                                                  .concat(null != (c = n.name) ? c : '', '-')
                                                  .concat(null != (u = n.state) ? u : '', '-')
                                                  .concat(null != (d = n.details) ? d : '')
                                            : ''.concat(i, '-').concat(null != (p = n.name) ? p : '');
                                    (null == (s = r.current[t]) ? void 0 : s.presence) !== l &&
                                        ((_ = !0),
                                        e(t, 'presence', l),
                                        (O = {
                                            user: b,
                                            activity: n
                                        }));
                                } else (null == (o = r.current[t]) ? void 0 : o.presence) != null && ((_ = !0), e(t, 'presence', null));
                            }
                            if (null != l) {
                                let n = h.Z.getChannel(l);
                                if (null != n) {
                                    let i = 'voice-'.concat(n.id);
                                    (null == (f = r.current[t]) ? void 0 : f.voice) !== i &&
                                        ((_ = !0),
                                        e(t, 'voice', i),
                                        (O = {
                                            user: b,
                                            voiceChannel: n
                                        }));
                                }
                            } else (null == (a = r.current[t]) ? void 0 : a.voice) != null && ((_ = !0), e(t, 'voice', null));
                            return (_ && null != O && i(O), _);
                        },
                        o = (e) => {
                            for (let t of e.updates) {
                                let e = t.user.id,
                                    n = f.Z.getPrimaryActivity(e);
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
                            (s.Z.unsubscribe('PRESENCE_UPDATES', o), s.Z.unsubscribe('VOICE_STATE_UPDATES', c), null != l.current && (window.clearTimeout(l.current), (l.current = null)));
                        }
                    );
                }, [n]),
                e
            );
        })(),
        N = i.useRef(null),
        T = (0, o.Yzy)(S, {
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
                className: v.container,
                children: T((e, t) =>
                    null == t
                        ? null
                        : (0, r.jsx)(p.Z, {
                              targetElementRef: N,
                              position: 'bottom',
                              align: 'left',
                              userId: t.user.id,
                              children: (n) => {
                                  var i;
                                  return (0, r.jsxs)(
                                      l.animated.div,
                                      C(
                                          I(
                                              {
                                                  ref: N,
                                                  className: v.activityWrapper,
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
                                                            textVariant: 'text-xs/medium',
                                                            textClassName: v.statusText
                                                        })
                                                      : (0, r.jsx)(c.Z, {
                                                            activity: t.activity,
                                                            textVariant: 'text-xs/medium',
                                                            textClassName: v.statusText
                                                        })
                                              ]
                                          }
                                      )
                                  );
                              }
                          })
                )
            }),
            (0, r.jsx)(_.Or, {
                popoutPosition: 'bottom',
                popoutAlign: 'left',
                children: (e, i, l, a) =>
                    (0, r.jsx)(
                        d.JO,
                        C(I({}, l), {
                            ref: a,
                            className: t,
                            onClick: e,
                            icon: o.iFz,
                            iconSize: b,
                            'aria-label': y.intl.string(y.t.TdEu5e),
                            tooltip: i ? null : y.intl.string(y.t.TdEu5e),
                            selected: i,
                            showBadge: n
                        })
                    )
            })
        ]
    });
}
function N(e) {
    let { className: t } = e,
        { enableTopNavButton: n } = (0, b.Cq)({ location: 'friends-button' });
    return n ? (0, r.jsx)(S, { className: t }) : null;
}
