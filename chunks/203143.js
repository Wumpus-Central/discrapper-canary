n.d(t, {
    n: function () {
        return O;
    }
}),
    n(411104),
    n(47120),
    n(390547),
    n(724458);
var i = n(512722),
    r = n.n(i),
    l = n(392711),
    a = n.n(l),
    o = n(263568),
    s = n(442837),
    c = n(570140),
    d = n(668781),
    u = n(749210),
    m = n(904245),
    h = n(881052),
    f = n(367907),
    p = n(41776),
    _ = n(566006),
    g = n(48854),
    E = n(869765),
    C = n(314897),
    I = n(592125),
    x = n(703558),
    N = n(607744),
    v = n(375954),
    T = n(117530),
    S = n(553803),
    A = n(316758),
    b = n(467531),
    j = n(798628),
    R = n(918088),
    Z = n(981631),
    P = n(388032);
function L(e, t) {
    let n = [...t],
        i = 0,
        r = 0;
    for (let t of n) {
        var l;
        let n = null == e ? void 0 : null === (l = e.find((e) => e.answer_id === parseInt(t))) || void 0 === l ? void 0 : l.poll_media;
        (null == n ? void 0 : n.text) != null && (i += 1), (null == n ? void 0 : n.emoji) != null && (r += 1);
    }
    return {
        analyticsSelectedAnswerIds: n,
        selectedTextAnswersCount: i,
        selectedEmojiAnswersCount: r
    };
}
function y(e) {
    let { guildId: t, title: n, body: i } = e;
    d.Z.show({
        title: n,
        body: i,
        confirmText: P.intl.string(P.t['9VLmlZ']),
        cancelText: P.intl.string(P.t['2m+Sqq']),
        onConfirm: () => {
            u.Z.joinGuild(t, { source: Z.vtS.POLL_ALERT });
        }
    });
}
function O(e) {
    let { channelId: t, messageId: n, answerId: i } = e,
        r = I.Z.getChannel(t);
    if (null == r) return;
    if (p.Z.isLurking(r.guild_id)) {
        y({
            guildId: r.guild_id,
            title: P.intl.string(P.t['7LpysL']),
            body: P.intl.string(P.t['5sHHo6'])
        });
        return;
    }
    let l = v.Z.getMessage(t, n);
    if (null == l || null == l.poll || 0 === l.poll.answers.length) return;
    let a = null != i ? i : String(l.poll.answers[0].answer_id);
    S.A({
        message: l,
        initialAnswerId: a
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
function k(e) {
    let { channelId: t, messageId: n } = e,
        i = v.Z.getMessage(t, n);
    return null == i ? [] : i.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function D(e) {
    let { channelId: t, messageId: n, answerIds: i } = e,
        r = k({
            channelId: t,
            messageId: n
        }),
        l = a().difference(r, i),
        o = a().difference(i, r),
        d = C.default.getId(),
        u = [
            ...l.map((e) => ({
                type: 'MESSAGE_REACTION_REMOVE',
                id: e
            })),
            ...o.map((e) => ({
                type: 'MESSAGE_REACTION_ADD',
                id: e
            }))
        ],
        m = s.ZP.Emitter.batched(() => {
            let e;
            for (let { id: i, type: r } of u)
                e = c.Z.dispatch({
                    type: r,
                    channelId: t,
                    messageId: n,
                    emoji: {
                        id: i,
                        name: i
                    },
                    userId: d,
                    optimistic: !0,
                    reactionType: _.O.VOTE
                });
            return e;
        });
    null != m && (await m);
}
async function B(e) {
    let { channelId: t, messageId: n } = e,
        i = I.Z.getChannel(t);
    if (null == i) return;
    if (p.Z.isLurking(i.guild_id)) {
        y({
            guildId: i.guild_id,
            title: P.intl.string(P.t.Qic1FB),
            body: P.intl.string(P.t['5sHHo6'])
        });
        return;
    }
    if (!N.Z.canChatInGuild(i.guild_id)) {
        d.Z.show({
            title: P.intl.string(P.t.p245ws),
            body: P.intl.string(P.t['U/uodn'])
        });
        return;
    }
    let l = (0, j.fU)(t, n);
    r()(null != l, 'Must not be able to vote without existing state!');
    let a = k({
        channelId: t,
        messageId: n
    });
    try {
        let e = [...l.selectedAnswerIds.values()];
        (0, j.eu)(
            t,
            n,
            (e) => (
                r()(null != e, 'Must not be able to vote without existing state!'),
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
            await b.B({
                channelId: t,
                messageId: n,
                answerIds: e
            }),
            (0, j.eu)(t, n, () => void 0);
    } catch (e) {
        var o, s, c;
        d.Z.show({
            title: P.intl.string(P.t.iufib2),
            body: null !== (c = null !== (s = null === (o = e.getAnyErrorMessage) || void 0 === o ? void 0 : o.call(e)) && void 0 !== s ? s : e.message) && void 0 !== c ? c : P.intl.string(P.t.eAn6z8)
        }),
            await D({
                channelId: t,
                messageId: n,
                answerIds: a
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
async function U(e) {
    let { channelId: t, messageId: n } = e,
        i = I.Z.getChannel(t);
    if (null != i) {
        if (p.Z.isLurking(i.guild_id)) {
            y({
                guildId: i.guild_id,
                title: P.intl.string(P.t.B9QnBg),
                body: P.intl.string(P.t.BVZCTk)
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
            await B({
                channelId: t,
                messageId: n
            })
        );
    }
}
async function w(e) {
    let { channelId: t, messageId: n, type: i } = e;
    switch (i) {
        case 'submit':
            await B({
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
                    var i, r;
                    let l = null == e || !e.showResults,
                        a = v.Z.getMessage(t, n),
                        o =
                            null != a
                                ? a.reactions.reduce((e, t) => {
                                      var n, i;
                                      return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0);
                                  }, 0)
                                : 0;
                    return (
                        f.ZP.trackWithMetadata(Z.rMx.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: l,
                            votes_count: o
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: null !== (i = null == e ? void 0 : e.submitting) && void 0 !== i && i,
                            editing: null !== (r = null == e ? void 0 : e.submitting) && void 0 !== r && r,
                            showResults: l
                        }
                    );
                });
            })({
                channelId: t,
                messageId: n
            });
            break;
        case 'showVoterDetails':
            O({
                channelId: t,
                messageId: n
            });
            break;
        default:
            r()(!1, 'Unknown poll action type: '.concat(i));
    }
}
async function F(e) {
    let { channel: t, question: n, answers: i, allowMultiSelect: r, duration: l, layout: a, onClose: s } = e,
        c = T.Z.getUploads(t.id, x.d.Poll),
        d = i.map((e) => {
            var t, n;
            let i = null == c ? void 0 : c.findIndex((t) => t.id === e.localCreationAnswerId),
                r = { attachment_ids: -1 !== i ? [''.concat(i)] : void 0 };
            a === o.C.DEFAULT && (r.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
            let l = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
            return (
                null != l &&
                    (null != l.id
                        ? (r.emoji = {
                              id: l.id,
                              name: ''
                          })
                        : null != l.optionallyDiverseSequence && (r.emoji = { name: l.optionallyDiverseSequence })),
                { poll_media: r }
            );
        }),
        u = {
            question: { text: n.trim() },
            answers: d,
            allow_multiselect: r,
            duration: l,
            layout_type: a
        };
    try {
        if (null != c && c.length > 0) {
            var f;
            let e = null !== (f = C.default.getToken()) && void 0 !== f ? f : '';
            await A.sk({
                channel: t,
                items: c,
                token: e,
                poll: u,
                nonce: (0, g.r)(),
                maxSizeCallback: () => {}
            });
        } else await m.Z.sendPollMessage(t.id, u);
        null == s || s();
    } catch (e) {
        if ('poll' === (e instanceof h.Hx ? e : new h.Hx(e)).getAnyErrorMessage() && null != e.text)
            throw {
                ...e,
                body: JSON.parse(e.text)
            };
        throw e;
    }
}
async function G(e) {
    let { channelId: t, messageId: n } = e;
    (await d.Z.confirm({
        title: P.intl.string(P.t['+rfkTE']),
        body: P.intl.string(P.t.H2I1gI)
    })) &&
        (await b.W({
            channelId: t,
            messageId: n
        }));
}
t.Z = {
    handlePollAnswerTapped: function (e) {
        var t, n;
        let { answerId: i, ...l } = e,
            {
                channelId: a,
                messageId: o,
                message: s
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    i = v.Z.getMessage(t, n);
                if (null != i)
                    return {
                        message: i,
                        channelId: t,
                        messageId: n
                    };
                let l = E.Z.getMessage(t, n);
                if (null != l.message)
                    return {
                        channelId: t,
                        messageId: n,
                        message: l.message
                    };
                throw (r()(null != i, 'Tapped on a non-existent poll message'), Error());
            })(l),
            { tapShouldOpenVotersModal: c } = null !== (n = (0, R.Tk)(s)) && void 0 !== n ? n : {};
        if (!0 === c) {
            O({
                channelId: a,
                messageId: o,
                answerId: i
            });
            return;
        }
        let d = null === (t = s.poll) || void 0 === t ? void 0 : t.allow_multiselect;
        (0, j.eu)(a, o, (e) => {
            var t, n;
            if (null == e) {
                let e = new Set([i]),
                    { analyticsSelectedAnswerIds: t, selectedTextAnswersCount: r, selectedEmojiAnswersCount: l } = L(null === (n = s.poll) || void 0 === n ? void 0 : n.answers, e);
                return (
                    f.ZP.trackWithMetadata(Z.rMx.POLL_VOTE_SELECTED, {
                        channel_id: a,
                        message_id: o,
                        selected_answer_ids: t,
                        selected_text_answers_count: r,
                        selected_emoji_answers_count: l
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
            let r = { ...e },
                l = new Set(r.selectedAnswerIds);
            if (((r.selectedAnswerIds = l), l.has(i))) l.delete(i);
            else {
                if (!d) for (let e of l) l.delete(e);
                l.add(i);
            }
            let { analyticsSelectedAnswerIds: c, selectedTextAnswersCount: u, selectedEmojiAnswersCount: m } = L(null === (t = s.poll) || void 0 === t ? void 0 : t.answers, l);
            return (
                f.ZP.trackWithMetadata(Z.rMx.POLL_VOTE_SELECTED, {
                    channel_id: a,
                    message_id: o,
                    selected_answer_ids: c,
                    selected_text_answers_count: u,
                    selected_emoji_answers_count: m
                }),
                r
            );
        });
    },
    handlePollSubmitVote: B,
    handleUpdateVoteEditingState: M,
    handlePollActionTapped: w,
    createPoll: F,
    endPollEarly: G
};
