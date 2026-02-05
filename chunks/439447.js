i.d(t, { A: () => A });
var n,
    a,
    l = i(627968),
    r = i(64700),
    s = i(499979),
    o = i(451988),
    d = i(985018),
    c =
        (((n = c || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (n.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (n.USER_ACTIVITY = "USER_ACTIVITY"),
        (n.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (n.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        n),
    u = (((a = u || {}).START = "START"), (a.END = "END"), (a.TIME = "TIME"), a);
let m = (e) => (t, i) => (null == i ? "" : d.intl.format(e(), { time: t, ...i })),
    _ = {
        ACTIVITY_FEED: {
            START: {
                [s.pJ.SECONDS]: () => d.intl.string(d.t["ahzZr+"]),
                [s.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t["03mIHW"], { time: e }),
                [s.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.eNoooU, { time: e }),
                [s.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t["2rUo/p"], { time: e }),
            },
            END: {
                [s.pJ.SECONDS]: () => d.intl.string(d.t.EluAd9),
                [s.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t.BZxG8Z, { time: e }),
                [s.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.cRMUpw, { time: e }),
                [s.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t.yP1T84, { time: e }),
                [s.pJ.WEEKS]: (e) => d.intl.formatToPlainString(d.t.AWkdqe, { time: e }),
                [s.pJ.MONTHS]: (e) => d.intl.formatToPlainString(d.t.upamA7, { time: e }),
                [s.pJ.YEARS]: (e) => d.intl.formatToPlainString(d.t.vfMC2h, { time: e }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [s.pJ.SECONDS]: m(() => d.t.Bf3PRU),
                [s.pJ.MINUTES]: m(() => d.t["A9P+dT"]),
                [s.pJ.HOURS]: m(() => d.t.KwVzfh),
                [s.pJ.DAYS]: m(() => d.t.hbUpBN),
            },
            END: {
                [s.pJ.SECONDS]: (e) => d.intl.formatToPlainString(d.t.C3MTOD, { seconds: e }),
                [s.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t["GqQ/Y9"], { minutes: e }),
                [s.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.c5zfWZ, { hours: e }),
                [s.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [s.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d.intl.string(d.t["ahzZr+"])
                    );
                },
                [s.pJ.MINUTES]: function (e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i
                        ? d.intl.formatToPlainString(d.t["03mIHW"], { time: e })
                        : n
                          ? d.intl.formatToPlainString(d.t.w5w79N, { time: e })
                          : d.intl.formatToPlainString(d.t["vQml+P"], { time: e });
                },
                [s.pJ.HOURS]: function (e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i
                        ? d.intl.formatToPlainString(d.t.eNoooU, { time: e })
                        : n
                          ? d.intl.formatToPlainString(d.t.EPkGyE, { time: e })
                          : d.intl.formatToPlainString(d.t["4Wq+6x"], { time: e });
                },
                [s.pJ.DAYS]: function (e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i
                        ? d.intl.formatToPlainString(d.t["2rUo/p"], { time: e })
                        : n
                          ? d.intl.formatToPlainString(d.t.V3g3dS, { time: e })
                          : d.intl.formatToPlainString(d.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [s.pJ.NONE]: () => d.intl.string(d.t.LqDiCt),
                [s.pJ.SECONDS]: (e) => d.intl.formatToPlainString(d.t.xDIDBL, { time: e }),
                [s.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t.KGqJce, { time: e }),
                [s.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [s.pJ.NONE]: () => d.intl.string(d.t.EoWLru),
                [s.pJ.SECONDS]: () => d.intl.string(d.t.QTHa8b),
                [s.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t.SVEfcd, { time: e }),
                [s.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t["0Gbusd"], { time: e }),
                [s.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t.hnPZZ7, { time: e }),
                [s.pJ.WEEKS]: (e) => d.intl.formatToPlainString(d.t.L3fTpL, { time: e }),
                [s.pJ.MONTHS]: (e) => d.intl.formatToPlainString(d.t.xAFWQV, { time: e }),
                [s.pJ.YEARS]: (e) => d.intl.formatToPlainString(d.t["9Yr3NW"], { time: e }),
            },
        },
    };
function A(e) {
    return class extends r.PureComponent {
        static Locations = c;
        static Types = u;
        timer = new o.IX();
        state = { time: this.getDiff() };
        componentDidMount() {
            this.timer.start(1e4, this.update);
        }
        componentDidUpdate(e) {
            let { start: t, end: i, time: n } = this.props;
            (e.start !== t || e.end !== i || e.time !== n) && this.update();
        }
        componentWillUnmount() {
            this.timer.stop();
        }
        getDiff() {
            let { start: e, end: t, time: i } = this.props;
            if (null != i) return i / 1e3 / 60;
            let n = Date.now(),
                a = 0;
            return null != e ? (a = n - e) : null != t && (a = n - t), Math.abs(a) / 1e3 / 60;
        }
        update = () => {
            this.setState({ time: this.getDiff() });
        };
        getTimeUnit(e, t, i) {
            let n = (0, s.Ul)(e, (e) =>
                (function (e, t, i) {
                    let n = _[i];
                    if (null != n) {
                        let i = n[t];
                        if (null != i) return null != i[e];
                    }
                    return !1;
                })(e, i, t),
            );
            if (null == n)
                throw Error(`Could not get the time unit in PlayTime with time: ${e} for type: ${i} in location: ${t}`);
            return n;
        }
        getType() {
            let { start: e, end: t, time: i } = this.props;
            return null != e ? "START" : null != t ? "END" : null != i ? "TIME" : null;
        }
        render() {
            let {
                    location: t,
                    messageProps: i,
                    isApplicationStreaming: n,
                    enableUserHoverActivities: a,
                    ...r
                } = this.props,
                { time: o } = this.state,
                d = this.getType();
            if (null == d) return null;
            let c = this.getTimeUnit(o, t, d),
                u = _[t][d];
            if (null == u) return null;
            let m = u[c],
                A = Math.floor((0, s.eZ)(o, c));
            return (0, l.jsx)(e, { ...r, children: m?.(A, i, n, a) });
        }
    };
}
