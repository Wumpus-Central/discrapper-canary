let r;
n.d(t, { Z: () => U }),
    n(259475),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(415506),
    n(457542);
var i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(544891),
    c = n(992774),
    u = n(376398),
    d = n(846519),
    f = n(570140),
    p = n(710845),
    _ = n(695346),
    m = n(199902),
    h = n(314897),
    g = n(358085),
    E = n(998502),
    b = n(569545),
    y = n(70722),
    O = n(981631),
    v = n(65154);
let S = 300000,
    I = 60000,
    T = new d.V7(),
    C = !1,
    A = window.document.createElement("canvas"),
    N = 512,
    P = 288;
(A.width = 512), (A.height = P);
let R = A.getContext("2d");
function w() {
    T.stop(), null != r && (r = null);
}
let D = s().debounce((e, t, n, r) => {
    L(
        e,
        (0, b.V9)({
            streamType: null != t ? y.lo.GUILD : y.lo.CALL,
            guildId: t,
            channelId: n,
            ownerId: r,
        }),
    );
}, 500);
function x(e) {
    let t = Math.min(N / e.width, P / e.height),
        n = e.width * t,
        r = e.height * t;
    (A.width = n), (A.height = r);
    let i = window.document.createElement("canvas"),
        a = i.getContext("2d");
    (i.width = e.width), (i.height = e.height);
    let o = new ImageData(e.data, e.width, e.height);
    null == a || a.putImageData(o, 0, 0), null == R || R.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r);
}
async function L(e, t) {
    if (r !== e || ((0, g.isWeb)() && _.I0.getSetting()) || m.Z.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => L(e, t);
    if (!C)
        try {
            let n = await j(e, 60);
            x(n);
            let r = A.toDataURL("image/jpeg");
            if (
                (f.Z.dispatch({
                    type: "STREAM_PREVIEW_FETCH_SUCCESS",
                    streamKey: t,
                    previewURL: r,
                }),
                g.isPlatformEmbedded)
            ) {
                let e = h.default.getToken();
                a()(null != e, "Auth token was null while sending screenshot."),
                    await E.ZP.makeChunkedRequest(
                        O.ANM.STREAM_PREVIEW(t),
                        { thumbnail: r },
                        {
                            method: "POST",
                            token: e,
                        },
                    );
            } else
                await l.tn.post({
                    url: O.ANM.STREAM_PREVIEW(t),
                    body: { thumbnail: r },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        } catch (t) {
            new p.Z("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t),
                r === e && T.start(I, n);
            return;
        }
    r === e && (C ? T.start(I, n) : T.start(S, n));
}
function j(e, t) {
    let n = 0;
    return (g.isPlatformEmbedded ? k : M)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
        return !1;
    });
}
function M(e, t) {
    let n = (0, u.aG)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
        a = document.createElement("video"),
        o = document.createElement("canvas");
    (a.width = o.width = null != r ? r : N), (a.height = o.height = null != i ? i : P), (a.srcObject = n), a.play();
    let s = o.getContext("2d");
    return new Promise((e, n) => {
        a.ontimeupdate = () => {
            null == s || s.drawImage(a, 0, 0, o.width, o.height);
            let r = null == s ? void 0 : s.getImageData(0, 0, o.width, o.height);
            try {
                null != r && t(r) && e(r);
            } catch (e) {
                n(e);
            }
        };
    }).finally(() => {
        (a.ontimeupdate = null), a.removeAttribute("srcObject"), a.load();
    });
}
function k(e, t) {
    let n = (0, c.zS)();
    return new Promise((i, a) => {
        let o = (e) => {
            try {
                null != e && t(e) && i(e);
            } catch (e) {
                a(e);
            }
        };
        n.getNextVideoOutputFrame(e).then(o, (t) => {
            if (r === e) throw t;
        });
    });
}
let U = {
    init() {
        f.Z.subscribe("CONNECTION_OPEN", w),
            f.Z.subscribe("LOGOUT", w),
            f.Z.subscribe("STREAM_DELETE", w),
            f.Z.subscribe("RTC_CONNECTION_VIDEO", (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: a, context: o } = e;
                null == a ||
                    o !== v.Yn.STREAM ||
                    i !== h.default.getId() ||
                    __OVERLAY__ ||
                    (w(), (r = a), D(a, t, n, i));
            }),
            f.Z.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t } = e;
                C = t === O.FQ1.PAUSED;
            });
    },
};
