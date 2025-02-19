n.d(t, {
    $x: () => P,
    ZP: () => _,
    d7: () => N,
    w6: () => C
}),
    n(653041),
    n(13667),
    n(390547),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(990547),
    o = n(692547),
    c = n(481060),
    a = n(213609),
    l = n(252618),
    u = n(243778),
    d = n(126848),
    p = n(207874),
    f = n(585483),
    b = n(960048),
    g = n(410575),
    m = n(493544),
    O = n(981631),
    h = n(388032),
    v = n(293984);
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
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, s);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    P = 1.4,
    C = 15,
    N = 2;
function E(e) {
    var t, n;
    let { section: r, setPreventNavigation: o, scrollerRef: c } = e;
    (0, a.Z)({
        type: i.ImpressionTypes.PANE,
        name: null == r ? void 0 : r.impressionName,
        properties: null == r ? void 0 : r.impressionProperties
    });
    let l = null !== (t = null == r ? void 0 : r.element) && void 0 !== t ? t : O.VqG,
        u = null !== (n = null == r ? void 0 : r.elementProps) && void 0 !== n ? n : {};
    return (0, s.jsx)(g.Z, {
        section: r.section,
        children: (0, s.jsx)(
            l,
            y(j({}, u), {
                setPreventNavigation: o,
                refToScroller: c
            })
        )
    });
}
class w extends r.PureComponent {
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: n } = t;
            null != n &&
                n.forEach((e) => {
                    e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e);
                });
        });
    }
    componentDidUpdate(e) {
        let { section: t } = e;
        t !== this.props.section && (this._intensity = P);
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            this._subscribedStores.forEach((e) => e.removeChangeListener(this.handleNoticeStoreUpdate)),
            this.props.sections.forEach((e) => {
                var t;
                return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e);
            });
    }
    getPredicateSections() {
        return this.props.sections.filter((e) => null == e.predicate || e.predicate());
    }
    validNavigation() {
        var e;
        let { section: t } = this.props,
            { notice: n } = null !== (e = this.getPredicateSections().find((e) => t === e.section)) && void 0 !== e ? e : {};
        return null != n && n.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (f.S.dispatch(O.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + N, C)),
              f.S.dispatch(O.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = P), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: r } = this.props,
            i = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            o = null != t ? t : e[0].section;
        return (0, s.jsx)(u.ZP, {
            contentTypes: i,
            children: (t) => {
                let { visibleContent: i } = t;
                return (0, s.jsxs)(c.njP, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        r ? (0, s.jsx)(p.Z, { style: v.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case m.ID.HEADER:
                                    return (0, s.jsx)(c.njP.Header, { children: e.label }, t);
                                case m.ID.DIVIDER:
                                    return (0, s.jsx)(c.njP.Separator, {}, t);
                                case m.ID.CUSTOM:
                                    var n;
                                    let r = null !== (n = e.element) && void 0 !== n ? n : O.VqG;
                                    return (0, s.jsx)(r, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, o === e.section, i);
                            }
                        })
                    ]
                });
            }
        });
    }
    renderNotice(e) {
        let { theme: t } = this.props;
        if (null == e || null == e.notice) return null;
        let { stores: n, element: r } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, s.jsx)(r, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: r, onClose: i, hideSidebar: o } = this.props,
            c = this.getPredicateSections(),
            a = c.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let u = null !== (e = 'string' == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : r;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(l.yY, {
                    location: r,
                    subsection: u
                }),
                (0, s.jsx)(m.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(c),
                    content: (0, s.jsx)(E, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: o,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != i ? this.handleClose : void 0
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, '_unmounted', !1),
            x(this, '_intensity', P),
            x(this, '_subscribedStores', []),
            x(this, 'scrollerRef', r.createRef()),
            x(this, 'state', y(j({}, S), { sidebarOpen: this.props.section !== O.oAB.SUBSCRIPTIONS && this.props.section !== O.oAB.PROFILE_CUSTOMIZATION })),
            x(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            x(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: s, onPreventNavigation: r } = this.state,
                    i = () => {
                        var s;
                        null == t || t(e);
                        let { notice: r } = null !== (s = n.find((t) => e === t.section)) && void 0 !== s ? s : {},
                            i = null != r ? r.stores : null;
                        null != i &&
                            i.forEach((e) => {
                                this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(y(j({}, S), { sidebarOpen: !1 }));
                    };
                this.validNavigation() &&
                    !s &&
                    (i(),
                    b.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    s && null != r && r(i);
            }),
            x(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            x(this, 'handleNoticeStoreUpdate', () => {
                !this._unmounted && ((this._intensity = P), this.forceUpdate());
            }),
            x(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: r, label: i = null, ariaLabel: a, onClick: l, color: u, icon: p, className: f, newIndicator: b, newIndicatorDismissibleContentTypes: g, badgeCount: m } = e,
                    x = null;
                r === O.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (x = (0, s.jsx)(c.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: o.Z.colors.STATUS_WARNING.css
                      }))
                    : null != e.decoration
                      ? (x = (0, s.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: e.decoration
                        }))
                      : null != n && (null == g ? void 0 : g.includes(n)) && !t
                        ? (x = null != b ? b : (0, s.jsx)(c.IGR, { text: h.NW.string(h.t.y2b7CA) }))
                        : null != p
                          ? (x = p)
                          : null != m && m > 0 && (x = (0, s.jsx)(c.mAB, { count: m }));
                let j =
                    r === O.oAB.PREMIUM
                        ? (0, s.jsx)(d.Z, {
                              label: i,
                              isSelected: t,
                              decoration: x
                          })
                        : null == x
                          ? i
                          : (0, s.jsxs)('div', {
                                className: v.tabBarItemContainer,
                                children: [i, x]
                            });
                return (0, s.jsx)(
                    c.njP.Item,
                    {
                        color: u,
                        id: r,
                        onClick: l,
                        className: f,
                        'aria-label': a,
                        children: j
                    },
                    r
                );
            });
    }
}
let _ = w;
