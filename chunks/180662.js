n.d(t, {
    A: () => X,
    e: () => F,
}),
    n(65821),
    n(896048),
    n(114821),
    n(339614),
    n(733351);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(966974),
    l = n(311907),
    c = n(582754),
    u = n(73153),
    d = n(157559),
    f = n(686956),
    p = n(843472),
    _ = n(198982),
    h = n(58149),
    m = n(857071),
    g = n(301169),
    E = n(505527),
    b = n(9842),
    y = n(961350),
    O = n(734057),
    A = n(31717),
    v = n(834942),
    S = n(320501),
    I = n(522602),
    T = n(491037),
    C = n(335759),
    N = n(862780),
    R = n(951727),
    w = n(652215),
    P = n(985018);
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
                D(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = k(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function U(e) {
    let { channelId: t, messageId: n } = e,
        r = S.A.getMessage(t, n);
    if (null != r)
        return {
            message: r,
            channelId: t,
            messageId: n,
        };
    let a = b.A.getMessage(t, n);
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
function V(e) {
    let { guildId: t, title: n, body: r } = e;
    d.A.show({
        title: n,
        body: r,
        confirmText: P.intl.string(P.t["9VLmlZ"]),
        cancelText: P.intl.string(P.t["2m+Sqk"]),
        onConfirm: () => {
            f.A.joinGuild(t, { source: w.Q4z.POLL_ALERT });
        },
    });
}
function F(e) {
    let { channelId: t, messageId: n, answerId: r } = e,
        i = O.A.getChannel(t);
    if (null == i) return;
    if (m.A.isLurking(i.guild_id))
        return void V({
            guildId: i.guild_id,
            title: P.intl.string(P.t["7LpysO"]),
            body: P.intl.string(P.t["5sHHoy"]),
        });
    let a = S.A.getMessage(t, n);
    if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
    let s = null != r ? r : String(a.poll.answers[0].answer_id);
    T.W({
        message: a,
        initialAnswerId: s,
    });
}
function B(e) {
    let { channelId: t, messageId: n, isEditing: r } = e;
    (0, N.A2)(t, n, (e) => {
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
function H(e) {
    let { channelId: t, messageId: n } = e,
        r = S.A.getMessage(t, n);
    return null == r ? [] : r.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function Y(e) {
    let { channelId: t, messageId: n, answerIds: r } = e,
        i = H({
            channelId: t,
            messageId: n,
        }),
        a = s().difference(i, r),
        o = s().difference(r, i),
        c = y.default.getId(),
        d = [
            ...a.map((e) => ({
                type: "MESSAGE_REACTION_REMOVE",
                id: e,
            })),
            ...o.map((e) => ({
                type: "MESSAGE_REACTION_ADD",
                id: e,
            })),
        ],
        f = l.Ay.Emitter.batched(() => {
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
                    reactionType: E.v.VOTE,
                });
            return e;
        });
    null != f && (await f);
}
async function W(e) {
    let { channelId: t, messageId: n } = e,
        r = O.A.getChannel(t);
    if (null == r) return;
    if (m.A.isLurking(r.guild_id))
        return void V({
            guildId: r.guild_id,
            title: P.intl.string(P.t.Qic1FD),
            body: P.intl.string(P.t["5sHHoy"]),
        });
    if (!v.A.canChatInGuild(r.guild_id))
        return void d.A.show({
            title: P.intl.string(P.t.p245wu),
            body: P.intl.string(P.t["U/uodt"]),
        });
    let a = (0, N.xt)(t, n);
    i()(null != a, "Must not be able to vote without existing state!");
    let s = H({
        channelId: t,
        messageId: n,
    });
    try {
        let e = [...a.selectedAnswerIds.values()];
        (0, N.A2)(
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
            await Y({
                channelId: t,
                messageId: n,
                answerIds: e,
            }),
            await C.Q({
                channelId: t,
                messageId: n,
                answerIds: e,
            }),
            (0, N.A2)(t, n, () => void 0),
            c.OR.announce(0 === e.length ? P.intl.string(P.t["xcvy+3"]) : P.intl.string(P.t.o20GSo));
    } catch (e) {
        var o, l, u;
        d.A.show({
            title: P.intl.string(P.t.iufib1),
            body:
                null != (o = null != (l = null == (u = e.getAnyErrorMessage) ? void 0 : u.call(e)) ? l : e.message)
                    ? o
                    : P.intl.string(P.t.eAn6z2),
        }),
            await Y({
                channelId: t,
                messageId: n,
                answerIds: s,
            }),
            (0, N.A2)(t, n, (e) => {
                if (null != e)
                    return j(x({}, e), {
                        submitting: !1,
                        editing: !1,
                    });
            });
    }
}
async function K(e) {
    let { channelId: t, messageId: n } = e,
        r = O.A.getChannel(t);
    if (null != r)
        return m.A.isLurking(r.guild_id)
            ? void V({
                  guildId: r.guild_id,
                  title: P.intl.string(P.t.B9QnBp),
                  body: P.intl.string(P.t.BVZCTn),
              })
            : ((0, N.A2)(t, n, (e) => {
                  var n;
                  return {
                      channelId: t,
                      selectedAnswerIds: new Set(),
                      submitting: !1,
                      editing: !1,
                      showResults: null != (n = null == e ? void 0 : e.showResults) && n,
                  };
              }),
              await W({
                  channelId: t,
                  messageId: n,
              }));
}
function z(e) {
    let { channelId: t, messageId: n } = e;
    (0, N.A2)(t, n, (e) => {
        var r, i;
        let a = null == e || !e.showResults,
            s = S.A.getMessage(t, n),
            o =
                null != s
                    ? s.reactions.reduce((e, t) => {
                          var n, r;
                          return e + (null != (n = null == (r = t.count_details) ? void 0 : r.vote) ? n : 0);
                      }, 0)
                    : 0;
        return (
            h.Ay.trackWithMetadata(w.HAw.POLL_SHOW_RESULTS_CLICKED, {
                channel_id: t,
                message_id: n,
                show_results: a,
                votes_count: o,
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
async function q(e) {
    let { channelId: t, messageId: n, type: r } = e;
    switch (r) {
        case "submit":
            await W({
                channelId: t,
                messageId: n,
            });
            break;
        case "remove":
            await K({
                channelId: t,
                messageId: n,
            });
            break;
        case "cancel":
            B({
                channelId: t,
                messageId: n,
                isEditing: !1,
            });
            break;
        case "showVotes":
            z({
                channelId: t,
                messageId: n,
            });
            break;
        case "showVoterDetails":
            F({
                channelId: t,
                messageId: n,
            });
            break;
        default:
            i()(!1, "Unknown poll action type: ".concat(r));
    }
}
let X = {
    handlePollAnswerTapped: function (e) {
        var t, n;
        let { answerId: r } = e,
            { channelId: i, messageId: a, message: s } = U(M(e, ["answerId"])),
            { tapShouldOpenVotersModal: o } = null != (t = (0, R.j8)(s)) ? t : {};
        if (!0 === o)
            return void F({
                channelId: i,
                messageId: a,
                answerId: r,
            });
        let l = null == (n = s.poll) ? void 0 : n.allow_multiselect;
        (0, N.A2)(i, a, (e) => {
            var t, n;
            if (null == e) {
                let e = new Set([r]),
                    {
                        analyticsSelectedAnswerIds: t,
                        selectedTextAnswersCount: o,
                        selectedEmojiAnswersCount: l,
                    } = G(null == (n = s.poll) ? void 0 : n.answers, e);
                return (
                    h.Ay.trackWithMetadata(w.HAw.POLL_VOTE_SELECTED, {
                        channel_id: i,
                        message_id: a,
                        selected_answer_ids: t,
                        selected_text_answers_count: o,
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
            let o = x({}, e),
                c = new Set(o.selectedAnswerIds);
            if (((o.selectedAnswerIds = c), c.has(r))) c.delete(r);
            else {
                if (!l) for (let e of c) c.delete(e);
                c.add(r);
            }
            let {
                analyticsSelectedAnswerIds: u,
                selectedTextAnswersCount: d,
                selectedEmojiAnswersCount: f,
            } = G(null == (t = s.poll) ? void 0 : t.answers, c);
            return (
                h.Ay.trackWithMetadata(w.HAw.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: a,
                    selected_answer_ids: u,
                    selected_text_answers_count: d,
                    selected_emoji_answers_count: f,
                }),
                o
            );
        });
    },
    handlePollSubmitVote: W,
    handleUpdateVoteEditingState: B,
    handlePollActionTapped: q,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: r, allowMultiSelect: i, duration: a, layout: s, onClose: l } = e,
            c = I.A.getUploads(t.id, A.C.Poll),
            u = r.map((e) => {
                var t, n;
                let r = null == c ? void 0 : c.findIndex((t) => t.id === e.localCreationAnswerId),
                    i = { attachment_ids: -1 !== r ? ["".concat(r)] : void 0 };
                s === o.Z.DEFAULT && (i.text = null == (n = e.text) ? void 0 : n.trim());
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
                layout_type: s,
            };
        try {
            await p.A.sendPollMessage(t.id, d, {
                attachmentsToUpload: c,
                onAttachmentUploadError: (e, n, r) => {
                    (0, g.k)({
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
            if ("poll" === (e instanceof _.LG ? e : new _.LG(e)).getAnyErrorMessage() && null != e.text)
                throw j(x({}, e), { body: JSON.parse(e.text) });
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await d.A.confirm({
            title: P.intl.string(P.t["+rfkTK"]),
            body: P.intl.string(P.t.H2I1gL),
        })) &&
            (await C.w({
                channelId: t,
                messageId: n,
            }));
    },
};
