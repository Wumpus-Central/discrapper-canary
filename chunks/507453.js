n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(600164),
    s = n(388032),
    a = n(357507);
let o = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, r.jsx)(l.hzk, {
            className: a.content,
            scrollbarType: n,
            children: t,
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, r.jsx)(l.Text, {
                  className: a.error,
                  variant: "text-sm/normal",
                  color: "text-feedback-critical",
                  children: t,
              });
    },
    SlideFooter: function (e) {
        let { mfaChallenge: t, setSlide: n, trailingButton: i, showConfirm: a = !1, disabled: o, submitting: c } = e,
            u = t.methods.length > 1;
        return null != i || u || a
            ? (0, r.jsx)(l.mzw, {
                  children: (0, r.jsxs)(l.ButtonGroup, {
                      fullWidth: !0,
                      direction: "vertical",
                      children: [
                          u &&
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
                                  loading: c,
                              }),
                          i,
                      ],
                  }),
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: n, headerAlignStart: o } = e;
        return (0, r.jsxs)(l.xBx, {
            direction: i.Z.Direction.VERTICAL,
            className: a.header,
            separator: !1,
            align: o ? i.Z.Align.START : void 0,
            children: [
                (0, r.jsx)(l.Heading, {
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    children: s.intl.string(s.t.saHocI),
                }),
                null != t &&
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        className: a.subtitle,
                        children: t,
                    }),
                (0, r.jsx)(l.olH, {
                    className: a.closeButton,
                    onClick: n,
                }),
            ],
        });
    },
};
