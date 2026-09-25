i.d(n, { A: () => I });
var e = i(477900),
    s = i(582128),
    r = i(17928),
    l = i(821609),
    a = i(866665),
    o = i(825484),
    d = i(408278),
    u = i(847374),
    p = i(442433),
    c = i(212245),
    h = i(952818),
    g = i(651743),
    A = i(134861),
    b = i(340829),
    y = i(723702),
    x = i(113673),
    L = i(652215),
    f = i(375708),
    N = i(627823);
class _ extends s.PureComponent {
    static defaultProps = {
        fullWidth: !1,
        size: "md",
        variant: "secondary",
        tooltipPosition: "top",
        hideNotLaunchable: !1,
    };
    get analyticsLocation() {
        return { ...this.props.analyticsContext.location, object: L.ZSU.BUTTON_CTA };
    }
    handleDropdownClick = (t) => {
        t.stopPropagation();
        let { libraryApplication: n, onDropdownOpen: s, onDropdownClose: r } = this.props;
        if ((s?.(t), null == n)) throw Error("Unexpected missing libraryApplication");
        p.L3(
            t,
            async () => {
                let { default: t } = await i.e("45835").then(i.bind(i, 512134));
                return (i) => (0, e.jsx)(t, { ...i, libraryApplication: n, onPlay: this.handleClick });
            },
            { onClose: r },
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
        let { fullWidth: i, size: s, disabledVariant: r = "secondary", tooltipPosition: o } = this.props;
        return (0, e.jsxs)("div", {
            className: N.Yr,
            children: [
                (0, e.jsx)(l.$, { text: t, fullWidth: i, size: s, variant: r, disabled: !0 }),
                (0, e.jsx)(a.m, { text: n, position: o, children: (0, e.jsx)("div", { className: N.p5 }) }),
            ],
        });
    }
    render() {
        let {
            fullWidth: t,
            size: n,
            variant: i,
            isLaunchable: s,
            isLaunching: r,
            isRunning: a,
            hideNotLaunchable: p,
        } = this.props;
        return s
            ? a
                ? this.renderDisabledButton(f.intl.string(f.t["3elwAB"]))
                : (0, e.jsxs)(o.e, {
                      size: n,
                      wrap: !1,
                      fullWidth: t,
                      children: [
                          (0, e.jsx)(l.$, {
                              text: f.intl.string(f.t["359Pbd"]),
                              variant: i,
                              loading: r,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, e.jsx)(d.K, {
                                    icon: u.a,
                                    "aria-label": f.intl.string(f.t.KTPVLL),
                                    variant: "secondary",
                                    onClick: this.handleDropdownClick,
                                })
                              : null,
                      ],
                  })
            : p
              ? null
              : this.renderDisabledButton(
                    f.intl.string(f.t["359Pbd"]),
                    y.isPlatformEmbedded ? f.intl.string(f.t.NASLa3) : f.intl.string(f.t.o1bhkD),
                );
    }
}
function I(t) {
    let { applicationId: n, libraryApplication: i } = t,
        s = (0, c.p)(),
        [l, a] = (0, r.yK)(
            [A.A, g.A, b.A],
            () => [
                A.A.isConnected(n) || g.A.isLaunchable(n) || (null != i && b.A.isLaunchable(i.id, i.branchId)),
                g.A.launchingGames.has(n),
            ],
            [n, i],
        ),
        o = (0, r.bG)([h.Ay], () => new Set(h.Ay.getRunningVerifiedApplicationIds()).has(n), [n]),
        d = (0, r.bG)([b.A], () => (null != i ? b.A.getState(i.id, i.branchId) : null), [i]);
    return (0, e.jsx)(_, {
        ...t,
        analyticsContext: s,
        isLaunchable: l,
        isLaunching: a,
        isRunning: o,
        dispatchState: d,
    });
}
