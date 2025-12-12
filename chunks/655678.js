n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(328908),
    c = n(992970),
    u = n(443603),
    d = n(957825),
    f = n(388032),
    p = n(72775);
function _(e, t) {
    let { disabled: n, channel: a } = e,
        _ = (0, l.LN)(a.id),
        m = i.useCallback(() => {
            (0, l.Rg)(a.id, c.MG.MessageComposerButtons);
        }, [a.id]);
    return n
        ? null
        : (0, r.jsx)("div", {
              className: o()(d.CT, p.buttonContainer),
              ref: t,
              children: (0, r.jsx)(u.Z, {
                  className: o()(p.button, p.messageConfettiButton),
                  childClassName: o()(p.messageConfettiIcon, { [p.active]: _ }),
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
