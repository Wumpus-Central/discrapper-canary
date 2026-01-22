n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(235986),
    s = n(985018),
    a = n(288661);
let o = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, r.jsx)(l.$mQ, {
            "data-migration-pending": !0,
            className: a.Qs,
            scrollbarType: n,
            children: t,
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, r.jsx)(l.Text, {
                  className: a.z3,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    SlideFooter: function (e) {
        let { mfaChallenge: t, setSlide: n, trailingButton: i, showConfirm: a = !1, disabled: o, submitting: d } = e,
            c = t.methods.length > 1;
        return null != i || c || a
            ? (0, r.jsx)(l.jlY, {
                  "data-migration-pending": !0,
                  children: (0, r.jsxs)(l.ButtonGroup, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          c &&
                              (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  text: s.intl.string(s.t.Tot4EC),
                                  onClick: () => n("select"),
                              }),
                          a &&
                              (0, r.jsx)(l.Button, {
                                  type: "submit",
                                  variant: "primary",
                                  text: s.intl.string(s.t["cY+Oob"]),
                                  disabled: o,
                                  loading: d,
                              }),
                          i,
                      ],
                  }),
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: n, headerAlignStart: o } = e;
        return (0, r.jsxs)(l.rQ0, {
            "data-migration-pending": !0,
            direction: i.A.Direction.VERTICAL,
            className: a.wx,
            separator: !1,
            align: o ? i.A.Align.START : void 0,
            children: [
                (0, r.jsx)(l.Heading, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: s.intl.string(s.t.saHocI),
                }),
                null != t &&
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        className: a.VA,
                        children: t,
                    }),
                (0, r.jsx)(l.s_y, {
                    className: a.b,
                    onClick: n,
                }),
            ],
        });
    },
};
