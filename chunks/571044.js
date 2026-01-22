let r;
n.d(t, {
    Ay: () => Y,
    JA: () => v,
    XA: () => x,
    jd: () => D,
});
var i,
    a = n(64700),
    s = n(311907),
    o = n(73153),
    l = n(401843),
    c = n(929921),
    u = n(734057),
    d = n(71393),
    f = n(430452),
    p = n(576705),
    _ = n(309010),
    h = n(279250),
    m = n(880144),
    g = n(934484),
    E = n(613235),
    b = n(997630),
    y = n(731854),
    O = n(985018);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var v = (function (e) {
    return (
        (e[(e.Present = 0)] = "Present"),
        (e[(e.Update = 1)] = "Update"),
        (e[(e.Cancel = 2)] = "Cancel"),
        (e[(e.Error = 3)] = "Error"),
        e
    );
})({});
let S = !1,
    I = 0,
    T = 0,
    C = !1,
    N = {};
function R() {
    return f.A.supports(y.O5.NATIVE_SCREENSHARE_PICKER);
}
function w() {
    return f.A.getUseSystemScreensharePicker();
}
function P() {
    let e = w() && (T > 0 || (S && 0 === I));
    if (e !== C) {
        var t, n;
        (C = e),
            null == (n = f.A.getMediaEngine()) ||
                null == (t = n.setNativeDesktopVideoSourcePickerActive) ||
                t.call(n, C);
    }
}
function D() {
    return (0, a.useEffect)(
        () => (
            I++,
            P(),
            () => {
                0 == --I && P();
            }
        ),
        [],
    );
}
function x() {
    return (0, a.useEffect)(
        () => (
            T++,
            P(),
            () => {
                --T, P();
            }
        ),
        [],
    );
}
function L() {
    let e = u.A.getChannel(_.A.getVoiceChannelId());
    return (S = null != e && (0, m.A)(f.A) && (0, h.vz)(e, d.A, p.A, !1)), P(), !1;
}
function j() {
    return null != r ? (0, E.A)(r) : null;
}
function M() {
    return null != r ? (0, g.A)(r) : null;
}
function k() {
    var e;
    let { soundshareEnabled: t } = c.A.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: N.lastPresentedPickerStyle,
        sourceName: null != (e = j()) ? e : O.intl.string(O.t.KKcy95),
        sound: t,
    };
}
class U extends (i = s.Ay.Store) {
    initialize() {
        this.syncWith([f.A, _.A, u.A, d.A, p.A], L), L();
    }
    supported() {
        return R();
    }
    enabled() {
        return w();
    }
    releasePickerStream() {
        (0, b.E)();
    }
    getPickerState() {
        return N;
    }
    getLastPickedContent() {
        return r;
    }
    getLastPickedContentTitle() {
        return j();
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
    if (((N = { lastPickerAction: 1 }), (r = n), 0 === I && !t)) {
        let e = u.A.getChannel(_.A.getVoiceChannelId());
        null != e && (0, m.A)(f.A) && (0, h.vz)(e, d.A, p.A, !1) && (0, l.XI)(e.getGuildId(), e.id, k());
    }
}
function V() {
    N = { lastPickerAction: 2 };
}
function F(e) {
    let { error: t } = e;
    N = {
        lastPickerAction: 3,
        lastPickerError: t,
    };
}
function B(e) {
    let { style: t } = e;
    N = {
        lastPickerAction: 0,
        lastPresentedPickerStyle: t,
    };
}
function H() {
    N = {};
}
A(U, "displayName", "NativeScreenSharePickerStore");
let Y = new U(o.h, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: G,
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: V,
    NATIVE_SCREEN_SHARE_PICKER_ERROR: F,
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: B,
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: H,
});
