(n.d(t, { default: () => h }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(481060),
    a = n(661111),
    l = n(766411),
    s = n(626135),
    c = n(388080),
    d = n(981631),
    u = n(596401),
    p = n(388032),
    m = n(104313);
function b(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
class g extends o.PureComponent {
    componentDidMount() {
        ((this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(d.rMx.CHANGE_LOG_OPENED, {}, !0));
    }
    componentWillUnmount() {
        this.track(d.rMx.CHANGE_LOG_CLOSED);
    }
    render() {
        var e, t;
        return (0, r.jsx)(
            c.Z,
            ((e = _({}, this.props)),
            (t = t =
                {
                    onClose: this.close,
                    onScroll: this.handleScroll,
                    track: this.track
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e)
        );
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            b(this, 'maxScrolledPercentage', 0),
            b(this, 'mountedAt', 0),
            b(this, 'close', () => {
                (0, i.Mr3)(u.Xd);
            }),
            b(this, 'handleScroll', (e) => {
                let { offsetHeight: t, scrollHeight: n, scrollTop: r } = e.getScrollerState();
                this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, r / (n - t)), 1);
            }),
            b(this, 'track', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    { changeLog: o } = t.props,
                    { date: i, revision: a } = o,
                    l = _({ change_log_id: ''.concat(i, ':').concat(a) }, n);
                (r ||
                    (l = _(
                        {
                            seconds_open: Math.round((Date.now() - t.mountedAt) / 1000),
                            max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10)
                        },
                        l
                    )),
                    s.default.track(e, l));
            }));
    }
}
function h(e) {
    let { changelog: t, loaded: n, clientTooOld: s } = (0, l.E)();
    if (
        (o.useEffect(() => {
            if (n && null != t) return () => a.Z.markChangelogAsSeen(t.id, t.date);
        }, [n, t]),
        s)
    )
        return (0, r.jsx)(i.Y0X, {
            transitionState: e.transitionState,
            parentComponent: 'ChangeLog',
            children: (0, r.jsx)('div', {
                className: m.empty,
                children: (0, r.jsx)(i.X6q, {
                    variant: 'heading-lg/medium',
                    children: p.intl.string(p.t.V9ospq)
                })
            })
        });
    if (null == t)
        if (n)
            return (0, r.jsx)(i.Y0X, {
                transitionState: e.transitionState,
                parentComponent: 'ChangeLog',
                children: (0, r.jsx)('div', {
                    className: m.empty,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-md/semibold',
                        children: p.intl.string(p.t.O1iRT0)
                    })
                })
            });
        else
            return (0, r.jsx)(i.Y0X, {
                transitionState: e.transitionState,
                parentComponent: 'ChangeLog',
                children: (0, r.jsx)('div', {
                    className: m.empty,
                    children: (0, r.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES })
                })
            });
    return (0, r.jsx)(i.Y0X, {
        transitionState: e.transitionState,
        parentComponent: 'ChangeLog',
        children: (0, r.jsx)(g, { changeLog: t })
    });
}
