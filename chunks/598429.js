n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(990078),
    o = n(397927),
    d = n(442433),
    c = n(212245),
    u = n(15285),
    m = n(651743),
    _ = n(134861),
    h = n(194871),
    p = n(723702),
    g = n(715671),
    A = n(652215),
    f = n(985018),
    x = n(168785);
class E extends l.PureComponent {
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
        let { libraryApplication: t, onDropdownOpen: l, onDropdownClose: a } = this.props;
        if ((l?.(e), null == t)) throw Error("Unexpected missing libraryApplication");
        d.L3(
            e,
            async () => {
                let { default: e } = await n.e("33055").then(n.bind(n, 661991));
                return (n) => (0, i.jsx)(e, { ...n, libraryApplication: t, onPlay: this.handleClick });
            },
            { onClose: a },
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
        let { fullWidth: n, size: l, disabledVariant: r = "secondary", tooltipPosition: o } = this.props;
        return (0, i.jsxs)("div", {
            className: x.Yr,
            children: [
                (0, i.jsx)(a.$nd, { text: e, fullWidth: n, size: l, variant: r, disabled: !0 }),
                (0, i.jsx)(s.m, { text: t, position: o, children: (0, i.jsx)("div", { className: x.p5 }) }),
            ],
        });
    }
    render() {
        let {
            fullWidth: e,
            size: t,
            variant: n,
            isLaunchable: l,
            isLaunching: r,
            isRunning: s,
            hideNotLaunchable: d,
        } = this.props;
        return l
            ? s
                ? this.renderDisabledButton(f.intl.string(f.t["3elwAB"]))
                : (0, i.jsxs)(a.e2v, {
                      size: t,
                      wrap: !1,
                      fullWidth: e,
                      children: [
                          (0, i.jsx)(a.$nd, {
                              text: f.intl.string(f.t["359Pbd"]),
                              variant: n,
                              loading: r,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, i.jsx)(a.K0, {
                                    icon: o.abt,
                                    "aria-label": f.intl.string(f.t.KTPVLL),
                                    variant: "secondary",
                                    onClick: this.handleDropdownClick,
                                })
                              : null,
                      ],
                  })
            : d
              ? null
              : this.renderDisabledButton(
                    f.intl.string(f.t["359Pbd"]),
                    p.isPlatformEmbedded ? f.intl.string(f.t.NASLa3) : f.intl.string(f.t.o1bhkD),
                );
    }
}
function C(e) {
    let { applicationId: t, libraryApplication: n } = e,
        l = (0, c.p)(),
        [a, s] = (0, r.yK)(
            [_.A, m.A, h.A],
            () => [
                _.A.isConnected(t) || m.A.isLaunchable(t) || (null != n && h.A.isLaunchable(n.id, n.branchId)),
                m.A.launchingGames.has(t),
            ],
            [t, n],
        ),
        o = (0, r.bG)([u.Ay], () => new Set(u.Ay.getRunningVerifiedApplicationIds()).has(t), [t]),
        d = (0, r.bG)([h.A], () => (null != n ? h.A.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(E, {
        ...e,
        analyticsContext: l,
        isLaunchable: a,
        isLaunching: s,
        isRunning: o,
        dispatchState: d,
    });
}
