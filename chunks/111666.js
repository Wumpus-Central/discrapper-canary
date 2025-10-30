n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(13941),
    a = n(442837),
    s = n(481060),
    o = n(570140),
    c = n(868781),
    u = n(122943),
    d = n(665149),
    p = n(670188),
    f = n(592125),
    m = n(158776),
    h = n(699516),
    g = n(594174),
    _ = n(482798),
    b = n(167762),
    E = n(151459),
    O = n(981631),
    I = n(388032),
    y = n(319763);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        n = (0, a.e7)([h.Z], () => h.Z.getPendingCount() > 0),
        _ = (0, s.dQu)(s.TVs.modules.chat.INPUT_ICON_SIZE),
        S = (function () {
            let [e, t] = i.useState(null),
                { showActivityTicker: n } = (0, E.Z)(),
                r = i.useRef({}),
                l = i.useRef(null);
            return (
                i.useEffect(() => {
                    if (!n) {
                        t(null), null != l.current && (window.clearTimeout(l.current), (l.current = null));
                        return;
                    }
                    let e = (e, t, n) => {
                            null == r.current[e] && (r.current[e] = {}),
                                null == n ? delete r.current[e][t] : (r.current[e][t] = n),
                                0 === Object.keys(r.current[e]).length && delete r.current[e];
                        },
                        i = (n, i, a) => {
                            var s, o, c, u, d, p, m, _, b;
                            if (!h.Z.isFriend(n)) return !1;
                            let E = g.default.getUser(n);
                            if (null == E) return !1;
                            let I = !1,
                                y = null;
                            if (null != i) {
                                let t = i.type;
                                if (
                                    null != t &&
                                    (function (e) {
                                        let t = e.type;
                                        return (
                                            (t === O.IIU.PLAYING && null != e.application_id) ||
                                            t === O.IIU.LISTENING ||
                                            t === O.IIU.WATCHING
                                        );
                                    })(i)
                                ) {
                                    let l =
                                        t === O.IIU.WATCHING || t === O.IIU.LISTENING
                                            ? ""
                                                  .concat(t, "-")
                                                  .concat(null != (u = i.name) ? u : "", "-")
                                                  .concat(null != (d = i.state) ? d : "", "-")
                                                  .concat(null != (p = i.details) ? p : "")
                                            : "".concat(t, "-").concat(null != (m = i.name) ? m : "");
                                    (null == (c = r.current[n]) ? void 0 : c.presence) !== l &&
                                        ((I = !0),
                                        e(n, "presence", l),
                                        (y = {
                                            user: E,
                                            activity: i,
                                        }));
                                } else
                                    (null == (o = r.current[n]) ? void 0 : o.presence) != null &&
                                        ((I = !0), e(n, "presence", null));
                            }
                            if (null != a) {
                                let t = f.Z.getChannel(a);
                                if (null != t) {
                                    let i = "voice-".concat(t.id);
                                    (null == (_ = r.current[n]) ? void 0 : _.voice) !== i &&
                                        ((I = !0),
                                        e(n, "voice", i),
                                        (y = {
                                            user: E,
                                            voiceChannel: t,
                                        }));
                                }
                            } else
                                (null == (s = r.current[n]) ? void 0 : s.voice) != null &&
                                    ((I = !0), e(n, "voice", null));
                            return (
                                I &&
                                    null != y &&
                                    ((b = y),
                                    null != l.current && (window.clearTimeout(l.current), (l.current = null)),
                                    t(b),
                                    (l.current = window.setTimeout(() => {
                                        t(null), (l.current = null);
                                    }, 10000))),
                                I
                            );
                        },
                        a = (e) => {
                            for (let t of e.updates) {
                                let e = t.user.id,
                                    n = m.Z.getPrimaryActivity(e);
                                if (i(e, n)) break;
                            }
                        },
                        s = (e) => {
                            for (let t of e.voiceStates) if (i(t.userId, void 0, t.channelId)) break;
                        };
                    return (
                        o.Z.subscribe("PRESENCE_UPDATES", a),
                        o.Z.subscribe("VOICE_STATE_UPDATES", s),
                        () => {
                            o.Z.unsubscribe("PRESENCE_UPDATES", a),
                                o.Z.unsubscribe("VOICE_STATE_UPDATES", s),
                                null != l.current && (window.clearTimeout(l.current), (l.current = null));
                        }
                    );
                }, [n]),
                e
            );
        })(),
        T = i.useRef(null),
        N = (0, s.Yzy)(S, {
            keys: (e) => {
                var t, n, r;
                return null != e
                    ? null != e.voiceChannel
                        ? "".concat(e.user.id, "-voice-").concat(e.voiceChannel.id)
                        : ""
                              .concat(e.user.id, "-")
                              .concat(null == (t = e.activity) ? void 0 : t.state, ":")
                              .concat(null == (n = e.activity) ? void 0 : n.details, ":")
                              .concat(null == (r = e.activity) ? void 0 : r.name)
                    : "none";
            },
            from: {
                opacity: 0,
                transform: "translateY(32px)",
            },
            enter: {
                opacity: 1,
                transform: "translateY(0px)",
            },
            leave: {
                opacity: 0,
                transform: "translateY(-32px)",
            },
            config: {
                tension: 300,
                friction: 30,
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: y.container,
                children: N((e, t) =>
                    null == t
                        ? null
                        : (0, r.jsx)(p.Z, {
                              targetElementRef: T,
                              position: "bottom",
                              align: "left",
                              userId: t.user.id,
                              children: (n) => {
                                  var i;
                                  return (0, r.jsxs)(
                                      l.animated.div,
                                      C(
                                          v(
                                              {
                                                  ref: T,
                                                  className: y.activityWrapper,
                                                  style: e,
                                              },
                                              n,
                                          ),
                                          {
                                              children: [
                                                  (0, r.jsx)(s.Text, {
                                                      variant: "text-xs/semibold",
                                                      children: null != (i = t.user.globalName) ? i : t.user.username,
                                                  }),
                                                  null != t.voiceChannel
                                                      ? (0, r.jsx)(u.Z, {
                                                            channel: t.voiceChannel,
                                                            textVariant: "text-xs/medium",
                                                            textClassName: y.statusText,
                                                        })
                                                      : (0, r.jsx)(c.Z, {
                                                            activity: t.activity,
                                                            textVariant: "text-xs/medium",
                                                            textClassName: y.statusText,
                                                        }),
                                              ],
                                          },
                                      ),
                                  );
                              },
                          }),
                ),
            }),
            (0, r.jsx)(b.Or, {
                popoutPosition: "bottom",
                popoutAlign: "left",
                children: (e, i, l, a) =>
                    (0, r.jsx)(
                        d.JO,
                        C(v({}, l), {
                            ref: a,
                            className: t,
                            onClick: e,
                            icon: s.iFz,
                            iconSize: _,
                            "aria-label": I.intl.string(I.t.TdEu5X),
                            tooltip: i ? null : I.intl.string(I.t.TdEu5X),
                            selected: i,
                            showBadge: n,
                        }),
                    ),
            }),
        ],
    });
}
function T(e) {
    let { className: t } = e,
        { enableTopNavButton: n } = (0, _.Cq)({ location: "friends-button" });
    return n ? (0, r.jsx)(S, { className: t }) : null;
}
