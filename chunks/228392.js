n.d(t, {
    B: () => R,
    B5: () => A,
    Do: () => C,
    GX: () => x,
    HR: () => G,
    Hr: () => S,
    Je: () => T,
    Js: () => h,
    KR: () => N,
    MO: () => P,
    N3: () => w,
    Oq: () => I,
    P_: () => E,
    Vn: () => y,
    ab: () => b,
    e5: () => O,
    e7: () => g,
    lN: () => k,
    nE: () => M,
    nH: () => v,
    qs: () => p,
    qz: () => U,
    ws: () => D,
    xI: () => L,
    zI: () => m
});
var i = n(367907),
    r = n(731429),
    a = n(188471),
    s = n(592125),
    o = n(703558),
    l = n(626135),
    u = n(358085),
    c = n(660189),
    d = n(208970),
    f = n(6496),
    _ = n(981631);
function p(e) {
    let { guildId: t, channelId: n, sessionId: r, postIds: a, additionalTimes: s } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_SEEN_BATCH, {
        ...(0, f.xl)({
            channelId: n,
            sessionId: r
        }),
        guild_id: t,
        channel_id: n,
        post_ids: a,
        additional_seen_time_millis: s
    });
}
function h(e) {
    let { guildId: t, channelId: n, numSearchResults: r } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_SEARCHED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_search_results: r
    });
}
function m(e) {
    let { guildId: t, channelId: n } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_SEARCH_CLEARED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n
    });
}
function g(e) {
    let { guildId: t, channelId: n, tagId: r, filterTagIds: a, added: s, location: o } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        tag_id: r,
        filter_tag_ids: a,
        added: s,
        location: o
    });
}
function E(e) {
    let { guildId: t, channelId: n } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n
    });
}
function v(e) {
    let { guildId: t, channelId: n } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n
    });
}
function y(e) {
    var t, n, r, a;
    let { guildId: l, channelId: u } = e,
        c = s.Z.getChannel(u);
    if (null == c) return;
    let d = o.Z.getThreadSettings(u),
        p = null === (t = c.template) || void 0 === t ? void 0 : t.trim(),
        h = o.Z.getDraft(u, o.d.FirstThreadMessage),
        m = null == h || 0 === h.length || (null == h ? void 0 : h.trim()) === p,
        g = (null == d ? void 0 : d.appliedTags) == null || (null == d ? void 0 : null === (n = d.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
        E = (null == d ? void 0 : d.name) == null || (null == d ? void 0 : null === (a = d.name) || void 0 === a ? void 0 : null === (r = a.trim()) || void 0 === r ? void 0 : r.length) === 0;
    (!m || !g || !E) &&
        i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, f.xl)({ channelId: u }),
            guild_id: l,
            channel_id: u,
            applied_tag_ids: (0, f.q8)(u),
            num_attachments: (0, f.RR)(u)
        });
}
function I(e) {
    let { guildId: t, channelId: n } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n
    });
}
function T(e) {
    let { guildId: t, channelId: n, postId: r } = e;
    function a() {
        i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_POST_CREATED, {
            ...(0, f.n4)({ channelId: r }),
            guild_id: t,
            channel_id: n
        });
    }
    c.Z.isLoading(r) ? c.Z.addConditionalChangeListener(() => !!c.Z.isLoading(r) || (a(), !1)) : a();
}
function b(e) {
    let { guildId: t, channelId: n } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_SCROLLED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n
    });
}
function S(e) {
    let { guildId: t, channelId: n, numArchivedThreads: r, hasMoreThreads: a, filterTagIds: o, sortOrder: u } = e;
    l.default.track(_.rMx.FORUM_CHANNEL_MORE_POSTS_LOADED, {
        ...(0, i.hH)(t),
        ...(0, i.v_)(s.Z.getChannel(n)),
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        num_archived_threads: r,
        num_active_threads: (0, f.bE)(t, n),
        has_more_threads: a,
        filter_tag_ids: o,
        sort_order: u
    });
}
function A(e) {
    let { guildId: t, channelId: n, postId: r, location: a } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_POST_CLICKED, {
        ...(0, f.n4)({ channelId: r }),
        guild_id: t,
        channel_id: n,
        is_search_result: null != d.Z.getSearchResults(n),
        location: a
    });
}
function N(e) {
    let { guildId: t, channelId: n, sortOrder: r } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_POSTS_SORTED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        sort_type: (0, f.t$)(r),
        sort_order: r,
        forum_channel_sort_order: r
    });
}
function C(e) {
    let { guildId: t, channelId: n, forumLayout: r } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_LAYOUT_UPDATED, {
        ...(0, f.xl)({ channelId: n }),
        guild_id: t,
        channel_id: n,
        forum_channel_layout: r
    });
}
function R(e) {
    let { postId: t, location: n } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_POST_LINK_COPIED, {
        forum_post_id: t,
        location: n
    });
}
function O(e) {
    let { onboardingCTA: t } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function D(e) {
    let { forumDemoId: t } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function L(e) {
    let { added: t } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function x(e) {
    let { readGuideCta: t } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: t });
}
function w(e) {
    let { isMobile: t } = e;
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function P() {
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function M() {
    i.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function k(e) {
    i.ZP.trackWithMetadata(_.rMx.CHANNEL_OPENED, {
        ...(0, i.hH)(e.guild_id),
        ...(0, i.v_)(e),
        ...(0, r.K)(e, !0),
        ...(0, i.$H)(e.id),
        channel_view: 'Split View',
        platform: (0, u.getPlatform)()
    }),
        (0, a.a)(_.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e.id });
}
function U() {
    i.ZP.trackWithMetadata(_.rMx.OPEN_MODAL, {
        type: 'Forum Channel Upsell Modal',
        location: { section: _.jXE.CHANNEL_WELCOME_CTA }
    });
}
function G(e) {
    let { guildId: t, channelId: n } = e;
    i.ZP.trackWithMetadata(_.rMx.THREAD_CREATION_STARTED, {
        ...(0, r.K)(s.Z.getChannel(n)),
        channel_id: n,
        guild_id: t
    });
}
