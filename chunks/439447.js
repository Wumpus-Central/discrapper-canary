n.d(t, {
    A: () => y,
}),
    n(65821),
    n(896048);
var r,
    i,
    l = n(627968),
    a = n(64700),
    o = n(499979),
    s = n(451988),
    c = n(985018);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
var f =
        (((r = f || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (r.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (r.USER_ACTIVITY = "USER_ACTIVITY"),
        (r.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (r.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        r),
    p = (((i = p || {}).START = "START"), (i.END = "END"), (i.TIME = "TIME"), i);
let m = (e) => (t, n) =>
        null == n
            ? ""
            : c.intl.format(
                  e(),
                  d(
                      {
                          time: t,
                      },
                      n,
                  ),
              ),
    g = {
        ACTIVITY_FEED: {
            START: {
                [o.pJ.SECONDS]: () => c.intl.string(c.t["ahzZr+"]),
                [o.pJ.MINUTES]: (e) =>
                    c.intl.formatToPlainString(c.t["03mIHW"], {
                        time: e,
                    }),
                [o.pJ.HOURS]: (e) =>
                    c.intl.formatToPlainString(c.t.eNoooU, {
                        time: e,
                    }),
                [o.pJ.DAYS]: (e) =>
                    c.intl.formatToPlainString(c.t["2rUo/p"], {
                        time: e,
                    }),
            },
            END: {
                [o.pJ.SECONDS]: () => c.intl.string(c.t.EluAd9),
                [o.pJ.MINUTES]: (e) =>
                    c.intl.formatToPlainString(c.t.BZxG8Z, {
                        time: e,
                    }),
                [o.pJ.HOURS]: (e) =>
                    c.intl.formatToPlainString(c.t.cRMUpw, {
                        time: e,
                    }),
                [o.pJ.DAYS]: (e) =>
                    c.intl.formatToPlainString(c.t.yP1T84, {
                        time: e,
                    }),
                [o.pJ.WEEKS]: (e) =>
                    c.intl.formatToPlainString(c.t.AWkdqe, {
                        time: e,
                    }),
                [o.pJ.MONTHS]: (e) =>
                    c.intl.formatToPlainString(c.t.upamA7, {
                        time: e,
                    }),
                [o.pJ.YEARS]: (e) =>
                    c.intl.formatToPlainString(c.t.vfMC2h, {
                        time: e,
                    }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [o.pJ.SECONDS]: m(() => c.t.Bf3PRU),
                [o.pJ.MINUTES]: m(() => c.t["A9P+dT"]),
                [o.pJ.HOURS]: m(() => c.t.KwVzfh),
                [o.pJ.DAYS]: m(() => c.t.hbUpBN),
            },
            END: {
                [o.pJ.SECONDS]: (e) =>
                    c.intl.formatToPlainString(c.t.C3MTOD, {
                        seconds: e,
                    }),
                [o.pJ.MINUTES]: (e) =>
                    c.intl.formatToPlainString(c.t["GqQ/Y9"], {
                        minutes: e,
                    }),
                [o.pJ.HOURS]: (e) =>
                    c.intl.formatToPlainString(c.t.c5zfWZ, {
                        hours: e,
                    }),
                [o.pJ.DAYS]: (e) =>
                    c.intl.formatToPlainString(c.t.amjnaI, {
                        days: e,
                    }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [o.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], c.intl.string(c.t["ahzZr+"])
                    );
                },
                [o.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return n
                        ? c.intl.formatToPlainString(c.t["03mIHW"], {
                              time: e,
                          })
                        : r
                          ? c.intl.formatToPlainString(c.t.w5w79N, {
                                time: e,
                            })
                          : c.intl.formatToPlainString(c.t["vQml+P"], {
                                time: e,
                            });
                },
                [o.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return n
                        ? c.intl.formatToPlainString(c.t.eNoooU, {
                              time: e,
                          })
                        : r
                          ? c.intl.formatToPlainString(c.t.EPkGyE, {
                                time: e,
                            })
                          : c.intl.formatToPlainString(c.t["4Wq+6x"], {
                                time: e,
                            });
                },
                [o.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return n
                        ? c.intl.formatToPlainString(c.t["2rUo/p"], {
                              time: e,
                          })
                        : r
                          ? c.intl.formatToPlainString(c.t.V3g3dS, {
                                time: e,
                            })
                          : c.intl.formatToPlainString(c.t["jN3/fR"], {
                                time: e,
                            });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [o.pJ.NONE]: () => c.intl.string(c.t.LqDiCt),
                [o.pJ.SECONDS]: (e) =>
                    c.intl.formatToPlainString(c.t.xDIDBL, {
                        time: e,
                    }),
                [o.pJ.MINUTES]: (e) =>
                    c.intl.formatToPlainString(c.t.KGqJce, {
                        time: e,
                    }),
                [o.pJ.HOURS]: (e) =>
                    c.intl.formatToPlainString(c.t.OLchUE, {
                        time: e,
                    }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [o.pJ.NONE]: () => c.intl.string(c.t.EoWLru),
                [o.pJ.SECONDS]: () => c.intl.string(c.t.QTHa8b),
                [o.pJ.MINUTES]: (e) =>
                    c.intl.formatToPlainString(c.t.SVEfcd, {
                        time: e,
                    }),
                [o.pJ.HOURS]: (e) =>
                    c.intl.formatToPlainString(c.t["0Gbusd"], {
                        time: e,
                    }),
                [o.pJ.DAYS]: (e) =>
                    c.intl.formatToPlainString(c.t.hnPZZ7, {
                        time: e,
                    }),
                [o.pJ.WEEKS]: (e) =>
                    c.intl.formatToPlainString(c.t.L3fTpL, {
                        time: e,
                    }),
                [o.pJ.MONTHS]: (e) =>
                    c.intl.formatToPlainString(c.t.xAFWQV, {
                        time: e,
                    }),
                [o.pJ.YEARS]: (e) =>
                    c.intl.formatToPlainString(c.t["9Yr3NW"], {
                        time: e,
                    }),
            },
        },
    };

function y(e) {
    var t, n;
    return (
        (n = class extends (t = a.PureComponent) {
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
                let r = (0, o.Ul)(e, (e) =>
                    (function (e, t, n) {
                        let r = g[n];
                        if (null != r) {
                            let n = r[t];
                            if (null != n) return null != n[e];
                        }
                        return !1;
                    })(e, n, t),
                );
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
                var t, n;
                let r = this.props,
                    { location: i, messageProps: a, isApplicationStreaming: s, enableUserHoverActivities: c } = r,
                    u = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i,
                            l = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                            return l;
                        }
                        if (
                            ((l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.getOwnPropertyNames(e);
                                for (r = 0; r < l.length; r++)
                                    (n = l[r]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (i[n] = e[n]);
                                return i;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                        return l;
                    })(r, ["location", "messageProps", "isApplicationStreaming", "enableUserHoverActivities"]),
                    { time: f } = this.state,
                    p = this.getType();
                if (null == p) return null;
                let m = this.getTimeUnit(f, i, p),
                    y = g[i][p];
                if (null == y) return null;
                let b = y[m],
                    h = Math.floor((0, o.eZ)(f, m));
                return (0, l.jsx)(
                    e,
                    ((t = d({}, u)),
                    (n = n =
                        {
                            children: null == b ? void 0 : b(h, a, s, c),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            }
            constructor(...e) {
                super(...e),
                    u(this, "timer", new s.IX()),
                    u(this, "state", {
                        time: this.getDiff(),
                    }),
                    u(this, "update", () => {
                        this.setState({
                            time: this.getDiff(),
                        });
                    });
            }
        }),
        u(n, "Locations", f),
        u(n, "Types", p),
        n
    );
}
