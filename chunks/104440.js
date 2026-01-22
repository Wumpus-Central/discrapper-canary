n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(665260),
    a = n(311907),
    s = n(397927),
    o = n(59636),
    c = n(235986),
    u = n(253932),
    d = n(742077),
    p = n(954571),
    f = n(144914),
    h = n(765258),
    A = n(192771),
    g = n(652215),
    m = n(985018),
    b = n(231566);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function O(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let i = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, r.jsxs)(
            "div",
            {
                className: b.Kp,
                children: [
                    (0, r.jsxs)(c.A, {
                        direction: c.A.Direction.VERTICAL,
                        className: b.Hm,
                        children: [
                            (0, r.jsx)("div", {
                                className: b.SX,
                                children: e.libraryApplication.getBranchedName(e.application),
                            }),
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: b.ME,
                                      children: g.gG4[t],
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(s.DUT, {
                        className: b.P5,
                        onClick: () => n(e.libraryApplication),
                        children: (0, r.jsx)(s.PGe, {
                            size: "md",
                            color: "currentColor",
                            className: b.q_,
                        }),
                    }),
                ],
            },
            e.key,
        );
    });
    return (0, r.jsxs)("div", {
        className: b.z0,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                className: b.Z9,
                children: m.intl.string(m.t["5PJtrH"]),
            }),
            i,
        ],
    });
}
class y extends i.PureComponent {
    handleToggleShortcutDesktop(e) {
        u.uB.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        u.Pf.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        p.default.track(
            g.HAw.APPLICATION_SETTINGS_UPDATED,
            E(
                {
                    hidden_enabled: t,
                },
                e.getAnalyticsData(),
            ),
        );
    }
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: e,
            installShortcutDesktop: t,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, r.jsxs)("div", {
            className: b.rf,
            children: [
                (0, f.S)()
                    ? (0, r.jsxs)(s.BJc, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(s.dOG, {
                                  label: m.intl.string(m.t["9ID+Kh"]),
                                  description: m.intl.string(m.t.vT61N0),
                                  checked: t,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, r.jsx)(s.cGx, {}),
                              (0, r.jsx)(s.dOG, {
                                  label: m.intl.string(m.t.vNpUMz),
                                  description: m.intl.string(m.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, r.jsx)(s.cGx, {}),
                              (0, r.jsx)(A.A, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(O, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e,
                }),
            ],
        });
    }
    render() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.A, {
                    currentRoute: g.BVt.APPLICATION_LIBRARY_SETTINGS,
                }),
                (0, r.jsx)(s.ArX, {
                    className: b.XG,
                    children: this.renderBody(),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "handleRestoreHiddenLibraryApplication", (e) => {
                let t = l.PQ(e.getFlags(), g.hM6.HIDDEN);
                o.V(e.id, e.branchId, t), this.trackRestoreApplication(e, l.Lt(t, g.hM6.HIDDEN));
            });
    }
}

function I() {
    let e = {
        installShortcutDesktop: u.uB.useSetting(),
        installShortcutStartMenu: u.Pf.useSetting(),
        hiddenLibraryApplicationViewItems: (0, a.bG)([d.A], () => d.A.hiddenLibraryApplicationViewItems),
    };
    return (0, r.jsx)(y, E({}, e));
}
