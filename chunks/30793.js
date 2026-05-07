"use strict";
n.d(t, { A: () => b });
var i = n(989349),
    r = n.n(i),
    s = n(17928),
    a = n(451988),
    o = n(228366),
    l = n(869038),
    u = n(7133),
    c = n(45938),
    d = n(652215);
let _ = {},
    f = new Map(),
    h = [],
    p = [],
    E = [],
    m = new Set(),
    g = {},
    A = {},
    I = new Set();
function T(e) {
    let t = u.A.createFromServer(e),
        n = t.code;
    if (f.has(n)) f.set(n, f.get(n).merge(t));
    else if ((f.set(n, t), null != t.expiresAt)) {
        let e = new a.Ep();
        (_[n] = e),
            (function e(t) {
                let n = f.get(t);
                if (null == n || null == n.expiresAt) return;
                let i = n.expiresAt.valueOf() - r()().valueOf();
                if (i <= 0) f.delete(t), delete _[t], R.emitChange();
                else {
                    let n = _[t];
                    if (null == n) return;
                    n.start(Math.min(d.mnr, i), () => e(t));
                }
            })(n);
    }
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !I.has(e.channel_id)) return !1;
    let n = (0, c.pF)(e) ? (0, c.e7)(e?.embeds != null ? e?.embeds[0].url : void 0) : (0, c.e7)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            h.includes(e) ||
                E.includes(e) ||
                (N({ code: e }), o.h.wait(() => l.A.resolveGiftCode(e, !1, !0).catch(d.FXj)));
        }),
        !1)
    );
}
function N(e) {
    let { code: t } = e;
    h.includes(t) || (h = [...h, t]);
}
function y(e) {
    let { message: t } = e;
    return S(t, !0);
}
function C(e) {
    let { channelId: t, messages: n } = e;
    I.add(t), n.forEach((e) => S(e, !0));
}
function v(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    t?.forEach((e) => S(e));
}
class O extends s.Ay.Store {
    static displayName = "GiftCodeStore";
    get(e) {
        let t = f.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? A[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(f.values()).filter(
            (i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired(),
        );
    }
    getIsResolving(e) {
        return h.includes(e);
    }
    getIsResolved(e) {
        return E.includes(e);
    }
    getIsAccepting(e) {
        return p.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return m.has((0, c.Kx)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return g[(0, c.Kx)(e, t)];
    }
    getResolvingCodes() {
        return h;
    }
    getResolvedCodes() {
        return E;
    }
    getAcceptingCodes() {
        return p;
    }
}
let R = new O(o.h, {
        CONNECTION_OPEN: function () {
            return I.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && I.add(t), !1;
        },
        GIFT_CODE_RESOLVE: N,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return (h = h.filter((e) => e !== t.code)), E.includes(t.code) || (E = [...E, t.code]), T(t);
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t, error: n } = e;
            (h = h.filter((e) => e !== t)), E.includes(t) || (E = [...E, t]), null != n && (A[t] = n);
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            p.includes(t) || (p = [...p, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            p = p.filter((e) => e !== t);
            let n = f.get(t);
            null != n && f.set(t, n.merge({ redeemed: !0, uses: n.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
            let { code: t, error: n } = e;
            p = p.filter((e) => e !== t);
            let i = f.get(t);
            if (((A[t] = n), null != i))
                switch (n.code) {
                    case d.t02.UNKNOWN_GIFT_CODE:
                        f.set(t, i.set("revoked", !0));
                        break;
                    case d.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        f.set(t, i.set("uses", i.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            f.delete(t);
            let n = _[t];
            null != n && (n.stop(), delete _[t]), E.includes(t) || (E = [...E, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            T(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            m.add((0, c.Kx)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
            t.forEach(T);
            let r = (0, c.Kx)(n, i);
            (g[r] = Date.now()), m.delete(r);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            m.delete((0, c.Kx)(t, n));
        },
        MESSAGE_CREATE: y,
        MESSAGE_UPDATE: y,
        LOCAL_MESSAGES_LOADED: C,
        LOAD_MESSAGES_SUCCESS: C,
        LOAD_MESSAGES_AROUND_SUCCESS: C,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => S(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: t } = e;
            t.forEach((e) => {
                let { message: t } = e;
                return S(t);
            });
        },
        SEARCH_MESSAGES_SUCCESS: function (e) {
            let { data: t } = e;
            t.forEach((e) => {
                let { messages: t } = e;
                t.forEach((e) => {
                    e.forEach((e) => S(e));
                });
            });
        },
        GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: n } = e,
                i = f.get(n);
            null != i && f.set(n, i.set("uses", Math.max(i.uses, t)));
        },
        LOAD_THREADS_SUCCESS: v,
        LOAD_ARCHIVED_THREADS_SUCCESS: v,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && S(t);
            });
        },
    }),
    b = R;
