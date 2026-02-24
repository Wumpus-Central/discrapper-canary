n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    r = n(158954),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    d = n(442433),
    c = n(212245),
    u = n(15285),
    _ = n(651743),
    m = n(134861),
    h = n(194871),
    p = n(723702),
    g = n(715671),
    A = n(652215),
    x = n(985018),
    f = n(21219);
class C extends l.PureComponent {
    static defaultProps = {
        fullWidth: !1,
        size: "md",
        variant: "secondary",
        tooltipPosition: "top",
        hideNotLaunchable: !1,
    };
    get analyticsLocation() {
        return { ...this.props.analyticsContext.location, object: A.ZSU.BUTTON_CTA };
    }
    handleDropdownClick = (e) => {
        e.stopPropagation();
        let { libraryApplication: t, onDropdownOpen: l, onDropdownClose: r } = this.props;
        if ((l?.(e), null == t)) throw Error("Unexpected missing libraryApplication");
        d.L3(
            e,
            async () => {
                let { default: e } = await n.e("55436").then(n.bind(n, 661991));
                return (n) => (0, i.jsx)(e, { ...n, libraryApplication: t, onPlay: this.handleClick });
            },
            { onClose: r },
        );
    };
    handleClick = () => {
        let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: i } = this.props;
        g.playApplication(e, t, { analyticsParams: { location: this.analyticsLocation, list_sort: n, list_index: i } });
    };
    hasMultipleLaunchOptions() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1;
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: l, disabledVariant: a = "secondary", tooltipPosition: o } = this.props;
        return (0, i.jsxs)("div", {
            className: f.Yr,
            children: [
                (0, i.jsx)(r.$nd, { text: e, fullWidth: n, size: l, variant: a, disabled: !0 }),
                (0, i.jsx)(s.m, { text: t, position: o, children: (0, i.jsx)("div", { className: f.p5 }) }),
            ],
        });
    }
    render() {
        let {
            fullWidth: e,
            size: t,
            variant: n,
            isLaunchable: l,
            isLaunching: a,
            isRunning: s,
            hideNotLaunchable: d,
        } = this.props;
        return l
            ? s
                ? this.renderDisabledButton(x.intl.string(x.t["3elwAB"]))
                : (0, i.jsxs)(r.e2v, {
                      size: t,
                      wrap: !1,
                      fullWidth: e,
                      children: [
                          (0, i.jsx)(r.$nd, {
                              text: x.intl.string(x.t["359Pbd"]),
                              variant: n,
                              loading: a,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, i.jsx)(r.K0, {
                                    icon: o.abt,
                                    "aria-label": x.intl.string(x.t.KTPVLL),
                                    variant: "secondary",
                                    onClick: this.handleDropdownClick,
                                })
                              : null,
                      ],
                  })
            : d
              ? null
              : this.renderDisabledButton(
                    x.intl.string(x.t["359Pbd"]),
                    p.isPlatformEmbedded ? x.intl.string(x.t.NASLa3) : x.intl.string(x.t.o1bhkD),
                );
    }
}
function E(e) {
    let { applicationId: t, libraryApplication: n } = e,
        l = (0, c.p)(),
        [r, s] = (0, a.yK)(
            [m.A, _.A, h.A],
            () => [
                m.A.isConnected(t) || _.A.isLaunchable(t) || (null != n && h.A.isLaunchable(n.id, n.branchId)),
                _.A.launchingGames.has(t),
            ],
            [t, n],
        ),
        o = (0, a.bG)([u.Ay], () => new Set(u.Ay.getRunningVerifiedApplicationIds()).has(t), [t]),
        d = (0, a.bG)([h.A], () => (null != n ? h.A.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(C, {
        ...e,
        analyticsContext: l,
        isLaunchable: r,
        isLaunching: s,
        isRunning: o,
        dispatchState: d,
    });
}
