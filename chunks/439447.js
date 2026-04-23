n.d(t, { A: () => A });
var i,
    l,
    a = n(627968),
    s = n(64700),
    r = n(499979),
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
    u = (((l = u || {}).START = "START"), (l.END = "END"), (l.TIME = "TIME"), l);
let h = (e) => (t, n) => (null == n ? "" : c.intl.format(e(), { time: t, ...n })),
    m = {
        ACTIVITY_FEED: {
            START: {
                [r.pJ.SECONDS]: () => c.intl.string(c.t["ahzZr+"]),
                [r.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t["03mIHW"], { time: e }),
                [r.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.eNoooU, { time: e }),
                [r.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t["2rUo/p"], { time: e }),
            },
            END: {
                [r.pJ.SECONDS]: () => c.intl.string(c.t.EluAd9),
                [r.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t.BZxG8Z, { time: e }),
                [r.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.cRMUpw, { time: e }),
                [r.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t.yP1T84, { time: e }),
                [r.pJ.WEEKS]: (e) => c.intl.formatToPlainString(c.t.AWkdqe, { time: e }),
                [r.pJ.MONTHS]: (e) => c.intl.formatToPlainString(c.t.upamA7, { time: e }),
                [r.pJ.YEARS]: (e) => c.intl.formatToPlainString(c.t.vfMC2h, { time: e }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [r.pJ.SECONDS]: h(() => c.t.Bf3PRU),
                [r.pJ.MINUTES]: h(() => c.t["A9P+dT"]),
                [r.pJ.HOURS]: h(() => c.t.KwVzfh),
                [r.pJ.DAYS]: h(() => c.t.hbUpBN),
            },
            END: {
                [r.pJ.SECONDS]: (e) => c.intl.formatToPlainString(c.t.C3MTOD, { seconds: e }),
                [r.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t["GqQ/Y9"], { minutes: e }),
                [r.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.c5zfWZ, { hours: e }),
                [r.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [r.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], c.intl.string(c.t["ahzZr+"])
                    );
                },
                [r.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? c.intl.formatToPlainString(c.t["03mIHW"], { time: e })
                        : c.intl.formatToPlainString(c.t["vQml+P"], { time: e });
                },
                [r.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? c.intl.formatToPlainString(c.t.eNoooU, { time: e })
                        : c.intl.formatToPlainString(c.t["4Wq+6x"], { time: e });
                },
                [r.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? c.intl.formatToPlainString(c.t["2rUo/p"], { time: e })
                        : c.intl.formatToPlainString(c.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [r.pJ.NONE]: () => c.intl.string(c.t.LqDiCt),
                [r.pJ.SECONDS]: (e) => c.intl.formatToPlainString(c.t.xDIDBL, { time: e }),
                [r.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t.KGqJce, { time: e }),
                [r.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [r.pJ.NONE]: () => c.intl.string(c.t.EoWLru),
                [r.pJ.SECONDS]: () => c.intl.string(c.t.QTHa8b),
                [r.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t.SVEfcd, { time: e }),
                [r.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t["0Gbusd"], { time: e }),
                [r.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t.hnPZZ7, { time: e }),
                [r.pJ.WEEKS]: (e) => c.intl.formatToPlainString(c.t.L3fTpL, { time: e }),
                [r.pJ.MONTHS]: (e) => c.intl.formatToPlainString(c.t.xAFWQV, { time: e }),
                [r.pJ.YEARS]: (e) => c.intl.formatToPlainString(c.t["9Yr3NW"], { time: e }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [r.pJ.SECONDS]: () => c.intl.string(c.t["1QsMmY"]),
                [r.pJ.MINUTES]: (e) => c.intl.formatToPlainString(c.t.LRNgHp, { count: e }),
                [r.pJ.HOURS]: (e) => c.intl.formatToPlainString(c.t.raJpz3, { count: e }),
                [r.pJ.DAYS]: (e) => c.intl.formatToPlainString(c.t.KkvKhi, { count: e }),
            },
        },
    };
function A(e) {
    return class extends s.PureComponent {
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
                l = 0;
            return null != e ? (l = i - e) : null != t && (l = i - t), Math.abs(l) / 1e3 / 60;
        }
        update = () => {
            this.setState({ time: this.getDiff() });
        };
        getTimeUnit(e, t, n) {
            let i = (0, r.Ul)(e, (e) =>
                (function (e, t, n) {
                    let i = m[n];
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
                { time: s } = this.state,
                o = this.getType();
            if (null == o) return null;
            let c = this.getTimeUnit(s, t, o),
                d = m[t][o];
            if (null == d) return null;
            let u = d[c],
                h = Math.floor((0, r.eZ)(s, c));
            return (0, a.jsx)(e, { ...l, children: u?.(h, n, i) });
        }
    };
}
