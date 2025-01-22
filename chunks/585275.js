let i;
var a = r(242167);
var o = r(970173);
var s = r(520712);
var l = r(268111);
var u = r(941497);
var c = r(32026);
var d = r(480839);
var f = r(744285);
var p = r(492257);
var h = r(873817);
var _ = r(411104);
var m = r(773603);
var g = r(512722),
    E = r.n(g),
    v = r(392711),
    y = r.n(v),
    b = r(544891),
    I = r(992774),
    T = r(649754),
    S = r(376398),
    A = r(846519),
    C = r(570140),
    N = r(710845),
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
    F.stop(), null != i && (T.Z.removeSink(i, Z), (i = null));
}
let z = y().debounce((e, n, r, i) => {
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
    let o = window.document.createElement('canvas'),
        s = o.getContext('2d');
    (o.width = e.width), (o.height = e.height);
    let l = new ImageData(e.data, e.width, e.height);
    return (
        null == s || s.putImageData(l, 0, 0),
        new Promise((n) => {
            null == W || W.drawImage(o, 0, 0, e.width, e.height, 0, 0, i, a), n();
        })
    );
}
async function Q(e, n) {
    if (i !== e) return;
    let { enabled: r } = (0, R.R)({ location: 'uploadStreamPreviews' }),
        a = ((0, x.isWeb)() && O.I0.getSetting()) || D.Z.getIsActiveStreamPreviewDisabled(n);
    if (r && a) return;
    let o = () => Q(e, n);
    if (!V)
        try {
            let r = await X(e, 60);
            await q(r);
            let i = j.toDataURL('image/jpeg');
            if (
                (C.Z.dispatch({
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
                await b.tn.post({
                    url: k.ANM.STREAM_PREVIEW(n),
                    body: { thumbnail: i },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        } catch (n) {
            new N.Z('ApplicationStreamPreviewUploadManager').error('Failed to post stream preview', n), i === e && F.start(G, o);
            return;
        }
    i === e && (V ? F.start(G, o) : F.start(B, o));
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
        o = document.createElement('video'),
        s = document.createElement('canvas');
    (o.width = s.width = null != i ? i : H), (o.height = s.height = null != a ? a : Y), (o.srcObject = r), o.play();
    let l = s.getContext('2d');
    return new Promise((e, r) => {
        o.ontimeupdate = () => {
            null == l || l.drawImage(o, 0, 0, s.width, s.height);
            let i = null == l ? void 0 : l.getImageData(0, 0, s.width, s.height);
            try {
                null != i && n(i) && e(i);
            } catch (e) {
                r(e);
            }
        };
    }).finally(() => {
        (o.ontimeupdate = null), o.removeAttribute('srcObject'), o.load();
    });
}
function $(e, n) {
    let r = (0, I.zS)(),
        a = (null == r ? void 0 : r.getNextVideoOutputFrame) != null;
    return new Promise((o, s) => {
        let l = (e) => {
            try {
                null != e && n(e) && o(e);
            } catch (e) {
                s(e);
            }
        };
        a
            ? r.getNextVideoOutputFrame(e).then(l, (n) => {
                  if (i === e) throw n;
              })
            : T.Z.addSink(e, Z, l);
    }).finally(() => {
        !a && T.Z.removeSink(e, Z);
    });
}
n.Z = {
    init() {
        C.Z.subscribe('CONNECTION_OPEN', K),
            C.Z.subscribe('LOGOUT', K),
            C.Z.subscribe('STREAM_DELETE', K),
            C.Z.subscribe('RTC_CONNECTION_VIDEO', (e) => {
                let { guildId: n, channelId: r, userId: a, streamId: o, context: s } = e;
                !(null == o || s !== U.Yn.STREAM || a !== L.default.getId() || __OVERLAY__) && (K(), (i = o), z(o, n, r, a));
            }),
            C.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: n } = e;
                V = n === k.FQ1.PAUSED || !1;
            });
    }
};
