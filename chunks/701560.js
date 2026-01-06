n.d(t, { Z: () => C }), n(388685), n(415506);
var r,
    i = n(54381),
    a = n(473749),
    o = n(793030),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(239091),
    d = n(2052),
    f = n(594190),
    p = n(592745),
    _ = n(757266),
    m = n(417363),
    h = n(358085),
    g = n(346329),
    E = n(981631),
    b = n(388032),
    y = n(484698);
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
function v(e) {
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
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class T extends (r = a.PureComponent) {
    get analyticsLocation() {
        return I(v({}, this.props.analyticsContext.location), { object: E.qAy.BUTTON_CTA });
    }
    hasMultipleLaunchOptions() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1;
    }
    renderDisabledButton(e, t) {
        let { fullWidth: n, size: r, disabledVariant: a = "secondary", tooltipPosition: s } = this.props;
        return (0, i.jsxs)("div", {
            className: y.disabledButtonWrapper,
            children: [
                (0, i.jsx)(o.zxk, {
                    text: e,
                    fullWidth: n,
                    size: r,
                    variant: a,
                    disabled: !0,
                }),
                (0, i.jsx)(l.u, {
                    text: t,
                    position: s,
                    children: (0, i.jsx)("div", { className: y.disabledButtonOverlay }),
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
            isRunning: s,
            hideNotLaunchable: l,
        } = this.props;
        return r
            ? s
                ? this.renderDisabledButton(b.intl.string(b.t["3elwAB"]))
                : (0, i.jsxs)(o.hE2, {
                      size: t,
                      wrap: !1,
                      fullWidth: e,
                      children: [
                          (0, i.jsx)(o.zxk, {
                              text: b.intl.string(b.t["359Pbd"]),
                              variant: n,
                              loading: a,
                              onClick: this.handleClick,
                          }),
                          this.hasMultipleLaunchOptions()
                              ? (0, i.jsx)(o.hU, {
                                    icon: c.CJ0,
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
                    h.isPlatformEmbedded ? b.intl.string(b.t.NASLa3) : b.intl.string(b.t.o1bhkD),
                );
    }
    constructor(...e) {
        super(...e),
            O(this, "handleDropdownClick", (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: a } = this.props;
                if ((null == r || r(e), null == t)) throw Error("Unexpected missing libraryApplication");
                u.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e("53195").then(n.bind(n, 918306));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                I(v({}, n), {
                                    libraryApplication: t,
                                    onPlay: this.handleClick,
                                }),
                            );
                    },
                    { onClose: a },
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
function C(e) {
    let { applicationId: t, libraryApplication: n } = e,
        r = (0, d.O)(),
        [a, o] = (0, s.Wu)(
            [_.Z, p.Z, m.Z],
            () => [
                _.Z.isConnected(t) || p.Z.isLaunchable(t) || (null != n && m.Z.isLaunchable(n.id, n.branchId)),
                p.Z.launchingGames.has(t),
            ],
            [t, n],
        ),
        l = (0, s.e7)([f.ZP], () => new Set(f.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, s.e7)([m.Z], () => (null != n ? m.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(
        T,
        I(v({}, e), {
            analyticsContext: r,
            isLaunchable: a,
            isLaunching: o,
            isRunning: l,
            dispatchState: c,
        }),
    );
}
O(T, "defaultProps", {
    fullWidth: !1,
    size: "md",
    variant: "secondary",
    tooltipPosition: "top",
    hideNotLaunchable: !1,
});
