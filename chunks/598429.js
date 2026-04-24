i.d(n, { A: () => I });
var e = i(627968),
    l = i(64700),
    s = i(821609),
    r = i(825484),
    a = i(408278),
    o = i(17928),
    d = i(990078),
    u = i(847374),
    c = i(442433),
    p = i(212245),
    h = i(328153),
    g = i(651743),
    A = i(134861),
    b = i(340829),
    y = i(723702),
    x = i(715671),
    f = i(652215),
    N = i(985018),
    L = i(864248);
class _ extends l.PureComponent {
    static defaultProps = {
        fullWidth: !1,
        size: "md",
        variant: "secondary",
        tooltipPosition: "top",
        hideNotLaunchable: !1,
    };
    get analyticsLocation() {
        return { ...this.props.analyticsContext.location, object: f.ZSU.BUTTON_CTA };
    }
    handleDropdownClick = (t) => {
        t.stopPropagation();
        let { libraryApplication: n, onDropdownOpen: l, onDropdownClose: s } = this.props;
        if ((l?.(t), null == n)) throw Error("Unexpected missing libraryApplication");
        c.L3(
            t,
            async () => {
                let { default: t } = await i.e("45835").then(i.bind(i, 512134));
                return (i) => (0, e.jsx)(t, { ...i, libraryApplication: n, onPlay: this.handleClick });
            },
            { onClose: s },
        );
    };
    handleClick = () => {
        let { applicationId: t, libraryApplication: n, analyticsListSort: i, analyticsListIndex: e } = this.props;
        x.playApplication(t, n, { analyticsParams: { location: this.analyticsLocation, list_sort: i, list_index: e } });
    };
    hasMultipleLaunchOptions() {
        let { dispatchState: t } = this.props;
        return null != t && null != t.launchOptions && Object.keys(t.launchOptions).length > 1;
    }
    renderDisabledButton(t, n) {
        let { fullWidth: i, size: l, disabledVariant: r = "secondary", tooltipPosition: a } = this.props;
        return (0, e.jsxs)("div", {
            className: L.Yr,
            children: [
                (0, e.jsx)(s.$, { text: t, fullWidth: i, size: l, variant: r, disabled: !0 }),
                (0, e.jsx)(d.m, { text: n, position: a, children: (0, e.jsx)("div", { className: L.p5 }) }),
            ],
        });
    }
    render() {
        let {
            fullWidth: t,
            size: n,
            variant: i,
            isLaunchable: l,
            isLaunching: o,
            isRunning: d,
            hideNotLaunchable: c,
        } = this.props;
        return l
            ? d
                ? this.renderDisabledButton(N.intl.string(N.t["3elwAB"]))
                : (0, e.jsxs)(r.e, {
                      size: n,
                      wrap: !1,
                      fullWidth: t,
                      children: [
                          (0, e.jsx)(s.$, {
                              text: N.intl.string(N.t["359Pbd"]),
                              variant: i,
                              loading: o,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, e.jsx)(a.K, {
                                    icon: u.a,
                                    "aria-label": N.intl.string(N.t.KTPVLL),
                                    variant: "secondary",
                                    onClick: this.handleDropdownClick,
                                })
                              : null,
                      ],
                  })
            : c
              ? null
              : this.renderDisabledButton(
                    N.intl.string(N.t["359Pbd"]),
                    y.isPlatformEmbedded ? N.intl.string(N.t.NASLa3) : N.intl.string(N.t.o1bhkD),
                );
    }
}
function I(t) {
    let { applicationId: n, libraryApplication: i } = t,
        l = (0, p.p)(),
        [s, r] = (0, o.yK)(
            [A.A, g.A, b.A],
            () => [
                A.A.isConnected(n) || g.A.isLaunchable(n) || (null != i && b.A.isLaunchable(i.id, i.branchId)),
                g.A.launchingGames.has(n),
            ],
            [n, i],
        ),
        a = (0, o.bG)([h.Ay], () => new Set(h.Ay.getRunningVerifiedApplicationIds()).has(n), [n]),
        d = (0, o.bG)([b.A], () => (null != i ? b.A.getState(i.id, i.branchId) : null), [i]);
    return (0, e.jsx)(_, {
        ...t,
        analyticsContext: l,
        isLaunchable: s,
        isLaunching: r,
        isRunning: a,
        dispatchState: d,
    });
}
