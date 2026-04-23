n.d(t, { A: () => h });
var a = n(627968);
n(64700);
var r = n(935462),
    i = n(834730),
    s = n(825484),
    l = n(821609),
    o = n(534514),
    d = n(235986),
    c = n(985018),
    u = n(902626);
let h = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, a.jsx)(r.$m, { "data-migration-pending": !0, className: u.Qs, scrollbarType: n, children: t });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, a.jsx)(i.E, {
                  className: u.z3,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    SlideFooter: function (e) {
        let { mfaChallenge: t, setSlide: n, trailingButton: i, showConfirm: o = !1, disabled: d, submitting: u } = e,
            h = t.methods.length > 1;
        return null != i || h || o
            ? (0, a.jsx)(r.jl, {
                  "data-migration-pending": !0,
                  children: (0, a.jsxs)(s.e, {
                      fullWidth: !0,
                      children: [
                          h &&
                              (0, a.jsx)(l.$, {
                                  variant: "secondary",
                                  text: c.intl.string(c.t.Tot4EC),
                                  onClick: () => n("select"),
                              }),
                          o &&
                              (0, a.jsx)(l.$, {
                                  type: "submit",
                                  variant: "primary",
                                  text: c.intl.string(c.t["cY+Oob"]),
                                  disabled: d,
                                  loading: u,
                              }),
                          i,
                      ],
                  }),
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: n, headerAlignStart: i } = e;
        return (0, a.jsxs)(r.rQ, {
            "data-migration-pending": !0,
            direction: d.A.Direction.VERTICAL,
            className: u.wx,
            separator: !1,
            align: i ? d.A.Align.START : void 0,
            children: [
                (0, a.jsx)(o.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: c.intl.string(c.t.saHocI),
                }),
                null != t && (0, a.jsx)(o.D, { variant: "heading-lg/semibold", className: u.VA, children: t }),
                (0, a.jsx)(r.s_, { className: u.b, onClick: n }),
            ],
        });
    },
};
