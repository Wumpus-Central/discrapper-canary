var e = i(477900),
    r = i(582128),
    s = i(855986),
    l = i(821609),
    a = i(866665),
    o = i(825484),
    d = i(408278),
    u = i(847374),
    c = i(442433),
    p = i(212245),
    h = i(397369),
    g = i(651743),
    A = i(134861),
    b = i(659096),
    y = i(723702),
    x = i(35083),
    L = i(652215),
    f = i(792996),
    I = i(627823);
class N extends r.PureComponent {
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
        let { libraryApplication: n, onDropdownOpen: r, onDropdownClose: s } = this.props;
        if ((r?.(t), null == n)) throw Error("Unexpected missing libraryApplication");
        c.L3(
            t,
            async () => {
                let { default: t } = await i.e(186056).then(i.bind(i, 980411));
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
        let { fullWidth: i, size: r, disabledVariant: s = "secondary", tooltipPosition: o } = this.props;
        return (0, e.jsxs)("div", {
            className: I.Yr,
            children: [
                (0, e.jsx)(l.$, { text: t, fullWidth: i, size: r, variant: s, disabled: !0 }),
                (0, e.jsx)(a.m, { text: n, position: o, children: (0, e.jsx)("div", { className: I.p5 }) }),
            ],
        });
    }
    render() {
        let {
            fullWidth: t,
            size: n,
            variant: i,
            isLaunchable: r,
            isLaunching: s,
            isRunning: a,
            hideNotLaunchable: c,
        } = this.props;
        return r
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
                              loading: s,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, e.jsx)(d.K, {
                                    icon: u.ChevronSmallDownIcon,
                                    "aria-label": f.intl.string(f.t.KTPVLL),
                                    variant: "secondary",
                                    onClick: this.handleDropdownClick,
                                })
                              : null,
                      ],
                  })
            : c
              ? null
              : this.renderDisabledButton(
                    f.intl.string(f.t["359Pbd"]),
                    y.isPlatformEmbedded ? f.intl.string(f.t.NASLa3) : f.intl.string(f.t.o1bhkD),
                );
    }
}
i.d(
    n,
    {},
    {
        A: function (t) {
            let { applicationId: n, libraryApplication: i } = t,
                r = (0, p.p)(),
                [l, a] = (0, s.yK)(
                    [A.A, g.A, b.A],
                    () => [
                        A.A.isConnected(n) || g.A.isLaunchable(n) || (null != i && b.A.isLaunchable(i.id, i.branchId)),
                        g.A.launchingGames.has(n),
                    ],
                    [n, i],
                ),
                o = (0, s.bG)([h.Ay], () => new Set(h.Ay.getRunningVerifiedApplicationIds()).has(n), [n]),
                d = (0, s.bG)([b.A], () => (null != i ? b.A.getState(i.id, i.branchId) : null), [i]);
            return (0, e.jsx)(N, {
                ...t,
                analyticsContext: r,
                isLaunchable: l,
                isLaunching: a,
                isRunning: o,
                dispatchState: d,
            });
        },
    },
);
