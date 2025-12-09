n.d(t, {
    Z: () => q,
    n: () => B,
}),
    n(415506),
    n(388685),
    n(361932),
    n(187205),
    n(781311);
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(263568),
    l = n(442837),
    c = n(780384),
    u = n(570140),
    d = n(668781),
    f = n(749210),
    p = n(904245),
    _ = n(881052),
    m = n(367907),
    h = n(41776),
    g = n(58873),
    E = n(566006),
    b = n(869765),
    y = n(314897),
    O = n(592125),
    v = n(703558),
    S = n(607744),
    I = n(375954),
    T = n(117530),
    A = n(553803),
    C = n(467531),
    N = n(798628),
    P = n(918088),
    R = n(981631),
    D = n(388032);
function w(e, t, n) {
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
function x(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = k(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function U(e) {
    let { channelId: t, messageId: n } = e,
        r = I.Z.getMessage(t, n);
    if (null != r)
        return {
            message: r,
            channelId: t,
            messageId: n,
        };
    let a = b.Z.getMessage(t, n);
    if (null != a.message)
        return {
            channelId: t,
            messageId: n,
            message: a.message,
        };
    throw (i()(null != r, "Tapped on a non-existent poll message"), Error());
}
function G(e, t) {
    let n = [...t],
        r = 0,
        i = 0;
    for (let t of n) {
        var a;
        let n = null == e || null == (a = e.find((e) => e.answer_id === parseInt(t))) ? void 0 : a.poll_media;
        (null == n ? void 0 : n.text) != null && (r += 1), (null == n ? void 0 : n.emoji) != null && (i += 1);
    }
    return {
        analyticsSelectedAnswerIds: n,
        selectedTextAnswersCount: r,
        selectedEmojiAnswersCount: i,
    };
}
function Z(e) {
    let { guildId: t, title: n, body: r } = e;
    d.Z.show({
        title: n,
        body: r,
        confirmText: D.intl.string(D.t["9VLmlZ"]),
        cancelText: D.intl.string(D.t["2m+Sqk"]),
        onConfirm: () => {
            f.Z.joinGuild(t, { source: R.vtS.POLL_ALERT });
        },
    });
}
function B(e) {
    let { channelId: t, messageId: n, answerId: r } = e,
        i = O.Z.getChannel(t);
    if (null == i) return;
    if (h.Z.isLurking(i.guild_id))
        return void Z({
            guildId: i.guild_id,
            title: D.intl.string(D.t["7LpysO"]),
            body: D.intl.string(D.t["5sHHoy"]),
        });
    let a = I.Z.getMessage(t, n);
    if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
    let o = null != r ? r : String(a.poll.answers[0].answer_id);
    A.A({
        message: a,
        initialAnswerId: o,
    });
}
function F(e) {
    let { channelId: t, messageId: n, isEditing: r } = e;
    (0, N.eu)(t, n, (e) => {
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
        r = I.Z.getMessage(t, n);
    return null == r ? [] : r.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function H(e) {
    let { channelId: t, messageId: n, answerIds: r } = e,
        i = V({
            channelId: t,
            messageId: n,
        }),
        a = o().difference(i, r),
        s = o().difference(r, i),
        c = y.default.getId(),
        d = [
            ...a.map((e) => ({
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
    if (h.Z.isLurking(r.guild_id))
        return void Z({
            guildId: r.guild_id,
            title: D.intl.string(D.t.Qic1FD),
            body: D.intl.string(D.t["5sHHoy"]),
        });
    if (!S.Z.canChatInGuild(r.guild_id))
        return void d.Z.show({
            title: D.intl.string(D.t.p245wu),
            body: D.intl.string(D.t["U/uodt"]),
        });
    let a = (0, N.fU)(t, n);
    i()(null != a, "Must not be able to vote without existing state!");
    let o = V({
        channelId: t,
        messageId: n,
    });
    try {
        let e = [...a.selectedAnswerIds.values()];
        (0, N.eu)(
            t,
            n,
            (e) => (
                i()(null != e, "Must not be able to vote without existing state!"),
                j(x({}, e), {
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
            await C.B({
                channelId: t,
                messageId: n,
                answerIds: e,
            }),
            (0, N.eu)(t, n, () => void 0),
            c.uv.announce(0 === e.length ? D.intl.string(D.t["xcvy+3"]) : D.intl.string(D.t.o20GSo));
    } catch (e) {
        var s, l, u;
        d.Z.show({
            title: D.intl.string(D.t.iufib1),
            body:
                null != (u = null != (l = null == (s = e.getAnyErrorMessage) ? void 0 : s.call(e)) ? l : e.message)
                    ? u
                    : D.intl.string(D.t.eAn6z2),
        }),
            await H({
                channelId: t,
                messageId: n,
                answerIds: o,
            }),
            (0, N.eu)(t, n, (e) => {
                if (null != e)
                    return j(x({}, e), {
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
        return h.Z.isLurking(r.guild_id)
            ? void Z({
                  guildId: r.guild_id,
                  title: D.intl.string(D.t.B9QnBp),
                  body: D.intl.string(D.t.BVZCTn),
              })
            : ((0, N.eu)(t, n, (e) => {
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
    (0, N.eu)(t, n, (e) => {
        var r, i;
        let a = null == e || !e.showResults,
            o = I.Z.getMessage(t, n),
            s =
                null != o
                    ? o.reactions.reduce((e, t) => {
                          var n, r;
                          return e + (null != (r = null == (n = t.count_details) ? void 0 : n.vote) ? r : 0);
                      }, 0)
                    : 0;
        return (
            m.ZP.trackWithMetadata(R.rMx.POLL_SHOW_RESULTS_CLICKED, {
                channel_id: t,
                message_id: n,
                show_results: a,
                votes_count: s,
            }),
            {
                channelId: t,
                selectedAnswerIds: new Set(),
                submitting: null != (r = null == e ? void 0 : e.submitting) && r,
                editing: null != (i = null == e ? void 0 : e.submitting) && i,
                showResults: a,
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
            B({
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
        let { channelId: i, messageId: a, message: o } = U(M(e, ["answerId"])),
            { tapShouldOpenVotersModal: s } = null != (n = (0, P.Tk)(o)) ? n : {};
        if (!0 === s)
            return void B({
                channelId: i,
                messageId: a,
                answerId: r,
            });
        let l = null == (t = o.poll) ? void 0 : t.allow_multiselect;
        (0, N.eu)(i, a, (e) => {
            var t, n;
            if (null == e) {
                let e = new Set([r]),
                    {
                        analyticsSelectedAnswerIds: t,
                        selectedTextAnswersCount: s,
                        selectedEmojiAnswersCount: l,
                    } = G(null == (n = o.poll) ? void 0 : n.answers, e);
                return (
                    m.ZP.trackWithMetadata(R.rMx.POLL_VOTE_SELECTED, {
                        channel_id: i,
                        message_id: a,
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
            let s = x({}, e),
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
            } = G(null == (t = o.poll) ? void 0 : t.answers, c);
            return (
                m.ZP.trackWithMetadata(R.rMx.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: a,
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
        let { channel: t, question: n, answers: r, allowMultiSelect: i, duration: a, layout: o, onClose: l } = e,
            c = T.Z.getUploads(t.id, v.d.Poll),
            u = r.map((e) => {
                var t, n;
                let r = null == c ? void 0 : c.findIndex((t) => t.id === e.localCreationAnswerId),
                    i = { attachment_ids: -1 !== r ? ["".concat(r)] : void 0 };
                o === s.C.DEFAULT && (i.text = null == (n = e.text) ? void 0 : n.trim());
                let a = null == (t = e.image) ? void 0 : t.emoji;
                return (
                    null != a &&
                        (null != a.id
                            ? (i.emoji = {
                                  id: a.id,
                                  name: "",
                              })
                            : null != a.optionallyDiverseSequence && (i.emoji = { name: a.optionallyDiverseSequence })),
                    { poll_media: i }
                );
            }),
            d = {
                question: { text: n.trim() },
                answers: u,
                allow_multiselect: i,
                duration: a,
                layout_type: o,
            };
        try {
            await p.Z.sendPollMessage(t.id, d, {
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
            if ("poll" === (e instanceof _.Hx ? e : new _.Hx(e)).getAnyErrorMessage() && null != e.text)
                throw j(x({}, e), { body: JSON.parse(e.text) });
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await d.Z.confirm({
            title: D.intl.string(D.t["+rfkTK"]),
            body: D.intl.string(D.t.H2I1gL),
        })) &&
            (await C.W({
                channelId: t,
                messageId: n,
            }));
    },
};
