n.d(t, { Z: () => b }), n(411104), n(47120);
var r,
    l,
    i = n(200651),
    o = n(192379),
    a = n(379649),
    s = n(846519),
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
var p = (((r = p || {}).ACTIVITY_FEED = 'ACTIVITY_FEED'), (r.ACTIVITY_FEED_NEW = 'ACTIVITY_FEED_NEW'), (r.USER_ACTIVITY = 'USER_ACTIVITY'), (r.GAME_LIBRARY_TIME_PLAYED = 'GAME_LIBRARY_TIME_PLAYED'), (r.GAME_LIBRARY_LAST_PLAYED = 'GAME_LIBRARY_LAST_PLAYED'), r),
    f = (((l = f || {}).START = 'START'), (l.END = 'END'), (l.TIME = 'TIME'), l);
let m = (e) => (t, n) => (null == n ? '' : c.NW.format(e(), d({ time: t }, n))),
    g = {
        ACTIVITY_FEED: {
            START: {
                [a.J6.SECONDS]: () => c.NW.string(c.t.ahzZr6),
                [a.J6.MINUTES]: (e) => c.NW.formatToPlainString(c.t['03mIHR'], { time: e }),
                [a.J6.HOURS]: (e) => c.NW.formatToPlainString(c.t.eNoooa, { time: e }),
                [a.J6.DAYS]: (e) => c.NW.formatToPlainString(c.t['2rUo/v'], { time: e })
            },
            END: {
                [a.J6.SECONDS]: () => c.NW.string(c.t.EluAd3),
                [a.J6.MINUTES]: (e) => c.NW.formatToPlainString(c.t.BZxG8f, { time: e }),
                [a.J6.HOURS]: (e) => c.NW.formatToPlainString(c.t.cRMUp6, { time: e }),
                [a.J6.DAYS]: (e) => c.NW.formatToPlainString(c.t['yP1T8/'], { time: e }),
                [a.J6.WEEKS]: (e) => c.NW.formatToPlainString(c.t.AWkdqa, { time: e }),
                [a.J6.MONTHS]: (e) => c.NW.formatToPlainString(c.t.upamAw, { time: e }),
                [a.J6.YEARS]: (e) => c.NW.formatToPlainString(c.t.vfMC2t, { time: e })
            }
        },
        ACTIVITY_FEED_NEW: {
            START: {
                [a.J6.SECONDS]: m(() => c.t.Bf3PRU),
                [a.J6.MINUTES]: m(() => c.t['A9P+dX']),
                [a.J6.HOURS]: m(() => c.t.KwVzfn),
                [a.J6.DAYS]: m(() => c.t.hbUpBA)
            },
            END: {
                [a.J6.SECONDS]: (e) => c.NW.formatToPlainString(c.t.C3MTOD, { seconds: e }),
                [a.J6.MINUTES]: (e) => c.NW.formatToPlainString(c.t['GqQ/Y2'], { minutes: e }),
                [a.J6.HOURS]: (e) => c.NW.formatToPlainString(c.t.c5zfWV, { hours: e }),
                [a.J6.DAYS]: (e) => c.NW.formatToPlainString(c.t.amjnaG, { days: e })
            }
        },
        USER_ACTIVITY: {
            START: {
                [a.J6.SECONDS]: () => c.NW.string(c.t.ahzZr6),
                [a.J6.MINUTES]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? c.NW.formatToPlainString(c.t['03mIHR'], { time: e }) : c.NW.formatToPlainString(c.t['vQml+P'], { time: e });
                },
                [a.J6.HOURS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? c.NW.formatToPlainString(c.t.eNoooa, { time: e }) : c.NW.formatToPlainString(c.t['4Wq+6+'], { time: e });
                },
                [a.J6.DAYS]: function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? c.NW.formatToPlainString(c.t['2rUo/v'], { time: e }) : c.NW.formatToPlainString(c.t['jN3/fX'], { time: e });
                }
            }
        },
        GAME_LIBRARY_TIME_PLAYED: {
            TIME: {
                [a.J6.NONE]: () => c.NW.string(c.t.LqDiCg),
                [a.J6.SECONDS]: (e) => c.NW.formatToPlainString(c.t.xDIDBA, { time: e }),
                [a.J6.MINUTES]: (e) => c.NW.formatToPlainString(c.t.KGqJcX, { time: e }),
                [a.J6.HOURS]: (e) => c.NW.formatToPlainString(c.t.OLchUF, { time: e })
            }
        },
        GAME_LIBRARY_LAST_PLAYED: {
            END: {
                [a.J6.NONE]: () => c.NW.string(c.t.EoWLrq),
                [a.J6.SECONDS]: () => c.NW.string(c.t.QTHa8f),
                [a.J6.MINUTES]: (e) => c.NW.formatToPlainString(c.t.SVEfcX, { time: e }),
                [a.J6.HOURS]: (e) => c.NW.formatToPlainString(c.t['0Gbusb'], { time: e }),
                [a.J6.DAYS]: (e) => c.NW.formatToPlainString(c.t.hnPZZ2, { time: e }),
                [a.J6.WEEKS]: (e) => c.NW.formatToPlainString(c.t.L3fTpK, { time: e }),
                [a.J6.MONTHS]: (e) => c.NW.formatToPlainString(c.t.xAFWQU, { time: e }),
                [a.J6.YEARS]: (e) => c.NW.formatToPlainString(c.t['9Yr3NT'], { time: e })
            }
        }
    };
