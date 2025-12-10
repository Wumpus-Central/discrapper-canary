let r;
n.d(t, { Z: () => Z }),
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
    u = n(649754),
    d = n(376398),
    f = n(846519),
    p = n(570140),
    _ = n(710845),
    m = n(695346),
    h = n(199902),
    g = n(314897),
    E = n(358085),
    b = n(998502),
    y = n(569545),
    O = n(70722),
    v = n(981631),
    S = n(65154);
let I = 300000,
    T = 60000,
    C = {},
    A = new f.V7(),
    N = !1,
    P = window.document.createElement("canvas"),
    R = 512,
    D = 288;
(P.width = 512), (P.height = D);
let w = P.getContext("2d");
function x() {
    A.stop(), null != r && (u.Z.removeSink(r, C), (r = null));
}
let L = s().debounce((e, t, n, r) => {
    M(
        e,
        (0, y.V9)({
            streamType: null != t ? O.lo.GUILD : O.lo.CALL,
            guildId: t,
            channelId: n,
            ownerId: r,
        }),
    );
}, 500);
function j(e) {
    let t = Math.min(R / e.width, D / e.height),
        n = e.width * t,
        r = e.height * t;
    (P.width = n), (P.height = r);
    let i = window.document.createElement("canvas"),
        a = i.getContext("2d");
    (i.width = e.width), (i.height = e.height);
    let o = new ImageData(e.data, e.width, e.height);
    return (
        null == a || a.putImageData(o, 0, 0),
        new Promise((t) => {
            null == w || w.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r), t();
        })
    );
}
async function M(e, t) {
    if (r !== e || ((0, E.isWeb)() && m.I0.getSetting()) || h.Z.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => M(e, t);
    if (!N)
        try {
            let n = await k(e, 60);
            await j(n);
            let r = P.toDataURL("image/jpeg");
            if (
                (p.Z.dispatch({
                    type: "STREAM_PREVIEW_FETCH_SUCCESS",
                    streamKey: t,
                    previewURL: r,
                }),
                E.isPlatformEmbedded)
            ) {
                let e = g.default.getToken();
                a()(null != e, "Auth token was null while sending screenshot."),
                    await b.ZP.makeChunkedRequest(
                        v.ANM.STREAM_PREVIEW(t),
                        { thumbnail: r },
                        {
                            method: "POST",
                            token: e,
                        },
                    );
            } else
                await l.tn.post({
                    url: v.ANM.STREAM_PREVIEW(t),
                    body: { thumbnail: r },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        } catch (t) {
            new _.Z("ApplicationStreamPreviewUploadManager").error("Failed to post stream preview", t),
                r === e && A.start(T, n);
            return;
        }
    r === e && (N ? A.start(T, n) : A.start(I, n));
}
function k(e, t) {
    let n = 0;
    return (E.isPlatformEmbedded ? G : U)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error("Timed out awaiting non-black frame after ".concat(t, " frames"));
        return !1;
    });
}
function U(e, t) {
    let n = (0, d.aG)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
        a = document.createElement("video"),
        o = document.createElement("canvas");
    (a.width = o.width = null != r ? r : R), (a.height = o.height = null != i ? i : D), (a.srcObject = n), a.play();
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
function G(e, t) {
    let n = (0, c.zS)(),
        i = (null == n ? void 0 : n.getNextVideoOutputFrame) != null;
    return new Promise((a, o) => {
        let s = (e) => {
            try {
                null != e && t(e) && a(e);
            } catch (e) {
                o(e);
            }
        };
        i
            ? n.getNextVideoOutputFrame(e).then(s, (t) => {
                  if (r === e) throw t;
              })
            : u.Z.addSink(e, C, s);
    }).finally(() => {
        i || u.Z.removeSink(e, C);
    });
}
let Z = {
    init() {
        p.Z.subscribe("CONNECTION_OPEN", x),
            p.Z.subscribe("LOGOUT", x),
            p.Z.subscribe("STREAM_DELETE", x),
            p.Z.subscribe("RTC_CONNECTION_VIDEO", (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: a, context: o } = e;
                null == a ||
                    o !== S.Yn.STREAM ||
                    i !== g.default.getId() ||
                    __OVERLAY__ ||
                    (x(), (r = a), L(a, t, n, i));
            }),
            p.Z.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t } = e;
                N = t === v.FQ1.PAUSED;
            });
    },
};
