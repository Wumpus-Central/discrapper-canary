n.d(t, { Z: () => l }), n(997841);
var r = n(95015),
    i = n(81825),
    a = n(397047),
    o = n(474936);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class l extends i.Z {
    static createFromServer(e) {
        var t, n, r, i, a, o, s, c, u, d, f, p, _;
        return new l({
            id: e.id,
            trialId: e.trial_id,
            startDate: new Date(e.start_date),
            endDate: new Date(e.end_date),
            outboundRedemptionEndDate:
                null != e.outbound_redemption_end_date ? new Date(e.outbound_redemption_end_date) : null,
            inboundHeaderText: null != (r = e.inbound_header_text) ? r : "",
            inboundBodyText: null != (i = e.inbound_body_text) ? i : "",
            inboundHelpCenterLink: null != (a = e.inbound_help_center_link) ? a : "",
            outboundTitle: null != (o = e.outbound_title) ? o : "",
            outboundRedemptionModalBody: null != (s = e.outbound_redemption_modal_body) ? s : "",
            outboundTermsAndConditions: null != (c = e.outbound_terms_and_conditions) ? c : "",
            outboundRedemptionPageLink: null != (u = e.outbound_redemption_page_link) ? u : "",
            outboundRedemptionUrlFormat: null != (d = e.outbound_redemption_url_format) ? d : "",
            flags: e.flags,
            inboundRestrictedCountries: e.inbound_restricted_countries,
            outboundRestrictedCountries: e.outbound_restricted_countries,
            promotionType: e.promotion_type,
            partnerId: null != (f = e.partner_id) ? f : null,
            marketingComponents: null != (p = e.marketing_components) ? p : [],
            rewardSkuIds:
                null != (_ = null == (n = e.metadata) || null == (t = n.gift_promotion) ? void 0 : t.reward_sku_ids)
                    ? _
                    : [],
        });
    }
    get isBogo() {
        return this.promotionType === a.$k.BOGO;
    }
    get isMarketingMoment() {
        return this.promotionType === a.$k.MARKETING_MOMENT;
    }
    hasFlag(e) {
        return (0, r.yE)(this.flags, e);
    }
    isCountryRestricted(e) {
        switch (this.promotionType) {
            case a.$k.THIRD_PARTY_INBOUND:
                return this.inboundRestrictedCountries.includes(e);
            case a.$k.THIRD_PARTY_OUTBOUND:
            case a.$k.THIRD_PARTY_OUTBOUND_RECURRING:
                return this.outboundRestrictedCountries.includes(e);
            default:
                return !1;
        }
    }
    isRedeemableByTrialUsers() {
        return this.hasFlag(o.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS);
    }
    constructor(e) {
        var t, n, r;
        super(),
            s(this, "id", void 0),
            s(this, "trialId", void 0),
            s(this, "startDate", void 0),
            s(this, "endDate", void 0),
            s(this, "outboundRedemptionEndDate", void 0),
            s(this, "inboundHeaderText", void 0),
            s(this, "inboundBodyText", void 0),
            s(this, "inboundHelpCenterLink", void 0),
            s(this, "outboundTitle", void 0),
            s(this, "outboundRedemptionModalBody", void 0),
            s(this, "outboundTermsAndConditions", void 0),
            s(this, "outboundRedemptionPageLink", void 0),
            s(this, "outboundRedemptionUrlFormat", void 0),
            s(this, "flags", void 0),
            s(this, "inboundRestrictedCountries", void 0),
            s(this, "outboundRestrictedCountries", void 0),
            s(this, "promotionType", void 0),
            s(this, "partnerId", void 0),
            s(this, "marketingComponents", void 0),
            s(this, "rewardSkuIds", void 0),
            (this.id = e.id),
            (this.trialId = e.trialId),
            (this.startDate = e.startDate),
            (this.endDate = e.endDate),
            (this.outboundRedemptionEndDate = e.outboundRedemptionEndDate),
            (this.inboundHeaderText = e.inboundHeaderText),
            (this.inboundBodyText = e.inboundBodyText),
            (this.inboundHelpCenterLink = e.inboundHelpCenterLink),
            (this.outboundTitle = e.outboundTitle),
            (this.outboundRedemptionModalBody = e.outboundRedemptionModalBody),
            (this.outboundTermsAndConditions = e.outboundTermsAndConditions),
            (this.outboundRedemptionPageLink = e.outboundRedemptionPageLink),
            (this.outboundRedemptionUrlFormat = e.outboundRedemptionUrlFormat),
            (this.flags = null != (t = e.flags) ? t : 0),
            (this.inboundRestrictedCountries = null != (n = e.inboundRestrictedCountries) ? n : []),
            (this.outboundRestrictedCountries = null != (r = e.outboundRestrictedCountries) ? r : []),
            (this.promotionType = e.promotionType),
            (this.partnerId = e.partnerId),
            (this.marketingComponents = e.marketingComponents),
            (this.rewardSkuIds = e.rewardSkuIds);
    }
}
