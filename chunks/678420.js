n.r(t),
    n.d(t, {
        default: function () {
            return p;
        }
    }),
    n(47120);
var l = n(200651),
    r = n(192379),
    o = n(481060),
    a = n(661111),
    i = n(766411),
    s = n(626135),
    c = n(388080),
    d = n(981631),
    h = n(596401),
    u = n(388032),
    g = n(598092);
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
class x extends r.PureComponent {
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(d.rMx.CHANGE_LOG_OPENED, {}, !0);
    }
    componentWillUnmount() {
        this.track(d.rMx.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, l.jsx)(c.Z, {
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
            m(this, 'maxScrolledPercentage', 0),
            m(this, 'mountedAt', 0),
            m(this, 'close', () => {
                (0, o.closeModal)(h.Xd);
            }),
            m(this, 'handleScroll', (e) => {
                let { offsetHeight: t, scrollHeight: n, scrollTop: l } = e.getScrollerState();
                this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, l / (n - t)), 1);
            }),
            m(this, 'track', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    { changeLog: r } = t.props,
                    { date: o, revision: a } = r,
                    i = {
                        change_log_id: ''.concat(o, ':').concat(a),
                        ...n
                    };
                !l &&
                    (i = {
                        seconds_open: Math.round((Date.now() - t.mountedAt) / 1000),
                        max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                        ...i
                    }),
                    s.default.track(e, i);
            });
    }
}
function p(e) {
    let { changelog: t, loaded: n, clientTooOld: s } = (0, i.E)();
    if (
        (r.useEffect(() => {
            if (n && null != t) return () => a.Z.markChangelogAsSeen(t.id, t.date);
        }, [n, t]),
        s)
    )
        return (0, l.jsx)(o.ModalRoot, {
            transitionState: e.transitionState,
            children: (0, l.jsx)('div', {
                className: g.empty,
                children: (0, l.jsx)(o.Heading, {
                    variant: 'heading-lg/medium',
                    children: u.intl.string(u.t.V9ospq)
                })
            })
        });
    if (null == t)
        return n
            ? (0, l.jsx)(o.ModalRoot, {
                  transitionState: e.transitionState,
                  children: (0, l.jsx)('div', {
                      className: g.empty,
                      children: (0, l.jsx)(o.Text, {
                          variant: 'text-md/semibold',
                          children: u.intl.string(u.t.O1iRT0)
                      })
                  })
              })
            : (0, l.jsx)(o.ModalRoot, {
                  transitionState: e.transitionState,
                  children: (0, l.jsx)('div', {
                      className: g.empty,
                      children: (0, l.jsx)(o.Spinner, { type: o.Spinner.Type.WANDERING_CUBES })
                  })
              });
    return (0, l.jsx)(o.ModalRoot, {
        transitionState: e.transitionState,
        children: (0, l.jsx)(x, { changeLog: t })
    });
}
