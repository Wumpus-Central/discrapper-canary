n.d(t, {
    KV: () => p,
    PY: () => _,
    Wo: () => h,
    iy: () => E,
    yp: () => m
}),
    n(411104),
    n(177593),
    n(47120);
var i = n(763472),
    r = n(726542),
    a = n(594190),
    s = n(70956),
    o = n(781518),
    l = n(18323),
    u = n(768419),
    c = n(616922),
    d = n(981631);
let f = 30 * s.Z.Millis.SECOND;
function _(e) {
    return null != e.getActiveSocketAndDevice() || l.Z.isProtocolRegistered();
}
function p() {
    let e = u.Z.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!l.Z.isProtocolRegistered()) return Promise.reject(Error('protocol is not registered'));
    let t = u.Z.getPlayableComputerDevices();
    if (a.ZP.isObservedAppRunning(r.Z.get(d.ABu.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (
            (0, o.Tu)(e.accountId, n.id),
            Promise.resolve({
                socket: e,
                device: n
            })
        );
    }
    return new Promise((e, n) => {
        let i = setTimeout(() => {
                u.Z.removeChangeListener(r), n(Error('timeout launching spotify'));
            }, f),
            r = () => {
                for (let { socket: n, device: a } of u.Z.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === a.id) &&
                        (clearTimeout(i),
                        u.Z.removeChangeListener(r),
                        setImmediate(() => {
                            (0, o.Tu)(n.accountId, a.id),
                                e({
                                    socket: n,
                                    device: a
                                });
                        }));
            };
        u.Z.addChangeListener(r), window.open(''.concat(c.M5, ':'));
    });
}
function h() {
    let e = u.Z.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function m() {
    let e = u.Z.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error('no active profile'));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, o.Ai)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error('spotify account is not premium'));
          });
}
function g(e) {
    if ('string' == typeof e) return e;
    throw Error('value is not a string');
}
async function E(e, t) {
    var n;
    let r = await (0, i.sd)(e, t),
        a = (0, c.c8)(g(null !== (n = r.type) && void 0 !== n ? n : c.Hw.TRACK));
    if (null === a) throw Error('invalid type '.concat(r.type));
    return {
        context_uri: 'string' == typeof r.context_uri ? r.context_uri : void 0,
        album_id: g(r.album_id),
        artist_ids: Array.isArray(r.artist_ids) ? r.artist_ids.map(g) : [],
        type: a,
        button_urls: Array.isArray(r.button_urls) ? r.button_urls.map(g) : []
    };
}
