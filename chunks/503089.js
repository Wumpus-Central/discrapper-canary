n.d(t, {
    $x: () => C,
    ZP: () => N,
    d7: () => P,
    w6: () => S
}),
    n(539854),
    n(361932),
    n(187205),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(990547),
    o = n(692547),
    l = n(481060),
    a = n(213609),
    c = n(252618),
    u = n(243778),
    d = n(126848),
    f = n(207874),
    p = n(585483),
    g = n(960048),
    b = n(410575),
    m = n(493544),
    h = n(981631),
    v = n(388032),
    _ = n(64730);
function O(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
let x = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    C = 1.4,
    S = 15,
    P = 2;
function E(e) {
    var t, n;
    let { section: i, setPreventNavigation: o, scrollerRef: l } = e;
    (0, a.Z)({
        type: s.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties
    });
    let c = null != (t = null == i ? void 0 : i.element) ? t : h.VqG,
        u = null != (n = null == i ? void 0 : i.elementProps) ? n : {};
    return (0, r.jsx)(b.Z, {
        section: i.section,
        children: (0, r.jsx)(
            c,
            j(y({}, u), {
                setPreventNavigation: o,
                refToScroller: l
            })
        )
    });
}
class w extends i.PureComponent {
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
        t !== this.props.section && (this._intensity = C);
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            this._subscribedStores.forEach((e) => e.removeChangeListener(this.handleNoticeStoreUpdate)),
            this.props.sections.forEach((e) => {
                var t;
                return null == (t = e.onSettingsClose) ? void 0 : t.call(e);
            });
    }
    getPredicateSections() {
        return this.props.sections.filter((e) => null == e.predicate || e.predicate());
    }
    validNavigation() {
        var e;
        let { section: t } = this.props,
            { notice: n } = null != (e = this.getPredicateSections().find((e) => t === e.section)) ? e : {};
        return null != n && n.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (p.S.dispatch(h.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + P, S)),
              p.S.dispatch(h.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = C), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: i } = this.props,
            s = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            o = null != t ? t : e[0].section;
        return (0, r.jsx)(u.ZP, {
            contentTypes: s,
            children: (t) => {
                let { visibleContent: s } = t;
                return (0, r.jsxs)(l.njP, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        i ? (0, r.jsx)(f.Z, { style: _.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case m.ID.HEADER:
                                    return (0, r.jsx)(l.njP.Header, { children: e.label }, t);
                                case m.ID.DIVIDER:
                                    return (0, r.jsx)(l.njP.Separator, {}, t);
                                case m.ID.CUSTOM:
                                    var n;
                                    let i = null != (n = e.element) ? n : h.VqG;
                                    return (0, r.jsx)(i, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, o === e.section, s);
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
        let { stores: n, element: i } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, r.jsx)(i, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: i, onClose: s, hideSidebar: o } = this.props,
            l = this.getPredicateSections(),
            a = l.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let u = null != (e = 'string' == typeof a.label ? a.label : a.ariaLabel) ? e : i;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.yY, {
                    location: i,
                    subsection: u
                }),
                (0, r.jsx)(m.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(l),
                    content: (0, r.jsx)(E, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: o,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != s ? this.handleClose : void 0
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            O(this, '_unmounted', !1),
            O(this, '_intensity', C),
            O(this, '_subscribedStores', []),
            O(this, 'scrollerRef', i.createRef()),
            O(this, 'state', j(y({}, x), { sidebarOpen: this.props.section !== h.oAB.SUBSCRIPTIONS && this.props.section !== h.oAB.PROFILE_CUSTOMIZATION })),
            O(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            O(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: r, onPreventNavigation: i } = this.state,
                    s = () => {
                        var r;
                        null == t || t(e);
                        let { notice: i } = null != (r = n.find((t) => e === t.section)) ? r : {},
                            s = null != i ? i.stores : null;
                        null != s &&
                            s.forEach((e) => {
                                this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(j(y({}, x), { sidebarOpen: !1 }));
                    };
                this.validNavigation() &&
                    !r &&
                    (s(),
                    g.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    r && null != i && i(s);
            }),
            O(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            O(this, 'handleNoticeStoreUpdate', () => {
                this._unmounted || ((this._intensity = C), this.forceUpdate());
            }),
            O(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: i, label: s = null, ariaLabel: a, onClick: c, color: u, icon: f, className: p, newIndicator: g, newIndicatorDismissibleContentTypes: b, badgeCount: m } = e,
                    O = null;
                i === h.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (O = (0, r.jsx)(l.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: o.Z.colors.STATUS_WARNING.css
                      }))
                    : null != e.decoration
                      ? (O = (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: e.decoration
                        }))
                      : null != n && (null == b ? void 0 : b.includes(n)) && !t
                        ? (O = null != g ? g : (0, r.jsx)(l.IGR, { text: v.intl.string(v.t.y2b7CA) }))
                        : null != f
                          ? (O = f)
                          : null != m && m > 0 && (O = (0, r.jsx)(l.mAB, { count: m }));
                let y =
                    i === h.oAB.PREMIUM
                        ? (0, r.jsx)(d.Z, {
                              label: s,
                              isSelected: t,
                              decoration: O
                          })
                        : null == O
                          ? s
                          : (0, r.jsxs)('div', {
                                className: _.tabBarItemContainer,
                                children: [s, O]
                            });
                return (0, r.jsx)(
                    l.njP.Item,
                    {
                        color: u,
                        id: i,
                        onClick: c,
                        className: p,
                        'aria-label': a,
                        children: y
                    },
                    i
                );
            });
    }
}
let N = w;
