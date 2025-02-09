n.d(l, { default: () => j });
var t = n(200651),
    s = n(192379),
    e = n(442837),
    o = n(481060),
    r = n(313201),
    d = n(237997),
    c = n(451478),
    x = n(358085),
    a = n(998502),
    h = n(145597),
    k = n(981631),
    u = n(388032);
function j(i) {
    let { transitionState: l, onClose: n, contextKey: j, ...f } = i,
        m = (0, r.Dt)(),
        z = (0, e.e7)([c.Z], () => c.Z.isFocused()),
        C = j === k.IlC.APP,
        g = (0, h.QF)(),
        p = (0, e.e7)([d.Z], () => d.Z.isLocked(g));
    return (s.useEffect(() => {
        (z || C || p) && (null == n || n());
    }, [z, n, C, p]),
    z || p)
        ? null
        : (0, t.jsxs)(o.Y0X, {
              transitionState: l,
              'aria-labelledby': m,
              ...f,
              size: o.CgR.SMALL,
              children: [
                  (0, t.jsx)(o.xBx, {
                      children: (0, t.jsx)(o.X6q, {
                          variant: 'heading-xl/semibold',
                          children: u.intl.string(u.t.DJ8ojI)
                      })
                  }),
                  (0, t.jsx)(o.hzk, {
                      children: (0, t.jsx)(o.Text, {
                          color: 'text-normal',
                          variant: 'text-md/medium',
                          children: u.intl.string(u.t['E+Ph7O'])
                      })
                  }),
                  (0, t.jsxs)(o.mzw, {
                      children: [
                          (0, t.jsx)(o.zxk, {
                              onClick: () => {
                                  x.isPlatformEmbedded ? a.ZP.focus() : window.focus(), n();
                              },
                              color: o.zxk.Colors.BRAND,
                              children: u.intl.string(u.t.ELRJQk)
                          }),
                          (0, t.jsx)(o.zxk, {
                              onClick: () => (null == n ? void 0 : n()),
                              color: o.zxk.Colors.PRIMARY,
                              look: o.zxk.Looks.LINK,
                              children: u.intl.string(u.t.FgK5QE)
                          })
                      ]
                  })
              ]
          });
}
