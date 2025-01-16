var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(304106),
    c = n(649974),
    d = n(246946),
    u = n(594174),
    h = n(525395),
    m = n(55563),
    p = n(551428),
    g = n(73346),
    f = n(733789),
    _ = n(4962),
    E = n(388032),
    I = n(846523);
class C extends r.Component {
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
                                      children: (0, i.jsx)(f.Z, {
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
                  type: _.Z.Types.STAFF_NOTES,
                  staffNotes: e.staffNotes
              }
            : null;
    }
    render() {
        let { socialReasons: e, nonSocialReasons: t, storeListing: n, hidePersonalInformation: r, className: l } = this.props;
        if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
        let s = this.getReviewToRender();
        return (0, i.jsxs)('div', {
            className: a()(I.root, l),
            children: [
                (0, i.jsx)('div', {
                    className: I.header,
                    children: E.intl.string(E.t.qABFpa)
                }),
                this.renderReasons(e, t, r),
                null != s
                    ? (0, i.jsx)(_.Z, {
                          data: s,
                          className: I.review
                      })
                    : null
            ]
        });
    }
}
t.Z = s.ZP.connectStores([m.Z, u.default, p.Z, c.Z, h.Z, d.Z], (e) => {
    let { sku: t } = e;
    return {
        socialReasons: (0, g.Gg)(t.id, m.Z, u.default, c.Z, h.Z),
        nonSocialReasons: (0, g.Ww)(t.id, m.Z, p.Z),
        hidePersonalInformation: d.Z.hidePersonalInformation
    };
})(C);
