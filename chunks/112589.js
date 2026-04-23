"use strict";
n.d(t, { A: () => a }), n(938796);
var i = n(315069);
function r(e) {
    return { id: e.id, filename: e.filename, size: e.size, width: e.width, height: e.height, mimeType: e.mime_type };
}
var s = n(889227);
class a extends i.A {
    id;
    applicationId;
    skuId;
    skuFlags;
    summary;
    tagline;
    flavorText;
    description;
    carouselItems;
    childSkuIds;
    alternativeSkuIds;
    assets;
    staffNotes;
    guild;
    thumbnail;
    boxArt;
    previewVideo;
    headerBackground;
    headerLogoDarkTheme;
    headerLogoLightTheme;
    heroBackground;
    heroVideo;
    entitlementBranchId;
    benefits;
    published;
    static createFromServer(e) {
        let t = e.staff_notes;
        return new a({
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
                    ? e.carousel_items.map((e) => ({ assetId: e.asset_id, youtubeVideoId: e.youtube_video_id }))
                    : null,
            assets: null != e.assets ? e.assets.map(r) : null,
            staffNotes: null != t ? { content: t.content, user: null != t.user ? new s.A(t.user) : null } : null,
            guild:
                null != e.guild
                    ? {
                          id: e.guild.id,
                          name: e.guild.name,
                          icon: e.guild.icon,
                          approximateMemberCount: e.guild.approximate_member_count,
                          approximatePresenceCount: e.guild.approximate_presence_count,
                      }
                    : null,
            thumbnail: null != e.thumbnail ? r(e.thumbnail) : null,
            previewVideo: null != e.preview_video ? r(e.preview_video) : null,
            headerBackground: null != e.header_background ? r(e.header_background) : null,
            headerLogoDarkTheme: null != e.header_logo_dark_theme ? r(e.header_logo_dark_theme) : null,
            headerLogoLightTheme: null != e.header_logo_light_theme ? r(e.header_logo_light_theme) : null,
            boxArt: null != e.box_art ? r(e.box_art) : null,
            heroBackground: null != e.hero_background ? r(e.hero_background) : null,
            heroVideo: null != e.hero_video ? r(e.hero_video) : null,
            entitlementBranchId: e.entitlement_branch_id,
            benefits: e.benefits,
            published: e.published,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.skuId = e.skuId),
            (this.skuFlags = e.skuFlags),
            (this.summary = e.summary),
            (this.tagline = e.tagline),
            (this.flavorText = e.flavorText),
            (this.description = e.description),
            (this.carouselItems = e.carouselItems ?? []),
            (this.childSkuIds = e.childSkuIds ?? []),
            (this.alternativeSkuIds = e.alternativeSkuIds ?? []),
            (this.assets = e.assets ?? []),
            (this.staffNotes = e.staffNotes),
            (this.guild = e.guild),
            (this.thumbnail = e.thumbnail ?? null),
            (this.boxArt = e.boxArt ?? null),
            (this.previewVideo = e.previewVideo ?? null),
            (this.headerBackground = e.headerBackground ?? null),
            (this.headerLogoDarkTheme = e.headerLogoDarkTheme ?? null),
            (this.headerLogoLightTheme = e.headerLogoLightTheme ?? null),
            (this.heroBackground = e.heroBackground ?? null),
            (this.heroVideo = e.heroVideo ?? null),
            (this.entitlementBranchId = e.entitlementBranchId ?? null),
            (this.benefits = e.benefits),
            (this.published = !!e.published);
    }
    isSlimDirectoryVersion() {
        return null == this.description;
    }
}
