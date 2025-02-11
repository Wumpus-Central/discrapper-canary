n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(770146),
    c = n(600164),
    d = n(424218),
    u = n(823379),
    h = n(358085),
    m = n(843445),
    p = n(981631),
    g = n(388032),
    _ = n(795049);
let f = {
    [p.TaA.WINDOWS]: h.PlatformTypes.WINDOWS,
    [p.TaA.MACOS]: h.PlatformTypes.OSX,
    [p.TaA.LINUX]: h.PlatformTypes.LINUX
};
class E extends l.PureComponent {
    render() {
        let { active: e, children: t, pageSize: n, onClick: l } = this.props,
            r = n === m.b.LARGE;
        return (0, i.jsx)(s.zxk, {
            size: r ? s.zxk.Sizes.MIN : s.zxk.Sizes.LARGE,
            fullWidth: !r,
            color: e ? _.tabSelectedColor : _.tabNotSelectedColor,
            className: a()({
                [_.tabPageLarge]: r,
                [_.tabPageSmall]: !r,
                [_.tabSelected]: e,
                [_.tabNotSelected]: !e
            }),
            onClick: l,
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
class C extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { systemRequirements: n } = e,
            { selectedOperatingSystem: i } = t,
            l = Object.keys(n);
        return l.includes(i) ? null : { selectedOperatingSystem: l[0] };
    }
    renderTabs() {
        let { pageSize: e, systemRequirements: t } = this.props,
            { selectedOperatingSystem: n } = this.state,
            l = Object.keys(t);
        return 1 === l.length
            ? null
            : (0, i.jsxs)(c.Z, {
                  className: _.tabs,
                  children: [
                      (0, i.jsx)('div', { className: _.separator }),
                      l.map((t) =>
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
                              className: _.requirement,
                              children: [
                                  (0, i.jsxs)('span', {
                                      className: _.requirementKey,
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
            className: _.requirements,
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
            className: _.requirementsContainer,
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
        var t, n;
        super(e),
            (t = 'handleSelectOperatingSystem'),
            (n = (e) => {
                this.setState({ selectedOperatingSystem: e });
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
        let i = (0, h.getPlatform)(),
            l = Object.keys(e.systemRequirements),
            r = l[0];
        for (let e of l) f[e] === i && (r = e);
        this.state = { selectedOperatingSystem: r };
    }
}
let N = C;
