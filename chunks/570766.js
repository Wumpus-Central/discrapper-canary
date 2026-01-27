n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(126031),
    s = n(397927),
    o = n(438437),
    c = n(306417),
    u = n(985018),
    d = n(603112);

function p(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, r.jsxs)("div", {
        className: d.AA,
        children: [
            t &&
                (0, r.jsx)(a.s, {
                    children: u.intl.string(u.t["8DAM+5"]),
                }),
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

function m(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: a } = e,
        s = !0 === t.isSelected,
        o = !0 === t.didSelfVote,
        u = !0 === t.isVictor;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Dt, {
                attachmentClassName: l()(d.oh, {
                    [d.Wx]: a,
                }),
                emojiClassName: d.Zg,
                media: t.pollMedia,
                fallback: (0, r.jsx)("div", {
                    className: l()(d.oh, d.nb),
                }),
            }),
            s &&
                (0, r.jsx)(c.Vx, {
                    size: 40,
                    isVictor: u,
                    isExpired: n,
                    className: d.Dt,
                }),
            a &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p, {
                            didSelfVote: o,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: o ? i : void 0,
                        }),
                        ((!n && o) || u) &&
                            (0, r.jsx)(c.Vx, {
                                size: 18,
                                isVictor: u,
                                isExpired: n,
                                className: d.Po,
                            }),
                    ],
                }),
        ],
    });
}

function f(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
    return (0, r.jsx)(
        c.Fh,
        (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                className: d.ry,
                answerClassName: l()(d.ZF, {
                    [d.EK]: i !== o.CQ.LIST,
                }),
                myAvatarUrl: n,
                answersInteraction: i,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(m, {
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
