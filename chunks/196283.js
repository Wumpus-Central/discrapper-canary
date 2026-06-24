i.d(t, { t: () => n });
var r = i(209688);
async function n(e) {
    try {
        await r.t.post("/omni/device/stats", e);
    } catch {
        return;
    }
}
