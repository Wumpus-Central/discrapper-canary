n.d(t, { A: () => p });
var i = n(477900);
n(582128);
var l = n(980707),
    a = n(477782),
    s = n(323384),
    r = n(291706),
    o = n(415528),
    c = n(389036),
    d = n(375708),
    u = n(730006);
let h = "voice-channel-app";
function p(e) {
    let { channelId: t, guildId: n, selectedApplicationId: p, onClose: m } = e,
        { options: A, listState: f } = (0, o.Ay)(n);
    return "loading" === f
        ? (0, i.jsx)(l.X, {})
        : (0, i.jsx)(l.W, {
              "data-menu-migrated": !0,
              navId: "voice-channel-app-menu",
              "aria-label": d.intl.string(c.default.yZQxdT),
              onClose: m,
              onSelect: void 0,
              children: (0, i.jsxs)(a.rX, {
                  label: d.intl.string(c.default.yZQxdT),
                  children: [
                      "failed" === f
                          ? (0, i.jsx)(a.Dr, {
                                id: "voice-channel-app-load-failed",
                                disabled: !0,
                                label: d.intl.string(c.default.X2xOBn),
                            })
                          : null,
                      "empty" === f
                          ? (0, i.jsx)(a.Dr, {
                                id: "voice-channel-app-empty",
                                disabled: !0,
                                label: d.intl.string(c.default["4S6iHa"]),
                            })
                          : null,
                      A.map((e) => {
                          let { applicationId: n, name: l, iconURL: o } = e,
                              c =
                                  null == o
                                      ? { leadingAccessory: { type: "icon", icon: s.k }, leftIcon: s.k }
                                      : {
                                            leadingAccessory: { type: "image", src: o },
                                            leftIcon: (0, i.jsx)("img", { alt: "", src: o, className: u.Z }),
                                        };
                          return (0, i.jsx)(
                              a.iD,
                              {
                                  id: `voice-channel-app-${n}`,
                                  group: h,
                                  label: l,
                                  ...c,
                                  checked: n === p,
                                  action: () => {
                                      (0, r.W)(t, n);
                                  },
                              },
                              n,
                          );
                      }),
                      (0, i.jsx)(a.iD, {
                          id: "voice-channel-app-none",
                          group: h,
                          label: d.intl.string(c.default.KEB4Rm),
                          checked: null == p,
                          action: () => {
                              (0, r.W)(t, null);
                          },
                      }),
                  ],
              }),
          });
}
