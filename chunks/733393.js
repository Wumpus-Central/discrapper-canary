n.d(t, { V: () => a }), n(644351), n(146733), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784);
var r = n(710845),
    i = n(358085),
    o = n(998502);
function a() {
    if (i.isPlatformEmbedded) {
        let e;
        try {
            e = o.ZP.requireModule('discord_erlpack');
        } catch (t) {
            try {
                e = o.ZP.requireModule('erlpack');
            } catch (e) {}
        }
        if (null != e)
            return class {
                static canUse() {
                    return null != e;
                }
                pack(t) {
                    return e.pack(t).buffer;
                }
                unpack(t) {
                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                    try {
                        return e.unpack(t);
                    } catch (e) {
                        throw (
                            (new r.Z('GatewayEncodingErlpackEncoding').error('Error unpacking', {
                                erlpackUnpackError: e,
                                erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
                                erlpackDataLength: null != t ? t.length : null
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
