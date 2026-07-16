"use strict";
let i;
n.d(t, { JA: () => g, Ay: () => w, XA: () => v, jd: () => D });
var r,
    a = n(64700),
    s = n(17928),
    l = n(228366),
    o = n(401843),
    d = n(929921),
    c = n(734057),
    u = n(71393),
    _ = n(186295),
    E = n(576705),
    A = n(309010),
    h = n(279250),
    I = n(880144),
    f = n(613235),
    p = n(997630),
    T = n(731854),
    m = n(375708),
    g =
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
function L() {
    return _.Ay.getUseSystemScreensharePicker();
}
function y() {
    let e = L() && (C > 0 || (S && 0 === N));
    e !== R && ((R = e), _.Ay.getMediaEngine()?.setNativeDesktopVideoSourcePickerActive?.(R));
}
function D() {
    return (0, a.useEffect)(
        () => (
            N++,
            y(),
            () => {
                0 == --N && y();
            }
        ),
        [],
    );
}
function v() {
    return (0, a.useEffect)(
        () => (
            C++,
            y(),
            () => {
                --C, y();
            }
        ),
        [],
    );
}
function b() {
    let e = c.A.getChannel(A.Ay.getVoiceChannelId());
    return (S = null != e && (0, I.A)(_.Ay) && (0, h.vz)(e, u.A, E.A, !1)), y(), !1;
}
function M() {
    return null != i ? (0, f.A)(i) : null;
}
function P() {
    let { soundshareEnabled: e } = d.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: O.lastPresentedPickerStyle,
        sourceName: M() ?? m.intl.string(m.t.KKcy95),
        sound: e,
    };
}
class U extends s.Ay.Store {
    static displayName = "NativeScreenSharePickerStore";
    initialize() {
        this.syncWith([_.Ay, A.Ay, c.A, u.A, E.A], b), b();
    }
    supported() {
        return _.Ay.supports(T.O5.NATIVE_SCREENSHARE_PICKER);
    }
    enabled() {
        return L();
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
        return M();
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
let w = new U(l.h, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (((O = { lastPickerAction: 1 }), (i = n), 0 === N && !t)) {
            let e = c.A.getChannel(A.Ay.getVoiceChannelId());
            null != e && (0, I.A)(_.Ay) && (0, h.vz)(e, u.A, E.A, !1) && (0, o.XI)(e.getGuildId(), e.id, P());
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
