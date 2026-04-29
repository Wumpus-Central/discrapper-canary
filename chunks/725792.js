"use strict";
let i;
n.d(t, { JA: () => T, Ay: () => U, XA: () => v, jd: () => L });
var r,
    s = n(64700),
    a = n(17928),
    o = n(228366),
    l = n(401843),
    _ = n(929921),
    d = n(734057),
    u = n(71393),
    c = n(51760),
    E = n(576705),
    h = n(309010),
    m = n(279250),
    f = n(880144),
    g = n(613235),
    I = n(997630),
    A = n(731854),
    p = n(985018),
    T =
        (((r = {})[(r.Present = 0)] = "Present"),
        (r[(r.Update = 1)] = "Update"),
        (r[(r.Cancel = 2)] = "Cancel"),
        (r[(r.Error = 3)] = "Error"),
        r);
let S = !1,
    N = 0,
    O = 0,
    R = !1,
    C = {};
function y() {
    return c.Ay.getUseSystemScreensharePicker();
}
function D() {
    let e = y() && (O > 0 || (S && 0 === N));
    e !== R && ((R = e), c.Ay.getMediaEngine()?.setNativeDesktopVideoSourcePickerActive?.(R));
}
function L() {
    return (0, s.useEffect)(
        () => (
            N++,
            D(),
            () => {
                0 == --N && D();
            }
        ),
        [],
    );
}
function v() {
    return (0, s.useEffect)(
        () => (
            O++,
            D(),
            () => {
                --O, D();
            }
        ),
        [],
    );
}
function w() {
    let e = d.A.getChannel(h.A.getVoiceChannelId());
    return (S = null != e && (0, f.A)(c.Ay) && (0, m.vz)(e, u.A, E.A, !1)), D(), !1;
}
function P() {
    return null != i ? (0, g.A)(i) : null;
}
function b() {
    let { soundshareEnabled: e } = _.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: C.lastPresentedPickerStyle,
        sourceName: P() ?? p.intl.string(p.t.KKcy95),
        sound: e,
    };
}
class k extends a.Ay.Store {
    static displayName = "NativeScreenSharePickerStore";
    initialize() {
        this.syncWith([c.Ay, h.A, d.A, u.A, E.A], w), w();
    }
    supported() {
        return c.Ay.supports(A.O5.NATIVE_SCREENSHARE_PICKER);
    }
    enabled() {
        return y();
    }
    releasePickerStream() {
        (0, I.E)();
    }
    getPickerState() {
        return C;
    }
    getLastPickedContent() {
        return i;
    }
    getLastPickedContentTitle() {
        return P();
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
        return b();
    }
}
let U = new k(o.h, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (((C = { lastPickerAction: 1 }), (i = n), 0 === N && !t)) {
            let e = d.A.getChannel(h.A.getVoiceChannelId());
            null != e && (0, f.A)(c.Ay) && (0, m.vz)(e, u.A, E.A, !1) && (0, l.XI)(e.getGuildId(), e.id, b());
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
