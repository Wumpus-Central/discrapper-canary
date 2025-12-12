n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(328908),
    c = n(992970),
    u = n(443603),
    d = n(957825),
    f = n(388032),
    p = n(564355);
function _(e, t) {
    let { disabled: n, channel: o } = e,
        _ = (0, l.LN)(o.id),
        m = i.useCallback(() => {
            (0, l.Rg)(o.id, c.MG.MessageComposerButtons);
        }, [o.id]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: a()(d.CT, p.buttonContainer),
              ref: t,
              children: (0, r.jsx)(u.Z, {
                  className: a()(p.button, p.messageConfettiButton),
                  childClassName: a()(p.messageConfettiIcon, { [p.active]: _ }),
                  onClick: m,
                  isActive: _,
                  "aria-label": f.intl.string(f.t.yvN8bE),
                  "aria-haspopup": "false",
                  children: (0, r.jsx)(s.l22, {
                      size: "refresh_sm",
                      color: "currentColor",
                  }),
              }),
          });
}
let m = i.memo(i.forwardRef(_));
