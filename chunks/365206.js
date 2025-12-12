n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(485853),
    s = n(481060),
    l = n(839963),
    c = n(139256),
    u = n(388032),
    d = n(33470);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = 40,
    g = 18;
function E(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, r.jsxs)("div", {
        className: d.votesData,
        children: [
            t && (0, r.jsx)(a.T, { children: u.intl.string(u.t["8DAM+5"]) }),
            (0, r.jsxs)(s.Text, {
                variant: "text-md/semibold",
                color: "none",
                children: [i, "%"],
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-xs/semibold",
                color: "none",
                children: n,
            }),
        ],
    });
}
function b(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: a } = e,
        s = !0 === t.isSelected,
        l = !0 === t.didSelfVote,
        u = !0 === t.isVictor;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.$w, {
                attachmentClassName: o()(d.attachment, { [d.attachmentWithResults]: a }),
                emojiClassName: d.emoji,
                media: t.pollMedia,
                fallback: (0, r.jsx)("div", { className: o()(d.attachment, d.mediaMissing) }),
            }),
            s &&
                (0, r.jsx)(c.ZY, {
                    size: h,
                    isVictor: u,
                    isExpired: n,
                    className: d.selectedIcon,
                }),
            a &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E, {
                            didSelfVote: l,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: l ? i : void 0,
                        }),
                        ((!n && l) || u) &&
                            (0, r.jsx)(c.ZY, {
                                size: g,
                                isVictor: u,
                                isExpired: n,
                                className: d.pollAnswerIcon,
                            }),
                    ],
                }),
        ],
    });
}
function y(e) {
    var { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: a } = e,
        s = _(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
    return (0, r.jsx)(
        c.$e,
        p(
            {
                className: d.answersContainer,
                answerClassName: o()(d.answer, { [d.currentlyVoting]: i !== l.Y7.LIST }),
                myAvatarUrl: n,
                answersInteraction: i,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(b, {
                        answer: e,
                        isExpired: t,
                        myAvatarUrl: n,
                        answersInteraction: i,
                        canShowVoteCounts: a,
                    }),
            },
            s,
        ),
    );
}
