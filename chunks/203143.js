n.d(t, {
    Z: () => H,
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
    l = n.n(a),
    o = n(263568),
    s = n(442837),
    c = n(780384),
    u = n(570140),
    d = n(668781),
    p = n(749210),
    m = n(904245),
    f = n(881052),
    h = n(367907),
    g = n(41776),
    _ = n(566006),
    b = n(48854),
    x = n(869765),
    y = n(314897),
    E = n(592125),
    v = n(703558),
    O = n(607744),
    N = n(375954),
    j = n(117530),
    C = n(553803),
    I = n(316758),
    S = n(467531),
    T = n(798628),
    P = n(918088),
    A = n(981631),
    w = n(388032);
function Z(e) {
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
function k(e, t) {
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
function R(e, t) {
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
        selectedEmojiAnswersCount: i
    };
}
function D(e) {
    let { guildId: t, title: n, body: r } = e;
    d.Z.show({
        title: n,
        body: r,
        confirmText: w.NW.string(w.t['9VLmlZ']),
        cancelText: w.NW.string(w.t['2m+Sqq']),
        onConfirm: () => {
            p.Z.joinGuild(t, { source: A.vtS.POLL_ALERT });
        }
    });
}
function L(e) {
    let { channelId: t, messageId: n, answerId: r } = e,
        i = E.Z.getChannel(t);
    if (null == i) return;
    if (g.Z.isLurking(i.guild_id))
        return void D({
            guildId: i.guild_id,
            title: w.NW.string(w.t['7LpysL']),
            body: w.NW.string(w.t['5sHHo6'])
        });
    let a = N.Z.getMessage(t, n);
    if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
    let l = null != r ? r : String(a.poll.answers[0].answer_id);
    C.A({
        message: a,
        initialAnswerId: l
    });
}
function M(e) {
    let { channelId: t, messageId: n, isEditing: r } = e;
    (0, T.eu)(t, n, (e) => {
        var n;
        return {
            channelId: t,
            selectedAnswerIds: new Set(),
            submitting: !1,
            editing: r,
            showResults: null != (n = null == e ? void 0 : e.showResults) && n
        };
    });
}
function W(e) {
    let { channelId: t, messageId: n } = e,
        r = N.Z.getMessage(t, n);
    return null == r ? [] : r.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function U(e) {
    let { channelId: t, messageId: n, answerIds: r } = e,
        i = W({
            channelId: t,
            messageId: n
        }),
        a = l().difference(i, r),
        o = l().difference(r, i),
        c = y.default.getId(),
        d = [
            ...a.map((e) => ({
                type: 'MESSAGE_REACTION_REMOVE',
                id: e
            })),
            ...o.map((e) => ({
                type: 'MESSAGE_REACTION_ADD',
                id: e
            }))
        ],
        p = s.ZP.Emitter.batched(() => {
            let e;
            for (let { id: r, type: i } of d)
                e = u.Z.dispatch({
                    type: i,
                    channelId: t,
                    messageId: n,
                    emoji: {
                        id: r,
                        name: r
                    },
                    userId: c,
                    optimistic: !0,
                    reactionType: _.O.VOTE
                });
            return e;
        });
    null != p && (await p);
}
async function F(e) {
    let { channelId: t, messageId: n } = e,
        r = E.Z.getChannel(t);
    if (null == r) return;
    if (g.Z.isLurking(r.guild_id))
        return void D({
            guildId: r.guild_id,
            title: w.NW.string(w.t.Qic1FB),
            body: w.NW.string(w.t['5sHHo6'])
        });
    if (!O.Z.canChatInGuild(r.guild_id))
        return void d.Z.show({
            title: w.NW.string(w.t.p245ws),
            body: w.NW.string(w.t['U/uodn'])
        });
    let a = (0, T.fU)(t, n);
    i()(null != a, 'Must not be able to vote without existing state!');
    let l = W({
        channelId: t,
        messageId: n
    });
    try {
        let e = [...a.selectedAnswerIds.values()];
        (0, T.eu)(
            t,
            n,
            (e) => (
                i()(null != e, 'Must not be able to vote without existing state!'),
                k(Z({}, e), {
                    submitting: !0,
                    editing: !1
                })
            )
        ),
            await U({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            await S.B({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            (0, T.eu)(t, n, () => void 0),
            c.uv.announce(0 === e.length ? w.NW.string(w.t['xcvy+/']) : w.NW.string(w.t.o20GSk));
    } catch (e) {
        var o, s, u;
        d.Z.show({
            title: w.NW.string(w.t.iufib2),
            body: null != (u = null != (s = null == (o = e.getAnyErrorMessage) ? void 0 : o.call(e)) ? s : e.message) ? u : w.NW.string(w.t.eAn6z8)
        }),
            await U({
                channelId: t,
                messageId: n,
                answerIds: l
            }),
            (0, T.eu)(t, n, (e) => {
                if (null != e)
                    return k(Z({}, e), {
                        submitting: !1,
                        editing: !1
                    });
            });
    }
}
async function B(e) {
    let { channelId: t, messageId: n } = e,
        r = E.Z.getChannel(t);
    if (null != r)
        return g.Z.isLurking(r.guild_id)
            ? void D({
                  guildId: r.guild_id,
                  title: w.NW.string(w.t.B9QnBg),
                  body: w.NW.string(w.t.BVZCTk)
              })
            : ((0, T.eu)(t, n, (e) => {
                  var n;
                  return {
                      channelId: t,
                      selectedAnswerIds: new Set(),
                      submitting: !1,
                      editing: !1,
                      showResults: null != (n = null == e ? void 0 : e.showResults) && n
                  };
              }),
              await F({
                  channelId: t,
                  messageId: n
              }));
}
async function G(e) {
    let { channelId: t, messageId: n, type: r } = e;
    switch (r) {
        case 'submit':
            await F({
                channelId: t,
                messageId: n
            });
            break;
        case 'remove':
            await B({
                channelId: t,
                messageId: n
            });
            break;
        case 'cancel':
            M({
                channelId: t,
                messageId: n,
                isEditing: !1
            });
            break;
        case 'showVotes':
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, T.eu)(t, n, (e) => {
                    var r, i;
                    let a = null == e || !e.showResults,
                        l = N.Z.getMessage(t, n),
                        o =
                            null != l
                                ? l.reactions.reduce((e, t) => {
                                      var n, r;
                                      return e + (null != (r = null == (n = t.count_details) ? void 0 : n.vote) ? r : 0);
                                  }, 0)
                                : 0;
                    return (
                        h.ZP.trackWithMetadata(A.rMx.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: a,
                            votes_count: o
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: null != (r = null == e ? void 0 : e.submitting) && r,
                            editing: null != (i = null == e ? void 0 : e.submitting) && i,
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
let H = {
    handlePollAnswerTapped: function (e) {
        var t,
            n,
            { answerId: r } = e;
        let {
                channelId: a,
                messageId: l,
                message: o
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    r = N.Z.getMessage(t, n);
                if (null != r)
                    return {
                        message: r,
                        channelId: t,
                        messageId: n
                    };
                let a = x.Z.getMessage(t, n);
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
            { tapShouldOpenVotersModal: s } = null != (n = (0, P.Tk)(o)) ? n : {};
        if (!0 === s)
            return void L({
                channelId: a,
                messageId: l,
                answerId: r
            });
        let c = null == (t = o.poll) ? void 0 : t.allow_multiselect;
        (0, T.eu)(a, l, (e) => {
            var t, n;
            if (null == e) {
                let e = new Set([r]),
                    { analyticsSelectedAnswerIds: t, selectedTextAnswersCount: i, selectedEmojiAnswersCount: s } = R(null == (n = o.poll) ? void 0 : n.answers, e);
                return (
                    h.ZP.trackWithMetadata(A.rMx.POLL_VOTE_SELECTED, {
                        channel_id: a,
                        message_id: l,
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
            let i = Z({}, e),
                s = new Set(i.selectedAnswerIds);
            if (((i.selectedAnswerIds = s), s.has(r))) s.delete(r);
            else {
                if (!c) for (let e of s) s.delete(e);
                s.add(r);
            }
            let { analyticsSelectedAnswerIds: u, selectedTextAnswersCount: d, selectedEmojiAnswersCount: p } = R(null == (t = o.poll) ? void 0 : t.answers, s);
            return (
                h.ZP.trackWithMetadata(A.rMx.POLL_VOTE_SELECTED, {
                    channel_id: a,
                    message_id: l,
                    selected_answer_ids: u,
                    selected_text_answers_count: d,
                    selected_emoji_answers_count: p
                }),
                i
            );
        });
    },
    handlePollSubmitVote: F,
    handleUpdateVoteEditingState: M,
    handlePollActionTapped: G,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: r, allowMultiSelect: i, duration: a, layout: l, onClose: s } = e,
            c = j.Z.getUploads(t.id, v.d.Poll),
            u = r.map((e) => {
                var t, n;
                let r = null == c ? void 0 : c.findIndex((t) => t.id === e.localCreationAnswerId),
                    i = { attachment_ids: -1 !== r ? [''.concat(r)] : void 0 };
                l === o.C.DEFAULT && (i.text = null == (n = e.text) ? void 0 : n.trim());
                let a = null == (t = e.image) ? void 0 : t.emoji;
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
            d = {
                question: { text: n.trim() },
                answers: u,
                allow_multiselect: i,
                duration: a,
                layout_type: l
            };
        try {
            if (null != c && c.length > 0) {
                var p;
                let e = null != (p = y.default.getToken()) ? p : '';
                await I.sk({
                    channel: t,
                    items: c,
                    token: e,
                    poll: d,
                    nonce: (0, b.r)(),
                    maxSizeCallback: () => {}
                });
            } else await m.Z.sendPollMessage(t.id, d);
            null == s || s();
        } catch (e) {
            if ('poll' === (e instanceof f.Hx ? e : new f.Hx(e)).getAnyErrorMessage() && null != e.text) throw k(Z({}, e), { body: JSON.parse(e.text) });
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await d.Z.confirm({
            title: w.NW.string(w.t['+rfkTE']),
            body: w.NW.string(w.t.H2I1gI)
        })) &&
            (await S.W({
                channelId: t,
                messageId: n
            }));
    }
};
