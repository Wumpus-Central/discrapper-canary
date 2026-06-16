e.d(n, { default: () => p });
var a = e(627968),
    i = e(64700),
    l = e(189213),
    s = e(150934),
    c = e(817281),
    o = e(964486),
    r = e(47167),
    d = e(174459),
    u = e(652215),
    h = e(375708);
let p = (t) => {
    let { onConfirm: n, channel: e, onClose: p, transitionState: C, ...g } = t,
        k = (0, r.Ay)(e),
        [y, A] = i.useState(!1);
    return ((0, o.Ay)(() => {
        d.default.track(u.HAw.OPEN_MODAL, { type: "Voice channel change confirmation", channel_id: e.id });
    }),
    null == k)
        ? null
        : (0, a.jsx)(l.Modal, {
              title: h.intl.string(h.t["0LZN5F"]),
              subtitle: h.intl.format(h.t["vA+uEs"], { channel: k }),
              transitionState: C,
              size: "md",
              onClose: p,
              actionBarInput: (0, a.jsx)(s.S, {
                  checked: y,
                  onChange: (t) => {
                      c.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: t }), A(t);
                  },
                  label: h.intl.string(h.t["JdIQ/Y"]),
              }),
              actions: [
                  { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: p },
                  {
                      variant: "primary",
                      text: h.intl.string(h.t["cY+Oob"]),
                      onClick: () => {
                          n(), p();
                      },
                      autoFocus: !1,
                  },
              ],
              ...g,
          });
};
