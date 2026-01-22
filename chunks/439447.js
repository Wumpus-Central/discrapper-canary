n.d(t, {
    A: () => b,
}),
    n(65821),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(499979),
    s = n(451988),
    o = n(985018);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var _ = (function (e) {
        return (
            (e.ACTIVITY_FEED = "ACTIVITY_FEED"),
            (e.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
            (e.USER_ACTIVITY = "USER_ACTIVITY"),
            (e.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
            (e.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
            e
        );
    })(_ || {}),
    h = (function (e) {
        return (e.START = "START"), (e.END = "END"), (e.TIME = "TIME"), e;
    })(h || {});
let m = (e) => (t, n) =>
        null == n
            ? ""
            : o.intl.format(
                  e(),
                  c(
                      {
                          time: t,
                      },
                      n,
                  ),
              ),
    g = {
        ACTIVITY_FEED: {
            START: {
                [a.pJ.SECONDS]: () => o.intl.string(o.t["ahzZr+"]),
                [a.pJ.MINUTES]: (e) =>
                    o.intl.formatToPlainString(o.t["03mIHW"], {
                        time: e,
                    }),
                [a.pJ.HOURS]: (e) =>
                    o.intl.formatToPlainString(o.t.eNoooU, {
                        time: e,
                    }),
                [a.pJ.DAYS]: (e) =>
                    o.intl.formatToPlainString(o.t["2rUo/p"], {
                        time: e,
                    }),
            },
            END: {
                [a.pJ.SECONDS]: () => o.intl.string(o.t.EluAd9),
                [a.pJ.MINUTES]: (e) =>
                    o.intl.formatToPlainString(o.t.BZxG8Z, {
                        time: e,
                    }),
                [a.pJ.HOURS]: (e) =>
                    o.intl.formatToPlainString(o.t.cRMUpw, {
                        time: e,
                    }),
                [a.pJ.DAYS]: (e) =>
                    o.intl.formatToPlainString(o.t.yP1T84, {
                        time: e,
                    }),
                [a.pJ.WEEKS]: (e) =>
                    o.intl.formatToPlainString(o.t.AWkdqe, {
                        time: e,
                    }),
                [a.pJ.MONTHS]: (e) =>
                    o.intl.formatToPlainString(o.t.upamA7, {
                        time: e,
                    }),
                [a.pJ.YEARS]: (e) =>
                    o.intl.formatToPlainString(o.t.vfMC2h, {
                        time: e,
                    }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [a.pJ.SECONDS]: m(() => o.t.Bf3PRU),
                [a.pJ.MINUTES]: m(() => o.t["A9P+dT"]),
                [a.pJ.HOURS]: m(() => o.t.KwVzfh),
                [a.pJ.DAYS]: m(() => o.t.hbUpBN),
            },
            END: {
                [a.pJ.SECONDS]: (e) =>
                    o.intl.formatToPlainString(o.t.C3MTOD, {
                        seconds: e,
                    }),
                [a.pJ.MINUTES]: (e) =>
                    o.intl.formatToPlainString(o.t["GqQ/Y9"], {
                        minutes: e,
                    }),
                [a.pJ.HOURS]: (e) =>
                    o.intl.formatToPlainString(o.t.c5zfWZ, {
                        hours: e,
                    }),
                [a.pJ.DAYS]: (e) =>
                    o.intl.formatToPlainString(o.t.amjnaI, {
                        days: e,
                    }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [a.pJ.SECONDS]: () => o.intl.string(o.t["ahzZr+"]),
                [a.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? o.intl.formatToPlainString(o.t["03mIHW"], {
                              time: e,
                          })
                        : o.intl.formatToPlainString(o.t["vQml+P"], {
                              time: e,
                          });
                },
                [a.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? o.intl.formatToPlainString(o.t.eNoooU, {
                              time: e,
                          })
                        : o.intl.formatToPlainString(o.t["4Wq+6x"], {
                              time: e,
                          });
                },
                [a.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? o.intl.formatToPlainString(o.t["2rUo/p"], {
                              time: e,
                          })
                        : o.intl.formatToPlainString(o.t["jN3/fR"], {
                              time: e,
                          });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [a.pJ.NONE]: () => o.intl.string(o.t.LqDiCt),
                [a.pJ.SECONDS]: (e) =>
                    o.intl.formatToPlainString(o.t.xDIDBL, {
                        time: e,
                    }),
                [a.pJ.MINUTES]: (e) =>
                    o.intl.formatToPlainString(o.t.KGqJce, {
                        time: e,
                    }),
                [a.pJ.HOURS]: (e) =>
                    o.intl.formatToPlainString(o.t.OLchUE, {
                        time: e,
                    }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [a.pJ.NONE]: () => o.intl.string(o.t.EoWLru),
                [a.pJ.SECONDS]: () => o.intl.string(o.t.QTHa8b),
                [a.pJ.MINUTES]: (e) =>
                    o.intl.formatToPlainString(o.t.SVEfcd, {
                        time: e,
                    }),
                [a.pJ.HOURS]: (e) =>
                    o.intl.formatToPlainString(o.t["0Gbusd"], {
                        time: e,
                    }),
                [a.pJ.DAYS]: (e) =>
                    o.intl.formatToPlainString(o.t.hnPZZ7, {
                        time: e,
                    }),
                [a.pJ.WEEKS]: (e) =>
                    o.intl.formatToPlainString(o.t.L3fTpL, {
                        time: e,
                    }),
                [a.pJ.MONTHS]: (e) =>
                    o.intl.formatToPlainString(o.t.xAFWQV, {
                        time: e,
                    }),
                [a.pJ.YEARS]: (e) =>
                    o.intl.formatToPlainString(o.t["9Yr3NW"], {
                        time: e,
                    }),
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
                this.timer.start(1e4, this.update);
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
                if (null != n) return n / 1e3 / 60;
                let r = Date.now(),
                    i = 0;
                return null != e ? (i = r - e) : null != t && (i = r - t), Math.abs(i) / 1e3 / 60;
            }
            getTimeUnit(e, t, n) {
                let r = (0, a.Ul)(e, (e) => E(e, n, t));
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
                    { location: n, messageProps: i, isApplicationStreaming: s } = t,
                    o = f(t, ["location", "messageProps", "isApplicationStreaming"]),
                    { time: l } = this.state,
                    u = this.getType();
                if (null == u) return null;
                let p = this.getTimeUnit(l, n, u),
                    _ = g[n][u];
                if (null == _) return null;
                let h = _[p],
                    m = Math.floor((0, a.eZ)(l, p));
                return (0, r.jsx)(
                    e,
                    d(c({}, o), {
                        children: null == h ? void 0 : h(m, i, s),
                    }),
                );
            }
            constructor(...e) {
                super(...e),
                    l(this, "timer", new s.IX()),
                    l(this, "state", {
                        time: this.getDiff(),
                    }),
                    l(this, "update", () => {
                        this.setState({
                            time: this.getDiff(),
                        });
                    });
            }
        }),
        l(n, "Locations", _),
        l(n, "Types", h),
        n
    );
}
