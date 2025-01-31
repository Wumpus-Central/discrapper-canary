n.d(t, { Z: () => o }), n(789020);
var i = n(81825),
    r = n(218946),
    a = n(598077);
function s(e, t, n) {
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
class o extends i.Z {
    static createFromServer(e) {
        let t = e.staff_notes;
        return new o({
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
            assets: null != e.assets ? e.assets.map(r.m) : null,
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
            thumbnail: null != e.thumbnail ? (0, r.m)(e.thumbnail) : null,
            previewVideo: null != e.preview_video ? (0, r.m)(e.preview_video) : null,
            headerBackground: null != e.header_background ? (0, r.m)(e.header_background) : null,
            headerLogoDarkTheme: null != e.header_logo_dark_theme ? (0, r.m)(e.header_logo_dark_theme) : null,
            headerLogoLightTheme: null != e.header_logo_light_theme ? (0, r.m)(e.header_logo_light_theme) : null,
            boxArt: null != e.box_art ? (0, r.m)(e.box_art) : null,
            heroBackground: null != e.hero_background ? (0, r.m)(e.hero_background) : null,
            heroVideo: null != e.hero_video ? (0, r.m)(e.hero_video) : null,
            entitlementBranchId: e.entitlement_branch_id,
            benefits: e.benefits,
            published: e.published
        });
    }
    isSlimDirectoryVersion() {
        return null == this.description;
    }
    constructor(e) {
        var t, n, i, r, a, o, l, u, c, d, f, _, p;
        super(), s(this, 'id', void 0), s(this, 'applicationId', void 0), s(this, 'skuId', void 0), s(this, 'skuFlags', void 0), s(this, 'summary', void 0), s(this, 'tagline', void 0), s(this, 'flavorText', void 0), s(this, 'description', void 0), s(this, 'carouselItems', void 0), s(this, 'childSkuIds', void 0), s(this, 'alternativeSkuIds', void 0), s(this, 'assets', void 0), s(this, 'staffNotes', void 0), s(this, 'guild', void 0), s(this, 'thumbnail', void 0), s(this, 'boxArt', void 0), s(this, 'previewVideo', void 0), s(this, 'headerBackground', void 0), s(this, 'headerLogoDarkTheme', void 0), s(this, 'headerLogoLightTheme', void 0), s(this, 'heroBackground', void 0), s(this, 'heroVideo', void 0), s(this, 'entitlementBranchId', void 0), s(this, 'benefits', void 0), s(this, 'published', void 0), (this.id = e.id), (this.applicationId = e.applicationId), (this.skuId = e.skuId), (this.skuFlags = e.skuFlags), (this.summary = e.summary), (this.tagline = e.tagline), (this.flavorText = e.flavorText), (this.description = e.description), (this.carouselItems = null !== (t = e.carouselItems) && void 0 !== t ? t : []), (this.childSkuIds = null !== (n = e.childSkuIds) && void 0 !== n ? n : []), (this.alternativeSkuIds = null !== (i = e.alternativeSkuIds) && void 0 !== i ? i : []), (this.assets = null !== (r = e.assets) && void 0 !== r ? r : []), (this.staffNotes = e.staffNotes), (this.guild = e.guild), (this.thumbnail = null !== (a = e.thumbnail) && void 0 !== a ? a : null), (this.boxArt = null !== (o = e.boxArt) && void 0 !== o ? o : null), (this.previewVideo = null !== (l = e.previewVideo) && void 0 !== l ? l : null), (this.headerBackground = null !== (u = e.headerBackground) && void 0 !== u ? u : null), (this.headerLogoDarkTheme = null !== (c = e.headerLogoDarkTheme) && void 0 !== c ? c : null), (this.headerLogoLightTheme = null !== (d = e.headerLogoLightTheme) && void 0 !== d ? d : null), (this.heroBackground = null !== (f = e.heroBackground) && void 0 !== f ? f : null), (this.heroVideo = null !== (_ = e.heroVideo) && void 0 !== _ ? _ : null), (this.entitlementBranchId = null !== (p = e.entitlementBranchId) && void 0 !== p ? p : null), (this.benefits = e.benefits), (this.published = !!e.published);
    }
}
