let r;
n.d(t, { Z: () => Z }), n(242167), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298), n(411104), n(773603);
var i = n(512722),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(544891),
    c = n(992774),
    u = n(649754),
    d = n(376398),
    f = n(846519),
    p = n(570140),
    _ = n(710845),
    h = n(977059),
    m = n(695346),
    g = n(199902),
    E = n(314897),
    v = n(358085),
    b = n(998502),
    y = n(569545),
    O = n(70722),
    S = n(981631),
    I = n(65154);
let T = 300000,
    N = 60000,
    A = {},
    C = new f.V7(),
    R = !1,
    P = window.document.createElement('canvas'),
    w = 512,
    D = 288;
(P.width = w), (P.height = D);
let x = P.getContext('2d');
function L() {
    C.stop(), null != r && (u.Z.removeSink(r, A), (r = null));
}
let M = s().debounce((e, t, n, r) => {
    j(
        e,
        (0, y.V9)({
            streamType: null != t ? O.lo.GUILD : O.lo.CALL,
            guildId: t,
            channelId: n,
            ownerId: r
        })
    );
}, 500);
function k(e) {
    let t = Math.min(w / e.width, D / e.height),
        n = e.width * t,
        r = e.height * t;
    (P.width = n), (P.height = r);
    let i = window.document.createElement('canvas'),
        o = i.getContext('2d');
    (i.width = e.width), (i.height = e.height);
    let a = new ImageData(e.data, e.width, e.height);
    return (
        null == o || o.putImageData(a, 0, 0),
        new Promise((t) => {
            null == x || x.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r), t();
        })
    );
}
async function j(e, t) {
    if (r !== e) return;
    let { enabled: n } = (0, h.R)({ location: 'uploadStreamPreviews' }),
        i = ((0, v.isWeb)() && m.I0.getSetting()) || g.Z.getIsActiveStreamPreviewDisabled(t);
    if (n && i) return;
    let a = () => j(e, t);
    if (!R)
        try {
            let n = await U(e, 60);
            await k(n);
            let r = P.toDataURL('image/jpeg');
            if (
                (p.Z.dispatch({
                    type: 'STREAM_PREVIEW_FETCH_SUCCESS',
                    streamKey: t,
                    previewURL: r
                }),
                v.isPlatformEmbedded)
            ) {
                let e = E.default.getToken();
                o()(null != e, 'Auth token was null while sending screenshot.'),
                    await b.ZP.makeChunkedRequest(
                        S.ANM.STREAM_PREVIEW(t),
                        { thumbnail: r },
                        {
                            method: 'POST',
                            token: e
                        }
                    );
            } else
                await l.tn.post({
                    url: S.ANM.STREAM_PREVIEW(t),
                    body: { thumbnail: r },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        } catch (t) {
            new _.Z('ApplicationStreamPreviewUploadManager').error('Failed to post stream preview', t), r === e && C.start(N, a);
            return;
        }
    r === e && (R ? C.start(N, a) : C.start(T, a));
}
function U(e, t) {
    let n = 0;
    return (v.isPlatformEmbedded ? B : G)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error('Timed out awaiting non-black frame after '.concat(t, ' frames'));
        return !1;
    });
}
function G(e, t) {
    let n = (0, d.aG)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
        o = document.createElement('video'),
        a = document.createElement('canvas');
    (o.width = a.width = null != r ? r : w), (o.height = a.height = null != i ? i : D), (o.srcObject = n), o.play();
    let s = a.getContext('2d');
    return new Promise((e, n) => {
        o.ontimeupdate = () => {
            null == s || s.drawImage(o, 0, 0, a.width, a.height);
            let r = null == s ? void 0 : s.getImageData(0, 0, a.width, a.height);
            try {
                null != r && t(r) && e(r);
            } catch (e) {
                n(e);
            }
        };
    }).finally(() => {
        (o.ontimeupdate = null), o.removeAttribute('srcObject'), o.load();
    });
}
function B(e, t) {
    let n = (0, c.zS)(),
        i = (null == n ? void 0 : n.getNextVideoOutputFrame) != null;
    return new Promise((o, a) => {
        let s = (e) => {
            try {
                null != e && t(e) && o(e);
            } catch (e) {
                a(e);
            }
        };
        i
            ? n.getNextVideoOutputFrame(e).then(s, (t) => {
                  if (r === e) throw t;
              })
            : u.Z.addSink(e, A, s);
    }).finally(() => {
        i || u.Z.removeSink(e, A);
    });
}
let Z = {
    init() {
        p.Z.subscribe('CONNECTION_OPEN', L),
            p.Z.subscribe('LOGOUT', L),
            p.Z.subscribe('STREAM_DELETE', L),
            p.Z.subscribe('RTC_CONNECTION_VIDEO', (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: o, context: a } = e;
                null == o || a !== I.Yn.STREAM || i !== E.default.getId() || __OVERLAY__ || (L(), (r = o), M(o, t, n, i));
            }),
            p.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t } = e;
                R = t === S.FQ1.PAUSED;
            });
    }
};
