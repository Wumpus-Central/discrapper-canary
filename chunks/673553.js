t.d(n, { U: () => h }), t(47120);
var i = t(610521),
    r = t(607070),
    s = t(819640),
    l = t(131951),
    o = t(19780),
    a = t(585483),
    d = t(5967),
    c = t(13140),
    u = t(981631);
let E = new Set(['PageDown', 'PageUp', 'Home', 'End', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']),
    p = new Set(['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock']),
    b = new Set(['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'Accept', 'ContextMenu', 'Find', 'ZoomIn', 'ZoomOut']),
    C = new Set(['ChannelDown', 'ChannelUp', 'MediaFastForward', 'MediaPause', 'MediaPlay', 'MediaPlayPause', 'MediaRecord', 'MediaRewind', 'MediaStop', 'MediaTrackNext', 'MediaTrackPrevious', 'AudioBalanceLeft', 'AudioBalanceRight', 'AudioBassDown', 'AudioBassBoostDown', 'AudioBassBoostToggle', 'AudioBassBoostUp', 'AudioBassUp', 'AudioFaderFront', 'AudioFaderReader', 'AudioSurroundModeNext', 'AudioTrebleDown', 'AudioTreblUp', 'AudioVolumeDown', 'AudioVolumeMute', 'AudioVolumeUp', 'VolumeUp', 'VolumeDown', 'VolumeMute']),
    h = {
        binds: ['any-character'],
        keydown(e, n) {
            var t;
            let h = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
            if ((0, d.VG)(h) || i.fC.isActive() || p.has(n) || b.has(n) || C.has(n)) return !1;
            let g = null != h && 'BODY' === h.tagName;
            return (
                !((r.Z.keyboardModeEnabled && !g && !/^[a-zA-Z0-9]$/.test(n)) || a.S.hasSubscribers(u.CkL.MODAL_CLOSE) || s.Z.hasLayers()) &&
                ('Tab' === n && a.S.hasSubscribers(u.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), a.S.dispatch(u.CkL.TEXTAREA_FOCUS), !1)
                    : !(
                          o.Z.isConnected() &&
                          l.Z.getMode() === u.pM4.PUSH_TO_TALK &&
                          !l.Z.isSelfMute() &&
                          Object.values(l.Z.getShortcuts())
                              .map(c.d2)
                              .some((n) => n.map((e) => e.keyCode).includes(e.keyCode))
                      ) && void (e.metaKey || e.ctrlKey || E.has(n) || a.S.dispatchToLastSubscribed(u.CkL.TEXTAREA_FOCUS)))
            );
        }
    };
