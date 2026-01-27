n.d(t, {
    A: () => j,
}),
    n(896048),
    n(65821);
var r,
    i = n(627968),
    l = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(212245),
    p = n(15285),
    m = n(651743),
    f = n(134861),
    g = n(194871),
    h = n(723702),
    _ = n(715671),
    b = n(652215),
    A = n(985018),
    y = n(168785);

function v(e, t, n) {
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

function x(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
class E extends (r = l.PureComponent) {
    get analyticsLocation() {
        return O(x({}, this.props.analyticsContext.location), {
            object: b.ZSU.BUTTON_CTA,
        });
    }
    hasMultipleLaunchOptions() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1;
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: r, disabledVariant: l = "secondary", tooltipPosition: s } = this.props;
        return (0, i.jsxs)("div", {
            className: y.Yr,
            children: [
                (0, i.jsx)(a.$nd, {
                    text: e,
                    fullWidth: n,
                    size: r,
                    variant: l,
                    disabled: !0,
                }),
                (0, i.jsx)(o.m, {
                    text: t,
                    position: s,
                    children: (0, i.jsx)("div", {
                        className: y.p5,
                    }),
                }),
            ],
        });
    }
    render() {
        let {
            fullWidth: e,
            size: t,
            variant: n,
            isLaunchable: r,
            isLaunching: l,
            isRunning: s,
            hideNotLaunchable: o,
        } = this.props;
        return r
            ? s
                ? this.renderDisabledButton(A.intl.string(A.t["3elwAB"]))
                : (0, i.jsxs)(a.e2v, {
                      size: t,
                      wrap: !1,
                      fullWidth: e,
                      children: [
                          (0, i.jsx)(a.$nd, {
                              text: A.intl.string(A.t["359Pbd"]),
                              variant: n,
                              loading: l,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, i.jsx)(a.K0, {
                                    icon: c.abt,
                                    "aria-label": A.intl.string(A.t.KTPVLL),
                                    variant: "secondary",
                                    onClick: this.handleDropdownClick,
                                })
                              : null,
                      ],
                  })
            : o
              ? null
              : this.renderDisabledButton(
                    A.intl.string(A.t["359Pbd"]),
                    h.isPlatformEmbedded ? A.intl.string(A.t.NASLa3) : A.intl.string(A.t.o1bhkD),
                );
    }
    constructor(...e) {
        super(...e),
            v(this, "handleDropdownClick", (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: l } = this.props;
                if ((null == r || r(e), null == t)) throw Error("Unexpected missing libraryApplication");
                u.L3(
                    e,
                    async () => {
                        let { default: e } = await n.e("33055").then(n.bind(n, 661991));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                O(x({}, n), {
                                    libraryApplication: t,
                                    onPlay: this.handleClick,
                                }),
                            );
                    },
                    {
                        onClose: l,
                    },
                );
            }),
            v(this, "handleClick", () => {
                let {
                    applicationId: e,
                    libraryApplication: t,
                    analyticsListSort: n,
                    analyticsListIndex: r,
                } = this.props;
                _.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: r,
                    },
                });
            });
    }
}

function j(e) {
    let { applicationId: t, libraryApplication: n } = e,
        r = (0, d.p)(),
        [l, a] = (0, s.yK)(
            [f.A, m.A, g.A],
            () => [
                f.A.isConnected(t) || m.A.isLaunchable(t) || (null != n && g.A.isLaunchable(n.id, n.branchId)),
                m.A.launchingGames.has(t),
            ],
            [t, n],
        ),
        o = (0, s.bG)([p.Ay], () => new Set(p.Ay.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, s.bG)([g.A], () => (null != n ? g.A.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(
        E,
        O(x({}, e), {
            analyticsContext: r,
            isLaunchable: l,
            isLaunching: a,
            isRunning: o,
            dispatchState: c,
        }),
    );
}
v(E, "defaultProps", {
    fullWidth: !1,
    size: "md",
    variant: "secondary",
    tooltipPosition: "top",
    hideNotLaunchable: !1,
});
