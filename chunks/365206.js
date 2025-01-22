n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(867824),
    o = n(481060),
    s = n(839963),
    c = n(139256),
    u = n(388032),
    d = n(590222);
function m(e) {
    let { didSelfVote: t, label: n, percentage: r } = e;
    return (0, i.jsxs)('div', {
        className: d.votesData,
        children: [
            t && (0, i.jsx)(a.T, { children: u.intl.string(u.t['8DAM+/']) }),
            (0, i.jsxs)(o.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: [r, '%']
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                color: 'none',
                children: n
            })
        ]
    });
}
function h(e) {
    let { answer: t, isExpired: n, myAvatarUrl: r, canShowVoteCounts: a } = e,
        o = !0 === t.isSelected,
        s = !0 === t.didSelfVote,
        u = !0 === t.isVictor;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.$w, {
                attachmentClassName: l()(d.attachment, { [d.attachmentWithResults]: a }),
                emojiClassName: d.emoji,
                media: t.pollMedia,
                fallback: (0, i.jsx)('div', { className: l()(d.attachment, d.mediaMissing) })
            }),
            o &&
                (0, i.jsx)(c.ZY, {
                    size: 40,
                    isVictor: u,
                    isExpired: n,
                    className: d.selectedIcon
                }),
            a &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m, {
                            didSelfVote: s,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: s ? r : void 0
                        }),
                        ((!n && s) || u) &&
                            (0, i.jsx)(c.ZY, {
                                size: 18,
                                isVictor: u,
                                isExpired: n,
                                className: d.pollAnswerIcon
                            })
                    ]
                })
        ]
    });
}
function f(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: r, canShowVoteCounts: a, ...o } = e;
    return (0, i.jsx)(c.$e, {
        className: d.answersContainer,
        answerClassName: l()(d.answer, { [d.currentlyVoting]: r !== s.Y7.LIST }),
        myAvatarUrl: n,
        answersInteraction: r,
        renderAnswerContent: (e) =>
            (0, i.jsx)(h, {
                answer: e,
                isExpired: t,
                myAvatarUrl: n,
                answersInteraction: r,
                canShowVoteCounts: a
            }),
        ...o
    });
}
