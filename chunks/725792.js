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
    _ = n(235058),
    f = n(576705),
    h = n(309010),
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
    N = 0,
    y = 0,
    C = !1,
    v = {};
function O() {
    return _.Ay.getUseSystemScreensharePicker();
}
function R() {
    let e = O() && (y > 0 || (S && 0 === N));
    e !== C && ((C = e), _.Ay.getMediaEngine()?.setNativeDesktopVideoSourcePickerActive?.(C));
}
function b() {
    return (0, s.useEffect)(
        () => (
            N++,
            R(),
            () => {
                0 == --N && R();
            }
        ),
        [],
    );
}
function D() {
    return (0, s.useEffect)(
        () => (
            y++,
            R(),
            () => {
                --y, R();
            }
        ),
        [],
    );
}
function L() {
    let e = c.A.getChannel(h.A.getVoiceChannelId());
    return (S = null != e && (0, E.A)(_.Ay) && (0, p.vz)(e, d.A, f.A, !1)), R(), !1;
}
function w() {
    return null != i ? (0, m.A)(i) : null;
}
function M() {
    let { soundshareEnabled: e } = u.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: v.lastPresentedPickerStyle,
        sourceName: w() ?? I.intl.string(I.t.KKcy95),
        sound: e,
    };
}
class P extends a.Ay.Store {
    static displayName = "NativeScreenSharePickerStore";
    initialize() {
        this.syncWith([_.Ay, h.A, c.A, d.A, f.A], L), L();
    }
    supported() {
        return _.Ay.supports(A.O5.NATIVE_SCREENSHARE_PICKER);
    }
    enabled() {
        return O();
    }
    releasePickerStream() {
        (0, g.E)();
    }
    getPickerState() {
        return v;
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
        if (((v = { lastPickerAction: 1 }), (i = n), 0 === N && !t)) {
            let e = c.A.getChannel(h.A.getVoiceChannelId());
            null != e && (0, E.A)(_.Ay) && (0, p.vz)(e, d.A, f.A, !1) && (0, l.XI)(e.getGuildId(), e.id, M());
        }
    },
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: function () {
        v = { lastPickerAction: 2 };
    },
    NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
        let { error: t } = e;
        v = { lastPickerAction: 3, lastPickerError: t };
    },
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: function (e) {
        let { style: t } = e;
        v = { lastPickerAction: 0, lastPresentedPickerStyle: t };
    },
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: function () {
        v = {};
    },
});
