e.d(n, { default: () => h });
var i = e(627968),
    a = e(64700),
    l = e(158954),
    s = e(817281),
    c = e(964486),
    r = e(47167),
    o = e(954571),
    d = e(652215),
    u = e(985018);
let h = (t) => {
    let { onConfirm: n, channel: e, onClose: h, transitionState: p, ...C } = t,
        g = (0, r.Ay)(e),
        [k, y] = a.useState(!1);
    return ((0, c.Ay)(() => {
        o.default.track(d.HAw.OPEN_MODAL, { type: "Voice channel change confirmation", channel_id: e.id });
    }),
    null == g)
        ? null
        : (0, i.jsx)(l.Modal, {
              title: u.intl.string(u.t["0LZN5F"]),
              subtitle: u.intl.format(u.t["vA+uEs"], { channel: g }),
              transitionState: p,
              size: "md",
              onClose: h,
              actionBarInput: (0, i.jsx)(l.Sc0, {
                  checked: k,
                  onChange: (t) => {
                      s.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: t }), y(t);
                  },
                  label: u.intl.string(u.t["JdIQ/Y"]),
              }),
              actions: [
                  { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: h },
                  {
                      variant: "primary",
                      text: u.intl.string(u.t["cY+Oob"]),
                      onClick: () => {
                          n(), h();
                      },
                  },
              ],
              ...C,
          });
};
