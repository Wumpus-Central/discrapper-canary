n.d(t, { A: () => G, e: () => x });
var i = n(284009),
    l = n.n(i),
    r = n(435558),
    s = n.n(r),
    a = n(744593),
    o = n(17928),
    d = n(765178),
    u = n(228366),
    c = n(157559),
    E = n(66834),
    g = n(148494),
    h = n(913122),
    A = n(95561),
    _ = n(857071),
    S = n(823099),
    f = n(505527),
    I = n(9842),
    C = n(280450),
    m = n(734057),
    p = n(31717),
    v = n(834942),
    T = n(232835),
    R = n(522602),
    L = n(491037),
    P = n(335759),
    O = n(862780),
    N = n(951727),
    w = n(652215),
    y = n(375708);
function D(e, t) {
    let n = [...t],
        i = 0,
        l = 0;
    for (let t of n) {
        let n = e?.find((e) => e.answer_id === parseInt(t))?.poll_media;
        n?.text != null && (i += 1), n?.emoji != null && (l += 1);
    }
    return { analyticsSelectedAnswerIds: n, selectedTextAnswersCount: i, selectedEmojiAnswersCount: l };
}
function M(e) {
    let { guildId: t, title: n, body: i } = e;
    c.A.show({
        title: n,
        body: i,
        confirmText: y.intl.string(y.t["9VLmlZ"]),
        cancelText: y.intl.string(y.t["2m+Sqk"]),
        onConfirm: () => {
            E.A.joinGuild(t, { source: w.Q4z.POLL_ALERT });
        },
    });
}
function x(e) {
    let { channelId: t, messageId: n, answerId: i } = e,
        l = m.A.getChannel(t);
    if (null == l) return;
    if (_.A.isLurking(l.guild_id))
        return void M({ guildId: l.guild_id, title: y.intl.string(y.t["7LpysO"]), body: y.intl.string(y.t["5sHHoy"]) });
    let r = T.A.getMessage(t, n);
    if (null == r || null == r.poll || 0 === r.poll.answers.length) return;
    let s = i ?? String(r.poll.answers[0].answer_id);
    L.W({ message: r, initialAnswerId: s });
}
function b(e) {
    let { channelId: t, messageId: n, isEditing: i } = e;
    (0, O.A2)(t, n, (e) => ({
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: !1,
        editing: i,
        showResults: e?.showResults ?? !1,
    }));
}
function U(e) {
    let { channelId: t, messageId: n } = e,
        i = T.A.getMessage(t, n);
    return null == i ? [] : i.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function j(e) {
    let { channelId: t, messageId: n, answerIds: i } = e,
        l = U({ channelId: t, messageId: n }),
        r = s().difference(l, i),
        a = s().difference(i, l),
        d = C.default.getId(),
        c = [
            ...r.map((e) => ({ type: "MESSAGE_REACTION_REMOVE", id: e })),
            ...a.map((e) => ({ type: "MESSAGE_REACTION_ADD", id: e })),
        ],
        E = o.Ay.Emitter.batched(() => {
            let e;
            for (let { id: i, type: l } of c)
                e = u.h.dispatch({
                    type: l,
                    channelId: t,
                    messageId: n,
                    emoji: { id: i, name: i },
                    userId: d,
                    optimistic: !0,
                    reactionType: f.v.VOTE,
                });
            return e;
        });
    null != E && (await E);
}
async function B(e) {
    let { channelId: t, messageId: n } = e,
        i = m.A.getChannel(t);
    if (null == i) return;
    if (_.A.isLurking(i.guild_id))
        return void M({ guildId: i.guild_id, title: y.intl.string(y.t.Qic1FD), body: y.intl.string(y.t["5sHHoy"]) });
    if (!v.A.canChatInGuild(i.guild_id))
        return void c.A.show({ title: y.intl.string(y.t.p245wu), body: y.intl.string(y.t["U/uodt"]) });
    let r = (0, O.xt)(t, n);
    l()(null != r, "Must not be able to vote without existing state!");
    let s = U({ channelId: t, messageId: n });
    try {
        let e = [...r.selectedAnswerIds.values()];
        (0, O.A2)(
            t,
            n,
            (e) => (
                l()(null != e, "Must not be able to vote without existing state!"),
                { ...e, submitting: !0, editing: !1 }
            ),
        ),
            await j({ channelId: t, messageId: n, answerIds: e }),
            await P.Q({ channelId: t, messageId: n, answerIds: e }),
            (0, O.A2)(t, n, () => void 0),
            d.O.announce(0 === e.length ? y.intl.string(y.t["xcvy+3"]) : y.intl.string(y.t.o20GSo));
    } catch (e) {
        c.A.show({
            title: y.intl.string(y.t.iufib1),
            body: e.getAnyErrorMessage?.() ?? e.message ?? y.intl.string(y.t.eAn6z2),
        }),
            await j({ channelId: t, messageId: n, answerIds: s }),
            (0, O.A2)(t, n, (e) => {
                if (null != e) return { ...e, submitting: !1, editing: !1 };
            });
    }
}
async function k(e) {
    let { channelId: t, messageId: n } = e,
        i = m.A.getChannel(t);
    if (null != i)
        return _.A.isLurking(i.guild_id)
            ? void M({ guildId: i.guild_id, title: y.intl.string(y.t.B9QnBp), body: y.intl.string(y.t.BVZCTn) })
            : ((0, O.A2)(t, n, (e) => ({
                  channelId: t,
                  selectedAnswerIds: new Set(),
                  submitting: !1,
                  editing: !1,
                  showResults: e?.showResults ?? !1,
              })),
              await B({ channelId: t, messageId: n }));
}
async function H(e) {
    let { channelId: t, messageId: n, type: i } = e;
    switch (i) {
        case "submit":
            await B({ channelId: t, messageId: n });
            break;
        case "remove":
            await k({ channelId: t, messageId: n });
            break;
        case "cancel":
            b({ channelId: t, messageId: n, isEditing: !1 });
            break;
        case "showVotes":
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, O.A2)(t, n, (e) => {
                    let i = null == e || !e.showResults,
                        l = T.A.getMessage(t, n),
                        r = null != l ? l.reactions.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0) : 0;
                    return (
                        A.Ay.trackWithMetadata(w.HAw.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: i,
                            votes_count: r,
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: e?.submitting ?? !1,
                            editing: e?.submitting ?? !1,
                            showResults: i,
                        }
                    );
                });
            })({ channelId: t, messageId: n });
            break;
        case "showVoterDetails":
            x({ channelId: t, messageId: n });
            break;
        default:
            l()(!1, `Unknown poll action type: ${i}`);
    }
}
let G = {
    handlePollAnswerTapped: function (e) {
        let { answerId: t, ...n } = e,
            {
                channelId: i,
                messageId: r,
                message: s,
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    i = T.A.getMessage(t, n);
                if (null != i) return { message: i, channelId: t, messageId: n };
                let r = I.A.getMessage(t, n);
                if (null != r.message) return { channelId: t, messageId: n, message: r.message };
                throw (l()(null != i, "Tapped on a non-existent poll message"), Error());
            })(n),
            { tapShouldOpenVotersModal: a } = (0, N.j8)(s) ?? {};
        if (!0 === a) return void x({ channelId: i, messageId: r, answerId: t });
        let o = s.poll?.allow_multiselect;
        (0, O.A2)(i, r, (e) => {
            if (null == e) {
                let e = new Set([t]),
                    {
                        analyticsSelectedAnswerIds: n,
                        selectedTextAnswersCount: l,
                        selectedEmojiAnswersCount: a,
                    } = D(s.poll?.answers, e);
                return (
                    A.Ay.trackWithMetadata(w.HAw.POLL_VOTE_SELECTED, {
                        channel_id: i,
                        message_id: r,
                        selected_answer_ids: n,
                        selected_text_answers_count: l,
                        selected_emoji_answers_count: a,
                    }),
                    { channelId: i, selectedAnswerIds: e, submitting: !1, editing: !1, showResults: !1 }
                );
            }
            let n = { ...e },
                l = new Set(n.selectedAnswerIds);
            if (((n.selectedAnswerIds = l), l.has(t))) l.delete(t);
            else {
                if (!o) for (let e of l) l.delete(e);
                l.add(t);
            }
            let {
                analyticsSelectedAnswerIds: a,
                selectedTextAnswersCount: d,
                selectedEmojiAnswersCount: u,
            } = D(s.poll?.answers, l);
            return (
                A.Ay.trackWithMetadata(w.HAw.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: r,
                    selected_answer_ids: a,
                    selected_text_answers_count: d,
                    selected_emoji_answers_count: u,
                }),
                n
            );
        });
    },
    handlePollSubmitVote: B,
    handleUpdateVoteEditingState: b,
    handlePollActionTapped: H,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: i, allowMultiSelect: l, duration: r, layout: s, onClose: o } = e,
            d = R.A.getUploads(t.id, p.C.Poll),
            u = i.map((e) => {
                let t = d?.findIndex((t) => t.id === e.localCreationAnswerId),
                    n = { attachment_ids: -1 !== t ? [`${t}`] : void 0 };
                s === a.Z.DEFAULT && (n.text = e.text?.trim());
                let i = e.image?.emoji;
                return (
                    null != i &&
                        (null != i.id
                            ? (n.emoji = { id: i.id, name: "" })
                            : null != i.optionallyDiverseSequence && (n.emoji = { name: i.optionallyDiverseSequence })),
                    { poll_media: n }
                );
            }),
            c = { question: { text: n.trim() }, answers: u, allow_multiselect: l, duration: r, layout_type: s };
        try {
            await g.A.sendPollMessage(t.id, c, {
                attachmentsToUpload: d,
                onAttachmentUploadError: (e, n, i) => {
                    (0, S.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
                },
            }),
                o?.();
        } catch (e) {
            if ("poll" === (e instanceof h.LG ? e : new h.LG(e)).getAnyErrorMessage() && null != e.text)
                throw { ...e, body: JSON.parse(e.text) };
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await c.A.confirm({ title: y.intl.string(y.t["+rfkTK"]), body: y.intl.string(y.t.H2I1gL) })) &&
            (await P.w({ channelId: t, messageId: n }));
    },
};
