n.d(t, { A: () => Z }), n(896048);
var r,
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(451988),
    l = n(73153),
    c = n(869038),
    u = n(7133),
    d = n(45938),
    f = n(652215);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = 2147483647,
    h = {},
    m = new Map(),
    g = [],
    E = [],
    b = [],
    y = new Set(),
    O = {},
    A = {},
    v = new Set();
function S(e) {
    let t = u.A.createFromServer(e),
        n = t.code;
    if (m.has(n)) m.set(n, m.get(n).merge(t));
    else if ((m.set(n, t), null != t.expiresAt)) {
        let e = new o.Ep();
        (h[n] = e), I(n);
    }
}
function I(e) {
    let t = m.get(e);
    if (null == t || null == t.expiresAt) return;
    let n = t.expiresAt.valueOf() - a()().valueOf();
    if (n <= 0) m.delete(e), delete h[e], X.emitChange();
    else {
        let t = h[e];
        if (null == t) return;
        t.start(Math.min(_, n), () => I(e));
    }
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !v.has(e.channel_id)) return !1;
    let n = (0, d.pF)(e)
        ? (0, d.e7)((null == e ? void 0 : e.embeds) != null ? (null == e ? void 0 : e.embeds[0].url) : void 0)
        : (0, d.e7)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            g.includes(e) ||
                b.includes(e) ||
                (R({ code: e }), l.h.wait(() => c.A.resolveGiftCode(e, !1, !0).catch(f.FXj)));
        }),
        !1)
    );
}
function C() {
    return v.clear(), !1;
}
function N(e) {
    let { channelId: t } = e;
    return null != t && v.add(t), !1;
}
function R(e) {
    let { code: t } = e;
    g.includes(t) || (g = [...g, t]);
}
function w(e) {
    let { giftCode: t } = e;
    return (g = g.filter((e) => e !== t.code)), b.includes(t.code) || (b = [...b, t.code]), S(t);
}
function P(e) {
    let { code: t } = e;
    (g = g.filter((e) => e !== t)), b.includes(t) || (b = [...b, t]);
}
function D(e) {
    let { code: t } = e;
    m.delete(t);
    let n = h[t];
    null != n && (n.stop(), delete h[t]), b.includes(t) || (b = [...b, t]);
}
function x(e) {
    let { code: t } = e;
    E.includes(t) || (E = [...E, t]);
}
function L(e) {
    let { giftCode: t } = e;
    S(t);
}
function j(e) {
    let { uses: t, code: n } = e,
        r = m.get(n);
    null != r && m.set(n, r.set("uses", Math.max(r.uses, t)));
}
function M(e) {
    let { skuId: t, subscriptionPlanId: n } = e;
    y.add((0, d.Kx)(t, n));
}
function k(e) {
    let { skuId: t, subscriptionPlanId: n } = e;
    y.delete((0, d.Kx)(t, n));
}
function U(e) {
    let { giftCodes: t, skuId: n, subscriptionPlanId: r } = e;
    t.forEach(S);
    let i = (0, d.Kx)(n, r);
    (O[i] = Date.now()), y.delete(i);
}
function G(e) {
    let { code: t } = e;
    E = E.filter((e) => e !== t);
    let n = m.get(t);
    null != n &&
        m.set(
            t,
            n.merge({
                redeemed: !0,
                uses: n.uses + 1,
            }),
        );
}
function V(e) {
    let { code: t, error: n } = e;
    E = E.filter((e) => e !== t);
    let r = m.get(t);
    if (((A[t] = n), null != r))
        switch (n.code) {
            case f.t02.UNKNOWN_GIFT_CODE:
                m.set(t, r.set("revoked", !0));
                break;
            case f.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                m.set(t, r.set("uses", r.maxUses));
        }
}
function F(e) {
    let { message: t } = e;
    return T(t, !0);
}
function B(e) {
    let { channelId: t, messages: n } = e;
    v.add(t), n.forEach((e) => T(e, !0));
}
function H(e) {
    let { messages: t } = e;
    t.forEach((e) => T(e));
}
function Y(e) {
    let { pins: t } = e;
    t.forEach((e) => {
        let { message: t } = e;
        return T(t);
    });
}
function W(e) {
    let { data: t } = e;
    t.forEach((e) => {
        let { messages: t } = e;
        t.forEach((e) => {
            e.forEach((e) => T(e));
        });
    });
}
function K(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    null == t || t.forEach((e) => T(e));
}
function z(e) {
    let { threads: t } = e;
    Object.values(t).map((e) => {
        let { first_message: t } = e;
        return null != t && T(t);
    });
}
class q extends (r = s.Ay.Store) {
    get(e) {
        let t = m.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? A[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(m.values()).filter(
            (r) => r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired(),
        );
    }
    getIsResolving(e) {
        return g.includes(e);
    }
    getIsResolved(e) {
        return b.includes(e);
    }
    getIsAccepting(e) {
        return E.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return y.has((0, d.Kx)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return O[(0, d.Kx)(e, t)];
    }
    getResolvingCodes() {
        return g;
    }
    getResolvedCodes() {
        return b;
    }
    getAcceptingCodes() {
        return E;
    }
}
p(q, "displayName", "GiftCodeStore");
let X = new q(l.h, {
        CONNECTION_OPEN: C,
        CHANNEL_SELECT: N,
        GIFT_CODE_RESOLVE: R,
        GIFT_CODE_RESOLVE_SUCCESS: w,
        GIFT_CODE_RESOLVE_FAILURE: P,
        GIFT_CODE_REDEEM: x,
        GIFT_CODE_REDEEM_SUCCESS: G,
        GIFT_CODE_REDEEM_FAILURE: V,
        GIFT_CODE_REVOKE_SUCCESS: D,
        GIFT_CODE_CREATE_SUCCESS: L,
        GIFT_CODES_FETCH: M,
        GIFT_CODES_FETCH_SUCCESS: U,
        GIFT_CODES_FETCH_FAILURE: k,
        MESSAGE_CREATE: F,
        MESSAGE_UPDATE: F,
        LOCAL_MESSAGES_LOADED: B,
        LOAD_MESSAGES_SUCCESS: B,
        LOAD_MESSAGES_AROUND_SUCCESS: B,
        LOAD_RECENT_MENTIONS_SUCCESS: H,
        LOAD_PINNED_MESSAGES_SUCCESS: Y,
        SEARCH_MESSAGES_SUCCESS: W,
        GIFT_CODE_UPDATE: j,
        LOAD_THREADS_SUCCESS: K,
        LOAD_ARCHIVED_THREADS_SUCCESS: K,
        LOAD_FORUM_POSTS: z,
    }),
    Z = X;
