n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(126031),
    r = n(834730),
    o = n(438437),
    d = n(306417),
    c = n(985018),
    u = n(233271);
function m(e) {
    let { didSelfVote: t, label: n, percentage: l } = e;
    return (0, i.jsxs)("div", {
        className: u.AA,
        children: [
            t && (0, i.jsx)(s.s, { children: c.intl.string(c.t["8DAM+5"]) }),
            (0, i.jsxs)(r.E, { variant: "text-md/semibold", color: "none", children: [l, "%"] }),
            (0, i.jsx)(r.E, { variant: "text-xs/semibold", color: "none", children: n }),
        ],
    });
}
function _(e) {
    let { answer: t, isExpired: n, myAvatarUrl: l, canShowVoteCounts: s } = e,
        r = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        c = !0 === t.isVictor;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Dt, {
                attachmentClassName: a()(u.oh, { [u.Wx]: s }),
                emojiClassName: u.Zg,
                media: t.pollMedia,
                fallback: (0, i.jsx)("div", { className: a()(u.oh, u.nb) }),
            }),
            r && (0, i.jsx)(d.Vx, { size: 40, isVictor: c, isExpired: n, className: u.Dt }),
            s &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m, {
                            didSelfVote: o,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: o ? l : void 0,
                        }),
                        ((!n && o) || c) && (0, i.jsx)(d.Vx, { size: 18, isVictor: c, isExpired: n, className: u.Po }),
                    ],
                }),
        ],
    });
}
function h(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: l, canShowVoteCounts: s, ...r } = e;
    return (0, i.jsx)(d.Fh, {
        className: u.ry,
        answerClassName: a()(u.ZF, { [u.EK]: l !== o.CQ.LIST }),
        myAvatarUrl: n,
        answersInteraction: l,
        renderAnswerContent: (e) =>
            (0, i.jsx)(_, { answer: e, isExpired: t, myAvatarUrl: n, answersInteraction: l, canShowVoteCounts: s }),
        ...r,
    });
}
