n.d(t, {
    GA: () => f,
    Hb: () => c,
    Hi: () => p,
    LN: () => _,
    Ne: () => u,
    OG: () => b,
    Qj: () => I,
    Qy: () => v,
    Rg: () => d,
    b7: () => T,
    q5: () => m,
    t0: () => y,
    z8: () => h
});
var i = n(15729),
    r = n(731965),
    a = n(626135),
    s = n(981631);
let o = Object.freeze({
        messageSendConfetti: {},
        messageReactionConfetti: void 0
    }),
    l = (0, i.U)(() => o),
    u = (e, t) => {
        a.default.track(s.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, { location: t }),
            (0, r.j)(() => {
                l.setState((t) => {
                    let { messageSendConfetti: n } = t;
                    return {
                        messageSendConfetti: {
                            ...n,
                            [e]: {
                                state: 0,
                                emoji: void 0,
                                hasAutoPopped: !1
                            }
                        }
                    };
                });
            });
    },
    c = (e) => {
        (0, r.j)(() => {
            l.setState((t) => {
                let { messageSendConfetti: n } = t,
                    i = { ...n };
                return delete i[e], { messageSendConfetti: i };
            });
        });
    },
    d = (e, t) => {
        null != l.getState().messageSendConfetti[e] ? c(e) : u(e, t);
    },
    f = (e) => {
        let t = l.getState();
        null != t.messageSendConfetti[e] && 0 === t.messageSendConfetti[e].state && (t.messageSendConfetti[e].hasAutoPopped = !0);
    };
function _(e) {
    return l((t) => null != t.messageSendConfetti[e]);
}
function p(e, t) {
    return (0, r.j)(() => {
        l.setState((n) => {
            let { messageSendConfetti: i } = n;
            return {
                messageSendConfetti: {
                    ...i,
                    [t]: {
                        state: 1,
                        emoji: e
                    }
                }
            };
        });
    });
}
function h(e) {
    return l((t) => {
        var n;
        return null === (n = t.messageSendConfetti[e]) || void 0 === n ? void 0 : n.emoji;
    });
}
function m(e) {
    var t;
    return null === (t = l.getState().messageSendConfetti[e]) || void 0 === t ? void 0 : t.emoji;
}
function g(e) {
    return null != l.getState().messageSendConfetti[e];
}
function E(e) {
    return (0, r.j)(() => {
        l.setState(() => ({ messageReactionConfetti: e }));
    });
}
function v() {
    return (0, r.j)(() => {
        l.setState(() => ({ messageReactionConfetti: void 0 }));
    });
}
function y(e, t, n) {
    n ? E(e) : p(e, t);
}
function I(e, t) {
    return l((n) => {
        var i;
        return t ? n.messageReactionConfetti : null === (i = n.messageSendConfetti[e]) || void 0 === i ? void 0 : i.emoji;
    });
}
function b(e) {
    return l((t) => {
        let n = t.messageSendConfetti[e];
        if ((null == n ? void 0 : n.state) === 0) return n.hasAutoPopped;
    });
}
function T(e, t, n) {
    if (t) return !1;
    let i = g(e),
        r = m(e);
    return i && (0 === n || null == r);
}
