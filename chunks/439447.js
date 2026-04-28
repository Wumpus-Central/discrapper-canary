n.d(t, { A: () => f });
var i,
    a,
    r = n(627968),
    l = n(64700),
    s = n(499979),
    o = n(451988),
    d = n(985018),
    c =
        (((i = c || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (i.USER_ACTIVITY = "USER_ACTIVITY"),
        (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        i),
    u = (((a = u || {}).START = "START"), (a.END = "END"), (a.TIME = "TIME"), a);
let _ = (e) => (t, n) => (null == n ? "" : d.intl.format(e(), { time: t, ...n })),
    E = {
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
                [s.pJ.SECONDS]: _(() => d.t.Bf3PRU),
                [s.pJ.MINUTES]: _(() => d.t["A9P+dT"]),
                [s.pJ.HOURS]: _(() => d.t.KwVzfh),
                [s.pJ.DAYS]: _(() => d.t.hbUpBN),
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
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? d.intl.formatToPlainString(d.t["03mIHW"], { time: e })
                        : d.intl.formatToPlainString(d.t["vQml+P"], { time: e });
                },
                [s.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? d.intl.formatToPlainString(d.t.eNoooU, { time: e })
                        : d.intl.formatToPlainString(d.t["4Wq+6x"], { time: e });
                },
                [s.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? d.intl.formatToPlainString(d.t["2rUo/p"], { time: e })
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
        VOICE_CHANNEL_HISTORY: {
            END: {
                [s.pJ.SECONDS]: () => d.intl.string(d.t["1QsMmY"]),
                [s.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t.LRNgHp, { count: e }),
                [s.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.raJpz3, { count: e }),
                [s.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t.KkvKhi, { count: e }),
            },
        },
    };
function f(e) {
    return class extends l.PureComponent {
        static Locations = c;
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
            let d = this.getTimeUnit(l, t, o),
                c = E[t][o];
            if (null == c) return null;
            let u = c[d],
                _ = Math.floor((0, s.eZ)(l, d));
            return (0, r.jsx)(e, { ...a, children: u?.(_, n, i) });
        }
    };
}
