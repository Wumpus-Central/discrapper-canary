n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(867824),
    s = n(481060),
    o = n(839963),
    c = n(139256),
    d = n(388032),
    u = n(266179);
function m(e) {
    let { didSelfVote: t, label: n, percentage: l } = e;
    return (0, i.jsxs)('div', {
        className: u.votesData,
        children: [
            t && (0, i.jsx)(r.T, { children: d.intl.string(d.t['8DAM+/']) }),
            (0, i.jsxs)(s.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: [l, '%']
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/semibold',
                color: 'none',
                children: n
            })
        ]
    });
}
function _(e) {
    let { answer: t, isExpired: n, myAvatarUrl: l, canShowVoteCounts: r } = e,
        s = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        d = !0 === t.isVictor;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.$w, {
                attachmentClassName: a()(u.attachment, { [u.attachmentWithResults]: r }),
                emojiClassName: u.emoji,
                media: t.pollMedia,
                fallback: (0, i.jsx)('div', { className: a()(u.attachment, u.mediaMissing) })
            }),
            s &&
                (0, i.jsx)(c.ZY, {
                    size: 40,
                    isVictor: d,
                    isExpired: n,
                    className: u.selectedIcon
                }),
            r &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m, {
                            didSelfVote: o,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: o ? l : void 0
                        }),
                        ((!n && o) || d) &&
                            (0, i.jsx)(c.ZY, {
                                size: 18,
                                isVictor: d,
                                isExpired: n,
                                className: u.pollAnswerIcon
                            })
                    ]
                })
        ]
    });
}
function h(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: l, canShowVoteCounts: r, ...s } = e;
    return (0, i.jsx)(c.$e, {
        className: u.answersContainer,
        answerClassName: a()(u.answer, { [u.currentlyVoting]: l !== o.Y7.LIST }),
        myAvatarUrl: n,
        answersInteraction: l,
        renderAnswerContent: (e) =>
            (0, i.jsx)(_, {
                answer: e,
                isExpired: t,
                myAvatarUrl: n,
                answersInteraction: l,
                canShowVoteCounts: r
            }),
        ...s
    });
}
