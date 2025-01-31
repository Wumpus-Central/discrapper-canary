n.d(t, { default: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    d = n(481060),
    o = n(661111),
    a = n(766411),
    l = n(626135),
    s = n(388080),
    c = n(981631),
    m = n(596401),
    _ = n(388032),
    h = n(598092);
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
class u extends i.PureComponent {
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(c.rMx.CHANGE_LOG_OPENED, {}, !0);
    }
    componentWillUnmount() {
        this.track(c.rMx.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, r.jsx)(s.Z, {
            ...this.props,
            onClose: this.close,
            onScroll: this.handleScroll,
            track: this.track
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            b(this, 'maxScrolledPercentage', 0),
            b(this, 'mountedAt', 0),
            b(this, 'close', () => {
                (0, d.Mr3)(m.Xd);
            }),
            b(this, 'handleScroll', (e) => {
                let { offsetHeight: t, scrollHeight: n, scrollTop: r } = e.getScrollerState();
                this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, r / (n - t)), 1);
            }),
            b(this, 'track', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    { changeLog: i } = t.props,
                    { date: d, revision: o } = i,
                    a = {
                        change_log_id: ''.concat(d, ':').concat(o),
                        ...n
                    };
                r ||
                    (a = {
                        seconds_open: Math.round((Date.now() - t.mountedAt) / 1000),
                        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                        ...a
                    }),
                    l.default.track(e, a);
            });
    }
}
function g(e) {
    let { changelog: t, loaded: n, clientTooOld: l } = (0, a.E)();
    return (i.useEffect(() => {
        if (n && null != t) return () => o.Z.markChangelogAsSeen(t.id, t.date);
    }, [n, t]),
    l)
        ? (0, r.jsx)(d.Y0X, {
              transitionState: e.transitionState,
              children: (0, r.jsx)('div', {
                  className: h.empty,
                  children: (0, r.jsx)(d.X6q, {
                      variant: 'heading-lg/medium',
                      children: _.intl.string(_.t.V9ospq)
                  })
              })
          })
        : null == t
          ? n
              ? (0, r.jsx)(d.Y0X, {
                    transitionState: e.transitionState,
                    children: (0, r.jsx)('div', {
                        className: h.empty,
                        children: (0, r.jsx)(d.Text, {
                            variant: 'text-md/semibold',
                            children: _.intl.string(_.t.O1iRT0)
                        })
                    })
                })
              : (0, r.jsx)(d.Y0X, {
                    transitionState: e.transitionState,
                    children: (0, r.jsx)('div', {
                        className: h.empty,
                        children: (0, r.jsx)(d.$jN, { type: d.$jN.Type.WANDERING_CUBES })
                    })
                })
          : (0, r.jsx)(d.Y0X, {
                transitionState: e.transitionState,
                children: (0, r.jsx)(u, { changeLog: t })
            });
}
