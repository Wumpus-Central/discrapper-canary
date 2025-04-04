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
var r = n(763472),
    i = n(726542),
    o = n(594190),
    a = n(70956),
    s = n(781518),
    l = n(18323),
    c = n(768419),
    u = n(616922),
    d = n(981631);
let f = 30 * a.Z.Millis.SECOND;
function _(e) {
    return null != e.getActiveSocketAndDevice() || l.Z.isProtocolRegistered();
}
function p() {
    let e = c.Z.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!l.Z.isProtocolRegistered()) return Promise.reject(Error('protocol is not registered'));
    let t = c.Z.getPlayableComputerDevices();
    if (o.ZP.isObservedAppRunning(i.Z.get(d.ABu.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (
            (0, s.Tu)(e.accountId, n.id),
            Promise.resolve({
                socket: e,
                device: n
            })
        );
    }
    return new Promise((e, n) => {
        let r = setTimeout(() => {
                c.Z.removeChangeListener(i), n(Error('timeout launching spotify'));
            }, f),
            i = () => {
                for (let { socket: n, device: o } of c.Z.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === o.id) &&
                        (clearTimeout(r),
                        c.Z.removeChangeListener(i),
                        setImmediate(() => {
                            (0, s.Tu)(n.accountId, o.id),
                                e({
                                    socket: n,
                                    device: o
                                });
                        }));
            };
        c.Z.addChangeListener(i), window.open(''.concat(u.M5, ':'));
    });
}
function h() {
    let e = c.Z.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function m() {
    let e = c.Z.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error('no active profile'));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, s.Ai)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error('spotify account is not premium'));
          });
}
function g(e) {
    if ('string' == typeof e) return e;
    throw Error('value is not a string');
}
async function E(e, t) {
    var n;
    let i = await (0, r.sd)(e, t),
        o = (0, u.c8)(g(null != (n = i.type) ? n : u.Hw.TRACK));
    if (null === o) throw Error('invalid type '.concat(i.type));
    return {
        context_uri: 'string' == typeof i.context_uri ? i.context_uri : void 0,
        album_id: g(i.album_id),
        artist_ids: Array.isArray(i.artist_ids) ? i.artist_ids.map(g) : [],
        type: o,
        button_urls: Array.isArray(i.button_urls) ? i.button_urls.map(g) : []
    };
}
