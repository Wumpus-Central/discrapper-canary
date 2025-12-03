n.d(t, { Z: () => o });
var l = n(54381);
n(473749);
var r = n(481060),
    i = n(600164),
    s = n(388032),
    a = n(357507);
let o = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, l.jsx)(r.hzk, {
            className: a.content,
            scrollbarType: n,
            children: t,
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, l.jsx)(r.Text, {
                  className: a.error,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    SlideFooter: function (e) {
        let { mfaChallenge: t, setSlide: n, leadingButton: i, showConfirm: a = !1, disabled: o, submitting: d } = e,
            u = t.methods.length > 1;
        return null != i || u || a
            ? (0, l.jsx)(r.mzw, {
                  children: (0, l.jsxs)(r.ButtonGroup, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          i,
                          u &&
                              (0, l.jsx)(r.Button, {
                                  variant: "secondary",
                                  text: s.intl.string(s.t.Tot4EC),
                                  onClick: () => n("select"),
                              }),
                          a &&
                              (0, l.jsx)(r.Button, {
                                  type: "submit",
                                  variant: "primary",
                                  text: s.intl.string(s.t["cY+Oob"]),
                                  disabled: o,
                                  loading: d,
                              }),
                      ],
                  }),
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: n, headerAlignStart: o } = e;
        return (0, l.jsxs)(r.xBx, {
            direction: i.Z.Direction.VERTICAL,
            className: a.header,
            separator: !1,
            align: o ? i.Z.Align.START : void 0,
            children: [
                (0, l.jsx)(r.Heading, {
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    children: s.intl.string(s.t.saHocI),
                }),
                null != t &&
                    (0, l.jsx)(r.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: a.subtitle,
                        children: t,
                    }),
                (0, l.jsx)(r.olH, {
                    className: a.closeButton,
                    onClick: n,
                }),
            ],
        });
    },
};
