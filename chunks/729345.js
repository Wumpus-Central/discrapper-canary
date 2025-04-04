n.d(t, { E: () => I }), n(26686);
var r = n(544891),
    i = n(668757),
    o = n(881052),
    a = n(552871),
    s = n(785141),
    l = n(283080),
    c = n(592125),
    u = n(569611),
    d = n(710845),
    f = n(104639),
    _ = n(202680),
    p = n(691895),
    h = n(889911),
    m = n(981631);
let g = 9437184,
    E = 14680064,
    b = new d.Z('DebugUploadManager'),
    y = null,
    v = null;
function O(e) {
    switch (e.code) {
        case o.cz.GENERAL:
            return s.Nk.UploadErrorGeneral;
        case o.cz.NO_FILE:
            return s.Nk.UploadErrorNoFile;
        case o.cz.PROGRESS:
            return s.Nk.UploadErrorProgress;
        case o.cz.UPLOAD:
            return s.Nk.UploadErrorUpload;
        case o.cz.READ:
            return s.Nk.UploadErrorRead;
        default:
            return;
    }
}
async function I(e, t) {
    try {
        await S(e), await (0, a.u)(E, t);
    } catch (t) {
        let e;
        throw (
            (t instanceof o.n0 && (e = O(t)),
            (0, s.kr)({
                type: s.u.DEBUG_LOG_UPLOAD_FAILED,
                underlyingError: e,
                errorMessage: t.message
            }),
            t)
        );
    }
}
async function S(e) {
    try {
        let n, o, a, s;
        try {
            n = u.Pz();
        } catch (e) {
            n = 'Logs failed: '.concat(e);
        }
        try {
            o = (null == y ? void 0 : y.getSystemLog) != null ? await new Promise((e) => y.getSystemLog(e)) : '';
        } catch (e) {
            o = 'System Logs failed '.concat(e);
        }
        try {
            a = await (0, _.Z)().then((e) => (0, h.Z)(e, !0));
        } catch (e) {
            a = 'Push logs failed: '.concat(e);
        }
        try {
            var t;
            s = null != (t = (0, i.AG)()) ? t : '';
        } catch (e) {
            s = 'LibDiscore logs failed: '.concat(e);
        }
        let d = n.length + o.length + a.length + s.length;
        if (d > g) {
            let e = 1 - g / d;
            (n = n.slice(n.length - Math.floor(n.length * e))), (o = o.slice(o.length - Math.floor(o.length * e))), (a = a.slice(a.length - Math.floor(a.length * e))), (s = s.slice(s.length - Math.floor(s.length * e)));
        }
        let E = (null == v ? void 0 : v.AppOpenedTimestamp) != null ? v.AppOpenedTimestamp : null,
            b = '\n    '
                .concat((0, p.Z)(E), '\n\n    ')
                .concat((0, l.EA)(), '\n\n    Metadata:\n    ')
                .concat(JSON.stringify((0, f.Z)(), void 0, 2), '\n\n    ChannelStore:\n    ')
                .concat(JSON.stringify(c.Z.getDebugInfo(), void 0, 2), '\n\n    Logs:\n    ')
                .concat(n, '\n\n    System logs:\n    ')
                .concat(o, '\n\n    LibDiscore logs:\n    ')
                .concat(s, '\n\n    Push Notifications:\n    ')
                .concat(a, '\n    ');
        u.ZH();
        let O = m.ANM.DEBUG_LOG(e, 'discord_app_logs');
        await r.tn.post({
            url: O,
            body: b,
            retries: 3,
            headers: { 'Content-Type': 'text/plain' },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    } catch (e) {
        b.error('uploadAppLogFiles: upload app log files error '.concat(e.message));
    }
}
