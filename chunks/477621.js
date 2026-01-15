r.d(t, { default: () => y }), r(388685);
var n = r(54381),
    l = r(473749),
    o = r(793030),
    i = r(338305),
    c = r(481060),
    a = r(661111),
    s = r(626135),
    u = r(766411),
    h = r(554226),
    d = r(596401),
    g = r(981631),
    p = r(388032);
function f(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                f(e, t, r[t]);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
class m extends l.PureComponent {
    componentDidMount() {
        (this.mountedAt = Date.now()), (this.maxScrolledPercentage = 0), this.track(g.rMx.CHANGE_LOG_OPENED, {}, !0);
    }
    componentWillUnmount() {
        this.track(g.rMx.CHANGE_LOG_CLOSED);
    }
    render() {
        return (0, n.jsx)(
            h.Z,
            b(O({}, this.props), {
                changeLog: this.props.changeLog,
                onClose: this.close,
                onScroll: this.handleScroll,
                track: this.track,
            }),
        );
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            f(this, "maxScrolledPercentage", 0),
            f(this, "mountedAt", 0),
            f(this, "close", () => ((0, c.Mr3)(d.Xd), Promise.resolve())),
            f(this, "handleScroll", (e) => {
                let { offsetHeight: t, scrollHeight: r, scrollTop: n } = e.getScrollerState();
                this.maxScrolledPercentage = Math.min(Math.max(this.maxScrolledPercentage, n / (r - t)), 1);
            }),
            f(this, "track", function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    { changeLog: l } = t.props,
                    { date: o, revision: i } = l,
                    c = O({ change_log_id: "".concat(o, ":").concat(i) }, r);
                n ||
                    (c = O(
                        {
                            seconds_open: Math.round((Date.now() - t.mountedAt) / 1000),
                            max_scrolled_percentage: 100 * parseInt(t.maxScrolledPercentage.toPrecision(4), 10),
                        },
                        c,
                    )),
                    s.default.track(e, c);
            });
    }
}
function y(e) {
    let { changelog: t, loaded: r, clientTooOld: c } = (0, u.E)();
    if (
        (l.useEffect(() => {
            if (r && null != t) return () => a.Z.markChangelogAsSeen(t.id, t.date);
        }, [r, t]),
        c)
    )
        return (0, n.jsx)(
            o.Modal,
            O(
                {
                    title: p.intl.string(p.t.V9ospk),
                    actions: [
                        {
                            text: p.intl.string(p.t.BddRzS),
                            onClick: e.onClose,
                        },
                    ],
                },
                e,
            ),
        );
    if (null == t)
        if (r)
            return (0, n.jsx)(
                o.Modal,
                O(
                    {
                        title: p.intl.string(p.t.O1iRT8),
                        actions: [
                            {
                                text: p.intl.string(p.t.BddRzS),
                                onClick: e.onClose,
                            },
                        ],
                    },
                    e,
                ),
            );
        else return (0, i.Z)(e);
    return (0, n.jsx)(m, b(O({}, e), { changeLog: t }));
}
