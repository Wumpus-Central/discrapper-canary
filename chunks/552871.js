r.d(n, {
    u: function () {
        return h;
    }
});
var i = r(47120);
var a = r(259443),
    o = r(544891),
    s = r(881052),
    l = r(131951),
    u = r(403182),
    c = r(579806),
    d = r(981631);
let f = new a.Yd('uploadRtcLogFiles');
function p(e, n) {
    let r = n.split('.'),
        i = r.length > 1 ? r.pop() : '',
        a = r.join('.'),
        o = ''.concat(a, '.').concat(i),
        s = 1;
    for (; e.has(o); ) (o = ''.concat(a, '_').concat(s, '.').concat(i)), (s += 1);
    return e.add(o), o;
}
async function h(e, n) {
    let r;
    if (null == c.Z.fileManager.readLogFiles) throw new s.n0(s.cz.GENERAL);
    let i = [];
    try {
        i = (i = await c.Z.fileManager.readLogFiles(e)).map((e) => (0, u.qF)(e, 'application/octet-stream'));
    } catch (e) {
        throw (f.error("uploadDebugFiles: read error '".concat(e, "'")), new s.n0(s.cz.READ));
    }
    if (0 === i.length) throw new s.n0(s.cz.NO_FILE);
    let a = {
            extraInfo: n,
            mediaEngineState: l.Z.getState()
        },
        h = [
            ...i.map((e) => ({
                name: e.name,
                file: e,
                filename: e.name
            })),
            {
                name: 'media_engine_state.json',
                filename: 'media_engine_state.json',
                file: new Blob([JSON.stringify(a, void 0, 2)])
            }
        ],
        _ = new Set();
    try {
        r = await o.tn.post({
            url: d.ANM.DEBUG_LOGS(d.GU0.RTC),
            attachments: [
                ...h.map((e) => {
                    let n = p(_, e.name);
                    return {
                        name: n,
                        file: e.file,
                        filename: n
                    };
                })
            ],
            rejectWithError: !1
        });
    } catch (e) {
        if (429 === e.status) throw new s.n0(s.cz.PROGRESS);
        throw (f.error('Debug log upload error: status: '.concat(e.status, ', message: ').concat(e.message)), new s.n0(s.cz.UPLOAD));
    }
    if ('success_count' in r.body && r.body.success_count !== h.length) throw (f.error('Debug log upload: stored files '.concat(r.body.success_count, ' !== ').concat(h.length)), new s.n0(s.cz.GENERAL));
    if (('store_success' in r.body && !r.body.store_success) || ('id_match' in r.body && !r.body.id_match) || ('all_success' in r.body && !r.body.all_success)) throw (f.error('Debug log upload: store_success: '.concat(r.body.store_success, ' / ') + 'id_match: '.concat(r.body.id_match, ' / ') + 'all_success: '.concat(r.body.all_success)), new s.n0(s.cz.GENERAL));
}
