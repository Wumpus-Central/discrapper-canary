n.d(t, {
    B: () => w,
    B5: () => P,
    Do: () => D,
    GX: () => M,
    HR: () => F,
    Hr: () => N,
    Je: () => A,
    Js: () => b,
    KR: () => R,
    MO: () => U,
    N3: () => k,
    Oq: () => T,
    P_: () => v,
    Vn: () => I,
    ab: () => C,
    e5: () => x,
    e7: () => O,
    lN: () => Z,
    nE: () => G,
    nH: () => S,
    qs: () => E,
    qz: () => B,
    ws: () => L,
    xI: () => j,
    zI: () => y,
}),
    n(781311);
var r = n(367907),
    i = n(731429),
    a = n(188471),
    o = n(592125),
    s = n(703558),
    l = n(626135),
    c = n(358085),
    u = n(660189),
    d = n(208970),
    f = n(6496),
    p = n(981631);
function _(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { guildId: t, channelId: n, sessionId: i, postIds: a, additionalTimes: o } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_SEEN_BATCH,
        g(
            m(
                {},
                (0, f.xl)({
                    channelId: n,
                    sessionId: i,
                }),
            ),
            {
                guild_id: t,
                channel_id: n,
                post_ids: a,
                additional_seen_time_millis: o,
            },
        ),
    );
}
function b(e) {
    let { guildId: t, channelId: n, numSearchResults: i } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_SEARCHED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            num_search_results: i,
        }),
    );
}
function y(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_SEARCH_CLEARED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function O(e) {
    let { guildId: t, channelId: n, tagId: i, filterTagIds: a, added: o, location: s } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_TAG_FILTER_CLICKED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            tag_id: i,
            filter_tag_ids: a,
            added: o,
            location: s,
        }),
    );
}
function v(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function S(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function I(e) {
    var t, n, i, a;
    let { guildId: l, channelId: c } = e,
        u = o.Z.getChannel(c);
    if (null == u) return;
    let d = s.Z.getThreadSettings(c),
        _ = null == (t = u.template) ? void 0 : t.trim(),
        h = s.Z.getDraft(c, s.d.FirstThreadMessage),
        E = null == h || 0 === h.length || (null == h ? void 0 : h.trim()) === _,
        b =
            (null == d ? void 0 : d.appliedTags) == null ||
            (null == d || null == (n = d.appliedTags) ? void 0 : n.size) === 0,
        y =
            (null == d ? void 0 : d.name) == null ||
            (null == d || null == (a = d.name) || null == (i = a.trim()) ? void 0 : i.length) === 0;
    (E && b && y) ||
        r.ZP.trackWithMetadata(
            p.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED,
            g(m({}, (0, f.xl)({ channelId: c })), {
                guild_id: l,
                channel_id: c,
                applied_tag_ids: (0, f.q8)(c),
                num_attachments: (0, f.RR)(c),
            }),
        );
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function A(e) {
    let { guildId: t, channelId: n, postId: i } = e;
    function a() {
        r.ZP.trackWithMetadata(
            p.rMx.FORUM_CHANNEL_POST_CREATED,
            g(m({}, (0, f.n4)({ channelId: i })), {
                guild_id: t,
                channel_id: n,
            }),
        );
    }
    u.Z.isLoading(i) ? u.Z.addConditionalChangeListener(() => !!u.Z.isLoading(i) || (a(), !1)) : a();
}
function C(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_SCROLLED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
        }),
    );
}
function N(e) {
    let { guildId: t, channelId: n, numArchivedThreads: i, hasMoreThreads: a, filterTagIds: s, sortOrder: c } = e;
    l.default.track(
        p.rMx.FORUM_CHANNEL_MORE_POSTS_LOADED,
        g(m({}, (0, r.hH)(t), (0, r.v_)(o.Z.getChannel(n)), (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            num_archived_threads: i,
            num_active_threads: (0, f.bE)(t, n),
            has_more_threads: a,
            filter_tag_ids: s,
            sort_order: c,
        }),
    );
}
function P(e) {
    let { guildId: t, channelId: n, postId: i, location: a } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_POST_CLICKED,
        g(m({}, (0, f.n4)({ channelId: i })), {
            guild_id: t,
            channel_id: n,
            is_search_result: null != d.Z.getSearchResults(n),
            location: a,
        }),
    );
}
function R(e) {
    let { guildId: t, channelId: n, sortOrder: i } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_POSTS_SORTED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            sort_type: (0, f.t$)(i),
            sort_order: i,
            forum_channel_sort_order: i,
        }),
    );
}
function D(e) {
    let { guildId: t, channelId: n, forumLayout: i } = e;
    r.ZP.trackWithMetadata(
        p.rMx.FORUM_CHANNEL_LAYOUT_UPDATED,
        g(m({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            forum_channel_layout: i,
        }),
    );
}
function w(e) {
    let { postId: t, location: n } = e;
    r.ZP.trackWithMetadata(p.rMx.FORUM_POST_LINK_COPIED, {
        forum_post_id: t,
        location: n,
    });
}
function x(e) {
    let { onboardingCTA: t } = e;
    r.ZP.trackWithMetadata(p.rMx.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function L(e) {
    let { forumDemoId: t } = e;
    r.ZP.trackWithMetadata(p.rMx.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function j(e) {
    let { added: t } = e;
    r.ZP.trackWithMetadata(p.rMx.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function M(e) {
    let { readGuideCta: t } = e;
    r.ZP.trackWithMetadata(p.rMx.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: t });
}
function k(e) {
    let { isMobile: t } = e;
    r.ZP.trackWithMetadata(p.rMx.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function U() {
    r.ZP.trackWithMetadata(p.rMx.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function G() {
    r.ZP.trackWithMetadata(p.rMx.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function Z(e) {
    r.ZP.trackWithMetadata(
        p.rMx.CHANNEL_OPENED,
        g(m({}, (0, r.hH)(e.guild_id), (0, r.v_)(e), (0, i.K)(e, !0), (0, r.$H)(e.id)), {
            channel_view: "Split View",
            platform: (0, c.getPlatform)(),
        }),
    ),
        (0, a.a)(p.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e.id });
}
function B() {
    r.ZP.trackWithMetadata(p.rMx.OPEN_MODAL, {
        type: "Forum Channel Upsell Modal",
        location: { section: p.jXE.CHANNEL_WELCOME_CTA },
    });
}
function F(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        p.rMx.THREAD_CREATION_STARTED,
        g(m({}, (0, i.K)(o.Z.getChannel(n))), {
            channel_id: n,
            guild_id: t,
        }),
    );
}
