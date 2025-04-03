n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(867824),
    o = n(481060),
    s = n(839963),
    c = n(139256),
    u = n(388032),
    d = n(241127);
function p(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, r.jsxs)('div', {
        className: d.votesData,
        children: [
            t && (0, r.jsx)(l.T, { children: u.NW.string(u.t['8DAM+/']) }),
            (0, r.jsxs)(o.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: [i, '%']
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-xs/semibold',
                color: 'none',
                children: n
            })
        ]
    });
}
function m(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: l } = e,
        o = !0 === t.isSelected,
        s = !0 === t.didSelfVote,
        u = !0 === t.isVictor;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.$w, {
                attachmentClassName: a()(d.attachment, { [d.attachmentWithResults]: l }),
                emojiClassName: d.emoji,
                media: t.pollMedia,
                fallback: (0, r.jsx)('div', { className: a()(d.attachment, d.mediaMissing) })
            }),
            o &&
                (0, r.jsx)(c.ZY, {
                    size: 40,
                    isVictor: u,
                    isExpired: n,
                    className: d.selectedIcon
                }),
            l &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p, {
                            didSelfVote: s,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: s ? i : void 0
                        }),
                        ((!n && s) || u) &&
                            (0, r.jsx)(c.ZY, {
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
    var { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: l } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['isExpired', 'myAvatarUrl', 'answersInteraction', 'canShowVoteCounts']);
    return (0, r.jsx)(
        c.$e,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                className: d.answersContainer,
                answerClassName: a()(d.answer, { [d.currentlyVoting]: i !== s.Y7.LIST }),
                myAvatarUrl: n,
                answersInteraction: i,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(m, {
                        answer: e,
                        isExpired: t,
                        myAvatarUrl: n,
                        answersInteraction: i,
                        canShowVoteCounts: l
                    })
            },
            o
        )
    );
}
