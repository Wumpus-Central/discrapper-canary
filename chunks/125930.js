n.d(t, { Z: () => N }), n(566702), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(770146),
    c = n(600164),
    u = n(424218),
    d = n(823379),
    p = n(358085),
    h = n(843445),
    g = n(981631),
    f = n(388032),
    m = n(862986);
let b = {
    [g.TaA.WINDOWS]: p.PlatformTypes.WINDOWS,
    [g.TaA.MACOS]: p.PlatformTypes.OSX,
    [g.TaA.LINUX]: p.PlatformTypes.LINUX
};
class _ extends i.PureComponent {
    render() {
        let { active: e, children: t, pageSize: n, onClick: i } = this.props,
            l = n === h.b.LARGE;
        return (0, r.jsx)(a.zxk, {
            size: l ? a.zxk.Sizes.MIN : a.zxk.Sizes.LARGE,
            fullWidth: !l,
            color: e ? m.tabSelectedColor : m.tabNotSelectedColor,
            className: o()({
                [m.tabPageLarge]: l,
                [m.tabPageSmall]: !l,
                [m.tabSelected]: e,
                [m.tabNotSelected]: !e
            }),
            onClick: i,
            children: t
        });
    }
}
let E = (e) => [
    {
        key: f.NW.string(f.t['0TcHzs']),
        value: e.operating_system_version
    },
    {
        key: f.NW.string(f.t.eOX6Hh),
        value: e.cpu
    },
    {
        key: f.NW.string(f.t['+WJ5XV']),
        value: null != e.ram ? f.NW.formatToPlainString(f.t.RNRSl5, { size: (0, u.BU)(1000 * e.ram, { showDecimalForGB: !1 }) }) : null
    },
    {
        key: f.NW.string(f.t['+3s/V1']),
        value: e.gpu
    },
    {
        key: f.NW.string(f.t['L+x5wM']),
        value: null != e.disk ? (0, u.BU)(1000 * e.disk, { showDecimalForGB: !1 }) : null
    },
    {
        key: f.NW.string(f.t['Ghp2/P']),
        value: e.sound_card
    },
    {
        key: f.NW.string(f.t['+w6nJi']),
        value: e.network
    },
    {
        key: f.NW.string(f.t.Au3Vbm),
        value: e.notes
    }
];
class O extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { systemRequirements: n } = e,
            { selectedOperatingSystem: r } = t,
            i = Object.keys(n);
        return i.includes(r) ? null : { selectedOperatingSystem: i[0] };
    }
    renderTabs() {
        let { pageSize: e, systemRequirements: t } = this.props,
            { selectedOperatingSystem: n } = this.state,
            i = Object.keys(t);
        return 1 === i.length
            ? null
            : (0, r.jsxs)(c.Z, {
                  className: m.tabs,
                  children: [
                      (0, r.jsx)('div', { className: m.separator }),
                      i.map((t) =>
                          (0, r.jsx)(
                              _,
                              {
                                  active: t === n,
                                  onClick: () => this.handleSelectOperatingSystem(t),
                                  pageSize: e,
                                  children: (function (e) {
                                      switch (e) {
                                          case g.TaA.WINDOWS:
                                              return f.NW.string(f.t['0/xHFB']);
                                          case g.TaA.MACOS:
                                              return f.NW.string(f.t.E4u4n5);
                                          case g.TaA.LINUX:
                                              return f.NW.string(f.t.tcawo6);
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
        let n = E(e)
            .map((e, t) => {
                let n = null != e.value ? e.value.trim() : null;
                return null == n || 0 === n.length
                    ? null
                    : (0, r.jsxs)(
                          'div',
                          {
                              className: m.requirement,
                              children: [
                                  (0, r.jsxs)('span', {
                                      className: m.requirementKey,
                                      children: [e.key, ':']
                                  }),
                                  n
                              ]
                          },
                          t
                      );
            })
            .filter(d.lm);
        return (0, r.jsxs)('div', {
            className: m.requirements,
            children: [
                (0, r.jsx)(s.Z, {
                    tag: 'h4',
                    children: t
                }),
                n
            ]
        });
    }
    renderBody() {
        let { minimum: e, recommended: t } = this.props.systemRequirements[this.state.selectedOperatingSystem];
        return (0, r.jsxs)('div', {
            className: m.requirementsContainer,
            children: [this.renderRequirementsSection(e, f.NW.string(f.t.QCCMXF)), this.renderRequirementsSection(t, f.NW.string(f.t.He39ws))]
        });
    }
    render() {
        return (0, r.jsxs)('div', {
            className: this.props.className,
            children: [(0, r.jsx)(s.Z, { children: f.NW.string(f.t.IkOAoq) }), this.renderTabs(), this.renderBody()]
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
        let r = (0, p.getPlatform)(),
            i = Object.keys(e.systemRequirements),
            l = i[0];
        for (let e of i) b[e] === r && (l = e);
        this.state = { selectedOperatingSystem: l };
    }
}
let N = O;
