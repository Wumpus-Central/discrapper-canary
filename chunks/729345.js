r.d(n, {
    E: function () {
        return y;
    }
});
var i = r(544891),
    a = r(552871),
    o = r(283080),
    s = r(592125),
    l = r(569611),
    u = r(710845),
    c = r(104639),
    d = r(202680),
    f = r(691895),
    p = r(889911),
    h = r(981631);
let _ = 9437184,
    m = 14680064,
    g = new u.Z('DebugUploadManager'),
    E = null,
    v = null;
async function y(e, n) {
    await b(e), await (0, a.u)(m, n);
}
async function b(e) {
    try {
        let n, r, a;
        try {
            n = l.Pz();
        } catch (e) {
            n = 'Logs failed: '.concat(e);
        }
        try {
            r = (null == E ? void 0 : E.getSystemLog) != null ? await new Promise((e) => E.getSystemLog(e)) : '';
        } catch (e) {
            r = 'System Logs failed '.concat(e);
        }
        try {
            a = await (0, d.Z)().then((e) => (0, p.Z)(e, !0));
        } catch (e) {
            a = 'Push logs failed: '.concat(e);
        }
        let u = n.length + r.length + a.length;
        if (u > _) {
            let e = 1 - _ / u;
            (n = n.slice(n.length - Math.floor(n.length * e))), (r = r.slice(r.length - Math.floor(r.length * e))), (a = a.slice(a.length - Math.floor(a.length * e)));
        }
        let m = (null == v ? void 0 : v.AppOpenedTimestamp) != null ? v.AppOpenedTimestamp : null,
            g = '\n    '
                .concat((0, f.Z)(m), '\n\n    ')
                .concat((0, o.EA)(), '\n\n    Metadata:\n    ')
                .concat(JSON.stringify((0, c.Z)(), void 0, 2), '\n\n    ChannelStore:\n    ')
                .concat(JSON.stringify(s.Z.getDebugInfo(), void 0, 2), '\n\n    Logs:\n    ')
                .concat(n, '\n\n    System logs:\n    ')
                .concat(r, '\n\n    Push Notifications:\n    ')
                .concat(a, '\n    ');
        l.ZH();
        let y = h.ANM.DEBUG_LOG(e, 'discord_app_logs');
        await i.tn.post({
            url: y,
            body: g,
            retries: 3,
            headers: { 'Content-Type': 'text/plain' },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    } catch (e) {
        g.error('uploadAppLogFiles: upload app log files error '.concat(e.message));
    }
}
