n.d(t, {
    A: () => O,
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(375492),
    s = n(287809),
    o = n(810412),
    u = n(914853),
    c = n(243612),
    d = n(640490),
    h = n(67103),
    p = n(755588),
    f = n(222870),
    g = n(180720),
    m = n(576420),
    y = n(145567),
    A = n(34307),
    v = n(652215),
    b = n(553777);

function E() {
    var e, t, n;
    let E = (0, c.b4)(),
        O = null == E ? void 0 : E.id,
        x = null == E ? void 0 : E.altId,
        _ = null != (e = (0, l.bG)([s.default], () => s.default.getCurrentUser())) ? e : null,
        S = null != x ? x : O,
        I = m.Ay.useField("activeTab"),
        j = m.Ay.useField("setActiveTab"),
        T = r.useCallback(
            (e) => {
                e !== I &&
                    (j(e),
                    (0, o.YX)(v.uss.FRIENDS, {
                        type: o.Z5.TAB_SELECTED,
                        value: (function (e) {
                            switch (e) {
                                case u.x.FRIENDS:
                                    return o.IP.FRIEND_TAB_SELECTED;
                                case u.x.MESSAGES:
                                    return o.IP.MESSAGES_TAB_SELECTED;
                                case u.x.VOICE:
                                    return o.IP.VOICE_TAB_SELECTED;
                                default:
                                    return o.IP.FRIEND_TAB_SELECTED;
                            }
                        })(e),
                    }));
            },
            [I, j],
        ),
        C = null != (t = (0, l.bG)([a.A], () => (null == S ? null : a.A.getApplicationActivity(S)), [S])) ? t : null,
        N = (0, r.useCallback)((e, t) => {
            let n = (function (e) {
                switch (e) {
                    case h.x.OPEN_DIRECT_MESSAGE:
                        return {
                            type: o.Z5.FRIEND_LIST,
                            value: o.IP.CHAT,
                        };
                    case h.x.ACCEPT_FRIEND_REQUEST:
                        return {
                            type: o.Z5.FRIEND_REQUEST,
                            value: o.IP.ACCEPT_REQUEST,
                        };
                    case h.x.DECLINE_FRIEND_REQUEST:
                        return {
                            type: o.Z5.FRIEND_REQUEST,
                            value: o.IP.DECLINE_REQUEST,
                        };
                    case h.x.CANCEL_FRIEND_REQUEST:
                        return {
                            type: o.Z5.FRIEND_REQUEST,
                            value: o.IP.CANCEL_REQUEST,
                        };
                    case h.x.SEND_FRIEND_REQUEST:
                        return {
                            type: o.Z5.FRIEND_REQUEST,
                            value: o.IP.SEND_REQUEST,
                        };
                    case h.x.SEND_ACTIVITY_INVITE:
                        return {
                            type: o.Z5.INVITE,
                            value: o.IP.INVITE_SENT,
                        };
                    case h.x.ASK_TO_JOIN:
                        return {
                            type: o.Z5.INVITE,
                            value: o.IP.JOIN_REQUEST_SENT,
                        };
                    case h.x.USER_CONTEXT_MENU:
                        return {
                            type: o.Z5.FRIEND_LIST,
                            value: o.IP.SETTINGS_OPENED,
                        };
                    case h.x.OPEN_FRIEND_MODAL:
                        return {
                            type: o.Z5.FRIEND_LIST,
                            value: o.IP.PROFILE_OPENED,
                        };
                    case h.x.OPEN_SETTINGS_MODAL:
                        return {
                            type: o.Z5.FRIEND_LIST,
                            value: o.IP.SETTINGS_OPENED,
                        };
                    case h.x.SEARCH_FRIENDS:
                        return {
                            type: o.Z5.FRIEND_LIST,
                            value: o.IP.SEARCH,
                        };
                    default:
                        return null;
                }
            })(e);
            if (null != n) {
                var i, r;
                if (e === h.x.OPEN_DIRECT_MESSAGE) {
                    if (null == t) return;
                    (async () => {
                        try {
                            await (0, y.D$)({
                                target: {
                                    kind: y.bB.DM_USER,
                                    userId: t,
                                    messageId: null,
                                },
                                source: A.B.FRIENDS_WIDGET_CLICK,
                                widgetType: v.uss.FRIENDS,
                            });
                        } catch (e) {}
                    })();
                }
                (0, o.YX)(
                    v.uss.FRIENDS,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, n)),
                    (r = r =
                        {
                            userId: t,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    i),
                );
            }
        }, []);
    return (0, i.jsxs)("div", {
        className: b.kL,
        children: [
            (0, i.jsx)(p.b, {
                currentUser: _,
                activity: C,
                currentGameName: null != (n = null == E ? void 0 : E.name) ? n : null,
                activeTab: I,
                onTabChange: T,
            }),
            (0, i.jsx)("div", {
                className: b.Qs,
                children:
                    I === u.x.FRIENDS
                        ? (0, i.jsx)(d.F, {
                              onAction: N,
                          })
                        : I === u.x.MESSAGES
                          ? (0, i.jsx)(f.t, {})
                          : I === u.x.VOICE
                            ? (0, i.jsx)(g.T, {})
                            : null,
            }),
        ],
    });
}
let O = r.memo(function (e) {
    let { locked: t } = e;
    return t ? null : (0, i.jsx)(E, {});
});
