n.d(t, { Z: () => j }), n(47120), n(411104);
var r,
    i = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(2052),
    p = n(594190),
    m = n(592745),
    f = n(757266),
    h = n(417363),
    g = n(358085),
    _ = n(346329),
    b = n(981631),
    x = n(388032),
    y = n(637214);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class N extends (r = a.PureComponent) {
    get analyticsLocation() {
        return O(v({}, this.props.analyticsContext.location), { object: b.qAy.BUTTON_CTA });
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, i.jsxs)(c.P3F, {
                  'aria-label': x.NW.string(x.t.KTPVLC),
                  className: y.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, i.jsx)('div', { className: y.arrowSeparator }),
                      (0, i.jsx)(c.CJ0, {
                          size: 'md',
                          color: 'currentColor',
                          className: y.dropdownArrow
                      })
                  ]
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: a, customDisabledColor: l, tooltipPosition: o } = this.props;
        return (0, i.jsxs)('div', {
            className: y.disabledButtonWrapper,
            children: [
                (0, i.jsx)(c.zxk, {
                    className: n,
                    fullWidth: r,
                    size: a,
                    color: null != l ? l : y.disabledButtonColor,
                    disabled: !0,
                    children: e
                }),
                (0, i.jsx)(c.ua7, {
                    text: t,
                    position: o,
                    children: (e) => (0, i.jsx)('div', v({ className: y.disabledButtonOverlay }, e))
                })
            ]
        });
    }
    render() {
        let { className: e, fullWidth: t, size: n, color: r, isLaunchable: a, isLaunching: l, isRunning: s, isShiny: u, hideNotLaunchable: d } = this.props;
        if (!a) return d ? null : this.renderDisabledButton(x.NW.string(x.t['359PbW']), g.isPlatformEmbedded ? x.NW.string(x.t.NASLa2) : x.NW.string(x.t.o1bhkJ));
        if (s) return this.renderDisabledButton(x.NW.string(x.t['3elwAA']));
        let p = u ? c.gtL : c.zxk;
        return (0, i.jsxs)(p, {
            className: o()(y.playButton, e),
            innerClassName: y.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != r ? r : c.zxk.Colors.GREEN,
            submitting: l,
            onClick: this.handleClick,
            children: [
                (0, i.jsx)('div', {
                    className: y.buttonText,
                    children: x.NW.string(x.t['359PbW'])
                }),
                this.renderDropdown()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'handleDropdownClick', (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: a } = this.props;
                if ((null == r || r(e), null == t)) throw Error('Unexpected missing libraryApplication');
                u.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e('53195').then(n.bind(n, 918306));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                O(v({}, n), {
                                    libraryApplication: t,
                                    onPlay: this.handleClick
                                })
                            );
                    },
                    { onClose: a }
                );
            }),
            E(this, 'handleClick', () => {
                let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: r } = this.props;
                _.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: r
                    }
                });
            });
    }
}
function j(e) {
    let { applicationId: t, libraryApplication: n } = e,
        r = (0, d.O)(),
        [a, l] = (0, s.Wu)([f.Z, m.Z, h.Z], () => [f.Z.isConnected(t) || m.Z.isLaunchable(t) || (null != n && h.Z.isLaunchable(n.id, n.branchId)), m.Z.launchingGames.has(t)], [t, n]),
        o = (0, s.e7)([p.ZP], () => new Set(p.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, s.e7)([h.Z], () => (null != n ? h.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(
        N,
        O(v({}, e), {
            analyticsContext: r,
            isLaunchable: a,
            isLaunching: l,
            isRunning: o,
            dispatchState: c
        })
    );
}
E(N, 'defaultProps', {
    fullWidth: !1,
    size: c.zxk.Sizes.LARGE,
    tooltipPosition: 'top',
    isShiny: !1,
    hideNotLaunchable: !1
});
