n.d(t, { A: () => D });
var i = n(536637),
    r = n.n(i),
    a = n(17928),
    s = n(451988),
    l = n(228366),
    o = n(869038),
    d = n(7133),
    c = n(45938),
    u = n(652215);
let _ = {},
    E = new Map(),
    A = [],
    h = [],
    I = [],
    f = new Set(),
    p = {},
    T = {},
    m = new Set();
function g(e) {
    let t = d.A.createFromServer(e),
        n = t.code;
    if (E.has(n)) E.set(n, E.get(n).merge(t));
    else if ((E.set(n, t), null != t.expiresAt)) {
        let e = new s.Ep();
        ((_[n] = e),
            (function e(t) {
                let n = E.get(t);
                if (null == n || null == n.expiresAt) return;
                let i = n.expiresAt.valueOf() - r()().valueOf();
                if (i <= 0) (E.delete(t), delete _[t], y.emitChange());
                else {
                    let n = _[t];
                    if (null == n) return;
                    n.start(Math.min(u.mnr, i), () => e(t));
                }
            })(n));
    }
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !m.has(e.channel_id)) return !1;
    let n = (0, c.pF)(e) ? (0, c.e7)(e?.embeds != null ? e?.embeds[0].url : void 0) : (0, c.e7)(e.content);
    return (
        0 !== n.length &&
        (n.forEach((e) => {
            A.includes(e) ||
                I.includes(e) ||
                (N({ code: e }), l.h.wait(() => o.Ay.resolveGiftCode(e, !1, !0).catch(u.FXj)));
        }),
        !1)
    );
}
function N(e) {
    let { code: t } = e;
    A.includes(t) || (A = [...A, t]);
}
function C(e) {
    let { message: t } = e;
    return S(t, !0);
}
function O(e) {
    let { channelId: t, messages: n } = e;
    (m.add(t), n.forEach((e) => S(e, !0)));
}
function R(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    t?.forEach((e) => S(e));
}
class L extends a.Ay.Store {
    static displayName = "GiftCodeStore";
    get(e) {
        let t = E.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? T[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(E.values()).filter(
            (i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired(),
        );
    }
    getIsResolving(e) {
        return A.includes(e);
    }
    getIsResolved(e) {
        return I.includes(e);
    }
    getIsAccepting(e) {
        return h.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return f.has((0, c.Kx)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return p[(0, c.Kx)(e, t)];
    }
    getResolvingCodes() {
        return A;
    }
    getResolvedCodes() {
        return I;
    }
    getAcceptingCodes() {
        return h;
    }
}
let y = new L(l.h, {
        CONNECTION_OPEN: function () {
            return (m.clear(), !1);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return (null != t && m.add(t), !1);
        },
        GIFT_CODE_RESOLVE: N,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return ((A = A.filter((e) => e !== t.code)), I.includes(t.code) || (I = [...I, t.code]), g(t));
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t, error: n } = e;
            ((A = A.filter((e) => e !== t)), I.includes(t) || (I = [...I, t]), null != n && (T[t] = n));
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            h.includes(t) || (h = [...h, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            h = h.filter((e) => e !== t);
            let n = E.get(t);
            null != n && E.set(t, n.merge({ redeemed: !0, uses: n.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
            let { code: t, error: n } = e;
            h = h.filter((e) => e !== t);
            let i = E.get(t);
            if (((T[t] = n), null != i))
                switch (n.code) {
                    case u.t02.UNKNOWN_GIFT_CODE:
                        E.set(t, i.set("revoked", !0));
                        break;
                    case u.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        E.set(t, i.set("uses", i.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            E.delete(t);
            let n = _[t];
            (null != n && (n.stop(), delete _[t]), I.includes(t) || (I = [...I, t]));
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            g(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            f.add((0, c.Kx)(t, n));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
            t.forEach(g);
            let r = (0, c.Kx)(n, i);
            ((p[r] = Date.now()), f.delete(r));
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: n } = e;
            f.delete((0, c.Kx)(t, n));
        },
        MESSAGE_CREATE: C,
        MESSAGE_UPDATE: C,
        LOCAL_MESSAGES_LOADED: O,
        LOAD_MESSAGES_SUCCESS: O,
        LOAD_MESSAGES_AROUND_SUCCESS: O,
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
                i = E.get(n);
            null != i && E.set(n, i.set("uses", Math.max(i.uses, t)));
        },
        LOAD_THREADS_SUCCESS: R,
        LOAD_ARCHIVED_THREADS_SUCCESS: R,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && S(t);
            });
        },
    }),
    D = y;
