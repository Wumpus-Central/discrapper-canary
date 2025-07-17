(n.d(t, { Z: () => I }), n(388685), n(415506));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(239091),
    p = n(2052),
    m = n(594190),
    f = n(592745),
    g = n(757266),
    h = n(417363),
    _ = n(358085),
    b = n(346329),
    E = n(981631),
    x = n(388032),
    C = n(637214);
function v(e, t, n) {
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
function y(e) {
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
                v(e, t, n[t]);
            }));
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
class j extends (r = l.PureComponent) {
    get analyticsLocation() {
        return O(y({}, this.props.analyticsContext.location), { object: E.qAy.BUTTON_CTA });
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, i.jsxs)(u.P3F, {
                  'aria-label': x.intl.string(x.t.KTPVLC),
                  className: C.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, i.jsx)('div', { className: C.arrowSeparator }),
                      (0, i.jsx)(u.CJ0, {
                          size: 'md',
                          color: 'currentColor',
                          className: C.dropdownArrow
                      })
                  ]
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: l, customDisabledColor: a, tooltipPosition: o } = this.props;
        return (0, i.jsxs)('div', {
            className: C.disabledButtonWrapper,
            children: [
                (0, i.jsx)(c.zx, {
                    className: n,
                    fullWidth: r,
                    size: l,
                    color: null != a ? a : C.disabledButtonColor,
                    disabled: !0,
                    children: e
                }),
                (0, i.jsx)(u.ua7, {
                    text: t,
                    position: o,
                    children: (e) => (0, i.jsx)('div', y({ className: C.disabledButtonOverlay }, e))
                })
            ]
        });
    }
    render() {
        let { className: e, fullWidth: t, size: n, color: r, isLaunchable: l, isLaunching: a, isRunning: s, isShiny: d, hideNotLaunchable: p } = this.props;
        if (!l) return p ? null : this.renderDisabledButton(x.intl.string(x.t['359PbW']), _.isPlatformEmbedded ? x.intl.string(x.t.NASLa2) : x.intl.string(x.t.o1bhkJ));
        if (s) return this.renderDisabledButton(x.intl.string(x.t['3elwAA']));
        let m = d ? u.gtL : c.zx;
        return (0, i.jsxs)(m, {
            className: o()(C.playButton, e),
            innerClassName: C.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != r ? r : c.zx.Colors.GREEN,
            submitting: a,
            onClick: this.handleClick,
            children: [
                (0, i.jsx)('div', {
                    className: C.buttonText,
                    children: x.intl.string(x.t['359PbW'])
                }),
                this.renderDropdown()
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            v(this, 'handleDropdownClick', (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: r, onDropdownClose: l } = this.props;
                if ((null == r || r(e), null == t)) throw Error('Unexpected missing libraryApplication');
                d.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e('53195').then(n.bind(n, 918306));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                O(y({}, n), {
                                    libraryApplication: t,
                                    onPlay: this.handleClick
                                })
                            );
                    },
                    { onClose: l }
                );
            }),
            v(this, 'handleClick', () => {
                let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: r } = this.props;
                b.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: r
                    }
                });
            }));
    }
}
function I(e) {
    let { applicationId: t, libraryApplication: n } = e,
        r = (0, p.O)(),
        [l, a] = (0, s.Wu)([g.Z, f.Z, h.Z], () => [g.Z.isConnected(t) || f.Z.isLaunchable(t) || (null != n && h.Z.isLaunchable(n.id, n.branchId)), f.Z.launchingGames.has(t)], [t, n]),
        o = (0, s.e7)([m.ZP], () => new Set(m.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, s.e7)([h.Z], () => (null != n ? h.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, i.jsx)(
        j,
        O(y({}, e), {
            analyticsContext: r,
            isLaunchable: l,
            isLaunching: a,
            isRunning: o,
            dispatchState: c
        })
    );
}
v(j, 'defaultProps', {
    fullWidth: !1,
    size: c.zx.Sizes.LARGE,
    tooltipPosition: 'top',
    isShiny: !1,
    hideNotLaunchable: !1
});
