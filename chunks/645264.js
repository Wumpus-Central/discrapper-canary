t.r(n);
var s = t(200651),
    o = t(192379),
    i = t(442837),
    l = t(215569),
    r = t(481060),
    a = t(852860),
    c = t(313201),
    u = t(944163),
    d = t(266395),
    g = t(200305),
    h = t(592286),
    x = t(388032),
    C = t(832311);
let f = () =>
    (0, s.jsx)(a.Z, {
        submitting: !1,
        message: x.intl.string(x.t['8g514e']),
        onReset: () => {
            (0, d.PE)(!1);
        },
        onResetText: x.intl.string(x.t['ETE/oK']),
        onSave: () => {
            (0, d.PE)(!1), (0, r.closeModal)(h.Pn);
        },
        onSaveText: x.intl.string(x.t['Xt+UaW']),
        onSaveButtonColor: r.ButtonColors.RED
    });
n.default = (e) => {
    let { guildId: n, transitionState: t, onClose: a, onComplete: h, isPreview: x = !1 } = e,
        E = (0, d.rb)((e) => e.shouldShowWarning),
        T = (0, i.e7)([u.Z], () => u.Z.get(n)),
        k = (0, c.Dt)();
    return (o.useEffect(() => {
        T === u.t && a();
    }, [a, T]),
    T === u.t)
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)(r.ModalRoot, {
                      size: r.ModalSize.MEDIUM,
                      className: C.container,
                      transitionState: t,
                      'aria-labelledby': k,
                      children: [
                          (0, s.jsx)(r.ModalCloseButton, {
                              onClick: () => a(!1),
                              className: C.closeButton
                          }),
                          (0, s.jsx)(g.Z, {
                              headerId: k,
                              guildId: n,
                              onClose: a,
                              onComplete: h,
                              isPreview: x
                          })
                      ]
                  }),
                  (0, s.jsx)(l.W, {
                      children:
                          !0 === E &&
                          (0, s.jsx)(r.SlideIn, {
                              className: C.notice,
                              children: (0, s.jsx)(f, {})
                          })
                  })
              ]
          });
};
