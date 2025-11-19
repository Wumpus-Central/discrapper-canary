n.d(t, { default: () => x }), n(388685);
var r = n(54381),
    l = n(473749),
    o = n(481060),
    a = n(661111),
    i = n(626135),
    s = n(766411),
    c = n(554226),
    d = n(596401),
    h = n(981631),
    u = n(388032),
    g = n(562613);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
class f extends l.PureComponent {
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(h.rMx.CHANGE_LOG_OPENED, {}, !0);
    }
    componentWillUnmount() {
        this.track(h.rMx.CHANGE_LOG_CLOSED);
    }
    render() {
        var e, t;
        return (0, r.jsx)(
            c.Z,
            ((e = m({}, this.props)),
            (t = t =
                {
                    onClose: this.close,
                    onScroll: this.handleScroll,
                    track: this.track,
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
            e),
        );
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            p(this, "maxScrolledPercentage", 0),
            p(this, "mountedAt", 0),
            p(this, "close", () => {
                (0, o.Mr3)(d.Xd);
            }),
            p(this, "handleScroll", (e) => {
                let { offsetHeight: t, scrollHeight: n, scrollTop: r } = e.getScrollerState();
                this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, r / (n - t)), 1);
            }),
            p(this, "track", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    { changeLog: l } = t.props,
                    { date: o, revision: a } = l,
                    s = m({ change_log_id: "".concat(o, ":").concat(a) }, n);
                r ||
                    (s = m(
                        {
                            seconds_open: Math.round((Date.now() - t.mountedAt) / 1000),
                            max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                        },
                        s,
                    )),
                    i.default.track(e, s);
            });
    }
}
function x(e) {
    let { changelog: t, loaded: n, clientTooOld: i } = (0, s.E)();
    if (
        (l.useEffect(() => {
            if (n && null != t) return () => a.Z.markChangelogAsSeen(t.id, t.date);
        }, [n, t]),
        i)
    )
        return (0, r.jsx)(o.Y0X, {
            transitionState: e.transitionState,
            parentComponent: "ChangeLog",
            children: (0, r.jsx)("div", {
                className: g.empty,
                children: (0, r.jsx)(o.Heading, {
                    variant: "heading-lg/medium",
                    children: u.intl.string(u.t.V9ospk),
                }),
            }),
        });
    if (null == t)
        if (n)
            return (0, r.jsx)(o.Y0X, {
                transitionState: e.transitionState,
                parentComponent: "ChangeLog",
                children: (0, r.jsx)("div", {
                    className: g.empty,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        children: u.intl.string(u.t.O1iRT8),
                    }),
                }),
            });
        else
            return (0, r.jsx)(o.Y0X, {
                transitionState: e.transitionState,
                parentComponent: "ChangeLog",
                children: (0, r.jsx)("div", {
                    className: g.empty,
                    children: (0, r.jsx)(o.$jN, { type: o.$jN.Type.WANDERING_CUBES }),
                }),
            });
    return (0, r.jsx)(o.Y0X, {
        transitionState: e.transitionState,
        parentComponent: "ChangeLog",
        children: (0, r.jsx)(f, { changeLog: t }),
    });
}
