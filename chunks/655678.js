n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(328908),
    c = n(992970),
    u = n(443603),
    d = n(957825),
    f = n(388032),
    _ = n(939267);
function p(e, t) {
    let { disabled: n, channel: o } = e,
        p = (0, l.LN)(o.id),
        h = i.useCallback(() => {
            (0, l.Rg)(o.id, c.MG.MessageComposerButtons);
        }, [o.id]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: a()(d.CT, _.buttonContainer),
              ref: t,
              children: (0, r.jsx)(u.Z, {
                  className: a()(_.button, _.messageConfettiButton),
                  childClassName: a()(_.messageConfettiIcon, { [_.active]: p }),
                  onClick: h,
                  isActive: p,
                  "aria-label": f.intl.string(f.t.yvN8bG),
                  "aria-haspopup": "false",
                  children: (0, r.jsx)(s.l22, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          });
}
let h = i.memo(i.forwardRef(p));
