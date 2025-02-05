n.d(t, { Z: () => g }), n(411104), n(47120);
var l,
    i,
    r = n(200651),
    a = n(192379),
    s = n(379649),
    o = n(846519),
    c = n(388032);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var d = (((l = d || {}).ACTIVITY_FEED = 'ACTIVITY_FEED'), (l.ACTIVITY_FEED_NEW = 'ACTIVITY_FEED_NEW'), (l.USER_ACTIVITY = 'USER_ACTIVITY'), (l.GAME_LIBRARY_TIME_PLAYED = 'GAME_LIBRARY_TIME_PLAYED'), (l.GAME_LIBRARY_LAST_PLAYED = 'GAME_LIBRARY_LAST_PLAYED'), l),
    m = (((i = m || {}).START = 'START'), (i.END = 'END'), (i.TIME = 'TIME'), i);
let p = (e) => (t, n) =>
        null == n
            ? ''
            : c.intl.format(e(), {
                  time: t,
                  ...n
              }),
    h = {
        ACTIVITY_FEED: {
            START: {
                [s.J6.SECONDS]: () => c.intl.string(c.t.ahzZr6),
                [s.J6.MINUTES]: (e) => c.intl.formatToPlainString(c.t['03mIHR'], { time: e }),
                [s.J6.HOURS]: (e) => c.intl.formatToPlainString(c.t.eNoooa, { time: e }),
                [s.J6.DAYS]: (e) => c.intl.formatToPlainString(c.t['2rUo/v'], { time: e })
            },
            END: {
                [s.J6.SECONDS]: () => c.intl.string(c.t.EluAd3),
                [s.J6.MINUTES]: (e) => c.intl.formatToPlainString(c.t.BZxG8f, { time: e }),
                [s.J6.HOURS]: (e) => c.intl.formatToPlainString(c.t.cRMUp6, { time: e }),
                [s.J6.DAYS]: (e) => c.intl.formatToPlainString(c.t['yP1T8/'], { time: e }),
                [s.J6.WEEKS]: (e) => c.intl.formatToPlainString(c.t.AWkdqa, { time: e }),
                [s.J6.MONTHS]: (e) => c.intl.formatToPlainString(c.t.upamAw, { time: e }),
                [s.J6.YEARS]: (e) => c.intl.formatToPlainString(c.t.vfMC2t, { time: e })
            }
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [s.J6.SECONDS]: p(() => c.t.Bf3PRU),
                [s.J6.MINUTES]: p(() => c.t['A9P+dX']),
                [s.J6.HOURS]: p(() => c.t.KwVzfn),
                [s.J6.DAYS]: p(() => c.t.hbUpBA)
            },
            END: {
                [s.J6.SECONDS]: (e) => c.intl.formatToPlainString(c.t.C3MTOD, { seconds: e }),
                [s.J6.MINUTES]: (e) => c.intl.formatToPlainString(c.t['GqQ/Y2'], { minutes: e }),
                [s.J6.HOURS]: (e) => c.intl.formatToPlainString(c.t.c5zfWV, { hours: e }),
                [s.J6.DAYS]: (e) => c.intl.formatToPlainString(c.t.amjnaG, { days: e })
            }
        },
        USER_ACTIVITY: {
            START: {
                [s.J6.SECONDS]: () => c.intl.string(c.t.ahzZr6),
                [s.J6.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? c.intl.formatToPlainString(c.t['03mIHR'], { time: e }) : c.intl.formatToPlainString(c.t['vQml+P'], { time: e });
                },
                [s.J6.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? c.intl.formatToPlainString(c.t.eNoooa, { time: e }) : c.intl.formatToPlainString(c.t['4Wq+6+'], { time: e });
                },
                [s.J6.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? c.intl.formatToPlainString(c.t['2rUo/v'], { time: e }) : c.intl.formatToPlainString(c.t['jN3/fX'], { time: e });
                }
            }
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [s.J6.NONE]: () => c.intl.string(c.t.LqDiCg),
                [s.J6.SECONDS]: (e) => c.intl.formatToPlainString(c.t.xDIDBA, { time: e }),
                [s.J6.MINUTES]: (e) => c.intl.formatToPlainString(c.t.KGqJcX, { time: e }),
                [s.J6.HOURS]: (e) => c.intl.formatToPlainString(c.t.OLchUF, { time: e })
            }
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [s.J6.NONE]: () => c.intl.string(c.t.EoWLrq),
                [s.J6.SECONDS]: () => c.intl.string(c.t.QTHa8f),
                [s.J6.MINUTES]: (e) => c.intl.formatToPlainString(c.t.SVEfcX, { time: e }),
                [s.J6.HOURS]: (e) => c.intl.formatToPlainString(c.t['0Gbusb'], { time: e }),
                [s.J6.DAYS]: (e) => c.intl.formatToPlainString(c.t.hnPZZ2, { time: e }),
                [s.J6.WEEKS]: (e) => c.intl.formatToPlainString(c.t.L3fTpK, { time: e }),
                [s.J6.MONTHS]: (e) => c.intl.formatToPlainString(c.t.xAFWQU, { time: e }),
                [s.J6.YEARS]: (e) => c.intl.formatToPlainString(c.t['9Yr3NT'], { time: e })
            }
        }
    };
function g(e) {
    var t, n;
    return (
        (n = class extends (t = a.PureComponent) {
            componentDidMount() {
                this.timer.start(10000, this.update);
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
                if (null != n) return n / 1000 / 60;
                let l = Date.now(),
                    i = 0;
                return null != e ? (i = l - e) : null != t && (i = l - t), Math.abs(i) / 1000 / 60;
            }
            getTimeUnit(e, t, n) {
                let l = (0, s.jU)(e, (e) =>
                    (function (e, t, n) {
                        let l = h[n];
                        if (null != l) {
                            let n = l[t];
                            if (null != n) return null != n[e];
                        }
                        return !1;
                    })(e, n, t)
                );
                if (null == l) throw Error('Could not get the time unit in PlayTime with time: '.concat(e, ' for type: ').concat(n, ' in location: ').concat(t));
                return l;
            }
            getType() {
                let { start: e, end: t, time: n } = this.props;
                return null != e ? 'START' : null != t ? 'END' : null != n ? 'TIME' : null;
            }
            render() {
                let { location: t, messageProps: n, isApplicationStreaming: l, ...i } = this.props,
                    { time: a } = this.state,
                    o = this.getType();
                if (null == o) return null;
                let c = this.getTimeUnit(a, t, o),
                    u = h[t][o];
                if (null == u) return null;
                let d = u[c],
                    m = Math.floor((0, s.A3)(a, c));
                return (0, r.jsx)(e, {
                    ...i,
                    children: null == d ? void 0 : d(m, n, l)
                });
            }
            constructor(...e) {
                super(...e),
                    u(this, 'timer', new o.Xp()),
                    u(this, 'state', { time: this.getDiff() }),
                    u(this, 'update', () => {
                        this.setState({ time: this.getDiff() });
                    });
            }
        }),
        u(n, 'Locations', d),
        u(n, 'Types', m),
        n
    );
}
