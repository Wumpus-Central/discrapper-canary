n.r(t);
var o = n(200651),
    s = n(192379),
    r = n(442837),
    i = n(215569),
    a = n(481060),
    c = n(852860),
    u = n(313201),
    d = n(944163),
    f = n(266395),
    l = n(200305),
    p = n(592286),
    b = n(388032),
    _ = n(832311);
let g = () =>
    (0, o.jsx)(c.Z, {
        submitting: !1,
        message: b.intl.string(b.t['8g514e']),
        onReset: () => {
            (0, f.PE)(!1);
        },
        onResetText: b.intl.string(b.t['ETE/oK']),
        onSave: () => {
            (0, f.PE)(!1), (0, a.closeModal)(p.Pn);
        },
        onSaveText: b.intl.string(b.t['Xt+UaW']),
        onSaveButtonColor: a.ButtonColors.RED
    });
t.default = (e) => {
    let { guildId: t, transitionState: n, onClose: c, onComplete: p, isPreview: b = !1 } = e,
        m = (0, f.rb)((e) => e.shouldShowWarning),
        h = (0, r.e7)([d.Z], () => d.Z.get(t)),
        x = (0, u.Dt)();
    return (s.useEffect(() => {
        h === d.t && c();
    }, [c, h]),
    h === d.t)
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsxs)(a.ModalRoot, {
                      size: a.ModalSize.MEDIUM,
                      className: _.container,
                      transitionState: n,
                      'aria-labelledby': x,
                      children: [
                          (0, o.jsx)(a.ModalCloseButton, {
                              onClick: () => c(!1),
                              className: _.closeButton
                          }),
                          (0, o.jsx)(l.Z, {
                              headerId: x,
                              guildId: t,
                              onClose: c,
                              onComplete: p,
                              isPreview: b
                          })
                      ]
                  }),
                  (0, o.jsx)(i.W, {
                      children:
                          !0 === m &&
                          (0, o.jsx)(a.SlideIn, {
                              className: _.notice,
                              children: (0, o.jsx)(g, {})
                          })
                  })
              ]
          });
};
