n.d(t, {
    Z: () => q,
    n: () => Z,
}),
    n(415506),
    n(388685),
    n(361932),
    n(187205),
    n(781311);
var r = n(512722),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(263568),
    l = n(442837),
    c = n(780384),
    u = n(570140),
    d = n(668781),
    f = n(749210),
    _ = n(904245),
    p = n(881052),
    h = n(367907),
    m = n(41776),
    g = n(58873),
    E = n(566006),
    b = n(869765),
    y = n(314897),
    O = n(592125),
    v = n(703558),
    I = n(607744),
    T = n(375954),
    S = n(117530),
    A = n(553803),
    N = n(467531),
    C = n(798628),
    R = n(918088),
    P = n(981631),
    w = n(388032);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = j(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function U(e) {
    let { channelId: t, messageId: n } = e,
        r = T.Z.getMessage(t, n);
    if (null != r)
        return {
            message: r,
            channelId: t,
            messageId: n,
        };
    let o = b.Z.getMessage(t, n);
    if (null != o.message)
        return {
            channelId: t,
            messageId: n,
            message: o.message,
        };
    throw (i()(null != r, "Tapped on a non-existent poll message"), Error());
}
function G(e, t) {
    let n = [...t],
        r = 0,
        i = 0;
    for (let t of n) {
        var o;
        let n = null == e || null == (o = e.find((e) => e.answer_id === parseInt(t))) ? void 0 : o.poll_media;
        (null == n ? void 0 : n.text) != null && (r += 1), (null == n ? void 0 : n.emoji) != null && (i += 1);
    }
    return {
        analyticsSelectedAnswerIds: n,
        selectedTextAnswersCount: r,
        selectedEmojiAnswersCount: i,
    };
}
function B(e) {
    let { guildId: t, title: n, body: r } = e;
    d.Z.show({
        title: n,
        body: r,
        confirmText: w.intl.string(w.t["9VLmlZ"]),
        cancelText: w.intl.string(w.t["2m+Sqq"]),
        onConfirm: () => {
            f.Z.joinGuild(t, { source: P.vtS.POLL_ALERT });
        },
    });
}
function Z(e) {
    let { channelId: t, messageId: n, answerId: r } = e,
        i = O.Z.getChannel(t);
    if (null == i) return;
    if (m.Z.isLurking(i.guild_id))
        return void B({
            guildId: i.guild_id,
            title: w.intl.string(w.t["7LpysL"]),
            body: w.intl.string(w.t["5sHHo6"]),
        });
    let o = T.Z.getMessage(t, n);
    if (null == o || null == o.poll || 0 === o.poll.answers.length) return;
    let a = null != r ? r : String(o.poll.answers[0].answer_id);
    A.A({
        message: o,
        initialAnswerId: a,
    });
}
function F(e) {
    let { channelId: t, messageId: n, isEditing: r } = e;
    (0, C.eu)(t, n, (e) => {
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
function V(e) {
    let { channelId: t, messageId: n } = e,
        r = T.Z.getMessage(t, n);
    return null == r ? [] : r.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function H(e) {
    let { channelId: t, messageId: n, answerIds: r } = e,
        i = V({
            channelId: t,
            messageId: n,
        }),
        o = a().difference(i, r),
        s = a().difference(r, i),
        c = y.default.getId(),
        d = [
            ...o.map((e) => ({
                type: "MESSAGE_REACTION_REMOVE",
                id: e,
            })),
            ...s.map((e) => ({
                type: "MESSAGE_REACTION_ADD",
                id: e,
            })),
        ],
        f = l.ZP.Emitter.batched(() => {
            let e;
            for (let { id: r, type: i } of d)
                e = u.Z.dispatch({
                    type: i,
                    channelId: t,
                    messageId: n,
                    emoji: {
                        id: r,
                        name: r,
                    },
                    userId: c,
                    optimistic: !0,
                    reactionType: E.O.VOTE,
                });
            return e;
        });
    null != f && (await f);
}
async function Y(e) {
    let { channelId: t, messageId: n } = e,
        r = O.Z.getChannel(t);
    if (null == r) return;
    if (m.Z.isLurking(r.guild_id))
        return void B({
            guildId: r.guild_id,
            title: w.intl.string(w.t.Qic1FB),
            body: w.intl.string(w.t["5sHHo6"]),
        });
    if (!I.Z.canChatInGuild(r.guild_id))
        return void d.Z.show({
            title: w.intl.string(w.t.p245ws),
            body: w.intl.string(w.t["U/uodn"]),
        });
    let o = (0, C.fU)(t, n);
    i()(null != o, "Must not be able to vote without existing state!");
    let a = V({
        channelId: t,
        messageId: n,
    });
    try {
        let e = [...o.selectedAnswerIds.values()];
        (0, C.eu)(
            t,
            n,
            (e) => (
                i()(null != e, "Must not be able to vote without existing state!"),
                M(L({}, e), {
                    submitting: !0,
                    editing: !1,
                })
            ),
        ),
            await H({
                channelId: t,
                messageId: n,
                answerIds: e,
            }),
            await N.B({
                channelId: t,
                messageId: n,
                answerIds: e,
            }),
            (0, C.eu)(t, n, () => void 0),
            c.uv.announce(0 === e.length ? w.intl.string(w.t["xcvy+/"]) : w.intl.string(w.t.o20GSk));
    } catch (e) {
        var s, l, u;
        d.Z.show({
            title: w.intl.string(w.t.iufib2),
            body:
                null != (u = null != (l = null == (s = e.getAnyErrorMessage) ? void 0 : s.call(e)) ? l : e.message)
                    ? u
                    : w.intl.string(w.t.eAn6z8),
        }),
            await H({
                channelId: t,
                messageId: n,
                answerIds: a,
            }),
            (0, C.eu)(t, n, (e) => {
                if (null != e)
                    return M(L({}, e), {
                        submitting: !1,
                        editing: !1,
                    });
            });
    }
}
async function W(e) {
    let { channelId: t, messageId: n } = e,
        r = O.Z.getChannel(t);
    if (null != r)
        return m.Z.isLurking(r.guild_id)
            ? void B({
                  guildId: r.guild_id,
                  title: w.intl.string(w.t.B9QnBg),
                  body: w.intl.string(w.t.BVZCTk),
              })
            : ((0, C.eu)(t, n, (e) => {
                  var n;
                  return {
                      channelId: t,
                      selectedAnswerIds: new Set(),
                      submitting: !1,
                      editing: !1,
                      showResults: null != (n = null == e ? void 0 : e.showResults) && n,
                  };
              }),
              await Y({
                  channelId: t,
                  messageId: n,
              }));
}
function K(e) {
    let { channelId: t, messageId: n } = e;
    (0, C.eu)(t, n, (e) => {
        var r, i;
        let o = null == e || !e.showResults,
            a = T.Z.getMessage(t, n),
            s =
                null != a
                    ? a.reactions.reduce((e, t) => {
                          var n, r;
                          return e + (null != (r = null == (n = t.count_details) ? void 0 : n.vote) ? r : 0);
                      }, 0)
                    : 0;
        return (
            h.ZP.trackWithMetadata(P.rMx.POLL_SHOW_RESULTS_CLICKED, {
                channel_id: t,
                message_id: n,
                show_results: o,
                votes_count: s,
            }),
            {
                channelId: t,
                selectedAnswerIds: new Set(),
                submitting: null != (r = null == e ? void 0 : e.submitting) && r,
                editing: null != (i = null == e ? void 0 : e.submitting) && i,
                showResults: o,
            }
        );
    });
}
async function z(e) {
    let { channelId: t, messageId: n, type: r } = e;
    switch (r) {
        case "submit":
            await Y({
                channelId: t,
                messageId: n,
            });
            break;
        case "remove":
            await W({
                channelId: t,
                messageId: n,
            });
            break;
        case "cancel":
            F({
                channelId: t,
                messageId: n,
                isEditing: !1,
            });
            break;
        case "showVotes":
            K({
                channelId: t,
                messageId: n,
            });
            break;
        case "showVoterDetails":
            Z({
                channelId: t,
                messageId: n,
            });
            break;
        default:
            i()(!1, "Unknown poll action type: ".concat(r));
    }
}
let q = {
    handlePollAnswerTapped: function (e) {
        var t,
            n,
            { answerId: r } = e;
        let { channelId: i, messageId: o, message: a } = U(k(e, ["answerId"])),
            { tapShouldOpenVotersModal: s } = null != (n = (0, R.Tk)(a)) ? n : {};
        if (!0 === s)
            return void Z({
                channelId: i,
                messageId: o,
                answerId: r,
            });
        let l = null == (t = a.poll) ? void 0 : t.allow_multiselect;
        (0, C.eu)(i, o, (e) => {
            var t, n;
            if (null == e) {
                let e = new Set([r]),
                    {
                        analyticsSelectedAnswerIds: t,
                        selectedTextAnswersCount: s,
                        selectedEmojiAnswersCount: l,
                    } = G(null == (n = a.poll) ? void 0 : n.answers, e);
                return (
                    h.ZP.trackWithMetadata(P.rMx.POLL_VOTE_SELECTED, {
                        channel_id: i,
                        message_id: o,
                        selected_answer_ids: t,
                        selected_text_answers_count: s,
                        selected_emoji_answers_count: l,
                    }),
                    {
                        channelId: i,
                        selectedAnswerIds: e,
                        submitting: !1,
                        editing: !1,
                        showResults: !1,
                    }
                );
            }
            let s = L({}, e),
                c = new Set(s.selectedAnswerIds);
            if (((s.selectedAnswerIds = c), c.has(r))) c.delete(r);
            else {
                if (!l) for (let e of c) c.delete(e);
                c.add(r);
            }
            let {
                analyticsSelectedAnswerIds: u,
                selectedTextAnswersCount: d,
                selectedEmojiAnswersCount: f,
            } = G(null == (t = a.poll) ? void 0 : t.answers, c);
            return (
                h.ZP.trackWithMetadata(P.rMx.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: o,
                    selected_answer_ids: u,
                    selected_text_answers_count: d,
                    selected_emoji_answers_count: f,
                }),
                s
            );
        });
    },
    handlePollSubmitVote: Y,
    handleUpdateVoteEditingState: F,
    handlePollActionTapped: z,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: r, allowMultiSelect: i, duration: o, layout: a, onClose: l } = e,
            c = S.Z.getUploads(t.id, v.d.Poll),
            u = r.map((e) => {
                var t, n;
                let r = null == c ? void 0 : c.findIndex((t) => t.id === e.localCreationAnswerId),
                    i = { attachment_ids: -1 !== r ? ["".concat(r)] : void 0 };
                a === s.C.DEFAULT && (i.text = null == (n = e.text) ? void 0 : n.trim());
                let o = null == (t = e.image) ? void 0 : t.emoji;
                return (
                    null != o &&
                        (null != o.id
                            ? (i.emoji = {
                                  id: o.id,
                                  name: "",
                              })
                            : null != o.optionallyDiverseSequence && (i.emoji = { name: o.optionallyDiverseSequence })),
                    { poll_media: i }
                );
            }),
            d = {
                question: { text: n.trim() },
                answers: u,
                allow_multiselect: i,
                duration: o,
                layout_type: a,
            };
        try {
            await _.Z.sendPollMessage(t.id, d, {
                attachmentsToUpload: c,
                onAttachmentUploadError: (e, n, r) => {
                    (0, g.A)({
                        file: e,
                        guildId: t.getGuildId(),
                        analyticsLocations: [],
                        code: n,
                        reason: r,
                    });
                },
            }),
                null == l || l();
        } catch (e) {
            if ("poll" === (e instanceof p.Hx ? e : new p.Hx(e)).getAnyErrorMessage() && null != e.text)
                throw M(L({}, e), { body: JSON.parse(e.text) });
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await d.Z.confirm({
            title: w.intl.string(w.t["+rfkTE"]),
            body: w.intl.string(w.t.H2I1gI),
        })) &&
            (await N.W({
                channelId: t,
                messageId: n,
            }));
    },
};
