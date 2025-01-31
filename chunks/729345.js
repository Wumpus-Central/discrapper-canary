n.d(t, { E: () => v });
var i = n(544891),
    r = n(552871),
    a = n(283080),
    s = n(592125),
    o = n(569611),
    l = n(710845),
    u = n(104639),
    c = n(202680),
    d = n(691895),
    f = n(889911),
    _ = n(981631);
let p = 9437184,
    h = 14680064,
    m = new l.Z('DebugUploadManager'),
    g = null,
    E = null;
async function v(e, t) {
    await y(e), await (0, r.u)(h, t);
}
async function y(e) {
    try {
        let t, n, r;
        try {
            t = o.Pz();
        } catch (e) {
            t = 'Logs failed: '.concat(e);
        }
        try {
            n = (null == g ? void 0 : g.getSystemLog) != null ? await new Promise((e) => g.getSystemLog(e)) : '';
        } catch (e) {
            n = 'System Logs failed '.concat(e);
        }
        try {
            r = await (0, c.Z)().then((e) => (0, f.Z)(e, !0));
        } catch (e) {
            r = 'Push logs failed: '.concat(e);
        }
        let l = t.length + n.length + r.length;
        if (l > p) {
            let e = 1 - p / l;
            (t = t.slice(t.length - Math.floor(t.length * e))), (n = n.slice(n.length - Math.floor(n.length * e))), (r = r.slice(r.length - Math.floor(r.length * e)));
        }
        let h = (null == E ? void 0 : E.AppOpenedTimestamp) != null ? E.AppOpenedTimestamp : null,
            m = '\n    '
                .concat((0, d.Z)(h), '\n\n    ')
                .concat((0, a.EA)(), '\n\n    Metadata:\n    ')
                .concat(JSON.stringify((0, u.Z)(), void 0, 2), '\n\n    ChannelStore:\n    ')
                .concat(JSON.stringify(s.Z.getDebugInfo(), void 0, 2), '\n\n    Logs:\n    ')
                .concat(t, '\n\n    System logs:\n    ')
                .concat(n, '\n\n    Push Notifications:\n    ')
                .concat(r, '\n    ');
        o.ZH();
        let v = _.ANM.DEBUG_LOG(e, 'discord_app_logs');
        await i.tn.post({
            url: v,
            body: m,
            retries: 3,
            headers: { 'Content-Type': 'text/plain' },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    } catch (e) {
        m.error('uploadAppLogFiles: upload app log files error '.concat(e.message));
    }
}
