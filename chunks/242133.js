"use strict";
n.d(t, { g: () => a }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(626584),
    i = n(723702),
    s = n(837921);
function a() {
    if (i.isPlatformEmbedded) {
        let e;
        try {
            e = s.Ay.requireModule("discord_erlpack");
        } catch (t) {
            try {
                e = s.Ay.requireModule("erlpack");
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
                            (new r.A("GatewayEncodingErlpackEncoding").error("Error unpacking", {
                                erlpackUnpackError: e,
                                erlpackDataPreview: null != t ? Array.from(t.slice(0, 32)) : null,
                                erlpackDataLength: null != t ? t.length : null,
                            }),
                            e)
                        );
                    }
                }
                getName() {
                    return "etf";
                }
                wantsString() {
                    return !1;
                }
            };
    }
}
