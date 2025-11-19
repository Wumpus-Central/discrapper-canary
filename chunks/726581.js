n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(304106),
    c = n(649974),
    u = n(246946),
    d = n(594174),
    p = n(525395),
    f = n(55563),
    h = n(551428),
    g = n(73346),
    m = n(733789),
    _ = n(4962),
    b = n(388032),
    E = n(662222);
class O extends i.Component {
    renderReasons(e, t, n) {
        return 0 === e.length && 0 === t.length
            ? null
            : (0, r.jsx)("div", {
                  className: E.section,
                  children: (0, r.jsxs)("div", {
                      className: E.sectionContent,
                      children: [
                          e.map((e) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: E.unit,
                                      children: (0, r.jsx)(m.Z, {
                                          reason: e,
                                          hidePersonalInformation: n,
                                      }),
                                  },
                                  e.type,
                              ),
                          ),
                          t.map((e) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: E.unit,
                                      children: (0, r.jsx)(o.Z, { reason: e }),
                                  },
                                  e.type,
                              ),
                          ),
                      ],
                  }),
              });
    }
    getReviewToRender() {
        let { storeListing: e } = this.props;
        return null != e.staffNotes
            ? {
                  type: _.Z.Types.STAFF_NOTES,
                  staffNotes: e.staffNotes,
              }
            : null;
    }
    render() {
        let {
            socialReasons: e,
            nonSocialReasons: t,
            storeListing: n,
            hidePersonalInformation: i,
            className: l,
        } = this.props;
        if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
        let s = this.getReviewToRender();
        return (0, r.jsxs)("div", {
            className: a()(E.root, l),
            children: [
                (0, r.jsx)("div", {
                    className: E.header,
                    children: b.intl.string(b.t.qABFpX),
                }),
                this.renderReasons(e, t, i),
                null != s
                    ? (0, r.jsx)(_.Z, {
                          data: s,
                          className: E.review,
                      })
                    : null,
            ],
        });
    }
}
let y = s.ZP.connectStores([f.Z, d.default, h.Z, c.Z, p.Z, u.Z], (e) => {
    let { sku: t } = e;
    return {
        socialReasons: (0, g.Gg)(t.id, f.Z, d.default, c.Z, p.Z),
        nonSocialReasons: (0, g.Ww)(t.id, f.Z, h.Z),
        hidePersonalInformation: u.Z.hidePersonalInformation,
    };
})(O);
