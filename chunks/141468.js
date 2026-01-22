n.d(t, {
    IU: () => P,
    SP: () => w,
    ec: () => U,
    ei: () => k,
    rh: () => R,
}),
    n(938796),
    n(896048);
var r = n(989349),
    i = n.n(r),
    a = n(833291),
    s = n(814890),
    o = n(921457),
    l = n(378058),
    c = n(399144),
    u = n(383233),
    d = n(427157),
    f = n(961350),
    p = n(994500),
    _ = n(287809),
    h = n(659674),
    m = n(45938),
    g = n(661191),
    E = n(451919);
n(763754);
var b = n(381941),
    y = n(652215);

function O(e, t, n) {
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

function A(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = new d.A({
    id: "???",
    username: "???",
});

function T(e) {
    var t;
    return null == e.author
        ? I
        : null != e.webhook_id
          ? new d.A(e.author)
          : null != (t = _.default.getUser(e.author.id))
            ? t
            : new d.A(e.author);
}

function C(e) {
    return !1;
}

function N(e) {
    var t;
    return new u.go(
        S(A({}, e), {
            timestamp: new Date(e.timestamp),
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            attachments: D(e),
            embeds: L(e),
            components: (0, s.ZV)(null != (t = e.components) ? t : []),
            codedLinks: y.MRS.NON_PARSED.has(e.type) ? [] : (0, a.Ay)(e.content),
        }),
    );
}

function R(e) {
    var t, n, r, i, a, s, l, d;
    let _,
        h,
        { reactions: b, interactionData: O } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        v = N(e),
        I = null != (t = null == (s = e.mentions) ? void 0 : s.map((e) => e.id)) ? t : [],
        R = null != (n = e.mention_roles) ? n : [],
        w = null != (r = e.mention_channels) ? r : [],
        P = null != (i = e.mention_games) ? i : [],
        D = e.message_reference,
        L = T(e),
        k = null,
        U = null == e ? void 0 : e.gift_info,
        G = e.gifting_prompt,
        V = null != e.interaction ? c.A.createFromServer(e.interaction) : null,
        F =
            e.type === y.lAJ.THREAD_STARTER_MESSAGE
                ? null == (d = e.referenced_message) || null == (l = d.author)
                    ? void 0
                    : l.id
                : void 0,
        B = e.content;
    return new u.Ay(
        (e.type === y.lAJ.PREMIUM_REFERRAL &&
            ((_ = g.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (B = "")),
        e.type === y.lAJ.PREMIUM_GROUP_INVITE &&
            ((h = g.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (B = "")),
        C(e))
            ? S(A({}, k), {
                  id: e.id,
                  channel_id: e.channel_id,
                  type: y.lAJ.DEFAULT,
                  author: L,
                  timestamp: v.timestamp,
                  isUnsupported: !0,
              })
            : S(A({}, e, k, v.toJS()), {
                  author: L,
                  webhookId: e.webhook_id,
                  blocked: p.A.isBlockedForMessage(e) || (null != F && p.A.isBlocked(F)),
                  ignored: p.A.isIgnoredForMessage(e) || (null != F && p.A.isIgnored(F)),
                  mentionEveryone: e.mention_everyone,
                  mentions: I,
                  mentionRoles: R,
                  mentionChannels: w,
                  mentionGames: P,
                  messageReference: D,
                  mentioned: (0, E.Uj)({
                      userId: f.default.getId(),
                      channelId: e.channel_id,
                      mentionEveryone: null != (a = e.mention_everyone) && a,
                      mentionUsers: I,
                      mentionRoles: R,
                      mentionGames: P.map((e) => e.id),
                  }),
                  giftCodes: (0, m.pF)(e) ? (0, m.e7)(null == e ? void 0 : e.embeds[0].url) : (0, m.e7)(e.content),
                  content: B,
                  referralTrialOfferId: _,
                  premiumGroupInviteId: h,
                  call: x(e.call, v.timestamp),
                  messageSnapshots: M(e),
                  reactions: j(null != b ? b : e.reactions, e.poll),
                  interaction: V,
                  interactionData: null != O ? O : e.interaction_data,
                  interactionMetadata: e.interaction_metadata,
                  roleSubscriptionData: e.role_subscription_data,
                  purchaseNotification: e.purchase_notification,
                  poll: null == e.poll ? void 0 : (0, o.A)(e.poll),
                  sharedClientTheme: e.shared_client_theme,
                  giftInfo: null == U ? void 0 : U,
                  giftingPrompt: G,
              }),
    );
}

function w(e, t) {
    return null != t.edited_timestamp
        ? S(A({}, t), {
              reactions: e.reactions,
              interaction_data: e.interaction_data,
          })
        : A({}, e, t);
}

function P(e, t) {
    if (null != t.edited_timestamp)
        return R(t, {
            reactions: e.reactions,
            interactionData: e.interactionData,
        });
    let n = e,
        r = !1;
    if (
        (null != t.call && (n = n.set("call", x(t.call, e.timestamp))),
        null != t.attachments && (n = n.set("attachments", D(t))),
        null != t.application && (n = n.set("application", t.application)),
        null != t.activity && (n = n.set("activity", t.activity)),
        null != t.content && "" !== t.content && (n = n.set("content", t.content)),
        null != t.embeds && (n = n.set("embeds", L(t))),
        null != t.message_snapshots && (n = n.set("messageSnapshots", M(t))),
        t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)),
        null != n.webhookId && null != t.author && (n = n.set("author", new d.A(t.author))),
        null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)),
        null != t.components && (n = n.set("components", (0, s.ZV)(t.components))),
        null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)),
        null != t.reactions)
    ) {
        var i;
        n = n.set("reactions", j(null != (i = e.reactions) ? i : t.reactions));
    }
    return (
        null != t.poll && (n = n.set("poll", (0, o.A)(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                "mentions",
                t.mentions.map((e) => e.id),
            )),
            (r = !0)),
        null != t.mention_games && ((n = n.set("mentionGames", t.mention_games)), (r = !0)),
        null != t.mention_everyone && ((n = n.set("mentionEveryone", t.mention_everyone)), (r = !0)),
        null != t.mention_roles && ((n = n.set("mentionRoles", t.mention_roles)), (r = !0)),
        r &&
            (n = n.set(
                "mentioned",
                (0, E.Ay)({
                    message: n,
                    userId: f.default.getId(),
                }),
            )),
        n
    );
}

