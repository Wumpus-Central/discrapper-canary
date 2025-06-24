n.d(t, { R: () => u });
var r = n(255367),
    l = n(659580),
    i = n(875527),
    a = n(306609);
function u(e) {
    let { onClose: t, onInteraction: n, location: u, overlayLimitedInteraction: o = !1 } = e;
    return (0, i.Hu)({
        location: u,
        autoTrackExposure: !0
    })
        ? (0, r.jsx)(a.l, {
              wide: !0,
              showOutputDevices: !0,
              onSettingsButtonClick: t,
              showSearchBar: !o
          })
        : (0, r.jsx)(l.default, {
              onClose: t,
              renderInputDevices: !0,
              renderOutputDevices: !0,
              renderInputModes: !0,
              renderInputVolume: !0,
              renderOutputVolume: !0,
              renderDeafen: !0,
              minimal: !0,
              onInteraction: n
          });
}
