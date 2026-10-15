(a.d(t, { hh: () => T }), a(323874), a(14289), a(35956));
var i = a(323889),
    r = a(636537),
    d = a(73153),
    n = a(181658),
    _ = a(157695),
    s = a(314329);
(a(107195), a(881615), a(390595));
var c = a(626584);
(a(544180), a(265704), a(859703));
var o = a(738822);
let l = (0, a(945810).mj)({
    name: "2026-10-bounties-desktop-quest-bar",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
a(710969);
var E = a(190107),
    p = a(652215);
let u = new c.A("BountyActionCreators");
async function T(e, t) {
    let a = Date.now();
    if (
        _.A.isFetchingAdToDeliverByPlacement(t) ||
        (t === o.p9.DESKTOP_ACCOUNT_PANEL_AREA && !l.getConfig({ location: E.rE.BOUNTY_PREVIEW_LINK }).enabled)
    )
        return null;
    d.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN", placement: t });
    try {
        let _ = new URLSearchParams([
                ["ad_creative_ids", e],
                ["placement", String(t)],
            ]),
            c = await r.Bo.get({ url: `${p.Rsh.QUESTS_CREATIVE_PREVIEW}?${_.toString()}`, rejectWithError: !1 }),
            o = c.body,
            l = o.decisions?.[0] ?? null,
            E = l?.creative ?? null;
        if (null == E || E.creative_type !== i.p.BOUNTY)
            return (
                u.error("Creative preview returned no renderable bounty", {
                    adCreativeId: e,
                    creativeType: E?.creative_type,
                }),
                d.h.dispatch({
                    type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
                    placement: t,
                    error: new n.A({ status: c.status, body: c.body }),
                }),
                null
            );
        let T = (0, s.t)(E.creative_content);
        return (
            d.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                creative: { type: i.p.BOUNTY, bounty: T },
                adDecisionData: {
                    ad_id: l?.ad_identifiers?.ad_id,
                    adset_id: l?.ad_identifiers?.adset_id,
                    ad_set_id: l?.ad_identifiers?.ad_set_id,
                    campaign_id: l?.ad_identifiers?.campaign_id,
                    creative_id: l?.ad_identifiers?.creative_id,
                    creative_type: l?.ad_identifiers?.creative_type,
                    decision_id: o.request_id,
                    is_targeted: l?.ad_identifiers != null,
                },
                adContext: l?.ad_context,
                metadataSealed: l?.metadata_sealed,
                trafficMetadataSealed: l?.traffic_metadata_sealed,
                provenanceMetadataSealed: l?.provenance_metadata_sealed,
                responseTtlSeconds: 300,
                placement: t,
                fetchedAt: a,
            }),
            T
        );
    } catch (a) {
        return (
            u.error("Failed to fetch dock creative preview for adCreativeId", {
                error: a,
                adCreativeId: e,
                status: a?.status,
            }),
            d.h.dispatch({ type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE", placement: t, error: new n.A(a) }),
            null
        );
    }
}
