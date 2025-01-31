n.d(t, { Z: () => o }), n(411104);
var i = n(374023);
let r = (0, n(733393).V)();
class a {
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
let s = void 0 !== r ? r : a;
i.s.isDiscordGatewayPlaintextSet() && (s = a);
let o = s;
