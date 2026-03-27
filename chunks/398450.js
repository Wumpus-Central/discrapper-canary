n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var s = n(397927),
    r = n(235986),
    i = n(985018),
    a = n(39634);
let o = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, l.jsx)(s.$mQ, { "data-migration-pending": !0, className: a.Qs, scrollbarType: n, children: t });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, l.jsx)(s.Text, {
                  className: a.z3,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    SlideFooter: function (e) {
        let { mfaChallenge: t, setSlide: n, trailingButton: r, showConfirm: a = !1, disabled: o, submitting: d } = e,
            u = t.methods.length > 1;
        return null != r || u || a
            ? (0, l.jsx)(s.jlY, {
                  "data-migration-pending": !0,
                  children: (0, l.jsxs)(s.ButtonGroup, {
                      fullWidth: !0,
                      children: [
                          u &&
                              (0, l.jsx)(s.Button, {
                                  variant: "secondary",
                                  text: i.intl.string(i.t.Tot4EC),
                                  onClick: () => n("select"),
                              }),
                          a &&
                              (0, l.jsx)(s.Button, {
                                  type: "submit",
                                  variant: "primary",
                                  text: i.intl.string(i.t["cY+Oob"]),
                                  disabled: o,
                                  loading: d,
                              }),
                          r,
                      ],
                  }),
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: n, headerAlignStart: o } = e;
        return (0, l.jsxs)(s.rQ0, {
            "data-migration-pending": !0,
            direction: r.A.Direction.VERTICAL,
            className: a.wx,
            separator: !1,
            align: o ? r.A.Align.START : void 0,
            children: [
                (0, l.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: i.intl.string(i.t.saHocI),
                }),
                null != t && (0, l.jsx)(s.Heading, { variant: "heading-lg/semibold", className: a.VA, children: t }),
                (0, l.jsx)(s.s_y, { className: a.b, onClick: n }),
            ],
        });
    },
};
