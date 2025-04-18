n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(304106),
    c = n(649974),
    u = n(246946),
    d = n(594174),
    p = n(525395),
    h = n(55563),
    f = n(551428),
    g = n(73346),
    m = n(733789),
    b = n(4962),
    _ = n(388032),
    E = n(868454);
class O extends i.Component {
    renderReasons(e, t, n) {
        return 0 === e.length && 0 === t.length
            ? null
            : (0, r.jsx)('div', {
                  className: E.section,
                  children: (0, r.jsxs)('div', {
                      className: E.sectionContent,
                      children: [
                          e.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: E.unit,
                                      children: (0, r.jsx)(m.Z, {
                                          reason: e,
                                          hidePersonalInformation: n
                                      })
                                  },
                                  e.type
                              )
                          ),
                          t.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: E.unit,
                                      children: (0, r.jsx)(s.Z, { reason: e })
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
                  type: b.Z.Types.STAFF_NOTES,
                  staffNotes: e.staffNotes
              }
            : null;
    }
    render() {
        let { socialReasons: e, nonSocialReasons: t, storeListing: n, hidePersonalInformation: i, className: l } = this.props;
        if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
        let o = this.getReviewToRender();
        return (0, r.jsxs)('div', {
            className: a()(E.root, l),
            children: [
                (0, r.jsx)('div', {
                    className: E.header,
                    children: _.NW.string(_.t.qABFpa)
                }),
                this.renderReasons(e, t, i),
                null != o
                    ? (0, r.jsx)(b.Z, {
                          data: o,
                          className: E.review
                      })
                    : null
            ]
        });
    }
}
let N = o.ZP.connectStores([h.Z, d.default, f.Z, c.Z, p.Z, u.Z], (e) => {
    let { sku: t } = e;
    return {
        socialReasons: (0, g.Gg)(t.id, h.Z, d.default, c.Z, p.Z),
        nonSocialReasons: (0, g.Ww)(t.id, h.Z, f.Z),
        hidePersonalInformation: u.Z.hidePersonalInformation
    };
})(O);
