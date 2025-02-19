n.d(t, {
    Z: () => G,
    n: () => L
}),
    n(411104),
    n(47120),
    n(13667),
    n(390547),
    n(566702);
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    l = n(263568),
    s = n(442837),
    c = n(570140),
    d = n(668781),
    u = n(749210),
    p = n(904245),
    m = n(881052),
    f = n(367907),
    h = n(41776),
    g = n(566006),
    _ = n(48854),
    b = n(869765),
    v = n(314897),
    y = n(592125),
    x = n(703558),
    O = n(607744),
    E = n(375954),
    j = n(117530),
    N = n(553803),
    C = n(316758),
    I = n(467531),
    S = n(798628),
    P = n(918088),
    T = n(981631),
    A = n(388032);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Z(e, t) {
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
function k(e, t) {
    let n = [...t],
        r = 0,
        i = 0;
    for (let t of n) {
        var a;
        let n = null == e ? void 0 : null === (a = e.find((e) => e.answer_id === parseInt(t))) || void 0 === a ? void 0 : a.poll_media;
        (null == n ? void 0 : n.text) != null && (r += 1), (null == n ? void 0 : n.emoji) != null && (i += 1);
    }
    return {
        analyticsSelectedAnswerIds: n,
        selectedTextAnswersCount: r,
        selectedEmojiAnswersCount: i
    };
}
function R(e) {
    let { guildId: t, title: n, body: r } = e;
    d.Z.show({
        title: n,
        body: r,
        confirmText: A.NW.string(A.t['9VLmlZ']),
        cancelText: A.NW.string(A.t['2m+Sqq']),
        onConfirm: () => {
            u.Z.joinGuild(t, { source: T.vtS.POLL_ALERT });
        }
    });
}
function L(e) {
    let { channelId: t, messageId: n, answerId: r } = e,
        i = y.Z.getChannel(t);
    if (null == i) return;
    if (h.Z.isLurking(i.guild_id)) {
        R({
            guildId: i.guild_id,
            title: A.NW.string(A.t['7LpysL']),
            body: A.NW.string(A.t['5sHHo6'])
        });
        return;
    }
    let a = E.Z.getMessage(t, n);
    if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
    let o = null != r ? r : String(a.poll.answers[0].answer_id);
    N.A({
        message: a,
        initialAnswerId: o
    });
}
function D(e) {
    let { channelId: t, messageId: n, isEditing: r } = e;
    (0, S.eu)(t, n, (e) => {
        var n;
        return {
            channelId: t,
            selectedAnswerIds: new Set(),
            submitting: !1,
            editing: r,
            showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
        };
    });
}
function M(e) {
    let { channelId: t, messageId: n } = e,
        r = E.Z.getMessage(t, n);
    return null == r ? [] : r.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function W(e) {
    let { channelId: t, messageId: n, answerIds: r } = e,
        i = M({
            channelId: t,
            messageId: n
        }),
        a = o().difference(i, r),
        l = o().difference(r, i),
        d = v.default.getId(),
        u = [
            ...a.map((e) => ({
                type: 'MESSAGE_REACTION_REMOVE',
                id: e
            })),
            ...l.map((e) => ({
                type: 'MESSAGE_REACTION_ADD',
                id: e
            }))
        ],
        p = s.ZP.Emitter.batched(() => {
            let e;
            for (let { id: r, type: i } of u)
                e = c.Z.dispatch({
                    type: i,
                    channelId: t,
                    messageId: n,
                    emoji: {
                        id: r,
                        name: r
                    },
                    userId: d,
                    optimistic: !0,
                    reactionType: g.O.VOTE
                });
            return e;
        });
    null != p && (await p);
}
async function F(e) {
    let { channelId: t, messageId: n } = e,
        r = y.Z.getChannel(t);
    if (null == r) return;
    if (h.Z.isLurking(r.guild_id)) {
        R({
            guildId: r.guild_id,
            title: A.NW.string(A.t.Qic1FB),
            body: A.NW.string(A.t['5sHHo6'])
        });
        return;
    }
    if (!O.Z.canChatInGuild(r.guild_id)) {
        d.Z.show({
            title: A.NW.string(A.t.p245ws),
            body: A.NW.string(A.t['U/uodn'])
        });
        return;
    }
    let a = (0, S.fU)(t, n);
    i()(null != a, 'Must not be able to vote without existing state!');
    let o = M({
        channelId: t,
        messageId: n
    });
    try {
        let e = [...a.selectedAnswerIds.values()];
        (0, S.eu)(
            t,
            n,
            (e) => (
                i()(null != e, 'Must not be able to vote without existing state!'),
                Z(w({}, e), {
                    submitting: !0,
                    editing: !1
                })
            )
        ),
            await W({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            await I.B({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            (0, S.eu)(t, n, () => void 0);
    } catch (e) {
        var l, s, c;
        d.Z.show({
            title: A.NW.string(A.t.iufib2),
            body: null !== (c = null !== (s = null === (l = e.getAnyErrorMessage) || void 0 === l ? void 0 : l.call(e)) && void 0 !== s ? s : e.message) && void 0 !== c ? c : A.NW.string(A.t.eAn6z8)
        }),
            await W({
                channelId: t,
                messageId: n,
                answerIds: o
            }),
            (0, S.eu)(t, n, (e) => {
                if (null != e)
                    return Z(w({}, e), {
                        submitting: !1,
                        editing: !1
                    });
            });
    }
}
async function U(e) {
    let { channelId: t, messageId: n } = e,
        r = y.Z.getChannel(t);
    if (null != r) {
        if (h.Z.isLurking(r.guild_id)) {
            R({
                guildId: r.guild_id,
                title: A.NW.string(A.t.B9QnBg),
                body: A.NW.string(A.t.BVZCTk)
            });
            return;
        }
        return (
            (0, S.eu)(t, n, (e) => {
                var n;
                return {
                    channelId: t,
                    selectedAnswerIds: new Set(),
                    submitting: !1,
                    editing: !1,
                    showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
                };
            }),
            await F({
                channelId: t,
                messageId: n
            })
        );
    }
}
async function B(e) {
    let { channelId: t, messageId: n, type: r } = e;
    switch (r) {
        case 'submit':
            await F({
                channelId: t,
                messageId: n
            });
            break;
        case 'remove':
            await U({
                channelId: t,
                messageId: n
            });
            break;
        case 'cancel':
            D({
                channelId: t,
                messageId: n,
                isEditing: !1
            });
            break;
        case 'showVotes':
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, S.eu)(t, n, (e) => {
                    var r, i;
                    let a = null == e || !e.showResults,
                        o = E.Z.getMessage(t, n),
                        l =
                            null != o
                                ? o.reactions.reduce((e, t) => {
                                      var n, r;
                                      return e + (null !== (r = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== r ? r : 0);
                                  }, 0)
                                : 0;
                    return (
                        f.ZP.trackWithMetadata(T.rMx.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: a,
                            votes_count: l
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: null !== (r = null == e ? void 0 : e.submitting) && void 0 !== r && r,
                            editing: null !== (i = null == e ? void 0 : e.submitting) && void 0 !== i && i,
                            showResults: a
                        }
                    );
                });
            })({
                channelId: t,
                messageId: n
            });
            break;
        case 'showVoterDetails':
            L({
                channelId: t,
                messageId: n
            });
            break;
        default:
            i()(!1, 'Unknown poll action type: '.concat(r));
    }
}
let G = {
    handlePollAnswerTapped: function (e) {
        var t,
            n,
            { answerId: r } = e;
        let {
                channelId: a,
                messageId: o,
                message: l
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    r = E.Z.getMessage(t, n);
                if (null != r)
                    return {
                        message: r,
                        channelId: t,
                        messageId: n
                    };
                let a = b.Z.getMessage(t, n);
                if (null != a.message)
                    return {
                        channelId: t,
                        messageId: n,
                        message: a.message
                    };
                throw (i()(null != r, 'Tapped on a non-existent poll message'), Error());
            })(
                (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(e, ['answerId'])
            ),
            { tapShouldOpenVotersModal: s } = null !== (n = (0, P.Tk)(l)) && void 0 !== n ? n : {};
        if (!0 === s) {
            L({
                channelId: a,
                messageId: o,
                answerId: r
            });
            return;
        }
        let c = null === (t = l.poll) || void 0 === t ? void 0 : t.allow_multiselect;
        (0, S.eu)(a, o, (e) => {
            var t, n;
            if (null == e) {
                let e = new Set([r]),
                    { analyticsSelectedAnswerIds: t, selectedTextAnswersCount: i, selectedEmojiAnswersCount: s } = k(null === (n = l.poll) || void 0 === n ? void 0 : n.answers, e);
                return (
                    f.ZP.trackWithMetadata(T.rMx.POLL_VOTE_SELECTED, {
                        channel_id: a,
                        message_id: o,
                        selected_answer_ids: t,
                        selected_text_answers_count: i,
                        selected_emoji_answers_count: s
                    }),
                    {
                        channelId: a,
                        selectedAnswerIds: e,
                        submitting: !1,
                        editing: !1,
                        showResults: !1
                    }
                );
            }
            let i = w({}, e),
                s = new Set(i.selectedAnswerIds);
            if (((i.selectedAnswerIds = s), s.has(r))) s.delete(r);
            else {
                if (!c) for (let e of s) s.delete(e);
                s.add(r);
            }
            let { analyticsSelectedAnswerIds: d, selectedTextAnswersCount: u, selectedEmojiAnswersCount: p } = k(null === (t = l.poll) || void 0 === t ? void 0 : t.answers, s);
            return (
                f.ZP.trackWithMetadata(T.rMx.POLL_VOTE_SELECTED, {
                    channel_id: a,
                    message_id: o,
                    selected_answer_ids: d,
                    selected_text_answers_count: u,
                    selected_emoji_answers_count: p
                }),
                i
            );
        });
    },
    handlePollSubmitVote: F,
    handleUpdateVoteEditingState: D,
    handlePollActionTapped: B,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: r, allowMultiSelect: i, duration: a, layout: o, onClose: s } = e,
            c = j.Z.getUploads(t.id, x.d.Poll),
            d = r.map((e) => {
                var t, n;
                let r = null == c ? void 0 : c.findIndex((t) => t.id === e.localCreationAnswerId),
                    i = { attachment_ids: -1 !== r ? [''.concat(r)] : void 0 };
                o === l.C.DEFAULT && (i.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
                let a = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
                return (
                    null != a &&
                        (null != a.id
                            ? (i.emoji = {
                                  id: a.id,
                                  name: ''
                              })
                            : null != a.optionallyDiverseSequence && (i.emoji = { name: a.optionallyDiverseSequence })),
                    { poll_media: i }
                );
            }),
            u = {
                question: { text: n.trim() },
                answers: d,
                allow_multiselect: i,
                duration: a,
                layout_type: o
            };
        try {
            if (null != c && c.length > 0) {
                var f;
                let e = null !== (f = v.default.getToken()) && void 0 !== f ? f : '';
                await C.sk({
                    channel: t,
                    items: c,
                    token: e,
                    poll: u,
                    nonce: (0, _.r)(),
                    maxSizeCallback: () => {}
                });
            } else await p.Z.sendPollMessage(t.id, u);
            null == s || s();
        } catch (e) {
            if ('poll' === (e instanceof m.Hx ? e : new m.Hx(e)).getAnyErrorMessage() && null != e.text) throw Z(w({}, e), { body: JSON.parse(e.text) });
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await d.Z.confirm({
            title: A.NW.string(A.t['+rfkTE']),
            body: A.NW.string(A.t.H2I1gI)
        })) &&
            (await I.W({
                channelId: t,
                messageId: n
            }));
    }
};
