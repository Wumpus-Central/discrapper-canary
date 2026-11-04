var i = n(477900);
n(582128);
var a = n(858899),
    c = n(477782),
    r = n(191023),
    o = n(803316),
    s = n(207133),
    l = n(129230),
    p = n(723702),
    g = n(856383),
    E = n(253400),
    d = n(179581),
    u = n(652215),
    y = n(792996);
function A(t, e) {
    ((0, a.P0)({ text: t, variant: "critical" }), g.A.captureException(e));
}
n.d(
    e,
    {},
    {
        A: function (t, e, n) {
            if (
                (0, s.A)(e?.getChannelId()) ||
                n?.shouldHideMediaOptions === !0 ||
                !p.isPlatformEmbedded ||
                null == t ||
                !(0, o.e7)(t, n?.contentType, n?.originalContentType)
            )
                return null;
            let g = (0, o.XW)(t, n?.contentType, n?.originalContentType, "png");
            return [
                (0, o.PK)(t, n?.contentType, n?.originalContentType)
                    ? (0, i.jsx)(
                          c.Dr,
                          {
                              id: "copy-image",
                              label: y.intl.string(y.t.tvUqWn),
                              leadingAccessory: { type: "icon", icon: r.ImageIcon },
                              action: async function () {
                                  try {
                                      (await E.Ay.copyImage(g, n?.contentType),
                                          l.default.track(u.HAw.CONTEXT_MENU_IMAGE_COPIED, { ...(0, d.N)() }),
                                          (0, a.P0)({ text: y.intl.string(y.t.bhUpvC), variant: "success" }));
                                  } catch (t) {
                                      (A(y.intl.string(y.t.PTPbjx), t),
                                          l.default.track(u.HAw.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, d.N)() }));
                                  }
                              },
                          },
                          "copy-image",
                      )
                    : null,
                (0, i.jsx)(
                    c.Dr,
                    {
                        id: "save-image",
                        label: y.intl.string(y.t.PeXhgO),
                        leadingAccessory: { type: "icon", icon: r.ImageIcon },
                        action: async function () {
                            try {
                                let t = await E.Ay.saveImage(g, n?.contentType, "png");
                                if (t === E._0.ERRORED) throw Error(`NativeUtils.saveImage errored for ${g}`);
                                t === E._0.SAVED &&
                                    (l.default.track(u.HAw.CONTEXT_MENU_IMAGE_SAVED, { ...(0, d.N)() }),
                                    (0, a.P0)({ text: y.intl.string(y.t.cqpdJW), variant: "success" }));
                            } catch (t) {
                                (l.default.track(u.HAw.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, d.N)() }),
                                    A(y.intl.string(y.t["8Ve/S0"]), t));
                            }
                        },
                    },
                    "save-image",
                ),
            ];
        },
    },
);