function b(e) {
    var t, n;
    return (
        (n = class extends (t = o.PureComponent) {
            componentDidMount() {
                this.timer.start(10000, this.update);
            }
            componentDidUpdate(e) {
                let { start: t, end: n, time: r } = this.props;
                (e.start !== t || e.end !== n || e.time !== r) && this.update();
            }
            componentWillUnmount() {
                this.timer.stop();
            }
            getDiff() {
                let { start: e, end: t, time: n } = this.props;
                if (null != n) return n / 1000 / 60;
                let r = Date.now(),
                    l = 0;
                return null != e ? (l = r - e) : null != t && (l = r - t), Math.abs(l) / 1000 / 60;
            }
            getTimeUnit(e, t, n) {
                let r = (0, a.jU)(e, (e) =>
                    (function (e, t, n) {
                        let r = g[n];
                        if (null != r) {
                            let n = r[t];
                            if (null != n) return null != n[e];
                        }
                        return !1;
                    })(e, n, t)
                );
                if (null == r) throw Error('Could not get the time unit in PlayTime with time: '.concat(e, ' for type: ').concat(n, ' in location: ').concat(t));
                return r;
            }
            getType() {
                let { start: e, end: t, time: n } = this.props;
                return null != e ? 'START' : null != t ? 'END' : null != n ? 'TIME' : null;
            }
            render() {
                var t, n;
                let r = this.props,
                    { location: l, messageProps: o, isApplicationStreaming: s } = r,
                    c = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                return l;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        }
                        return l;
                    })(r, ['location', 'messageProps', 'isApplicationStreaming']),
                    { time: u } = this.state,
                    p = this.getType();
                if (null == p) return null;
                let f = this.getTimeUnit(u, l, p),
                    m = g[l][p];
                if (null == m) return null;
                let b = m[f],
                    O = Math.floor((0, a.A3)(u, f));
                return (0, i.jsx)(
                    e,
                    ((t = d({}, c)),
                    (n = n = { children: null == b ? void 0 : b(O, o, s) }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }
            constructor(...e) {
                super(...e),
                    u(this, 'timer', new s.Xp()),
                    u(this, 'state', { time: this.getDiff() }),
                    u(this, 'update', () => {
                        this.setState({ time: this.getDiff() });
                    });
            }
        }),
        u(n, 'Locations', p),
        u(n, 'Types', f),
        n
    );
}
