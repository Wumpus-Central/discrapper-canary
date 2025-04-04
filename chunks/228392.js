n.d(t, {
    B: () => D,
    B5: () => R,
    Do: () => w,
    GX: () => k,
    HR: () => V,
    Hr: () => C,
    Je: () => N,
    Js: () => b,
    KR: () => P,
    MO: () => U,
    N3: () => j,
    Oq: () => T,
    P_: () => O,
    Vn: () => S,
    ab: () => A,
    e5: () => L,
    e7: () => v,
    lN: () => B,
    nE: () => G,
    nH: () => I,
    qs: () => E,
    qz: () => F,
    ws: () => x,
    xI: () => M,
    zI: () => y
}),
    n(566702);
var r = n(367907),
    i = n(731429),
    o = n(188471),
    a = n(592125),
    s = n(703558),
    l = n(626135),
    c = n(358085),
    u = n(660189),
    d = n(208970),
    f = n(6496),
    _ = n(981631);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { guildId: t, channelId: n, sessionId: i, postIds: o, additionalTimes: a } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_SEEN_BATCH,
        g(
            h(
                {},
                (0, f.xl)({
                    channelId: n,
                    sessionId: i
                })
            ),
            {
                guild_id: t,
                channel_id: n,
                post_ids: o,
                additional_seen_time_millis: a
            }
        )
    );
}
function b(e) {
    let { guildId: t, channelId: n, numSearchResults: i } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_SEARCHED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            num_search_results: i
        })
    );
}
function y(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_SEARCH_CLEARED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n
        })
    );
}
function v(e) {
    let { guildId: t, channelId: n, tagId: i, filterTagIds: o, added: a, location: s } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_TAG_FILTER_CLICKED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            tag_id: i,
            filter_tag_ids: o,
            added: a,
            location: s
        })
    );
}
function O(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n
        })
    );
}
function I(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n
        })
    );
}
function S(e) {
    var t, n, i, o;
    let { guildId: l, channelId: c } = e,
        u = a.Z.getChannel(c);
    if (null == u) return;
    let d = s.Z.getThreadSettings(c),
        p = null == (t = u.template) ? void 0 : t.trim(),
        m = s.Z.getDraft(c, s.d.FirstThreadMessage),
        E = null == m || 0 === m.length || (null == m ? void 0 : m.trim()) === p,
        b = (null == d ? void 0 : d.appliedTags) == null || (null == d || null == (n = d.appliedTags) ? void 0 : n.size) === 0,
        y = (null == d ? void 0 : d.name) == null || (null == d || null == (o = d.name) || null == (i = o.trim()) ? void 0 : i.length) === 0;
    (E && b && y) ||
        r.ZP.trackWithMetadata(
            _.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED,
            g(h({}, (0, f.xl)({ channelId: c })), {
                guild_id: l,
                channel_id: c,
                applied_tag_ids: (0, f.q8)(c),
                num_attachments: (0, f.RR)(c)
            })
        );
}
function T(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n
        })
    );
}
function N(e) {
    let { guildId: t, channelId: n, postId: i } = e;
    function o() {
        r.ZP.trackWithMetadata(
            _.rMx.FORUM_CHANNEL_POST_CREATED,
            g(h({}, (0, f.n4)({ channelId: i })), {
                guild_id: t,
                channel_id: n
            })
        );
    }
    u.Z.isLoading(i) ? u.Z.addConditionalChangeListener(() => !!u.Z.isLoading(i) || (o(), !1)) : o();
}
function A(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_SCROLLED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n
        })
    );
}
function C(e) {
    let { guildId: t, channelId: n, numArchivedThreads: i, hasMoreThreads: o, filterTagIds: s, sortOrder: c } = e;
    l.default.track(
        _.rMx.FORUM_CHANNEL_MORE_POSTS_LOADED,
        g(h({}, (0, r.hH)(t), (0, r.v_)(a.Z.getChannel(n)), (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            num_archived_threads: i,
            num_active_threads: (0, f.bE)(t, n),
            has_more_threads: o,
            filter_tag_ids: s,
            sort_order: c
        })
    );
}
function R(e) {
    let { guildId: t, channelId: n, postId: i, location: o } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_POST_CLICKED,
        g(h({}, (0, f.n4)({ channelId: i })), {
            guild_id: t,
            channel_id: n,
            is_search_result: null != d.Z.getSearchResults(n),
            location: o
        })
    );
}
function P(e) {
    let { guildId: t, channelId: n, sortOrder: i } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_POSTS_SORTED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            sort_type: (0, f.t$)(i),
            sort_order: i,
            forum_channel_sort_order: i
        })
    );
}
function w(e) {
    let { guildId: t, channelId: n, forumLayout: i } = e;
    r.ZP.trackWithMetadata(
        _.rMx.FORUM_CHANNEL_LAYOUT_UPDATED,
        g(h({}, (0, f.xl)({ channelId: n })), {
            guild_id: t,
            channel_id: n,
            forum_channel_layout: i
        })
    );
}
function D(e) {
    let { postId: t, location: n } = e;
    r.ZP.trackWithMetadata(_.rMx.FORUM_POST_LINK_COPIED, {
        forum_post_id: t,
        location: n
    });
}
function L(e) {
    let { onboardingCTA: t } = e;
    r.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_ONBOARDING_CLICKED, { onboarding_cta_type: t });
}
function x(e) {
    let { forumDemoId: t } = e;
    r.ZP.trackWithMetadata(_.rMx.FORUM_UPSELL_MODAL_CLICKED, { forum_demo_id: t });
}
function M(e) {
    let { added: t } = e;
    r.ZP.trackWithMetadata(_.rMx.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, { added: t });
}
function k(e) {
    let { readGuideCta: t } = e;
    r.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_HELPER_CARD_CLICKED, { read_guide_cta: t });
}
function j(e) {
    let { isMobile: t } = e;
    r.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, { is_mobile: t });
}
function U() {
    r.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED);
}
function G() {
    r.ZP.trackWithMetadata(_.rMx.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED);
}
function B(e) {
    r.ZP.trackWithMetadata(
        _.rMx.CHANNEL_OPENED,
        g(h({}, (0, r.hH)(e.guild_id), (0, r.v_)(e), (0, i.K)(e, !0), (0, r.$H)(e.id)), {
            channel_view: 'Split View',
            platform: (0, c.getPlatform)()
        })
    ),
        (0, o.a)(_.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e.id });
}
function F() {
    r.ZP.trackWithMetadata(_.rMx.OPEN_MODAL, {
        type: 'Forum Channel Upsell Modal',
        location: { section: _.jXE.CHANNEL_WELCOME_CTA }
    });
}
function V(e) {
    let { guildId: t, channelId: n } = e;
    r.ZP.trackWithMetadata(
        _.rMx.THREAD_CREATION_STARTED,
        g(h({}, (0, i.K)(a.Z.getChannel(n))), {
            channel_id: n,
            guild_id: t
        })
    );
}
