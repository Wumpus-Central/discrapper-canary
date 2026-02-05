"use strict";
let r;
n.d(t, { Ay: () => j, JA: () => T, XA: () => L, jd: () => D });
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
    p = n(279250),
    h = n(880144),
    m = n(934484),
    g = n(613235),
    E = n(997630),
    A = n(731854),
    I = n(985018),
    T = (function (e) {
        return (
            (e[(e.Present = 0)] = "Present"),
            (e[(e.Update = 1)] = "Update"),
            (e[(e.Cancel = 2)] = "Cancel"),
            (e[(e.Error = 3)] = "Error"),
            e
        );
    })({});
let y = !1,
    S = 0,
    v = 0,
    C = !1,
    b = {};
function N() {
    return d.A.supports(A.O5.NATIVE_SCREENSHARE_PICKER);
}
function R() {
    return d.A.getUseSystemScreensharePicker();
}
function O() {
    let e = R() && (v > 0 || (y && 0 === S));
    e !== C && ((C = e), d.A.getMediaEngine()?.setNativeDesktopVideoSourcePickerActive?.(C));
}
function D() {
    return (0, i.useEffect)(
        () => (
            S++,
            O(),
            () => {
                0 == --S && O();
            }
        ),
        [],
    );
}
function L() {
    return (0, i.useEffect)(
        () => (
            v++,
            O(),
            () => {
                --v, O();
            }
        ),
        [],
    );
}
function w() {
    let e = u.A.getChannel(f.A.getVoiceChannelId());
    return (y = null != e && (0, h.A)(d.A) && (0, p.vz)(e, c.A, _.A, !1)), O(), !1;
}
function x() {
    return null != r ? (0, g.A)(r) : null;
}
function P() {
    return null != r ? (0, m.A)(r) : null;
}
function M() {
    let { soundshareEnabled: e } = l.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: b.lastPresentedPickerStyle,
        sourceName: x() ?? I.intl.string(I.t.KKcy95),
        sound: e,
    };
}
class k extends a.Ay.Store {
    static displayName = "NativeScreenSharePickerStore";
    initialize() {
        this.syncWith([d.A, f.A, u.A, c.A, _.A], w), w();
    }
    supported() {
        return N();
    }
    enabled() {
        return R();
    }
    releasePickerStream() {
        (0, E.E)();
    }
    getPickerState() {
        return b;
    }
    getLastPickedContent() {
        return r;
    }
    getLastPickedContentTitle() {
        return x();
    }
    getLastPickedContentPID() {
        return P();
    }
    getStreamStartOptions() {
        return M();
    }
}
function U(e) {
    let { existing: t, content: n } = e;
    if (((b = { lastPickerAction: 1 }), (r = n), 0 === S && !t)) {
        let e = u.A.getChannel(f.A.getVoiceChannelId());
        null != e && (0, h.A)(d.A) && (0, p.vz)(e, c.A, _.A, !1) && (0, o.XI)(e.getGuildId(), e.id, M());
    }
}
function G() {
    b = { lastPickerAction: 2 };
}
function V(e) {
    let { error: t } = e;
    b = { lastPickerAction: 3, lastPickerError: t };
}
function F(e) {
    let { style: t } = e;
    b = { lastPickerAction: 0, lastPresentedPickerStyle: t };
}
function B() {
    b = {};
}
let j = new k(s.h, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: U,
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: G,
    NATIVE_SCREEN_SHARE_PICKER_ERROR: V,
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: F,
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: B,
});
