let i = "data-list-item-id";
n.d(
    t,
    {},
    {
        Aq: function (e, t, n) {
            return `${e}-${t}-${n}`;
        },
        HP: function (e) {
            return e.split("___")[1];
        },
        KE: "data-list-id",
        Lp: class {
            makeHandler;
            handlers = new Map();
            constructor(e) {
                ((this.makeHandler = e), (this.makeHandler = e));
            }
            get(e) {
                let t = this.handlers.get(e);
                return (null == t && ((t = this.makeHandler(e)), this.handlers.set(e, t)), t);
            }
            clean() {
                (delete this.handlers, (this.handlers = new Map()));
            }
        },
        M4: function (e, t) {
            return `${e}-${t}`;
        },
        Mz: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            return `[${t}="${e}"]`;
        },
        eM: i,
        nF: function (e, t) {
            let n = !1;
            return function () {
                for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                n || (e(...r), (n = !0), setTimeout(() => (n = !1), t));
            };
        },
        t$: function (e, t) {
            return `${e}___${t}`;
        },
    },
);
