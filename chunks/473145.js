var i = n(435558),
    r = n.n(i);
n(536637);
var a = n(336934),
    s = n(559201),
    l = n(864310);
n(434564);
var o = n(71393),
    d = n(287809),
    c = n(178368),
    u = n(166403);
(n(255438), n(403362), n(975571));
var _ = n(722178);
n(856383);
var E = n(652215);
n(307731);
var A = n(682901),
    f = n(88001),
    h = n(792996),
    I = n(107198);
Object.freeze({ 1: 1, 2: 2, 3: 3, 4: 6, 5: 9, 6: 12, 7: 15, 8: 18, 9: 24 });
let p = [E.TVA.NONE, E.TVA.TIER_1, E.TVA.TIER_2, E.TVA.TIER_3],
    m = p.slice().reverse();
function T(e, t) {
    return null != t && t.features.has(E.GuildFeatures.MORE_STICKERS) && e === E.TVA.TIER_3
        ? a.K.MAX_STICKER_SLOTS
        : A.d8[e];
}
function g(e) {
    return A.nk[e];
}
function S(e, t) {
    return A.TG[e].features.includes(t);
}
let N = r().memoize((e) =>
    S(E.TVA.TIER_1, e) ? E.TVA.TIER_1 : S(E.TVA.TIER_2, e) ? E.TVA.TIER_2 : S(E.TVA.TIER_3, e) ? E.TVA.TIER_3 : null,
);
function C(e) {
    return r()
        .values(e)
        .filter((e) => e.isAvailable());
}
let O = [
    { tier: E.TVA.TIER_3, amount: E.M2T[E.TVA.TIER_3], nextTier: null },
    { tier: E.TVA.TIER_2, amount: E.M2T[E.TVA.TIER_2], nextTier: E.TVA.TIER_3 },
    { tier: E.TVA.TIER_1, amount: E.M2T[E.TVA.TIER_1], nextTier: E.TVA.TIER_2 },
];
function R(e) {
    let t = 8 + (e.premiumFeatures?.additionalSoundSlots ?? 0);
    return Math.max(e.features.has(E.GuildFeatures.MORE_SOUNDBOARD) ? 200 : 8, t);
}
function L(e) {
    return e.subscription?.status === E.Dmq.CANCELED || e.canceled;
}
(E.TVA.NONE,
    E.TVA.TIER_1,
    E.TVA.TIER_2,
    E.TVA.TIER_3,
    n.d(
        t,
        {},
        {
            Cp: g,
            D$: C,
            I5: L,
            Nc: function (e) {
                let { fractionalState: t } = e,
                    n = u.A.getPremiumTypeSubscription(),
                    i = d.default.getCurrentUser();
                c.A.hasFetched || c.A.isFetching || (0, s.CD)();
                let r = C(c.A.boostSlots),
                    a = n?.isPausedOrPausePending,
                    l = r.length > 0;
                if (a && t === A.xc.NONE && !l) return h.intl.string(h.t.mOWsF1);
                if (i?.isPremiumGroupMember())
                    return h.intl.formatToPlainString(I.default["5xN/C1"], { premiumGroupProductName: (0, f.DP)() });
                let { numAvailableGuildBoostSlots: o, numCanceledGuildBoostSlots: p } = Object.values(
                    c.A.boostSlots,
                ).reduce(
                    (e, t) => (
                        L(t) && e.numCanceledGuildBoostSlots++,
                        t.isAvailable() && e.numAvailableGuildBoostSlots++,
                        e
                    ),
                    { numAvailableGuildBoostSlots: 0, numCanceledGuildBoostSlots: 0 },
                );
                if (null == n || o > 0) return null;
                if (n.status === E.Dmq.PAST_DUE) return h.intl.string(h.t.De4Vm6);
                if (n.status === E.Dmq.ACCOUNT_HOLD) return h.intl.string(h.t.JakNQ8);
                if (p > 0) return h.intl.string(h.t.x25mZR);
                if (null == n.renewalMutations) return null;
                let m = _.bx(n.renewalMutations.additionalPlans);
                return _.bx(n.additionalPlans) > m ? h.intl.string(h.t.x25mZR) : h.intl.string(h.t["W/bb8f"]);
            },
            Os: function (e, t) {
                let n = (0, l.Z)(e.id).available;
                return Math.max(0, E.M2T[t] - n);
            },
            P7: function (e) {
                return o.A.getGuild(e)?.premiumTier ?? E.TVA.NONE;
            },
            Qu: function (e) {
                switch (e) {
                    case E.TVA.NONE:
                        return h.intl.string(h.t.LcKgJd);
                    case E.TVA.TIER_1:
                        return h.intl.string(h.t.xRjU1V);
                    case E.TVA.TIER_2:
                        return h.intl.string(h.t.C7e2Bo);
                    case E.TVA.TIER_3:
                        return h.intl.string(h.t.avGxmk);
                    default:
                        throw Error("Not a valid tier type");
                }
            },
            Ry: function (e) {
                if (e === E.TVA.NONE) return A.y7[e];
                let t = p[p.indexOf(e) - 1];
                return A.y7[e] - A.y7[t];
            },
            Ys: N,
            aG: T,
            ax: function (e) {
                return e === E.TVA.NONE ? E.TVA.TIER_1 : O.find((t) => t.tier === e)?.nextTier;
            },
            fA: R,
            fi: m,
            gb: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { useLevels: n = !0 } = t;
                switch (e) {
                    case E.TVA.NONE:
                        return n ? h.intl.string(h.t.LcKgJd) : h.intl.string(h.t.mx8j2m);
                    case E.TVA.TIER_1:
                        return h.intl.string(h.t.nzXtaS);
                    case E.TVA.TIER_2:
                        return h.intl.string(h.t["h33/uW"]);
                    case E.TVA.TIER_3:
                        return h.intl.string(h.t.BfF6ED);
                    default:
                        throw Error("Not a valid tier type");
                }
            },
            k1: function (e) {
                switch (e) {
                    case E.TVA.NONE:
                        return E.btD.NONE;
                    case E.TVA.TIER_1:
                        return E.btD.TIER_1;
                    case E.TVA.TIER_2:
                        return E.btD.TIER_2;
                    case E.TVA.TIER_3:
                        return E.btD.TIER_3;
                    default:
                        return null;
                }
            },
            kN: function (e) {
                return m.find((t) => e >= E.M2T[t]) ?? E.TVA.NONE;
            },
            os: function (e) {
                return !e.ended && (null == e.endsAt || e.endsAt.getTime() > Date.now());
            },
            sN: function (e) {
                let t = 50 + (e.premiumFeatures?.additionalEmojiSlots ?? 0);
                return Math.max(e.features.has(E.GuildFeatures.MORE_EMOJI) ? 200 : 50, t);
            },
            tO: function (e, t, n) {
                return -1 === p.indexOf(n) ? 0 : Math.max(0, R(e) - t.length);
            },
            yA: function (e, t) {
                let n = g(t),
                    i = p.indexOf(t);
                if (-1 === i) return 0;
                let r = p[i - 1],
                    a = null != r ? T(r) : 0,
                    s = T(t);
                return Math.max(0, n - e.slice(a, s).length);
            },
            yS: function (e, t) {
                return null == t || (null != e && e >= t);
            },
        },
    ));
