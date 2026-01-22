n.d(t, { A: () => y });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(126031),
    o = n(397927),
    l = n(438437),
    c = n(306417),
    u = n(985018),
    d = n(603112);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = 40,
    g = 18;
function E(e) {
    let { didSelfVote: t, label: n, percentage: i } = e;
    return (0, r.jsxs)("div", {
        className: d.AA,
        children: [
            t && (0, r.jsx)(s.s, { children: u.intl.string(u.t["8DAM+5"]) }),
            (0, r.jsxs)(o.Text, {
                variant: "text-md/semibold",
                color: "none",
                children: [i, "%"],
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-xs/semibold",
                color: "none",
                children: n,
            }),
        ],
    });
}
function b(e) {
    let { answer: t, isExpired: n, myAvatarUrl: i, canShowVoteCounts: s } = e,
        o = !0 === t.isSelected,
        l = !0 === t.didSelfVote,
        u = !0 === t.isVictor;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Dt, {
                attachmentClassName: a()(d.oh, { [d.Wx]: s }),
                emojiClassName: d.Zg,
                media: t.pollMedia,
                fallback: (0, r.jsx)("div", { className: a()(d.oh, d.nb) }),
            }),
            o &&
                (0, r.jsx)(c.Vx, {
                    size: m,
                    isVictor: u,
                    isExpired: n,
                    className: d.Dt,
                }),
            s &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E, {
                            didSelfVote: l,
                            percentage: t.votesPercentage,
                            label: t.votes,
                            myAvatarUrl: l ? i : void 0,
                        }),
                        ((!n && l) || u) &&
                            (0, r.jsx)(c.Vx, {
                                size: g,
                                isVictor: u,
                                isExpired: n,
                                className: d.Po,
                            }),
                    ],
                }),
        ],
    });
}
function y(e) {
    let { isExpired: t, myAvatarUrl: n, answersInteraction: i, canShowVoteCounts: s } = e,
        o = _(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
    return (0, r.jsx)(
        c.Fh,
        p(
            {
                className: d.ry,
                answerClassName: a()(d.ZF, { [d.EK]: i !== l.CQ.LIST }),
                myAvatarUrl: n,
                answersInteraction: i,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(b, {
                        answer: e,
                        isExpired: t,
                        myAvatarUrl: n,
                        answersInteraction: i,
                        canShowVoteCounts: s,
                    }),
            },
            o,
        ),
    );
}
