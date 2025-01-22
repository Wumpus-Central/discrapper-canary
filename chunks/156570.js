r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(789020);
var a = r(81825),
    o = r(218946),
    s = r(598077);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class u extends a.Z {
    static createFromServer(e) {
        let n = e.staff_notes;
        return new u({
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
            assets: null != e.assets ? e.assets.map(o.m) : null,
            staffNotes:
                null != n
                    ? {
                          content: n.content,
                          user: null != n.user ? new s.Z(n.user) : null
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
            thumbnail: null != e.thumbnail ? (0, o.m)(e.thumbnail) : null,
            previewVideo: null != e.preview_video ? (0, o.m)(e.preview_video) : null,
            headerBackground: null != e.header_background ? (0, o.m)(e.header_background) : null,
            headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, o.m)(e.header_logo_dark_theme) : null,
            headerLogoLightTheme: null != e.header_logo_light_theme ? (0, o.m)(e.header_logo_light_theme) : null,
            boxArt: null != e.box_art ? (0, o.m)(e.box_art) : null,
            heroBackground: null != e.hero_background ? (0, o.m)(e.hero_background) : null,
            heroVideo: null != e.hero_video ? (0, o.m)(e.hero_video) : null,
            entitlementBranchId: e.entitlement_branch_id,
            benefits: e.benefits,
            published: e.published
        });
    }
    isSlimDirectoryVersion() {
        return null == this.description;
    }
    constructor(e) {
        var n, r, i, a, o, s, u, c, d, f, p, h, _;
        super(), l(this, 'id', void 0), l(this, 'applicationId', void 0), l(this, 'skuId', void 0), l(this, 'skuFlags', void 0), l(this, 'summary', void 0), l(this, 'tagline', void 0), l(this, 'flavorText', void 0), l(this, 'description', void 0), l(this, 'carouselItems', void 0), l(this, 'childSkuIds', void 0), l(this, 'alternativeSkuIds', void 0), l(this, 'assets', void 0), l(this, 'staffNotes', void 0), l(this, 'guild', void 0), l(this, 'thumbnail', void 0), l(this, 'boxArt', void 0), l(this, 'previewVideo', void 0), l(this, 'headerBackground', void 0), l(this, 'headerLogoDarkTheme', void 0), l(this, 'headerLogoLightTheme', void 0), l(this, 'heroBackground', void 0), l(this, 'heroVideo', void 0), l(this, 'entitlementBranchId', void 0), l(this, 'benefits', void 0), l(this, 'published', void 0), (this.id = e.id), (this.applicationId = e.applicationId), (this.skuId = e.skuId), (this.skuFlags = e.skuFlags), (this.summary = e.summary), (this.tagline = e.tagline), (this.flavorText = e.flavorText), (this.description = e.description), (this.carouselItems = null !== (n = e.carouselItems) && void 0 !== n ? n : []), (this.childSkuIds = null !== (r = e.childSkuIds) && void 0 !== r ? r : []), (this.alternativeSkuIds = null !== (i = e.alternativeSkuIds) && void 0 !== i ? i : []), (this.assets = null !== (a = e.assets) && void 0 !== a ? a : []), (this.staffNotes = e.staffNotes), (this.guild = e.guild), (this.thumbnail = null !== (o = e.thumbnail) && void 0 !== o ? o : null), (this.boxArt = null !== (s = e.boxArt) && void 0 !== s ? s : null), (this.previewVideo = null !== (u = e.previewVideo) && void 0 !== u ? u : null), (this.headerBackground = null !== (c = e.headerBackground) && void 0 !== c ? c : null), (this.headerLogoDarkTheme = null !== (d = e.headerLogoDarkTheme) && void 0 !== d ? d : null), (this.headerLogoLightTheme = null !== (f = e.headerLogoLightTheme) && void 0 !== f ? f : null), (this.heroBackground = null !== (p = e.heroBackground) && void 0 !== p ? p : null), (this.heroVideo = null !== (h = e.heroVideo) && void 0 !== h ? h : null), (this.entitlementBranchId = null !== (_ = e.entitlementBranchId) && void 0 !== _ ? _ : null), (this.benefits = e.benefits), (this.published = !!e.published);
    }
}
