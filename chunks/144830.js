n.d(t, { Z: () => b }), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(379649),
    o = n(846519),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var p = (function (e) {
        return (
            (e.ACTIVITY_FEED = "ACTIVITY_FEED"),
            (e.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
            (e.USER_ACTIVITY = "USER_ACTIVITY"),
            (e.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
            (e.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
            e
        );
    })(p || {}),
    h = (function (e) {
        return (e.START = "START"), (e.END = "END"), (e.TIME = "TIME"), e;
    })(h || {});
let m = (e) => (t, n) => (null == n ? "" : s.intl.format(e(), c({ time: t }, n))),
    g = {
        ACTIVITY_FEED: {
            START: {
                [a.J6.SECONDS]: () => s.intl.string(s.t["ahzZr+"]),
                [a.J6.MINUTES]: (e) => s.intl.formatToPlainString(s.t["03mIHW"], { time: e }),
                [a.J6.HOURS]: (e) => s.intl.formatToPlainString(s.t.eNoooU, { time: e }),
                [a.J6.DAYS]: (e) => s.intl.formatToPlainString(s.t["2rUo/p"], { time: e }),
            },
            END: {
                [a.J6.SECONDS]: () => s.intl.string(s.t.EluAd9),
                [a.J6.MINUTES]: (e) => s.intl.formatToPlainString(s.t.BZxG8Z, { time: e }),
                [a.J6.HOURS]: (e) => s.intl.formatToPlainString(s.t.cRMUpw, { time: e }),
                [a.J6.DAYS]: (e) => s.intl.formatToPlainString(s.t.yP1T84, { time: e }),
                [a.J6.WEEKS]: (e) => s.intl.formatToPlainString(s.t.AWkdqe, { time: e }),
                [a.J6.MONTHS]: (e) => s.intl.formatToPlainString(s.t.upamA7, { time: e }),
                [a.J6.YEARS]: (e) => s.intl.formatToPlainString(s.t.vfMC2h, { time: e }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [a.J6.SECONDS]: m(() => s.t.Bf3PRU),
                [a.J6.MINUTES]: m(() => s.t["A9P+dT"]),
                [a.J6.HOURS]: m(() => s.t.KwVzfh),
                [a.J6.DAYS]: m(() => s.t.hbUpBN),
            },
            END: {
                [a.J6.SECONDS]: (e) => s.intl.formatToPlainString(s.t.C3MTOD, { seconds: e }),
                [a.J6.MINUTES]: (e) => s.intl.formatToPlainString(s.t["GqQ/Y9"], { minutes: e }),
                [a.J6.HOURS]: (e) => s.intl.formatToPlainString(s.t.c5zfWZ, { hours: e }),
                [a.J6.DAYS]: (e) => s.intl.formatToPlainString(s.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [a.J6.SECONDS]: () => s.intl.string(s.t["ahzZr+"]),
                [a.J6.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? s.intl.formatToPlainString(s.t["03mIHW"], { time: e })
                        : s.intl.formatToPlainString(s.t["vQml+P"], { time: e });
                },
                [a.J6.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? s.intl.formatToPlainString(s.t.eNoooU, { time: e })
                        : s.intl.formatToPlainString(s.t["4Wq+6x"], { time: e });
                },
                [a.J6.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? s.intl.formatToPlainString(s.t["2rUo/p"], { time: e })
                        : s.intl.formatToPlainString(s.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [a.J6.NONE]: () => s.intl.string(s.t.LqDiCt),
                [a.J6.SECONDS]: (e) => s.intl.formatToPlainString(s.t.xDIDBL, { time: e }),
                [a.J6.MINUTES]: (e) => s.intl.formatToPlainString(s.t.KGqJce, { time: e }),
                [a.J6.HOURS]: (e) => s.intl.formatToPlainString(s.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [a.J6.NONE]: () => s.intl.string(s.t.EoWLru),
                [a.J6.SECONDS]: () => s.intl.string(s.t.QTHa8b),
                [a.J6.MINUTES]: (e) => s.intl.formatToPlainString(s.t.SVEfcd, { time: e }),
                [a.J6.HOURS]: (e) => s.intl.formatToPlainString(s.t["0Gbusd"], { time: e }),
                [a.J6.DAYS]: (e) => s.intl.formatToPlainString(s.t.hnPZZ7, { time: e }),
                [a.J6.WEEKS]: (e) => s.intl.formatToPlainString(s.t.L3fTpL, { time: e }),
                [a.J6.MONTHS]: (e) => s.intl.formatToPlainString(s.t.xAFWQV, { time: e }),
                [a.J6.YEARS]: (e) => s.intl.formatToPlainString(s.t["9Yr3NW"], { time: e }),
            },
        },
    };
function E(e, t, n) {
    let r = g[n];
    if (null != r) {
        let n = r[t];
        if (null != n) return null != n[e];
    }
    return !1;
}
function b(e) {
    var t, n;
    return (
        (n = class extends (t = i.PureComponent) {
            componentDidMount() {
                this.timer.start(10000, this.update);
            }
            componentDidUpdate(e) {
                let { start: t, end: n, time: r } = this.props;
                (e.start !== t || e.end !== n || e.time !== r) && this.update();
            }
            componentWillUnmount() {
                this.timer.stop();
            }
            getDiff() {
                let { start: e, end: t, time: n } = this.props;
                if (null != n) return n / 1000 / 60;
                let r = Date.now(),
                    i = 0;
                return null != e ? (i = r - e) : null != t && (i = r - t), Math.abs(i) / 1000 / 60;
            }
            getTimeUnit(e, t, n) {
                let r = (0, a.jU)(e, (e) => E(e, n, t));
                if (null == r)
                    throw Error(
                        "Could not get the time unit in PlayTime with time: "
                            .concat(e, " for type: ")
                            .concat(n, " in location: ")
                            .concat(t),
                    );
                return r;
            }
            getType() {
                let { start: e, end: t, time: n } = this.props;
                return null != e ? "START" : null != t ? "END" : null != n ? "TIME" : null;
            }
            render() {
                let t = this.props,
                    { location: n, messageProps: i, isApplicationStreaming: o } = t,
                    s = f(t, ["location", "messageProps", "isApplicationStreaming"]),
                    { time: l } = this.state,
                    u = this.getType();
                if (null == u) return null;
                let _ = this.getTimeUnit(l, n, u),
                    p = g[n][u];
                if (null == p) return null;
                let h = p[_],
                    m = Math.floor((0, a.A3)(l, _));
                return (0, r.jsx)(e, d(c({}, s), { children: null == h ? void 0 : h(m, i, o) }));
            }
            constructor(...e) {
                super(...e),
                    l(this, "timer", new o.Xp()),
                    l(this, "state", { time: this.getDiff() }),
                    l(this, "update", () => {
                        this.setState({ time: this.getDiff() });
                    });
            }
        }),
        l(n, "Locations", p),
        l(n, "Types", h),
        n
    );
}
