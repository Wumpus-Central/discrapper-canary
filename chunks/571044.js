"use strict";
let r;
n.d(t, { Ay: () => k, JA: () => S, XA: () => L, jd: () => D });
var i,
    s = n(64700),
    a = n(311907),
    o = n(73153),
    l = n(401843),
    u = n(929921),
    c = n(734057),
    d = n(71393),
    _ = n(430452),
    f = n(576705),
    p = n(309010),
    h = n(279250),
    E = n(880144),
    m = n(934484),
    g = n(613235),
    A = n(997630),
    I = n(731854),
    T = n(985018),
    S =
        (((i = {})[(i.Present = 0)] = "Present"),
        (i[(i.Update = 1)] = "Update"),
        (i[(i.Cancel = 2)] = "Cancel"),
        (i[(i.Error = 3)] = "Error"),
        i);
let y = !1,
    N = 0,
    v = 0,
    C = !1,
    O = {};
function R() {
    return _.Ay.getUseSystemScreensharePicker();
}
function b() {
    let e = R() && (v > 0 || (y && 0 === N));
    e !== C && ((C = e), _.Ay.getMediaEngine()?.setNativeDesktopVideoSourcePickerActive?.(C));
}
function D() {
    return (0, s.useEffect)(
        () => (
            N++,
            b(),
            () => {
                0 == --N && b();
            }
        ),
        [],
    );
}
function L() {
    return (0, s.useEffect)(
        () => (
            v++,
            b(),
            () => {
                --v, b();
            }
        ),
        [],
    );
}
function w() {
    let e = c.A.getChannel(p.A.getVoiceChannelId());
    return (y = null != e && (0, E.A)(_.Ay) && (0, h.vz)(e, d.A, f.A, !1)), b(), !1;
}
function M() {
    return null != r ? (0, g.A)(r) : null;
}
function P() {
    let { soundshareEnabled: e } = u.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: O.lastPresentedPickerStyle,
        sourceName: M() ?? T.intl.string(T.t.KKcy95),
        sound: e,
    };
}
class x extends a.Ay.Store {
    static displayName = "NativeScreenSharePickerStore";
    initialize() {
        this.syncWith([_.Ay, p.A, c.A, d.A, f.A], w), w();
    }
    supported() {
        return _.Ay.supports(I.O5.NATIVE_SCREENSHARE_PICKER);
    }
    enabled() {
        return R();
    }
    releasePickerStream() {
        (0, A.E)();
    }
    getPickerState() {
        return O;
    }
    getLastPickedContent() {
        return r;
    }
    getLastPickedContentTitle() {
        return M();
    }
    getLastPickedContentPID() {
        return null != r ? (0, m.A)(r) : null;
    }
    getStreamStartOptions() {
        return P();
    }
}
let k = new x(o.h, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: function (e) {
        let { existing: t, content: n } = e;
        if (((O = { lastPickerAction: 1 }), (r = n), 0 === N && !t)) {
            let e = c.A.getChannel(p.A.getVoiceChannelId());
            null != e && (0, E.A)(_.Ay) && (0, h.vz)(e, d.A, f.A, !1) && (0, l.XI)(e.getGuildId(), e.id, P());
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
