function i(e, t, n) {
    let i = { "content-type": t, [`${e}capture-id`]: n.captureId, [`${e}capture-meta`]: n.meta };
    return (
        null != n.build && (i[`${e}build`] = n.build),
        null != n.uploadToken && (i[`${e}capture-token`] = n.uploadToken),
        i
    );
}
async function r(e, t, n) {
    try {
        return await fetch(e, { method: "POST", headers: i("x-conjure-", t.type, n), body: t });
    } catch {
        return await fetch(e, { method: "POST", headers: i("x-vibegrations-", t.type, n), body: t });
    }
}
n.d(t, { e: () => r });
