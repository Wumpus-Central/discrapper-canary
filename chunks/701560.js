n.d(t, { Z: () => N }), n(388685), n(415506);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    c = n(28664),
    u = n(755721),
    d = n(481060),
    f = n(239091),
    _ = n(2052),
    p = n(594190),
    h = n(592745),
    m = n(757266),
    g = n(417363),
    E = n(358085),
    b = n(346329),
    y = n(981631),
    O = n(388032),
    v = n(701306);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
class C extends (r = a.PureComponent) {
    get analyticsLocation() {
        return A(T({}, this.props.analyticsContext.location), { object: y.qAy.BUTTON_CTA });
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, i.jsxs)(d.P3F, {
                  "aria-label": O.intl.string(O.t.KTPVLL),
                  className: v.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, i.jsx)("div", { className: v.arrowSeparator }),
                      (0, i.jsx)(d.CJ0, {
                          size: "md",
                          color: "currentColor",
                          className: v.dropdownArrow,
                      }),
                  ],
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: a, customDisabledColor: o, tooltipPosition: s } = this.props;
        return (0, i.jsxs)("div", {
            className: v.disabledButtonWrapper,
            children: [
                (0, i.jsx)(u.zx, {
                    className: n,
                    fullWidth: r,
                    size: a,
                    color: null != o ? o : v.disabledButtonColor,
                    disabled: !0,
                    children: e,
                }),
                (0, i.jsx)(c.u, {
                    text: t,
                    position: s,
                    children: (0, i.jsx)("div", { className: v.disabledButtonOverlay }),
                }),
            ],
        });
    }
    render() {
        let {
            className: e,
            fullWidth: t,
            size: n,
            color: r,
            isLaunchable: a,
            isLaunching: o,
            isRunning: l,
            isShiny: c,
            hideNotLaunchable: f,
        } = this.props;
        if (!a)
            return f
                ? null
                : this.renderDisabledButton(
                      O.intl.string(O.t["359Pbd"]),
                      E.isPlatformEmbedded ? O.intl.string(O.t.NASLa3) : O.intl.string(O.t.o1bhkD),
                  );
        if (l) return this.renderDisabledButton(O.intl.string(O.t["3elwAB"]));
        let _ = c ? d.gtL : u.zx;
        return (0, i.jsxs)(_, {
            className: s()(v.playButton, e),
            innerClassName: v.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != r ? r : u.zx.Colors.GREEN,
            submitting: o,
            onClick: this.handleClick,
            children: [
                (0, i.jsx)("div", {
                    className: v.buttonText,
                    children: O.intl.string(O.t["359Pbd"]),
                }),
                this.renderDropdown(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            I(this, "handleDropdownClick", (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: a } = this.props;
                if ((null == r || r(e), null == t)) throw Error("Unexpected missing libraryApplication");
                f.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e("53195").then(n.bind(n, 918306));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                A(T({}, n), {
                                    libraryApplication: t,
                                    onPlay: this.handleClick,
                                }),
                            );
                    },
                    { onClose: a },
                );
            }),
            I(this, "handleClick", () => {
                let {
                    applicationId: e,
                    libraryApplication: t,
                    analyticsListSort: n,
                    analyticsListIndex: r,
                } = this.props;
                b.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: r,
                    },
                });
            });
    }
}
function N(e) {
    let { applicationId: t, libraryApplication: n } = e,
        r = (0, _.O)(),
        [a, o] = (0, l.Wu)(
            [m.Z, h.Z, g.Z],
            () => [
                m.Z.isConnected(t) || h.Z.isLaunchable(t) || (null != n && g.Z.isLaunchable(n.id, n.branchId)),
                h.Z.launchingGames.has(t),
            ],
            [t, n],
        ),
        s = (0, l.e7)([p.ZP], () => new Set(p.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, l.e7)([g.Z], () => (null != n ? g.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(
        C,
        A(T({}, e), {
            analyticsContext: r,
            isLaunchable: a,
            isLaunching: o,
            isRunning: s,
            dispatchState: c,
        }),
    );
}
I(C, "defaultProps", {
    fullWidth: !1,
    size: u.zx.Sizes.LARGE,
    tooltipPosition: "top",
    isShiny: !1,
    hideNotLaunchable: !1,
});
