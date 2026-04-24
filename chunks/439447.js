n.d(t, { A: () => f });
var i,
    a,
    r = n(627968),
    l = n(64700),
    s = n(499979),
    o = n(451988),
    c = n(985018),
    d =
        (((i = d || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (i.USER_ACTIVITY = "USER_ACTIVITY"),
        (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        i),
    u = (((a = u || {}).START = "START"), (a.END = "END"), (a.TIME = "TIME"), a);
let _ = (e) => (t, n) => (null == n ? "" : c.intl.format(e(), { time: t, ...n })),
    E = {
        ACTIVITY_FEED: {
            START: {
                [s.pJ.SECONDS]: () => c.intl.string(c.t["ahzZr+"]),
                [s.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t["03mIHW"], { time: e }),
                [s.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.eNoooU, { time: e }),
                [s.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t["2rUo/p"], { time: e }),
            },
            END: {
                [s.pJ.SECONDS]: () => c.intl.string(c.t.EluAd9),
                [s.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t.BZxG8Z, { time: e }),
                [s.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.cRMUpw, { time: e }),
                [s.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t.yP1T84, { time: e }),
                [s.pJ.WEEKS]: (e) => c.intl.formatToPlainString(c.t.AWkdqe, { time: e }),
                [s.pJ.MONTHS]: (e) => c.intl.formatToPlainString(c.t.upamA7, { time: e }),
                [s.pJ.YEARS]: (e) => c.intl.formatToPlainString(c.t.vfMC2h, { time: e }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [s.pJ.SECONDS]: _(() => c.t.Bf3PRU),
                [s.pJ.MINUTES]: _(() => c.t["A9P+dT"]),
                [s.pJ.HOURS]: _(() => c.t.KwVzfh),
                [s.pJ.DAYS]: _(() => c.t.hbUpBN),
            },
            END: {
                [s.pJ.SECONDS]: (e) => c.intl.formatToPlainString(c.t.C3MTOD, { seconds: e }),
                [s.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t["GqQ/Y9"], { minutes: e }),
                [s.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.c5zfWZ, { hours: e }),
                [s.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [s.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], c.intl.string(c.t["ahzZr+"])
                    );
                },
                [s.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? c.intl.formatToPlainString(c.t["03mIHW"], { time: e })
                        : c.intl.formatToPlainString(c.t["vQml+P"], { time: e });
                },
                [s.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? c.intl.formatToPlainString(c.t.eNoooU, { time: e })
                        : c.intl.formatToPlainString(c.t["4Wq+6x"], { time: e });
                },
                [s.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? c.intl.formatToPlainString(c.t["2rUo/p"], { time: e })
                        : c.intl.formatToPlainString(c.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [s.pJ.NONE]: () => c.intl.string(c.t.LqDiCt),
                [s.pJ.SECONDS]: (e) => c.intl.formatToPlainString(c.t.xDIDBL, { time: e }),
                [s.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t.KGqJce, { time: e }),
                [s.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [s.pJ.NONE]: () => c.intl.string(c.t.EoWLru),
                [s.pJ.SECONDS]: () => c.intl.string(c.t.QTHa8b),
                [s.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t.SVEfcd, { time: e }),
                [s.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t["0Gbusd"], { time: e }),
                [s.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t.hnPZZ7, { time: e }),
                [s.pJ.WEEKS]: (e) => c.intl.formatToPlainString(c.t.L3fTpL, { time: e }),
                [s.pJ.MONTHS]: (e) => c.intl.formatToPlainString(c.t.xAFWQV, { time: e }),
                [s.pJ.YEARS]: (e) => c.intl.formatToPlainString(c.t["9Yr3NW"], { time: e }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [s.pJ.SECONDS]: () => c.intl.string(c.t["1QsMmY"]),
                [s.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t.LRNgHp, { count: e }),
                [s.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.raJpz3, { count: e }),
                [s.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t.KkvKhi, { count: e }),
            },
        },
    };
function f(e) {
    return class extends l.PureComponent {
        static Locations = d;
        static Types = u;
        timer = new o.IX();
        state = { time: this.getDiff() };
        componentDidMount() {
            this.timer.start(1e4, this.update);
        }
        componentDidUpdate(e) {
            let { start: t, end: n, time: i } = this.props;
            (e.start !== t || e.end !== n || e.time !== i) && this.update();
        }
        componentWillUnmount() {
            this.timer.stop();
        }
        getDiff() {
            let { start: e, end: t, time: n } = this.props;
            if (null != n) return n / 1e3 / 60;
            let i = Date.now(),
                a = 0;
            return null != e ? (a = i - e) : null != t && (a = i - t), Math.abs(a) / 1e3 / 60;
        }
        update = () => {
            this.setState({ time: this.getDiff() });
        };
        getTimeUnit(e, t, n) {
            let i = (0, s.Ul)(e, (e) =>
                (function (e, t, n) {
                    let i = E[n];
                    if (null != i) {
                        let n = i[t];
                        if (null != n) return null != n[e];
                    }
                    return !1;
                })(e, n, t),
            );
            if (null == i)
                throw Error(`Could not get the time unit in PlayTime with time: ${e} for type: ${n} in location: ${t}`);
            return i;
        }
        getType() {
            let { start: e, end: t, time: n } = this.props;
            return null != e ? "START" : null != t ? "END" : null != n ? "TIME" : null;
        }
        render() {
            let { location: t, messageProps: n, isApplicationStreaming: i, ...a } = this.props,
                { time: l } = this.state,
                o = this.getType();
            if (null == o) return null;
            let c = this.getTimeUnit(l, t, o),
                d = E[t][o];
            if (null == d) return null;
            let u = d[c],
                _ = Math.floor((0, s.eZ)(l, c));
            return (0, r.jsx)(e, { ...a, children: u?.(_, n, i) });
        }
    };
}
