n.d(t, {
    $x: () => S,
    ZP: () => N,
    d7: () => E,
    w6: () => C
}),
    n(539854),
    n(361932),
    n(187205),
    n(388685);
var r = n(200651),
    s = n(192379),
    i = n(990547),
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
    v = n(981631),
    h = n(388032),
    O = n(64730);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
    S = 1.4,
    C = 15,
    E = 2;
function P(e) {
    var t, n;
    let { section: s, setPreventNavigation: o, scrollerRef: l } = e;
    (0, a.Z)({
        type: i.ImpressionTypes.PANE,
        name: null == s ? void 0 : s.impressionName,
        properties: null == s ? void 0 : s.impressionProperties
    });
    let c = null != (t = null == s ? void 0 : s.element) ? t : v.VqG,
        u = null != (n = null == s ? void 0 : s.elementProps) ? n : {};
    return (0, r.jsx)(b.Z, {
        section: s.section,
        children: (0, r.jsx)(
            c,
            y(j({}, u), {
                setPreventNavigation: o,
                refToScroller: l
            })
        )
    });
}
class w extends s.PureComponent {
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
        t !== this.props.section && (this._intensity = S);
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
            ? (p.S.dispatch(v.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + E, C)),
              p.S.dispatch(v.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = S), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, showUserSettingsSearch: s } = this.props,
            i = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            o = null != t ? t : e[0].section;
        return (0, r.jsx)(u.ZP, {
            contentTypes: i,
            children: (t) => {
                let { visibleContent: i } = t;
                return (0, r.jsxs)(l.njP, {
                    selectedItem: o,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        s ? (0, r.jsx)(f.Z, { style: O.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case m.ID.HEADER:
                                    return (0, r.jsx)(l.njP.Header, { children: e.label }, t);
                                case m.ID.DIVIDER:
                                    return (0, r.jsx)(l.njP.Separator, {}, t);
                                case m.ID.CUSTOM:
                                    var n;
                                    let s = null != (n = e.element) ? n : v.VqG;
                                    return (0, r.jsx)(s, {}, t);
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
        let { stores: n, element: s } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, r.jsx)(s, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: s, onClose: i, hideSidebar: o } = this.props,
            l = this.getPredicateSections(),
            a = l.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let u = null != (e = 'string' == typeof a.label ? a.label : a.ariaLabel) ? e : s;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.yY, {
                    location: s,
                    subsection: u
                }),
                (0, r.jsx)(m.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(l),
                    content: (0, r.jsx)(P, {
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
            _(this, '_unmounted', !1),
            _(this, '_intensity', S),
            _(this, '_subscribedStores', []),
            _(this, 'scrollerRef', s.createRef()),
            _(this, 'state', y(j({}, x), { sidebarOpen: this.props.section !== v.oAB.SUBSCRIPTIONS && this.props.section !== v.oAB.PROFILE_CUSTOMIZATION })),
            _(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            _(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: r, onPreventNavigation: s } = this.state,
                    i = () => {
                        var r;
                        null == t || t(e);
                        let { notice: s } = null != (r = n.find((t) => e === t.section)) ? r : {},
                            i = null != s ? s.stores : null;
                        null != i &&
                            i.forEach((e) => {
                                this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(y(j({}, x), { sidebarOpen: !1 }));
                    };
                this.validNavigation() &&
                    !r &&
                    (i(),
                    g.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    r && null != s && s(i);
            }),
            _(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            _(this, 'handleNoticeStoreUpdate', () => {
                this._unmounted || ((this._intensity = S), this.forceUpdate());
            }),
            _(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: s, label: i = null, ariaLabel: a, onClick: c, color: u, icon: f, className: p, newIndicator: g, newIndicatorDismissibleContentTypes: b, badgeCount: m } = e,
                    _ = null;
                s === v.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (_ = (0, r.jsx)(l.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: o.Z.colors.STATUS_WARNING.css
                      }))
                    : null != e.decoration
                      ? (_ = (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: e.decoration
                        }))
                      : null != n && (null == b ? void 0 : b.includes(n)) && !t
                        ? (_ = null != g ? g : (0, r.jsx)(l.IGR, { text: h.intl.string(h.t.y2b7CA) }))
                        : null != f
                          ? (_ = f)
                          : null != m && m > 0 && (_ = (0, r.jsx)(l.mAB, { count: m }));
                let j =
                    s === v.oAB.PREMIUM
                        ? (0, r.jsx)(d.Z, {
                              label: i,
                              isSelected: t,
                              decoration: _
                          })
                        : null == _
                          ? i
                          : (0, r.jsxs)('div', {
                                className: O.tabBarItemContainer,
                                children: [i, _]
                            });
                return (0, r.jsx)(
                    l.njP.Item,
                    {
                        color: u,
                        id: s,
                        onClick: c,
                        className: p,
                        'aria-label': a,
                        children: j
                    },
                    s
                );
            });
    }
}
let N = w;
