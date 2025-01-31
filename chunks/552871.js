n.d(t, { u: () => f }), n(47120);
var i = n(259443),
    r = n(544891),
    a = n(881052),
    s = n(131951),
    o = n(403182),
    l = n(579806),
    u = n(981631);
let c = new i.Yd('uploadRtcLogFiles');
function d(e, t) {
    let n = t.split('.'),
        i = n.length > 1 ? n.pop() : '',
        r = n.join('.'),
        a = ''.concat(r, '.').concat(i),
        s = 1;
    for (; e.has(a); ) (a = ''.concat(r, '_').concat(s, '.').concat(i)), (s += 1);
    return e.add(a), a;
}
async function f(e, t) {
    let n;
    if (null == l.Z.fileManager.readLogFiles) throw new a.n0(a.cz.GENERAL);
    let i = [];
    try {
        i = (i = await l.Z.fileManager.readLogFiles(e)).map((e) => (0, o.qF)(e, 'application/octet-stream'));
    } catch (e) {
        throw (c.error("uploadDebugFiles: read error '".concat(e, "'")), new a.n0(a.cz.READ));
    }
    if (0 === i.length) throw new a.n0(a.cz.NO_FILE);
    let f = {
            extraInfo: t,
            mediaEngineState: s.Z.getState()
        },
        _ = [
            ...i.map((e) => ({
                name: e.name,
                file: e,
                filename: e.name
            })),
            {
                name: 'media_engine_state.json',
                filename: 'media_engine_state.json',
                file: new Blob([JSON.stringify(f, void 0, 2)])
            }
        ],
        p = new Set();
    try {
        n = await r.tn.post({
            url: u.ANM.DEBUG_LOGS(u.GU0.RTC),
            attachments: [
                ..._.map((e) => {
                    let t = d(p, e.name);
                    return {
                        name: t,
                        file: e.file,
                        filename: t
                    };
                })
            ],
            rejectWithError: !1
        });
    } catch (e) {
        if (429 === e.status) throw new a.n0(a.cz.PROGRESS);
        throw (c.error('Debug log upload error: status: '.concat(e.status, ', message: ').concat(e.message)), new a.n0(a.cz.UPLOAD));
    }
    if ('success_count' in n.body && n.body.success_count !== _.length) throw (c.error('Debug log upload: stored files '.concat(n.body.success_count, ' !== ').concat(_.length)), new a.n0(a.cz.GENERAL));
    if (('store_success' in n.body && !n.body.store_success) || ('id_match' in n.body && !n.body.id_match) || ('all_success' in n.body && !n.body.all_success)) throw (c.error('Debug log upload: store_success: '.concat(n.body.store_success, ' / ') + 'id_match: '.concat(n.body.id_match, ' / ') + 'all_success: '.concat(n.body.all_success)), new a.n0(a.cz.GENERAL));
}
