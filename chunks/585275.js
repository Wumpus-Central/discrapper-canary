let r;
n.d(t, { Z: () => B }), n(242167), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298), n(411104), n(773603);
var i = n(512722),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(544891),
    c = n(992774),
    u = n(649754),
    d = n(376398),
    f = n(846519),
    _ = n(570140),
    p = n(710845),
    h = n(695346),
    m = n(199902),
    g = n(314897),
    E = n(358085),
    b = n(998502),
    y = n(569545),
    v = n(70722),
    O = n(981631),
    I = n(65154);
let S = 300000,
    T = 60000,
    N = {},
    A = new f.V7(),
    C = !1,
    R = window.document.createElement('canvas'),
    P = 512,
    w = 288;
(R.width = 512), (R.height = w);
let D = R.getContext('2d');
function L() {
    A.stop(), null != r && (u.Z.removeSink(r, N), (r = null));
}
let x = s().debounce((e, t, n, r) => {
    k(
        e,
        (0, y.V9)({
            streamType: null != t ? v.lo.GUILD : v.lo.CALL,
            guildId: t,
            channelId: n,
            ownerId: r
        })
    );
}, 500);
function M(e) {
    let t = Math.min(P / e.width, w / e.height),
        n = e.width * t,
        r = e.height * t;
    (R.width = n), (R.height = r);
    let i = window.document.createElement('canvas'),
        o = i.getContext('2d');
    (i.width = e.width), (i.height = e.height);
    let a = new ImageData(e.data, e.width, e.height);
    return (
        null == o || o.putImageData(a, 0, 0),
        new Promise((t) => {
            null == D || D.drawImage(i, 0, 0, e.width, e.height, 0, 0, n, r), t();
        })
    );
}
async function k(e, t) {
    if (r !== e || ((0, E.isWeb)() && h.I0.getSetting()) || m.Z.getIsActiveStreamPreviewDisabled(t)) return;
    let n = () => k(e, t);
    if (!C)
        try {
            let n = await j(e, 60);
            await M(n);
            let r = R.toDataURL('image/jpeg');
            if (
                (_.Z.dispatch({
                    type: 'STREAM_PREVIEW_FETCH_SUCCESS',
                    streamKey: t,
                    previewURL: r
                }),
                E.isPlatformEmbedded)
            ) {
                let e = g.default.getToken();
                o()(null != e, 'Auth token was null while sending screenshot.'),
                    await b.ZP.makeChunkedRequest(
                        O.ANM.STREAM_PREVIEW(t),
                        { thumbnail: r },
                        {
                            method: 'POST',
                            token: e
                        }
                    );
            } else
                await l.tn.post({
                    url: O.ANM.STREAM_PREVIEW(t),
                    body: { thumbnail: r },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        } catch (t) {
            new p.Z('ApplicationStreamPreviewUploadManager').error('Failed to post stream preview', t), r === e && A.start(T, n);
            return;
        }
    r === e && (C ? A.start(T, n) : A.start(S, n));
}
function j(e, t) {
    let n = 0;
    return (E.isPlatformEmbedded ? G : U)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error('Timed out awaiting non-black frame after '.concat(t, ' frames'));
        return !1;
    });
}
function U(e, t) {
    let n = (0, d.aG)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: r, height: i } = n.getVideoTracks()[0].getSettings(),
        o = document.createElement('video'),
        a = document.createElement('canvas');
    (o.width = a.width = null != r ? r : P), (o.height = a.height = null != i ? i : w), (o.srcObject = n), o.play();
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
function G(e, t) {
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
            : u.Z.addSink(e, N, s);
    }).finally(() => {
        i || u.Z.removeSink(e, N);
    });
}
let B = {
    init() {
        _.Z.subscribe('CONNECTION_OPEN', L),
            _.Z.subscribe('LOGOUT', L),
            _.Z.subscribe('STREAM_DELETE', L),
            _.Z.subscribe('RTC_CONNECTION_VIDEO', (e) => {
                let { guildId: t, channelId: n, userId: i, streamId: o, context: a } = e;
                null == o || a !== I.Yn.STREAM || i !== g.default.getId() || __OVERLAY__ || (L(), (r = o), x(o, t, n, i));
            }),
            _.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t } = e;
                C = t === O.FQ1.PAUSED;
            });
    }
};
