n.d(t, { u: () => f }), n(35282), n(388685), n(49124);
var r = n(259443),
    i = n(544891),
    a = n(881052),
    o = n(131951),
    s = n(403182),
    l = n(579806),
    c = n(981631);
let u = new r.Yd('uploadRtcLogFiles');
function d(e, t) {
    let n = t.split('.'),
        r = n.length > 1 ? n.pop() : '',
        i = n.join('.'),
        a = ''.concat(i, '.').concat(r),
        o = 1;
    for (; e.has(a); ) (a = ''.concat(i, '_').concat(o, '.').concat(r)), (o += 1);
    return e.add(a), a;
}
async function f(e, t) {
    let n;
    if (null == l.Z.fileManager.readLogFiles) throw new a.n0(a.cz.GENERAL);
    let r = [];
    try {
        r = (r = await l.Z.fileManager.readLogFiles(e)).map((e) => (0, s.qF)(e, 'application/octet-stream'));
    } catch (e) {
        throw (u.error("uploadDebugFiles: read error '".concat(e, "'")), new a.n0(a.cz.READ));
    }
    if (0 === r.length) throw new a.n0(a.cz.NO_FILE);
    let f = {
            extraInfo: t,
            mediaEngineState: o.Z.getState()
        },
        _ = [
            ...r.map((e) => ({
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
        n = await i.tn.post({
            url: c.ANM.DEBUG_LOGS(c.GU0.RTC),
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
        throw (u.error('Debug log upload error: status: '.concat(e.status, ', message: ').concat(e.message)), new a.n0(a.cz.UPLOAD));
    }
    if ('success_count' in n.body && n.body.success_count !== _.length) throw (u.error('Debug log upload: stored files '.concat(n.body.success_count, ' !== ').concat(_.length)), new a.n0(a.cz.GENERAL));
    if (('store_success' in n.body && !n.body.store_success) || ('id_match' in n.body && !n.body.id_match) || ('all_success' in n.body && !n.body.all_success)) throw (u.error('Debug log upload: store_success: '.concat(n.body.store_success, ' / ') + 'id_match: '.concat(n.body.id_match, ' / ') + 'all_success: '.concat(n.body.all_success)), new a.n0(a.cz.GENERAL));
}
