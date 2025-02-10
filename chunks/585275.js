let i;
n.d(t, { Z: () => F }), n(242167), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(411104), n(773603);
var r = n(512722),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(544891),
    u = n(992774),
    c = n(649754),
    d = n(376398),
    f = n(846519),
    _ = n(570140),
    p = n(710845),
    h = n(977059),
    m = n(695346),
    g = n(199902),
    E = n(314897),
    v = n(358085),
    y = n(998502),
    I = n(569545),
    T = n(70722),
    b = n(981631),
    S = n(65154);
let A = 300000,
    N = 60000,
    C = {},
    R = new f.V7(),
    O = !1,
    D = window.document.createElement('canvas'),
    L = 512,
    x = 288;
(D.width = L), (D.height = x);
let w = D.getContext('2d');
function P() {
    R.stop(), null != i && (c.Z.removeSink(i, C), (i = null));
}
let M = o().debounce((e, t, n, i) => {
    U(
        e,
        (0, I.V9)({
            streamType: null != t ? T.lo.GUILD : T.lo.CALL,
            guildId: t,
            channelId: n,
            ownerId: i
        })
    );
}, 500);
function k(e) {
    let t = Math.min(L / e.width, x / e.height),
        n = e.width * t,
        i = e.height * t;
    (D.width = n), (D.height = i);
    let r = window.document.createElement('canvas'),
        a = r.getContext('2d');
    (r.width = e.width), (r.height = e.height);
    let s = new ImageData(e.data, e.width, e.height);
    return (
        null == a || a.putImageData(s, 0, 0),
        new Promise((t) => {
            null == w || w.drawImage(r, 0, 0, e.width, e.height, 0, 0, n, i), t();
        })
    );
}
async function U(e, t) {
    if (i !== e) return;
    let { enabled: n } = (0, h.R)({ location: 'uploadStreamPreviews' }),
        r = ((0, v.isWeb)() && m.I0.getSetting()) || g.Z.getIsActiveStreamPreviewDisabled(t);
    if (n && r) return;
    let s = () => U(e, t);
    if (!O)
        try {
            let n = await G(e, 60);
            await k(n);
            let i = D.toDataURL('image/jpeg');
            if (
                (_.Z.dispatch({
                    type: 'STREAM_PREVIEW_FETCH_SUCCESS',
                    streamKey: t,
                    previewURL: i
                }),
                v.isPlatformEmbedded)
            ) {
                let e = E.default.getToken();
                a()(null != e, 'Auth token was null while sending screenshot.'),
                    await y.ZP.makeChunkedRequest(
                        b.ANM.STREAM_PREVIEW(t),
                        { thumbnail: i },
                        {
                            method: 'POST',
                            token: e
                        }
                    );
            } else
                await l.tn.post({
                    url: b.ANM.STREAM_PREVIEW(t),
                    body: { thumbnail: i },
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
        } catch (t) {
            new p.Z('ApplicationStreamPreviewUploadManager').error('Failed to post stream preview', t), i === e && R.start(N, s);
            return;
        }
    i === e && (O ? R.start(N, s) : R.start(A, s));
}
function G(e, t) {
    let n = 0;
    return (v.isPlatformEmbedded ? Z : B)(e, (e) => {
        if (new Uint32Array(e.data.buffer).some((e) => 0 !== e)) return !0;
        if (++n > t) throw Error('Timed out awaiting non-black frame after '.concat(t, ' frames'));
        return !1;
    });
}
function B(e, t) {
    let n = (0, d.aG)(e);
    if (null == n) return Promise.resolve(new ImageData(0, 0));
    let { width: i, height: r } = n.getVideoTracks()[0].getSettings(),
        a = document.createElement('video'),
        s = document.createElement('canvas');
    (a.width = s.width = null != i ? i : L), (a.height = s.height = null != r ? r : x), (a.srcObject = n), a.play();
    let o = s.getContext('2d');
    return new Promise((e, n) => {
        a.ontimeupdate = () => {
            null == o || o.drawImage(a, 0, 0, s.width, s.height);
            let i = null == o ? void 0 : o.getImageData(0, 0, s.width, s.height);
            try {
                null != i && t(i) && e(i);
            } catch (e) {
                n(e);
            }
        };
    }).finally(() => {
        (a.ontimeupdate = null), a.removeAttribute('srcObject'), a.load();
    });
}
function Z(e, t) {
    let n = (0, u.zS)(),
        r = (null == n ? void 0 : n.getNextVideoOutputFrame) != null;
    return new Promise((a, s) => {
        let o = (e) => {
            try {
                null != e && t(e) && a(e);
            } catch (e) {
                s(e);
            }
        };
        r
            ? n.getNextVideoOutputFrame(e).then(o, (t) => {
                  if (i === e) throw t;
              })
            : c.Z.addSink(e, C, o);
    }).finally(() => {
        r || c.Z.removeSink(e, C);
    });
}
let F = {
    init() {
        _.Z.subscribe('CONNECTION_OPEN', P),
            _.Z.subscribe('LOGOUT', P),
            _.Z.subscribe('STREAM_DELETE', P),
            _.Z.subscribe('RTC_CONNECTION_VIDEO', (e) => {
                let { guildId: t, channelId: n, userId: r, streamId: a, context: s } = e;
                null == a || s !== S.Yn.STREAM || r !== E.default.getId() || __OVERLAY__ || (P(), (i = a), M(a, t, n, r));
            }),
            _.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t } = e;
                O = t === b.FQ1.PAUSED;
            });
    }
};
