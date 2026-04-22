n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(821609),
    s = n(825484),
    r = n(408278),
    o = n(311907),
    d = n(990078),
    c = n(847374),
    u = n(442433),
    m = n(212245),
    _ = n(15285),
    h = n(651743),
    p = n(134861),
    g = n(194871),
    A = n(723702),
    f = n(715671),
    x = n(652215),
    C = n(985018),
    E = n(864248);
class I extends l.PureComponent {
    static defaultProps = {
        fullWidth: !1,
        size: "md",
        variant: "secondary",
        tooltipPosition: "top",
        hideNotLaunchable: !1,
    };
    get analyticsLocation() {
        return { ...this.props.analyticsContext.location, object: x.ZSU.BUTTON_CTA };
    }
    handleDropdownClick = (e) => {
        e.stopPropagation();
        let { libraryApplication: t, onDropdownOpen: l, onDropdownClose: a } = this.props;
        if ((l?.(e), null == t)) throw Error("Unexpected missing libraryApplication");
        u.L3(
            e,
            async () => {
                let { default: e } = await n.e("55436").then(n.bind(n, 661991));
                return (n) => (0, i.jsx)(e, { ...n, libraryApplication: t, onPlay: this.handleClick });
            },
            { onClose: a },
        );
    };
    handleClick = () => {
        let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: i } = this.props;
        f.playApplication(e, t, { analyticsParams: { location: this.analyticsLocation, list_sort: n, list_index: i } });
    };
    hasMultipleLaunchOptions() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1;
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: l, disabledVariant: s = "secondary", tooltipPosition: r } = this.props;
        return (0, i.jsxs)("div", {
            className: E.Yr,
            children: [
                (0, i.jsx)(a.$, { text: e, fullWidth: n, size: l, variant: s, disabled: !0 }),
                (0, i.jsx)(d.m, { text: t, position: r, children: (0, i.jsx)("div", { className: E.p5 }) }),
            ],
        });
    }
    render() {
        let {
            fullWidth: e,
            size: t,
            variant: n,
            isLaunchable: l,
            isLaunching: o,
            isRunning: d,
            hideNotLaunchable: u,
        } = this.props;
        return l
            ? d
                ? this.renderDisabledButton(C.intl.string(C.t["3elwAB"]))
                : (0, i.jsxs)(s.e, {
                      size: t,
                      wrap: !1,
                      fullWidth: e,
                      children: [
                          (0, i.jsx)(a.$, {
                              text: C.intl.string(C.t["359Pbd"]),
                              variant: n,
                              loading: o,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, i.jsx)(r.K, {
                                    icon: c.a,
                                    "aria-label": C.intl.string(C.t.KTPVLL),
                                    variant: "secondary",
                                    onClick: this.handleDropdownClick,
                                })
                              : null,
                      ],
                  })
            : u
              ? null
              : this.renderDisabledButton(
                    C.intl.string(C.t["359Pbd"]),
                    A.isPlatformEmbedded ? C.intl.string(C.t.NASLa3) : C.intl.string(C.t.o1bhkD),
                );
    }
}
function v(e) {
    let { applicationId: t, libraryApplication: n } = e,
        l = (0, m.p)(),
        [a, s] = (0, o.yK)(
            [p.A, h.A, g.A],
            () => [
                p.A.isConnected(t) || h.A.isLaunchable(t) || (null != n && g.A.isLaunchable(n.id, n.branchId)),
                h.A.launchingGames.has(t),
            ],
            [t, n],
        ),
        r = (0, o.bG)([_.Ay], () => new Set(_.Ay.getRunningVerifiedApplicationIds()).has(t), [t]),
        d = (0, o.bG)([g.A], () => (null != n ? g.A.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(I, {
        ...e,
        analyticsContext: l,
        isLaunchable: a,
        isLaunching: s,
        isRunning: r,
        dispatchState: d,
    });
}
