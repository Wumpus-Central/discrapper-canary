(r.d(t, { h: () => i, l: () => o }), r(582128));
var n = r(65238),
    l = r(174459),
    s = r(602051),
    a = r(652215);
function i(e, t, r) {
    null != (0, n.XF)(t) && null != e.target.closest("a") && o(t, r, s.Z.INLINE_HELP_TEXT_CLICKED);
}
function o(e, t, r) {
    let s = (0, n.XF)(e);
    null != s &&
        l.default.track(a.HAw.SHOP_COLLECT_AND_CLAIM_TAKEOVER_PROMOTION_ACTION, {
            promotion_id: e.id,
            promotion_type: s.type,
            promotion_subtype: s.subtype,
            current_progress: e.progress?.current,
            target_progress: e.progress?.target,
            surface: t,
            action: r,
            reward_status: e.rewardStatus,
        });
}
