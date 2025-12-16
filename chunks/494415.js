n.d(t, { sY: () => y });
var r = n(392711),
    i = n(275726),
    l = n(442837),
    a = n(179191),
    o = n(978003),
    s = n(406432),
    u = n(739566),
    c = n(314897),
    d = n(699516),
    f = n(594174),
    m = n(352736),
    p = n(981631),
    g = n(388032);
function y(e, t) {
    let { isBlocked: n, isIgnored: y } = (0, l.cj)(
            [d.Z],
            () => ({
                isBlocked: d.Z.isBlocked(e.author.id),
                isIgnored: d.Z.isIgnored(e.author.id),
            }),
            [e.author.id],
        ),
        b = (0, a.ZP)(t.id, e.id),
        v = (0, l.e7)([c.default], () => c.default.getId()),
        O = (0, u.ZP)(e).nick,
        h = e.author.id === v ? g.intl.string(g.t.LuZzxn) : O,
        x = (0, l.e7)([f.default], () => (e.mentions.length > 0 ? f.default.getUser(e.mentions[0]) : void 0)),
        j = (0, u.Sw)(x, t).nick;
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
                    case i.u.DEFAULT:
                    case i.u.CHANGELOG:
                    case i.u.REPLY:
                    case i.u.CHAT_INPUT_COMMAND:
                    case i.u.CONTEXT_MENU_COMMAND:
                    case i.u.POLL_RESULT:
                    case i.u.AUTO_MODERATION_ACTION:
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
                if (e.hasFlag(p.iLy.IS_VOICE_MESSAGE))
                    return {
                        type: "text",
                        text: g.intl.string(g.t.slFYgi),
                    };
                if (e.attachments.length > 0) {
                    let t = e.attachments.every((e) => (0, s.CO)(e.filename)),
                        n = !t && e.attachments.every((e) => (0, s.NU)(e.filename)),
                        r = !t && !n && e.attachments.every((e) => (0, s.TN)(e.filename));
                    return t
                        ? {
                              type: "text",
                              text: g.intl.formatToPlainString(g.t.h4pFfU, { count: e.attachments.length }),
                              trailingIcon: "image",
                          }
                        : n
                          ? {
                                type: "text",
                                text: g.intl.formatToPlainString(g.t.SJ6pPX, { count: e.attachments.length }),
                                trailingIcon: "video",
                            }
                          : r
                            ? {
                                  type: "text",
                                  text: g.intl.formatToPlainString(g.t.fnO3hK, { count: e.attachments.length }),
                                  trailingIcon: "audio",
                              }
                            : {
                                  type: "text",
                                  text: g.intl.formatToPlainString(g.t["89ihS8"], { count: e.attachments.length }),
                                  trailingIcon: "attachment",
                              };
                }
                if (e.embeds.length > 0) {
                    let t = e.embeds.every((e) => null != e.url && (0, s.hU)(e.url)),
                        n = !t && e.embeds.every((e) => null != e.url && (0, s.cb)(e.url)),
                        r = !t && !n && e.embeds.every((e) => null != e.url && (0, s.TN)(e.url));
                    if (t)
                        return {
                            type: "text",
                            text: g.intl.formatToPlainString(g.t.h4pFfU, { count: e.embeds.length }),
                            trailingIcon: "image",
                        };
                    if (n)
                        return {
                            type: "text",
                            text: g.intl.formatToPlainString(g.t.SJ6pPX, { count: e.embeds.length }),
                            trailingIcon: "video",
                        };
                    if (r)
                        return {
                            type: "text",
                            text: g.intl.formatToPlainString(g.t.fnO3hK, { count: e.embeds.length }),
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
                            text: g.intl.formatToPlainString(g.t["9XuYjs"], { count: e.embeds.length }),
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
                if ((0, o.Z)(e))
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
                    (c = c = { authorLabel: a }),
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
            let { currentUserId: n, authorNick: l, otherUser: a, otherUserNick: o, isCallActive: s } = t;
            return e.type === i.u.RECIPIENT_ADD && null != o
                ? {
                      type: "text",
                      text: g.intl.formatToPlainString(g.t.MMN2Jq, {
                          username: l,
                          usernameHook: r.identity,
                          otherUsername: o,
                          otherUsernameHook: r.identity,
                      }),
                  }
                : e.type === i.u.RECIPIENT_REMOVE && null != o
                  ? {
                        type: "text",
                        text:
                            e.author.id === (null == a ? void 0 : a.id)
                                ? g.intl.formatToPlainString(g.t["5v2xa8"], {
                                      username: l,
                                      usernameHook: r.identity,
                                  })
                                : g.intl.formatToPlainString(g.t.L2FyVq, {
                                      username: l,
                                      usernameHook: r.identity,
                                      otherUsername: o,
                                      otherUsernameHook: r.identity,
                                  }),
                    }
                  : e.type === i.u.CALL
                    ? {
                          type: "text",
                          text: s
                              ? g.intl.string(g.t["NGg/fm"])
                              : null == e.call || e.call.participants.includes(n)
                                ? g.intl.string(g.t.v05Xd6)
                                : g.intl.string(g.t["2CnhoI"]),
                          color: s ? "text-feedback-positive" : void 0,
                          trailingIcon: s ? "call-active" : "call-ended",
                      }
                    : e.type === i.u.CHANNEL_NAME_CHANGE
                      ? {
                            type: "text",
                            text: g.intl.formatToPlainString(g.t.oItgEw, {
                                username: l,
                                usernameHook: r.identity,
                                channelName: e.content,
                            }),
                        }
                      : e.type === i.u.CHANNEL_ICON_CHANGE
                        ? {
                              type: "text",
                              text: g.intl.formatToPlainString(g.t.OEdU6X, {
                                  username: l,
                                  usernameHook: r.identity,
                              }),
                          }
                        : e.type === i.u.CHANNEL_PINNED_MESSAGE
                          ? {
                                type: "text",
                                text: g.intl.formatToPlainString(g.t.vfkjqx, {
                                    username: l,
                                    usernameHook: r.identity,
                                }),
                            }
                          : e.type === i.u.USER_JOIN
                            ? {
                                  type: "text",
                                  text: g.intl.formatToPlainString(m.Z.getSystemMessageUserJoin(e.id), {
                                      username: l,
                                      usernameHook: r.identity,
                                  }),
                              }
                            : e.type === i.u.THREAD_CREATED
                              ? {
                                    type: "text",
                                    text: g.intl.formatToPlainString(g.t.SGaUAU, {
                                        actorName: l,
                                        actorHook: r.identity,
                                        threadName: e.content,
                                        threadOnClick: r.identity,
                                    }),
                                }
                              : e.type === i.u.PREMIUM_REFERRAL
                                ? {
                                      type: "text",
                                      text: g.intl.formatToPlainString(g.t.lieTqU, { username: l }),
                                  }
                                : void 0;
        })(e, t);
        if (null != d) return d;
    })(e, {
        message: e,
        channel: t,
        currentUserId: v,
        authorNick: h,
        otherUser: x,
        otherUserNick: j,
        isBlocked: n,
        isIgnored: y,
        isCallActive: b,
    });
}
