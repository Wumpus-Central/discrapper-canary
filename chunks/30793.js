l.d(t, { A: () => F });
var n = l(989349),
    r = l.n(n),
    i = l(311907),
    s = l(451988),
    o = l(73153),
    a = l(869038),
    d = l(7133),
    c = l(45938),
    u = l(652215);
let E = {},
    _ = new Map(),
    S = [],
    C = [],
    h = [],
    f = new Set(),
    A = {},
    g = {},
    p = new Set();
function m(e) {
    let t = d.A.createFromServer(e),
        l = t.code;
    if (_.has(l)) _.set(l, _.get(l).merge(t));
    else if ((_.set(l, t), null != t.expiresAt)) {
        let e = new s.Ep();
        (E[l] = e),
            (function e(t) {
                let l = _.get(t);
                if (null == l || null == l.expiresAt) return;
                let n = l.expiresAt.valueOf() - r()().valueOf();
                if (n <= 0) _.delete(t), delete E[t], G.emitChange();
                else {
                    let l = E[t];
                    if (null == l) return;
                    l.start(Math.min(u.mnr, n), () => e(t));
                }
            })(l);
    }
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !p.has(e.channel_id)) return !1;
    let l = (0, c.pF)(e) ? (0, c.e7)(e?.embeds != null ? e?.embeds[0].url : void 0) : (0, c.e7)(e.content);
    return (
        0 !== l.length &&
        (l.forEach((e) => {
            S.includes(e) ||
                h.includes(e) ||
                (I({ code: e }), o.h.wait(() => a.A.resolveGiftCode(e, !1, !0).catch(u.FXj)));
        }),
        !1)
    );
}
function I(e) {
    let { code: t } = e;
    S.includes(t) || (S = [...S, t]);
}
function D(e) {
    let { message: t } = e;
    return R(t, !0);
}
function T(e) {
    let { channelId: t, messages: l } = e;
    p.add(t), l.forEach((e) => R(e, !0));
}
function O(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    t?.forEach((e) => R(e));
}
class x extends i.Ay.Store {
    static displayName = "GiftCodeStore";
    get(e) {
        let t = _.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? g[e] : null;
    }
    getForGifterSKUAndPlan(e, t, l) {
        return Array.from(_.values()).filter(
            (n) => n.userId === e && n.skuId === t && (null == l || n.subscriptionPlanId === l) && !n.isExpired(),
        );
    }
    getIsResolving(e) {
        return S.includes(e);
    }
    getIsResolved(e) {
        return h.includes(e);
    }
    getIsAccepting(e) {
        return C.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return f.has((0, c.Kx)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return A[(0, c.Kx)(e, t)];
    }
    getResolvingCodes() {
        return S;
    }
    getResolvedCodes() {
        return h;
    }
    getAcceptingCodes() {
        return C;
    }
}
let G = new x(o.h, {
        CONNECTION_OPEN: function () {
            return p.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && p.add(t), !1;
        },
        GIFT_CODE_RESOLVE: I,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return (S = S.filter((e) => e !== t.code)), h.includes(t.code) || (h = [...h, t.code]), m(t);
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t, error: l } = e;
            (S = S.filter((e) => e !== t)), h.includes(t) || (h = [...h, t]), null != l && (g[t] = l);
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            C.includes(t) || (C = [...C, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            C = C.filter((e) => e !== t);
            let l = _.get(t);
            null != l && _.set(t, l.merge({ redeemed: !0, uses: l.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
            let { code: t, error: l } = e;
            C = C.filter((e) => e !== t);
            let n = _.get(t);
            if (((g[t] = l), null != n))
                switch (l.code) {
                    case u.t02.UNKNOWN_GIFT_CODE:
                        _.set(t, n.set("revoked", !0));
                        break;
                    case u.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        _.set(t, n.set("uses", n.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            _.delete(t);
            let l = E[t];
            null != l && (l.stop(), delete E[t]), h.includes(t) || (h = [...h, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            m(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: l } = e;
            f.add((0, c.Kx)(t, l));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: l, subscriptionPlanId: n } = e;
            t.forEach(m);
            let r = (0, c.Kx)(l, n);
            (A[r] = Date.now()), f.delete(r);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: l } = e;
            f.delete((0, c.Kx)(t, l));
        },
        MESSAGE_CREATE: D,
        MESSAGE_UPDATE: D,
        LOCAL_MESSAGES_LOADED: T,
        LOAD_MESSAGES_SUCCESS: T,
        LOAD_MESSAGES_AROUND_SUCCESS: T,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => R(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: t } = e;
            t.forEach((e) => {
                let { message: t } = e;
                return R(t);
            });
        },
        SEARCH_MESSAGES_SUCCESS: function (e) {
            let { data: t } = e;
            t.forEach((e) => {
                let { messages: t } = e;
                t.forEach((e) => {
                    e.forEach((e) => R(e));
                });
            });
        },
        GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: l } = e,
                n = _.get(l);
            null != n && _.set(l, n.set("uses", Math.max(n.uses, t)));
        },
        LOAD_THREADS_SUCCESS: O,
        LOAD_ARCHIVED_THREADS_SUCCESS: O,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && R(t);
            });
        },
    }),
    F = G;
