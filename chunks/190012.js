n.d(t, { BC: () => A });
var l = n(735438),
    i = n(448761),
    s = n(311907),
    r = n(931046),
    a = n(427930),
    u = n(77350),
    o = n(763754),
    d = n(961350),
    c = n(994500),
    h = n(287809),
    g = n(638075),
    I = n(652215),
    E = n(985018);
function A(e, t) {
    let { isBlocked: n, isIgnored: A } = (0, s.cf)(
            [c.A],
            () => ({ isBlocked: c.A.isBlocked(e.author.id), isIgnored: c.A.isIgnored(e.author.id) }),
            [e.author.id],
        ),
        f = (0, r.Ay)(t.id, e.id),
        m = (0, s.bG)([d.default], () => d.default.getId()),
        S = (0, o.Ay)(e).nick,
        p = e.author.id === m ? E.intl.string(E.t.LuZzxn) : S,
        N = (0, s.bG)([h.default], () => (e.mentions.length > 0 ? h.default.getUser(e.mentions[0]) : void 0)),
        T = (0, o.d8)(N, t).nick;
    return (function (e, t) {
        let { isBlocked: n, isIgnored: s, authorNick: r } = t;
        if (n) return { type: "text", text: E.intl.string(E.t.XAkOo2) };
        if (s) return { type: "text", text: E.intl.string(E.t["G7p6v/"]) };
        if (
            (function (e) {
                switch (e.type) {
                    case i.l.DEFAULT:
                    case i.l.CHANGELOG:
                    case i.l.REPLY:
                    case i.l.CHAT_INPUT_COMMAND:
                    case i.l.CONTEXT_MENU_COMMAND:
                    case i.l.POLL_RESULT:
                    case i.l.AUTO_MODERATION_ACTION:
                        return !0;
                    default:
                        return !1;
                }
            })(e)
        ) {
            let t = (function (e) {
                if (1 === e.embeds.length && e.embeds[0].url === e.content && null != e.embeds[0].rawTitle)
                    return { type: "markup", markup: e.embeds[0].rawTitle };
                if (null != e.content && "" !== e.content) return { type: "message", message: e };
                if (e.hasFlag(I.pr7.IS_VOICE_MESSAGE)) return { type: "text", text: E.intl.string(E.t.slFYgi) };
                if (e.attachments.length > 0) {
                    let t = e.attachments.every((e) => (0, u.u)(e.filename)),
                        n = !t && e.attachments.every((e) => (0, u.AE)(e.filename)),
                        l = !t && !n && e.attachments.every((e) => (0, u.L8)(e.filename));
                    return t
                        ? {
                              type: "text",
                              text: E.intl.formatToPlainString(E.t.h4pFfU, { count: e.attachments.length }),
                              trailingIcon: "image",
                          }
                        : n
                          ? {
                                type: "text",
                                text: E.intl.formatToPlainString(E.t.SJ6pPX, { count: e.attachments.length }),
                                trailingIcon: "video",
                            }
                          : l
                            ? {
                                  type: "text",
                                  text: E.intl.formatToPlainString(E.t.fnO3hK, { count: e.attachments.length }),
                                  trailingIcon: "audio",
                              }
                            : {
                                  type: "text",
                                  text: E.intl.formatToPlainString(E.t["89ihS8"], { count: e.attachments.length }),
                                  trailingIcon: "attachment",
                              };
                }
                if (e.embeds.length > 0) {
                    let t = e.embeds.every((e) => null != e.url && (0, u.Zj)(e.url)),
                        n = !t && e.embeds.every((e) => null != e.url && (0, u.r1)(e.url)),
                        l = !t && !n && e.embeds.every((e) => null != e.url && (0, u.L8)(e.url));
                    if (t)
                        return {
                            type: "text",
                            text: E.intl.formatToPlainString(E.t.h4pFfU, { count: e.embeds.length }),
                            trailingIcon: "image",
                        };
                    if (n)
                        return {
                            type: "text",
                            text: E.intl.formatToPlainString(E.t.SJ6pPX, { count: e.embeds.length }),
                            trailingIcon: "video",
                        };
                    if (l)
                        return {
                            type: "text",
                            text: E.intl.formatToPlainString(E.t.fnO3hK, { count: e.embeds.length }),
                            trailingIcon: "audio",
                        };
                    else if (e.embeds.length > 0 && null != e.embeds[0].rawTitle)
                        return { type: "markup", markup: e.embeds[0].rawTitle };
                    else if (e.embeds.length > 0 && null != e.embeds[0].rawDescription)
                        return { type: "markup", markup: e.embeds[0].rawDescription };
                    else
                        return {
                            type: "text",
                            text: E.intl.formatToPlainString(E.t["9XuYjs"], { count: e.embeds.length }),
                            trailingIcon: "link",
                        };
                }
                return e.stickerItems.length > 0
                    ? { type: "text", text: e.stickerItems[0].name, trailingIcon: "sticker" }
                    : e.isPoll()
                      ? {
                            type: "text",
                            text: E.intl.formatToPlainString(E.t.ImizdM, { question: e.poll?.question.text }),
                        }
                      : (0, a.A)(e)
                        ? { type: "text", text: E.intl.string(E.t["9ddYKt"]) }
                        : void 0;
            })(e);
            if (null != t) return { ...t, authorLabel: r };
        }
        let o = (function (e, t) {
            let { currentUserId: n, authorNick: s, otherUser: r, otherUserNick: a, isCallActive: u } = t;
            return e.type === i.l.RECIPIENT_ADD && null != a
                ? {
                      type: "text",
                      text: E.intl.formatToPlainString(E.t.MMN2Jq, {
                          username: s,
                          usernameHook: l.identity,
                          otherUsername: a,
                          otherUsernameHook: l.identity,
                      }),
                  }
                : e.type === i.l.RECIPIENT_REMOVE && null != a
                  ? {
                        type: "text",
                        text:
                            e.author.id === r?.id
                                ? E.intl.formatToPlainString(E.t["5v2xa8"], { username: s, usernameHook: l.identity })
                                : E.intl.formatToPlainString(E.t.L2FyVq, {
                                      username: s,
                                      usernameHook: l.identity,
                                      otherUsername: a,
                                      otherUsernameHook: l.identity,
                                  }),
                    }
                  : e.type === i.l.CALL
                    ? {
                          type: "text",
                          text: u
                              ? E.intl.string(E.t["NGg/fm"])
                              : null == e.call || e.call.participants.includes(n)
                                ? E.intl.string(E.t.v05Xd6)
                                : E.intl.string(E.t["2CnhoI"]),
                          color: u ? "text-feedback-positive" : void 0,
                          trailingIcon: u ? "call-active" : "call-ended",
                      }
                    : e.type === i.l.CHANNEL_NAME_CHANGE
                      ? {
                            type: "text",
                            text: E.intl.formatToPlainString(E.t.oItgEw, {
                                username: s,
                                usernameHook: l.identity,
                                channelName: e.content,
                            }),
                        }
                      : e.type === i.l.CHANNEL_ICON_CHANGE
                        ? {
                              type: "text",
                              text: E.intl.formatToPlainString(E.t.OEdU6X, { username: s, usernameHook: l.identity }),
                          }
                        : e.type === i.l.CHANNEL_PINNED_MESSAGE
                          ? {
                                type: "text",
                                text: E.intl.formatToPlainString(E.t.vfkjqx, { username: s, usernameHook: l.identity }),
                            }
                          : e.type === i.l.USER_JOIN
                            ? {
                                  type: "text",
                                  text: E.intl.formatToPlainString(g.A.getSystemMessageUserJoin(e.id), {
                                      username: s,
                                      usernameHook: l.identity,
                                  }),
                              }
                            : e.type === i.l.THREAD_CREATED
                              ? {
                                    type: "text",
                                    text: E.intl.formatToPlainString(E.t.SGaUAU, {
                                        actorName: s,
                                        actorHook: l.identity,
                                        threadName: e.content,
                                        threadOnClick: l.identity,
                                    }),
                                }
                              : e.type === i.l.PREMIUM_REFERRAL
                                ? { type: "text", text: E.intl.formatToPlainString(E.t.lieTqU, { username: s }) }
                                : void 0;
        })(e, t);
        if (null != o) return o;
    })(e, {
        message: e,
        channel: t,
        currentUserId: m,
        authorNick: p,
        otherUser: N,
        otherUserNick: T,
        isBlocked: n,
        isIgnored: A,
        isCallActive: f,
    });
}
