n.d(t, { $X: () => S, As: () => p, Ay: () => y });
var r = n(627968);
n(64700);
var i = n(17928),
    l = n(477782),
    a = n(95701),
    d = n(495544),
    s = n(576705),
    u = n(994500),
    o = n(996439),
    c = n(810412),
    A = n(914853),
    g = n(589051),
    f = n(509295),
    h = n(406595),
    E = n(652215),
    I = n(499214),
    _ = n(985018);
function x(e) {
    return e ? _.intl.string(_.t.Bou7lT) : _.intl.string(_.t["4wcdE/"]);
}
function b(e) {
    return e ? _.intl.string(I.default.Xr8XHk) : _.intl.string(I.default.w1MU8Y);
}
function v(e, t, n) {
    let { hasFriendList: I } = (0, g.M8)("useOverlayFavoritesToggleMenuItems"),
        _ = "CHANNEL" === t.kind ? t.channel.id : t.userId,
        v = (function (e, t) {
            let [n] = (0, i.bG)([h.A], () => h.A.isFavorite(e, t), [e, t], o.D);
            return n;
        })(e, _),
        S = (0, i.bG)([s.A, u.A, d.default], () => {
            switch (t.kind) {
                case "CHANNEL": {
                    let { channel: n } = t,
                        r = n.isDM() || n.isMultiUserDM() || n.isPrivate();
                    switch (!0) {
                        case e === A.x.MESSAGES && r:
                            return !0;
                        case e === A.x.MESSAGES && (0, a.ke)(n.type):
                            return s.A.can(E.xBc.READ_MESSAGE_HISTORY, n);
                        case e === A.x.VOICE && (0, a.ay)(n.type):
                            return (0, a.ay)(n.type) && s.A.can(E.xBc.VIEW_CHANNEL, n);
                        case e === A.x.FRIENDS:
                        default:
                            return !1;
                    }
                }
                case "USER": {
                    if (e !== A.x.FRIENDS) return !1;
                    let { userId: n } = t;
                    return d.default.getId() !== n && u.A.isFriend(n);
                }
                default:
                    throw Error(`Unhandled overlay favorite target: ${String(t)}`);
            }
        });
    if (!I || !S) return { isFavorite: v, toggleFavoriteItem: null, addFavoriteItem: null, removeFavoriteItem: null };
    let p = "CHANNEL" === t.kind ? x : b,
        y = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        D = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        N = (0, r.jsx)(l.Dr, {
            id: y,
            label: p(!1),
            action: () => {
                (0, f.k)({ tab: e, targetId: _, isFavorite: !0 }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.ADDED_TO_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? _ : void 0,
                    });
            },
        }),
        j = (0, r.jsx)(l.Dr, {
            id: D,
            label: p(!0),
            color: "danger",
            action: () => {
                (0, f.k)({ tab: e, targetId: _, isFavorite: !1 }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.REMOVED_FROM_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? _ : void 0,
                    });
            },
        });
    return { isFavorite: v, toggleFavoriteItem: v ? j : N, addFavoriteItem: N, removeFavoriteItem: j };
}
function S(e, t, n) {
    return v(e, { kind: "CHANNEL", channel: t }, n);
}
function p(e, t) {
    return v(A.x.FRIENDS, { kind: "USER", userId: e }, t);
}
function y(e, t, n) {
    return S(e, t, n);
}
