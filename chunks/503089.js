n.d(t, {
    $x: () => C,
    ZP: () => T,
    d7: () => P,
    w6: () => S
}),
    n(539854),
    n(361932),
    n(187205),
    n(388685);
var r = n(255367),
    i = n(73800),
    s = n(990547),
    o = n(692547),
    a = n(481060),
    l = n(213609),
    c = n(252618),
    u = n(243778),
    d = n(126848),
    p = n(207874),
    f = n(585483),
    g = n(960048),
    b = n(410575),
    m = n(493544),
    _ = n(981631),
    v = n(388032),
    h = n(64730);
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
function j(e) {
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
function y(e, t) {
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
    let { section: i, setPreventNavigation: o, scrollerRef: a } = e;
    (0, l.Z)({
        type: s.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties
    });
    let c = null != (t = null == i ? void 0 : i.element) ? t : _.VqG,
        u = null != (n = null == i ? void 0 : i.elementProps) ? n : {};
    return (0, r.jsx)(b.Z, {
        section: i.section,
        children: (0, r.jsx)(
            c,
            y(j({}, u), {
                setPreventNavigation: o,
                refToScroller: a
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
            ? (f.S.dispatch(_.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + P, S)),
              f.S.dispatch(_.CkL.EMPHASIZE_NOTICE),
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
                return (0, r.jsxs)(a.njP, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        i ? (0, r.jsx)(p.Z, { style: h.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case m.ID.HEADER:
                                    return (0, r.jsx)(a.njP.Header, { children: e.label }, t);
                                case m.ID.DIVIDER:
                                    return (0, r.jsx)(a.njP.Separator, {}, t);
                                case m.ID.CUSTOM:
                                    var n;
                                    let i = null != (n = e.element) ? n : _.VqG;
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
            a = this.getPredicateSections(),
            l = a.find((e) => e.section === n);
        if (null == l || null == n) return null;
        let u = null != (e = 'string' == typeof l.label ? l.label : l.ariaLabel) ? e : i;
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
                    sidebar: this.renderSidebar(a),
                    content: (0, r.jsx)(E, {
                        section: l,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: o,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: l.type,
                    notice: this.renderNotice(l),
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
            O(this, 'state', y(j({}, x), { sidebarOpen: this.props.section !== _.oAB.SUBSCRIPTIONS && this.props.section !== _.oAB.PROFILE_CUSTOMIZATION })),
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
                            this.setState(y(j({}, x), { sidebarOpen: !1 }));
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
                let { section: i, label: s = null, ariaLabel: l, onClick: c, color: u, icon: p, className: f, newIndicator: g, newIndicatorDismissibleContentTypes: b, badgeCount: m } = e,
                    O = null;
                i === _.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (O = (0, r.jsx)(a.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: o.Z.colors.STATUS_WARNING.css
                      }))
                    : null != e.decoration
                      ? (O = (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: e.decoration
                        }))
                      : null != n && (null == b ? void 0 : b.includes(n)) && !t
                        ? (O = null != g ? g : (0, r.jsx)(a.IGR, { text: v.intl.string(v.t.y2b7CA) }))
                        : null != p
                          ? (O = p)
                          : null != m && m > 0 && (O = (0, r.jsx)(a.mAB, { count: m }));
                let j =
                    i === _.oAB.PREMIUM
                        ? (0, r.jsx)(d.Z, {
                              label: s,
                              isSelected: t,
                              decoration: O
                          })
                        : null == O
                          ? s
                          : (0, r.jsxs)('div', {
                                className: h.tabBarItemContainer,
                                children: [s, O]
                            });
                return (0, r.jsx)(
                    a.njP.Item,
                    {
                        color: u,
                        id: i,
                        onClick: c,
                        className: f,
                        'aria-label': l,
                        children: j
                    },
                    i
                );
            });
    }
}
let T = w;
