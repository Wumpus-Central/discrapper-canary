n.d(t, {
    A: () => V,
    e: () => M,
}),
    n(65821),
    n(896048),
    n(114821),
    n(339614),
    n(733351);
var r = n(284009),
    i = n.n(r),
    l = n(735438),
    a = n.n(l),
    s = n(966974),
    o = n(311907),
    c = n(582754),
    u = n(73153),
    d = n(157559),
    p = n(686956),
    m = n(843472),
    f = n(198982),
    g = n(58149),
    h = n(857071),
    _ = n(301169),
    b = n(505527),
    A = n(9842),
    y = n(961350),
    v = n(734057),
    x = n(31717),
    O = n(834942),
    E = n(320501),
    j = n(522602),
    C = n(491037),
    I = n(335759),
    S = n(862780),
    T = n(951727),
    N = n(652215),
    P = n(985018);

function w(e) {
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
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function D(e, t) {
    let n = [...t],
        r = 0,
        i = 0;
    for (let t of n) {
        var l;
        let n = null == e || null == (l = e.find((e) => e.answer_id === parseInt(t))) ? void 0 : l.poll_media;
        (null == n ? void 0 : n.text) != null && (r += 1), (null == n ? void 0 : n.emoji) != null && (i += 1);
    }
    return {
        analyticsSelectedAnswerIds: n,
        selectedTextAnswersCount: r,
        selectedEmojiAnswersCount: i,
    };
}

function L(e) {
    let { guildId: t, title: n, body: r } = e;
    d.A.show({
        title: n,
        body: r,
        confirmText: P.intl.string(P.t["9VLmlZ"]),
        cancelText: P.intl.string(P.t["2m+Sqk"]),
        onConfirm: () => {
            p.A.joinGuild(t, {
                source: N.Q4z.POLL_ALERT,
            });
        },
    });
}

function M(e) {
    let { channelId: t, messageId: n, answerId: r } = e,
        i = v.A.getChannel(t);
    if (null == i) return;
    if (h.A.isLurking(i.guild_id))
        return void L({
            guildId: i.guild_id,
            title: P.intl.string(P.t["7LpysO"]),
            body: P.intl.string(P.t["5sHHoy"]),
        });
    let l = E.A.getMessage(t, n);
    if (null == l || null == l.poll || 0 === l.poll.answers.length) return;
    let a = null != r ? r : String(l.poll.answers[0].answer_id);
    C.W({
        message: l,
        initialAnswerId: a,
    });
}

function k(e) {
    let { channelId: t, messageId: n, isEditing: r } = e;
    (0, S.A2)(t, n, (e) => {
        var n;
        return {
            channelId: t,
            selectedAnswerIds: new Set(),
            submitting: !1,
            editing: r,
            showResults: null != (n = null == e ? void 0 : e.showResults) && n,
        };
    });
}

function U(e) {
    let { channelId: t, messageId: n } = e,
        r = E.A.getMessage(t, n);
    return null == r ? [] : r.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function G(e) {
    let { channelId: t, messageId: n, answerIds: r } = e,
        i = U({
            channelId: t,
            messageId: n,
        }),
        l = a().difference(i, r),
        s = a().difference(r, i),
        c = y.default.getId(),
        d = [
            ...l.map((e) => ({
                type: "MESSAGE_REACTION_REMOVE",
                id: e,
            })),
            ...s.map((e) => ({
                type: "MESSAGE_REACTION_ADD",
                id: e,
            })),
        ],
        p = o.Ay.Emitter.batched(() => {
            let e;
            for (let { id: r, type: i } of d)
                e = u.h.dispatch({
                    type: i,
                    channelId: t,
                    messageId: n,
                    emoji: {
                        id: r,
                        name: r,
                    },
                    userId: c,
                    optimistic: !0,
                    reactionType: b.v.VOTE,
                });
            return e;
        });
    null != p && (await p);
}
async function B(e) {
    let { channelId: t, messageId: n } = e,
        r = v.A.getChannel(t);
    if (null == r) return;
    if (h.A.isLurking(r.guild_id))
        return void L({
            guildId: r.guild_id,
            title: P.intl.string(P.t.Qic1FD),
            body: P.intl.string(P.t["5sHHoy"]),
        });
    if (!O.A.canChatInGuild(r.guild_id))
        return void d.A.show({
            title: P.intl.string(P.t.p245wu),
            body: P.intl.string(P.t["U/uodt"]),
        });
    let l = (0, S.xt)(t, n);
    i()(null != l, "Must not be able to vote without existing state!");
    let a = U({
        channelId: t,
        messageId: n,
    });
    try {
        let e = [...l.selectedAnswerIds.values()];
        (0, S.A2)(
            t,
            n,
            (e) => (
                i()(null != e, "Must not be able to vote without existing state!"),
                R(w({}, e), {
                    submitting: !0,
                    editing: !1,
                })
            ),
        ),
            await G({
                channelId: t,
                messageId: n,
                answerIds: e,
            }),
            await I.Q({
                channelId: t,
                messageId: n,
                answerIds: e,
            }),
            (0, S.A2)(t, n, () => void 0),
            c.OR.announce(0 === e.length ? P.intl.string(P.t["xcvy+3"]) : P.intl.string(P.t.o20GSo));
    } catch (e) {
        var s, o, u;
        d.A.show({
            title: P.intl.string(P.t.iufib1),
            body:
                null != (s = null != (o = null == (u = e.getAnyErrorMessage) ? void 0 : u.call(e)) ? o : e.message)
                    ? s
                    : P.intl.string(P.t.eAn6z2),
        }),
            await G({
                channelId: t,
                messageId: n,
                answerIds: a,
            }),
            (0, S.A2)(t, n, (e) => {
                if (null != e)
                    return R(w({}, e), {
                        submitting: !1,
                        editing: !1,
                    });
            });
    }
}
async function F(e) {
    let { channelId: t, messageId: n } = e,
        r = v.A.getChannel(t);
    if (null != r)
        return h.A.isLurking(r.guild_id)
            ? void L({
                  guildId: r.guild_id,
                  title: P.intl.string(P.t.B9QnBp),
                  body: P.intl.string(P.t.BVZCTn),
              })
            : ((0, S.A2)(t, n, (e) => {
                  var n;
                  return {
                      channelId: t,
                      selectedAnswerIds: new Set(),
                      submitting: !1,
                      editing: !1,
                      showResults: null != (n = null == e ? void 0 : e.showResults) && n,
                  };
              }),
              await B({
                  channelId: t,
                  messageId: n,
              }));
}
async function H(e) {
    let { channelId: t, messageId: n, type: r } = e;
    switch (r) {
        case "submit":
            await B({
                channelId: t,
                messageId: n,
            });
            break;
        case "remove":
            await F({
                channelId: t,
                messageId: n,
            });
            break;
        case "cancel":
            k({
                channelId: t,
                messageId: n,
                isEditing: !1,
            });
            break;
        case "showVotes":
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, S.A2)(t, n, (e) => {
                    var r, i;
                    let l = null == e || !e.showResults,
                        a = E.A.getMessage(t, n),
                        s =
                            null != a
                                ? a.reactions.reduce((e, t) => {
                                      var n, r;
                                      return (
                                          e + (null != (n = null == (r = t.count_details) ? void 0 : r.vote) ? n : 0)
                                      );
                                  }, 0)
                                : 0;
                    return (
                        g.Ay.trackWithMetadata(N.HAw.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: l,
                            votes_count: s,
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: null != (r = null == e ? void 0 : e.submitting) && r,
                            editing: null != (i = null == e ? void 0 : e.submitting) && i,
                            showResults: l,
                        }
                    );
                });
            })({
                channelId: t,
                messageId: n,
            });
            break;
        case "showVoterDetails":
            M({
                channelId: t,
                messageId: n,
            });
            break;
        default:
            i()(!1, "Unknown poll action type: ".concat(r));
    }
}
let V = {
    handlePollAnswerTapped: function (e) {
        var t, n;
        let { answerId: r } = e,
            {
                channelId: l,
                messageId: a,
                message: s,
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    r = E.A.getMessage(t, n);
                if (null != r)
                    return {
                        message: r,
                        channelId: t,
                        messageId: n,
                    };
                let l = A.A.getMessage(t, n);
                if (null != l.message)
                    return {
                        channelId: t,
                        messageId: n,
                        message: l.message,
                    };
                throw (i()(null != r, "Tapped on a non-existent poll message"), Error());
            })(
                (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i,
                        l = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                        return l;
                    }
                    if (
                        ((l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.getOwnPropertyNames(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                            return i;
                        })(e, t)),
                        Object.getOwnPropertySymbols)
                    )
                        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                            (r = n[i]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (l[r] = e[r]);
                    return l;
                })(e, ["answerId"]),
            ),
            { tapShouldOpenVotersModal: o } = null != (t = (0, T.j8)(s)) ? t : {};
        if (!0 === o)
            return void M({
                channelId: l,
                messageId: a,
                answerId: r,
            });
        let c = null == (n = s.poll) ? void 0 : n.allow_multiselect;
        (0, S.A2)(l, a, (e) => {
            var t, n;
            if (null == e) {
                let e = new Set([r]),
                    {
                        analyticsSelectedAnswerIds: t,
                        selectedTextAnswersCount: i,
                        selectedEmojiAnswersCount: o,
                    } = D(null == (n = s.poll) ? void 0 : n.answers, e);
                return (
                    g.Ay.trackWithMetadata(N.HAw.POLL_VOTE_SELECTED, {
                        channel_id: l,
                        message_id: a,
                        selected_answer_ids: t,
                        selected_text_answers_count: i,
                        selected_emoji_answers_count: o,
                    }),
                    {
                        channelId: l,
                        selectedAnswerIds: e,
                        submitting: !1,
                        editing: !1,
                        showResults: !1,
                    }
                );
            }
            let i = w({}, e),
                o = new Set(i.selectedAnswerIds);
            if (((i.selectedAnswerIds = o), o.has(r))) o.delete(r);
            else {
                if (!c) for (let e of o) o.delete(e);
                o.add(r);
            }
            let {
                analyticsSelectedAnswerIds: u,
                selectedTextAnswersCount: d,
                selectedEmojiAnswersCount: p,
            } = D(null == (t = s.poll) ? void 0 : t.answers, o);
            return (
                g.Ay.trackWithMetadata(N.HAw.POLL_VOTE_SELECTED, {
                    channel_id: l,
                    message_id: a,
                    selected_answer_ids: u,
                    selected_text_answers_count: d,
                    selected_emoji_answers_count: p,
                }),
                i
            );
        });
    },
    handlePollSubmitVote: B,
    handleUpdateVoteEditingState: k,
    handlePollActionTapped: H,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: r, allowMultiSelect: i, duration: l, layout: a, onClose: o } = e,
            c = j.A.getUploads(t.id, x.C.Poll),
            u = r.map((e) => {
                var t, n;
                let r = null == c ? void 0 : c.findIndex((t) => t.id === e.localCreationAnswerId),
                    i = {
                        attachment_ids: -1 !== r ? ["".concat(r)] : void 0,
                    };
                a === s.Z.DEFAULT && (i.text = null == (n = e.text) ? void 0 : n.trim());
                let l = null == (t = e.image) ? void 0 : t.emoji;
                return (
                    null != l &&
                        (null != l.id
                            ? (i.emoji = {
                                  id: l.id,
                                  name: "",
                              })
                            : null != l.optionallyDiverseSequence &&
                              (i.emoji = {
                                  name: l.optionallyDiverseSequence,
                              })),
                    {
                        poll_media: i,
                    }
                );
            }),
            d = {
                question: {
                    text: n.trim(),
                },
                answers: u,
                allow_multiselect: i,
                duration: l,
                layout_type: a,
            };
        try {
            await m.A.sendPollMessage(t.id, d, {
                attachmentsToUpload: c,
                onAttachmentUploadError: (e, n, r) => {
                    (0, _.k)({
                        file: e,
                        guildId: t.getGuildId(),
                        analyticsLocations: [],
                        code: n,
                        reason: r,
                    });
                },
            }),
                null == o || o();
        } catch (e) {
            if ("poll" === (e instanceof f.LG ? e : new f.LG(e)).getAnyErrorMessage() && null != e.text)
                throw R(w({}, e), {
                    body: JSON.parse(e.text),
                });
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await d.A.confirm({
            title: P.intl.string(P.t["+rfkTK"]),
            body: P.intl.string(P.t.H2I1gL),
        })) &&
            (await I.w({
                channelId: t,
                messageId: n,
            }));
    },
};
