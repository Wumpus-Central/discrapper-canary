"use strict";
n.d(t, { A: () => b });
var i = n(989349),
    s = n.n(i),
    l = n(17928),
    r = n(451988),
    a = n(228366),
    o = n(869038),
    d = n(7133),
    c = n(45938),
    u = n(652215);
let _ = {},
    h = new Map(),
    p = [],
    m = [],
    g = [],
    x = new Set(),
    f = {},
    A = {},
    E = new Set();
function I(e) {
    let t = d.A.createFromServer(e),
        n = t.code;
    if (h.has(n)) h.set(n, h.get(n).merge(t));
    else if ((h.set(n, t), null != t.expiresAt)) {
        let e = new r.Ep();
        (_[n] = e),
            (function e(t) {
                let n = h.get(t);
                if (null == n || null == n.expiresAt) return;
                let i = n.expiresAt.valueOf() - s()().valueOf();
                if (i <= 0) h.delete(t), delete _[t], y.emitChange();
                else {
                    let n = _[t];
                    if (null == n) return;
                    n.start(Math.min(u.mnr, i), () => e(t));
                }
            })(n);
    }
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !E.has(e.channel_id)) return !1;
    let n = (0, c.pF)(e) ? (0, c.e7)(e?.embeds != null ? e?.embeds[0].url : void 0) : (0, c.e7)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            p.includes(e) ||
                g.includes(e) ||
                (j({ code: e }), a.h.wait(() => o.A.resolveGiftCode(e, !1, !0).catch(u.FXj)));
        }),
        !1)
    );
}
function j(e) {
    let { code: t } = e;
    p.includes(t) || (p = [...p, t]);
}
function C(e) {
    let { message: t } = e;
    return v(t, !0);
}
function N(e) {
    let { channelId: t, messages: n } = e;
    E.add(t), n.forEach((e) => v(e, !0));
}
function T(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    t?.forEach((e) => v(e));
}
class S extends l.Ay.Store {
    static displayName = "GiftCodeStore";
    get(e) {
        let t = h.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? A[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(h.values()).filter(
            (i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired(),
        );
    }
    getIsResolving(e) {
        return p.includes(e);
    }
    getIsResolved(e) {
        return g.includes(e);
    }
    getIsAccepting(e) {
        return m.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return x.has((0, c.Kx)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return f[(0, c.Kx)(e, t)];
    }
    getResolvingCodes() {
        return p;
    }
    getResolvedCodes() {
        return g;
    }
    getAcceptingCodes() {
        return m;
    }
}
let y = new S(a.h, {
        CONNECTION_OPEN: function () {
            return E.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && E.add(t), !1;
        },
        GIFT_CODE_RESOLVE: j,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return (p = p.filter((e) => e !== t.code)), g.includes(t.code) || (g = [...g, t.code]), I(t);
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t, error: n } = e;
            (p = p.filter((e) => e !== t)), g.includes(t) || (g = [...g, t]), null != n && (A[t] = n);
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            m.includes(t) || (m = [...m, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            m = m.filter((e) => e !== t);
            let n = h.get(t);
            null != n && h.set(t, n.merge({ redeemed: !0, uses: n.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
            let { code: t, error: n } = e;
            m = m.filter((e) => e !== t);
            let i = h.get(t);
            if (((A[t] = n), null != i))
                switch (n.code) {
                    case u.t02.UNKNOWN_GIFT_CODE:
                        h.set(t, i.set("revoked", !0));
                        break;
                    case u.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        h.set(t, i.set("uses", i.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            h.delete(t);
            let n = _[t];
            null != n && (n.stop(), delete _[t]), g.includes(t) || (g = [...g, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            I(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            x.add((0, c.Kx)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
            t.forEach(I);
            let s = (0, c.Kx)(n, i);
            (f[s] = Date.now()), x.delete(s);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            x.delete((0, c.Kx)(t, n));
        },
        MESSAGE_CREATE: C,
        MESSAGE_UPDATE: C,
        LOCAL_MESSAGES_LOADED: N,
        LOAD_MESSAGES_SUCCESS: N,
        LOAD_MESSAGES_AROUND_SUCCESS: N,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => v(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: t } = e;
            t.forEach((e) => {
                let { message: t } = e;
                return v(t);
            });
        },
        SEARCH_MESSAGES_SUCCESS: function (e) {
            let { data: t } = e;
            t.forEach((e) => {
                let { messages: t } = e;
                t.forEach((e) => {
                    e.forEach((e) => v(e));
                });
            });
        },
        GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: n } = e,
                i = h.get(n);
            null != i && h.set(n, i.set("uses", Math.max(i.uses, t)));
        },
        LOAD_THREADS_SUCCESS: T,
        LOAD_ARCHIVED_THREADS_SUCCESS: T,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && v(t);
            });
        },
    }),
    b = y;
