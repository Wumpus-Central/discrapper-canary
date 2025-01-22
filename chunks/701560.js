n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120),
    n(411104);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(2052),
    m = n(594190),
    h = n(592745),
    f = n(757266),
    p = n(417363),
    _ = n(358085),
    g = n(346329),
    E = n(981631),
    C = n(388032),
    I = n(984203);
function x(e, t, n) {
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
class N extends (i = l.PureComponent) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: E.qAy.BUTTON_CTA
        };
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, r.jsxs)(c.Clickable, {
                  'aria-label': C.intl.string(C.t.KTPVLC),
                  className: I.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, r.jsx)('div', { className: I.arrowSeparator }),
                      (0, r.jsx)(c.ChevronSmallDownIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: I.dropdownArrow
                      })
                  ]
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: i, size: l, customDisabledColor: a, tooltipPosition: o } = this.props;
        return (0, r.jsxs)('div', {
            className: I.disabledButtonWrapper,
            children: [
                (0, r.jsx)(c.Button, {
                    className: n,
                    fullWidth: i,
                    size: l,
                    color: null != a ? a : I.disabledButtonColor,
                    disabled: !0,
                    children: e
                }),
                (0, r.jsx)(c.Tooltip, {
                    text: t,
                    position: o,
                    children: (e) =>
                        (0, r.jsx)('div', {
                            className: I.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    render() {
        let { className: e, fullWidth: t, size: n, color: i, isLaunchable: l, isLaunching: a, isRunning: s, isShiny: u, hideNotLaunchable: d } = this.props;
        if (!l) return d ? null : this.renderDisabledButton(C.intl.string(C.t['359PbW']), _.isPlatformEmbedded ? C.intl.string(C.t.NASLa2) : C.intl.string(C.t.o1bhkJ));
        if (s) return this.renderDisabledButton(C.intl.string(C.t['3elwAA']));
        let m = u ? c.ShinyButton : c.Button;
        return (0, r.jsxs)(m, {
            className: o()(I.playButton, e),
            innerClassName: I.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != i ? i : c.Button.Colors.GREEN,
            submitting: a,
            onClick: this.handleClick,
            children: [
                (0, r.jsx)('div', {
                    className: I.buttonText,
                    children: C.intl.string(C.t['359PbW'])
                }),
                this.renderDropdown()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'handleDropdownClick', (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: i, onDropdownClose: l } = this.props;
                if ((null == i || i(e), null == t)) throw Error('Unexpected missing libraryApplication');
                u.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e('53195').then(n.bind(n, 918306));
                        return (n) =>
                            (0, r.jsx)(e, {
                                ...n,
                                libraryApplication: t,
                                onPlay: this.handleClick
                            });
                    },
                    { onClose: l }
                );
            }),
            x(this, 'handleClick', () => {
                let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: i } = this.props;
                g.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: i
                    }
                });
            });
    }
}
function v(e) {
    let { applicationId: t, libraryApplication: n } = e,
        i = (0, d.O)(),
        [l, a] = (0, s.Wu)([f.Z, h.Z, p.Z], () => [f.Z.isConnected(t) || h.Z.isLaunchable(t) || (null != n && p.Z.isLaunchable(n.id, n.branchId)), h.Z.launchingGames.has(t)], [t, n]),
        o = (0, s.e7)([m.ZP], () => new Set(m.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, s.e7)([p.Z], () => (null != n ? p.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, r.jsx)(N, {
        ...e,
        analyticsContext: i,
        isLaunchable: l,
        isLaunching: a,
        isRunning: o,
        dispatchState: c
    });
}
x(N, 'defaultProps', {
    fullWidth: !1,
    size: c.Button.Sizes.LARGE,
    tooltipPosition: 'top',
    isShiny: !1,
    hideNotLaunchable: !1
});
