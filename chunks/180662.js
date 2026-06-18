n.d(t, { A: () => H, e: () => b });
var l = n(284009),
    i = n.n(l),
    r = n(735438),
    s = n.n(r),
    a = n(744593),
    o = n(17928),
    u = n(765178),
    d = n(228366),
    c = n(157559),
    _ = n(66834),
    S = n(493336),
    h = n(913122),
    A = n(95561),
    g = n(857071),
    f = n(567231),
    C = n(505527),
    I = n(9842),
    E = n(495544),
    w = n(734057),
    p = n(31717),
    m = n(834942),
    R = n(232835),
    v = n(522602),
    T = n(491037),
    L = n(335759),
    P = n(862780),
    O = n(951727),
    y = n(652215),
    D = n(375708);
function U(e, t) {
    let n = [...t],
        l = 0,
        i = 0;
    for (let t of n) {
        let n = e?.find((e) => e.answer_id === parseInt(t))?.poll_media;
        n?.text != null && (l += 1), n?.emoji != null && (i += 1);
    }
    return { analyticsSelectedAnswerIds: n, selectedTextAnswersCount: l, selectedEmojiAnswersCount: i };
}
function B(e) {
    let { guildId: t, title: n, body: l } = e;
    c.A.show({
        title: n,
        body: l,
        confirmText: D.intl.string(D.t["9VLmlZ"]),
        cancelText: D.intl.string(D.t["2m+Sqk"]),
        onConfirm: () => {
            _.A.joinGuild(t, { source: y.Q4z.POLL_ALERT });
        },
    });
}
function b(e) {
    let { channelId: t, messageId: n, answerId: l } = e,
        i = w.A.getChannel(t);
    if (null == i) return;
    if (g.A.isLurking(i.guild_id))
        return void B({ guildId: i.guild_id, title: D.intl.string(D.t["7LpysO"]), body: D.intl.string(D.t["5sHHoy"]) });
    let r = R.A.getMessage(t, n);
    if (null == r || null == r.poll || 0 === r.poll.answers.length) return;
    let s = l ?? String(r.poll.answers[0].answer_id);
    T.W({ message: r, initialAnswerId: s });
}
function x(e) {
    let { channelId: t, messageId: n, isEditing: l } = e;
    (0, P.A2)(t, n, (e) => ({
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: !1,
        editing: l,
        showResults: e?.showResults ?? !1,
    }));
}
function M(e) {
    let { channelId: t, messageId: n } = e,
        l = R.A.getMessage(t, n);
    return null == l ? [] : l.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function N(e) {
    let { channelId: t, messageId: n, answerIds: l } = e,
        i = M({ channelId: t, messageId: n }),
        r = s().difference(i, l),
        a = s().difference(l, i),
        u = E.default.getId(),
        c = [
            ...r.map((e) => ({ type: "MESSAGE_REACTION_REMOVE", id: e })),
            ...a.map((e) => ({ type: "MESSAGE_REACTION_ADD", id: e })),
        ],
        _ = o.Ay.Emitter.batched(() => {
            let e;
            for (let { id: l, type: i } of c)
                e = d.h.dispatch({
                    type: i,
                    channelId: t,
                    messageId: n,
                    emoji: { id: l, name: l },
                    userId: u,
                    optimistic: !0,
                    reactionType: C.v.VOTE,
                });
            return e;
        });
    null != _ && (await _);
}
async function G(e) {
    let { channelId: t, messageId: n } = e,
        l = w.A.getChannel(t);
    if (null == l) return;
    if (g.A.isLurking(l.guild_id))
        return void B({ guildId: l.guild_id, title: D.intl.string(D.t.Qic1FD), body: D.intl.string(D.t["5sHHoy"]) });
    if (!m.A.canChatInGuild(l.guild_id))
        return void c.A.show({ title: D.intl.string(D.t.p245wu), body: D.intl.string(D.t["U/uodt"]) });
    let r = (0, P.xt)(t, n);
    i()(null != r, "Must not be able to vote without existing state!");
    let s = M({ channelId: t, messageId: n });
    try {
        let e = [...r.selectedAnswerIds.values()];
        (0, P.A2)(
            t,
            n,
            (e) => (
                i()(null != e, "Must not be able to vote without existing state!"),
                { ...e, submitting: !0, editing: !1 }
            ),
        ),
            await N({ channelId: t, messageId: n, answerIds: e }),
            await L.Q({ channelId: t, messageId: n, answerIds: e }),
            (0, P.A2)(t, n, () => void 0),
            u.O.announce(0 === e.length ? D.intl.string(D.t["xcvy+3"]) : D.intl.string(D.t.o20GSo));
    } catch (e) {
        c.A.show({
            title: D.intl.string(D.t.iufib1),
            body: e.getAnyErrorMessage?.() ?? e.message ?? D.intl.string(D.t.eAn6z2),
        }),
            await N({ channelId: t, messageId: n, answerIds: s }),
            (0, P.A2)(t, n, (e) => {
                if (null != e) return { ...e, submitting: !1, editing: !1 };
            });
    }
}
async function k(e) {
    let { channelId: t, messageId: n } = e,
        l = w.A.getChannel(t);
    if (null != l)
        return g.A.isLurking(l.guild_id)
            ? void B({ guildId: l.guild_id, title: D.intl.string(D.t.B9QnBp), body: D.intl.string(D.t.BVZCTn) })
            : ((0, P.A2)(t, n, (e) => ({
                  channelId: t,
                  selectedAnswerIds: new Set(),
                  submitting: !1,
                  editing: !1,
                  showResults: e?.showResults ?? !1,
              })),
              await G({ channelId: t, messageId: n }));
}
async function W(e) {
    let { channelId: t, messageId: n, type: l } = e;
    switch (l) {
        case "submit":
            await G({ channelId: t, messageId: n });
            break;
        case "remove":
            await k({ channelId: t, messageId: n });
            break;
        case "cancel":
            x({ channelId: t, messageId: n, isEditing: !1 });
            break;
        case "showVotes":
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, P.A2)(t, n, (e) => {
                    let l = null == e || !e.showResults,
                        i = R.A.getMessage(t, n),
                        r = null != i ? i.reactions.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0) : 0;
                    return (
                        A.Ay.trackWithMetadata(y.HAw.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: l,
                            votes_count: r,
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
            b({ channelId: t, messageId: n });
            break;
        default:
            i()(!1, `Unknown poll action type: ${l}`);
    }
}
let H = {
    handlePollAnswerTapped: function (e) {
        let { answerId: t, ...n } = e,
            {
                channelId: l,
                messageId: r,
                message: s,
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    l = R.A.getMessage(t, n);
                if (null != l) return { message: l, channelId: t, messageId: n };
                let r = I.A.getMessage(t, n);
                if (null != r.message) return { channelId: t, messageId: n, message: r.message };
                throw (i()(null != l, "Tapped on a non-existent poll message"), Error());
            })(n),
            { tapShouldOpenVotersModal: a } = (0, O.j8)(s) ?? {};
        if (!0 === a) return void b({ channelId: l, messageId: r, answerId: t });
        let o = s.poll?.allow_multiselect;
        (0, P.A2)(l, r, (e) => {
            if (null == e) {
                let e = new Set([t]),
                    {
                        analyticsSelectedAnswerIds: n,
                        selectedTextAnswersCount: i,
                        selectedEmojiAnswersCount: a,
                    } = U(s.poll?.answers, e);
                return (
                    A.Ay.trackWithMetadata(y.HAw.POLL_VOTE_SELECTED, {
                        channel_id: l,
                        message_id: r,
                        selected_answer_ids: n,
                        selected_text_answers_count: i,
                        selected_emoji_answers_count: a,
                    }),
                    { channelId: l, selectedAnswerIds: e, submitting: !1, editing: !1, showResults: !1 }
                );
            }
            let n = { ...e },
                i = new Set(n.selectedAnswerIds);
            if (((n.selectedAnswerIds = i), i.has(t))) i.delete(t);
            else {
                if (!o) for (let e of i) i.delete(e);
                i.add(t);
            }
            let {
                analyticsSelectedAnswerIds: a,
                selectedTextAnswersCount: u,
                selectedEmojiAnswersCount: d,
            } = U(s.poll?.answers, i);
            return (
                A.Ay.trackWithMetadata(y.HAw.POLL_VOTE_SELECTED, {
                    channel_id: l,
                    message_id: r,
                    selected_answer_ids: a,
                    selected_text_answers_count: u,
                    selected_emoji_answers_count: d,
                }),
                n
            );
        });
    },
    handlePollSubmitVote: G,
    handleUpdateVoteEditingState: x,
    handlePollActionTapped: W,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: l, allowMultiSelect: i, duration: r, layout: s, onClose: o } = e,
            u = v.A.getUploads(t.id, p.C.Poll),
            d = l.map((e) => {
                let t = u?.findIndex((t) => t.id === e.localCreationAnswerId),
                    n = { attachment_ids: -1 !== t ? [`${t}`] : void 0 };
                s === a.Z.DEFAULT && (n.text = e.text?.trim());
                let l = e.image?.emoji;
                return (
                    null != l &&
                        (null != l.id
                            ? (n.emoji = { id: l.id, name: "" })
                            : null != l.optionallyDiverseSequence && (n.emoji = { name: l.optionallyDiverseSequence })),
                    { poll_media: n }
                );
            }),
            c = { question: { text: n.trim() }, answers: d, allow_multiselect: i, duration: r, layout_type: s };
        try {
            await S.A.sendPollMessage(t.id, c, {
                attachmentsToUpload: u,
                onAttachmentUploadError: (e, n, l) => {
                    (0, f.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: l });
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
        (await c.A.confirm({ title: D.intl.string(D.t["+rfkTK"]), body: D.intl.string(D.t.H2I1gL) })) &&
            (await L.w({ channelId: t, messageId: n }));
    },
};
