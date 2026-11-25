n.d(t, { pJ: () => s.pJ, Ay: () => p, $l: () => s.$l });
var l,
    i,
    a = n(477900),
    r = n(582128),
    s = n(499979),
    o = n(451988),
    u = n(792996),
    c =
        (((l = c || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (l.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (l.USER_ACTIVITY = "USER_ACTIVITY"),
        (l.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (l.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (l.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        l),
    d = (((i = d || {}).START = "START"), (i.END = "END"), (i.TIME = "TIME"), i);
function m(e) {
    return (t, n) => (null == n ? "" : u.intl.format(e(), { time: t, ...n }));
}
let A = {
        ACTIVITY_FEED: {
            START: {
                [s.pJ.SECONDS]: () => u.intl.string(u.t["ahzZr+"]),
                [s.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t["03mIHW"], { time: e }),
                [s.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.eNoooU, { time: e }),
                [s.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t["2rUo/p"], { time: e }),
            },
            END: {
                [s.pJ.SECONDS]: () => u.intl.string(u.t.EluAd9),
                [s.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.BZxG8Z, { time: e }),
                [s.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.cRMUpw, { time: e }),
                [s.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.yP1T84, { time: e }),
                [s.pJ.WEEKS]: (e) => u.intl.formatToPlainString(u.t.AWkdqe, { time: e }),
                [s.pJ.MONTHS]: (e) => u.intl.formatToPlainString(u.t.upamA7, { time: e }),
                [s.pJ.YEARS]: (e) => u.intl.formatToPlainString(u.t.vfMC2h, { time: e }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [s.pJ.SECONDS]: m(() => u.t.Bf3PRU),
                [s.pJ.MINUTES]: m(() => u.t["A9P+dT"]),
                [s.pJ.HOURS]: m(() => u.t.KwVzfh),
                [s.pJ.DAYS]: m(() => u.t.hbUpBN),
            },
            END: {
                [s.pJ.SECONDS]: (e) => u.intl.formatToPlainString(u.t.C3MTOD, { seconds: e }),
                [s.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t["GqQ/Y9"], { minutes: e }),
                [s.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.c5zfWZ, { hours: e }),
                [s.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [s.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u.intl.string(u.t["ahzZr+"])
                    );
                },
                [s.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t["03mIHW"], { time: e })
                        : u.intl.formatToPlainString(u.t["vQml+P"], { time: e });
                },
                [s.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t.eNoooU, { time: e })
                        : u.intl.formatToPlainString(u.t["4Wq+6x"], { time: e });
                },
                [s.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t["2rUo/p"], { time: e })
                        : u.intl.formatToPlainString(u.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [s.pJ.NONE]: () => u.intl.string(u.t.LqDiCt),
                [s.pJ.SECONDS]: (e) => u.intl.formatToPlainString(u.t.xDIDBL, { time: e }),
                [s.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.KGqJce, { time: e }),
                [s.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [s.pJ.NONE]: () => u.intl.string(u.t.EoWLru),
                [s.pJ.SECONDS]: () => u.intl.string(u.t.QTHa8b),
                [s.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.SVEfcd, { time: e }),
                [s.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t["0Gbusd"], { time: e }),
                [s.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.hnPZZ7, { time: e }),
                [s.pJ.WEEKS]: (e) => u.intl.formatToPlainString(u.t.L3fTpL, { time: e }),
                [s.pJ.MONTHS]: (e) => u.intl.formatToPlainString(u.t.xAFWQV, { time: e }),
                [s.pJ.YEARS]: (e) => u.intl.formatToPlainString(u.t["9Yr3NW"], { time: e }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [s.pJ.SECONDS]: () => u.intl.string(u.t["1QsMmY"]),
                [s.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.LRNgHp, { count: e }),
                [s.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.raJpz3, { count: e }),
                [s.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.KkvKhi, { count: e }),
            },
        },
    },
    p = (function (e) {
        return class extends r.PureComponent {
            static Locations = c;
            static Types = d;
            timer = new o.IX();
            state = { time: this.getDiff() };
            componentDidMount() {
                this.timer.start(1e4, this.update);
            }
            componentDidUpdate(e) {
                let { start: t, end: n, time: l } = this.props;
                (e.start !== t || e.end !== n || e.time !== l) && this.update();
            }
            componentWillUnmount() {
                this.timer.stop();
            }
            getDiff() {
                let { start: e, end: t, time: n } = this.props;
                if (null != n) return n / 1e3 / 60;
                let l = Date.now(),
                    i = 0;
                return (null != e ? (i = l - e) : null != t && (i = l - t), Math.abs(i) / 1e3 / 60);
            }
            update = () => {
                this.setState({ time: this.getDiff() });
            };
            getTimeUnit(e, t, n) {
                let l = (0, s.Ul)(e, (e) =>
                    (function (e, t, n) {
                        let l = A[n];
                        if (null != l) {
                            let n = l[t];
                            if (null != n) return null != n[e];
                        }
                        return !1;
                    })(e, n, t),
                );
                if (null == l)
                    throw Error(
                        `Could not get the time unit in PlayTime with time: ${e} for type: ${n} in location: ${t}`,
                    );
                return l;
            }
            getType() {
                let { start: e, end: t, time: n } = this.props;
                return null != e ? "START" : null != t ? "END" : null != n ? "TIME" : null;
            }
            render() {
                let { location: t, messageProps: n, isApplicationStreaming: l, ...i } = this.props,
                    { time: r } = this.state,
                    o = this.getType();
                if (null == o) return null;
                let u = this.getTimeUnit(r, t, o),
                    c = A[t][o];
                if (null == c) return null;
                let d = c[u],
                    m = Math.floor((0, s.eZ)(r, u));
                return (0, a.jsx)(e, { ...i, children: d?.(m, n, l) });
            }
        };
    })(function (e) {
        let { children: t, className: n } = e;
        return (0, a.jsx)("span", { className: n, children: t });
    });
