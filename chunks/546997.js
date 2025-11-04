n.d(t, {
    E: () => E,
    Z: () => b,
});
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(846027),
    l = n(579806),
    c = n(921801),
    u = n(131951),
    d = n(358085),
    f = n(726985),
    _ = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    (0, d.isMac)() && e
        ? (0, o.ZDy)(async () => {
              let { ConfirmModal: t } = await Promise.resolve().then(n.bind(n, 878678));
              return (n) =>
                  (0, r.jsx)(
                      t,
                      g(h({}, n), {
                          onConfirm: () => {
                              s.Z.setUseSystemScreensharePicker(e), l.Z.app.relaunch();
                          },
                          confirmButtonColor: a.zx.Colors.BRAND,
                          header: _.intl.string(_.t["9jf31O"]),
                          cancelText: _.intl.string(_.t["ETE/oC"]),
                          confirmText: _.intl.string(_.t.BddRzS),
                          children: (0, r.jsx)(o.Text, {
                              variant: "text-md/normal",
                              children: _.intl.string(_.t.uBd6JW),
                          }),
                      }),
                  );
          })
        : s.Z.setUseSystemScreensharePicker(e);
}
function b() {
    let {
        videoHook: e,
        experimentalSoundshare: t,
        supportsExperimentalSoundshare: n,
        supportsHookSoundshare: a,
        useSystemScreensharePicker: l,
    } = (0, i.cj)([u.Z], () => ({
        videoHook: u.Z.getVideoHook(),
        experimentalSoundshare: u.Z.getExperimentalSoundshare(),
        supportsExperimentalSoundshare: u.Z.supportsExperimentalSoundshare(),
        supportsHookSoundshare: u.Z.supportsHookSoundshare(),
        useSystemScreensharePicker: u.Z.getUseSystemScreensharePicker(),
    }));
    return (0, r.jsxs)(c.F, {
        setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: [
            (0, r.jsx)(c.F, {
                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
                children: (0, r.jsx)(o.rsf, {
                    label: _.intl.string(_.t.GmWk2E),
                    description: _.intl.string(_.t["Fj/xn1"]),
                    checked: e,
                    onChange: (e) => s.Z.setVideoHook(e),
                }),
            }),
            n &&
                a &&
                (0, r.jsx)(c.F, {
                    setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
                    children: (0, r.jsx)(o.rsf, {
                        label: _.intl.string(_.t["4I0qzZ"]),
                        checked: t,
                        onChange: (e) => s.Z.setExperimentalSoundshare(e),
                    }),
                }),
            (0, r.jsx)(c.F, {
                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
                children: (0, r.jsx)(o.rsf, {
                    label: _.intl.string(_.t.ie1mgY),
                    checked: l,
                    onChange: E,
                }),
            }),
        ],
    });
}
