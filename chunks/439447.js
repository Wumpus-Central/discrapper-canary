i.d(e, { A: () => h });
var n,
    l,
    r = i(627968),
    s = i(64700),
    a = i(499979),
    o = i(451988),
    d = i(985018),
    u =
        (((n = u || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (n.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (n.USER_ACTIVITY = "USER_ACTIVITY"),
        (n.USER_ACTIVITY_VOICE_USER = "USER_ACTIVITY_VOICE_USER"),
        (n.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (n.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (n.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        n),
    c = (((l = c || {}).START = "START"), (l.END = "END"), (l.TIME = "TIME"), l);
let A = (t) => (e, i) => (null == i ? "" : d.intl.format(t(), { time: e, ...i })),
    m = {
        ACTIVITY_FEED: {
            START: {
                [a.pJ.SECONDS]: () => d.intl.string(d.t["ahzZr+"]),
                [a.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t["03mIHW"], { time: t }),
                [a.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.eNoooU, { time: t }),
                [a.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t["2rUo/p"], { time: t }),
            },
            END: {
                [a.pJ.SECONDS]: () => d.intl.string(d.t.EluAd9),
                [a.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t.BZxG8Z, { time: t }),
                [a.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.cRMUpw, { time: t }),
                [a.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t.yP1T84, { time: t }),
                [a.pJ.WEEKS]: (t) => d.intl.formatToPlainString(d.t.AWkdqe, { time: t }),
                [a.pJ.MONTHS]: (t) => d.intl.formatToPlainString(d.t.upamA7, { time: t }),
                [a.pJ.YEARS]: (t) => d.intl.formatToPlainString(d.t.vfMC2h, { time: t }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [a.pJ.SECONDS]: A(() => d.t.Bf3PRU),
                [a.pJ.MINUTES]: A(() => d.t["A9P+dT"]),
                [a.pJ.HOURS]: A(() => d.t.KwVzfh),
                [a.pJ.DAYS]: A(() => d.t.hbUpBN),
            },
            END: {
                [a.pJ.SECONDS]: (t) => d.intl.formatToPlainString(d.t.C3MTOD, { seconds: t }),
                [a.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t["GqQ/Y9"], { minutes: t }),
                [a.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.c5zfWZ, { hours: t }),
                [a.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t.amjnaI, { days: t }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [a.pJ.SECONDS]: function (t, e) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d.intl.string(d.t["ahzZr+"])
                    );
                },
                [a.pJ.MINUTES]: function (t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i
                        ? d.intl.formatToPlainString(d.t["03mIHW"], { time: t })
                        : n
                          ? d.intl.formatToPlainString(d.t.w5w79N, { time: t })
                          : d.intl.formatToPlainString(d.t["vQml+P"], { time: t });
                },
                [a.pJ.HOURS]: function (t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i
                        ? d.intl.formatToPlainString(d.t.eNoooU, { time: t })
                        : n
                          ? d.intl.formatToPlainString(d.t.EPkGyE, { time: t })
                          : d.intl.formatToPlainString(d.t["4Wq+6x"], { time: t });
                },
                [a.pJ.DAYS]: function (t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return i
                        ? d.intl.formatToPlainString(d.t["2rUo/p"], { time: t })
                        : n
                          ? d.intl.formatToPlainString(d.t.V3g3dS, { time: t })
                          : d.intl.formatToPlainString(d.t["jN3/fR"], { time: t });
                },
            },
        },
        USER_ACTIVITY_VOICE_USER: {
            START: {
                [a.pJ.SECONDS]: () => d.intl.string(d.t["ahzZr+"]),
                [a.pJ.MINUTES]: function (t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return i
                        ? d.intl.formatToPlainString(d.t["03mIHW"], { time: t })
                        : d.intl.formatToPlainString(d.t.w5w79N, { time: t });
                },
                [a.pJ.HOURS]: function (t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return i
                        ? d.intl.formatToPlainString(d.t.eNoooU, { time: t })
                        : d.intl.formatToPlainString(d.t.EPkGyE, { time: t });
                },
                [a.pJ.DAYS]: function (t, e) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return i
                        ? d.intl.formatToPlainString(d.t["2rUo/p"], { time: t })
                        : d.intl.formatToPlainString(d.t.V3g3dS, { time: t });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [a.pJ.NONE]: () => d.intl.string(d.t.LqDiCt),
                [a.pJ.SECONDS]: (t) => d.intl.formatToPlainString(d.t.xDIDBL, { time: t }),
                [a.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t.KGqJce, { time: t }),
                [a.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.OLchUE, { time: t }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [a.pJ.NONE]: () => d.intl.string(d.t.EoWLru),
                [a.pJ.SECONDS]: () => d.intl.string(d.t.QTHa8b),
                [a.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t.SVEfcd, { time: t }),
                [a.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t["0Gbusd"], { time: t }),
                [a.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t.hnPZZ7, { time: t }),
                [a.pJ.WEEKS]: (t) => d.intl.formatToPlainString(d.t.L3fTpL, { time: t }),
                [a.pJ.MONTHS]: (t) => d.intl.formatToPlainString(d.t.xAFWQV, { time: t }),
                [a.pJ.YEARS]: (t) => d.intl.formatToPlainString(d.t["9Yr3NW"], { time: t }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [a.pJ.SECONDS]: () => d.intl.string(d.t["1QsMmY"]),
                [a.pJ.MINUTES]: (t) => d.intl.formatToPlainString(d.t.LRNgHp, { count: t }),
                [a.pJ.HOURS]: (t) => d.intl.formatToPlainString(d.t.raJpz3, { count: t }),
                [a.pJ.DAYS]: (t) => d.intl.formatToPlainString(d.t.KkvKhi, { count: t }),
            },
        },
    };
function h(t) {
    return class extends s.PureComponent {
        static Locations = u;
        static Types = c;
        timer = new o.IX();
        state = { time: this.getDiff() };
        componentDidMount() {
            this.timer.start(1e4, this.update);
        }
        componentDidUpdate(t) {
            let { start: e, end: i, time: n } = this.props;
            (t.start !== e || t.end !== i || t.time !== n) && this.update();
        }
        componentWillUnmount() {
            this.timer.stop();
        }
        getDiff() {
            let { start: t, end: e, time: i } = this.props;
            if (null != i) return i / 1e3 / 60;
            let n = Date.now(),
                l = 0;
            return null != t ? (l = n - t) : null != e && (l = n - e), Math.abs(l) / 1e3 / 60;
        }
        update = () => {
            this.setState({ time: this.getDiff() });
        };
        getTimeUnit(t, e, i) {
            let n = (0, a.Ul)(t, (t) =>
                (function (t, e, i) {
                    let n = m[i];
                    if (null != n) {
                        let i = n[e];
                        if (null != i) return null != i[t];
                    }
                    return !1;
                })(t, i, e),
            );
            if (null == n)
                throw Error(`Could not get the time unit in PlayTime with time: ${t} for type: ${i} in location: ${e}`);
            return n;
        }
        getType() {
            let { start: t, end: e, time: i } = this.props;
            return null != t ? "START" : null != e ? "END" : null != i ? "TIME" : null;
        }
        render() {
            let {
                    location: e,
                    messageProps: i,
                    isApplicationStreaming: n,
                    enableUserHoverActivities: l,
                    ...s
                } = this.props,
                { time: o } = this.state,
                d = this.getType();
            if (null == d) return null;
            let u = this.getTimeUnit(o, e, d),
                c = m[e][d];
            if (null == c) return null;
            let A = c[u],
                h = Math.floor((0, a.eZ)(o, u));
            return (0, r.jsx)(t, { ...s, children: A?.(h, i, n, l) });
        }
    };
}
