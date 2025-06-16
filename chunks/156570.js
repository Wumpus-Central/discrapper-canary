n.d(t, { Z: () => s }), n(997841), n(953529);
var r = n(81825),
    i = n(218946),
    a = n(598077);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class s extends r.Z {
    static createFromServer(e) {
        let t = e.staff_notes;
        return new s({
            id: e.id,
            applicationId: e.sku.application_id,
            skuId: e.sku.id,
            skuFlags: e.sku.flags,
            summary: e.summary,
            tagline: e.tagline,
            flavorText: e.flavor_text,
            description: e.description,
            childSkuIds: null != e.child_skus ? e.child_skus.map((e) => e.id) : null,
            alternativeSkuIds: null != e.alternative_skus ? e.alternative_skus.map((e) => e.id) : null,
            carouselItems:
                null != e.carousel_items
                    ? e.carousel_items.map((e) => ({
                          assetId: e.asset_id,
                          youtubeVideoId: e.youtube_video_id
                      }))
                    : null,
            assets: null != e.assets ? e.assets.map(i.m) : null,
            staffNotes:
                null != t
                    ? {
                          content: t.content,
                          user: null != t.user ? new a.Z(t.user) : null
                      }
                    : null,
            guild:
                null != e.guild
                    ? {
                          id: e.guild.id,
                          name: e.guild.name,
                          icon: e.guild.icon,
                          approximateMemberCount: e.guild.approximate_member_count,
                          approximatePresenceCount: e.guild.approximate_presence_count
                      }
                    : null,
            thumbnail: null != e.thumbnail ? (0, i.m)(e.thumbnail) : null,
            previewVideo: null != e.preview_video ? (0, i.m)(e.preview_video) : null,
            headerBackground: null != e.header_background ? (0, i.m)(e.header_background) : null,
            headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, i.m)(e.header_logo_dark_theme) : null,
            headerLogoLightTheme: null != e.header_logo_light_theme ? (0, i.m)(e.header_logo_light_theme) : null,
            boxArt: null != e.box_art ? (0, i.m)(e.box_art) : null,
            heroBackground: null != e.hero_background ? (0, i.m)(e.hero_background) : null,
            heroVideo: null != e.hero_video ? (0, i.m)(e.hero_video) : null,
            entitlementBranchId: e.entitlement_branch_id,
            benefits: e.benefits,
            published: e.published
        });
    }
    isSlimDirectoryVersion() {
        return null == this.description;
    }
    constructor(e) {
        var t, n, r, i, a, s, l, c, u, d, f, _, p;
        super(), o(this, 'id', void 0), o(this, 'applicationId', void 0), o(this, 'skuId', void 0), o(this, 'skuFlags', void 0), o(this, 'summary', void 0), o(this, 'tagline', void 0), o(this, 'flavorText', void 0), o(this, 'description', void 0), o(this, 'carouselItems', void 0), o(this, 'childSkuIds', void 0), o(this, 'alternativeSkuIds', void 0), o(this, 'assets', void 0), o(this, 'staffNotes', void 0), o(this, 'guild', void 0), o(this, 'thumbnail', void 0), o(this, 'boxArt', void 0), o(this, 'previewVideo', void 0), o(this, 'headerBackground', void 0), o(this, 'headerLogoDarkTheme', void 0), o(this, 'headerLogoLightTheme', void 0), o(this, 'heroBackground', void 0), o(this, 'heroVideo', void 0), o(this, 'entitlementBranchId', void 0), o(this, 'benefits', void 0), o(this, 'published', void 0), (this.id = e.id), (this.applicationId = e.applicationId), (this.skuId = e.skuId), (this.skuFlags = e.skuFlags), (this.summary = e.summary), (this.tagline = e.tagline), (this.flavorText = e.flavorText), (this.description = e.description), (this.carouselItems = null != (t = e.carouselItems) ? t : []), (this.childSkuIds = null != (n = e.childSkuIds) ? n : []), (this.alternativeSkuIds = null != (r = e.alternativeSkuIds) ? r : []), (this.assets = null != (i = e.assets) ? i : []), (this.staffNotes = e.staffNotes), (this.guild = e.guild), (this.thumbnail = null != (a = e.thumbnail) ? a : null), (this.boxArt = null != (s = e.boxArt) ? s : null), (this.previewVideo = null != (l = e.previewVideo) ? l : null), (this.headerBackground = null != (c = e.headerBackground) ? c : null), (this.headerLogoDarkTheme = null != (u = e.headerLogoDarkTheme) ? u : null), (this.headerLogoLightTheme = null != (d = e.headerLogoLightTheme) ? d : null), (this.heroBackground = null != (f = e.heroBackground) ? f : null), (this.heroVideo = null != (_ = e.heroVideo) ? _ : null), (this.entitlementBranchId = null != (p = e.entitlementBranchId) ? p : null), (this.benefits = e.benefits), (this.published = !!e.published);
    }
}
