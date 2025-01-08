n.r(t);
var s = n(200651),
    r = n(192379),
    o = n(442837),
    i = n(215569),
    a = n(481060),
    c = n(852860),
    d = n(313201),
    l = n(944163),
    u = n(266395),
    p = n(577809),
    f = n(592286),
    b = n(388032),
    g = n(145638);
let m = () =>
    (0, s.jsx)(c.Z, {
        submitting: !1,
        message: b.intl.string(b.t['8g514e']),
        onReset: () => {
            (0, u.PE)(!1);
        },
        onResetText: b.intl.string(b.t['ETE/oK']),
        onSave: () => {
            (0, u.PE)(!1), (0, a.closeModal)(f.Pn);
        },
        onSaveText: b.intl.string(b.t['Xt+UaW']),
        onSaveButtonColor: a.ButtonColors.RED
    });
t.default = (e) => {
    let { transitionState: t, guildId: n, onClose: c, onComplete: f, isPreview: b = !1 } = e,
        _ = (0, u.rb)((e) => e.shouldShowWarning),
        h = (0, o.e7)([l.Z], () => l.Z.get(n)),
        x = (0, d.Dt)();
    return (r.useEffect(() => {
        h === l.t && c();
    }, [c, h]),
    h === l.t)
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsxs)(a.ModalRoot, {
                      transitionState: t,
                      'aria-labelledby': x,
                      size: a.ModalSize.DYNAMIC,
                      className: g.container,
                      hideShadow: !0,
                      children: [
                          (0, s.jsx)(a.ModalCloseButton, {
                              onClick: () => c(!1),
                              className: g.closeButton
                          }),
                          (0, s.jsx)(p.Z, {
                              headerId: x,
                              guildId: n,
                              onClose: c,
                              onComplete: f,
                              isPreview: b
                          })
                      ]
                  }),
                  (0, s.jsx)(i.W, {
                      children:
                          !0 === _ &&
                          (0, s.jsx)(a.SlideIn, {
                              className: g.notice,
                              children: (0, s.jsx)(m, {})
                          })
                  })
              ]
          });
};
