var l = n(200651);
n(192379);
var i = n(481060),
    r = n(600164),
    s = n(388032),
    o = n(452091);
t.Z = {
    SlideContent: function (e) {
        let { children: t, scrollbarType: n } = e;
        return (0, l.jsx)(i.ModalContent, {
            className: o.content,
            scrollbarType: n,
            children: t
        });
    },
    SlideError: function (e) {
        let { error: t } = e;
        return null == t
            ? null
            : (0, l.jsx)(i.Text, {
                  className: o.error,
                  variant: 'text-sm/normal',
                  color: 'text-danger',
                  children: t
              });
    },
    SlideFooter: function (e) {
        let { mfaChallenge: t, setSlide: n, showConfirm: a = !1, ...d } = e,
            u = t.methods.length > 1;
        return u || a
            ? (0, l.jsxs)(i.ModalFooter, {
                  className: o.footer,
                  direction: a && !u ? r.Z.Direction.HORIZONTAL_REVERSE : r.Z.Direction.HORIZONTAL,
                  children: [
                      u &&
                          (0, l.jsx)(i.Button, {
                              look: i.Button.Looks.LINK,
                              onClick: () => n('select'),
                              color: i.Button.Colors.PRIMARY,
                              children: s.intl.string(s.t.Tot4EB)
                          }),
                      a &&
                          (0, l.jsx)(i.Button, {
                              type: 'submit',
                              ...d,
                              children: s.intl.string(s.t['cY+Ooa'])
                          })
                  ]
              })
            : null;
    },
    SlideHeader: function (e) {
        let { subtitle: t, onClose: n } = e;
        return (0, l.jsxs)(i.ModalHeader, {
            direction: r.Z.Direction.VERTICAL,
            className: o.header,
            separator: !1,
            children: [
                (0, l.jsx)(i.Heading, {
                    variant: 'heading-xl/semibold',
                    children: s.intl.string(s.t.saHocH)
                }),
                null != t &&
                    (0, l.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: o.subtitle,
                        children: t
                    }),
                (0, l.jsx)(i.ModalCloseButton, {
                    className: o.closeButton,
                    onClick: n
                })
            ]
        });
    }
};
