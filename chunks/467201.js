n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(804052),
    d = n(783592),
    c = n(351906),
    u = n(287809),
    A = n(609276),
    h = n(67480),
    _ = n(328968),
    m = n(371794),
    p = n(681613),
    g = n(110434),
    E = n(985018),
    f = n(589757);
class I extends r.Component {
    renderReasons(e, t, n) {
        return 0 === e.length && 0 === t.length
            ? null
            : (0, i.jsx)("div", {
                  className: f.uW,
                  children: (0, i.jsxs)("div", {
                      className: f.f5,
                      children: [
                          e.map((e) =>
                              (0, i.jsx)(
                                  "div",
                                  {
                                      className: f.zA,
                                      children: (0, i.jsx)(p.A, { reason: e, hidePersonalInformation: n }),
                                  },
                                  e.type,
                              ),
                          ),
                          t.map((e) =>
                              (0, i.jsx)("div", { className: f.zA, children: (0, i.jsx)(o.A, { reason: e }) }, e.type),
                          ),
                      ],
                  }),
              });
    }
    getReviewToRender() {
        let { storeListing: e } = this.props;
        return null != e.staffNotes ? { type: g.A.Types.STAFF_NOTES, staffNotes: e.staffNotes } : null;
    }
    render() {
        let {
            socialReasons: e,
            nonSocialReasons: t,
            storeListing: n,
            hidePersonalInformation: r,
            className: a,
        } = this.props;
        if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
        let s = this.getReviewToRender();
        return (0, i.jsxs)("div", {
            className: l()(f.zr, a),
            children: [
                (0, i.jsx)("div", { className: f.wx, children: E.intl.string(E.t.qABFpX) }),
                this.renderReasons(e, t, r),
                null != s ? (0, i.jsx)(g.A, { data: s, className: f.NQ }) : null,
            ],
        });
    }
}
let C = s.Ay.connectStores([h.A, u.default, _.A, d.A, A.A, c.A], (e) => {
    let { sku: t } = e;
    return {
        socialReasons: (0, m.my)(t.id, h.A, u.default, d.A, A.A),
        nonSocialReasons: (0, m.ZH)(t.id, h.A, _.A),
        hidePersonalInformation: c.A.hidePersonalInformation,
    };
})(I);
