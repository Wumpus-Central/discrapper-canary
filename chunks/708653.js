n.d(t, { $X: () => y, As: () => S, Ay: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(477782),
    a = n(95701),
    d = n(961350),
    s = n(576705),
    u = n(994500),
    o = n(996439),
    c = n(810412),
    A = n(914853),
    g = n(589051),
    f = n(509295),
    h = n(406595),
    E = n(652215),
    I = n(21197),
    v = n(985018);
function _(e) {
    return e ? v.intl.string(v.t.Bou7lT) : v.intl.string(v.t["4wcdE/"]);
}
function x(e) {
    return e ? v.intl.string(I.default.Xr8XHk) : v.intl.string(I.default.w1MU8Y);
}
function b(e, t, n) {
    let { hasFriendList: I } = (0, g.M8)("useOverlayFavoritesToggleMenuItems"),
        v = "CHANNEL" === t.kind ? t.channel.id : t.userId,
        b = (function (e, t) {
            let [n] = (0, i.bG)([h.A], () => h.A.isFavorite(e, t), [e, t], o.D);
            return n;
        })(e, v),
        y = (0, i.bG)([s.A, u.A, d.default], () => {
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
    if (!I || !y) return { isFavorite: b, toggleFavoriteItem: null, addFavoriteItem: null, removeFavoriteItem: null };
    let S = "CHANNEL" === t.kind ? _ : x,
        p = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        D = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        N = (0, r.jsx)(l.Dr, {
            id: p,
            label: S(!1),
            action: () => {
                (0, f.k)({ tab: e, targetId: v, isFavorite: !0 }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.ADDED_TO_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? v : void 0,
                    });
            },
        }),
        j = (0, r.jsx)(l.Dr, {
            id: D,
            label: S(!0),
            color: "danger",
            action: () => {
                (0, f.k)({ tab: e, targetId: v, isFavorite: !1 }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.REMOVED_FROM_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? v : void 0,
                    });
            },
        });
    return { isFavorite: b, toggleFavoriteItem: b ? j : N, addFavoriteItem: N, removeFavoriteItem: j };
}
function y(e, t, n) {
    return b(e, { kind: "CHANNEL", channel: t }, n);
}
function S(e, t) {
    return b(A.x.FRIENDS, { kind: "USER", userId: e }, t);
}
function p(e, t, n) {
    return y(e, t, n);
}
