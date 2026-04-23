a.d(t, { B: () => N });
var s = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    n = a(946015),
    o = a(489569),
    c = a(563853),
    d = a(855522),
    _ = a(773977);
class N extends l.PureComponent {
    state = { languages: d.A.getLanguages().filter((e) => e.enabled), current: d.A.getLocaleInfo(), isOpen: !1 };
    componentDidMount() {
        this.callChangeLocale(d.A.getLocale());
    }
    setLocale = (e) => {
        null != d.A && (d.A.setLocale(e), this.callChangeLocale(e));
    };
    callChangeLocale = (e) => {
        let { onChange: t } = this.props;
        null != t && t(e);
    };
    open = () => {
        this.setState({ isOpen: !0 });
    };
    close = () => {
        this.setState({ isOpen: !1 });
    };
    toggle = () => {
        let { isOpen: e } = this.state;
        this.setState({ isOpen: !e });
    };
    render() {
        let { isOpen: e, languages: t, current: l } = this.state,
            { className: r } = this.props,
            d = null;
        return (
            null != t &&
                (d = t
                    .sort((e, t) => (e.code < t.code ? -1 : +(e.code > t.code)))
                    .map((e) => {
                        let t = (function (e) {
                                try {
                                    return a(579832)(`./${e}.png`);
                                } catch (e) {
                                    return null;
                                }
                            })(e.code),
                            r = () => this.setLocale(e.code);
                        return null == t
                            ? null
                            : (0, s.jsxs)(
                                  "li",
                                  {
                                      className: (0, o.t)(
                                          _,
                                          "locale",
                                          null != l && e.code === l.code ? "Current" : null,
                                      ),
                                      onClick: r,
                                      children: [
                                          (0, s.jsx)("img", { className: _.localeImage, src: t, alt: e.name }),
                                          e.name,
                                      ],
                                  },
                                  e.code,
                              );
                    })),
            (0, s.jsxs)("div", {
                className: i()(_.localePicker, r),
                onMouseEnter: this.open,
                onMouseLeave: this.close,
                onClick: this.toggle,
                children: [
                    (0, s.jsxs)(n.s, {
                        align: n.s.Align.CENTER,
                        className: (0, o.t)(_, "opener", e ? "Open" : null),
                        children: [
                            (0, s.jsx)("span", { className: _.line }),
                            (0, s.jsx)("img", {
                                className: _.localeIcon,
                                src: c.T.ICON_TRANSLATE,
                                alt: "Choose Locale",
                            }),
                            (0, s.jsx)("img", { className: _.arrowIcon, src: c.T.ICON_ARROW_DOWN, alt: "Open Locale" }),
                        ],
                    }),
                    (0, s.jsx)("ul", { className: (0, o.t)(_, "localeList", e ? "Open" : "Closed"), children: d }),
                ],
            })
        );
    }
}
