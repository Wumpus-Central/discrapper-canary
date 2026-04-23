n.d(t, { BC: () => A });
var l = n(735438),
    i = n(448761),
    r = n(311907),
    s = n(931046),
    a = n(427930),
    u = n(77350),
    o = n(944052),
    d = n(763754),
    c = n(961350),
    h = n(994500),
    g = n(287809),
    m = n(638075),
    I = n(652215),
    E = n(985018);
function A(e, t) {
    let { isBlocked: n, isIgnored: A } = (0, r.cf)(
            [h.A],
            () => ({ isBlocked: h.A.isBlocked(e.author.id), isIgnored: h.A.isIgnored(e.author.id) }),
            [e.author.id],
        ),
        f = (0, s.Ay)(t.id, e.id),
        p = (0, r.bG)([c.default], () => c.default.getId()),
        S = (0, d.Ay)(e).nick,
        N = e.type !== i.l.USER_JOIN && e.author.id === p ? E.intl.string(E.t.LuZzxn) : S,
        x = (0, r.bG)([g.default], () => (e.mentions.length > 0 ? g.default.getUser(e.mentions[0]) : void 0)),
        T = (0, d.d8)(x, t).nick;
    return (function (e, t) {
        let { isBlocked: n, isIgnored: r, authorNick: s } = t;
        if (n) return { type: "text", text: E.intl.string(E.t.XAkOo2) };
        if (r) return { type: "text", text: E.intl.string(E.t["G7p6v/"]) };
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
            if (null != t) return { ...t, authorLabel: s };
        }
        let d = (function (e, t) {
            let { currentUserId: n, authorNick: r, otherUser: s, otherUserNick: a, isCallActive: u } = t;
            return e.type === i.l.RECIPIENT_ADD && null != a
                ? {
                      type: "text",
                      text: E.intl.formatToPlainString(E.t.MMN2Jq, {
                          username: r,
                          usernameHook: l.identity,
                          otherUsername: a,
                          otherUsernameHook: l.identity,
                      }),
                  }
                : e.type === i.l.RECIPIENT_REMOVE && null != a
                  ? {
                        type: "text",
                        text:
                            e.author.id === s?.id
                                ? E.intl.formatToPlainString(E.t["5v2xa8"], { username: r, usernameHook: l.identity })
                                : E.intl.formatToPlainString(E.t.L2FyVq, {
                                      username: r,
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
                                username: r,
                                usernameHook: l.identity,
                                channelName: e.content,
                            }),
                        }
                      : e.type === i.l.CHANNEL_ICON_CHANGE
                        ? {
                              type: "text",
                              text: E.intl.formatToPlainString(E.t.OEdU6X, { username: r, usernameHook: l.identity }),
                          }
                        : e.type === i.l.CHANNEL_PINNED_MESSAGE
                          ? {
                                type: "text",
                                text: E.intl.formatToPlainString(E.t.vfkjqx, { username: r, usernameHook: l.identity }),
                            }
                          : e.type === i.l.USER_JOIN
                            ? {
                                  type: "text",
                                  text: E.intl.formatToPlainString(m.A.getSystemMessageUserJoin(e.id), {
                                      username: r,
                                      usernameHook: l.identity,
                                  }),
                              }
                            : e.type === i.l.THREAD_CREATED
                              ? {
                                    type: "text",
                                    text: E.intl.formatToPlainString(E.t.SGaUAU, {
                                        actorName: r,
                                        actorHook: l.identity,
                                        threadName: e.content,
                                        threadOnClick: l.identity,
                                    }),
                                }
                              : e.type === i.l.PREMIUM_REFERRAL
                                ? { type: "text", text: E.intl.formatToPlainString(E.t.lieTqU, { username: r }) }
                                : e.type === i.l.STAGE_START
                                  ? {
                                        type: "text",
                                        text: E.intl.formatToPlainString(E.t.aZtRW8, {
                                            username: r,
                                            usernameOnClick: l.identity,
                                            topic: e.content,
                                        }),
                                    }
                                  : e.type === i.l.STAGE_END
                                    ? {
                                          type: "text",
                                          text: E.intl.formatToPlainString(E.t.vMJhvG, {
                                              username: r,
                                              usernameOnClick: l.identity,
                                              topic: e.content,
                                          }),
                                      }
                                    : e.type === i.l.STAGE_SPEAKER
                                      ? {
                                            type: "text",
                                            text: E.intl.formatToPlainString(E.t.V4uCm4, {
                                                username: r,
                                                usernameOnClick: l.identity,
                                            }),
                                        }
                                      : e.type === i.l.STAGE_TOPIC
                                        ? {
                                              type: "text",
                                              text: E.intl.formatToPlainString(E.t.ro3RM0, {
                                                  username: r,
                                                  usernameOnClick: l.identity,
                                                  topic: e.content,
                                              }),
                                          }
                                        : e.type === i.l.VOICE_SESSION
                                          ? { type: "text", text: (0, o.fn)(e) }
                                          : void 0;
        })(e, t);
        if (null != d) return d;
    })(e, {
        message: e,
        channel: t,
        currentUserId: p,
        authorNick: N,
        otherUser: x,
        otherUserNick: T,
        isBlocked: n,
        isIgnored: A,
        isCallActive: f,
    });
}
