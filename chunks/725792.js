"use strict";
let i;
n.d(t, { JA: () => T, Ay: () => M, XA: () => L, jd: () => D });
var r,
    s = n(64700),
    a = n(17928),
    o = n(228366),
    l = n(401843),
    d = n(929921),
    _ = n(734057),
    u = n(71393),
    c = n(969341),
    E = n(576705),
    h = n(309010),
    m = n(279250),
    f = n(880144),
    g = n(613235),
    p = n(997630),
    A = n(731854),
    I = n(985018),
    T =
        (((r = {})[(r.Present = 0)] = "Present"),
        (r[(r.Update = 1)] = "Update"),
        (r[(r.Cancel = 2)] = "Cancel"),
        (r[(r.Error = 3)] = "Error"),
        r);
let S = !1,
    N = 0,
    C = 0,
    R = !1,
    O = {};
function y() {
    return c.Ay.getUseSystemScreensharePicker();
}
function v() {
    let e = y() && (C > 0 || (S && 0 === N));
    e !== R && ((R = e), c.Ay.getMediaEngine()?.setNativeDesktopVideoSourcePickerActive?.(R));
}
function D() {
    return (0, s.useEffect)(
        () => (
            N++,
            v(),
            () => {
                0 == --N && v();
            }
        ),
        [],
    );
}
function L() {
    return (0, s.useEffect)(
        () => (
            C++,
            v(),
            () => {
                --C, v();
            }
        ),
        [],
    );
}
function b() {
    let e = _.A.getChannel(h.A.getVoiceChannelId());
    return (S = null != e && (0, f.A)(c.Ay) && (0, m.vz)(e, u.A, E.A, !1)), v(), !1;
}
function w() {
    return null != i ? (0, g.A)(i) : null;
}
function P() {
    let { soundshareEnabled: e } = d.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: O.lastPresentedPickerStyle,
        sourceName: w() ?? I.intl.string(I.t.KKcy95),
        sound: e,
    };
}
class k extends a.Ay.Store {
    static displayName = "NativeScreenSharePickerStore";
    initialize() {
        this.syncWith([c.Ay, h.A, _.A, u.A, E.A], b), b();
    }
    supported() {
        return c.Ay.supports(A.O5.NATIVE_SCREENSHARE_PICKER);
    }
    enabled() {
        return y();
    }
    releasePickerStream() {
        (0, p.E)();
    }
    getPickerState() {
        return O;
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
        return P();
    }
}
let M = new k(o.h, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (((O = { lastPickerAction: 1 }), (i = n), 0 === N && !t)) {
            let e = _.A.getChannel(h.A.getVoiceChannelId());
            null != e && (0, f.A)(c.Ay) && (0, m.vz)(e, u.A, E.A, !1) && (0, l.XI)(e.getGuildId(), e.id, P());
        }
    },
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: function () {
        O = { lastPickerAction: 2 };
    },
    NATIVE_SCREEN_SHARE_PICKER_ERROR: function (e) {
        let { error: t } = e;
        O = { lastPickerAction: 3, lastPickerError: t };
    },
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: function (e) {
        let { style: t } = e;
        O = { lastPickerAction: 0, lastPresentedPickerStyle: t };
    },
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: function () {
        O = {};
    },
});
