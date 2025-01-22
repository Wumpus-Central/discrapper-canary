r.d(n, {
    V: function () {
        return g;
    }
});
var i = r(518263);
var a = r(970173);
var o = r(520712);
var s = r(268111);
var l = r(941497);
var u = r(32026);
var c = r(480839);
var d = r(744285);
var f = r(492257);
var p = r(873817);
var h = r(710845),
    _ = r(358085),
    m = r(998502);
function g() {
    if (_.isPlatformEmbedded) {
        let e;
        try {
            e = m.ZP.requireModule('discord_erlpack');
        } catch (n) {
            try {
                e = m.ZP.requireModule('erlpack');
            } catch (e) {}
        }
        if (null != e)
            return class {
                static canUse() {
                    return null != e;
                }
                pack(n) {
                    return e.pack(n).buffer;
                }
                unpack(n) {
                    n instanceof ArrayBuffer && (n = new Uint8Array(n));
                    try {
                        return e.unpack(n);
                    } catch (e) {
                        throw (
                            (new h.Z('GatewayEncodingErlpackEncoding').error('Error unpacking', {
                                erlpackUnpackError: e,
                                erlpackDataPreview: null != n ? Array.from(n.slice(0, 32)) : null,
                                erlpackDataLength: null != n ? n.length : null
                            }),
                            e)
                        );
                    }
                }
                getName() {
                    return 'etf';
                }
                wantsString() {
                    return !1;
                }
            };
    }
}
