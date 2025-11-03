e.d(n, { default: () => h }), e(388685);
var i = e(951288),
    a = e(647438),
    l = e(793030),
    s = e(153867),
    c = e(493773),
    r = e(933557),
    o = e(626135),
    d = e(981631),
    u = e(388032);
let h = (t) => {
    let { onConfirm: n, channel: e, onClose: h, transitionState: p } = t,
        C = (0, r.ZP)(e),
        [g, k] = a.useState(!1);
    return ((0, c.ZP)(() => {
        o.default.track(d.rMx.OPEN_MODAL, {
            type: "Voice channel change confirmation",
            channel_id: e.id,
        });
    }),
    null == C)
        ? null
        : (0, i.jsx)(l.Modal, {
              title: u.intl.string(u.t["0LZN5F"]),
              subtitle: u.intl.format(u.t["vA+uEs"], { channel: C }),
              transitionState: p,
              size: "md",
              onClose: h,
              actionBarInput: (0, i.jsx)(l.XZJ, {
                  checked: g,
                  onChange: (t) => {
                      s.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: t }), k(t);
                  },
                  label: u.intl.string(u.t["JdIQ/Y"]),
              }),
              actions: [
                  {
                      variant: "secondary",
                      text: u.intl.string(u.t["ETE/oC"]),
                      onClick: h,
                  },
                  {
                      variant: "primary",
                      text: u.intl.string(u.t["cY+Oob"]),
                      onClick: n,
                  },
              ],
          });
};
