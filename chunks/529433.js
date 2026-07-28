n.d(t, { pJ: () => a.pJ, $l: () => a.$l, Ay: () => f });
var i,
    l,
    s = n(627968),
    r = n(64700),
    a = n(499979),
    o = n(451988),
    u = n(375708),
    d =
        (((i = d || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (i.USER_ACTIVITY = "USER_ACTIVITY"),
        (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        i),
    c = (((l = c || {}).START = "START"), (l.END = "END"), (l.TIME = "TIME"), l);
function h(e) {
    return (t, n) => (null == n ? "" : u.intl.format(e(), { time: t, ...n }));
}
let g = {
        ACTIVITY_FEED: {
            START: {
                [a.pJ.SECONDS]: () => u.intl.string(u.t["ahzZr+"]),
                [a.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t["03mIHW"], { time: e }),
                [a.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.eNoooU, { time: e }),
                [a.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t["2rUo/p"], { time: e }),
            },
            END: {
                [a.pJ.SECONDS]: () => u.intl.string(u.t.EluAd9),
                [a.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.BZxG8Z, { time: e }),
                [a.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.cRMUpw, { time: e }),
                [a.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.yP1T84, { time: e }),
                [a.pJ.WEEKS]: (e) => u.intl.formatToPlainString(u.t.AWkdqe, { time: e }),
                [a.pJ.MONTHS]: (e) => u.intl.formatToPlainString(u.t.upamA7, { time: e }),
                [a.pJ.YEARS]: (e) => u.intl.formatToPlainString(u.t.vfMC2h, { time: e }),
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
                [a.pJ.SECONDS]: (e) => u.intl.formatToPlainString(u.t.C3MTOD, { seconds: e }),
                [a.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t["GqQ/Y9"], { minutes: e }),
                [a.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.c5zfWZ, { hours: e }),
                [a.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [a.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u.intl.string(u.t["ahzZr+"])
                    );
                },
                [a.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t["03mIHW"], { time: e })
                        : u.intl.formatToPlainString(u.t["vQml+P"], { time: e });
                },
                [a.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t.eNoooU, { time: e })
                        : u.intl.formatToPlainString(u.t["4Wq+6x"], { time: e });
                },
                [a.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t["2rUo/p"], { time: e })
                        : u.intl.formatToPlainString(u.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [a.pJ.NONE]: () => u.intl.string(u.t.LqDiCt),
                [a.pJ.SECONDS]: (e) => u.intl.formatToPlainString(u.t.xDIDBL, { time: e }),
                [a.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.KGqJce, { time: e }),
                [a.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [a.pJ.NONE]: () => u.intl.string(u.t.EoWLru),
                [a.pJ.SECONDS]: () => u.intl.string(u.t.QTHa8b),
                [a.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.SVEfcd, { time: e }),
                [a.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t["0Gbusd"], { time: e }),
                [a.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.hnPZZ7, { time: e }),
                [a.pJ.WEEKS]: (e) => u.intl.formatToPlainString(u.t.L3fTpL, { time: e }),
                [a.pJ.MONTHS]: (e) => u.intl.formatToPlainString(u.t.xAFWQV, { time: e }),
                [a.pJ.YEARS]: (e) => u.intl.formatToPlainString(u.t["9Yr3NW"], { time: e }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [a.pJ.SECONDS]: () => u.intl.string(u.t["1QsMmY"]),
                [a.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.LRNgHp, { count: e }),
                [a.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.raJpz3, { count: e }),
                [a.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.KkvKhi, { count: e }),
            },
        },
    },
    f = (function (e) {
        return class extends r.PureComponent {
            static Locations = d;
            static Types = c;
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
                let i = (0, a.Ul)(e, (e) =>
                    (function (e, t, n) {
                        let i = g[n];
                        if (null != i) {
                            let n = i[t];
                            if (null != n) return null != n[e];
                        }
                        return !1;
                    })(e, n, t),
                );
                if (null == i)
                    throw Error(
                        `Could not get the time unit in PlayTime with time: ${e} for type: ${n} in location: ${t}`,
                    );
                return i;
            }
            getType() {
                let { start: e, end: t, time: n } = this.props;
                return null != e ? "START" : null != t ? "END" : null != n ? "TIME" : null;
            }
            render() {
                let { location: t, messageProps: n, isApplicationStreaming: i, ...l } = this.props,
                    { time: r } = this.state,
                    o = this.getType();
                if (null == o) return null;
                let u = this.getTimeUnit(r, t, o),
                    d = g[t][o];
                if (null == d) return null;
                let c = d[u],
                    h = Math.floor((0, a.eZ)(r, u));
                return (0, s.jsx)(e, { ...l, children: c?.(h, n, i) });
            }
        };
    })(function (e) {
        let { children: t, className: n } = e;
        return (0, s.jsx)("span", { className: n, children: t });
    });
