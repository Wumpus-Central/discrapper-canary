n.d(t, { Z: () => N });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(304106),
    d = n(649974),
    c = n(246946),
    u = n(594174),
    h = n(525395),
    m = n(55563),
    p = n(551428),
    g = n(73346),
    _ = n(733789),
    f = n(4962),
    E = n(388032),
    I = n(906652);
class C extends l.Component {
    renderReasons(e, t, n) {
        return 0 === e.length && 0 === t.length
            ? null
            : (0, i.jsx)('div', {
                  className: I.section,
                  children: (0, i.jsxs)('div', {
                      className: I.sectionContent,
                      children: [
                          e.map((e) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: I.unit,
                                      children: (0, i.jsx)(_.Z, {
                                          reason: e,
                                          hidePersonalInformation: n
                                      })
                                  },
                                  e.type
                              )
                          ),
                          t.map((e) =>
                              (0, i.jsx)(
                                  'div',
                                  {
                                      className: I.unit,
                                      children: (0, i.jsx)(o.Z, { reason: e })
                                  },
                                  e.type
                              )
                          )
                      ]
                  })
              });
    }
    getReviewToRender() {
        let { storeListing: e } = this.props;
        return null != e.staffNotes
            ? {
                  type: f.Z.Types.STAFF_NOTES,
                  staffNotes: e.staffNotes
              }
            : null;
    }
    render() {
        let { socialReasons: e, nonSocialReasons: t, storeListing: n, hidePersonalInformation: l, className: r } = this.props;
        if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
        let s = this.getReviewToRender();
        return (0, i.jsxs)('div', {
            className: a()(I.root, r),
            children: [
                (0, i.jsx)('div', {
                    className: I.header,
                    children: E.intl.string(E.t.qABFpa)
                }),
                this.renderReasons(e, t, l),
                null != s
                    ? (0, i.jsx)(f.Z, {
                          data: s,
                          className: I.review
                      })
                    : null
            ]
        });
    }
}
let N = s.ZP.connectStores([m.Z, u.default, p.Z, d.Z, h.Z, c.Z], (e) => {
    let { sku: t } = e;
    return {
        socialReasons: (0, g.Gg)(t.id, m.Z, u.default, d.Z, h.Z),
        nonSocialReasons: (0, g.Ww)(t.id, m.Z, p.Z),
        hidePersonalInformation: c.Z.hidePersonalInformation
    };
})(C);
