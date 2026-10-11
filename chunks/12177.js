(n.d(t, { DM: () => o, ms: () => u, oB: () => s, $D: () => f, _m: () => c, Du: () => i, dz: () => m }),
    n(323874),
    n(14289),
    n(35956));
var l = n(382541),
    r = n(513845),
    a = n(664619);
async function i(e) {
    let { ticket: t, baseUrl: n } = await (0, l.d)(e),
        r = new URLSearchParams({ ticket: t }),
        a = await fetch(`${n}/agent/source-history?${r}`);
    if (!a.ok) throw Error(`version history failed (${a.status})`);
    let i = await a.json();
    return {
        entries: Array.isArray(i.entries) ? i.entries : [],
        previewSha: "string" == typeof i.previewSha ? i.previewSha : null,
        publishedSha: "string" == typeof i.publishedSha ? i.publishedSha : null,
    };
}
async function s(e, t) {
    let { ticket: n, baseUrl: r } = await (0, l.d)(e),
        i = new URLSearchParams({ ticket: n }),
        s = await fetch(`${r}/agent/source-history/${encodeURIComponent(t)}/restore?${i}`, { method: "POST" });
    if (!s.ok) {
        let e = (await s.text()).trim();
        throw Error(`version restore failed (${s.status})${"" === e ? "" : `: ${e}`}`);
    }
    let o = await s.json();
    if (null == o.entry) throw Error("version restore returned no commit");
    return (
        !0 === o.live ||
            (0, a.tZ)(e, { isPreview: !0 }).catch((t) => {
                console.error("[vibegrations] post-version-restore refresh failed", e, t);
            }),
        o.entry
    );
}
async function o(e, t) {
    let { ticket: n, baseUrl: r } = await (0, l.d)(e),
        a = new URLSearchParams({ ticket: n, environment: t }),
        i = await fetch(`${r}/agent/database/restore-points?${a}`);
    if (!i.ok) throw Error(`restore points failed (${i.status})`);
    let s = await i.json();
    return Array.isArray(s.restorePoints) ? s.restorePoints : [];
}
async function u(e, t) {
    let { ticket: n, baseUrl: r } = await (0, l.d)(e),
        a = new URLSearchParams({ ticket: n, environment: t }),
        i = await fetch(`${r}/agent/database/restore-window?${a}`);
    if (!i.ok) throw Error(`restore window failed (${i.status})`);
    return await i.json();
}
async function c(e, t, n) {
    let { ticket: r, baseUrl: a } = await (0, l.d)(e),
        i = new URLSearchParams({ ticket: r }),
        s = await fetch(`${a}/agent/database/restore-points?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(null != n && "" !== n.trim() ? { environment: t, label: n } : { environment: t }),
        });
    if (!s.ok) throw Error(`restore point create failed (${s.status})`);
    let o = await s.json();
    if (null == o.restorePoint) throw Error("restore point create returned nothing");
    return o.restorePoint;
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
            console.error("[vibegrations] post-data-restore frame reload failed", e, t);
        }
    return a;
}
async function f(e, t) {
    let { ticket: n, baseUrl: r } = await (0, l.d)(e),
        a = new URLSearchParams({ ticket: n });
    return d(
        e,
        await fetch(`${r}/agent/database/restore-points/${encodeURIComponent(t)}/restore?${a}`, { method: "POST" }),
    );
}
async function m(e, t, n) {
    let { ticket: r, baseUrl: a } = await (0, l.d)(e),
        i = new URLSearchParams({ ticket: r });
    return d(
        e,
        await fetch(`${a}/agent/database/restore?${i}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ environment: t, timestampMs: n }),
        }),
    );
}
