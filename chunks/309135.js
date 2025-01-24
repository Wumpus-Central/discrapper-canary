t.r(n);
var o = t(200651),
    r = t(192379),
    i = t(442837),
    a = t(215569),
    s = t(481060),
    l = t(852860),
    d = t(313201),
    c = t(944163),
    u = t(266395),
    m = t(577809),
    _ = t(592286),
    b = t(388032),
    h = t(145638);
let p = () =>
    (0, o.jsx)(l.Z, {
        submitting: !1,
        message: b.intl.string(b.t['8g514e']),
        onReset: () => {
            (0, u.PE)(!1);
        },
        onResetText: b.intl.string(b.t['ETE/oK']),
        onSave: () => {
            (0, u.PE)(!1), (0, s.closeModal)(_.Pn);
        },
        onSaveText: b.intl.string(b.t['Xt+UaW']),
        onSaveButtonColor: s.ButtonColors.RED
    });
n.default = (e) => {
    let { transitionState: n, guildId: t, onClose: l, onComplete: _, isPreview: b = !1 } = e,
        f = (0, u.rb)((e) => e.shouldShowWarning),
        x = (0, i.e7)([c.Z], () => c.Z.get(t)),
        g = (0, d.Dt)();
    return (r.useEffect(() => {
        x === c.t && l();
    }, [l, x]),
    x === c.t)
        ? null
        : (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsxs)(s.ModalRoot, {
                      transitionState: n,
                      'aria-labelledby': g,
                      size: s.ModalSize.DYNAMIC,
                      className: h.container,
                      hideShadow: !0,
                      children: [
                          (0, o.jsx)(s.ModalCloseButton, {
                              onClick: () => l(!1),
                              className: h.closeButton
                          }),
                          (0, o.jsx)(m.Z, {
                              headerId: g,
                              guildId: t,
                              onClose: l,
                              onComplete: _,
                              isPreview: b
                          })
                      ]
                  }),
                  (0, o.jsx)(a.W, {
                      children:
                          !0 === f &&
                          (0, o.jsx)(s.SlideIn, {
                              className: h.notice,
                              children: (0, o.jsx)(p, {})
                          })
                  })
              ]
          });
};
