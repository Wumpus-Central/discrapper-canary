(n.d(t, { h: () => o, l: () => i }), n(582128));
var r = n(65238),
    l = n(174459),
    s = n(602051),
    a = n(652215);
function o(e, t, n) {
    null != (0, r.XF)(t) && null != e.target.closest("a") && i(t, n, s.Z.INLINE_HELP_TEXT_CLICKED);
}
function i(e, t, n) {
    let s = (0, r.XF)(e);
    null != s &&
        l.default.track(a.HAw.SHOP_COLLECT_AND_CLAIM_TAKEOVER_PROMOTION_ACTION, {
            promotion_id: e.id,
            promotion_type: s.type,
            promotion_subtype: s.subtype,
            current_progress: e.progress?.current,
            target_progress: e.progress?.target,
            surface: t,
            action: n,
            reward_status: e.rewardStatus,
        });
}
