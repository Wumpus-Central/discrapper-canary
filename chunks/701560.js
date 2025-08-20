n.d(t, { Z: () => C }), n(388685), n(415506);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(239091),
    f = n(2052),
    _ = n(594190),
    p = n(592745),
    h = n(757266),
    m = n(417363),
    g = n(358085),
    E = n(346329),
    b = n(981631),
    y = n(388032),
    O = n(701306);
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
function I(e) {
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
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class A extends (r = a.PureComponent) {
    get analyticsLocation() {
        return S(I({}, this.props.analyticsContext.location), { object: b.qAy.BUTTON_CTA });
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, i.jsxs)(u.P3F, {
                  "aria-label": y.intl.string(y.t.KTPVLC),
                  className: O.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, i.jsx)("div", { className: O.arrowSeparator }),
                      (0, i.jsx)(u.CJ0, {
                          size: "md",
                          color: "currentColor",
                          className: O.dropdownArrow,
                      }),
                  ],
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: a, customDisabledColor: o, tooltipPosition: s } = this.props;
        return (0, i.jsxs)("div", {
            className: O.disabledButtonWrapper,
            children: [
                (0, i.jsx)(c.zx, {
                    className: n,
                    fullWidth: r,
                    size: a,
                    color: null != o ? o : O.disabledButtonColor,
                    disabled: !0,
                    children: e,
                }),
                (0, i.jsx)(u.ua7, {
                    text: t,
                    position: s,
                    children: (e) => (0, i.jsx)("div", I({ className: O.disabledButtonOverlay }, e)),
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
            isShiny: d,
            hideNotLaunchable: f,
        } = this.props;
        if (!a)
            return f
                ? null
                : this.renderDisabledButton(
                      y.intl.string(y.t["359PbW"]),
                      g.isPlatformEmbedded ? y.intl.string(y.t.NASLa2) : y.intl.string(y.t.o1bhkJ),
                  );
        if (l) return this.renderDisabledButton(y.intl.string(y.t["3elwAA"]));
        let _ = d ? u.gtL : c.zx;
        return (0, i.jsxs)(_, {
            className: s()(O.playButton, e),
            innerClassName: O.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != r ? r : c.zx.Colors.GREEN,
            submitting: o,
            onClick: this.handleClick,
            children: [
                (0, i.jsx)("div", {
                    className: O.buttonText,
                    children: y.intl.string(y.t["359PbW"]),
                }),
                this.renderDropdown(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            v(this, "handleDropdownClick", (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: a } = this.props;
                if ((null == r || r(e), null == t)) throw Error("Unexpected missing libraryApplication");
                d.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e("53195").then(n.bind(n, 918306));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                S(I({}, n), {
                                    libraryApplication: t,
                                    onPlay: this.handleClick,
                                }),
                            );
                    },
                    { onClose: a },
                );
            }),
            v(this, "handleClick", () => {
                let {
                    applicationId: e,
                    libraryApplication: t,
                    analyticsListSort: n,
                    analyticsListIndex: r,
                } = this.props;
                E.playApplication(e, t, {
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
        r = (0, f.O)(),
        [a, o] = (0, l.Wu)(
            [h.Z, p.Z, m.Z],
            () => [
                h.Z.isConnected(t) || p.Z.isLaunchable(t) || (null != n && m.Z.isLaunchable(n.id, n.branchId)),
                p.Z.launchingGames.has(t),
            ],
            [t, n],
        ),
        s = (0, l.e7)([_.ZP], () => new Set(_.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, l.e7)([m.Z], () => (null != n ? m.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(
        A,
        S(I({}, e), {
            analyticsContext: r,
            isLaunchable: a,
            isLaunching: o,
            isRunning: s,
            dispatchState: c,
        }),
    );
}
v(A, "defaultProps", {
    fullWidth: !1,
    size: c.zx.Sizes.LARGE,
    tooltipPosition: "top",
    isShiny: !1,
    hideNotLaunchable: !1,
});
