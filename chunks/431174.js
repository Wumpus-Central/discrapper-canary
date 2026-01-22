n.d(t, {
    j: () => x,
}),
    n(896048),
    n(801541);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(126031),
    l = n(108531),
    c = n(889137),
    u = n(615300),
    d = n(990078),
    f = n(397927),
    p = n(915089),
    _ = n(956703),
    h = n(180662),
    m = n(969632),
    g = n(438437),
    E = n(306417),
    b = n(290794),
    y = n(985018),
    O = n(121272);

function A(e, t, n) {
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

function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
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
    if (((a = I(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let T = 24,
    C = 24,
    N = 20;

function R(e) {
    let { percentage: t, label: n, canShowVoterDetails: a, answerId: s } = e,
        l = (0, p.GV)(),
        { channelId: c, messageId: u } = (0, b.Tu)(),
        [g, E] = i.useState(""),
        [y, A] = i.useState(!1),
        v = "" !== g && y,
        S = i.useCallback(() => {
            E((0, m.$m)(u, c, s));
        }, [u, c, s]),
        I = i.useCallback(() => {
            S(), A(!0);
        }, [S]),
        T = i.useCallback(() => {
            A(!1);
        }, []),
        C = i.useCallback(() => {
            (0, h.e)({
                channelId: c,
                messageId: u,
                answerId: s,
            });
        }, [c, u, s]);
    return (
        i.useEffect(() => {
            if (y)
                return (
                    _.A.addReactChangeListener(S),
                    () => {
                        _.A.removeReactChangeListener(S);
                    }
                );
        }, [y, S]),
        (0, r.jsxs)("div", {
            className: O.AA,
            children: [
                a
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              "" !== g
                                  ? (0, r.jsx)(d.m, {
                                        __unsupportedReactNodeAsText: (0, r.jsx)(f.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            scaleFontToUserSetting: !0,
                                            children: g,
                                        }),
                                        forceOpen: v,
                                        "aria-label": !1,
                                        children: (0, r.jsx)(f.QWc, {
                                            onMouseEnter: I,
                                            onMouseLeave: T,
                                            onFocus: I,
                                            onBlur: T,
                                            onClick: C,
                                            "aria-describedby": v ? l : void 0,
                                            text: n,
                                            variant: "secondary",
                                            textVariant: "text-xs/semibold",
                                        }),
                                    })
                                  : (0, r.jsx)(f.QWc, {
                                        onMouseEnter: I,
                                        onMouseLeave: T,
                                        onFocus: I,
                                        onBlur: T,
                                        onClick: C,
                                        text: n,
                                        variant: "secondary",
                                        textVariant: "text-xs/semibold",
                                    }),
                              v &&
                                  (0, r.jsx)(o.s, {
                                      id: l,
                                      children: g,
                                  }),
                          ],
                      })
                    : (0, r.jsx)(f.Text, {
                          variant: "text-xs/semibold",
                          color: "none",
                          scaleFontToUserSetting: !0,
                          children: n,
                      }),
                (0, r.jsxs)(f.Text, {
                    variant: "text-md/bold",
                    color: "none",
                    scaleFontToUserSetting: !0,
                    children: [t, "%"],
                }),
            ],
        })
    );
}

function w(e) {
    let { percentage: t, shouldAnimate: n } = e,
        i = (0, f.zhh)(
            {
                from: {
                    width: n ? "0%" : "".concat(t, "%"),
                },
                to: {
                    width: "".concat(t, "%"),
                },
                config: {
                    duration: 1200,
                    easing: u.A.Easing.inOut(u.A.Easing.ease),
                },
            },
            "animate-always",
        );
    return (0, r.jsx)(l.animated.span, {
        className: O.an,
        style: i,
        "aria-hidden": !0,
    });
}

function P(e) {
    let { answersInteraction: t, isSelected: n, didSelfVote: i, isVictor: a, isExpired: s, className: o } = e;
    return (0, c.YW)({
        answersInteraction: t,
        didSelfVote: i,
    })
        .with(
            {
                answersInteraction: g.CQ.RADIO_BUTTONS,
            },
            () =>
                (0, r.jsx)(E.k$, {
                    isSelected: n,
                    size: C,
                    className: o,
                }),
        )
        .with(
            {
                answersInteraction: g.CQ.CHECKBOXES,
            },
            () =>
                (0, r.jsx)(E.e5, {
                    isSelected: n,
                    size: N,
                    className: o,
                }),
        )
        .with(
            {
                answersInteraction: g.CQ.LIST,
                didSelfVote: !0,
            },
            () =>
                (0, r.jsx)(E.Vx, {
                    isVictor: a,
                    isExpired: s,
                    size: T,
                    className: o,
                }),
        )
        .otherwise(() => null);
}

function D(e) {
    let { answer: t, isExpired: n, answersInteraction: i, canShowVoteCounts: a, canShowVoterDetails: l } = e,
        c = !0 === t.isSelected,
        u = !0 === t.didSelfVote,
        d = !0 === t.isVictor,
        p = t.shouldAnimateTransition;
    return (0, r.jsxs)("div", {
        className: s()(O.Fk, {
            [O.EK]: i !== g.CQ.LIST,
            [O.wH]: c,
        }),
        children: [
            a
                ? (0, r.jsx)(w, {
                      percentage: t.votesPercentage,
                      shouldAnimate: p,
                  })
                : null,
            null != t.pollMedia.emoji &&
                (0, r.jsx)(E.Fb, {
                    className: O.Zg,
                    emoji: t.pollMedia.emoji,
                }),
            (0, r.jsx)(f.Text, {
                className: O.Pf,
                variant: "text-sm/semibold",
                color: "none",
                scaleFontToUserSetting: !0,
                children: t.pollMedia.text,
            }),
            t.didSelfVote &&
                (0, r.jsx)(o.s, {
                    children: y.intl.string(y.t["8DAM+5"]),
                }),
            a &&
                (0, r.jsx)(R, {
                    percentage: t.votesPercentage,
                    label: t.votes,
                    canShowVoterDetails: l,
                    answerId: t.answerId,
                }),
            (0, r.jsx)(P, {
                answersInteraction: i,
                isSelected: c,
                didSelfVote: u,
                isVictor: d,
                isExpired: n,
                className: O.ck,
            }),
        ],
    });
}

function x(e) {
    let { isExpired: t, answersInteraction: n, canShowVoteCounts: i, canTapAnswers: a } = e,
        s = S(e, ["isExpired", "answersInteraction", "canShowVoteCounts", "canTapAnswers"]);
    return (0, r.jsx)(
        E.Fh,
        v(
            {
                className: O.ry,
                answerClassName: O.ZF,
                answersInteraction: n,
                canTapAnswers: a,
                renderAnswerContent: (e) =>
                    (0, r.jsx)(D, {
                        answer: e,
                        isExpired: t,
                        answersInteraction: n,
                        canShowVoteCounts: i,
                        canShowVoterDetails: a,
                    }),
            },
            s,
        ),
    );
}
