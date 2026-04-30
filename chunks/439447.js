n.d(t, { A: () => f });
var i,
    l,
    s = n(627968),
    r = n(64700),
    a = n(499979),
    u = n(451988),
    o = n(985018),
    d =
        (((i = d || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (i.USER_ACTIVITY = "USER_ACTIVITY"),
        (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        i),
    c = (((l = c || {}).START = "START"), (l.END = "END"), (l.TIME = "TIME"), l);
let h = (e) => (t, n) => (null == n ? "" : o.intl.format(e(), { time: t, ...n })),
    A = {
        ACTIVITY_FEED: {
            START: {
                [a.pJ.SECONDS]: () => o.intl.string(o.t["ahzZr+"]),
                [a.pJ.MINUTES]: (e) => o.intl.formatToPlainString(o.t["03mIHW"], { time: e }),
                [a.pJ.HOURS]: (e) => o.intl.formatToPlainString(o.t.eNoooU, { time: e }),
                [a.pJ.DAYS]: (e) => o.intl.formatToPlainString(o.t["2rUo/p"], { time: e }),
            },
            END: {
                [a.pJ.SECONDS]: () => o.intl.string(o.t.EluAd9),
                [a.pJ.MINUTES]: (e) => o.intl.formatToPlainString(o.t.BZxG8Z, { time: e }),
                [a.pJ.HOURS]: (e) => o.intl.formatToPlainString(o.t.cRMUpw, { time: e }),
                [a.pJ.DAYS]: (e) => o.intl.formatToPlainString(o.t.yP1T84, { time: e }),
                [a.pJ.WEEKS]: (e) => o.intl.formatToPlainString(o.t.AWkdqe, { time: e }),
                [a.pJ.MONTHS]: (e) => o.intl.formatToPlainString(o.t.upamA7, { time: e }),
                [a.pJ.YEARS]: (e) => o.intl.formatToPlainString(o.t.vfMC2h, { time: e }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [a.pJ.SECONDS]: h(() => o.t.Bf3PRU),
                [a.pJ.MINUTES]: h(() => o.t["A9P+dT"]),
                [a.pJ.HOURS]: h(() => o.t.KwVzfh),
                [a.pJ.DAYS]: h(() => o.t.hbUpBN),
            },
            END: {
                [a.pJ.SECONDS]: (e) => o.intl.formatToPlainString(o.t.C3MTOD, { seconds: e }),
                [a.pJ.MINUTES]: (e) => o.intl.formatToPlainString(o.t["GqQ/Y9"], { minutes: e }),
                [a.pJ.HOURS]: (e) => o.intl.formatToPlainString(o.t.c5zfWZ, { hours: e }),
                [a.pJ.DAYS]: (e) => o.intl.formatToPlainString(o.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [a.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o.intl.string(o.t["ahzZr+"])
                    );
                },
                [a.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? o.intl.formatToPlainString(o.t["03mIHW"], { time: e })
                        : o.intl.formatToPlainString(o.t["vQml+P"], { time: e });
                },
                [a.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? o.intl.formatToPlainString(o.t.eNoooU, { time: e })
                        : o.intl.formatToPlainString(o.t["4Wq+6x"], { time: e });
                },
                [a.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? o.intl.formatToPlainString(o.t["2rUo/p"], { time: e })
                        : o.intl.formatToPlainString(o.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [a.pJ.NONE]: () => o.intl.string(o.t.LqDiCt),
                [a.pJ.SECONDS]: (e) => o.intl.formatToPlainString(o.t.xDIDBL, { time: e }),
                [a.pJ.MINUTES]: (e) => o.intl.formatToPlainString(o.t.KGqJce, { time: e }),
                [a.pJ.HOURS]: (e) => o.intl.formatToPlainString(o.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [a.pJ.NONE]: () => o.intl.string(o.t.EoWLru),
                [a.pJ.SECONDS]: () => o.intl.string(o.t.QTHa8b),
                [a.pJ.MINUTES]: (e) => o.intl.formatToPlainString(o.t.SVEfcd, { time: e }),
                [a.pJ.HOURS]: (e) => o.intl.formatToPlainString(o.t["0Gbusd"], { time: e }),
                [a.pJ.DAYS]: (e) => o.intl.formatToPlainString(o.t.hnPZZ7, { time: e }),
                [a.pJ.WEEKS]: (e) => o.intl.formatToPlainString(o.t.L3fTpL, { time: e }),
                [a.pJ.MONTHS]: (e) => o.intl.formatToPlainString(o.t.xAFWQV, { time: e }),
                [a.pJ.YEARS]: (e) => o.intl.formatToPlainString(o.t["9Yr3NW"], { time: e }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [a.pJ.SECONDS]: () => o.intl.string(o.t["1QsMmY"]),
                [a.pJ.MINUTES]: (e) => o.intl.formatToPlainString(o.t.LRNgHp, { count: e }),
                [a.pJ.HOURS]: (e) => o.intl.formatToPlainString(o.t.raJpz3, { count: e }),
                [a.pJ.DAYS]: (e) => o.intl.formatToPlainString(o.t.KkvKhi, { count: e }),
            },
        },
    };
function f(e) {
    return class extends r.PureComponent {
        static Locations = d;
        static Types = c;
        timer = new u.IX();
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
                l = 0;
            return null != e ? (l = i - e) : null != t && (l = i - t), Math.abs(l) / 1e3 / 60;
        }
        update = () => {
            this.setState({ time: this.getDiff() });
        };
        getTimeUnit(e, t, n) {
            let i = (0, a.Ul)(e, (e) =>
                (function (e, t, n) {
                    let i = A[n];
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
            let { location: t, messageProps: n, isApplicationStreaming: i, ...l } = this.props,
                { time: r } = this.state,
                u = this.getType();
            if (null == u) return null;
            let o = this.getTimeUnit(r, t, u),
                d = A[t][u];
            if (null == d) return null;
            let c = d[o],
                h = Math.floor((0, a.eZ)(r, o));
            return (0, s.jsx)(e, { ...l, children: c?.(h, n, i) });
        }
    };
}
