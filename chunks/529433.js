"use strict";
n.d(t, { pJ: () => l.pJ, $l: () => l.$l, Ay: () => A });
var i,
    r,
    a = n(627968),
    s = n(64700),
    l = n(499979),
    o = n(451988),
    d = n(375708),
    c =
        (((i = c || {}).ACTIVITY_FEED = "ACTIVITY_FEED"),
        (i.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW"),
        (i.USER_ACTIVITY = "USER_ACTIVITY"),
        (i.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED"),
        (i.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED"),
        (i.VOICE_CHANNEL_HISTORY = "VOICE_CHANNEL_HISTORY"),
        i),
    u = (((r = u || {}).START = "START"), (r.END = "END"), (r.TIME = "TIME"), r);
function _(e) {
    return (t, n) => (null == n ? "" : d.intl.format(e(), { time: t, ...n }));
}
let E = {
        ACTIVITY_FEED: {
            START: {
                [l.pJ.SECONDS]: () => d.intl.string(d.t["ahzZr+"]),
                [l.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t["03mIHW"], { time: e }),
                [l.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.eNoooU, { time: e }),
                [l.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t["2rUo/p"], { time: e }),
            },
            END: {
                [l.pJ.SECONDS]: () => d.intl.string(d.t.EluAd9),
                [l.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t.BZxG8Z, { time: e }),
                [l.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.cRMUpw, { time: e }),
                [l.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t.yP1T84, { time: e }),
                [l.pJ.WEEKS]: (e) => d.intl.formatToPlainString(d.t.AWkdqe, { time: e }),
                [l.pJ.MONTHS]: (e) => d.intl.formatToPlainString(d.t.upamA7, { time: e }),
                [l.pJ.YEARS]: (e) => d.intl.formatToPlainString(d.t.vfMC2h, { time: e }),
            },
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [l.pJ.SECONDS]: _(() => d.t.Bf3PRU),
                [l.pJ.MINUTES]: _(() => d.t["A9P+dT"]),
                [l.pJ.HOURS]: _(() => d.t.KwVzfh),
                [l.pJ.DAYS]: _(() => d.t.hbUpBN),
            },
            END: {
                [l.pJ.SECONDS]: (e) => d.intl.formatToPlainString(d.t.C3MTOD, { seconds: e }),
                [l.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t["GqQ/Y9"], { minutes: e }),
                [l.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.c5zfWZ, { hours: e }),
                [l.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t.amjnaI, { days: e }),
            },
        },
        USER_ACTIVITY: {
            START: {
                [l.pJ.SECONDS]: function (e, t) {
                    return (
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d.intl.string(d.t["ahzZr+"])
                    );
                },
                [l.pJ.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? d.intl.formatToPlainString(d.t["03mIHW"], { time: e })
                        : d.intl.formatToPlainString(d.t["vQml+P"], { time: e });
                },
                [l.pJ.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? d.intl.formatToPlainString(d.t.eNoooU, { time: e })
                        : d.intl.formatToPlainString(d.t["4Wq+6x"], { time: e });
                },
                [l.pJ.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n
                        ? d.intl.formatToPlainString(d.t["2rUo/p"], { time: e })
                        : d.intl.formatToPlainString(d.t["jN3/fR"], { time: e });
                },
            },
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [l.pJ.NONE]: () => d.intl.string(d.t.LqDiCt),
                [l.pJ.SECONDS]: (e) => d.intl.formatToPlainString(d.t.xDIDBL, { time: e }),
                [l.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t.KGqJce, { time: e }),
                [l.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.OLchUE, { time: e }),
            },
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [l.pJ.NONE]: () => d.intl.string(d.t.EoWLru),
                [l.pJ.SECONDS]: () => d.intl.string(d.t.QTHa8b),
                [l.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t.SVEfcd, { time: e }),
                [l.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t["0Gbusd"], { time: e }),
                [l.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t.hnPZZ7, { time: e }),
                [l.pJ.WEEKS]: (e) => d.intl.formatToPlainString(d.t.L3fTpL, { time: e }),
                [l.pJ.MONTHS]: (e) => d.intl.formatToPlainString(d.t.xAFWQV, { time: e }),
                [l.pJ.YEARS]: (e) => d.intl.formatToPlainString(d.t["9Yr3NW"], { time: e }),
            },
        },
        VOICE_CHANNEL_HISTORY: {
            END: {
                [l.pJ.SECONDS]: () => d.intl.string(d.t["1QsMmY"]),
                [l.pJ.MINUTES]: (e) => d.intl.formatToPlainString(d.t.LRNgHp, { count: e }),
                [l.pJ.HOURS]: (e) => d.intl.formatToPlainString(d.t.raJpz3, { count: e }),
                [l.pJ.DAYS]: (e) => d.intl.formatToPlainString(d.t.KkvKhi, { count: e }),
            },
        },
    },
    A = (function (e) {
        return class extends s.PureComponent {
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
                    r = 0;
                return null != e ? (r = i - e) : null != t && (r = i - t), Math.abs(r) / 1e3 / 60;
            }
            update = () => {
                this.setState({ time: this.getDiff() });
            };
            getTimeUnit(e, t, n) {
                let i = (0, l.Ul)(e, (e) =>
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
                    { time: s } = this.state,
                    o = this.getType();
                if (null == o) return null;
                let d = this.getTimeUnit(s, t, o),
                    c = E[t][o];
                if (null == c) return null;
                let u = c[d],
                    _ = Math.floor((0, l.eZ)(s, d));
                return (0, a.jsx)(e, { ...r, children: u?.(_, n, i) });
            }
        };
    })(function (e) {
        let { children: t, className: n } = e;
        return (0, a.jsx)("span", { className: n, children: t });
    });
