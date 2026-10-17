n.d(t, {
    fv: () => $,
    S_: () => H,
    w6: () => W,
    od: () => Y,
    Ub: () => X,
    zN: () => Z,
    tV: () => J,
    _2: () => q,
    kG: () => ee,
    Ye: () => z,
    uM: () => Q,
    nR: () => K,
    i_: () => j,
});
var i = n(435558),
    r = n.n(i),
    a = n(554146),
    s = n(873298),
    l = n(406935),
    o = n(157559),
    d = n(541689),
    c = n(47899),
    u = n(976860),
    _ = n(594061),
    E = n(95701),
    A = n(734057),
    h = n(576705),
    f = n(309010),
    I = n(967198),
    p = n(935208),
    T = n(181079),
    m = n(796637),
    g = n(93055),
    S = n(5180),
    N = n(635233),
    C = n(928424),
    O = n(858899),
    R = n(27232),
    L = n(105292),
    y = n(349828),
    D = n(652215),
    v = n(818348);
function b(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function P(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === s.Ip.CATEGORY) continue;
        let i = A.A.getChannel(t);
        if (null == i) {
            let i = n.channelType?.value;
            if (null != i && E.Le.has(i)) continue;
            delete e[t];
            continue;
        }
        if (
            (null == n.channelType && (n.channelType = l.ZQ.create({ value: i.type })),
            !i.isPrivate() && !h.A.can(v.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function M(e, t) {
    let n = e[t];
    if (null == n || n.parentId === y.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== s.Ip.CATEGORY) && (n.parentId = y.O8);
}
function U(e) {
    return r().filter(e, (e) => e.type !== s.Ip.CATEGORY).length;
}
function w(e, t) {
    if ((P(e), r().size(e) >= y.lj)) return { limit: y.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, g.o9)();
    return t === s.Ip.CATEGORY || U(e) < n ? null : { limit: n, canUpsell: i };
}
function G(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, C.A)(t)
        : o.A.show({ title: L.intl.string(L.t["+XYXtZ"]), body: L.intl.formatToPlainString(L.t.JaIyFi, { count: t }) });
}
function x(e) {
    e?.status === 403 &&
        (_.wc.loadIfNecessary(!0).catch(D.tEg),
        o.A.show({ title: L.intl.string(L.t.iufib1), body: L.intl.string(L.t.eAn6z2) }));
}
function k(e) {
    let { update: t, batched: n = !1 } = e;
    return _.wc.updateAsync("favorites", t, n ? _.Sb.FREQUENT_USER_ACTION : _.Sb.INFREQUENT_USER_ACTION, x);
}
function F(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.default.fromTimestamp(Date.now());
    return ((e[n] = s.wL.create({ nickname: t, type: s.Ip.CATEGORY, position: b(e), parentId: y.O8 })), n);
}
function B(e, t) {
    let n = t.trim().toLowerCase();
    for (let t in e) {
        let i = e[t];
        if (i.type === s.Ip.CATEGORY && i.nickname.trim().toLowerCase() === n) return t;
    }
}
async function V(e, t, n) {
    let { silent: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = e.filter((e) => !T.A.isFavorite(e));
    if (0 === r.length) return;
    let a = !T.A.favoriteGuildEnabled;
    (await k({
        update: (e) => {
            let o = !1,
                d = ("parentId" in t ? t.parentId : null) ?? y.O8;
            for (let a of r) {
                let r = w(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                if (null != r) {
                    if ((i || G(r), !o)) return !1;
                    break;
                }
                if ("categoryName" in t && !o) {
                    d = B(e.favoriteChannels, t.categoryName) ?? F(e.favoriteChannels, t.categoryName);
                    let n = w(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                    if (null != n) return (i || G(n), !1);
                }
                let c = A.A.getChannel(a);
                ((e.favoriteChannels[a] = s.wL.create({
                    nickname: "",
                    type: s.Ip.REFERENCE_ORIGINAL,
                    channelType: null != c ? l.ZQ.create({ value: c.type }) : void 0,
                    position: b(e.favoriteChannels),
                    parentId: d,
                })),
                    P(e.favoriteChannels),
                    M(e.favoriteChannels, a),
                    (o = !0),
                    (0, N.LO)(n, c?.type ?? null, U(e.favoriteChannels)));
            }
            o && a && !i && ((e.guildVisible = l._t.create({ value: !0 })), (0, N.uS)("auto", !0));
        },
    }),
        !i && r.some((e) => T.A.isFavorite(e)) && (0, O.P0)({ text: L.intl.string(L.t["4tSWQg"]), icon: R.StarIcon }));
}
async function H(e) {
    let { channelIds: t, parentId: n, source: i } = e;
    await V(t, { parentId: n ?? null }, i);
}
function j(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = T.A.getFavorite(e);
    null != n &&
        ((function (e) {
            let t = I.A.getGuildId();
            if ((0, S.ai)(t) && f.Ay.getChannelId() === e) {
                let n, i, a;
                (0, u.pX)(
                    D.BVt.CHANNEL(
                        t,
                        0 ===
                            (a = (i = (n = (0, m.g)())
                                .getSections()
                                .flatMap((e, t) =>
                                    r()
                                        .range(e)
                                        .map((e) => n.getChannelFromSectionRow(t, e)?.channel.id),
                                )
                                .filter((e) => null != e)).indexOf(e))
                            ? i[1]
                            : i[a - 1],
                    ),
                );
            }
        })(e),
        k({
            update: (i) => {
                if ((delete i.favoriteChannels[e], n.type === s.Ip.CATEGORY))
                    for (let t in i.favoriteChannels)
                        i.favoriteChannels[t].parentId === e && (i.favoriteChannels[t].parentId = y.O8);
                (P(i.favoriteChannels),
                    t &&
                        (0, N.TX)(
                            n.type === s.Ip.CATEGORY ? null : (A.A.getChannel(e)?.type ?? null),
                            U(i.favoriteChannels),
                        ));
            },
        }));
}
function W(e, t) {
    T.A.isFavorite(e) &&
        k({
            update: (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
        });
}
async function Y(e) {
    if (!(0, S.QN)(e)) return null;
    let t = e.trim(),
        n = p.default.fromTimestamp(Date.now());
    return (
        await k({
            update: (e) => {
                let i = w(e.favoriteChannels, s.Ip.CATEGORY);
                if (null != i) return (G(i), !1);
                F(e.favoriteChannels, t, n);
            },
        }),
        null != T.A.getFavorite(n) ? n : null
    );
}
async function K(e) {
    let { channelIds: t, categoryName: n, source: i } = e;
    await V(t, { categoryName: n }, i);
}
function $(e) {
    j(e);
}
async function z(e) {
    if (!T.A.autoAddJoinedThreads || T.A.isFavorite(e)) return;
    let t = A.A.getChannel(e);
    null == t ||
        !t.isThread() ||
        ((t.isPrivate() || h.A.can(v.xB.VIEW_CHANNEL, t)) &&
            (await V([e], { categoryName: y.A }, "auto_thread_join", { silent: !0 })));
}
function X(e) {
    k({
        update: (t) => {
            if (
                t.autoAddJoinedThreads === e ||
                (e &&
                    null ==
                        (function (e) {
                            let t = B(e, y.A);
                            if (null != t) return t;
                            let n = w(e, s.Ip.CATEGORY);
                            return null != n ? void G(n) : F(e, y.A);
                        })(t.favoriteChannels))
            )
                return !1;
            t.autoAddJoinedThreads = e;
        },
    });
}
function q(e, t) {
    k({
        update: (n) => {
            let i = null != t ? [t] : Object.keys(n.favoriteChannels),
                r = !1;
            for (let t of i) {
                let i = n.favoriteChannels[t];
                null != i && i.type === s.Ip.CATEGORY && i.collapsed !== e && ((i.collapsed = e), (r = !0));
            }
            if (!r) return !1;
        },
        batched: !0,
    });
}
function Z(e) {
    0 !== e.length &&
        k({
            update: (t) => {
                for (let n of e) {
                    let e = n.id;
                    (null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? y.O8), M(t.favoriteChannels, e)));
                }
                (0, N.P)();
            },
        });
}
function Q() {
    (k({
        update: (e) => {
            ((e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1), (e.autoAddJoinedThreads = !1));
        },
    }),
        (0, d.Ab)(),
        (0, c._0)(),
        (0, _.xB)(a.M.FAVORITES_GUILD_SUGGESTIONS));
}
function J(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    k({
        update: (n) => {
            if (n.guildVisible?.value === e) return !1;
            ((n.guildVisible = l._t.create({ value: e })), (0, N.uS)(t, e));
        },
    });
}
function ee(e) {
    (J(e, "settings_page"), !e && (0, S.ai)(I.A.getGuildId()) && (0, u.pX)(D.BVt.ME));
}
