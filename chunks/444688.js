n.r(e);
var i = n(200651);
n(192379);
var o = n(442837),
    s = n(481060),
    r = n(600164),
    l = n(418632),
    a = n(594174),
    c = n(388032),
    d = n(97245);
function u(t) {
    let { onClose: e } = t,
        r = (0, o.e7)([a.default], () => a.default.getCurrentUser());
    function d() {
        null == e || e();
    }
    function u() {
        d(),
            (0, s.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e('9343'), n.e('58679')]).then(n.bind(n, 642298));
                return (e) => (0, i.jsx)(t, { ...e });
            });
    }
    return (null == r ? void 0 : r.email) == null
        ? (0, i.jsx)(s.Button, {
              onClick: u,
              color: s.Button.Colors.BRAND,
              look: s.Button.Looks.FILLED,
              children: c.intl.string(c.t.ydw5nZ)
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.Button, {
                      onClick: u,
                      color: s.Button.Colors.PRIMARY,
                      look: s.Button.Looks.LINK,
                      children: c.intl.string(c.t.Vm8akJ)
                  }),
                  (0, i.jsx)(l.Z, {
                      color: s.Button.Colors.BRAND,
                      onClick: d
                  })
              ]
          });
}
e.default = function (t) {
    let { onClose: e, transitionState: n } = t;
    return (0, i.jsxs)(s.ModalRoot, {
        transitionState: n,
        children: [
            (0, i.jsx)(s.ModalHeader, {
                children: (0, i.jsx)(s.FormTitle, {
                    tag: s.FormTitleTags.H4,
                    children: c.intl.string(c.t.UZLrY2)
                })
            }),
            (0, i.jsxs)(s.ModalContent, {
                children: [
                    (0, i.jsx)('div', { className: d.imageUnverified }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        className: d.message,
                        children: c.intl.string(c.t['0LgOKC'])
                    })
                ]
            }),
            (0, i.jsx)(s.ModalFooter, {
                children: (0, i.jsx)(r.Z, {
                    justify: r.Z.Justify.END,
                    children: (0, i.jsx)(u, { onClose: e })
                })
            })
        ]
    });
};
