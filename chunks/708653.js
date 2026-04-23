n.d(t, { $X: () => p, As: () => D, Ay: () => N });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(95701),
    d = n(961350),
    s = n(576705),
    o = n(994500),
    u = n(996439),
    c = n(810412),
    A = n(914853),
    g = n(589051),
    f = n(509295),
    b = n(406595),
    E = n(652215),
    v = n(499214),
    h = n(985018);
function x(e) {
    return e ? h.intl.string(h.t.Bou7lT) : h.intl.string(h.t["4wcdE/"]);
}
function I(e) {
    return e ? h.intl.string(v.default.Xr8XHk) : h.intl.string(v.default.w1MU8Y);
}
function m(e, t, n) {
    let { hasFriendList: v } = (0, g.M8)("useOverlayFavoritesToggleMenuItems"),
        h = "CHANNEL" === t.kind ? t.channel.id : t.userId,
        m = (function (e, t) {
            let [n] = (0, i.bG)([b.A], () => b.A.isFavorite(e, t), [e, t], u.D);
            return n;
        })(e, h),
        p = (0, i.bG)([s.A, o.A, d.default], () => {
            switch (t.kind) {
                case "CHANNEL": {
                    let { channel: n } = t,
                        l = n.isDM() || n.isMultiUserDM() || n.isPrivate();
                    switch (!0) {
                        case e === A.x.MESSAGES && l:
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
                    return d.default.getId() !== n && o.A.isFriend(n);
                }
                default:
                    throw Error(`Unhandled overlay favorite target: ${String(t)}`);
            }
        });
    if (!v || !p) return { isFavorite: m, toggleFavoriteItem: null, addFavoriteItem: null, removeFavoriteItem: null };
    let D = "CHANNEL" === t.kind ? x : I,
        N = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        y = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        _ = (0, l.jsx)(r.Dr, {
            id: N,
            label: D(!1),
            action: () => {
                (0, f.k)({ tab: e, targetId: h, isFavorite: !0 }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.ADDED_TO_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? h : void 0,
                    });
            },
        }),
        C = (0, l.jsx)(r.Dr, {
            id: y,
            label: D(!0),
            color: "danger",
            action: () => {
                (0, f.k)({ tab: e, targetId: h, isFavorite: !1 }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.REMOVED_FROM_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? h : void 0,
                    });
            },
        });
    return { isFavorite: m, toggleFavoriteItem: m ? C : _, addFavoriteItem: _, removeFavoriteItem: C };
}
function p(e, t, n) {
    return m(e, { kind: "CHANNEL", channel: t }, n);
}
function D(e, t) {
    return m(A.x.FRIENDS, { kind: "USER", userId: e }, t);
}
function N(e, t, n) {
    return p(e, t, n);
}
