function r(e) {
    let t = "==".slice(0, (4 - (e.length % 4)) % 4),
        n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
        r = new ArrayBuffer(n.length),
        i = new Uint8Array(r);
    for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
    return r;
}

function i(e) {
    let t = new Uint8Array(e),
        n = "";
    for (let e of t) n += String.fromCharCode(e);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
n.d(t, {
    Jt: () => v,
    vt: () => b,
});
var o = "copy",
    c = "convert";

function a(e, t, n) {
    if (t === o) return n;
    if (t === c) return e(n);
    if (t instanceof Array) return n.map((n) => a(e, t[0], n));
    if (t instanceof Object) {
        let r = {};
        for (let [i, o] of Object.entries(t)) {
            if (o.derive) {
                let e = o.derive(n);
                void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
                if (o.required) throw Error(`Missing key: ${i}`);
                continue;
            }
            if (null == n[i]) {
                r[i] = null;
                continue;
            }
            r[i] = a(e, o.schema, n[i]);
        }
        return r;
    }
}

function l(e, t) {
    return {
        required: !0,
        schema: e,
        derive: t,
    };
}

function s(e) {
    return {
        required: !0,
        schema: e,
    };
}

function u(e) {
    return {
        required: !1,
        schema: e,
    };
}
var d = {
        type: s(o),
        id: s(c),
        transports: u(o),
    },
    p = {
        appid: u(o),
        appidExclude: u(o),
        credProps: u(o),
    },
    f = {
        appid: u(o),
        appidExclude: u(o),
        credProps: u(o),
    },
    g = {
        publicKey: s({
            rp: s(o),
            user: s({
                id: s(c),
                name: s(o),
                displayName: s(o),
            }),
            challenge: s(c),
            pubKeyCredParams: s(o),
            timeout: u(o),
            excludeCredentials: u([d]),
            authenticatorSelection: u(o),
            attestation: u(o),
            extensions: u(p),
        }),
        signal: u(o),
    },
    h = {
        type: s(o),
        id: s(o),
        rawId: s(c),
        authenticatorAttachment: u(o),
        response: s({
            clientDataJSON: s(c),
            attestationObject: s(c),
            transports: l(o, (e) => {
                var t;
                return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
        }),
        clientExtensionResults: l(f, (e) => e.getClientExtensionResults()),
    },
    w = {
        mediation: u(o),
        publicKey: s({
            challenge: s(c),
            timeout: u(o),
            rpId: u(o),
            allowCredentials: u([d]),
            userVerification: u(o),
            extensions: u(p),
        }),
        signal: u(o),
    },
    y = {
        type: s(o),
        id: s(o),
        rawId: s(c),
        authenticatorAttachment: u(o),
        response: s({
            clientDataJSON: s(c),
            authenticatorData: s(c),
            signature: s(c),
            userHandle: s(c),
        }),
        clientExtensionResults: l(f, (e) => e.getClientExtensionResults()),
    };
async function b(e) {
    let t = await navigator.credentials.create(a(r, g, e));
    return a(i, h, t);
}
async function v(e) {
    let t = await navigator.credentials.get(a(r, w, e));
    return a(i, y, t);
}
