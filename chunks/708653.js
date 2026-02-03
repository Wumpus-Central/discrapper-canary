n.d(t, {
    $X: () => h,
    As: () => j,
    Ay: () => I,
}),
    n(65821),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(95701),
    o = n(961350),
    u = n(576705),
    s = n(994500),
    d = n(996439),
    c = n(810412),
    A = n(914853),
    f = n(589051),
    b = n(509295),
    g = n(406595),
    p = n(652215),
    v = n(895867),
    O = n(985018);

function y(e) {
    return e ? O.intl.string(O.t.Bou7lT) : O.intl.string(O.t["4wcdE/"]);
}

function E(e) {
    return e ? O.intl.string(v.default.Xr8XHk) : O.intl.string(v.default.w1MU8Y);
}

function m(e, t, n) {
    let { hasFriendList: v } = (0, f.M8)("useOverlayFavoritesToggleMenuItems"),
        O = "CHANNEL" === t.kind ? t.channel.id : t.userId,
        m = (function (e, t) {
            let [n] = (0, i.bG)([g.A], () => g.A.isFavorite(e, t), [e, t], d.D);
            return n;
        })(e, O),
        h = (0, i.bG)([u.A, s.A, o.default], () => {
            switch (t.kind) {
                case "CHANNEL": {
                    let { channel: n } = t,
                        r = n.isDM() || n.isMultiUserDM() || n.isPrivate();
                    switch (!0) {
                        case e === A.x.MESSAGES && r:
                            return !0;
                        case e === A.x.MESSAGES && (0, a.ke)(n.type):
                            return u.A.can(p.xBc.READ_MESSAGE_HISTORY, n);
                        case e === A.x.VOICE && (0, a.ay)(n.type):
                            return (0, a.ay)(n.type) && u.A.can(p.xBc.VIEW_CHANNEL, n);
                        case e === A.x.FRIENDS:
                        default:
                            return !1;
                    }
                }
                case "USER": {
                    if (e !== A.x.FRIENDS) return !1;
                    let { userId: n } = t;
                    return o.default.getId() !== n && s.A.isFriend(n);
                }
                default:
                    throw Error("Unhandled overlay favorite target: ".concat(String(t)));
            }
        });
    if (!v || !h)
        return {
            isFavorite: m,
            toggleFavoriteItem: null,
            addFavoriteItem: null,
            removeFavoriteItem: null,
        };
    let j = "CHANNEL" === t.kind ? y : E,
        I = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        D = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        x = (0, r.jsx)(l.Drp, {
            id: I,
            label: j(!1),
            action: () => {
                (0, b.k)({
                    tab: e,
                    targetId: O,
                    isFavorite: !0,
                }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.ADDED_TO_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? O : void 0,
                    });
            },
        }),
        S = (0, r.jsx)(l.Drp, {
            id: D,
            label: j(!0),
            color: "danger",
            action: () => {
                (0, b.k)({
                    tab: e,
                    targetId: O,
                    isFavorite: !1,
                }),
                    (0, c.YX)(n, {
                        type: c.Z5.FAVORITE,
                        value: c.IP.REMOVED_FROM_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? O : void 0,
                    });
            },
        });
    return {
        isFavorite: m,
        toggleFavoriteItem: m ? S : x,
        addFavoriteItem: x,
        removeFavoriteItem: S,
    };
}

function h(e, t, n) {
    return m(
        e,
        {
            kind: "CHANNEL",
            channel: t,
        },
        n,
    );
}

function j(e, t) {
    return m(
        A.x.FRIENDS,
        {
            kind: "USER",
            userId: e,
        },
        t,
    );
}

function I(e, t, n) {
    return h(e, t, n);
}
