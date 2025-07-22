n.d(t, { Z: () => o });
var l = n(255367);
n(73800);
var r = n(481060),
    s = n(600164),
    i = n(388032),
    a = n(895453);
let o = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, l.jsx)(r.hzk, {
            className: a.content,
            scrollbarType: n,
            children: t
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, l.jsx)(r.Text, {
                  className: a.error,
                  variant: 'text-sm/normal',
                  color: 'text-danger',
                  children: t
              });
    },
    SlideFooter: function (e) {
        let { mfaChallenge: t, setSlide: n, leadingButton: s, showConfirm: a = !1, disabled: o, submitting: d } = e,
            c = t.methods.length > 1;
        return null != s || c || a
            ? (0, l.jsx)(r.mzw, {
                  children: (0, l.jsxs)(r.hE2, {
                      fullWidth: !0,
                      children: [
                          s,
                          c &&
                              (0, l.jsx)(r.zxk, {
                                  variant: 'secondary',
                                  text: i.intl.string(i.t.Tot4EB),
                                  onClick: () => n('select')
                              }),
                          a &&
                              (0, l.jsx)(r.zxk, {
                                  type: 'submit',
                                  variant: 'primary',
                                  text: i.intl.string(i.t['cY+Ooa']),
                                  disabled: o,
                                  loading: d
                              })
                      ]
                  })
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: n } = e;
        return (0, l.jsxs)(r.xBx, {
            direction: s.Z.Direction.VERTICAL,
            className: a.header,
            separator: !1,
            children: [
                (0, l.jsx)(r.X6q, {
                    variant: 'heading-xl/semibold',
                    children: i.intl.string(i.t.saHocH)
                }),
                null != t &&
                    (0, l.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: a.subtitle,
                        children: t
                    }),
                (0, l.jsx)(r.olH, {
                    className: a.closeButton,
                    onClick: n
                })
            ]
        });
    }
};
