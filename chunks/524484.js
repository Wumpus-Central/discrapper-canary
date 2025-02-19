function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n.d(t, {
    Hn: () => s,
    JR: () => d,
    oZ: () => l,
    qi: () => c,
    u4: () => f
}),
    n(47120);
var s = (function (e) {
        return (e[(e.CHAT_INPUT = 0)] = 'CHAT_INPUT'), (e[(e.REACTION = 1)] = 'REACTION'), (e[(e.MEMBER_USER = 2)] = 'MEMBER_USER'), (e[(e.CALL_TILE = 3)] = 'CALL_TILE'), e;
    })({}),
    l = (function (e) {
        return (e[(e.CHAT_INPUT = 0)] = 'CHAT_INPUT'), (e[(e.VOICE_USER = 1)] = 'VOICE_USER'), (e[(e.MENTION = 2)] = 'MENTION'), e;
    })({}),
    c = (function (e) {
        return (e[(e.LEVEL_1 = 0)] = 'LEVEL_1'), (e[(e.LEVEL_2 = 1)] = 'LEVEL_2'), (e[(e.LEVEL_3 = 2)] = 'LEVEL_3'), (e[(e.LEVEL_4 = 3)] = 'LEVEL_4'), (e[(e.LEVEL_5 = 4)] = 'LEVEL_5'), e;
    })({});
let u = {
        0: [
            [1, 0.0001],
            [25, 0.05],
            [50, 0.1],
            [100, 0.5],
            [250, 1],
            [500, 2],
            [1000, 3],
            [9001, 4]
        ],
        1: [
            [1, 0.0001],
            [25, 0.25],
            [50, 0.5],
            [100, 1],
            [250, 2.5],
            [500, 5],
            [1000, 7.5],
            [9001, 10]
        ],
        2: [
            [1, 0.001],
            [25, 0.5],
            [50, 1],
            [100, 2],
            [250, 4],
            [500, 8],
            [1000, 12],
            [9001, 16]
        ],
        3: [
            [1, 0.25],
            [25, 0.75],
            [50, 1],
            [100, 2],
            [250, 4],
            [500, 8],
            [1000, 20],
            [9001, 50]
        ],
        4: [
            [1, 0.001],
            [25, 0.5],
            [50, 1],
            [100, 2],
            [250, 5],
            [500, 10],
            [1000, 100],
            [9001, 10000]
        ]
    },
    d = Object.keys(u).reduce(
        (e, t) =>
            a(i({}, e), {
                [t]: u[t].map((e) => {
                    let [t] = e;
                    return t;
                })
            }),
        {
            0: [],
            1: [],
            2: [],
            3: [],
            4: []
        }
    ),
    f = Object.keys(u).reduce(
        (e, t) =>
            a(i({}, e), {
                [t]: u[t].map((e) => {
                    let [t, n] = e;
                    return n;
                })
            }),
        {
            0: [],
            1: [],
            2: [],
            3: [],
            4: []
        }
    );
