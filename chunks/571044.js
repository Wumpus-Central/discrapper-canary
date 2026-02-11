"use strict";
let r;
n.d(t, { Ay: () => H, JA: () => y, XA: () => w, jd: () => L });
var i = n(64700),
    a = n(311907),
    s = n(73153),
    o = n(401843),
    l = n(929921),
    u = n(734057),
    c = n(71393),
    d = n(430452),
    _ = n(576705),
    f = n(309010),
    h = n(279250),
    p = n(880144),
    g = n(934484),
    E = n(613235),
    A = n(997630),
    I = n(731854),
    T = n(985018),
    y = (function (e) {
        return (
            (e[(e.Present = 0)] = "Present"),
            (e[(e.Update = 1)] = "Update"),
            (e[(e.Cancel = 2)] = "Cancel"),
            (e[(e.Error = 3)] = "Error"),
            e
        );
    })({});
let S = !1,
    v = 0,
    C = 0,
    b = !1,
    N = {};
function R() {
    return d.Ay.supports(I.O5.NATIVE_SCREENSHARE_PICKER);
}
function O() {
    return d.Ay.getUseSystemScreensharePicker();
}
function D() {
    let e = O() && (C > 0 || (S && 0 === v));
    e !== b && ((b = e), d.Ay.getMediaEngine()?.setNativeDesktopVideoSourcePickerActive?.(b));
}
function L() {
    return (0, i.useEffect)(
        () => (
            v++,
            D(),
            () => {
                0 == --v && D();
            }
        ),
        [],
    );
}
function w() {
    return (0, i.useEffect)(
        () => (
            C++,
            D(),
            () => {
                --C, D();
            }
        ),
        [],
    );
}
function x() {
    let e = u.A.getChannel(f.A.getVoiceChannelId());
    return (S = null != e && (0, p.A)(d.Ay) && (0, h.vz)(e, c.A, _.A, !1)), D(), !1;
}
function P() {
    return null != r ? (0, E.A)(r) : null;
}
function M() {
    return null != r ? (0, g.A)(r) : null;
}
function k() {
    let { soundshareEnabled: e } = l.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: N.lastPresentedPickerStyle,
        sourceName: P() ?? T.intl.string(T.t.KKcy95),
        sound: e,
    };
}
class U extends a.Ay.Store {
    static displayName = "NativeScreenSharePickerStore";
    initialize() {
        this.syncWith([d.Ay, f.A, u.A, c.A, _.A], x), x();
    }
    supported() {
        return R();
    }
    enabled() {
        return O();
    }
    releasePickerStream() {
        (0, A.E)();
    }
    getPickerState() {
        return N;
    }
    getLastPickedContent() {
        return r;
    }
    getLastPickedContentTitle() {
        return P();
    }
    getLastPickedContentPID() {
        return M();
    }
    getStreamStartOptions() {
        return k();
    }
}
function G(e) {
    let { existing: t, content: n } = e;
    if (((N = { lastPickerAction: 1 }), (r = n), 0 === v && !t)) {
        let e = u.A.getChannel(f.A.getVoiceChannelId());
        null != e && (0, p.A)(d.Ay) && (0, h.vz)(e, c.A, _.A, !1) && (0, o.XI)(e.getGuildId(), e.id, k());
    }
}
function F() {
    N = { lastPickerAction: 2 };
}
function V(e) {
    let { error: t } = e;
    N = { lastPickerAction: 3, lastPickerError: t };
}
function B(e) {
    let { style: t } = e;
    N = { lastPickerAction: 0, lastPresentedPickerStyle: t };
}
function j() {
    N = {};
}
let H = new U(s.h, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: G,
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: F,
    NATIVE_SCREEN_SHARE_PICKER_ERROR: V,
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: B,
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: j,
});
