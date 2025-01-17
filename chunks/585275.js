let i;
var a = r(242167);
var s = r(970173);
var o = r(520712);
var l = r(268111);
var u = r(941497);
var c = r(32026);
var d = r(480839);
var f = r(744285);
var _ = r(492257);
var h = r(873817);
var p = r(411104);
var m = r(773603);
var g = r(512722),
    E = r.n(g),
    v = r(392711),
    I = r.n(v),
    T = r(544891),
    b = r(992774),
    y = r(649754),
    S = r(376398),
    A = r(846519),
    N = r(570140),
    C = r(710845),
    R = r(977059),
    O = r(695346),
    D = r(199902),
    L = r(314897),
    x = r(358085),
    w = r(998502),
    P = r(569545),
    M = r(70722),
    k = r(981631),
    U = r(65154);
let B = 300000,
    G = 60000,
    Z = {},
    F = new A.V7(),
    V = !1,
    j = window.document.createElement('canvas'),
    H = 512,
    Y = 288;
(j.width = H), (j.height = Y);
let W = j.getContext('2d');
function K() {
    F.stop(), null != i && (y.Z.removeSink(i, Z), (i = null));
}
let z = I().debounce((e, n, r, i) => {
    Q(
        e,
        (0, P.V9)({
            streamType: null != n ? M.lo.GUILD : M.lo.CALL,
            guildId: n,
            channelId: r,
            ownerId: i
        })
    );
}, 500);
function q(e) {
    let n = H / e.width,
        r = Math.min(n, Y / e.height),
        i = e.width * r,
        a = e.height * r;
    (j.width = i), (j.height = a);
    let s = window.document.createElement('canvas'),
        o = s.getContext('2d');
    (s.width = e.width), (s.height = e.height);
    let l = new ImageData(e.data, e.width, e.height);
    return (
        null == o || o.putImageData(l, 0, 0),
        new Promise((n) => {
            null == W || W.drawImage(s, 0, 0, e.width, e.height, 0, 0, i, a), n();
        })
    );
}
async function Q(e, n) {
    if (i !== e) return;
    let { enabled: r } = (0, R.R)({ location: 'uploadStreamPreviews' }),
        a = ((0, x.isWeb)() && O.I0.getSetting()) || D.Z.getIsActiveStreamPreviewDisabled(n);
    if (r && a) return;
    let s = () => Q(e, n);
    if (!V)
        try {
            let r = await X(e, 60);
            await q(r);
            let i = j.toDataURL('image/jpeg');
            if (
                (N.Z.dispatch({
                    type: 'STREAM_PREVIEW_FETCH_SUCCESS',
                    streamKey: n,
                    previewURL: i
                }),
                x.isPlatformEmbedded)
            ) {
                let e = L.default.getToken();
                E()(null != e, 'Auth token was null while sending screenshot.'),
                    await w.ZP.makeChunkedRequest(
                        k.ANM.STREAM_PREVIEW(n),
                        { thumbnail: i },
                        {
                            method: 'POST',
                            token: e
                        }
                    );
            } else
                await T.tn.post({
                    url: k.ANM.STREAM_PREVIEW(n),
                    body: { thumbnail: i },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        } catch (n) {
            new C.Z('ApplicationStreamPreviewUploadManager').error('Failed to post stream preview', n), i === e && F.start(G, s);
            return;
        }
    i === e && (V ? F.start(G, s) : F.start(B, s));
}
function X(e, n) {
    let r = 0;
    return (x.isPlatformEmbedded ? $ : J)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++r > n) throw Error('Timed out awaiting non-black frame after '.concat(n, ' frames'));
        return !1;
    });
}
function J(e, n) {
    let r = (0, S.aG)(e);
    if (null == r) return Promise.resolve(new ImageData(0, 0));
    let { width: i, height: a } = r.getVideoTracks()[0].getSettings(),
        s = document.createElement('video'),
        o = document.createElement('canvas');
    (s.width = o.width = null != i ? i : H), (s.height = o.height = null != a ? a : Y), (s.srcObject = r), s.play();
    let l = o.getContext('2d');
    return new Promise((e, r) => {
        s.ontimeupdate = () => {
            null == l || l.drawImage(s, 0, 0, o.width, o.height);
            let i = null == l ? void 0 : l.getImageData(0, 0, o.width, o.height);
            try {
                null != i && n(i) && e(i);
            } catch (e) {
                r(e);
            }
        };
    }).finally(() => {
        (s.ontimeupdate = null), s.removeAttribute('srcObject'), s.load();
    });
}
function $(e, n) {
    let r = (0, b.zS)(),
        a = (null == r ? void 0 : r.getNextVideoOutputFrame) != null;
    return new Promise((s, o) => {
        let l = (e) => {
            try {
                null != e && n(e) && s(e);
            } catch (e) {
                o(e);
            }
        };
        a
            ? r.getNextVideoOutputFrame(e).then(l, (n) => {
                  if (i === e) throw n;
              })
            : y.Z.addSink(e, Z, l);
    }).finally(() => {
        !a && y.Z.removeSink(e, Z);
    });
}
n.Z = {
    init() {
        N.Z.subscribe('CONNECTION_OPEN', K),
            N.Z.subscribe('LOGOUT', K),
            N.Z.subscribe('STREAM_DELETE', K),
            N.Z.subscribe('RTC_CONNECTION_VIDEO', (e) => {
                let { guildId: n, channelId: r, userId: a, streamId: s, context: o } = e;
                !(null == s || o !== U.Yn.STREAM || a !== L.default.getId() || __OVERLAY__) && (K(), (i = s), z(s, n, r, a));
            }),
            N.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: n } = e;
                V = n === k.FQ1.PAUSED || !1;
            });
    }
};
