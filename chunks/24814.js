i.d(n, { default: () => p });
var e = i(627968),
    a = i(64700),
    l = i(189213),
    c = i(150934),
    s = i(817281),
    o = i(964486),
    r = i(47167),
    u = i(174459),
    d = i(652215),
    h = i(375708);
let p = function (t) {
    let { onConfirm: n, channel: i, onClose: p, transitionState: C, ...g } = t,
        k = (0, r.Ay)(i),
        [f, y] = a.useState(!1);
    return ((0, o.Ay)(() => {
        u.default.track(d.HAw.OPEN_MODAL, { type: "Voice channel change confirmation", channel_id: i.id });
    }),
    null == k)
        ? null
        : (0, e.jsx)(l.Modal, {
              title: h.intl.string(h.t["0LZN5F"]),
              subtitle: h.intl.format(h.t["vA+uEs"], { channel: k }),
              transitionState: C,
              size: "md",
              onClose: p,
              actionBarInput: (0, e.jsx)(c.S, {
                  checked: f,
                  onChange: function (t) {
                      s.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: t }), y(t);
                  },
                  label: h.intl.string(h.t["JdIQ/Y"]),
              }),
              actions: [
                  { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: p },
                  {
                      variant: "primary",
                      text: h.intl.string(h.t["cY+Oob"]),
                      onClick: function () {
                          n(), p();
                      },
                      autoFocus: !1,
                  },
              ],
              ...g,
          });
};
