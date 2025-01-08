n.r(t);
var r = n(200651),
    s = n(192379),
    o = n(442837),
    i = n(215569),
    c = n(481060),
    a = n(852860),
    d = n(313201),
    u = n(944163),
    l = n(266395),
    f = n(577809),
    p = n(592286),
    b = n(388032),
    g = n(145638);
let _ = () =>
    (0, r.jsx)(a.Z, {
        submitting: !1,
        message: b.intl.string(b.t['8g514e']),
        onReset: () => {
            (0, l.PE)(!1);
        },
        onResetText: b.intl.string(b.t['ETE/oK']),
        onSave: () => {
            (0, l.PE)(!1), (0, c.closeModal)(p.Pn);
        },
        onSaveText: b.intl.string(b.t['Xt+UaW']),
        onSaveButtonColor: c.ButtonColors.RED
    });
t.default = (e) => {
    let { transitionState: t, guildId: n, onClose: a, onComplete: p, isPreview: b = !1 } = e,
        m = (0, l.rb)((e) => e.shouldShowWarning),
        h = (0, o.e7)([u.Z], () => u.Z.get(n)),
        x = (0, d.Dt)();
    return (s.useEffect(() => {
        h === u.t && a();
    }, [a, h]),
    h === u.t)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)(c.ModalRoot, {
                      transitionState: t,
                      'aria-labelledby': x,
                      size: c.ModalSize.DYNAMIC,
                      className: g.container,
                      hideShadow: !0,
                      children: [
                          (0, r.jsx)(c.ModalCloseButton, {
                              onClick: () => a(!1),
                              className: g.closeButton
                          }),
                          (0, r.jsx)(f.Z, {
                              headerId: x,
                              guildId: n,
                              onClose: a,
                              onComplete: p,
                              isPreview: b
                          })
                      ]
                  }),
                  (0, r.jsx)(i.W, {
                      children:
                          !0 === m &&
                          (0, r.jsx)(c.SlideIn, {
                              className: g.notice,
                              children: (0, r.jsx)(_, {})
                          })
                  })
              ]
          });
};
