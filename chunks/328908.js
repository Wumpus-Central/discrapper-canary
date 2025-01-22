r.d(n, {
    Hb: function () {
        return c;
    },
    Hi: function () {
        return p;
    },
    LN: function () {
        return f;
    },
    Qj: function () {
        return y;
    },
    Qy: function () {
        return E;
    },
    Rg: function () {
        return d;
    },
    q5: function () {
        return _;
    },
    rH: function () {
        return m;
    },
    t0: function () {
        return v;
    },
    z8: function () {
        return h;
    }
});
var i,
    a = r(15729),
    o = r(731965);
!(function (e) {
    (e[(e.SelectingEmoji = 0)] = 'SelectingEmoji'), (e[(e.EmojiSelected = 1)] = 'EmojiSelected');
})(i || (i = {}));
let s = Object.freeze({
        messageSendConfetti: {},
        messageReactionConfetti: void 0
    }),
    l = (0, a.U)(() => s),
    u = (e) => {
        (0, o.j)(() => {
            l.setState((n) => {
                let { messageSendConfetti: r } = n;
                return {
                    messageSendConfetti: {
                        ...r,
                        [e]: {
                            state: 0,
                            emoji: void 0
                        }
                    }
                };
            });
        });
    },
    c = (e) => {
        (0, o.j)(() => {
            l.setState((n) => {
                let { messageSendConfetti: r } = n,
                    i = { ...r };
                return delete i[e], { messageSendConfetti: i };
            });
        });
    },
    d = (e) => {
        null != l.getState().messageSendConfetti[e] ? c(e) : u(e);
    };
function f(e) {
    return l((n) => null != n.messageSendConfetti[e]);
}
function p(e, n) {
    return (0, o.j)(() => {
        l.setState((r) => {
            let { messageSendConfetti: i } = r;
            return {
                messageSendConfetti: {
                    ...i,
                    [n]: {
                        state: 1,
                        emoji: e
                    }
                }
            };
        });
    });
}
function h(e) {
    return l((n) => {
        var r;
        return null === (r = n.messageSendConfetti[e]) || void 0 === r ? void 0 : r.emoji;
    });
}
function _(e) {
    var n;
    return null === (n = l.getState().messageSendConfetti[e]) || void 0 === n ? void 0 : n.emoji;
}
function m(e) {
    return null != l.getState().messageSendConfetti[e];
}
function g(e) {
    return (0, o.j)(() => {
        l.setState(() => ({ messageReactionConfetti: e }));
    });
}
function E() {
    return (0, o.j)(() => {
        l.setState(() => ({ messageReactionConfetti: void 0 }));
    });
}
function v(e, n, r) {
    r ? g(e) : p(e, n);
}
function y(e, n) {
    return l((r) => {
        var i;
        return n ? r.messageReactionConfetti : null === (i = r.messageSendConfetti[e]) || void 0 === i ? void 0 : i.emoji;
    });
}
