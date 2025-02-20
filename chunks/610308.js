n.d(t, { Z: () => s }), n(26686), n(411104);
var r = n(374023);
let i = (0, n(733393).V)();
class o {
    pack(e) {
        return JSON.stringify(e);
    }
    unpack(e) {
        if ('string' != typeof e) throw Error('Expected a string to be passed to JSONEncoding.unpack, got '.concat(null == e ? null : typeof e));
        return JSON.parse(e);
    }
    getName() {
        return 'json';
    }
    wantsString() {
        return !0;
    }
}
let a = void 0 !== i ? i : o;
r.s.isDiscordGatewayPlaintextSet() && (a = o);
let s = a;
