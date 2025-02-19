n.d(t, { E: () => y }), n(26686);
var r = n(544891),
    i = n(881052),
    o = n(552871),
    a = n(785141),
    s = n(283080),
    l = n(592125),
    c = n(569611),
    u = n(710845),
    d = n(104639),
    f = n(202680),
    p = n(691895),
    _ = n(889911),
    h = n(981631);
let m = 9437184,
    g = 14680064,
    E = new u.Z('DebugUploadManager'),
    v = null,
    b = null;
async function y(e, t) {
    try {
        await O(e), await (0, o.u)(g, t);
    } catch (t) {
        let e;
        throw (
            (t instanceof i.n0 && (e = 'UploadErrorCodes.'.concat(i.cz[t.code])),
            (0, a.kr)(a.u.DEBUG_LOG_UPLOAD_FAILED, {
                underlyingError: e,
                errorMessage: t.message
            }),
            t)
        );
    }
}
async function O(e) {
    try {
        let t, n, i;
        try {
            t = c.Pz();
        } catch (e) {
            t = 'Logs failed: '.concat(e);
        }
        try {
            n = (null == v ? void 0 : v.getSystemLog) != null ? await new Promise((e) => v.getSystemLog(e)) : '';
        } catch (e) {
            n = 'System Logs failed '.concat(e);
        }
        try {
            i = await (0, f.Z)().then((e) => (0, _.Z)(e, !0));
        } catch (e) {
            i = 'Push logs failed: '.concat(e);
        }
        let o = t.length + n.length + i.length;
        if (o > m) {
            let e = 1 - m / o;
            (t = t.slice(t.length - Math.floor(t.length * e))), (n = n.slice(n.length - Math.floor(n.length * e))), (i = i.slice(i.length - Math.floor(i.length * e)));
        }
        let a = (null == b ? void 0 : b.AppOpenedTimestamp) != null ? b.AppOpenedTimestamp : null,
            u = '\n    '
                .concat((0, p.Z)(a), '\n\n    ')
                .concat((0, s.EA)(), '\n\n    Metadata:\n    ')
                .concat(JSON.stringify((0, d.Z)(), void 0, 2), '\n\n    ChannelStore:\n    ')
                .concat(JSON.stringify(l.Z.getDebugInfo(), void 0, 2), '\n\n    Logs:\n    ')
                .concat(t, '\n\n    System logs:\n    ')
                .concat(n, '\n\n    Push Notifications:\n    ')
                .concat(i, '\n    ');
        c.ZH();
        let g = h.ANM.DEBUG_LOG(e, 'discord_app_logs');
        await r.tn.post({
            url: g,
            body: u,
            retries: 3,
            headers: { 'Content-Type': 'text/plain' },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    } catch (e) {
        E.error('uploadAppLogFiles: upload app log files error '.concat(e.message));
    }
}
