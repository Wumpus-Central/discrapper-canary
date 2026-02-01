r.d(t, {
    $X: () => h,
    As: () => j,
    Ay: () => I,
}),
    r(65821),
    r(896048);
var n = r(627968);
r(64700);
var i = r(311907),
    l = r(397927),
    o = r(95701),
    a = r(961350),
    c = r(576705),
    d = r(994500),
    s = r(996439),
    u = r(810412),
    A = r(914853),
    f = r(509295),
    p = r(406595),
    b = r(652215),
    g = r(895867),
    y = r(985018);

function O(e) {
    return e ? y.intl.string(y.t.Bou7lT) : y.intl.string(y.t["4wcdE/"]);
}

function v(e) {
    return e ? y.intl.string(g.default.Xr8XHk) : y.intl.string(g.default.w1MU8Y);
}

function E(e, t, r) {
    let g = "CHANNEL" === t.kind ? t.channel.id : t.userId,
        y = (function (e, t) {
            let [r] = (0, i.bG)([p.A], () => p.A.isFavorite(e, t), [e, t], s.D);
            return r;
        })(e, g);
    if (
        !(0, i.bG)([c.A, d.A, a.default], () => {
            switch (t.kind) {
                case "CHANNEL": {
                    let { channel: r } = t,
                        n = r.isDM() || r.isMultiUserDM() || r.isPrivate();
                    switch (!0) {
                        case e === A.x.MESSAGES && n:
                            return !0;
                        case e === A.x.MESSAGES && (0, o.ke)(r.type):
                            return c.A.can(b.xBc.READ_MESSAGE_HISTORY, r);
                        case e === A.x.VOICE && (0, o.ay)(r.type):
                            return (0, o.ay)(r.type) && c.A.can(b.xBc.VIEW_CHANNEL, r);
                        case e === A.x.FRIENDS:
                        default:
                            return !1;
                    }
                }
                case "USER": {
                    if (e !== A.x.FRIENDS) return !1;
                    let { userId: r } = t;
                    return a.default.getId() !== r && d.A.isFriend(r);
                }
                default:
                    throw Error("Unhandled overlay favorite target: ".concat(String(t)));
            }
        })
    )
        return {
            isFavorite: y,
            toggleFavoriteItem: null,
            addFavoriteItem: null,
            removeFavoriteItem: null,
        };
    let E = "CHANNEL" === t.kind ? O : v,
        h = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
        j = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
        I = (0, n.jsx)(l.Drp, {
            id: h,
            label: E(!1),
            action: () => {
                (0, f.k)({
                    tab: e,
                    targetId: g,
                    isFavorite: !0,
                }),
                    (0, u.YX)(r, {
                        type: u.Z5.FAVORITE,
                        value: u.IP.ADDED_TO_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? g : void 0,
                    });
            },
        }),
        S = (0, n.jsx)(l.Drp, {
            id: j,
            label: E(!0),
            color: "danger",
            action: () => {
                (0, f.k)({
                    tab: e,
                    targetId: g,
                    isFavorite: !1,
                }),
                    (0, u.YX)(r, {
                        type: u.Z5.FAVORITE,
                        value: u.IP.REMOVED_FROM_FAVORITES,
                        secondaryValue: e,
                        userId: e === A.x.FRIENDS ? g : void 0,
                    });
            },
        });
    return {
        isFavorite: y,
        toggleFavoriteItem: y ? S : I,
        addFavoriteItem: I,
        removeFavoriteItem: S,
    };
}

function h(e, t, r) {
    return E(
        e,
        {
            kind: "CHANNEL",
            channel: t,
        },
        r,
    );
}

function j(e, t) {
    return E(
        A.x.FRIENDS,
        {
            kind: "USER",
            userId: e,
        },
        t,
    );
}

function I(e, t, r) {
    return h(e, t, r);
}
