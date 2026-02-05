n.d(t, { $X: () => S, As: () => b, Ay: () => y });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(95701),
    d = n(961350),
    s = n(576705),
    u = n(994500),
    o = n(996439),
    c = n(810412),
    A = n(914853),
    g = n(589051),
    f = n(509295),
    E = n(406595),
    h = n(652215),
    I = n(895867),
    p = n(985018);
function _(e) {
    return e ? p.intl.string(p.t.Bou7lT) : p.intl.string(p.t["4wcdE/"]);
}
function v(e) {
    return e ? p.intl.string(I.default.Xr8XHk) : p.intl.string(I.default.w1MU8Y);
}
function x(e, t, n) {
    let { hasFriendList: I } = (0, g.M8)("useOverlayFavoritesToggleMenuItems"),
        p = "CHANNEL" === t.kind ? t.channel.id : t.userId,
        x = (function (e, t) {
            let [n] = (0, i.bG)([E.A], () => E.A.isFavorite(e, t), [e, t], o.D);
            return n;
        })(e, p),
        S = (0, i.bG)([s.A, u.A, d.default], () => {
            switch (t.kind) {
                case "CHANNEL": {
                    let { channel: n } = t,
                        r = n.isDM() || n.isMultiUserDM() || n.isPrivate();
                    switch (!0) {
                        case e === A.x.MESSAGES && r:
                            return !0;
                        case e === A.x.MESSAGES && (0, a.ke)(n.type):
                            return s.A.can(h.xBc.READ_MESSAGE_HISTORY, n);
                        case e === A.x.VOICE && (0, a.ay)(n.type):
                            return (0, a.ay)(n.type) && s.A.can(h.xBc.VIEW_CHANNEL, n);
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
    if (!I || !S) return { isFavorite: x, toggleFavoriteItem: null, addFavoriteItem: null, removeFavoriteItem: null };
    let b = "CHANNEL" === t.kind ? _ : v,
        y = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        D = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        N = (0, r.jsx)(l.Drp, {
            id: y,
            label: b(!1),
            action: () => {
                (0, f.k)({ tab: e, targetId: p, isFavorite: !0 }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.ADDED_TO_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? p : void 0,
                    });
            },
        }),
        M = (0, r.jsx)(l.Drp, {
            id: D,
            label: b(!0),
            color: "danger",
            action: () => {
                (0, f.k)({ tab: e, targetId: p, isFavorite: !1 }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.REMOVED_FROM_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? p : void 0,
                    });
            },
        });
    return { isFavorite: x, toggleFavoriteItem: x ? M : N, addFavoriteItem: N, removeFavoriteItem: M };
}
function S(e, t, n) {
    return x(e, { kind: "CHANNEL", channel: t }, n);
}
function b(e, t) {
    return x(A.x.FRIENDS, { kind: "USER", userId: e }, t);
}
function y(e, t, n) {
    return S(e, t, n);
}
