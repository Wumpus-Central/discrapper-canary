t.d(n, { $X: () => k, As: () => M, Ay: () => y });
var r = t(627968);
t(64700);
var l = t(17928),
    i = t(477782),
    a = t(95701),
    u = t(495544),
    s = t(576705),
    d = t(994500),
    c = t(996439),
    o = t(810412),
    A = t(914853),
    E = t(589051),
    I = t(509295),
    v = t(406595),
    f = t(652215),
    N = t(499214),
    g = t(375708);
function S(e) {
    return e ? g.intl.string(g.t.Bou7lT) : g.intl.string(g.t["4wcdE/"]);
}
function D(e) {
    return e ? g.intl.string(N.default.Xr8XHk) : g.intl.string(N.default.w1MU8Y);
}
function h(e, n, t) {
    let { hasFriendList: N } = (0, E.M8)("useOverlayFavoritesToggleMenuItems"),
        g = "CHANNEL" === n.kind ? n.channel.id : n.userId,
        h = (function (e, n) {
            let [t] = (0, l.bG)([v.A], () => v.A.isFavorite(e, n), [e, n], c.D);
            return t;
        })(e, g),
        k = (0, l.bG)([s.A, d.A, u.default], () => {
            switch (n.kind) {
                case "CHANNEL": {
                    let { channel: t } = n,
                        r = t.isDM() || t.isMultiUserDM() || t.isPrivate();
                    switch (!0) {
                        case e === A.x.MESSAGES && r:
                            return !0;
                        case e === A.x.MESSAGES && (0, a.ke)(t.type):
                            return s.A.can(f.xBc.READ_MESSAGE_HISTORY, t);
                        case e === A.x.VOICE && (0, a.ay)(t.type):
                            return (0, a.ay)(t.type) && s.A.can(f.xBc.VIEW_CHANNEL, t);
                        case e === A.x.FRIENDS:
                        default:
                            return !1;
                    }
                }
                case "USER": {
                    if (e !== A.x.FRIENDS) return !1;
                    let { userId: t } = n;
                    return u.default.getId() !== t && d.A.isFriend(t);
                }
                default:
                    throw Error(`Unhandled overlay favorite target: ${String(n)}`);
            }
        });
    if (!N || !k) return { isFavorite: h, toggleFavoriteItem: null, addFavoriteItem: null, removeFavoriteItem: null };
    let M = "CHANNEL" === n.kind ? S : D,
        y = "CHANNEL" === n.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        R = "CHANNEL" === n.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        F = (0, r.jsx)(i.Dr, {
            id: y,
            label: M(!1),
            action: () => {
                (0, I.k)({ tab: e, targetId: g, isFavorite: !0 }),
                    (0, o.YX)(t, {
                        type: o.Z5.FAVORITE,
                        value: o.IP.ADDED_TO_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? g : void 0,
                    });
            },
        }),
        _ = (0, r.jsx)(i.Dr, {
            id: R,
            label: M(!0),
            color: "danger",
            action: () => {
                (0, I.k)({ tab: e, targetId: g, isFavorite: !1 }),
                    (0, o.YX)(t, {
                        type: o.Z5.FAVORITE,
                        value: o.IP.REMOVED_FROM_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? g : void 0,
                    });
            },
        });
    return { isFavorite: h, toggleFavoriteItem: h ? _ : F, addFavoriteItem: F, removeFavoriteItem: _ };
}
function k(e, n, t) {
    return h(e, { kind: "CHANNEL", channel: n }, t);
}
function M(e, n) {
    return h(A.x.FRIENDS, { kind: "USER", userId: e }, n);
}
function y(e, n, t) {
    return k(e, n, t);
}
