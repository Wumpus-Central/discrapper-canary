i.d(t, { t: () => o });
var r = i(209688),
    n = i(171251);
let o = async (e, t) => {
    let i = `${n.t.finishStatus}${e ? `?flowId=${e}` : ""}`,
        o = await r.t.get(i, { signal: t });
    if (!o.ok) throw Error(`GET ${i} failed: ${o.status} ${o.statusText}`);
    return o.data;
};
