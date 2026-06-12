"use strict";
let i;
n.d(t, { JA: () => T, Ay: () => x, XA: () => D, jd: () => b });
var r,
    s = n(64700),
    a = n(17928),
    o = n(228366),
    l = n(401843),
    u = n(929921),
    c = n(734057),
    d = n(71393),
    _ = n(890063),
    h = n(576705),
    f = n(309010),
    p = n(279250),
    E = n(880144),
    m = n(613235),
    g = n(997630),
    A = n(731854),
    I = n(375708),
    T =
        (((r = {})[(r.Present = 0)] = "Present"),
        (r[(r.Update = 1)] = "Update"),
        (r[(r.Cancel = 2)] = "Cancel"),
        (r[(r.Error = 3)] = "Error"),
        r);
let S = !1,
    y = 0,
    N = 0,
    v = !1,
    C = {};
function R() {
    return _.Ay.getUseSystemScreensharePicker();
}
function O() {
    let e = R() && (N > 0 || (S && 0 === y));
    e !== v && ((v = e), _.Ay.getMediaEngine()?.setNativeDesktopVideoSourcePickerActive?.(v));
}
function b() {
    return (0, s.useEffect)(
        () => (
            y++,
            O(),
            () => {
                0 == --y && O();
            }
        ),
        [],
    );
}
function D() {
    return (0, s.useEffect)(
        () => (
            N++,
            O(),
            () => {
                --N, O();
            }
        ),
        [],
    );
}
function L() {
    let e = c.A.getChannel(f.A.getVoiceChannelId());
    return (S = null != e && (0, E.A)(_.Ay) && (0, p.vz)(e, d.A, h.A, !1)), O(), !1;
}
function w() {
    return null != i ? (0, m.A)(i) : null;
}
function M() {
    let { soundshareEnabled: e } = u.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: C.lastPresentedPickerStyle,
        sourceName: w() ?? I.intl.string(I.t.KKcy95),
        sound: e,
    };
}
class P extends a.Ay.Store {
    static displayName = "NativeScreenSharePickerStore";
    initialize() {
        this.syncWith([_.Ay, f.A, c.A, d.A, h.A], L), L();
    }
    supported() {
        return _.Ay.supports(A.O5.NATIVE_SCREENSHARE_PICKER);
    }
    enabled() {
        return R();
    }
    releasePickerStream() {
        (0, g.E)();
    }
    getPickerState() {
        return C;
    }
    getLastPickedContent() {
        return i;
    }
    getLastPickedContentTitle() {
        return w();
    }
    getLastPickedContentPID() {
        if (null != i) {
            var e;
            return (e = i).applications.length > 0
                ? e.applications[0].id
                : e.windows.length > 0
                  ? (e.windows[0].owningApplication?.id ?? null)
                  : null;
        }
        return null;
    }
    getStreamStartOptions() {
        return M();
    }
}
let x = new P(o.h, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (((C = { lastPickerAction: 1 }), (i = n), 0 === y && !t)) {
            let e = c.A.getChannel(f.A.getVoiceChannelId());
            null != e && (0, E.A)(_.Ay) && (0, p.vz)(e, d.A, h.A, !1) && (0, l.XI)(e.getGuildId(), e.id, M());
        }
    },
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: function () {
        C = { lastPickerAction: 2 };
    },
    NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
        let { error: t } = e;
        C = { lastPickerAction: 3, lastPickerError: t };
    },
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: function (e) {
        let { style: t } = e;
        C = { lastPickerAction: 0, lastPresentedPickerStyle: t };
    },
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: function () {
        C = {};
    },
});
