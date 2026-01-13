n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    o = n(782568),
    a = n(796762),
    s = n(695346),
    c = n(572004),
    u = n(358085),
    d = n(388032);
function f(e) {
    let { messageId: t, emojiId: n, type: f, imageSrc: g } = e,
        b = s.Sb.useSetting(),
        { tidaWebformEnabled: p } = a.Z.useExperiment({ location: "useMessageDetailsItem" }, { autoTrackExposure: !1 }),
        m = i.useCallback(() => {
            (0, c.JG)(t);
        }, [t]),
        O = i.useCallback(() => {
            null != n && (0, c.JG)(n);
        }, [n]),
        y = i.useCallback(() => {
            null != g && (0, c.JG)(g);
        }, [g]),
        h = i.useCallback(() => {
            null != g && (0, o.Z)(g);
        }, [g]);
    return b && c.wS && p && "emoji" === f && null != n
        ? (0, r.jsxs)(l.sNh, {
              id: "message-details",
              label: d.intl.string(d.t.IqqJNI),
              children: [
                  (0, r.jsx)(l.sNh, {
                      id: "copy-message-id",
                      label: d.intl.string(d.t.zBoHlf),
                      action: m,
                      icon: l.VuL,
                  }),
                  (0, r.jsx)(l.sNh, {
                      id: "copy-emoji-id",
                      label: d.intl.string(d.t.Ap2oVy),
                      action: O,
                      icon: l.VuL,
                  }),
                  null != g &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l.sNh, {
                                  id: "copy-image-link",
                                  label: d.intl.string(d.t["8xHmxo"]),
                                  action: y,
                                  icon: l.xPt,
                              }),
                              u.isPlatformEmbedded &&
                                  (0, r.jsx)(l.sNh, {
                                      id: "open-image-link",
                                      label: d.intl.string(d.t.w8ldGK),
                                      action: h,
                                      icon: l.xPt,
                                  }),
                          ],
                      }),
              ],
          })
        : null;
}
