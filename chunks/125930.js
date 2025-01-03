n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(770146),
    c = n(600164),
    d = n(424218),
    u = n(823379),
    h = n(358085),
    m = n(843445),
    p = n(981631),
    g = n(388032),
    f = n(803157);
let _ = {
    [p.TaA.WINDOWS]: h.PlatformTypes.WINDOWS,
    [p.TaA.MACOS]: h.PlatformTypes.OSX,
    [p.TaA.LINUX]: h.PlatformTypes.LINUX
};
class E extends r.PureComponent {
    render() {
        let { active: e, children: t, pageSize: n, onClick: r } = this.props,
            l = n === m.b.LARGE;
        return (0, i.jsx)(s.Button, {
            size: l ? s.Button.Sizes.MIN : s.Button.Sizes.LARGE,
            fullWidth: !l,
            color: e ? f.tabSelectedColor : f.tabNotSelectedColor,
            className: a()({
                [f.tabPageLarge]: l,
                [f.tabPageSmall]: !l,
                [f.tabSelected]: e,
                [f.tabNotSelected]: !e
            }),
            onClick: r,
            children: t
        });
    }
}
let I = (e) => [
    {
        key: g.intl.string(g.t['0TcHzs']),
        value: e.operating_system_version
    },
    {
        key: g.intl.string(g.t.eOX6Hh),
        value: e.cpu
    },
    {
        key: g.intl.string(g.t['+WJ5XV']),
        value: null != e.ram ? g.intl.formatToPlainString(g.t.RNRSl5, { size: (0, d.BU)(1000 * e.ram, { showDecimalForGB: !1 }) }) : null
    },
    {
        key: g.intl.string(g.t['+3s/V1']),
        value: e.gpu
    },
    {
        key: g.intl.string(g.t['L+x5wM']),
        value: null != e.disk ? (0, d.BU)(1000 * e.disk, { showDecimalForGB: !1 }) : null
    },
    {
        key: g.intl.string(g.t['Ghp2/P']),
        value: e.sound_card
    },
    {
        key: g.intl.string(g.t['+w6nJi']),
        value: e.network
    },
    {
        key: g.intl.string(g.t.Au3Vbm),
        value: e.notes
    }
];
class C extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { systemRequirements: n } = e,
            { selectedOperatingSystem: i } = t,
            r = Object.keys(n);
        return r.includes(i) ? null : { selectedOperatingSystem: r[0] };
    }
    renderTabs() {
        let { pageSize: e, systemRequirements: t } = this.props,
            { selectedOperatingSystem: n } = this.state,
            r = Object.keys(t);
        return 1 === r.length
            ? null
            : (0, i.jsxs)(c.Z, {
                  className: f.tabs,
                  children: [
                      (0, i.jsx)('div', { className: f.separator }),
                      r.map((t) =>
                          (0, i.jsx)(
                              E,
                              {
                                  active: t === n,
                                  onClick: () => this.handleSelectOperatingSystem(t),
                                  pageSize: e,
                                  children: (function (e) {
                                      switch (e) {
                                          case p.TaA.WINDOWS:
                                              return g.intl.string(g.t['0/xHFB']);
                                          case p.TaA.MACOS:
                                              return g.intl.string(g.t.E4u4n5);
                                          case p.TaA.LINUX:
                                              return g.intl.string(g.t.tcawo6);
                                      }
                                  })(t)
                              },
                              t
                          )
                      )
                  ]
              });
    }
    renderRequirementsSection(e, t) {
        if (null == e) return null;
        let n = I(e)
            .map((e, t) => {
                let n = null != e.value ? e.value.trim() : null;
                return null == n || 0 === n.length
                    ? null
                    : (0, i.jsxs)(
                          'div',
                          {
                              className: f.requirement,
                              children: [
                                  (0, i.jsxs)('span', {
                                      className: f.requirementKey,
                                      children: [e.key, ':']
                                  }),
                                  n
                              ]
                          },
                          t
                      );
            })
            .filter(u.lm);
        return (0, i.jsxs)('div', {
            className: f.requirements,
            children: [
                (0, i.jsx)(o.Z, {
                    tag: 'h4',
                    children: t
                }),
                n
            ]
        });
    }
    renderBody() {
        let { minimum: e, recommended: t } = this.props.systemRequirements[this.state.selectedOperatingSystem];
        return (0, i.jsxs)('div', {
            className: f.requirementsContainer,
            children: [this.renderRequirementsSection(e, g.intl.string(g.t.QCCMXF)), this.renderRequirementsSection(t, g.intl.string(g.t.He39ws))]
        });
    }
    render() {
        return (0, i.jsxs)('div', {
            className: this.props.className,
            children: [(0, i.jsx)(o.Z, { children: g.intl.string(g.t.IkOAoq) }), this.renderTabs(), this.renderBody()]
        });
    }
    constructor(e) {
        var t, n, i;
        super(e),
            (t = this),
            (n = 'handleSelectOperatingSystem'),
            (i = (e) => {
                this.setState({ selectedOperatingSystem: e });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
        let r = (0, h.getPlatform)(),
            l = Object.keys(e.systemRequirements),
            a = l[0];
        for (let e of l) _[e] === r && (a = e);
        this.state = { selectedOperatingSystem: a };
    }
}
t.Z = C;
