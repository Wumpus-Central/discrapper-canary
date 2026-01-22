n.d(t, {
    A: () => T,
}),
    n(896048),
    n(65821);
var r,
    i = n(627968),
    a = n(64700),
    s = n(158954),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(212245),
    f = n(15285),
    p = n(651743),
    _ = n(134861),
    h = n(194871),
    m = n(723702),
    g = n(715671),
    E = n(652215),
    b = n(985018),
    y = n(168785);

function O(e, t, n) {
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

function A(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}

function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class I extends (r = a.PureComponent) {
    get analyticsLocation() {
        return S(A({}, this.props.analyticsContext.location), {
            object: E.ZSU.BUTTON_CTA,
        });
    }
    hasMultipleLaunchOptions() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1;
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: r, disabledVariant: a = "secondary", tooltipPosition: o } = this.props;
        return (0, i.jsxs)("div", {
            className: y.Yr,
            children: [
                (0, i.jsx)(s.$nd, {
                    text: e,
                    fullWidth: n,
                    size: r,
                    variant: a,
                    disabled: !0,
                }),
                (0, i.jsx)(l.m, {
                    text: t,
                    position: o,
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
            isLaunching: a,
            isRunning: o,
            hideNotLaunchable: l,
        } = this.props;
        return r
            ? o
                ? this.renderDisabledButton(b.intl.string(b.t["3elwAB"]))
                : (0, i.jsxs)(s.e2v, {
                      size: t,
                      wrap: !1,
                      fullWidth: e,
                      children: [
                          (0, i.jsx)(s.$nd, {
                              text: b.intl.string(b.t["359Pbd"]),
                              variant: n,
                              loading: a,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, i.jsx)(s.K0, {
                                    icon: c.abt,
                                    "aria-label": b.intl.string(b.t.KTPVLL),
                                    variant: "secondary",
                                    onClick: this.handleDropdownClick,
                                })
                              : null,
                      ],
                  })
            : l
              ? null
              : this.renderDisabledButton(
                    b.intl.string(b.t["359Pbd"]),
                    m.isPlatformEmbedded ? b.intl.string(b.t.NASLa3) : b.intl.string(b.t.o1bhkD),
                );
    }
    constructor(...e) {
        super(...e),
            O(this, "handleDropdownClick", (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: a } = this.props;
                if ((null == r || r(e), null == t)) throw Error("Unexpected missing libraryApplication");
                u.L3(
                    e,
                    async () => {
                        let { default: e } = await n.e("33055").then(n.bind(n, 661991));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                S(A({}, n), {
                                    libraryApplication: t,
                                    onPlay: this.handleClick,
                                }),
                            );
                    },
                    {
                        onClose: a,
                    },
                );
            }),
            O(this, "handleClick", () => {
                let {
                    applicationId: e,
                    libraryApplication: t,
                    analyticsListSort: n,
                    analyticsListIndex: r,
                } = this.props;
                g.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: r,
                    },
                });
            });
    }
}

function T(e) {
    let { applicationId: t, libraryApplication: n } = e,
        r = (0, d.p)(),
        [a, s] = (0, o.yK)(
            [_.A, p.A, h.A],
            () => [
                _.A.isConnected(t) || p.A.isLaunchable(t) || (null != n && h.A.isLaunchable(n.id, n.branchId)),
                p.A.launchingGames.has(t),
            ],
            [t, n],
        ),
        l = (0, o.bG)([f.Ay], () => new Set(f.Ay.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, o.bG)([h.A], () => (null != n ? h.A.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(
        I,
        S(A({}, e), {
            analyticsContext: r,
            isLaunchable: a,
            isLaunching: s,
            isRunning: l,
            dispatchState: c,
        }),
    );
}
O(I, "defaultProps", {
    fullWidth: !1,
    size: "md",
    variant: "secondary",
    tooltipPosition: "top",
    hideNotLaunchable: !1,
});
