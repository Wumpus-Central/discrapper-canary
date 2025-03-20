n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(642128),
    a = n(442837),
    o = n(481060),
    s = n(570140),
    c = n(868781),
    u = n(540059),
    d = n(665149),
    p = n(158776),
    h = n(699516),
    f = n(594174),
    g = n(482798),
    m = n(167762),
    b = n(981631),
    _ = n(388032),
    E = n(715967);
function O(e) {
    let { className: t } = e,
        n = (0, a.e7)([h.Z], () => h.Z.getPendingCount() > 0),
        g = (0, u.Q3)('FriendsButton'),
        O = (0, o.dQu)(o.TVs.modules.chat.INPUT_ICON_SIZE),
        N = (function () {
            let [e, t] = i.useState(null),
                n = i.useRef({}),
                r = i.useRef(null);
            return (
                i.useEffect(() => {
                    let e = (e) => {
                        if ('PRESENCE_UPDATES' !== e.type) return;
                        let i = null;
                        for (let t of e.updates) {
                            var l, a;
                            let e = t.user.id;
                            if (!h.Z.isFriend(e)) continue;
                            let r = f.default.getUser(e);
                            if (null == r) continue;
                            let o = p.Z.getPrimaryActivity(e);
                            if (null == o) {
                                null != n.current[e] && delete n.current[e];
                                continue;
                            }
                            let s = o.type;
                            if (null != s && (a = s) !== b.IIU.PLAYING && a !== b.IIU.LISTENING && a !== b.IIU.WATCHING) {
                                null != n.current[e] && delete n.current[e];
                                continue;
                            }
                            let c = ''.concat(s, '-').concat(null !== (l = o.name) && void 0 !== l ? l : '');
                            if (n.current[e] !== c) {
                                (n.current[e] = c),
                                    (i = {
                                        user: r,
                                        activity: o
                                    });
                                break;
                            }
                        }
                        null != i &&
                            (null != r.current && (window.clearTimeout(r.current), (r.current = null)),
                            t(i),
                            (r.current = window.setTimeout(() => {
                                t(null), (r.current = null);
                            }, 5000)));
                    };
                    return (
                        s.Z.subscribe('PRESENCE_UPDATES', e),
                        () => {
                            s.Z.unsubscribe('PRESENCE_UPDATES', e), null != r.current && (window.clearTimeout(r.current), (r.current = null));
                        }
                    );
                }, []),
                e
            );
        })(),
        v = (0, o.Yzy)(N, {
            keys: (e) => (null != e ? ''.concat(e.user.id, '-').concat(e.activity.state, ':').concat(e.activity.details, ':').concat(e.activity.name) : 'none'),
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
                className: E.container,
                children: v((e, t) => {
                    var n;
                    return null == t
                        ? null
                        : (0, r.jsxs)(l.animated.div, {
                              className: E.activityWrapper,
                              style: e,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-xs/semibold',
                                      children: null !== (n = t.user.globalName) && void 0 !== n ? n : t.user.username
                                  }),
                                  (0, r.jsx)(c.Z, {
                                      activity: t.activity,
                                      textVariant: 'text-xs/medium'
                                  })
                              ]
                          });
                })
            }),
            (0, r.jsx)(m.O, {
                popoutPosition: 'bottom',
                popoutAlign: 'left',
                children: (e, i, l) => {
                    var a, s;
                    return (0, r.jsx)(
                        d.JO,
                        ((a = (function (e) {
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
                        })({}, l)),
                        (s = s =
                            {
                                className: t,
                                onClick: e,
                                icon: o.iFz,
                                iconSize: g ? O : void 0,
                                'aria-label': _.NW.string(_.t.TdEu5e),
                                tooltip: i ? null : _.NW.string(_.t.TdEu5e),
                                selected: i,
                                showBadge: n
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        a)
                    );
                }
            })
        ]
    });
}
function N(e) {
    let { className: t } = e,
        { enabled: n } = (0, g.C)({ location: 'friends-button' });
    return n ? (0, r.jsx)(O, { className: t }) : null;
}
