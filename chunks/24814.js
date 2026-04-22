e.d(n, { default: () => p });
var i = e(627968),
    a = e(64700),
    l = e(189213),
    s = e(150934),
    c = e(817281),
    r = e(964486),
    o = e(47167),
    d = e(954571),
    u = e(652215),
    h = e(985018);
let p = (t) => {
    let { onConfirm: n, channel: e, onClose: p, transitionState: C, ...g } = t,
        k = (0, o.Ay)(e),
        [y, A] = a.useState(!1);
    return ((0, r.Ay)(() => {
        d.default.track(u.HAw.OPEN_MODAL, { type: "Voice channel change confirmation", channel_id: e.id });
    }),
    null == k)
        ? null
        : (0, i.jsx)(l.Modal, {
              title: h.intl.string(h.t["0LZN5F"]),
              subtitle: h.intl.format(h.t["vA+uEs"], { channel: k }),
              transitionState: C,
              size: "md",
              onClose: p,
              actionBarInput: (0, i.jsx)(s.S, {
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
                  },
              ],
              ...g,
          });
};
