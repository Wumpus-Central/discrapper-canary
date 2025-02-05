n.d(t, {
    Z: () => B,
    n: () => k
}),
    n(411104),
    n(47120),
    n(390547),
    n(724458);
var i = n(512722),
    l = n.n(i),
    a = n(392711),
    r = n.n(a),
    s = n(263568),
    o = n(442837),
    c = n(570140),
    d = n(668781),
    u = n(749210),
    m = n(904245),
    _ = n(881052),
    h = n(367907),
    p = n(41776),
    g = n(566006),
    f = n(48854),
    x = n(869765),
    C = n(314897),
    v = n(592125),
    E = n(703558),
    I = n(607744),
    N = n(375954),
    S = n(117530),
    T = n(553803),
    b = n(316758),
    A = n(467531),
    j = n(798628),
    y = n(918088),
    Z = n(981631),
    R = n(388032);
function L(e, t) {
    let n = [...t],
        i = 0,
        l = 0;
    for (let t of n) {
        var a;
        let n = null == e ? void 0 : null === (a = e.find((e) => e.answer_id === parseInt(t))) || void 0 === a ? void 0 : a.poll_media;
        (null == n ? void 0 : n.text) != null && (i += 1), (null == n ? void 0 : n.emoji) != null && (l += 1);
    }
    return {
        analyticsSelectedAnswerIds: n,
        selectedTextAnswersCount: i,
        selectedEmojiAnswersCount: l
    };
}
function P(e) {
    let { guildId: t, title: n, body: i } = e;
    d.Z.show({
        title: n,
        body: i,
        confirmText: R.intl.string(R.t['9VLmlZ']),
        cancelText: R.intl.string(R.t['2m+Sqq']),
        onConfirm: () => {
            u.Z.joinGuild(t, { source: Z.vtS.POLL_ALERT });
        }
    });
}
function k(e) {
    let { channelId: t, messageId: n, answerId: i } = e,
        l = v.Z.getChannel(t);
    if (null == l) return;
    if (p.Z.isLurking(l.guild_id)) {
        P({
            guildId: l.guild_id,
            title: R.intl.string(R.t['7LpysL']),
            body: R.intl.string(R.t['5sHHo6'])
        });
        return;
    }
    let a = N.Z.getMessage(t, n);
    if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
    let r = null != i ? i : String(a.poll.answers[0].answer_id);
    T.A({
        message: a,
        initialAnswerId: r
    });
}
function M(e) {
    let { channelId: t, messageId: n, isEditing: i } = e;
    (0, j.eu)(t, n, (e) => {
        var n;
        return {
            channelId: t,
            selectedAnswerIds: new Set(),
            submitting: !1,
            editing: i,
            showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
        };
    });
}
function O(e) {
    let { channelId: t, messageId: n } = e,
        i = N.Z.getMessage(t, n);
    return null == i ? [] : i.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function D(e) {
    let { channelId: t, messageId: n, answerIds: i } = e,
        l = O({
            channelId: t,
            messageId: n
        }),
        a = r().difference(l, i),
        s = r().difference(i, l),
        d = C.default.getId(),
        u = [
            ...a.map((e) => ({
                type: 'MESSAGE_REACTION_REMOVE',
                id: e
            })),
            ...s.map((e) => ({
                type: 'MESSAGE_REACTION_ADD',
                id: e
            }))
        ],
        m = o.ZP.Emitter.batched(() => {
            let e;
            for (let { id: i, type: l } of u)
                e = c.Z.dispatch({
                    type: l,
                    channelId: t,
                    messageId: n,
                    emoji: {
                        id: i,
                        name: i
                    },
                    userId: d,
                    optimistic: !0,
                    reactionType: g.O.VOTE
                });
            return e;
        });
    null != m && (await m);
}
async function w(e) {
    let { channelId: t, messageId: n } = e,
        i = v.Z.getChannel(t);
    if (null == i) return;
    if (p.Z.isLurking(i.guild_id)) {
        P({
            guildId: i.guild_id,
            title: R.intl.string(R.t.Qic1FB),
            body: R.intl.string(R.t['5sHHo6'])
        });
        return;
    }
    if (!I.Z.canChatInGuild(i.guild_id)) {
        d.Z.show({
            title: R.intl.string(R.t.p245ws),
            body: R.intl.string(R.t['U/uodn'])
        });
        return;
    }
    let a = (0, j.fU)(t, n);
    l()(null != a, 'Must not be able to vote without existing state!');
    let r = O({
        channelId: t,
        messageId: n
    });
    try {
        let e = [...a.selectedAnswerIds.values()];
        (0, j.eu)(
            t,
            n,
            (e) => (
                l()(null != e, 'Must not be able to vote without existing state!'),
                {
                    ...e,
                    submitting: !0,
                    editing: !1
                }
            )
        ),
            await D({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            await A.B({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            (0, j.eu)(t, n, () => void 0);
    } catch (e) {
        var s, o, c;
        d.Z.show({
            title: R.intl.string(R.t.iufib2),
            body: null !== (c = null !== (o = null === (s = e.getAnyErrorMessage) || void 0 === s ? void 0 : s.call(e)) && void 0 !== o ? o : e.message) && void 0 !== c ? c : R.intl.string(R.t.eAn6z8)
        }),
            await D({
                channelId: t,
                messageId: n,
                answerIds: r
            }),
            (0, j.eu)(t, n, (e) => {
                if (null != e)
                    return {
                        ...e,
                        submitting: !1,
                        editing: !1
                    };
            });
    }
}
async function F(e) {
    let { channelId: t, messageId: n } = e,
        i = v.Z.getChannel(t);
    if (null != i) {
        if (p.Z.isLurking(i.guild_id)) {
            P({
                guildId: i.guild_id,
                title: R.intl.string(R.t.B9QnBg),
                body: R.intl.string(R.t.BVZCTk)
            });
            return;
        }
        return (
            (0, j.eu)(t, n, (e) => {
                var n;
                return {
                    channelId: t,
                    selectedAnswerIds: new Set(),
                    submitting: !1,
                    editing: !1,
                    showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
                };
            }),
            await w({
                channelId: t,
                messageId: n
            })
        );
    }
}
async function U(e) {
    let { channelId: t, messageId: n, type: i } = e;
    switch (i) {
        case 'submit':
            await w({
                channelId: t,
                messageId: n
            });
            break;
        case 'remove':
            await F({
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
                (0, j.eu)(t, n, (e) => {
                    var i, l;
                    let a = null == e || !e.showResults,
                        r = N.Z.getMessage(t, n),
                        s =
                            null != r
                                ? r.reactions.reduce((e, t) => {
                                      var n, i;
                                      return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0);
                                  }, 0)
                                : 0;
                    return (
                        h.ZP.trackWithMetadata(Z.rMx.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: a,
                            votes_count: s
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: null !== (i = null == e ? void 0 : e.submitting) && void 0 !== i && i,
                            editing: null !== (l = null == e ? void 0 : e.submitting) && void 0 !== l && l,
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
            k({
                channelId: t,
                messageId: n
            });
            break;
        default:
            l()(!1, 'Unknown poll action type: '.concat(i));
    }
}
let B = {
    handlePollAnswerTapped: function (e) {
        var t, n;
        let { answerId: i, ...a } = e,
            {
                channelId: r,
                messageId: s,
                message: o
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    i = N.Z.getMessage(t, n);
                if (null != i)
                    return {
                        message: i,
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
                throw (l()(null != i, 'Tapped on a non-existent poll message'), Error());
            })(a),
            { tapShouldOpenVotersModal: c } = null !== (n = (0, y.Tk)(o)) && void 0 !== n ? n : {};
        if (!0 === c) {
            k({
                channelId: r,
                messageId: s,
                answerId: i
            });
            return;
        }
        let d = null === (t = o.poll) || void 0 === t ? void 0 : t.allow_multiselect;
        (0, j.eu)(r, s, (e) => {
            var t, n;
            if (null == e) {
                let e = new Set([i]),
                    { analyticsSelectedAnswerIds: t, selectedTextAnswersCount: l, selectedEmojiAnswersCount: a } = L(null === (n = o.poll) || void 0 === n ? void 0 : n.answers, e);
                return (
                    h.ZP.trackWithMetadata(Z.rMx.POLL_VOTE_SELECTED, {
                        channel_id: r,
                        message_id: s,
                        selected_answer_ids: t,
                        selected_text_answers_count: l,
                        selected_emoji_answers_count: a
                    }),
                    {
                        channelId: r,
                        selectedAnswerIds: e,
                        submitting: !1,
                        editing: !1,
                        showResults: !1
                    }
                );
            }
            let l = { ...e },
                a = new Set(l.selectedAnswerIds);
            if (((l.selectedAnswerIds = a), a.has(i))) a.delete(i);
            else {
                if (!d) for (let e of a) a.delete(e);
                a.add(i);
            }
            let { analyticsSelectedAnswerIds: c, selectedTextAnswersCount: u, selectedEmojiAnswersCount: m } = L(null === (t = o.poll) || void 0 === t ? void 0 : t.answers, a);
            return (
                h.ZP.trackWithMetadata(Z.rMx.POLL_VOTE_SELECTED, {
                    channel_id: r,
                    message_id: s,
                    selected_answer_ids: c,
                    selected_text_answers_count: u,
                    selected_emoji_answers_count: m
                }),
                l
            );
        });
    },
    handlePollSubmitVote: w,
    handleUpdateVoteEditingState: M,
    handlePollActionTapped: U,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: i, allowMultiSelect: l, duration: a, layout: r, onClose: o } = e,
            c = S.Z.getUploads(t.id, E.d.Poll),
            d = i.map((e) => {
                var t, n;
                let i = null == c ? void 0 : c.findIndex((t) => t.id === e.localCreationAnswerId),
                    l = { attachment_ids: -1 !== i ? [''.concat(i)] : void 0 };
                r === s.C.DEFAULT && (l.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
                let a = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
                return (
                    null != a &&
                        (null != a.id
                            ? (l.emoji = {
                                  id: a.id,
                                  name: ''
                              })
                            : null != a.optionallyDiverseSequence && (l.emoji = { name: a.optionallyDiverseSequence })),
                    { poll_media: l }
                );
            }),
            u = {
                question: { text: n.trim() },
                answers: d,
                allow_multiselect: l,
                duration: a,
                layout_type: r
            };
        try {
            if (null != c && c.length > 0) {
                var h;
                let e = null !== (h = C.default.getToken()) && void 0 !== h ? h : '';
                await b.sk({
                    channel: t,
                    items: c,
                    token: e,
                    poll: u,
                    nonce: (0, f.r)(),
                    maxSizeCallback: () => {}
                });
            } else await m.Z.sendPollMessage(t.id, u);
            null == o || o();
        } catch (e) {
            if ('poll' === (e instanceof _.Hx ? e : new _.Hx(e)).getAnyErrorMessage() && null != e.text)
                throw {
                    ...e,
                    body: JSON.parse(e.text)
                };
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await d.Z.confirm({
            title: R.intl.string(R.t['+rfkTE']),
            body: R.intl.string(R.t.H2I1gI)
        })) &&
            (await A.W({
                channelId: t,
                messageId: n
            }));
    }
};
