"use strict";
n.d(t, { pJ: () => o.pJ, $l: () => o.$l, Ay: () => h });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(499979),
    l = n(451988),
    u = n(375708),
    c =
        (((i = c || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (i.USER_ACTIVITY = "USER_ACTIVITY"),
        (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        i),
    d = (((r = d || {}).START = "START"), (r.END = "END"), (r.TIME = "TIME"), r);
let _ = (e) => (t, n) => (null == n ? "" : u.intl.format(e(), { time: t, ...n })),
    f = {
        ACTIVITY_FEED: {
            START: {
                [o.pJ.SECONDS]: () => u.intl.string(u.t["ahzZr+"]),
                [o.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t["03mIHW"], { time: e }),
                [o.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.eNoooU, { time: e }),
                [o.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t["2rUo/p"], { time: e }),
            },
            END: {
                [o.pJ.SECONDS]: () => u.intl.string(u.t.EluAd9),
                [o.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.BZxG8Z, { time: e }),
                [o.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.cRMUpw, { time: e }),
                [o.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.yP1T84, { time: e }),
                [o.pJ.WEEKS]: (e) => u.intl.formatToPlainString(u.t.AWkdqe, { time: e }),
                [o.pJ.MONTHS]: (e) => u.intl.formatToPlainString(u.t.upamA7, { time: e }),
                [o.pJ.YEARS]: (e) => u.intl.formatToPlainString(u.t.vfMC2h, { time: e }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [o.pJ.SECONDS]: _(() => u.t.Bf3PRU),
                [o.pJ.MINUTES]: _(() => u.t["A9P+dT"]),
                [o.pJ.HOURS]: _(() => u.t.KwVzfh),
                [o.pJ.DAYS]: _(() => u.t.hbUpBN),
            },
            END: {
                [o.pJ.SECONDS]: (e) => u.intl.formatToPlainString(u.t.C3MTOD, { seconds: e }),
                [o.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t["GqQ/Y9"], { minutes: e }),
                [o.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.c5zfWZ, { hours: e }),
                [o.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [o.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u.intl.string(u.t["ahzZr+"])
                    );
                },
                [o.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t["03mIHW"], { time: e })
                        : u.intl.formatToPlainString(u.t["vQml+P"], { time: e });
                },
                [o.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t.eNoooU, { time: e })
                        : u.intl.formatToPlainString(u.t["4Wq+6x"], { time: e });
                },
                [o.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? u.intl.formatToPlainString(u.t["2rUo/p"], { time: e })
                        : u.intl.formatToPlainString(u.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [o.pJ.NONE]: () => u.intl.string(u.t.LqDiCt),
                [o.pJ.SECONDS]: (e) => u.intl.formatToPlainString(u.t.xDIDBL, { time: e }),
                [o.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.KGqJce, { time: e }),
                [o.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [o.pJ.NONE]: () => u.intl.string(u.t.EoWLru),
                [o.pJ.SECONDS]: () => u.intl.string(u.t.QTHa8b),
                [o.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.SVEfcd, { time: e }),
                [o.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t["0Gbusd"], { time: e }),
                [o.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.hnPZZ7, { time: e }),
                [o.pJ.WEEKS]: (e) => u.intl.formatToPlainString(u.t.L3fTpL, { time: e }),
                [o.pJ.MONTHS]: (e) => u.intl.formatToPlainString(u.t.xAFWQV, { time: e }),
                [o.pJ.YEARS]: (e) => u.intl.formatToPlainString(u.t["9Yr3NW"], { time: e }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [o.pJ.SECONDS]: () => u.intl.string(u.t["1QsMmY"]),
                [o.pJ.MINUTES]: (e) => u.intl.formatToPlainString(u.t.LRNgHp, { count: e }),
                [o.pJ.HOURS]: (e) => u.intl.formatToPlainString(u.t.raJpz3, { count: e }),
                [o.pJ.DAYS]: (e) => u.intl.formatToPlainString(u.t.KkvKhi, { count: e }),
            },
        },
    },
    h = (function (e) {
        return class extends a.PureComponent {
            static Locations = c;
            static Types = d;
            timer = new l.IX();
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
                    r = 0;
                return null != e ? (r = i - e) : null != t && (r = i - t), Math.abs(r) / 1e3 / 60;
            }
            update = () => {
                this.setState({ time: this.getDiff() });
            };
            getTimeUnit(e, t, n) {
                let i = (0, o.Ul)(e, (e) =>
                    (function (e, t, n) {
                        let i = f[n];
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
                let { location: t, messageProps: n, isApplicationStreaming: i, ...r } = this.props,
                    { time: a } = this.state,
                    l = this.getType();
                if (null == l) return null;
                let u = this.getTimeUnit(a, t, l),
                    c = f[t][l];
                if (null == c) return null;
                let d = c[u],
                    _ = Math.floor((0, o.eZ)(a, u));
                return (0, s.jsx)(e, { ...r, children: d?.(_, n, i) });
            }
        };
    })(function (e) {
        let { children: t, className: n } = e;
        return (0, s.jsx)("span", { className: n, children: t });
    });
