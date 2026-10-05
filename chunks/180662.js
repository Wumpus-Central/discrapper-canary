n.d(t, { A: () => G, e: () => N });
var l = n(284009),
    i = n.n(l),
    s = n(435558),
    r = n.n(s),
    o = n(744593),
    a = n(17928),
    u = n(765178),
    d = n(73153),
    c = n(157559),
    g = n(66834),
    f = n(148494),
    w = n(913122),
    h = n(95561),
    A = n(448741),
    m = n(857071),
    _ = n(823099),
    p = n(505527),
    C = n(9842),
    v = n(280450),
    y = n(734057),
    E = n(31717),
    I = n(834942),
    S = n(232835),
    x = n(522602),
    b = n(491037),
    T = n(335759),
    L = n(862780),
    M = n(951727),
    O = n(652215),
    R = n(375708);
function k(e, t) {
    let n = [...t],
        l = 0,
        i = 0;
    for (let t of n) {
        let n = e?.find((e) => e.answer_id === parseInt(t))?.poll_media;
        (n?.text != null && (l += 1), n?.emoji != null && (i += 1));
    }
    return { analyticsSelectedAnswerIds: n, selectedTextAnswersCount: l, selectedEmojiAnswersCount: i };
}
function B(e) {
    let { guildId: t, title: n, body: l } = e;
    c.A.show({
        title: n,
        body: l,
        confirmText: R.intl.string(R.t["9VLmlZ"]),
        cancelText: R.intl.string(R.t["2m+Sqk"]),
        onConfirm: () => {
            g.A.joinGuild(t, { source: O.Q4z.POLL_ALERT }).catch(A._);
        },
    });
}
function N(e) {
    let { channelId: t, messageId: n, answerId: l } = e,
        i = y.A.getChannel(t);
    if (null == i) return;
    if (m.A.isLurking(i.guild_id))
        return void B({ guildId: i.guild_id, title: R.intl.string(R.t["7LpysO"]), body: R.intl.string(R.t["5sHHoy"]) });
    let s = S.A.getMessage(t, n);
    if (null == s || null == s.poll || 0 === s.poll.answers.length) return;
    let r = l ?? String(s.poll.answers[0].answer_id);
    b.W({ message: s, initialAnswerId: r });
}
function P(e) {
    let { channelId: t, messageId: n, isEditing: l } = e;
    (0, L.A2)(t, n, (e) => ({
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: !1,
        editing: l,
        showResults: e?.showResults ?? !1,
    }));
}
function j(e) {
    let { channelId: t, messageId: n } = e,
        l = S.A.getMessage(t, n);
    return null == l ? [] : l.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function D(e) {
    let { channelId: t, messageId: n, answerIds: l } = e,
        i = j({ channelId: t, messageId: n }),
        s = r().difference(i, l),
        o = r().difference(l, i),
        u = v.default.getId(),
        c = [
            ...s.map((e) => ({ type: "MESSAGE_REACTION_REMOVE", id: e })),
            ...o.map((e) => ({ type: "MESSAGE_REACTION_ADD", id: e })),
        ],
        g = a.Ay.Emitter.batched(() => {
            let e;
            for (let { id: l, type: i } of c)
                e = d.h.dispatch({
                    type: i,
                    channelId: t,
                    messageId: n,
                    emoji: { id: l, name: l },
                    userId: u,
                    optimistic: !0,
                    reactionType: p.v.VOTE,
                });
            return e;
        });
    null != g && (await g);
}
async function U(e) {
    let { channelId: t, messageId: n } = e,
        l = y.A.getChannel(t);
    if (null == l) return;
    if (m.A.isLurking(l.guild_id))
        return void B({ guildId: l.guild_id, title: R.intl.string(R.t.Qic1FD), body: R.intl.string(R.t["5sHHoy"]) });
    if (!I.A.canChatInGuild(l.guild_id))
        return void c.A.show({ title: R.intl.string(R.t.p245wu), body: R.intl.string(R.t["U/uodt"]) });
    let s = (0, L.xt)(t, n);
    i()(null != s, "Must not be able to vote without existing state!");
    let r = j({ channelId: t, messageId: n });
    try {
        let e = [...s.selectedAnswerIds.values()];
        ((0, L.A2)(
            t,
            n,
            (e) => (
                i()(null != e, "Must not be able to vote without existing state!"),
                { ...e, submitting: !0, editing: !1 }
            ),
        ),
            await D({ channelId: t, messageId: n, answerIds: e }),
            await T.Q({ channelId: t, messageId: n, answerIds: e }),
            (0, L.A2)(t, n, () => void 0),
            u.O.announce(0 === e.length ? R.intl.string(R.t["xcvy+3"]) : R.intl.string(R.t.o20GSo)));
    } catch (e) {
        (c.A.show({
            title: R.intl.string(R.t.iufib1),
            body: e.getAnyErrorMessage?.() ?? e.message ?? R.intl.string(R.t.eAn6z2),
        }),
            await D({ channelId: t, messageId: n, answerIds: r }),
            (0, L.A2)(t, n, (e) => {
                if (null != e) return { ...e, submitting: !1, editing: !1 };
            }));
    }
}
async function V(e) {
    let { channelId: t, messageId: n } = e,
        l = y.A.getChannel(t);
    if (null != l)
        return m.A.isLurking(l.guild_id)
            ? void B({ guildId: l.guild_id, title: R.intl.string(R.t.B9QnBp), body: R.intl.string(R.t.BVZCTn) })
            : ((0, L.A2)(t, n, (e) => ({
                  channelId: t,
                  selectedAnswerIds: new Set(),
                  submitting: !1,
                  editing: !1,
                  showResults: e?.showResults ?? !1,
              })),
              await U({ channelId: t, messageId: n }));
}
async function H(e) {
    let { channelId: t, messageId: n, type: l } = e;
    switch (l) {
        case "submit":
            await U({ channelId: t, messageId: n });
            break;
        case "remove":
            await V({ channelId: t, messageId: n });
            break;
        case "cancel":
            P({ channelId: t, messageId: n, isEditing: !1 });
            break;
        case "showVotes":
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, L.A2)(t, n, (e) => {
                    let l = null == e || !e.showResults,
                        i = S.A.getMessage(t, n),
                        s = null != i ? i.reactions.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0) : 0;
                    return (
                        h.Ay.trackWithMetadata(O.HAw.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: l,
                            votes_count: s,
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: e?.submitting ?? !1,
                            editing: e?.submitting ?? !1,
                            showResults: l,
                        }
                    );
                });
            })({ channelId: t, messageId: n });
            break;
        case "showVoterDetails":
            N({ channelId: t, messageId: n });
            break;
        default:
            i()(!1, `Unknown poll action type: ${l}`);
    }
}
let G = {
    handlePollAnswerTapped: function (e) {
        let { answerId: t, ...n } = e,
            {
                channelId: l,
                messageId: s,
                message: r,
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    l = S.A.getMessage(t, n);
                if (null != l) return { message: l, channelId: t, messageId: n };
                let s = C.A.getMessage(t, n);
                if (null != s.message) return { channelId: t, messageId: n, message: s.message };
                throw (i()(null != l, "Tapped on a non-existent poll message"), Error());
            })(n),
            { tapShouldOpenVotersModal: o } = (0, M.j8)(r) ?? {};
        if (!0 === o) return void N({ channelId: l, messageId: s, answerId: t });
        let a = r.poll?.allow_multiselect;
        (0, L.A2)(l, s, (e) => {
            if (null == e) {
                let e = new Set([t]),
                    {
                        analyticsSelectedAnswerIds: n,
                        selectedTextAnswersCount: i,
                        selectedEmojiAnswersCount: o,
                    } = k(r.poll?.answers, e);
                return (
                    h.Ay.trackWithMetadata(O.HAw.POLL_VOTE_SELECTED, {
                        channel_id: l,
                        message_id: s,
                        selected_answer_ids: n,
                        selected_text_answers_count: i,
                        selected_emoji_answers_count: o,
                    }),
                    { channelId: l, selectedAnswerIds: e, submitting: !1, editing: !1, showResults: !1 }
                );
            }
            let n = { ...e },
                i = new Set(n.selectedAnswerIds);
            if (((n.selectedAnswerIds = i), i.has(t))) i.delete(t);
            else {
                if (!a) for (let e of i) i.delete(e);
                i.add(t);
            }
            let {
                analyticsSelectedAnswerIds: o,
                selectedTextAnswersCount: u,
                selectedEmojiAnswersCount: d,
            } = k(r.poll?.answers, i);
            return (
                h.Ay.trackWithMetadata(O.HAw.POLL_VOTE_SELECTED, {
                    channel_id: l,
                    message_id: s,
                    selected_answer_ids: o,
                    selected_text_answers_count: u,
                    selected_emoji_answers_count: d,
                }),
                n
            );
        });
    },
    handlePollSubmitVote: U,
    handleUpdateVoteEditingState: P,
    handlePollActionTapped: H,
    createPoll: async function (e) {
        let {
                channel: t,
                question: n,
                answers: l,
                allowMultiSelect: i,
                duration: s,
                layout: r,
                onClose: a,
                scheduledTimestamp: u,
            } = e,
            d = x.A.getUploads(t.id, E.C.Poll),
            c = l.map((e) => {
                let t = d?.findIndex((t) => t.id === e.localCreationAnswerId),
                    n = { attachment_ids: -1 !== t ? [`${t}`] : void 0 };
                r === o.Z.DEFAULT && (n.text = e.text?.trim());
                let l = e.image?.emoji;
                return (
                    null != l &&
                        (null != l.id
                            ? (n.emoji = { id: l.id, name: "" })
                            : null != l.optionallyDiverseSequence && (n.emoji = { name: l.optionallyDiverseSequence })),
                    { poll_media: n }
                );
            }),
            g = { question: { text: n.trim() }, answers: c, allow_multiselect: i, duration: s, layout_type: r };
        try {
            (await f.A.sendPollMessage(t.id, g, {
                attachmentsToUpload: d,
                scheduledTimestamp: u,
                onAttachmentUploadError: (e, n, l) => {
                    (0, _.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: l });
                },
            }),
                a?.(u));
        } catch (e) {
            if ("poll" === (e instanceof w.LG ? e : new w.LG(e)).getAnyErrorMessage() && null != e.text)
                throw { ...e, body: JSON.parse(e.text) };
            if (null != u) return;
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await c.A.confirm({ title: R.intl.string(R.t["+rfkTK"]), body: R.intl.string(R.t.H2I1gL) })) &&
            (await T.w({ channelId: t, messageId: n }));
    },
};
