var i = n(536637),
    r = n.n(i),
    a = n(855986),
    s = n(451988),
    l = n(73153),
    o = n(869038),
    d = n(7133),
    c = n(45938),
    u = n(46653),
    _ = n(652215);
let E = {},
    A = new Map(),
    f = [],
    h = [],
    I = [],
    p = new Set(),
    m = {},
    T = {},
    g = new Set();
function S(e) {
    let t = d.A.createFromServer(e),
        n = t.code,
        i = A.get(n);
    if (null != i)
        A.set(
            n,
            i.merge(
                void 0 === t.giftSubscriptionAgreement
                    ? t.set("giftSubscriptionAgreement", i.giftSubscriptionAgreement)
                    : t,
            ),
        );
    else if ((A.set(n, t), null != t.expiresAt)) {
        let e = new s.Ep();
        ((E[n] = e),
            (function e(t) {
                let n = A.get(t);
                if (null == n || null == n.expiresAt) return;
                let i = n.expiresAt.valueOf() - r()().valueOf();
                if (i <= 0) (A.delete(t), delete E[t], D.emitChange());
                else {
                    let n = E[t];
                    if (null == n) return;
                    n.start(Math.min(_.mnr, i), () => e(t));
                }
            })(n));
    }
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t && !g.has(e.channel_id)) return !1;
    let n = (0, c.pF)(e) ? (0, c.e7)(e?.embeds != null ? e?.embeds[0].url : void 0) : (0, c.e7)(e.content);
    if (0 === n.length) return !1;
    let i = e.type === _.lAJ.CUSTOM_GIFT || (null != e.author && e.author.id === u.default.getId());
    return (
        n.forEach((e) => {
            f.includes(e) ||
                I.includes(e) ||
                (C({ code: e }),
                o.Ay.resolveGiftCode(e, { withSubscriptionPlan: !0, withGiftSubscriptionAgreement: i }).catch(_.FXj));
        }),
        !1
    );
}
function C(e) {
    let { code: t } = e;
    f.includes(t) || (f = [...f, t]);
}
function O(e) {
    let { message: t } = e;
    return N(t, !0);
}
function R(e) {
    let { channelId: t, messages: n } = e;
    (g.add(t), n.forEach((e) => N(e, !0)));
}
function L(e) {
    let { firstMessages: t } = e;
    if (null == t) return !1;
    t?.forEach((e) => N(e));
}
class y extends a.Ay.Store {
    static displayName = "GiftCodeStore";
    initialize() {
        this.waitFor(u.default);
    }
    get(e) {
        let t = A.get(e);
        return null == t || t.isExpired() ? null : t;
    }
    getError(e) {
        return null != e ? T[e] : null;
    }
    getForGifterSKUAndPlan(e, t, n) {
        return Array.from(A.values()).filter(
            (i) => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired(),
        );
    }
    getIsResolving(e) {
        return f.includes(e);
    }
    getIsResolved(e) {
        return I.includes(e);
    }
    getIsAccepting(e) {
        return h.includes(e);
    }
    getUserGiftCodesFetchingForSKUAndPlan(e, t) {
        return p.has((0, c.Kx)(e, t));
    }
    getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
        return m[(0, c.Kx)(e, t)];
    }
    getResolvingCodes() {
        return f;
    }
    getResolvedCodes() {
        return I;
    }
    getAcceptingCodes() {
        return h;
    }
}
let D = new y(l.h, {
    CONNECTION_OPEN: function () {
        return (g.clear(), !1);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (null != t && g.add(t), !1);
    },
    GIFT_CODE_RESOLVE: C,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        return ((f = f.filter((e) => e !== t.code)), I.includes(t.code) || (I = [...I, t.code]), S(t));
    },
    GIFT_CODE_RESOLVE_FAILURE: function (e) {
        let { code: t, error: n } = e;
        ((f = f.filter((e) => e !== t)), I.includes(t) || (I = [...I, t]), null != n && (T[t] = n));
    },
    GIFT_CODE_REDEEM: function (e) {
        let { code: t } = e;
        h.includes(t) || (h = [...h, t]);
    },
    GIFT_CODE_REDEEM_SUCCESS: function (e) {
        let { code: t } = e;
        h = h.filter((e) => e !== t);
        let n = A.get(t);
        null != n && A.set(t, n.merge({ redeemed: !0, uses: n.uses + 1 }));
    },
    GIFT_CODE_REDEEM_FAILURE: function (e) {
        let { code: t, error: n } = e;
        h = h.filter((e) => e !== t);
        let i = A.get(t);
        if (((T[t] = n), null != i))
            switch (n.code) {
                case _.t02.UNKNOWN_GIFT_CODE:
                    A.set(t, i.set("revoked", !0));
                    break;
                case _.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    A.set(t, i.set("uses", i.maxUses));
            }
    },
    GIFT_CODE_REVOKE_SUCCESS: function (e) {
        let { code: t } = e;
        A.delete(t);
        let n = E[t];
        (null != n && (n.stop(), delete E[t]), I.includes(t) || (I = [...I, t]));
    },
    GIFT_CODE_CREATE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        S(t);
    },
    GIFT_CODES_FETCH: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        p.add((0, c.Kx)(t, n));
    },
    GIFT_CODES_FETCH_SUCCESS: function (e) {
        let { giftCodes: t, skuId: n, subscriptionPlanId: i } = e;
        t.forEach(S);
        let r = (0, c.Kx)(n, i);
        ((m[r] = Date.now()), p.delete(r));
    },
    GIFT_CODES_FETCH_FAILURE: function (e) {
        let { skuId: t, subscriptionPlanId: n } = e;
        p.delete((0, c.Kx)(t, n));
    },
    MESSAGE_CREATE: O,
    MESSAGE_UPDATE: O,
    LOCAL_MESSAGES_LOADED: R,
    LOAD_MESSAGES_SUCCESS: R,
    LOAD_MESSAGES_AROUND_SUCCESS: R,
    LOAD_RECENT_MENTIONS_SUCCESS: function (e) {
        let { messages: t } = e;
        t.forEach((e) => N(e));
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t } = e;
        t.forEach((e) => {
            let { message: t } = e;
            return N(t);
        });
    },
    SEARCH_MESSAGES_SUCCESS: function (e) {
        let { data: t } = e;
        t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => N(e));
            });
        });
    },
    GIFT_CODE_UPDATE: function (e) {
        let { uses: t, code: n } = e,
            i = A.get(n);
        null != i && A.set(n, i.set("uses", Math.max(i.uses, t)));
    },
    LOAD_THREADS_SUCCESS: L,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e;
        Object.values(t).map((e) => {
            let { first_message: t } = e;
            return null != t && N(t);
        });
    },
});
n.d(t, {}, { A: D });
