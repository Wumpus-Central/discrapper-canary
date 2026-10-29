a.d(t, { default: () => y });
var i = a(477900),
    n = a(582128),
    l = a(17928),
    r = a(189213),
    s = a(150934),
    d = a(827343),
    o = a(820284),
    c = a(212245),
    u = a(793574),
    g = a(688810),
    h = a(625075),
    C = a(253932),
    p = a(329551),
    A = a(285918),
    k = a(912630),
    v = a(312987),
    E = a(999926),
    b = a(287809),
    w = a(174459),
    _ = a(745317),
    m = a(652215),
    S = a(105292),
    x = a(907487);
function y(e) {
    let { transitionState: t, videoEnabled: a, onEnable: y, onClose: f } = e,
        j = E.Ay.getCameraComponent(),
        M = C.bm.useSetting(),
        [P, I] = n.useState((0, p.i)(b.default.getCurrentUser())),
        L = (0, c.p)(),
        { analyticsLocations: R } = (0, g.Ay)(u.A.CAMERA_PREVIEW),
        { videoEnabled: D } = h.k.useConfig({ location: "CameraPreviewModal" }),
        O = (0, l.bG)([k.A], () => k.A.videoBackgroundPreviewUnavailable);
    n.useEffect(() => {
        w.default.track(m.HAw.OPEN_MODAL, { type: "Camera Preview Modal" });
    }, []);
    let B = n.useCallback(async () => {
            try {
                await (0, v.gB)(P, { location: { page: m.liQ.PREVIEW_CAMERA_MODAL, ...L.location } });
            } catch (e) {}
            (await f(), (0, A._C)(P));
        }, [P, L.location, f]),
        N = n.useCallback(async () => {
            (await B(), d.default.setVideoEnabled(!0), y?.());
        }, [B, y]),
        T = n.useMemo(
            () => [
                {
                    variant: "primary",
                    text: a ? S.intl.string(S.t.KQENhq) : S.intl.string(S.t.kgIe9a),
                    onClick: a ? B : N,
                    disabled: O,
                },
            ],
            [B, N, a, O],
        );
    return D
        ? (0, i.jsx)(g.f5, {
              value: R,
              children: (0, i.jsx)(o.A, {
                  page: m.liQ.PREVIEW_CAMERA_MODAL,
                  children: (0, i.jsx)(r.a, {
                      size: "md",
                      title: a ? S.intl.string(S.t.LAwwbQ) : S.intl.string(S.t["/HITVD"]),
                      actionBarInput: (0, i.jsx)(s.S, {
                          label: S.intl.string(S.t["3Ppr1h"]),
                          labelType: "secondary",
                          checked: M,
                          onChange: () => {
                              (C.bm.updateSetting(!M),
                                  w.default.track(m.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: !M }));
                          },
                      }),
                      actions: T,
                      onClose: f,
                      transitionState: t,
                      children: (0, i.jsx)(_.Ay, {
                          hidePreviewToggle: !0,
                          hideDeviceHeader: !0,
                          hideCameraSettingsLink: !0,
                          selectedBackgroundOption: P,
                          onSelectBackgroundOption: I,
                          hideDeviceSelector: a,
                          renderCamera: function (e) {
                              return (0, i.jsxs)("div", {
                                  className: x.S,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: x.U,
                                          children: (0, i.jsx)(j, {
                                              disabled: !1,
                                              deviceId: e,
                                              width: 430,
                                              height: 242,
                                          }),
                                      }),
                                      (0, i.jsx)(_.kE, {}),
                                      (0, i.jsx)(_.eK, {}),
                                  ],
                              });
                          },
                          onLearnMore: f,
                      }),
                  }),
              }),
          })
        : (0, i.jsx)(r.a, {
              title: S.intl.string(S.t.Nzo5nz),
              subtitle: S.intl.string(S.t.UoW002),
              transitionState: t,
              onClose: f,
              actions: [{ variant: "primary", text: S.intl.string(S.t.BddRzS), onClick: f }],
          });
}
