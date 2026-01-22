n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(804052),
    c = n(783592),
    u = n(351906),
    d = n(287809),
    p = n(609276),
    f = n(67480),
    h = n(328968),
    A = n(371794),
    g = n(681613),
    m = n(110434),
    b = n(985018),
    _ = n(589757);
class E extends i.Component {
    renderReasons(e, t, n) {
        return 0 === e.length && 0 === t.length
            ? null
            : (0, r.jsx)("div", {
                  className: _.uW,
                  children: (0, r.jsxs)("div", {
                      className: _.f5,
                      children: [
                          e.map((e) =>
                              (0, r.jsx)(
                                  "div",
                                  {
                                      className: _.zA,
                                      children: (0, r.jsx)(g.A, {
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
                                      className: _.zA,
                                      children: (0, r.jsx)(o.A, { reason: e }),
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
                  type: m.A.Types.STAFF_NOTES,
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
            className: a()(_.zr, l),
            children: [
                (0, r.jsx)("div", {
                    className: _.wx,
                    children: b.intl.string(b.t.qABFpX),
                }),
                this.renderReasons(e, t, i),
                null != s
                    ? (0, r.jsx)(m.A, {
                          data: s,
                          className: _.NQ,
                      })
                    : null,
            ],
        });
    }
}
let O = s.Ay.connectStores([f.A, d.default, h.A, c.A, p.A, u.A], (e) => {
    let { sku: t } = e;
    return {
        socialReasons: (0, A.my)(t.id, f.A, d.default, c.A, p.A),
        nonSocialReasons: (0, A.ZH)(t.id, f.A, h.A),
        hidePersonalInformation: u.A.hidePersonalInformation,
    };
})(E);
