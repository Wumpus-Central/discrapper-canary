n.d(t, { Ls: () => T, Ay: () => b, j8: () => S, Ej: () => y }), n(801541);
var i = n(889137),
    l = n(966974),
    s = n(775602),
    r = n(159273),
    a = n(7584),
    o = n(229527),
    d = n(316031),
    c = n(734057),
    u = n(696451),
    m = n(232835),
    h = n(287809),
    g = n(486020),
    p = n(690521),
    A = n(723702),
    x = n(862780),
    f = n(969632),
    E = n(438437),
    I = n(617754);
let C = (0, n(735438).memoize)(
    function (e) {
        let t,
            { theme: n, layoutType: s } = e;
        return {
            styles: {
                loserSelected: (t = (0, i.YW)(s)
                    .with(l.Z.IMAGE_ONLY_ANSWERS, () => I.EK)
                    .otherwise(() => I.fD)),
                normal: t,
                notVoted: t,
                selected: t,
                voted: I.pq,
                victorSelected: I.iu,
                victorNotSelected: I.iu,
                normalVote: t,
            },
        };
    },
    (e) => {
        let { theme: t, layoutType: n } = e;
        return `${t}:${n}`;
    },
);
var v = n(708676),
    _ = n(652215),
    j = n(375708);
let N = { channelId: _.dJq, selectedAnswerIds: new Set(), submitting: !1, editing: !1, showResults: !1 };
function y(e, t) {
    for (let n of e) if (("number" == typeof n.emoji.id ? `${n.emoji.id}` : n.emoji.id) === t) return n;
}
function T(e) {
    return null == e.poll || m.A.getMessage(e.channel_id, e.id) === e;
}
function S(e, t) {
    let { formattedExpirationLabel: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: i } = e;
    if (null == i) return;
    let l = e.state === _.cmJ.SENT,
        s = l ? (n ?? (0, v.J)(i.expiry)) : "",
        r = null == s && l,
        {
            selectedAnswerIds: a,
            submitting: h,
            editing: g,
            showResults: p,
        } = t ?? (0, x.xt)(e.getChannelId(), e.id) ?? N,
        A = e.reactions,
        f = !0;
    if (!T(e)) {
        let t = m.A.getMessage(e.channel_id, e.id);
        (f = !e.isSearchHit && null != t), (A = t?.reactions ?? A);
    }
    let E = a.size > 0,
        I = A.some((e) => !0 === e.me_vote),
        C = !g && I,
        j = C || r || p,
        y = l && f && (!I || g || j),
        S = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        b = null != S ? u.Ay.getSelfMember(S) : null,
        L = (0, o.TR)(b),
        R = (0, d.Z)(b),
        k = !h && E && !C && l && !L && !R;
    return {
        poll: i,
        canTapAnswers: y,
        canRemoveVote: C && l && !r,
        canShowVoteCounts: j,
        canSubmitVote: k,
        expirationLabel: s,
        hasSelectedAnswer: E,
        hasVoted: C,
        hasVoteRecorded: I,
        isEditingVote: g,
        isExpired: r,
        isInteractive: f,
        isSent: l,
        reactions: A,
        selectedAnswerIds: a,
        submitting: h,
        tapShouldOpenVotersModal: j,
        showResults: p,
    };
}
function b(e, t) {
    let {
            animateEmoji: n = !1,
            theme: o = "dark",
            formattedExpirationLabel: d,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { poll: u } = e;
    if (null == u) return;
    let m = h.default.getCurrentUser();
    if (null == m) return;
    let x = s.A.useReducedMotion,
        I = c.A.getChannel(e.getChannelId())?.getGuildId?.(),
        v = m.getAvatarURL(I, 20, !1),
        _ = u.answers,
        N = u.layout_type,
        T = S(e, t, { formattedExpirationLabel: d });
    if (null == T) return;
    let {
            canTapAnswers: b,
            canRemoveVote: L,
            canShowVoteCounts: R,
            canSubmitVote: k,
            expirationLabel: M = j.intl.string(j.t["e+J3JZ"]),
            hasSelectedAnswer: P,
            hasVoted: w,
            isEditingVote: D,
            isExpired: O,
            isInteractive: U,
            reactions: G,
            selectedAnswerIds: V,
            submitting: B,
            tapShouldOpenVotersModal: H,
            showResults: F,
        } = T,
        z = (0, f.aw)(G),
        Y = j.intl.formatToPlainString(j.t.XRkuof, { count: z }),
        W = Math.max(
            ..._.map((e) => {
                let t = y(G, `${e.answer_id}`);
                return t?.count_details?.vote ?? 0;
            }),
        ),
        K = _.map((e) => {
            let t,
                s = `${e.answer_id}`,
                o = y(G, s),
                d = o?.count_details?.vote ?? 0,
                c = 0 === z ? 0 : d / z,
                u = V.has(s),
                m = d >= W && 0 !== d,
                h = w && (o?.me_vote ?? !1),
                A =
                    ((t = { didSelfVote: h, hasVoted: w, isExpired: O, isSelected: u, isLeader: m, showResults: F }),
                    (0, i.YW)(t)
                        .with({ isExpired: !0, isLeader: !0, didSelfVote: !0 }, () => "victorSelected")
                        .with({ isExpired: !0, isLeader: !0, didSelfVote: !1 }, () => "victorNotSelected")
                        .with({ isExpired: !0, didSelfVote: !0 }, () => "loserSelected")
                        .with({ isExpired: !0 }, () => "notVoted")
                        .with({ didSelfVote: !0, isExpired: !1 }, () => "voted")
                        .with({ hasVoted: !0, isExpired: !1 }, () => "notVoted")
                        .with({ isSelected: !0 }, () => "selected")
                        .with({ isExpired: !1, showResults: !0 }, () => "notVoted")
                        .otherwise(() => "normalVote"));
            return {
                answerId: s,
                pollMedia: {
                    text: e.poll_media.text,
                    emoji: (function (e) {
                        let { animateEmoji: t = !1, size: n = 48 } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (null == e) return;
                        let i = e.animated;
                        null == i && null != e.id && (i = r.Ay.getCustomEmojiById(e.id)?.animated ?? !1);
                        let l = t && (i ?? !1);
                        return {
                            id: null == e.id ? null : `${e.id}`,
                            name: e.name,
                            displayName: null == e.id ? a.Ay.convertSurrogateToName(e.name) : e.name,
                            src:
                                null == e.id
                                    ? p.Ay.getURL(e.name)
                                    : g.Ay.getEmojiURL({ id: e.id, animated: l, size: n }),
                            animated: l,
                        };
                    })(e.poll_media.emoji, { animateEmoji: n }),
                    stickerId: e.poll_media.sticker_id,
                    attachmentIds: e.poll_media.attachment_ids,
                },
                isSelected: u,
                isVictor: O && m,
                didSelfVote: h,
                style: A,
                shouldAnimateTransition: B && !x,
                votesPercentage: Math.round(100 * c),
                votes: (0, i.YW)(N)
                    .with(l.Z.IMAGE_ONLY_ANSWERS, () => `(${d.toLocaleString()})`)
                    .otherwise(() => j.intl.formatToPlainString(j.t.XRkuof, { count: d })),
            };
        }),
        J = (0, i.YW)({
            isExpired: O,
            canSubmitVote: k,
            hasVoted: w,
            isEditingVote: D,
            canRemoveVote: L,
            isInteractive: U,
            showResults: F,
        })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ isEditingVote: !0 }, () => ({
                label: j.intl.string(j.t.JwkNU4),
                presentation: "button",
                enabled: P,
                type: "submit",
            }))
            .with({ canRemoveVote: !0 }, () => ({
                label: j.intl.string(j.t.XhQEh8),
                presentation: "secondaryButton",
                enabled: !0,
                type: "remove",
            }))
            .with({ hasVoted: !1, showResults: !0 }, () => ({
                label: j.intl.string(j.t.gNj6In),
                presentation: "secondaryButton",
                enabled: !0,
                type: "showVotes",
            }))
            .otherwise(() => ({
                label: j.intl.string(j.t.JwkNU4),
                presentation: "button",
                enabled: k,
                type: "submit",
            })),
        q = (0, A.isIOS)() ? j.intl.string(j.t["PVATM/"]) : j.intl.string(j.t.cHfFql),
        X = (0, i.YW)({ isExpired: O, isInteractive: U, isEditingVote: D })
            .with({ isInteractive: !1, isExpired: !1 }, () => ({
                label: j.intl.string(j.t.trrip0),
                presentation: "text",
                enabled: !1,
            }))
            .with({ isEditingVote: !0 }, () => ({
                label: j.intl.string(j.t["ETE/oC"]),
                presentation: "textButton",
                enabled: !0,
                type: "cancel",
            }))
            .otherwise(() => ({
                label: Y,
                secondaryLabel: M,
                accessibilityHint: q,
                presentation: "text",
                enabled: !0,
                type: "showVoterDetails",
            })),
        Z =
            !U || O || w || F
                ? void 0
                : { label: j.intl.string(j.t["/KHAUF"]), presentation: "textButton", enabled: !0, type: "showVotes" },
        Q = u.allow_multiselect,
        $ = (0, i.YW)({ isInteractive: U, isExpired: O, canSelectMultipleAnswers: Q })
            .with({ isInteractive: !1 }, () => void 0)
            .with({ isExpired: !0 }, () => void 0)
            .with({ canSelectMultipleAnswers: !0 }, () => j.intl.string(j.t.yCXvxa))
            .otherwise(() => j.intl.string(j.t["9Y2wKO"]));
    return {
        question: u.question,
        promptLabel: $,
        answers: K,
        answersInteraction: (0, i.YW)({ tapShouldOpenVotersModal: H, canTapAnswers: b, canSelectMultipleAnswers: Q })
            .with({ tapShouldOpenVotersModal: !0 }, () => E.CQ.LIST)
            .with({ canTapAnswers: !1 }, () => E.CQ.LIST)
            .with({ canSelectMultipleAnswers: !1 }, () => E.CQ.RADIO_BUTTONS)
            .with({ canSelectMultipleAnswers: !0 }, () => E.CQ.CHECKBOXES)
            .exhaustive(),
        answerTapAccessibilityLabel: H ? q : void 0,
        layoutType: N,
        resources: C({ theme: o, layoutType: N }),
        containerStyle: "normal",
        primaryAction: J,
        isInteractive: U,
        canTapAnswers: b,
        canSelectMultipleAnswers: Q,
        hasSelectedAnswer: P,
        canShowVoteCounts: R,
        hasVoted: w,
        isExpired: O,
        myAvatarUrl: v,
        secondaryAction: X,
        tertiaryAction: Z,
    };
}
