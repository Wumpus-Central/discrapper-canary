n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(411104),
    n(47120);
var i,
    l,
    a,
    r,
    s = n(200651),
    o = n(192379),
    c = n(379649),
    u = n(846519),
    d = n(388032);
function m(e, t, n) {
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
((a = i || (i = {})).ACTIVITY_FEED = 'ACTIVITY_FEED'), (a.ACTIVITY_FEED_NEW = 'ACTIVITY_FEED_NEW'), (a.USER_ACTIVITY = 'USER_ACTIVITY'), (a.GAME_LIBRARY_TIME_PLAYED = 'GAME_LIBRARY_TIME_PLAYED'), (a.GAME_LIBRARY_LAST_PLAYED = 'GAME_LIBRARY_LAST_PLAYED'), ((r = l || (l = {})).START = 'START'), (r.END = 'END'), (r.TIME = 'TIME');
let f = (e) => (t, n) =>
        null == n
            ? ''
            : d.intl.format(e(), {
                  time: t,
                  ...n
              }),
    p = {
        ACTIVITY_FEED: {
            START: {
                [c.J6.SECONDS]: () => d.intl.string(d.t.ahzZr6),
                [c.J6.MINUTES]: (e) => d.intl.formatToPlainString(d.t['03mIHR'], { time: e }),
                [c.J6.HOURS]: (e) => d.intl.formatToPlainString(d.t.eNoooa, { time: e }),
                [c.J6.DAYS]: (e) => d.intl.formatToPlainString(d.t['2rUo/v'], { time: e })
            },
            END: {
                [c.J6.SECONDS]: () => d.intl.string(d.t.EluAd3),
                [c.J6.MINUTES]: (e) => d.intl.formatToPlainString(d.t.BZxG8f, { time: e }),
                [c.J6.HOURS]: (e) => d.intl.formatToPlainString(d.t.cRMUp6, { time: e }),
                [c.J6.DAYS]: (e) => d.intl.formatToPlainString(d.t['yP1T8/'], { time: e }),
                [c.J6.WEEKS]: (e) => d.intl.formatToPlainString(d.t.AWkdqa, { time: e }),
                [c.J6.MONTHS]: (e) => d.intl.formatToPlainString(d.t.upamAw, { time: e }),
                [c.J6.YEARS]: (e) => d.intl.formatToPlainString(d.t.vfMC2t, { time: e })
            }
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [c.J6.SECONDS]: f(() => d.t.Bf3PRU),
                [c.J6.MINUTES]: f(() => d.t['A9P+dX']),
                [c.J6.HOURS]: f(() => d.t.KwVzfn),
                [c.J6.DAYS]: f(() => d.t.hbUpBA)
            },
            END: {
                [c.J6.SECONDS]: (e) => d.intl.formatToPlainString(d.t.C3MTOD, { seconds: e }),
                [c.J6.MINUTES]: (e) => d.intl.formatToPlainString(d.t['GqQ/Y2'], { minutes: e }),
                [c.J6.HOURS]: (e) => d.intl.formatToPlainString(d.t.c5zfWV, { hours: e }),
                [c.J6.DAYS]: (e) => d.intl.formatToPlainString(d.t.amjnaG, { days: e })
            }
        },
        USER_ACTIVITY: {
            START: {
                [c.J6.SECONDS]: () => d.intl.string(d.t.ahzZr6),
                [c.J6.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? d.intl.formatToPlainString(d.t['03mIHR'], { time: e }) : d.intl.formatToPlainString(d.t['vQml+P'], { time: e });
                },
                [c.J6.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? d.intl.formatToPlainString(d.t.eNoooa, { time: e }) : d.intl.formatToPlainString(d.t['4Wq+6+'], { time: e });
                },
                [c.J6.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? d.intl.formatToPlainString(d.t['2rUo/v'], { time: e }) : d.intl.formatToPlainString(d.t['jN3/fX'], { time: e });
                }
            }
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [c.J6.NONE]: () => d.intl.string(d.t.LqDiCg),
                [c.J6.SECONDS]: (e) => d.intl.formatToPlainString(d.t.xDIDBA, { time: e }),
                [c.J6.MINUTES]: (e) => d.intl.formatToPlainString(d.t.KGqJcX, { time: e }),
                [c.J6.HOURS]: (e) => d.intl.formatToPlainString(d.t.OLchUF, { time: e })
            }
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [c.J6.NONE]: () => d.intl.string(d.t.EoWLrq),
                [c.J6.SECONDS]: () => d.intl.string(d.t.QTHa8f),
                [c.J6.MINUTES]: (e) => d.intl.formatToPlainString(d.t.SVEfcX, { time: e }),
                [c.J6.HOURS]: (e) => d.intl.formatToPlainString(d.t['0Gbusb'], { time: e }),
                [c.J6.DAYS]: (e) => d.intl.formatToPlainString(d.t.hnPZZ2, { time: e }),
                [c.J6.WEEKS]: (e) => d.intl.formatToPlainString(d.t.L3fTpK, { time: e }),
                [c.J6.MONTHS]: (e) => d.intl.formatToPlainString(d.t.xAFWQU, { time: e }),
                [c.J6.YEARS]: (e) => d.intl.formatToPlainString(d.t['9Yr3NT'], { time: e })
            }
        }
    };
function h(e) {
    var t, n;
    return (
        (n = class extends (t = o.PureComponent) {
            componentDidMount() {
                this.timer.start(10000, this.update);
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
                if (null != n) return n / 1000 / 60;
                let i = Date.now(),
                    l = 0;
                return null != e ? (l = i - e) : null != t && (l = i - t), Math.abs(l) / 1000 / 60;
            }
            getTimeUnit(e, t, n) {
                let i = (0, c.jU)(e, (e) =>
                    (function (e, t, n) {
                        let i = p[n];
                        if (null != i) {
                            let n = i[t];
                            if (null != n) return null != n[e];
                        }
                        return !1;
                    })(e, n, t)
                );
                if (null == i) throw Error('Could not get the time unit in PlayTime with time: '.concat(e, ' for type: ').concat(n, ' in location: ').concat(t));
                return i;
            }
            getType() {
                let { start: e, end: t, time: n } = this.props;
                if (null != e) return 'START';
                if (null != t) return 'END';
                if (null != n) return 'TIME';
                return null;
            }
            render() {
                let { location: t, messageProps: n, isApplicationStreaming: i, ...l } = this.props,
                    { time: a } = this.state,
                    r = this.getType();
                if (null == r) return null;
                let o = this.getTimeUnit(a, t, r),
                    u = p[t][r];
                if (null == u) return null;
                let d = u[o],
                    m = Math.floor((0, c.A3)(a, o));
                return (0, s.jsx)(e, {
                    ...l,
                    children: null == d ? void 0 : d(m, n, i)
                });
            }
            constructor(...e) {
                super(...e),
                    m(this, 'timer', new u.Xp()),
                    m(this, 'state', { time: this.getDiff() }),
                    m(this, 'update', () => {
                        this.setState({ time: this.getDiff() });
                    });
            }
        }),
        m(n, 'Locations', i),
        m(n, 'Types', l),
        n
    );
}
