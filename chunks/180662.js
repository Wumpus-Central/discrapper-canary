n.d(t, { A: () => F, e: () => P });
var i = n(284009),
    l = n.n(i),
    a = n(735438),
    r = n.n(a),
    s = n(966974),
    o = n(311907),
    d = n(582754),
    c = n(73153),
    u = n(157559),
    m = n(686956),
    _ = n(843472),
    h = n(198982),
    p = n(58149),
    g = n(857071),
    A = n(301169),
    f = n(505527),
    x = n(9842),
    E = n(961350),
    C = n(734057),
    I = n(31717),
    T = n(834942),
    v = n(320501),
    N = n(522602),
    S = n(491037),
    b = n(335759),
    y = n(862780),
    j = n(951727),
    R = n(652215),
    L = n(985018);
function M(e, t) {
    let n = [...t],
        i = 0,
        l = 0;
    for (let t of n) {
        let n = e?.find((e) => e.answer_id === parseInt(t))?.poll_media;
        n?.text != null && (i += 1), n?.emoji != null && (l += 1);
    }
    return { analyticsSelectedAnswerIds: n, selectedTextAnswersCount: i, selectedEmojiAnswersCount: l };
}
function O(e) {
    let { guildId: t, title: n, body: i } = e;
    u.A.show({
        title: n,
        body: i,
        confirmText: L.intl.string(L.t["9VLmlZ"]),
        cancelText: L.intl.string(L.t["2m+Sqk"]),
        onConfirm: () => {
            m.A.joinGuild(t, { source: R.Q4z.POLL_ALERT });
        },
    });
}
function P(e) {
    let { channelId: t, messageId: n, answerId: i } = e,
        l = C.A.getChannel(t);
    if (null == l) return;
    if (g.A.isLurking(l.guild_id))
        return void O({ guildId: l.guild_id, title: L.intl.string(L.t["7LpysO"]), body: L.intl.string(L.t["5sHHoy"]) });
    let a = v.A.getMessage(t, n);
    if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
    let r = i ?? String(a.poll.answers[0].answer_id);
    S.W({ message: a, initialAnswerId: r });
}
function D(e) {
    let { channelId: t, messageId: n, isEditing: i } = e;
    (0, y.A2)(t, n, (e) => ({
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: !1,
        editing: i,
        showResults: e?.showResults ?? !1,
    }));
}
function k(e) {
    let { channelId: t, messageId: n } = e,
        i = v.A.getMessage(t, n);
    return null == i ? [] : i.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function U(e) {
    let { channelId: t, messageId: n, answerIds: i } = e,
        l = k({ channelId: t, messageId: n }),
        a = r().difference(l, i),
        s = r().difference(i, l),
        d = E.default.getId(),
        u = [
            ...a.map((e) => ({ type: "MESSAGE_REACTION_REMOVE", id: e })),
            ...s.map((e) => ({ type: "MESSAGE_REACTION_ADD", id: e })),
        ],
        m = o.Ay.Emitter.batched(() => {
            let e;
            for (let { id: i, type: l } of u)
                e = c.h.dispatch({
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
    null != m && (await m);
}
async function w(e) {
    let { channelId: t, messageId: n } = e,
        i = C.A.getChannel(t);
    if (null == i) return;
    if (g.A.isLurking(i.guild_id))
        return void O({ guildId: i.guild_id, title: L.intl.string(L.t.Qic1FD), body: L.intl.string(L.t["5sHHoy"]) });
    if (!T.A.canChatInGuild(i.guild_id))
        return void u.A.show({ title: L.intl.string(L.t.p245wu), body: L.intl.string(L.t["U/uodt"]) });
    let a = (0, y.xt)(t, n);
    l()(null != a, "Must not be able to vote without existing state!");
    let r = k({ channelId: t, messageId: n });
    try {
        let e = [...a.selectedAnswerIds.values()];
        (0, y.A2)(
            t,
            n,
            (e) => (
                l()(null != e, "Must not be able to vote without existing state!"),
                { ...e, submitting: !0, editing: !1 }
            ),
        ),
            await U({ channelId: t, messageId: n, answerIds: e }),
            await b.Q({ channelId: t, messageId: n, answerIds: e }),
            (0, y.A2)(t, n, () => void 0),
            d.OR.announce(0 === e.length ? L.intl.string(L.t["xcvy+3"]) : L.intl.string(L.t.o20GSo));
    } catch (e) {
        u.A.show({
            title: L.intl.string(L.t.iufib1),
            body: e.getAnyErrorMessage?.() ?? e.message ?? L.intl.string(L.t.eAn6z2),
        }),
            await U({ channelId: t, messageId: n, answerIds: r }),
            (0, y.A2)(t, n, (e) => {
                if (null != e) return { ...e, submitting: !1, editing: !1 };
            });
    }
}
async function G(e) {
    let { channelId: t, messageId: n } = e,
        i = C.A.getChannel(t);
    if (null != i)
        return g.A.isLurking(i.guild_id)
            ? void O({ guildId: i.guild_id, title: L.intl.string(L.t.B9QnBp), body: L.intl.string(L.t.BVZCTn) })
            : ((0, y.A2)(t, n, (e) => ({
                  channelId: t,
                  selectedAnswerIds: new Set(),
                  submitting: !1,
                  editing: !1,
                  showResults: e?.showResults ?? !1,
              })),
              await w({ channelId: t, messageId: n }));
}
async function B(e) {
    let { channelId: t, messageId: n, type: i } = e;
    switch (i) {
        case "submit":
            await w({ channelId: t, messageId: n });
            break;
        case "remove":
            await G({ channelId: t, messageId: n });
            break;
        case "cancel":
            D({ channelId: t, messageId: n, isEditing: !1 });
            break;
        case "showVotes":
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, y.A2)(t, n, (e) => {
                    let i = null == e || !e.showResults,
                        l = v.A.getMessage(t, n),
                        a = null != l ? l.reactions.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0) : 0;
                    return (
                        p.Ay.trackWithMetadata(R.HAw.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: i,
                            votes_count: a,
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
            P({ channelId: t, messageId: n });
            break;
        default:
            l()(!1, `Unknown poll action type: ${i}`);
    }
}
let F = {
    handlePollAnswerTapped: function (e) {
        let { answerId: t, ...n } = e,
            {
                channelId: i,
                messageId: a,
                message: r,
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    i = v.A.getMessage(t, n);
                if (null != i) return { message: i, channelId: t, messageId: n };
                let a = x.A.getMessage(t, n);
                if (null != a.message) return { channelId: t, messageId: n, message: a.message };
                throw (l()(null != i, "Tapped on a non-existent poll message"), Error());
            })(n),
            { tapShouldOpenVotersModal: s } = (0, j.j8)(r) ?? {};
        if (!0 === s) return void P({ channelId: i, messageId: a, answerId: t });
        let o = r.poll?.allow_multiselect;
        (0, y.A2)(i, a, (e) => {
            if (null == e) {
                let e = new Set([t]),
                    {
                        analyticsSelectedAnswerIds: n,
                        selectedTextAnswersCount: l,
                        selectedEmojiAnswersCount: s,
                    } = M(r.poll?.answers, e);
                return (
                    p.Ay.trackWithMetadata(R.HAw.POLL_VOTE_SELECTED, {
                        channel_id: i,
                        message_id: a,
                        selected_answer_ids: n,
                        selected_text_answers_count: l,
                        selected_emoji_answers_count: s,
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
                analyticsSelectedAnswerIds: s,
                selectedTextAnswersCount: d,
                selectedEmojiAnswersCount: c,
            } = M(r.poll?.answers, l);
            return (
                p.Ay.trackWithMetadata(R.HAw.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: a,
                    selected_answer_ids: s,
                    selected_text_answers_count: d,
                    selected_emoji_answers_count: c,
                }),
                n
            );
        });
    },
    handlePollSubmitVote: w,
    handleUpdateVoteEditingState: D,
    handlePollActionTapped: B,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: i, allowMultiSelect: l, duration: a, layout: r, onClose: o } = e,
            d = N.A.getUploads(t.id, I.C.Poll),
            c = i.map((e) => {
                let t = d?.findIndex((t) => t.id === e.localCreationAnswerId),
                    n = { attachment_ids: -1 !== t ? [`${t}`] : void 0 };
                r === s.Z.DEFAULT && (n.text = e.text?.trim());
                let i = e.image?.emoji;
                return (
                    null != i &&
                        (null != i.id
                            ? (n.emoji = { id: i.id, name: "" })
                            : null != i.optionallyDiverseSequence && (n.emoji = { name: i.optionallyDiverseSequence })),
                    { poll_media: n }
                );
            }),
            u = { question: { text: n.trim() }, answers: c, allow_multiselect: l, duration: a, layout_type: r };
        try {
            await _.A.sendPollMessage(t.id, u, {
                attachmentsToUpload: d,
                onAttachmentUploadError: (e, n, i) => {
                    (0, A.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
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
        (await u.A.confirm({ title: L.intl.string(L.t["+rfkTK"]), body: L.intl.string(L.t.H2I1gL) })) &&
            (await b.w({ channelId: t, messageId: n }));
    },
};
