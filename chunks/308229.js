i.d(t, { default: () => y });
var a = i(477900),
    n = i(582128),
    l = i(189213),
    r = i(17928),
    s = i(150934),
    d = i(827343),
    o = i(820284),
    c = i(212245),
    u = i(793574),
    g = i(688810),
    h = i(625075),
    A = i(885386),
    C = i(329551),
    p = i(285918),
    k = i(912630),
    v = i(413339),
    E = i(453028),
    b = i(287809),
    w = i(174459),
    _ = i(745317),
    m = i(652215),
    S = i(375708),
    x = i(907487);
function y(e) {
    let { transitionState: t, videoEnabled: i, onEnable: y, onClose: M } = e,
        j = E.Ay.getCameraComponent(),
        f = A.bm.useSetting(),
        [P, I] = n.useState((0, C.i)(b.default.getCurrentUser())),
        L = (0, c.p)(),
        { analyticsLocations: R } = (0, g.Ay)(u.A.CAMERA_PREVIEW),
        { videoEnabled: D } = h.k.useConfig({ location: "CameraPreviewModal" }),
        O = (0, r.bG)([k.A], () => k.A.videoBackgroundPreviewUnavailable);
    n.useEffect(() => {
        w.default.track(m.HAw.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let B = n.useCallback(async () => {
            try {
                await (0, v.gB)(P, { location: { page: m.liQ.PREVIEW_CAMERA_MODAL, ...L.location } });
            } catch (e) {}
            await M(), (0, p._C)(P);
        }, [P, L.location, M]),
        N = n.useCallback(async () => {
            await B(), d.A.setVideoEnabled(!0), y?.();
        }, [B, y]),
        T = n.useMemo(
            () => [
                {
                    variant: "primary",
                    text: i ? S.intl.string(S.t.KQENhq) : S.intl.string(S.t.kgIe9a),
                    onClick: i ? B : N,
                    disabled: O,
                },
            ],
            [B, N, i, O],
        );
    return D
        ? (0, a.jsx)(g.f5, {
              value: R,
              children: (0, a.jsx)(o.A, {
                  page: m.liQ.PREVIEW_CAMERA_MODAL,
                  children: (0, a.jsx)(l.Modal, {
                      size: "md",
                      title: i ? S.intl.string(S.t.LAwwbQ) : S.intl.string(S.t["/HITVD"]),
                      actionBarInput: (0, a.jsx)(s.S, {
                          label: S.intl.string(S.t["3Ppr1h"]),
                          labelType: "secondary",
                          checked: f,
                          onChange: () => {
                              A.bm.updateSetting(!f),
                                  w.default.track(m.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !f });
                          },
                      }),
                      actions: T,
                      onClose: M,
                      transitionState: t,
                      children: (0, a.jsx)(_.Ay, {
                          hidePreviewToggle: !0,
                          hideDeviceHeader: !0,
                          hideCameraSettingsLink: !0,
                          selectedBackgroundOption: P,
                          onSelectBackgroundOption: I,
                          hideDeviceSelector: i,
                          renderCamera: function (e) {
                              return (0, a.jsxs)("div", {
                                  className: x.S,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: x.U,
                                          children: (0, a.jsx)(j, {
                                              disabled: !1,
                                              deviceId: e,
                                              width: 430,
                                              height: 242,
                                          }),
                                      }),
                                      (0, a.jsx)(_.kE, {}),
                                      (0, a.jsx)(_.eK, {}),
                                  ],
                              });
                          },
                          onLearnMore: M,
                      }),
                  }),
              }),
          })
        : (0, a.jsx)(l.Modal, {
              title: S.intl.string(S.t.Nzo5nz),
              subtitle: S.intl.string(S.t.UoW002),
              transitionState: t,
              onClose: M,
              actions: [{ variant: "primary", text: S.intl.string(S.t.BddRzS), onClick: M }],
          });
}
