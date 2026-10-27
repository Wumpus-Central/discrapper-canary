n.d(t, { DM: () => u, ms: () => o, oB: () => s, $D: () => f, _m: () => c, Du: () => i, dz: () => m });
var l = n(688954),
    r = n(513845),
    a = n(664619);
async function i(e) {
    let t = await (0, l.h)(e, "/agent/source-history");
    if (!t.ok) throw Error(`version history failed (${t.status})`);
    let n = await t.json();
    return {
        entries: Array.isArray(n.entries) ? n.entries : [],
        previewSha: "string" == typeof n.previewSha ? n.previewSha : null,
        publishedSha: "string" == typeof n.publishedSha ? n.publishedSha : null,
    };
}
async function s(e, t) {
    let n = await (0, l.h)(e, `/agent/source-history/${encodeURIComponent(t)}/restore`, { method: "POST" });
    if (!n.ok) {
        let e = (await n.text()).trim();
        throw Error(`version restore failed (${n.status})${"" === e ? "" : `: ${e}`}`);
    }
    let r = await n.json();
    if (null == r.entry) throw Error("version restore returned no commit");
    return (
        !0 === r.live ||
            (0, a.tZ)(e, { isPreview: !0 }).catch((t) => {
                console.error("[conjure] post-version-restore refresh failed", e, t);
            }),
        r.entry
    );
}
async function u(e, t) {
    let n = await (0, l.h)(e, "/agent/database/restore-points", { query: { environment: t } });
    if (!n.ok) throw Error(`restore points failed (${n.status})`);
    let r = await n.json();
    return Array.isArray(r.restorePoints) ? r.restorePoints : [];
}
async function o(e, t) {
    let n = await (0, l.h)(e, "/agent/database/restore-window", { query: { environment: t } });
    if (!n.ok) throw Error(`restore window failed (${n.status})`);
    return await n.json();
}
async function c(e, t, n) {
    let r = await (0, l.h)(e, "/agent/database/restore-points", {
        method: "POST",
        json: null != n && "" !== n.trim() ? { environment: t, label: n } : { environment: t },
    });
    if (!r.ok) throw Error(`restore point create failed (${r.status})`);
    let a = await r.json();
    if (null == a.restorePoint) throw Error("restore point create returned nothing");
    return a.restorePoint;
}
async function d(e, t) {
    var n;
    let l = t.ok && 202 !== t.status ? "" : (await t.text()).trim(),
        a =
            ((n = t.status),
            202 === n
                ? { ok: !1, code: "unconfirmed", message: l }
                : n >= 200 && n < 300
                  ? { ok: !0 }
                  : { ok: !1, code: 410 === n ? "expired" : "failed", message: l });
    if (a.ok)
        try {
            (0, r.BD)(e);
        } catch (t) {
            console.error("[conjure] post-data-restore frame reload failed", e, t);
        }
    return a;
}
async function f(e, t) {
    let n = await (0, l.h)(e, `/agent/database/restore-points/${encodeURIComponent(t)}/restore`, { method: "POST" });
    return d(e, n);
}
async function m(e, t, n) {
    let r = await (0, l.h)(e, "/agent/database/restore", { method: "POST", json: { environment: t, timestampMs: n } });
    return d(e, r);
}
