n.d(t, { R: () => s });
var r = n(255367),
    i = n(659580),
    o = n(875527),
    a = n(306609);
function s(e) {
    let { onClose: t, onInteraction: n, location: s, overlayLimitedInteraction: l = !1 } = e;
    return (0, o.Hu)({
        location: s,
        autoTrackExposure: !0,
    })
        ? (0, r.jsx)(a.l, {
              wide: !0,
              showOutputDevices: !0,
              onSettingsButtonClick: t,
              showSearchBar: !l,
          })
        : (0, r.jsx)(i.default, {
              onClose: t,
              renderInputDevices: !0,
              renderOutputDevices: !0,
              renderInputModes: !0,
              renderInputVolume: !0,
              renderOutputVolume: !0,
              renderDeafen: !0,
              minimal: !0,
              onInteraction: n,
          });
}
