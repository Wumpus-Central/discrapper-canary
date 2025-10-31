n.d(t, { Z: () => O }), n(781311), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(755721),
    o = n(770146),
    c = n(600164),
    u = n(424218),
    d = n(823379),
    p = n(358085),
    f = n(843445),
    m = n(981631),
    h = n(388032),
    g = n(688510);
let _ = {
    [m.TaA.WINDOWS]: p.PlatformTypes.WINDOWS,
    [m.TaA.MACOS]: p.PlatformTypes.OSX,
    [m.TaA.LINUX]: p.PlatformTypes.LINUX,
};
class b extends i.PureComponent {
    render() {
        let { active: e, children: t, pageSize: n, onClick: i } = this.props,
            l = n === f.b.LARGE;
        return (0, r.jsx)(s.zx, {
            size: l ? s.zx.Sizes.MIN : s.zx.Sizes.LARGE,
            fullWidth: !l,
            color: e ? g.tabSelectedColor : g.tabNotSelectedColor,
            className: a()({
                [g.tabPageLarge]: l,
                [g.tabPageSmall]: !l,
                [g.tabSelected]: e,
                [g.tabNotSelected]: !e,
            }),
            onClick: i,
            children: t,
        });
    }
}
class E extends i.PureComponent {
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
                  className: g.tabs,
                  children: [
                      (0, r.jsx)("div", { className: g.separator }),
                      i.map((t) =>
                          (0, r.jsx)(
                              b,
                              {
                                  active: t === n,
                                  onClick: () => this.handleSelectOperatingSystem(t),
                                  pageSize: e,
                                  children: (function (e) {
                                      switch (e) {
                                          case m.TaA.WINDOWS:
                                              return h.intl.string(h.t["0/xHFO"]);
                                          case m.TaA.MACOS:
                                              return h.intl.string(h.t.E4u4n5);
                                          case m.TaA.LINUX:
                                              return h.intl.string(h.t.tcawo3);
                                      }
                                  })(t),
                              },
                              t,
                          ),
                      ),
                  ],
              });
    }
    renderRequirementsSection(e, t) {
        if (null == e) return null;
        let n = [
            {
                key: h.intl.string(h.t["0TcHzv"]),
                value: e.operating_system_version,
            },
            {
                key: h.intl.string(h.t.eOX6Hq),
                value: e.cpu,
            },
            {
                key: h.intl.string(h.t["+WJ5XQ"]),
                value:
                    null != e.ram
                        ? h.intl.formatToPlainString(h.t.RNRSl6, {
                              size: (0, u.BU)(1000 * e.ram, { showDecimalForGB: !1 }),
                          })
                        : null,
            },
            {
                key: h.intl.string(h.t["+3s/V/"]),
                value: e.gpu,
            },
            {
                key: h.intl.string(h.t["L+x5wB"]),
                value: null != e.disk ? (0, u.BU)(1000 * e.disk, { showDecimalForGB: !1 }) : null,
            },
            {
                key: h.intl.string(h.t["Ghp2/B"]),
                value: e.sound_card,
            },
            {
                key: h.intl.string(h.t["+w6nJg"]),
                value: e.network,
            },
            {
                key: h.intl.string(h.t.Au3Vbp),
                value: e.notes,
            },
        ]
            .map((e, t) => {
                let n = null != e.value ? e.value.trim() : null;
                return null == n || 0 === n.length
                    ? null
                    : (0, r.jsxs)(
                          "div",
                          {
                              className: g.requirement,
                              children: [
                                  (0, r.jsxs)("span", {
                                      className: g.requirementKey,
                                      children: [e.key, ":"],
                                  }),
                                  n,
                              ],
                          },
                          t,
                      );
            })
            .filter(d.lm);
        return (0, r.jsxs)("div", {
            className: g.requirements,
            children: [
                (0, r.jsx)(o.Z, {
                    tag: "h4",
                    children: t,
                }),
                n,
            ],
        });
    }
    renderBody() {
        let { minimum: e, recommended: t } = this.props.systemRequirements[this.state.selectedOperatingSystem];
        return (0, r.jsxs)("div", {
            className: g.requirementsContainer,
            children: [
                this.renderRequirementsSection(e, h.intl.string(h.t.QCCMXE)),
                this.renderRequirementsSection(t, h.intl.string(h.t.He39wq)),
            ],
        });
    }
    render() {
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [(0, r.jsx)(o.Z, { children: h.intl.string(h.t.IkOAol) }), this.renderTabs(), this.renderBody()],
        });
    }
    constructor(e) {
        super(e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handleSelectOperatingSystem", (e) => {
                this.setState({ selectedOperatingSystem: e });
            });
        let t = (0, p.getPlatform)(),
            n = Object.keys(e.systemRequirements),
            r = n[0];
        for (let e of n) _[e] === t && (r = e);
        this.state = { selectedOperatingSystem: r };
    }
}
let O = E;
