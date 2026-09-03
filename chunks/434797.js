n.d(t, { L: () => a });
var i = n(636537),
    r = n(618651);
function a(e, t) {
    if ("function" != typeof fetch || new Blob([t]).size > 57344) return !1;
    let { default: a } = n(280450),
        { default: s } = n(174459),
        l = { "Content-Type": "application/json" },
        o = a.getToken();
    null != o && "" !== o && (l.Authorization = o), (0, r.D)();
    let d = s.getSuperPropertiesBase64();
    null != d && (l["X-Super-Properties"] = d);
    let c = a.getFingerprint();
    null != c && "" !== c && (l["X-Fingerprint"] = c);
    let u = a.getInstallationForTracking();
    null != u && "" !== u && (l["X-Installation-ID"] = u);
    try {
        return fetch((0, i.TP)() + e, { method: "POST", keepalive: !0, headers: l, body: t }).catch(() => {}), !0;
    } catch {
        return !1;
    }
}
