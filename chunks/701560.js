(n.d(t, { Z: () => j }), n(388685), n(415506));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(2052),
    p = n(594190),
    m = n(592745),
    f = n(757266),
    _ = n(417363),
    g = n(358085),
    h = n(346329),
    b = n(981631),
    E = n(388032),
    y = n(637214);
function C(e, t, n) {
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
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
class O extends (r = l.PureComponent) {
    get analyticsLocation() {
        return v(x({}, this.props.analyticsContext.location), { object: b.qAy.BUTTON_CTA });
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, i.jsxs)(c.P3F, {
                  'aria-label': E.intl.string(E.t.KTPVLC),
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
        let { className: n, fullWidth: r, size: l, customDisabledColor: a, tooltipPosition: o } = this.props;
        return (0, i.jsxs)('div', {
            className: y.disabledButtonWrapper,
            children: [
                (0, i.jsx)(c.zxk, {
                    className: n,
                    fullWidth: r,
                    size: l,
                    color: null != a ? a : y.disabledButtonColor,
                    disabled: !0,
                    children: e
                }),
                (0, i.jsx)(c.ua7, {
                    text: t,
                    position: o,
                    children: (e) => (0, i.jsx)('div', x({ className: y.disabledButtonOverlay }, e))
                })
            ]
        });
    }
    render() {
        let { className: e, fullWidth: t, size: n, color: r, isLaunchable: l, isLaunching: a, isRunning: s, isShiny: u, hideNotLaunchable: d } = this.props;
        if (!l) return d ? null : this.renderDisabledButton(E.intl.string(E.t['359PbW']), g.isPlatformEmbedded ? E.intl.string(E.t.NASLa2) : E.intl.string(E.t.o1bhkJ));
        if (s) return this.renderDisabledButton(E.intl.string(E.t['3elwAA']));
        let p = u ? c.gtL : c.zxk;
        return (0, i.jsxs)(p, {
            className: o()(y.playButton, e),
            innerClassName: y.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != r ? r : c.zxk.Colors.GREEN,
            submitting: a,
            onClick: this.handleClick,
            children: [
                (0, i.jsx)('div', {
                    className: y.buttonText,
                    children: E.intl.string(E.t['359PbW'])
                }),
                this.renderDropdown()
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            C(this, 'handleDropdownClick', (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: l } = this.props;
                if ((null == r || r(e), null == t)) throw Error('Unexpected missing libraryApplication');
                u.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e('53195').then(n.bind(n, 918306));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                v(x({}, n), {
                                    libraryApplication: t,
                                    onPlay: this.handleClick
                                })
                            );
                    },
                    { onClose: l }
                );
            }),
            C(this, 'handleClick', () => {
                let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: r } = this.props;
                h.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: r
                    }
                });
            }));
    }
}
function j(e) {
    let { applicationId: t, libraryApplication: n } = e,
        r = (0, d.O)(),
        [l, a] = (0, s.Wu)([f.Z, m.Z, _.Z], () => [f.Z.isConnected(t) || m.Z.isLaunchable(t) || (null != n && _.Z.isLaunchable(n.id, n.branchId)), m.Z.launchingGames.has(t)], [t, n]),
        o = (0, s.e7)([p.ZP], () => new Set(p.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, s.e7)([_.Z], () => (null != n ? _.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(
        O,
        v(x({}, e), {
            analyticsContext: r,
            isLaunchable: l,
            isLaunching: a,
            isRunning: o,
            dispatchState: c
        })
    );
}
C(O, 'defaultProps', {
    fullWidth: !1,
    size: c.zxk.Sizes.LARGE,
    tooltipPosition: 'top',
    isShiny: !1,
    hideNotLaunchable: !1
});
