n.d(t, { BC: () => E });
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
    I = n(638075),
    A = n(652215),
    f = n(985018);
function E(e, t) {
    let { isBlocked: n, isIgnored: E } = (0, r.cf)(
            [h.A],
            () => ({ isBlocked: h.A.isBlocked(e.author.id), isIgnored: h.A.isIgnored(e.author.id) }),
            [e.author.id],
        ),
        m = (0, s.Ay)(t.id, e.id),
        S = (0, r.bG)([c.default], () => c.default.getId()),
        _ = (0, d.Ay)(e).nick,
        p = e.type !== i.l.USER_JOIN && e.author.id === S ? f.intl.string(f.t.LuZzxn) : _,
        N = (0, r.bG)([g.default], () => (e.mentions.length > 0 ? g.default.getUser(e.mentions[0]) : void 0)),
        T = (0, d.d8)(N, t).nick;
    return (function (e, t) {
        let { isBlocked: n, isIgnored: r, authorNick: s } = t;
        if (n) return { type: "text", text: f.intl.string(f.t.XAkOo2) };
        if (r) return { type: "text", text: f.intl.string(f.t["G7p6v/"]) };
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
                if (e.hasFlag(A.pr7.IS_VOICE_MESSAGE)) return { type: "text", text: f.intl.string(f.t.slFYgi) };
                if (e.attachments.length > 0) {
                    let t = e.attachments.every((e) => (0, u.u)(e.filename)),
                        n = !t && e.attachments.every((e) => (0, u.AE)(e.filename)),
                        l = !t && !n && e.attachments.every((e) => (0, u.L8)(e.filename));
                    return t
                        ? {
                              type: "text",
                              text: f.intl.formatToPlainString(f.t.h4pFfU, { count: e.attachments.length }),
                              trailingIcon: "image",
                          }
                        : n
                          ? {
                                type: "text",
                                text: f.intl.formatToPlainString(f.t.SJ6pPX, { count: e.attachments.length }),
                                trailingIcon: "video",
                            }
                          : l
                            ? {
                                  type: "text",
                                  text: f.intl.formatToPlainString(f.t.fnO3hK, { count: e.attachments.length }),
                                  trailingIcon: "audio",
                              }
                            : {
                                  type: "text",
                                  text: f.intl.formatToPlainString(f.t["89ihS8"], { count: e.attachments.length }),
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
                            text: f.intl.formatToPlainString(f.t.h4pFfU, { count: e.embeds.length }),
                            trailingIcon: "image",
                        };
                    if (n)
                        return {
                            type: "text",
                            text: f.intl.formatToPlainString(f.t.SJ6pPX, { count: e.embeds.length }),
                            trailingIcon: "video",
                        };
                    if (l)
                        return {
                            type: "text",
                            text: f.intl.formatToPlainString(f.t.fnO3hK, { count: e.embeds.length }),
                            trailingIcon: "audio",
                        };
                    else if (e.embeds.length > 0 && null != e.embeds[0].rawTitle)
                        return { type: "markup", markup: e.embeds[0].rawTitle };
                    else if (e.embeds.length > 0 && null != e.embeds[0].rawDescription)
                        return { type: "markup", markup: e.embeds[0].rawDescription };
                    else
                        return {
                            type: "text",
                            text: f.intl.formatToPlainString(f.t["9XuYjs"], { count: e.embeds.length }),
                            trailingIcon: "link",
                        };
                }
                return e.stickerItems.length > 0
                    ? { type: "text", text: e.stickerItems[0].name, trailingIcon: "sticker" }
                    : e.isPoll()
                      ? {
                            type: "text",
                            text: f.intl.formatToPlainString(f.t.ImizdM, { question: e.poll?.question.text }),
                        }
                      : (0, a.A)(e)
                        ? { type: "text", text: f.intl.string(f.t["9ddYKt"]) }
                        : void 0;
            })(e);
            if (null != t) return { ...t, authorLabel: s };
        }
        let d = (function (e, t) {
            let { currentUserId: n, authorNick: r, otherUser: s, otherUserNick: a, isCallActive: u } = t;
            return e.type === i.l.RECIPIENT_ADD && null != a
                ? {
                      type: "text",
                      text: f.intl.formatToPlainString(f.t.MMN2Jq, {
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
                                ? f.intl.formatToPlainString(f.t["5v2xa8"], { username: r, usernameHook: l.identity })
                                : f.intl.formatToPlainString(f.t.L2FyVq, {
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
                              ? f.intl.string(f.t["NGg/fm"])
                              : null == e.call || e.call.participants.includes(n)
                                ? f.intl.string(f.t.v05Xd6)
                                : f.intl.string(f.t["2CnhoI"]),
                          color: u ? "text-feedback-positive" : void 0,
                          trailingIcon: u ? "call-active" : "call-ended",
                      }
                    : e.type === i.l.CHANNEL_NAME_CHANGE
                      ? {
                            type: "text",
                            text: f.intl.formatToPlainString(f.t.oItgEw, {
                                username: r,
                                usernameHook: l.identity,
                                channelName: e.content,
                            }),
                        }
                      : e.type === i.l.CHANNEL_ICON_CHANGE
                        ? {
                              type: "text",
                              text: f.intl.formatToPlainString(f.t.OEdU6X, { username: r, usernameHook: l.identity }),
                          }
                        : e.type === i.l.CHANNEL_PINNED_MESSAGE
                          ? {
                                type: "text",
                                text: f.intl.formatToPlainString(f.t.vfkjqx, { username: r, usernameHook: l.identity }),
                            }
                          : e.type === i.l.USER_JOIN
                            ? {
                                  type: "text",
                                  text: f.intl.formatToPlainString(I.A.getSystemMessageUserJoin(e.id), {
                                      username: r,
                                      usernameHook: l.identity,
                                  }),
                              }
                            : e.type === i.l.THREAD_CREATED
                              ? {
                                    type: "text",
                                    text: f.intl.formatToPlainString(f.t.SGaUAU, {
                                        actorName: r,
                                        actorHook: l.identity,
                                        threadName: e.content,
                                        threadOnClick: l.identity,
                                    }),
                                }
                              : e.type === i.l.PREMIUM_REFERRAL
                                ? { type: "text", text: f.intl.formatToPlainString(f.t.lieTqU, { username: r }) }
                                : e.type === i.l.STAGE_START
                                  ? {
                                        type: "text",
                                        text: f.intl.formatToPlainString(f.t.aZtRW8, {
                                            username: r,
                                            usernameOnClick: l.identity,
                                            topic: e.content,
                                        }),
                                    }
                                  : e.type === i.l.STAGE_END
                                    ? {
                                          type: "text",
                                          text: f.intl.formatToPlainString(f.t.vMJhvG, {
                                              username: r,
                                              usernameOnClick: l.identity,
                                              topic: e.content,
                                          }),
                                      }
                                    : e.type === i.l.STAGE_SPEAKER
                                      ? {
                                            type: "text",
                                            text: f.intl.formatToPlainString(f.t.V4uCm4, {
                                                username: r,
                                                usernameOnClick: l.identity,
                                            }),
                                        }
                                      : e.type === i.l.STAGE_TOPIC
                                        ? {
                                              type: "text",
                                              text: f.intl.formatToPlainString(f.t.ro3RM0, {
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
        currentUserId: S,
        authorNick: p,
        otherUser: N,
        otherUserNick: T,
        isBlocked: n,
        isIgnored: E,
        isCallActive: m,
    });
}
