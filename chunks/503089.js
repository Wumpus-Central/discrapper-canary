s.d(t, {
    $x: () => P,
    ZP: () => N,
    d7: () => w,
    w6: () => S
}),
    s(653041),
    s(13667),
    s(390547),
    s(47120);
var r = s(200651),
    n = s(192379),
    i = s(990547),
    o = s(692547),
    l = s(481060),
    a = s(213609),
    c = s(252618),
    u = s(243778),
    d = s(126848),
    p = s(207874),
    f = s(585483),
    b = s(960048),
    g = s(410575),
    O = s(493544),
    x = s(981631),
    m = s(388032),
    h = s(64730);
function j(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                j(e, t, s[t]);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, r);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
let v = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    P = 1.4,
    S = 15,
    w = 2;
function _(e) {
    var t, s;
    let { section: n, setPreventNavigation: o, scrollerRef: l } = e;
    (0, a.Z)({
        type: i.ImpressionTypes.PANE,
        name: null == n ? void 0 : n.impressionName,
        properties: null == n ? void 0 : n.impressionProperties
    });
    let c = null != (t = null == n ? void 0 : n.element) ? t : x.VqG,
        u = null != (s = null == n ? void 0 : n.elementProps) ? s : {};
    return (0, r.jsx)(g.Z, {
        section: n.section,
        children: (0, r.jsx)(
            c,
            C(y({}, u), {
                setPreventNavigation: o,
                refToScroller: l
            })
        )
    });
}
class E extends n.PureComponent {
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: s } = t;
            null != s &&
                s.forEach((e) => {
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
                return null == (t = e.onSettingsClose) ? void 0 : t.call(e);
            });
    }
    getPredicateSections() {
        return this.props.sections.filter((e) => null == e.predicate || e.predicate());
    }
    validNavigation() {
        var e;
        let { section: t } = this.props,
            { notice: s } = null != (e = this.getPredicateSections().find((e) => t === e.section)) ? e : {};
        return null != s && s.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (f.S.dispatch(x.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + w, S)),
              f.S.dispatch(x.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = P), !0);
    }
    renderSidebar(e) {
        let { section: t, title: s, showUserSettingsSearch: n } = this.props,
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
                    'aria-label': s,
                    children: [
                        n ? (0, r.jsx)(p.Z, { style: h.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case O.ID.HEADER:
                                    return (0, r.jsx)(l.njP.Header, { children: e.label }, t);
                                case O.ID.DIVIDER:
                                    return (0, r.jsx)(l.njP.Separator, {}, t);
                                case O.ID.CUSTOM:
                                    var s;
                                    let n = null != (s = e.element) ? s : x.VqG;
                                    return (0, r.jsx)(n, {}, t);
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
        let { stores: s, element: n } = e.notice;
        return null == s || s.some((e) => e.showNotice()) ? (0, r.jsx)(n, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: s, title: n, onClose: i, hideSidebar: o } = this.props,
            l = this.getPredicateSections(),
            a = l.find((e) => e.section === s);
        if (null == a || null == s) return null;
        let u = null != (e = 'string' == typeof a.label ? a.label : a.ariaLabel) ? e : n;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.yY, {
                    location: n,
                    subsection: u
                }),
                (0, r.jsx)(O.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: s,
                    sidebar: this.renderSidebar(l),
                    content: (0, r.jsx)(_, {
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
            j(this, '_unmounted', !1),
            j(this, '_intensity', P),
            j(this, '_subscribedStores', []),
            j(this, 'scrollerRef', n.createRef()),
            j(this, 'state', C(y({}, v), { sidebarOpen: this.props.section !== x.oAB.SUBSCRIPTIONS && this.props.section !== x.oAB.PROFILE_CUSTOMIZATION })),
            j(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            j(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: s } = this.props,
                    { shouldPreventNavigation: r, onPreventNavigation: n } = this.state,
                    i = () => {
                        var r;
                        null == t || t(e);
                        let { notice: n } = null != (r = s.find((t) => e === t.section)) ? r : {},
                            i = null != n ? n.stores : null;
                        null != i &&
                            i.forEach((e) => {
                                this._subscribedStores.includes(e) || (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState(C(y({}, v), { sidebarOpen: !1 }));
                    };
                this.validNavigation() &&
                    !r &&
                    (i(),
                    b.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    r && null != n && n(i);
            }),
            j(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            j(this, 'handleNoticeStoreUpdate', () => {
                this._unmounted || ((this._intensity = P), this.forceUpdate());
            }),
            j(this, 'renderSettingsSectionTabBarItem', (e, t, s) => {
                let { section: n, label: i = null, ariaLabel: a, onClick: c, color: u, icon: p, className: f, newIndicator: b, newIndicatorDismissibleContentTypes: g, badgeCount: O } = e,
                    j = null;
                n === x.oAB.ACCOUNT && this.props.isEligibleForPomelo
                    ? (j = (0, r.jsx)(l.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: o.Z.colors.STATUS_WARNING.css
                      }))
                    : null != e.decoration
                      ? (j = (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: e.decoration
                        }))
                      : null != s && (null == g ? void 0 : g.includes(s)) && !t
                        ? (j = null != b ? b : (0, r.jsx)(l.IGR, { text: m.NW.string(m.t.y2b7CA) }))
                        : null != p
                          ? (j = p)
                          : null != O && O > 0 && (j = (0, r.jsx)(l.mAB, { count: O }));
                let y =
                    n === x.oAB.PREMIUM
                        ? (0, r.jsx)(d.Z, {
                              label: i,
                              isSelected: t,
                              decoration: j
                          })
                        : null == j
                          ? i
                          : (0, r.jsxs)('div', {
                                className: h.tabBarItemContainer,
                                children: [i, j]
                            });
                return (0, r.jsx)(
                    l.njP.Item,
                    {
                        color: u,
                        id: n,
                        onClick: c,
                        className: f,
                        'aria-label': a,
                        children: y
                    },
                    n
                );
            });
    }
}
let N = E;
