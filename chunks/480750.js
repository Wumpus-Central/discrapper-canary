(n.d(t, { h: () => i, l: () => o }), n(582128));
var l = n(65238),
    r = n(174459),
    s = n(602051),
    a = n(652215);
function i(e, t, n) {
    null != (0, l.XF)(t) && null != e.target.closest("a") && o(t, n, s.Z.INLINE_HELP_TEXT_CLICKED);
}
function o(e, t, n) {
    let s = (0, l.XF)(e);
    null != s &&
        r.default.track(a.HAw.SHOP_COLLECT_AND_CLAIM_TAKEOVER_PROMOTION_ACTION, {
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
