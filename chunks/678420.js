r.d(t, { default: () => h }), r(47120);
var n = r(200651),
    o = r(192379),
    i = r(481060),
    a = r(661111),
    s = r(766411),
    l = r(626135),
    c = r(388080),
    d = r(981631),
    u = r(596401),
    p = r(388032),
    m = r(104313);
function b(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                b(e, t, r[t]);
            });
    }
    return e;
}
class g extends o.PureComponent {
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(d.rMx.CHANGE_LOG_OPENED, {}, !0);
    }
    componentWillUnmount() {
        this.track(d.rMx.CHANGE_LOG_CLOSED);
    }
    render() {
        var e, t;
        return (0, n.jsx)(
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
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(t)).forEach(function (r) {
                      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                  }),
            e)
        );
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            b(this, 'maxScrolledPercentage', 0),
            b(this, 'mountedAt', 0),
            b(this, 'close', () => {
                (0, i.Mr3)(u.Xd);
            }),
            b(this, 'handleScroll', (e) => {
                let { offsetHeight: t, scrollHeight: r, scrollTop: n } = e.getScrollerState();
                this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, n / (r - t)), 1);
            }),
            b(this, 'track', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    { changeLog: o } = t.props,
                    { date: i, revision: a } = o,
                    s = _({ change_log_id: ''.concat(i, ':').concat(a) }, r);
                n ||
                    (s = _(
                        {
                            seconds_open: Math.round((Date.now() - t.mountedAt) / 1000),
                            max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10)
                        },
                        s
                    )),
                    l.default.track(e, s);
            });
    }
}
function h(e) {
    let { changelog: t, loaded: r, clientTooOld: l } = (0, s.E)();
    if (
        (o.useEffect(() => {
            if (r && null != t) return () => a.Z.markChangelogAsSeen(t.id, t.date);
        }, [r, t]),
        l)
    )
        return (0, n.jsx)(i.Y0X, {
            transitionState: e.transitionState,
            children: (0, n.jsx)('div', {
                className: m.empty,
                children: (0, n.jsx)(i.X6q, {
                    variant: 'heading-lg/medium',
                    children: p.NW.string(p.t.V9ospq)
                })
            })
        });
    if (null == t)
        if (r)
            return (0, n.jsx)(i.Y0X, {
                transitionState: e.transitionState,
                children: (0, n.jsx)('div', {
                    className: m.empty,
                    children: (0, n.jsx)(i.Text, {
                        variant: 'text-md/semibold',
                        children: p.NW.string(p.t.O1iRT0)
                    })
                })
            });
        else
            return (0, n.jsx)(i.Y0X, {
                transitionState: e.transitionState,
                children: (0, n.jsx)('div', {
                    className: m.empty,
                    children: (0, n.jsx)(i.$jN, { type: i.$jN.Type.WANDERING_CUBES })
                })
            });
    return (0, n.jsx)(i.Y0X, {
        transitionState: e.transitionState,
        children: (0, n.jsx)(g, { changeLog: t })
    });
}
