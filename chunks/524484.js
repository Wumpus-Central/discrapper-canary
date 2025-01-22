r.d(n, {
    Hn: function () {
        return i;
    },
    JR: function () {
        return c;
    },
    oZ: function () {
        return a;
    },
    qi: function () {
        return o;
    },
    u4: function () {
        return d;
    }
});
var i,
    a,
    o,
    s = r(724458);
var l = r(47120);
!(function (e) {
    (e[(e.CHAT_INPUT = 0)] = 'CHAT_INPUT'), (e[(e.REACTION = 1)] = 'REACTION'), (e[(e.MEMBER_USER = 2)] = 'MEMBER_USER'), (e[(e.CALL_TILE = 3)] = 'CALL_TILE');
})(i || (i = {})),
    !(function (e) {
        (e[(e.CHAT_INPUT = 0)] = 'CHAT_INPUT'), (e[(e.VOICE_USER = 1)] = 'VOICE_USER'), (e[(e.MENTION = 2)] = 'MENTION');
    })(a || (a = {})),
    !(function (e) {
        (e[(e.LEVEL_1 = 0)] = 'LEVEL_1'), (e[(e.LEVEL_2 = 1)] = 'LEVEL_2'), (e[(e.LEVEL_3 = 2)] = 'LEVEL_3'), (e[(e.LEVEL_4 = 3)] = 'LEVEL_4'), (e[(e.LEVEL_5 = 4)] = 'LEVEL_5');
    })(o || (o = {}));
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
    c = Object.keys(u).reduce(
        (e, n) => ({
            ...e,
            [n]: u[n].map((e) => {
                let [n] = e;
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
    ),
    d = Object.keys(u).reduce(
        (e, n) => ({
            ...e,
            [n]: u[n].map((e) => {
                let [n, r] = e;
                return r;
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
