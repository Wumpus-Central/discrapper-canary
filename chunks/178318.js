let r, i;
n.d(t, { Z: () => x }), n(49124), n(388685), n(35282), n(65234), n(111804), n(490233), n(97749), n(539854), n(415506);
var l = n(836560),
    a = n(392711),
    o = n.n(a),
    s = n(570140),
    c = n(710845),
    u = n(857192),
    d = n(591759),
    p = n(998502),
    h = n(996106),
    f = n(901077),
    g = n(76238),
    m = n(852926),
    b = n(186901),
    _ = n(981631),
    E = n(413135).Buffer;
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
try {
    r = p.ZP.requireModule('discord_erlpack');
} catch (e) {
    try {
        r = p.ZP.requireModule('erlpack');
    } catch (e) {}
}
let y = p.ZP.requireModule('discord_rpc').RPCWebSocket,
    I = window.GLOBAL_ENV.MARKETING_ENDPOINT,
    v = new c.Z('RPCServer:WSS'),
    C = [];
function S(e) {
    return 'function' == typeof e ? e() : e;
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t =
            e > 0
                ? void 0
                : () => {
                      if (!S(i.listening)) return;
                      let e = i.address().port;
                      v.info('Starting on '.concat(e)),
                          s.Z.dispatch({
                              type: 'RPC_SERVER_READY',
                              port: e
                          });
                  };
    i.listen(_.V6Z + (e % _.frH), '127.0.0.1', t);
}
function T(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        l =
            null != S(e.headers).origin
                ? {
                      'Access-Control-Allow-Origin': S(e.headers).origin,
                      'Access-Control-Allow-Credentials': 'true',
                      'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, DELETE',
                      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                  }
                : {};
    (n = n ? JSON.stringify(n) : ''),
        (r = 200 === r && 0 === n.length ? 204 : r),
        t.setHeader('Content-Length', E.byteLength(n).toString()),
        t.setHeader('Content-Type', 'application/json'),
        t.writeHead(
            r,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            O(e, t, n[t]);
                        });
                }
                return e;
            })({}, i, l)
        ),
        t.end(n);
}
function P(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    T(
        e,
        t,
        {
            code: i,
            message: r
        },
        n
    );
}
class j extends g.Z {
    send(e) {
        (u.default.isLoggingOverlayEvents || (e.cmd !== _.Etm.OVERLAY && e.evt !== _.zMe.OVERLAY)) && v.info('Socket Emit: '.concat(this.id), (0, f.Z)(e)), null != r && 'etf' === this.encoding ? this._socket.send(r.pack(e), { binary: !0 }) : this._socket.send(JSON.stringify(e));
    }
    close(e, t) {
        this._socket.close(e, t);
    }
    constructor(e, t, n) {
        if ((super('ws', t, n), O(this, '_socket', void 0), -1 === ['etf', 'json'].indexOf(n))) throw new h.Z({ closeCode: _.$VG.INVALID_ENCODING }, 'Invalid Encoding: '.concat(n));
        if ('etf' === n && null == r) throw new h.Z({ closeCode: _.$VG.INVALID_ENCODING }, 'Erlpack cannot be used on this client');
        this._socket = e;
    }
}
class A extends g.Z {
    send(e) {
        (u.default.isLoggingOverlayEvents || e.cmd !== _.Etm.OVERLAY) && v.info('Socket Emit: '.concat(this.id), e), this._sendCallback(e);
    }
    close(e, t) {
        this._closeCallback(t, e);
    }
    constructor(e, t, n, r) {
        if ((super('http', n, r), O(this, '_sendCallback', void 0), O(this, '_closeCallback', void 0), 'json' !== r)) throw new h.Z({ closeCode: _.$VG.INVALID_ENCODING }, 'Invalid Encoding: '.concat(r));
        (this._sendCallback = e), (this._closeCallback = t);
    }
}
class Z extends l.EventEmitter {
    handleRequest(e, t) {
        let [n, r] = S(e.url).split('?'),
            i = S(e.method);
        if ('/rpc' === n && 'OPTIONS' === i) return void T(e, t, { body: '' });
        let l = 'POST' === i;
        if ('/rpc' === n && ('GET' === i || l)) {
            let n = new URLSearchParams(r),
                i = l ? S(e.headers)['content-type'].split('/')[1] : 'json',
                o = function () {
                    var e, r;
                    let { protocol: i, host: l } = null != (r = d.Z.toURLSafe(null != (e = n.get('callback')) ? e : '')) ? r : {};
                    i === location.protocol && l === location.host ? t.setHeader('Location', n.get('callback')) : t.setHeader('Location', I), t.writeHead(301), t.end();
                },
                s = new A(!l ? o : T.bind(null, e, t), !l ? o : P.bind(null, e, t, 400), Number(n.get('v')), i);
            if (l)
                (0, m.em)(s, S(e.headers).origin, n.get('client_id'))
                    .then(() => {
                        let n = '';
                        e.on('data', (e) => (n += e)), e.on('error', () => P(e, t, 500, 'Internal Server Error')), e.on('end', () => this.handleMessage(s, n));
                    })
                    .catch((e) => {
                        let { code: t, message: n } = e;
                        return s.close(t, n);
                    });
            else {
                var a;
                (s.authorization.scopes = [b.CN]), this.handleMessage(s, decodeURIComponent(null != (a = n.get('payload')) ? a : ''));
            }
            return;
        }
        P(e, t, 404, 'Not Found');
    }
    handleConnection(e) {
        var t, n;
        let r,
            i = new URLSearchParams(S(e.upgradeReq).url.split('?')[1]),
            l = null != (t = S(e.upgradeReq).headers.origin) ? t : '';
        try {
            r = new j(e, Number(i.get('v')), null != (n = i.get('encoding')) ? n : 'json');
        } catch (t) {
            e.close(t.code, t.message);
            return;
        }
        v.info('Socket Opened: '.concat(r.id)),
            e.on('error', (e) => v.error('WS Error: '.concat(e.message))),
            e.on('close', (e, t) => {
                v.info('Socket Closed: '.concat(r.id, ', code ').concat(e, ', message ').concat(t)), o().remove(C, (e) => e === r), this.emit('disconnect', r);
            }),
            (0, m.em)(r, l, i.get('client_id'))
                .then(() => {
                    C.push(r), e.on('message', (e) => this.handleMessage(r, e)), this.emit('connect', r);
                })
                .catch((e) => {
                    let { code: t, message: n } = e;
                    return r.close(t, n);
                });
    }
    handleMessage(e, t) {
        let n;
        try {
            if (null != r && 'etf' === e.encoding) n = r.unpack(t);
            else if ('string' == typeof t) n = JSON.parse(t);
            else throw Error();
        } catch (t) {
            e.close(_.$VG.CLOSE_UNSUPPORTED, 'Payload not '.concat(e.encoding));
            return;
        }
        (u.default.isLoggingOverlayEvents || n.cmd !== _.Etm.OVERLAY) && v.info('Socket Message: '.concat(e.id), (0, f.Z)(n)), this.emit('request', e, n);
    }
    constructor() {
        var e;
        super();
        let t = 0;
        (i = y.http.createServer()).on('error', (e) => {
            v.error('Error: '.concat(e.message)), ('EADDRINUSE' === e.code || e.message.includes('EADDRINUSE')) && setTimeout(() => N(++t), 1000);
        }),
            i.on('request', this.handleRequest.bind(this)),
            N(t);
        let n = {
            instanceId: null != (e = i.instanceId) ? e : 0,
            server: i
        };
        new y.ws.Server(n).on('connection', (e) => this.handleConnection(e));
    }
}
let x = new Z();
