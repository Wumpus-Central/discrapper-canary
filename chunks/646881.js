n.d(t, {
    A: () => x,
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(308528),
    s = n(375492),
    o = n(287809),
    u = n(810412),
    c = n(914853),
    d = n(243612),
    h = n(640490),
    p = n(67103),
    f = n(755588),
    g = n(222870),
    m = n(180720),
    y = n(576420),
    A = n(145567),
    v = n(34307),
    b = n(652215),
    E = n(553777);

function O() {
    var e, t, n;
    let O = (0, d.b4)(),
        x = null == O ? void 0 : O.id,
        _ = null == O ? void 0 : O.altId,
        S = null != (e = (0, l.bG)([o.default], () => o.default.getCurrentUser())) ? e : null,
        I = null != _ ? _ : x,
        j = y.Ay.useField("activeTab"),
        T = y.Ay.useField("setActiveTab"),
        C = r.useCallback(
            (e) => {
                e !== j &&
                    (T(e),
                    (0, u.YX)(b.uss.FRIENDS, {
                        type: u.Z5.TAB_SELECTED,
                        value: (function (e) {
                            switch (e) {
                                case c.x.FRIENDS:
                                    return u.IP.FRIEND_TAB_SELECTED;
                                case c.x.MESSAGES:
                                    return u.IP.MESSAGES_TAB_SELECTED;
                                case c.x.VOICE:
                                    return u.IP.VOICE_TAB_SELECTED;
                                default:
                                    return u.IP.FRIEND_TAB_SELECTED;
                            }
                        })(e),
                    }));
            },
            [j, T],
        ),
        N = null != (t = (0, l.bG)([s.A], () => (null == I ? null : s.A.getApplicationActivity(I)), [I])) ? t : null,
        w = (0, r.useCallback)((e, t) => {
            let n = (function (e) {
                switch (e) {
                    case p.x.OPEN_DIRECT_MESSAGE:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.CHAT,
                        };
                    case p.x.ACCEPT_FRIEND_REQUEST:
                        return {
                            type: u.Z5.FRIEND_REQUEST,
                            value: u.IP.ACCEPT_REQUEST,
                        };
                    case p.x.DECLINE_FRIEND_REQUEST:
                        return {
                            type: u.Z5.FRIEND_REQUEST,
                            value: u.IP.DECLINE_REQUEST,
                        };
                    case p.x.CANCEL_FRIEND_REQUEST:
                        return {
                            type: u.Z5.FRIEND_REQUEST,
                            value: u.IP.CANCEL_REQUEST,
                        };
                    case p.x.SEND_FRIEND_REQUEST:
                        return {
                            type: u.Z5.FRIEND_REQUEST,
                            value: u.IP.SEND_REQUEST,
                        };
                    case p.x.SEND_ACTIVITY_INVITE:
                        return {
                            type: u.Z5.INVITE,
                            value: u.IP.INVITE_SENT,
                        };
                    case p.x.ASK_TO_JOIN:
                        return {
                            type: u.Z5.INVITE,
                            value: u.IP.JOIN_REQUEST_SENT,
                        };
                    case p.x.USER_CONTEXT_MENU:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.SETTINGS_OPENED,
                        };
                    case p.x.OPEN_FRIEND_MODAL:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.PROFILE_OPENED,
                        };
                    case p.x.OPEN_SETTINGS_MODAL:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.SETTINGS_OPENED,
                        };
                    case p.x.SEARCH_FRIENDS:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.SEARCH,
                        };
                    default:
                        return null;
                }
            })(e);
            if (null != n) {
                var i, r;
                if (e === p.x.OPEN_DIRECT_MESSAGE) {
                    if (null == t) return;
                    (async () => {
                        try {
                            let e = await a.A.getOrEnsurePrivateChannel(t);
                            (0, A.D$)({
                                channelId: e,
                                source: v.B.FRIENDS_WIDGET_CLICK,
                                guildId: null,
                                messageId: null,
                                widgetType: b.uss.FRIENDS,
                            });
                        } catch (e) {}
                    })();
                }
                (0, u.YX)(
                    b.uss.FRIENDS,
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
        className: E.kL,
        children: [
            (0, i.jsx)(f.b, {
                currentUser: S,
                activity: N,
                currentGameName: null != (n = null == O ? void 0 : O.name) ? n : null,
                activeTab: j,
                onTabChange: C,
            }),
            (0, i.jsx)("div", {
                className: E.Qs,
                children:
                    j === c.x.FRIENDS
                        ? (0, i.jsx)(h.F, {
                              onAction: w,
                          })
                        : j === c.x.MESSAGES
                          ? (0, i.jsx)(g.t, {})
                          : j === c.x.VOICE
                            ? (0, i.jsx)(m.T, {})
                            : null,
            }),
        ],
    });
}
let x = r.memo(function (e) {
    let { locked: t } = e;
    return t ? null : (0, i.jsx)(O, {});
});
