n.d(t, {
    D: () => c,
    r: () => l,
}),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(747238),
    n(801460),
    n(508300),
    n(650828),
    n(896048);
var r = n(835245),
    i = n(506774),
    a = n(927813);
let s = "purchase_token",
    o = 60 * a.A.Millis.DAY;

function l() {
    let e = i.w.get(s);
    if (null != e && e.expires >= Date.now()) return e.purchaseToken;
    let t = (0, r.A)();
    return (
        i.w.set(s, {
            purchaseToken: t,
            expires: Date.now() + o,
        }),
        t
    );
}
async function c() {
    let e = new Uint8Array(
        l()
            .split("")
            .map((e) => e.charCodeAt(0)),
    );
    return btoa(
        String.fromCharCode(
            ...new Uint8Array(
                await window.crypto.subtle.digest(
                    {
                        name: "SHA-256",
                    },
                    e,
                ),
            ),
        ),
    );
}
