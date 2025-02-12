n.d(t, { Z: () => N }), n(47120), n(411104);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(442837),
    c = n(481060),
    d = n(239091),
    u = n(2052),
    m = n(594190),
    _ = n(592745),
    h = n(757266),
    p = n(417363),
    g = n(358085),
    f = n(346329),
    x = n(981631),
    C = n(388032),
    v = n(154224);
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
class I extends (i = a.PureComponent) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: x.qAy.BUTTON_CTA
        };
    }
    renderDropdown() {
        let { dispatchState: e } = this.props;
        return null != e && null != e.launchOptions && Object.keys(e.launchOptions).length > 1
            ? (0, l.jsxs)(c.P3F, {
                  'aria-label': C.intl.string(C.t.KTPVLC),
                  className: v.dropdownArrowHitbox,
                  onClick: this.handleDropdownClick,
                  children: [
                      (0, l.jsx)('div', { className: v.arrowSeparator }),
                      (0, l.jsx)(c.CJ0, {
                          size: 'md',
                          color: 'currentColor',
                          className: v.dropdownArrow
                      })
                  ]
              })
            : null;
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: i, size: a, customDisabledColor: r, tooltipPosition: s } = this.props;
        return (0, l.jsxs)('div', {
            className: v.disabledButtonWrapper,
            children: [
                (0, l.jsx)(c.zxk, {
                    className: n,
                    fullWidth: i,
                    size: a,
                    color: null != r ? r : v.disabledButtonColor,
                    disabled: !0,
                    children: e
                }),
                (0, l.jsx)(c.ua7, {
                    text: t,
                    position: s,
                    children: (e) =>
                        (0, l.jsx)('div', {
                            className: v.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    render() {
        let { className: e, fullWidth: t, size: n, color: i, isLaunchable: a, isLaunching: r, isRunning: o, isShiny: d, hideNotLaunchable: u } = this.props;
        if (!a) return u ? null : this.renderDisabledButton(C.intl.string(C.t['359PbW']), g.isPlatformEmbedded ? C.intl.string(C.t.NASLa2) : C.intl.string(C.t.o1bhkJ));
        if (o) return this.renderDisabledButton(C.intl.string(C.t['3elwAA']));
        let m = d ? c.gtL : c.zxk;
        return (0, l.jsxs)(m, {
            className: s()(v.playButton, e),
            innerClassName: v.playButtonContents,
            fullWidth: t,
            size: n,
            color: null != i ? i : c.zxk.Colors.GREEN,
            submitting: r,
            onClick: this.handleClick,
            children: [
                (0, l.jsx)('div', {
                    className: v.buttonText,
                    children: C.intl.string(C.t['359PbW'])
                }),
                this.renderDropdown()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'handleDropdownClick', (e) => {
                e.stopPropagation();
                let { libraryApplication: t, onDropdownOpen: i, onDropdownClose: a } = this.props;
                if ((null == i || i(e), null == t)) throw Error('Unexpected missing libraryApplication');
                d.jW(
                    e,
                    async () => {
                        let { default: e } = await n.e('53195').then(n.bind(n, 918306));
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                libraryApplication: t,
                                onPlay: this.handleClick
                            });
                    },
                    { onClose: a }
                );
            }),
            E(this, 'handleClick', () => {
                let { applicationId: e, libraryApplication: t, analyticsListSort: n, analyticsListIndex: i } = this.props;
                f.playApplication(e, t, {
                    analyticsParams: {
                        location: this.analyticsLocation,
                        list_sort: n,
                        list_index: i
                    }
                });
            });
    }
}
function N(e) {
    let { applicationId: t, libraryApplication: n } = e,
        i = (0, u.O)(),
        [a, r] = (0, o.Wu)([h.Z, _.Z, p.Z], () => [h.Z.isConnected(t) || _.Z.isLaunchable(t) || (null != n && p.Z.isLaunchable(n.id, n.branchId)), _.Z.launchingGames.has(t)], [t, n]),
        s = (0, o.e7)([m.ZP], () => new Set(m.ZP.getRunningVerifiedApplicationIds()).has(t), [t]),
        c = (0, o.e7)([p.Z], () => (null != n ? p.Z.getState(n.id, n.branchId) : null), [n]);
    return (0, l.jsx)(I, {
        ...e,
        analyticsContext: i,
        isLaunchable: a,
        isLaunching: r,
        isRunning: s,
        dispatchState: c
    });
}
E(I, 'defaultProps', {
    fullWidth: !1,
    size: c.zxk.Sizes.LARGE,
    tooltipPosition: 'top',
    isShiny: !1,
    hideNotLaunchable: !1
});
