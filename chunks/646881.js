n.d(t, {
    A: () => m,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(59520),
    o = n(726079),
    s = n(375492),
    c = n(287809),
    u = n(810412),
    d = n(547463),
    p = n(243612),
    h = n(652215),
    f = n(553777);

function m(e) {
    let { locked: t } = e,
        n = (0, p.b4)(),
        m = null == n ? void 0 : n.id,
        g = null == n ? void 0 : n.altId,
        y = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        A = null != g ? g : m,
        [O, E] = r.useState(new Set()),
        [v, b] = r.useState(new Set()),
        S = r.useCallback((e, t, n) => {
            E((n) => {
                if (t) {
                    if (n.has(e)) return n;
                    n.add(e);
                } else {
                    if (!n.has(e)) return n;
                    n.delete(e);
                }
                return new Set(n);
            }),
                b((i) => {
                    if (n && t) {
                        if (i.has(e)) return i;
                        i.add(e);
                    } else {
                        if (!i.has(e)) return i;
                        i.delete(e);
                    }
                    return new Set(i);
                });
        }, []),
        x = (0, u.Dk)(() => O, [O]),
        j = (0, u.Dk)(() => v, [v]),
        I = (0, a.I)(u.Y, 3e3, []);
    r.useEffect(() => {
        0 === x.size ||
            t ||
            I(h.uss.FRIENDS, {
                locked: t,
                shownUserIds: Array.from(x),
                liveUserIds: Array.from(j),
                contentInventoryIds: [],
            });
    }, [x, j, t, I]);
    let N = (0, l.bG)([s.A], () => (null == A ? null : s.A.getApplicationActivity(A)), [A]),
        w = (0, r.useCallback)((e, t) => {
            let n = (function (e) {
                switch (e) {
                    case o.xQ.OPEN_DIRECT_MESSAGE:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.CHAT,
                        };
                    case o.xQ.ACCEPT_FRIEND_REQUEST:
                        return {
                            type: u.Z5.FRIEND_REQUEST,
                            value: u.IP.ACCEPT_REQUEST,
                        };
                    case o.xQ.DECLINE_FRIEND_REQUEST:
                        return {
                            type: u.Z5.FRIEND_REQUEST,
                            value: u.IP.DECLINE_REQUEST,
                        };
                    case o.xQ.CANCEL_FRIEND_REQUEST:
                        return {
                            type: u.Z5.FRIEND_REQUEST,
                            value: u.IP.CANCEL_REQUEST,
                        };
                    case o.xQ.SEND_FRIEND_REQUEST:
                        return {
                            type: u.Z5.FRIEND_REQUEST,
                            value: u.IP.SEND_REQUEST,
                        };
                    case o.xQ.SEND_ACTIVITY_INVITE:
                        return {
                            type: u.Z5.INVITE,
                            value: u.IP.INVITE_SENT,
                        };
                    case o.xQ.ASK_TO_JOIN:
                        return {
                            type: u.Z5.INVITE,
                            value: u.IP.JOIN_REQUEST_SENT,
                        };
                    case o.xQ.USER_CONTEXT_MENU:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.SETTINGS_OPENED,
                        };
                    case o.xQ.OPEN_FRIEND_MODAL:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.PROFILE_OPENED,
                        };
                    case o.xQ.OPEN_SETTINGS_MODAL:
                        return {
                            type: u.Z5.FRIEND_LIST,
                            value: u.IP.SETTINGS_OPENED,
                        };
                    case o.xQ.SEARCH_FRIENDS:
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
                (0, u.YX)(
                    h.uss.FRIENDS,
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
        }, []),
        T = (0, r.useCallback)(() => {}, []),
        C = (0, r.useCallback)(
            () =>
                (0, i.jsx)(d.vr, {
                    activity: N,
                    currentUser: y,
                    showInviteButton: !1,
                }),
            [N, y],
        );
    return t
        ? null
        : (0, i.jsx)(o.Zz, {
              containerClassName: f.k,
              listClassName: f.p,
              closePopout: T,
              renderHeader: C,
              appContext: h.BRT.OVERLAY,
              onAction: w,
              onFriendVisible: S,
          });
}
