n.d(e, { A: () => m });
var i,
    l,
    r = n(627968),
    s = n(64700),
    a = n(499979),
    o = n(451988),
    u = n(985018),
    d =
        (((i = d || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (i.USER_ACTIVITY = "USER_ACTIVITY"),
        (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        i),
    c = (((l = c || {}).START = "START"), (l.END = "END"), (l.TIME = "TIME"), l);
let h = (t) => (e, n) => (null == n ? "" : u.intl.format(t(), { time: e, ...n })),
    A = {
        ACTIVITY_FEED: {
            START: {
                [a.pJ.SECONDS]: () => u.intl.string(u.t["ahzZr+"]),
                [a.pJ.MINUTES]: (t) => u.intl.formatToPlainString(u.t["03mIHW"], { time: t }),
                [a.pJ.HOURS]: (t) => u.intl.formatToPlainString(u.t.eNoooU, { time: t }),
                [a.pJ.DAYS]: (t) => u.intl.formatToPlainString(u.t["2rUo/p"], { time: t }),
            },
            END: {
                [a.pJ.SECONDS]: () => u.intl.string(u.t.EluAd9),
                [a.pJ.MINUTES]: (t) => u.intl.formatToPlainString(u.t.BZxG8Z, { time: t }),
                [a.pJ.HOURS]: (t) => u.intl.formatToPlainString(u.t.cRMUpw, { time: t }),
                [a.pJ.DAYS]: (t) => u.intl.formatToPlainString(u.t.yP1T84, { time: t }),
                [a.pJ.WEEKS]: (t) => u.intl.formatToPlainString(u.t.AWkdqe, { time: t }),
                [a.pJ.MONTHS]: (t) => u.intl.formatToPlainString(u.t.upamA7, { time: t }),
                [a.pJ.YEARS]: (t) => u.intl.formatToPlainString(u.t.vfMC2h, { time: t }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [a.pJ.SECONDS]: h(() => u.t.Bf3PRU),
                [a.pJ.MINUTES]: h(() => u.t["A9P+dT"]),
                [a.pJ.HOURS]: h(() => u.t.KwVzfh),
                [a.pJ.DAYS]: h(() => u.t.hbUpBN),
            },
            END: {
                [a.pJ.SECONDS]: (t) => u.intl.formatToPlainString(u.t.C3MTOD, { seconds: t }),
                [a.pJ.MINUTES]: (t) => u.intl.formatToPlainString(u.t["GqQ/Y9"], { minutes: t }),
                [a.pJ.HOURS]: (t) => u.intl.formatToPlainString(u.t.c5zfWZ, { hours: t }),
                [a.pJ.DAYS]: (t) => u.intl.formatToPlainString(u.t.amjnaI, { days: t }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [a.pJ.SECONDS]: function (t, e) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u.intl.string(u.t["ahzZr+"])
                    );
                },
                [a.pJ.MINUTES]: function (t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t["03mIHW"], { time: t })
                        : u.intl.formatToPlainString(u.t["vQml+P"], { time: t });
                },
                [a.pJ.HOURS]: function (t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t.eNoooU, { time: t })
                        : u.intl.formatToPlainString(u.t["4Wq+6x"], { time: t });
                },
                [a.pJ.DAYS]: function (t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t["2rUo/p"], { time: t })
                        : u.intl.formatToPlainString(u.t["jN3/fR"], { time: t });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [a.pJ.NONE]: () => u.intl.string(u.t.LqDiCt),
                [a.pJ.SECONDS]: (t) => u.intl.formatToPlainString(u.t.xDIDBL, { time: t }),
                [a.pJ.MINUTES]: (t) => u.intl.formatToPlainString(u.t.KGqJce, { time: t }),
                [a.pJ.HOURS]: (t) => u.intl.formatToPlainString(u.t.OLchUE, { time: t }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [a.pJ.NONE]: () => u.intl.string(u.t.EoWLru),
                [a.pJ.SECONDS]: () => u.intl.string(u.t.QTHa8b),
                [a.pJ.MINUTES]: (t) => u.intl.formatToPlainString(u.t.SVEfcd, { time: t }),
                [a.pJ.HOURS]: (t) => u.intl.formatToPlainString(u.t["0Gbusd"], { time: t }),
                [a.pJ.DAYS]: (t) => u.intl.formatToPlainString(u.t.hnPZZ7, { time: t }),
                [a.pJ.WEEKS]: (t) => u.intl.formatToPlainString(u.t.L3fTpL, { time: t }),
                [a.pJ.MONTHS]: (t) => u.intl.formatToPlainString(u.t.xAFWQV, { time: t }),
                [a.pJ.YEARS]: (t) => u.intl.formatToPlainString(u.t["9Yr3NW"], { time: t }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [a.pJ.SECONDS]: () => u.intl.string(u.t["1QsMmY"]),
                [a.pJ.MINUTES]: (t) => u.intl.formatToPlainString(u.t.LRNgHp, { count: t }),
                [a.pJ.HOURS]: (t) => u.intl.formatToPlainString(u.t.raJpz3, { count: t }),
                [a.pJ.DAYS]: (t) => u.intl.formatToPlainString(u.t.KkvKhi, { count: t }),
            },
        },
    };
function m(t) {
    return class extends s.PureComponent {
        static Locations = d;
        static Types = c;
        timer = new o.IX();
        state = { time: this.getDiff() };
        componentDidMount() {
            this.timer.start(1e4, this.update);
        }
        componentDidUpdate(t) {
            let { start: e, end: n, time: i } = this.props;
            (t.start !== e || t.end !== n || t.time !== i) && this.update();
        }
        componentWillUnmount() {
            this.timer.stop();
        }
        getDiff() {
            let { start: t, end: e, time: n } = this.props;
            if (null != n) return n / 1e3 / 60;
            let i = Date.now(),
                l = 0;
            return null != t ? (l = i - t) : null != e && (l = i - e), Math.abs(l) / 1e3 / 60;
        }
        update = () => {
            this.setState({ time: this.getDiff() });
        };
        getTimeUnit(t, e, n) {
            let i = (0, a.Ul)(t, (t) =>
                (function (t, e, n) {
                    let i = A[n];
                    if (null != i) {
                        let n = i[e];
                        if (null != n) return null != n[t];
                    }
                    return !1;
                })(t, n, e),
            );
            if (null == i)
                throw Error(`Could not get the time unit in PlayTime with time: ${t} for type: ${n} in location: ${e}`);
            return i;
        }
        getType() {
            let { start: t, end: e, time: n } = this.props;
            return null != t ? "START" : null != e ? "END" : null != n ? "TIME" : null;
        }
        render() {
            let { location: e, messageProps: n, isApplicationStreaming: i, ...l } = this.props,
                { time: s } = this.state,
                o = this.getType();
            if (null == o) return null;
            let u = this.getTimeUnit(s, e, o),
                d = A[e][o];
            if (null == d) return null;
            let c = d[u],
                h = Math.floor((0, a.eZ)(s, u));
            return (0, r.jsx)(t, { ...l, children: c?.(h, n, i) });
        }
    };
}
