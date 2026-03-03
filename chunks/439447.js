n.d(e, { A: () => m });
var i,
    l,
    r = n(627968),
    a = n(64700),
    s = n(499979),
    o = n(451988),
    d = n(985018),
    u =
        (((i = u || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (i.USER_ACTIVITY = "USER_ACTIVITY"),
        (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        i),
    c = (((l = c || {}).START = "START"), (l.END = "END"), (l.TIME = "TIME"), l);
let A = (t) => (e, n) => (null == n ? "" : d.intl.format(t(), { time: e, ...n })),
    p = {
        ACTIVITY_FEED: {
            START: {
                [s.pJ.SECONDS]: () => d.intl.string(d.t["ahzZr+"]),
                [s.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t["03mIHW"], { time: t }),
                [s.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.eNoooU, { time: t }),
                [s.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t["2rUo/p"], { time: t }),
            },
            END: {
                [s.pJ.SECONDS]: () => d.intl.string(d.t.EluAd9),
                [s.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t.BZxG8Z, { time: t }),
                [s.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.cRMUpw, { time: t }),
                [s.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t.yP1T84, { time: t }),
                [s.pJ.WEEKS]: (t) => d.intl.formatToPlainString(d.t.AWkdqe, { time: t }),
                [s.pJ.MONTHS]: (t) => d.intl.formatToPlainString(d.t.upamA7, { time: t }),
                [s.pJ.YEARS]: (t) => d.intl.formatToPlainString(d.t.vfMC2h, { time: t }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [s.pJ.SECONDS]: A(() => d.t.Bf3PRU),
                [s.pJ.MINUTES]: A(() => d.t["A9P+dT"]),
                [s.pJ.HOURS]: A(() => d.t.KwVzfh),
                [s.pJ.DAYS]: A(() => d.t.hbUpBN),
            },
            END: {
                [s.pJ.SECONDS]: (t) => d.intl.formatToPlainString(d.t.C3MTOD, { seconds: t }),
                [s.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t["GqQ/Y9"], { minutes: t }),
                [s.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.c5zfWZ, { hours: t }),
                [s.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t.amjnaI, { days: t }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [s.pJ.SECONDS]: function (t, e) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d.intl.string(d.t["ahzZr+"])
                    );
                },
                [s.pJ.MINUTES]: function (t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return n
                        ? d.intl.formatToPlainString(d.t["03mIHW"], { time: t })
                        : i
                          ? d.intl.formatToPlainString(d.t.w5w79N, { time: t })
                          : d.intl.formatToPlainString(d.t["vQml+P"], { time: t });
                },
                [s.pJ.HOURS]: function (t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return n
                        ? d.intl.formatToPlainString(d.t.eNoooU, { time: t })
                        : i
                          ? d.intl.formatToPlainString(d.t.EPkGyE, { time: t })
                          : d.intl.formatToPlainString(d.t["4Wq+6x"], { time: t });
                },
                [s.pJ.DAYS]: function (t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return n
                        ? d.intl.formatToPlainString(d.t["2rUo/p"], { time: t })
                        : i
                          ? d.intl.formatToPlainString(d.t.V3g3dS, { time: t })
                          : d.intl.formatToPlainString(d.t["jN3/fR"], { time: t });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [s.pJ.NONE]: () => d.intl.string(d.t.LqDiCt),
                [s.pJ.SECONDS]: (t) => d.intl.formatToPlainString(d.t.xDIDBL, { time: t }),
                [s.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t.KGqJce, { time: t }),
                [s.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.OLchUE, { time: t }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [s.pJ.NONE]: () => d.intl.string(d.t.EoWLru),
                [s.pJ.SECONDS]: () => d.intl.string(d.t.QTHa8b),
                [s.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t.SVEfcd, { time: t }),
                [s.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t["0Gbusd"], { time: t }),
                [s.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t.hnPZZ7, { time: t }),
                [s.pJ.WEEKS]: (t) => d.intl.formatToPlainString(d.t.L3fTpL, { time: t }),
                [s.pJ.MONTHS]: (t) => d.intl.formatToPlainString(d.t.xAFWQV, { time: t }),
                [s.pJ.YEARS]: (t) => d.intl.formatToPlainString(d.t["9Yr3NW"], { time: t }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [s.pJ.SECONDS]: () => d.intl.string(d.t["1QsMmY"]),
                [s.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t.LRNgHp, { count: t }),
                [s.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.raJpz3, { count: t }),
                [s.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t.KkvKhi, { count: t }),
            },
        },
    };
function m(t) {
    return class extends a.PureComponent {
        static Locations = u;
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
            let i = (0, s.Ul)(t, (t) =>
                (function (t, e, n) {
                    let i = p[n];
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
            let {
                    location: e,
                    messageProps: n,
                    isApplicationStreaming: i,
                    enableUserHoverActivities: l,
                    ...a
                } = this.props,
                { time: o } = this.state,
                d = this.getType();
            if (null == d) return null;
            let u = this.getTimeUnit(o, e, d),
                c = p[e][d];
            if (null == c) return null;
            let A = c[u],
                m = Math.floor((0, s.eZ)(o, u));
            return (0, r.jsx)(t, { ...a, children: A?.(m, n, i, l) });
        }
    };
}
