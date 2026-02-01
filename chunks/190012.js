n.d(t, {
    BC: () => m,
});
var i = n(735438),
    r = n(448761),
    l = n(311907),
    a = n(931046),
    s = n(427930),
    o = n(77350),
    u = n(763754),
    c = n(961350),
    d = n(994500),
    h = n(287809),
    p = n(638075),
    f = n(652215),
    g = n(985018);

function m(e, t) {
    let { isBlocked: n, isIgnored: m } = (0, l.cf)(
            [d.A],
            () => ({
                isBlocked: d.A.isBlocked(e.author.id),
                isIgnored: d.A.isIgnored(e.author.id),
            }),
            [e.author.id],
        ),
        y = (0, a.Ay)(t.id, e.id),
        A = (0, l.bG)([c.default], () => c.default.getId()),
        v = (0, u.Ay)(e).nick,
        b = e.author.id === A ? g.intl.string(g.t.LuZzxn) : v,
        E = (0, l.bG)([h.default], () => (e.mentions.length > 0 ? h.default.getUser(e.mentions[0]) : void 0)),
        O = (0, u.d8)(E, t).nick;
    return (function (e, t) {
        let { isBlocked: n, isIgnored: l, authorNick: a } = t;
        if (n)
            return {
                type: "text",
                text: g.intl.string(g.t.XAkOo2),
            };
        if (l)
            return {
                type: "text",
                text: g.intl.string(g.t["G7p6v/"]),
            };
        if (
            (function (e) {
                switch (e.type) {
                    case r.l.DEFAULT:
                    case r.l.CHANGELOG:
                    case r.l.REPLY:
                    case r.l.CHAT_INPUT_COMMAND:
                    case r.l.CONTEXT_MENU_COMMAND:
                    case r.l.POLL_RESULT:
                    case r.l.AUTO_MODERATION_ACTION:
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
                        text: g.intl.string(g.t.slFYgi),
                    };
                if (e.attachments.length > 0) {
                    let t = e.attachments.every((e) => (0, o.u)(e.filename)),
                        n = !t && e.attachments.every((e) => (0, o.AE)(e.filename)),
                        i = !t && !n && e.attachments.every((e) => (0, o.L8)(e.filename));
                    return t
                        ? {
                              type: "text",
                              text: g.intl.formatToPlainString(g.t.h4pFfU, {
                                  count: e.attachments.length,
                              }),
                              trailingIcon: "image",
                          }
                        : n
                          ? {
                                type: "text",
                                text: g.intl.formatToPlainString(g.t.SJ6pPX, {
                                    count: e.attachments.length,
                                }),
                                trailingIcon: "video",
                            }
                          : i
                            ? {
                                  type: "text",
                                  text: g.intl.formatToPlainString(g.t.fnO3hK, {
                                      count: e.attachments.length,
                                  }),
                                  trailingIcon: "audio",
                              }
                            : {
                                  type: "text",
                                  text: g.intl.formatToPlainString(g.t["89ihS8"], {
                                      count: e.attachments.length,
                                  }),
                                  trailingIcon: "attachment",
                              };
                }
                if (e.embeds.length > 0) {
                    let t = e.embeds.every((e) => null != e.url && (0, o.Zj)(e.url)),
                        n = !t && e.embeds.every((e) => null != e.url && (0, o.r1)(e.url)),
                        i = !t && !n && e.embeds.every((e) => null != e.url && (0, o.L8)(e.url));
                    if (t)
                        return {
                            type: "text",
                            text: g.intl.formatToPlainString(g.t.h4pFfU, {
                                count: e.embeds.length,
                            }),
                            trailingIcon: "image",
                        };
                    if (n)
                        return {
                            type: "text",
                            text: g.intl.formatToPlainString(g.t.SJ6pPX, {
                                count: e.embeds.length,
                            }),
                            trailingIcon: "video",
                        };
                    if (i)
                        return {
                            type: "text",
                            text: g.intl.formatToPlainString(g.t.fnO3hK, {
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
                            text: g.intl.formatToPlainString(g.t["9XuYjs"], {
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
                        text: g.intl.formatToPlainString(g.t.ImizdM, {
                            question: null == (t = e.poll) ? void 0 : t.question.text,
                        }),
                    };
                }
                if ((0, s.A)(e))
                    return {
                        type: "text",
                        text: g.intl.string(g.t["9ddYKt"]),
                    };
            })(e);
            if (null != t) {
                var u, c;
                return (
                    (u = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, t)),
                    (c = c =
                        {
                            authorLabel: a,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
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
            let { currentUserId: n, authorNick: l, otherUser: a, otherUserNick: s, isCallActive: o } = t;
            return e.type === r.l.RECIPIENT_ADD && null != s
                ? {
                      type: "text",
                      text: g.intl.formatToPlainString(g.t.MMN2Jq, {
                          username: l,
                          usernameHook: i.identity,
                          otherUsername: s,
                          otherUsernameHook: i.identity,
                      }),
                  }
                : e.type === r.l.RECIPIENT_REMOVE && null != s
                  ? {
                        type: "text",
                        text:
                            e.author.id === (null == a ? void 0 : a.id)
                                ? g.intl.formatToPlainString(g.t["5v2xa8"], {
                                      username: l,
                                      usernameHook: i.identity,
                                  })
                                : g.intl.formatToPlainString(g.t.L2FyVq, {
                                      username: l,
                                      usernameHook: i.identity,
                                      otherUsername: s,
                                      otherUsernameHook: i.identity,
                                  }),
                    }
                  : e.type === r.l.CALL
                    ? {
                          type: "text",
                          text: o
                              ? g.intl.string(g.t["NGg/fm"])
                              : null == e.call || e.call.participants.includes(n)
                                ? g.intl.string(g.t.v05Xd6)
                                : g.intl.string(g.t["2CnhoI"]),
                          color: o ? "text-feedback-positive" : void 0,
                          trailingIcon: o ? "call-active" : "call-ended",
                      }
                    : e.type === r.l.CHANNEL_NAME_CHANGE
                      ? {
                            type: "text",
                            text: g.intl.formatToPlainString(g.t.oItgEw, {
                                username: l,
                                usernameHook: i.identity,
                                channelName: e.content,
                            }),
                        }
                      : e.type === r.l.CHANNEL_ICON_CHANGE
                        ? {
                              type: "text",
                              text: g.intl.formatToPlainString(g.t.OEdU6X, {
                                  username: l,
                                  usernameHook: i.identity,
                              }),
                          }
                        : e.type === r.l.CHANNEL_PINNED_MESSAGE
                          ? {
                                type: "text",
                                text: g.intl.formatToPlainString(g.t.vfkjqx, {
                                    username: l,
                                    usernameHook: i.identity,
                                }),
                            }
                          : e.type === r.l.USER_JOIN
                            ? {
                                  type: "text",
                                  text: g.intl.formatToPlainString(p.A.getSystemMessageUserJoin(e.id), {
                                      username: l,
                                      usernameHook: i.identity,
                                  }),
                              }
                            : e.type === r.l.THREAD_CREATED
                              ? {
                                    type: "text",
                                    text: g.intl.formatToPlainString(g.t.SGaUAU, {
                                        actorName: l,
                                        actorHook: i.identity,
                                        threadName: e.content,
                                        threadOnClick: i.identity,
                                    }),
                                }
                              : e.type === r.l.PREMIUM_REFERRAL
                                ? {
                                      type: "text",
                                      text: g.intl.formatToPlainString(g.t.lieTqU, {
                                          username: l,
                                      }),
                                  }
                                : void 0;
        })(e, t);
        if (null != d) return d;
    })(e, {
        message: e,
        channel: t,
        currentUserId: A,
        authorNick: b,
        otherUser: E,
        otherUserNick: O,
        isBlocked: n,
        isIgnored: m,
        isCallActive: y,
    });
}