function D(e) {
    return null == e.attachments
        ? []
        : e.attachments.map((e) =>
              S(A({}, e), {
                  spoiler: e.filename.startsWith(b._W),
              }),
          );
}

function x(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null,
            r = null != n ? i().duration(n.diff(t)) : null;
        return {
            participants: e.participants,
            endedTimestamp: n,
            duration: r,
        };
    }
    return null;
}

function L(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, h.fK)(e.channel_id, e.id, t));
    return (0, h.nh)(t);
}

function j(e, t) {
    var n;
    if (null == e && (null == t ? void 0 : t.results) == null) return [];
    let r =
        null == t || null == (n = t.results)
            ? void 0
            : n.answer_counts.map((e) => ({
                  count_details: {
                      vote: e.count,
                  },
                  me_vote: e.me_voted,
                  emoji: {
                      id: e.id.toString(),
                      name: "",
                      animated: !1,
                  },
                  me: !1,
                  me_burst: !1,
                  count: e.count,
                  burst_count: 0,
              }));
    return [...(null != e ? e : []), ...(null != r ? r : [])].map((e) => {
        let t = A({}, e);
        if ((null == t ? void 0 : t.count_details) != null) {
            var n, r;
            (t.burst_count = null != (n = t.count_details.burst) ? n : 0),
                (t.count = null != (r = t.count_details.normal) ? r : 0);
        }
        return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t;
    });
}

function M(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t, moderator_report: n } = e;
              return new u.vF({
                  message: N(t),
                  moderator_report: n,
              });
          });
}
let k = (e) => 0 === (0, l.o6)(e).length || "" !== e.content;

function U(e) {
    return e.hasFlag(y.pr7.EPHEMERAL) && e.type !== y.lAJ.IN_GAME_MESSAGE_NUX;
}
