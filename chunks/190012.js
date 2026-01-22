n.d(t, {
    BC: () => g,
});
var r = n(735438),
    l = n(448761),
    i = n(311907),
    s = n(931046),
    a = n(427930),
    o = n(77350),
    u = n(763754),
    c = n(961350),
    d = n(994500),
    p = n(287809),
    m = n(638075),
    f = n(652215),
    y = n(985018);

function g(e, t) {
    let { isBlocked: n, isIgnored: g } = (0, i.cf)(
            [d.A],
            () => ({
                isBlocked: d.A.isBlocked(e.author.id),
                isIgnored: d.A.isIgnored(e.author.id),
            }),
            [e.author.id],
        ),
        b = (0, s.Ay)(t.id, e.id),
        A = (0, i.bG)([c.default], () => c.default.getId()),
        x = (0, u.Ay)(e).nick,
        v = e.author.id === A ? y.intl.string(y.t.LuZzxn) : x,
        h = (0, i.bG)([p.default], () => (e.mentions.length > 0 ? p.default.getUser(e.mentions[0]) : void 0)),
        E = (0, u.d8)(h, t).nick;
    return (function (e, t) {
        let { isBlocked: n, isIgnored: i, authorNick: s } = t;
        if (n)
            return {
                type: "text",
                text: y.intl.string(y.t.XAkOo2),
            };
        if (i)
            return {
                type: "text",
                text: y.intl.string(y.t["G7p6v/"]),
            };
        if (
            (function (e) {
                switch (e.type) {
                    case l.l.DEFAULT:
                    case l.l.CHANGELOG:
                    case l.l.REPLY:
                    case l.l.CHAT_INPUT_COMMAND:
                    case l.l.CONTEXT_MENU_COMMAND:
                    case l.l.POLL_RESULT:
                    case l.l.AUTO_MODERATION_ACTION:
                        return !0;
                    default:
                        return !1;
                }
            })(e)
        ) {
            let t = (function (e) {
                if (1 === e.embeds.length && e.embeds[0].url === e.content && null != e.embeds[0].rawTitle)
                    return {
                        type: "markup",
                        markup: e.embeds[0].rawTitle,
                    };
                if (null != e.content && "" !== e.content)
                    return {
                        type: "message",
                        message: e,
                    };
                if (e.hasFlag(f.pr7.IS_VOICE_MESSAGE))
                    return {
                        type: "text",
                        text: y.intl.string(y.t.slFYgi),
                    };
                if (e.attachments.length > 0) {
                    let t = e.attachments.every((e) => (0, o.u)(e.filename)),
                        n = !t && e.attachments.every((e) => (0, o.AE)(e.filename)),
                        r = !t && !n && e.attachments.every((e) => (0, o.L8)(e.filename));
                    return t
                        ? {
                              type: "text",
                              text: y.intl.formatToPlainString(y.t.h4pFfU, {
                                  count: e.attachments.length,
                              }),
                              trailingIcon: "image",
                          }
                        : n
                          ? {
                                type: "text",
                                text: y.intl.formatToPlainString(y.t.SJ6pPX, {
                                    count: e.attachments.length,
                                }),
                                trailingIcon: "video",
                            }
                          : r
                            ? {
                                  type: "text",
                                  text: y.intl.formatToPlainString(y.t.fnO3hK, {
                                      count: e.attachments.length,
                                  }),
                                  trailingIcon: "audio",
                              }
                            : {
                                  type: "text",
                                  text: y.intl.formatToPlainString(y.t["89ihS8"], {
                                      count: e.attachments.length,
                                  }),
                                  trailingIcon: "attachment",
                              };
                }
                if (e.embeds.length > 0) {
                    let t = e.embeds.every((e) => null != e.url && (0, o.Zj)(e.url)),
                        n = !t && e.embeds.every((e) => null != e.url && (0, o.r1)(e.url)),
                        r = !t && !n && e.embeds.every((e) => null != e.url && (0, o.L8)(e.url));
                    if (t)
                        return {
                            type: "text",
                            text: y.intl.formatToPlainString(y.t.h4pFfU, {
                                count: e.embeds.length,
                            }),
                            trailingIcon: "image",
                        };
                    if (n)
                        return {
                            type: "text",
                            text: y.intl.formatToPlainString(y.t.SJ6pPX, {
                                count: e.embeds.length,
                            }),
                            trailingIcon: "video",
                        };
                    if (r)
                        return {
                            type: "text",
                            text: y.intl.formatToPlainString(y.t.fnO3hK, {
                                count: e.embeds.length,
                            }),
                            trailingIcon: "audio",
                        };
                    else if (e.embeds.length > 0 && null != e.embeds[0].rawTitle)
                        return {
                            type: "markup",
                            markup: e.embeds[0].rawTitle,
                        };
                    else if (e.embeds.length > 0 && null != e.embeds[0].rawDescription)
                        return {
                            type: "markup",
                            markup: e.embeds[0].rawDescription,
                        };
                    else
                        return {
                            type: "text",
                            text: y.intl.formatToPlainString(y.t["9XuYjs"], {
                                count: e.embeds.length,
                            }),
                            trailingIcon: "link",
                        };
                }
                if (e.stickerItems.length > 0)
                    return {
                        type: "text",
                        text: e.stickerItems[0].name,
                        trailingIcon: "sticker",
                    };
                if (e.isPoll()) {
                    var t;
                    return {
                        type: "text",
                        text: y.intl.formatToPlainString(y.t.ImizdM, {
                            question: null == (t = e.poll) ? void 0 : t.question.text,
                        }),
                    };
                }
                if ((0, a.A)(e))
                    return {
                        type: "text",
                        text: y.intl.string(y.t["9ddYKt"]),
                    };
            })(e);
            if (null != t) {
                var u, c;
                return (
                    (u = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, t)),
                    (c = c =
                        {
                            authorLabel: s,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(c)).forEach(function (e) {
                              Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(c, e));
                          }),
                    u
                );
            }
        }
        let d = (function (e, t) {
            let { currentUserId: n, authorNick: i, otherUser: s, otherUserNick: a, isCallActive: o } = t;
            return e.type === l.l.RECIPIENT_ADD && null != a
                ? {
                      type: "text",
                      text: y.intl.formatToPlainString(y.t.MMN2Jq, {
                          username: i,
                          usernameHook: r.identity,
                          otherUsername: a,
                          otherUsernameHook: r.identity,
                      }),
                  }
                : e.type === l.l.RECIPIENT_REMOVE && null != a
                  ? {
                        type: "text",
                        text:
                            e.author.id === (null == s ? void 0 : s.id)
                                ? y.intl.formatToPlainString(y.t["5v2xa8"], {
                                      username: i,
                                      usernameHook: r.identity,
                                  })
                                : y.intl.formatToPlainString(y.t.L2FyVq, {
                                      username: i,
                                      usernameHook: r.identity,
                                      otherUsername: a,
                                      otherUsernameHook: r.identity,
                                  }),
                    }
                  : e.type === l.l.CALL
                    ? {
                          type: "text",
                          text: o
                              ? y.intl.string(y.t["NGg/fm"])
                              : null == e.call || e.call.participants.includes(n)
                                ? y.intl.string(y.t.v05Xd6)
                                : y.intl.string(y.t["2CnhoI"]),
                          color: o ? "text-feedback-positive" : void 0,
                          trailingIcon: o ? "call-active" : "call-ended",
                      }
                    : e.type === l.l.CHANNEL_NAME_CHANGE
                      ? {
                            type: "text",
                            text: y.intl.formatToPlainString(y.t.oItgEw, {
                                username: i,
                                usernameHook: r.identity,
                                channelName: e.content,
                            }),
                        }
                      : e.type === l.l.CHANNEL_ICON_CHANGE
                        ? {
                              type: "text",
                              text: y.intl.formatToPlainString(y.t.OEdU6X, {
                                  username: i,
                                  usernameHook: r.identity,
                              }),
                          }
                        : e.type === l.l.CHANNEL_PINNED_MESSAGE
                          ? {
                                type: "text",
                                text: y.intl.formatToPlainString(y.t.vfkjqx, {
                                    username: i,
                                    usernameHook: r.identity,
                                }),
                            }
                          : e.type === l.l.USER_JOIN
                            ? {
                                  type: "text",
                                  text: y.intl.formatToPlainString(m.A.getSystemMessageUserJoin(e.id), {
                                      username: i,
                                      usernameHook: r.identity,
                                  }),
                              }
                            : e.type === l.l.THREAD_CREATED
                              ? {
                                    type: "text",
                                    text: y.intl.formatToPlainString(y.t.SGaUAU, {
                                        actorName: i,
                                        actorHook: r.identity,
                                        threadName: e.content,
                                        threadOnClick: r.identity,
                                    }),
                                }
                              : e.type === l.l.PREMIUM_REFERRAL
                                ? {
                                      type: "text",
                                      text: y.intl.formatToPlainString(y.t.lieTqU, {
                                          username: i,
                                      }),
                                  }
                                : void 0;
        })(e, t);
        if (null != d) return d;
    })(e, {
        message: e,
        channel: t,
        currentUserId: A,
        authorNick: v,
        otherUser: h,
        otherUserNick: E,
        isBlocked: n,
        isIgnored: g,
        isCallActive: b,
    });
}
