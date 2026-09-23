(n.d(t, {
    dD: () => B,
    oF: () => j,
    _0: () => Y,
    Ay: () => z,
    uW: () => H,
    oo: () => k,
    pd: () => F,
    Tc: () => K,
    mB: () => V,
}),
    n(667532));
var i = n(882035),
    r = n(158390),
    a = n(121894),
    s = n(17928),
    l = n(636537),
    o = n(451988),
    d = n(228366),
    c = n(715314),
    u = n(870570),
    _ = n(787925);
let E = (0, n(945810).mj)({
    name: "2026-09-dismissible-content-server-arbitration",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var A = n(554146);
let h = [
    A.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION,
    A.M.CHANNEL_NOTICE_GUILD_BANNER,
    A.M.NAGBAR_NOTICE_PREMIUM_PROMO,
    A.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    A.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    A.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL,
    A.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL,
    A.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL,
    A.M.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL,
    A.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    A.M.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL,
    A.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE,
    A.M.SUPER_REACTIONS_COACHMARK_MOBILE,
    A.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL,
    A.M.SERVER_SHOP_PHANTOM_PREVIEW,
    A.M.CHECKOUT_RECOVERY_NAGBAR,
    A.M.GIFTING_PROMOTION_ICON,
    A.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK,
    A.M.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET,
    A.M.GIFTING_PROMOTION_REMINDER,
    A.M.GIFTING_INTENT_FRIENDS_TAB_BADGE,
    A.M.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE,
    A.M.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK,
    A.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
    A.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE,
    A.M.REFERRAL_PROGRAM_POPOVER,
    A.M.GAME_INVITE_ACCOUNT_LINK_UPSELL,
    A.M.PREMIUM_GROUP_POPOVER,
    A.M.PREMIUM_ORBS_UPSELL_POPOVER,
    A.M.BOOST_TO_UNLOCK_COACHMARK,
    A.M.EXPIRING_POWERUP_COACHMARK,
    A.M.FIRST_BOOSTER_UPSELL,
    A.M.REFERRAL_PROGRAM_POPOVER_V2,
    A.M.NAGBAR_QUEST_APP_UPSELL,
    A.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
    A.M.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL,
    A.M.NITRO_TAB_QUEST_ORB_MULTIPLIER_TOOLTIP,
    A.M.GAME_SERVER_NEW_GAMES_COACHMARK,
    A.M.XBOX_PERKS_RECONNECT_UPSELL,
    A.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
    A.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    A.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
    A.M.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER,
    A.M.COLLECTIBLES_SHOP_GAME_SERVER_HOSTING_BANNER,
    A.M.COD_3PP_POPOVER,
    A.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK,
    A.M.GAME_SERVER_HOSTING_IN_SHOP_DETECTION_COACHMARK,
    A.M.COD_3PP_NAGBAR_NOTICE,
    A.M.NITRO_FILE_UPLOAD_1GB_UPSELL,
    A.M.REFERRAL_PROGRAM_INCENTIVE_POPOVER,
    A.M.YOUTUBE_3P_POPOVER,
    A.M.MOBILE_NITRO_HOME_SETTINGS_BADGE,
    A.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    A.M.GAME_SERVER_HOSTING_NEW_COACHMARK,
    A.M.GAME_SHOP_ANNOUNCEMENT_MODAL,
    A.M.GAME_SERVER_PRICING_CHANGE_COACHMARK,
    A.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK,
    A.M.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL,
    A.M.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT,
    A.M.NITRO_FILE_UPLOAD_1GB_NEW_BADGE,
];
var I = n(652215);
let f = new Set(h),
    p = new r.A(1e3, 6e4),
    T = {},
    m = null;
function g() {
    return {
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set(),
        currentlyShownGroup: new Set(),
        lastWinnerTime: 0,
        postConnectionOpen: !1,
    };
}
let S = (0, i.h)(g),
    N = !1;
function C(e) {
    return {
        ...e,
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup),
    };
}
function O(e, t) {
    return (
        null == t ||
            (null != t.content && e.currentlyShown.delete(t.content),
            null != t.groupName && e.currentlyShownGroup.delete(t.groupName),
            e.shownFatigableCandidate?.content === t.content && (e.shownFatigableCandidate = null)),
        e
    );
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == t) return e;
    e.currentlyShown.add(t.content);
    let i = e.recentlyShown.filter((e) => e !== t.content);
    return (
        i.unshift(t.content),
        i.splice(5),
        (e.recentlyShown = i),
        null != t.groupName && e.currentlyShownGroup.add(t.groupName),
        _.C.has(t.content) ||
            ((e.shownFatigableCandidate = t),
            e.prevFatigableCandidate?.content !== t.content &&
                ((e.prevFatigableCandidate = t), (e.lastWinnerTime = new Date().getTime()))),
        t.onAdded?.(n),
        e
    );
}
function L(e, t) {
    return (e.candidates.delete(t.content), e);
}
function y(e, t) {
    let n = [...e.candidates.keys()].filter((e) => e !== t?.content);
    return R(O(e, e.shownFatigableCandidate), t, n);
}
function D(e) {
    return e.map((e) => ({ content: e, weight: 1 }));
}
async function v(e, t) {
    if (!E.getConfig({ location: "DismissibleContentShownStateStore" }).enabled)
        return { context: t, candidates: D(e), outcome: "client-only" };
    let n = e.filter((e) => f.has(e)),
        i = D(e.filter((e) => !f.has(e)));
    if (0 === n.length) return { context: t, candidates: i, outcome: "client-only" };
    if (p.pending) return { context: t, candidates: i, outcome: "server-backoff" };
    try {
        let e = await l.Bo.post({
                url: I.Rsh.DISMISSIBLE_CONTENT_ARBITRATE,
                body: { candidates: n.map((e) => ({ content: e })) },
                oldFormErrors: !0,
                rejectWithError: !0,
            }),
            r = (function (e, t) {
                let n = t.map((e) => e.content),
                    i = n.filter((e, t) => n.indexOf(e) !== t);
                if (i.length > 0)
                    throw Error(`Duplicate content in dismissible content arbitration response: ${i.join(", ")}`);
                let r = n.filter((t) => !e.includes(t));
                if (r.length > 0)
                    throw Error(`Unexpected content in dismissible content arbitration response: ${r.join(", ")}`);
                return t;
            })(n, e.body.candidates);
        return { context: t, candidates: [...i, ...r], outcome: "server-success" };
    } catch {
        return { context: t, candidates: i, outcome: "server-failure" };
    }
}
let b = new o.OC(
    async (e) => {
        let t = m;
        if (((m = null), null == t || t.epoch !== T)) return;
        if ("retry" === t.source && G()) return void p.succeed();
        let n = await v(e, t);
        if (n.context.epoch !== T) return;
        if ("retry" === n.context.source && G()) return void p.succeed();
        !(function (e) {
            if (
                (("client-only" === e.outcome || "server-success" === e.outcome) && p.succeed(),
                "server-failure" === e.outcome)
            ) {
                if (x(S.getState())) return p.succeed();
                p.fails >= 3
                    ? p.cancel()
                    : p.fail(() => {
                          U([...S.getState().candidates.keys()], "retry", e.context.epoch);
                      });
            }
        })(n);
        let i = !1;
        ((0, a.r)(() => {
            S.setState((e) => {
                let t = C(e),
                    r = (function (e, t) {
                        let n = t.filter((t) => {
                            let { content: n, weight: i } = t;
                            return e.candidates.has(n) && i > 0;
                        });
                        null !== e.prevFatigableCandidate &&
                            e.candidates.has(e.prevFatigableCandidate.content) &&
                            n.length > 1 &&
                            (n = n.filter((t) => {
                                let { content: n } = t;
                                return n !== e.prevFatigableCandidate?.content;
                            }));
                        let i = n.reduce((e, t) => e + t.weight, 0);
                        if (!Number.isFinite(i) || i <= 0) return;
                        let r = Math.random() * i;
                        for (let t of n) if ((r -= t.weight) < 0) return e.candidates.get(t.content);
                    })(t, n.candidates);
                return p.pending && null == r ? t : ((i = null != r), y(t, r));
            });
        }),
            i && w());
    },
    { delay: 250, maxConcurrentInvocations: 1 },
);
function M(e, t) {
    if (0 === e.candidates.size) return { state: e, arbitration: { type: "settled" } };
    let n = new Date().getTime() - e.lastWinnerTime > 3e5;
    if (
        null != e.prevFatigableCandidate &&
        e.candidates.has(e.prevFatigableCandidate.content) &&
        null == e.shownFatigableCandidate &&
        !n
    )
        return b.isInvoking()
            ? { state: e, arbitration: null != t ? { type: "request", candidates: [t] } : { type: "unchanged" } }
            : {
                  state: y(
                      e,
                      null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
                  ),
                  arbitration: { type: "settled" },
              };
    return null == e.shownFatigableCandidate || n
        ? b.isPending()
            ? { state: e, arbitration: null != t ? { type: "request", candidates: [t] } : { type: "unchanged" } }
            : x(e)
              ? { state: e, arbitration: { type: "unchanged" } }
              : { state: e, arbitration: { type: "request", candidates: [...e.candidates.keys()] } }
        : { state: e, arbitration: { type: "settled" } };
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    ("settled" === e.arbitration.type || ("request" === e.arbitration.type && t) ? w() : t && p.succeed(),
        "request" === e.arbitration.type &&
            (b.isPending() || b.isInvoking() || !(p.fails >= 3) || p.succeed(),
            U(e.arbitration.candidates, "candidate")));
}
function U(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
    n === T && (b.isPending() || (m = { epoch: n, source: t }), b.queue(e).catch(I.tEg));
}
function w() {
    ((T = {}), (m = null), p.succeed(), b.reset());
}
function G() {
    return x(S.getState());
}
function x(e) {
    let t = new Date().getTime();
    return null == e.shownFatigableCandidate && t - e.lastWinnerTime < 36e5;
}
function k(e) {
    let t = _.C.has(e.content),
        n = null;
    ((0, a.r)(() => {
        S.setState((i) => {
            let r = C(i);
            return N ? r : t ? R(r, e) : (n = M((r.candidates.set(e.content, e), r), e.content)).state;
        });
    }),
        null != n && P(n));
}
function F(e, t) {
    let n = null,
        i = !1,
        r = !1;
    ((0, a.r)(() => {
        S.setState((a) => {
            let s = C(a);
            if (((i = s.shownFatigableCandidate?.content === e.content), t)) return (n = M(O(L(s, e), e), null)).state;
            {
                let t = O(L(s, e), e);
                return ((r = i || 0 === t.candidates.size), t);
            }
        });
    }),
        null != n ? P(n, i) : r && w());
}
function B(e) {
    return S.getState().currentlyShown.has(e);
}
function V(e) {
    return S((t) => t.currentlyShown.has(e));
}
function H(e) {
    return S((t) => e.some((e) => t.currentlyShown.has(e)));
}
function j() {
    let e = [...S.getState().currentlyShown].filter((e) => !_.C.has(e)).length;
    return [S.getState().currentlyShown.size, e];
}
function W() {
    ((0, a.r)(() => {
        S.setState(() => {
            let e = g();
            return ((e.postConnectionOpen = !0), e);
        });
    }),
        w());
}
function Y() {
    (0, a.r)(() => {
        S.setState((e) => {
            let t = C(e);
            return ((t.prevFatigableCandidate = null), (t.lastWinnerTime = 0), t);
        });
    });
}
function K() {
    return S.getState().postConnectionOpen;
}
class $ extends s.Ay.Store {
    static displayName = "DismissibleContentShownStateStore";
    initialize() {
        (this.waitFor(c.A, u.A), this.syncWith([c.A, u.A], () => this.setHasRequiredAction()));
    }
    setHasRequiredAction() {
        N = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.A,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A;
            return null != t.getAction() || Object.keys(e.getState()).length > 0;
        })(c.A, u.A);
    }
}
function z(e, t) {
    return S(e, t);
}
new $(d.h, { CONNECTION_OPEN: () => W(), LOGOUT: () => W() });
