n.d(t, { U: () => f }), n(388685), n(35282);
var i = n(563555),
    r = n(607070),
    s = n(819640),
    l = n(131951),
    a = n(19780),
    o = n(585483),
    c = n(5967),
    d = n(13140),
    u = n(981631);
let m = new Set(['PageDown', 'PageUp', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']),
    g = new Set(['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock']),
    p = new Set(['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'Accept', 'ContextMenu', 'Find', 'ZoomIn', 'ZoomOut']),
    h = new Set(['ChannelDown', 'ChannelUp', 'MediaFastForward', 'MediaPause', 'MediaPlay', 'MediaPlayPause', 'MediaRecord', 'MediaRewind', 'MediaStop', 'MediaTrackNext', 'MediaTrackPrevious', 'AudioBalanceLeft', 'AudioBalanceRight', 'AudioBassDown', 'AudioBassBoostDown', 'AudioBassBoostToggle', 'AudioBassBoostUp', 'AudioBassUp', 'AudioFaderFront', 'AudioFaderReader', 'AudioSurroundModeNext', 'AudioTrebleDown', 'AudioTreblUp', 'AudioVolumeDown', 'AudioVolumeMute', 'AudioVolumeUp', 'VolumeUp', 'VolumeDown', 'VolumeMute']),
    f = {
        binds: ['any-character'],
        keydown(e, t) {
            var n;
            let f = null == (n = (0, c.uB)(e)) ? void 0 : n.activeElement;
            if ((0, c.VG)(f) || i.fC.isActive() || g.has(t) || p.has(t) || h.has(t)) return !1;
            let b = null != f && 'BODY' === f.tagName;
            return (
                !((r.Z.keyboardModeEnabled && !b && !/^[a-zA-Z0-9]$/.test(t)) || o.S.hasSubscribers(u.CkL.MODAL_CLOSE) || s.Z.hasLayers()) &&
                ('Tab' === t && o.S.hasSubscribers(u.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), o.S.dispatch(u.CkL.TEXTAREA_FOCUS), !1)
                    : !(
                          a.Z.isConnected() &&
                          l.Z.getMode() === u.pM4.PUSH_TO_TALK &&
                          !l.Z.isSelfMute() &&
                          Object.values(l.Z.getShortcuts())
                              .map(d.d2)
                              .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))
                      ) && void (!e.metaKey && !e.ctrlKey && !m.has(t) && o.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS)))
            );
        }
    };
