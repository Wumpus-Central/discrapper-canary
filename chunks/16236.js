n.d(t, {
    fv: () => q,
    S_: () => W,
    w6: () => K,
    od: () => z,
    Ub: () => Q,
    zN: () => ee,
    pq: () => $,
    tV: () => en,
    _2: () => J,
    kG: () => ei,
    Ye: () => Z,
    uM: () => et,
    nR: () => X,
    i_: () => Y,
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
    m = n(266599),
    g = n(796637),
    S = n(93055),
    N = n(5180),
    C = n(635233),
    O = n(928424),
    R = n(858899),
    L = n(27232),
    y = n(105292),
    D = n(349828),
    v = n(652215),
    b = n(818348);
function M(e) {
    let t = 0;
    for (let n in e) {
        let i = e[n];
        null != i && null != i.position && (t = Math.max(t, i.position));
    }
    return t + 1;
}
function P(e) {
    let t = I.A.getGuildId(),
        n = f.Ay.getChannelId();
    (0, N.ai)(t) &&
        null != n &&
        e.has(n) &&
        (0, u.pX)(
            v.BVt.CHANNEL(
                t,
                (function (e, t) {
                    let n = (0, g.g)(),
                        i = n
                            .getSections()
                            .flatMap((e, t) =>
                                r()
                                    .range(e)
                                    .map((e) => n.getChannelFromSectionRow(t, e)?.channel.id),
                            )
                            .filter((e) => null != e),
                        a = i.indexOf(e);
                    for (let e = a - 1; e >= 0; e--) if (!t.has(i[e])) return i[e];
                    return i.find((e) => !t.has(e));
                })(n, e),
            ),
        );
}
function U(e) {
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
            !i.isPrivate() && !h.A.can(b.xB.VIEW_CHANNEL, i))
        ) {
            delete e[t];
            continue;
        }
    }
}
function w(e, t) {
    let n = e[t];
    if (null == n || n.parentId === D.O8) return;
    let i = null != n.parentId ? e[n.parentId] : null;
    (null == i || i.type !== s.Ip.CATEGORY) && (n.parentId = D.O8);
}
function G(e) {
    return r().filter(e, (e) => e.type !== s.Ip.CATEGORY).length;
}
function x(e, t) {
    if ((U(e), r().size(e) >= D.lj)) return { limit: D.lj, canUpsell: !1 };
    let { favoriteLimit: n, canUpsellFavoriteLimit: i } = (0, S.o9)();
    return t === s.Ip.CATEGORY || G(e) < n ? null : { limit: n, canUpsell: i };
}
function k(e) {
    let { limit: t, canUpsell: n } = e;
    n
        ? (0, O.A)(t)
        : o.A.show({ title: y.intl.string(y.t["+XYXtZ"]), body: y.intl.formatToPlainString(y.t.JaIyFi, { count: t }) });
}
function F(e) {
    e?.status === 403 &&
        (_.wc.loadIfNecessary(!0).catch(v.tEg),
        o.A.show({ title: y.intl.string(y.t.iufib1), body: y.intl.string(y.t.eAn6z2) }));
}
function B(e) {
    let { update: t, batched: n = !1 } = e;
    return _.wc.updateAsync("favorites", t, n ? _.Sb.FREQUENT_USER_ACTION : _.Sb.INFREQUENT_USER_ACTION, F);
}
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.default.fromTimestamp(Date.now());
    return ((e[n] = s.wL.create({ nickname: t, type: s.Ip.CATEGORY, position: M(e), parentId: D.O8 })), n);
}
function H(e, t) {
    let n = t.trim().toLowerCase();
    for (let t in e) {
        let i = e[t];
        if (i.type === s.Ip.CATEGORY && i.nickname.trim().toLowerCase() === n) return t;
    }
}
async function j(e, t, n) {
    let { silent: i = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = e.filter((e) => !T.A.isFavorite(e));
    if (0 === r.length) return;
    let a = !T.A.favoriteGuildEnabled;
    (await B({
        update: (e) => {
            let o = !1,
                d = ("parentId" in t ? t.parentId : null) ?? D.O8;
            for (let a of r) {
                let r = x(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                if (null != r) {
                    if ((i || k(r), !o)) return !1;
                    break;
                }
                if ("categoryName" in t && !o) {
                    d = H(e.favoriteChannels, t.categoryName) ?? V(e.favoriteChannels, t.categoryName);
                    let n = x(e.favoriteChannels, s.Ip.REFERENCE_ORIGINAL);
                    if (null != n) return (i || k(n), !1);
                }
                let c = A.A.getChannel(a);
                ((e.favoriteChannels[a] = s.wL.create({
                    nickname: "",
                    type: s.Ip.REFERENCE_ORIGINAL,
                    channelType: null != c ? l.ZQ.create({ value: c.type }) : void 0,
                    position: M(e.favoriteChannels),
                    parentId: d,
                })),
                    U(e.favoriteChannels),
                    w(e.favoriteChannels, a),
                    (o = !0),
                    (0, C.LO)(n, c?.type ?? null, G(e.favoriteChannels)));
            }
            o && a && !i && ((e.guildVisible = l._t.create({ value: !0 })), (0, C.uS)("auto", !0));
        },
    }),
        !i && r.some((e) => T.A.isFavorite(e)) && (0, R.P0)({ text: y.intl.string(y.t["4tSWQg"]), icon: L.StarIcon }));
}
async function W(e) {
    let { channelIds: t, parentId: n, source: i } = e;
    await j(t, { parentId: n ?? null }, i);
}
function Y(e) {
    let { trackAnalytics: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = T.A.getFavorite(e);
    null != n &&
        (P(new Set([e])),
        B({
            update: (i) => {
                if ((delete i.favoriteChannels[e], n.type === s.Ip.CATEGORY))
                    for (let t in i.favoriteChannels)
                        i.favoriteChannels[t].parentId === e && (i.favoriteChannels[t].parentId = D.O8);
                (U(i.favoriteChannels),
                    t &&
                        (0, C.TX)(
                            n.type === s.Ip.CATEGORY ? null : (A.A.getChannel(e)?.type ?? null),
                            G(i.favoriteChannels),
                        ));
            },
        }));
}
function K(e, t) {
    T.A.isFavorite(e) &&
        B({
            update: (n) => {
                n.favoriteChannels[e].nickname = t ?? "";
            },
        });
}
async function $(e, t) {
    let n = new Set(e);
    await B({
        update: (e) => {
            let i = (0, m.wm)(t).filter((t) => n.has(t.id) && null != e.favoriteChannels[t.id]);
            if (0 === i.length) return !1;
            for (let t of (P(new Set(i.map((e) => e.id))), i))
                (delete e.favoriteChannels[t.id], (0, C.TX)(t.type, G(e.favoriteChannels)));
        },
    });
}
async function z(e) {
    if (!(0, N.QN)(e)) return null;
    let t = e.trim(),
        n = p.default.fromTimestamp(Date.now());
    return (
        await B({
            update: (e) => {
                let i = x(e.favoriteChannels, s.Ip.CATEGORY);
                if (null != i) return (k(i), !1);
                V(e.favoriteChannels, t, n);
            },
        }),
        null != T.A.getFavorite(n) ? n : null
    );
}
async function X(e) {
    let { channelIds: t, categoryName: n, source: i } = e;
    await j(t, { categoryName: n }, i);
}
function q(e) {
    Y(e);
}
async function Z(e) {
    if (!T.A.autoAddJoinedThreads || T.A.isFavorite(e)) return;
    let t = A.A.getChannel(e);
    null == t ||
        !t.isThread() ||
        ((t.isPrivate() || h.A.can(b.xB.VIEW_CHANNEL, t)) &&
            (await j([e], { categoryName: D.A }, "auto_thread_join", { silent: !0 })));
}
function Q(e) {
    B({
        update: (t) => {
            if (
                t.autoAddJoinedThreads === e ||
                (e &&
                    null ==
                        (function (e) {
                            let t = H(e, D.A);
                            if (null != t) return t;
                            let n = x(e, s.Ip.CATEGORY);
                            return null != n ? void k(n) : V(e, D.A);
                        })(t.favoriteChannels))
            )
                return !1;
            t.autoAddJoinedThreads = e;
        },
    });
}
function J(e, t) {
    B({
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
function ee(e) {
    0 !== e.length &&
        B({
            update: (t) => {
                for (let n of e) {
                    let e = n.id;
                    (null != n.position && (t.favoriteChannels[e].position = n.position),
                        void 0 !== n.parent_id &&
                            ((t.favoriteChannels[e].parentId = n.parent_id ?? D.O8), w(t.favoriteChannels, e)));
                }
                (0, C.P)();
            },
        });
}
function et() {
    (B({
        update: (e) => {
            ((e.favoriteChannels = {}), (e.guildVisible = void 0), (e.muted = !1), (e.autoAddJoinedThreads = !1));
        },
    }),
        (0, d.Ab)(),
        (0, c._0)(),
        (0, _.xB)(a.M.FAVORITES_GUILD_SUGGESTIONS));
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "settings_page";
    B({
        update: (n) => {
            if (n.guildVisible?.value === e) return !1;
            ((n.guildVisible = l._t.create({ value: e })), (0, C.uS)(t, e));
        },
    });
}
function ei(e) {
    (en(e, "settings_page"), !e && (0, N.ai)(I.A.getGuildId()) && (0, u.pX)(v.BVt.ME));
}
