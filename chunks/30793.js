E.d(t, { A: () => g });
var n = E(989349),
    l = E.n(n),
    r = E(17928),
    i = E(451988),
    _ = E(228366),
    o = E(869038),
    c = E(7133),
    s = E(45938),
    a = E(652215);
let d = {},
    u = new Map(),
    S = [],
    C = [],
    h = [],
    p = new Set(),
    f = {},
    O = {},
    A = new Set();
function F(e) {
    let t = c.A.createFromServer(e),
        E = t.code;
    if (u.has(E)) u.set(E, u.get(E).merge(t));
    else if ((u.set(E, t), null != t.expiresAt)) {
        let e = new i.Ep();
        (d[E] = e),
            (function e(t) {
                let E = u.get(t);
                if (null == E || null == E.expiresAt) return;
                let n = E.expiresAt.valueOf() - l()().valueOf();
                if (n <= 0) u.delete(t), delete d[t], y.emitChange();
                else {
                    let E = d[t];
                    if (null == E) return;
                    E.start(Math.min(a.mnr, n), () => e(t));
                }
            })(E);
    }
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !A.has(e.channel_id)) return !1;
    let E = (0, s.pF)(e) ? (0, s.e7)(e?.embeds != null ? e?.embeds[0].url : void 0) : (0, s.e7)(e.content);
    return (
        0 !== E.length &&
        (E.forEach((e) => {
            S.includes(e) ||
                h.includes(e) ||
                (T({ code: e }), _.h.wait(() => o.A.resolveGiftCode(e, !1, !0).catch(a.FXj)));
        }),
        !1)
    );
}
function T(e) {
    let { code: t } = e;
    S.includes(t) || (S = [...S, t]);
}
function I(e) {
    let { message: t } = e;
    return D(t, !0);
}
function R(e) {
    let { channelId: t, messages: E } = e;
    A.add(t), E.forEach((e) => D(e, !0));
}
function G(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    t?.forEach((e) => D(e));
}
class U extends r.Ay.Store {
    static displayName = "GiftCodeStore";
    get(e) {
        let t = u.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? O[e] : null;
    }
    getForGifterSKUAndPlan(e, t, E) {
        return Array.from(u.values()).filter(
            (n) => n.userId === e && n.skuId === t && (null == E || n.subscriptionPlanId === E) && !n.isExpired(),
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
        return p.has((0, s.Kx)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return f[(0, s.Kx)(e, t)];
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
let y = new U(_.h, {
        CONNECTION_OPEN: function () {
            return A.clear(), !1;
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return null != t && A.add(t), !1;
        },
        GIFT_CODE_RESOLVE: T,
        GIFT_CODE_RESOLVE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            return (S = S.filter((e) => e !== t.code)), h.includes(t.code) || (h = [...h, t.code]), F(t);
        },
        GIFT_CODE_RESOLVE_FAILURE: function (e) {
            let { code: t, error: E } = e;
            (S = S.filter((e) => e !== t)), h.includes(t) || (h = [...h, t]), null != E && (O[t] = E);
        },
        GIFT_CODE_REDEEM: function (e) {
            let { code: t } = e;
            C.includes(t) || (C = [...C, t]);
        },
        GIFT_CODE_REDEEM_SUCCESS: function (e) {
            let { code: t } = e;
            C = C.filter((e) => e !== t);
            let E = u.get(t);
            null != E && u.set(t, E.merge({ redeemed: !0, uses: E.uses + 1 }));
        },
        GIFT_CODE_REDEEM_FAILURE: function (e) {
            let { code: t, error: E } = e;
            C = C.filter((e) => e !== t);
            let n = u.get(t);
            if (((O[t] = E), null != n))
                switch (E.code) {
                    case a.t02.UNKNOWN_GIFT_CODE:
                        u.set(t, n.set("revoked", !0));
                        break;
                    case a.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        u.set(t, n.set("uses", n.maxUses));
                }
        },
        GIFT_CODE_REVOKE_SUCCESS: function (e) {
            let { code: t } = e;
            u.delete(t);
            let E = d[t];
            null != E && (E.stop(), delete d[t]), h.includes(t) || (h = [...h, t]);
        },
        GIFT_CODE_CREATE_SUCCESS: function (e) {
            let { giftCode: t } = e;
            F(t);
        },
        GIFT_CODES_FETCH: function (e) {
            let { skuId: t, subscriptionPlanId: E } = e;
            p.add((0, s.Kx)(t, E));
        },
        GIFT_CODES_FETCH_SUCCESS: function (e) {
            let { giftCodes: t, skuId: E, subscriptionPlanId: n } = e;
            t.forEach(F);
            let l = (0, s.Kx)(E, n);
            (f[l] = Date.now()), p.delete(l);
        },
        GIFT_CODES_FETCH_FAILURE: function (e) {
            let { skuId: t, subscriptionPlanId: E } = e;
            p.delete((0, s.Kx)(t, E));
        },
        MESSAGE_CREATE: I,
        MESSAGE_UPDATE: I,
        LOCAL_MESSAGES_LOADED: R,
        LOAD_MESSAGES_SUCCESS: R,
        LOAD_MESSAGES_AROUND_SUCCESS: R,
        LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
            let { messages: t } = e;
            t.forEach((e) => D(e));
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
            let { pins: t } = e;
            t.forEach((e) => {
                let { message: t } = e;
                return D(t);
            });
        },
        SEARCH_MESSAGES_SUCCESS: function (e) {
            let { data: t } = e;
            t.forEach((e) => {
                let { messages: t } = e;
                t.forEach((e) => {
                    e.forEach((e) => D(e));
                });
            });
        },
        GIFT_CODE_UPDATE: function (e) {
            let { uses: t, code: E } = e,
                n = u.get(E);
            null != n && u.set(E, n.set("uses", Math.max(n.uses, t)));
        },
        LOAD_THREADS_SUCCESS: G,
        LOAD_ARCHIVED_THREADS_SUCCESS: G,
        LOAD_FORUM_POSTS: function (e) {
            let { threads: t } = e;
            Object.values(t).map((e) => {
                let { first_message: t } = e;
                return null != t && D(t);
            });
        },
    }),
    g = y;
