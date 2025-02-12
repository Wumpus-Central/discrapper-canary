n.d(t, { default: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(661111),
    s = n(766411),
    l = n(626135),
    d = n(388080),
    c = n(981631),
    u = n(596401),
    _ = n(388032),
    m = n(381105);
function p(e, t, n) {
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
class h extends i.PureComponent {
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(c.rMx.CHANGE_LOG_OPENED, {}, !0);
    }
    componentWillUnmount() {
        this.track(c.rMx.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, r.jsx)(d.Z, {
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
            p(this, 'maxScrolledPercentage', 0),
            p(this, 'mountedAt', 0),
            p(this, 'close', () => {
                (0, a.Mr3)(u.Xd);
            }),
            p(this, 'handleScroll', (e) => {
                let { offsetHeight: t, scrollHeight: n, scrollTop: r } = e.getScrollerState();
                this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, r / (n - t)), 1);
            }),
            p(this, 'track', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    { changeLog: i } = t.props,
                    { date: a, revision: o } = i,
                    s = {
                        change_log_id: ''.concat(a, ':').concat(o),
                        ...n
                    };
                r ||
                    (s = {
                        seconds_open: Math.round((Date.now() - t.mountedAt) / 1000),
                        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                        ...s
                    }),
                    l.default.track(e, s);
            });
    }
}
function g(e) {
    let { changelog: t, loaded: n, clientTooOld: l } = (0, s.E)();
    return (i.useEffect(() => {
        if (n && null != t) return () => o.Z.markChangelogAsSeen(t.id, t.date);
    }, [n, t]),
    l)
        ? (0, r.jsx)(a.Y0X, {
              transitionState: e.transitionState,
              children: (0, r.jsx)('div', {
                  className: m.empty,
                  children: (0, r.jsx)(a.X6q, {
                      variant: 'heading-lg/medium',
                      children: _.intl.string(_.t.V9ospq)
                  })
              })
          })
        : null == t
          ? n
              ? (0, r.jsx)(a.Y0X, {
                    transitionState: e.transitionState,
                    children: (0, r.jsx)('div', {
                        className: m.empty,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-md/semibold',
                            children: _.intl.string(_.t.O1iRT0)
                        })
                    })
                })
              : (0, r.jsx)(a.Y0X, {
                    transitionState: e.transitionState,
                    children: (0, r.jsx)('div', {
                        className: m.empty,
                        children: (0, r.jsx)(a.$jN, { type: a.$jN.Type.WANDERING_CUBES })
                    })
                })
          : (0, r.jsx)(a.Y0X, {
                transitionState: e.transitionState,
                children: (0, r.jsx)(h, { changeLog: t })
            });
}
