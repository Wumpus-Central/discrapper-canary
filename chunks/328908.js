n.d(t, {
    GA: () => c,
    Hb: () => l,
    Hi: () => f,
    LN: () => d,
    Ne: () => o,
    OG: () => y,
    Qj: () => v,
    Qy: () => g,
    Rg: () => u,
    b7: () => I,
    q5: () => p,
    t0: () => E,
    z8: () => _
});
var i = n(15729),
    r = n(731965);
let a = Object.freeze({
        messageSendConfetti: {},
        messageReactionConfetti: void 0
    }),
    s = (0, i.U)(() => a),
    o = (e) => {
        (0, r.j)(() => {
            s.setState((t) => {
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
    l = (e) => {
        (0, r.j)(() => {
            s.setState((t) => {
                let { messageSendConfetti: n } = t,
                    i = { ...n };
                return delete i[e], { messageSendConfetti: i };
            });
        });
    },
    u = (e) => {
        null != s.getState().messageSendConfetti[e] ? l(e) : o(e);
    },
    c = (e) => {
        let t = s.getState();
        null != t.messageSendConfetti[e] && 0 === t.messageSendConfetti[e].state && (t.messageSendConfetti[e].hasAutoPopped = !0);
    };
function d(e) {
    return s((t) => null != t.messageSendConfetti[e]);
}
function f(e, t) {
    return (0, r.j)(() => {
        s.setState((n) => {
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
function _(e) {
    return s((t) => {
        var n;
        return null === (n = t.messageSendConfetti[e]) || void 0 === n ? void 0 : n.emoji;
    });
}
function p(e) {
    var t;
    return null === (t = s.getState().messageSendConfetti[e]) || void 0 === t ? void 0 : t.emoji;
}
function h(e) {
    return null != s.getState().messageSendConfetti[e];
}
function m(e) {
    return (0, r.j)(() => {
        s.setState(() => ({ messageReactionConfetti: e }));
    });
}
function g() {
    return (0, r.j)(() => {
        s.setState(() => ({ messageReactionConfetti: void 0 }));
    });
}
function E(e, t, n) {
    n ? m(e) : f(e, t);
}
function v(e, t) {
    return s((n) => {
        var i;
        return t ? n.messageReactionConfetti : null === (i = n.messageSendConfetti[e]) || void 0 === i ? void 0 : i.emoji;
    });
}
function y(e) {
    return s((t) => {
        let n = t.messageSendConfetti[e];
        if ((null == n ? void 0 : n.state) === 0) return n.hasAutoPopped;
    });
}
function I(e, t, n) {
    if (t) return !1;
    let i = h(e),
        r = p(e);
    return i && (0 === n || null == r);
}
