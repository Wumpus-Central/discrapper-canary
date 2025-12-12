n.d(t, { o: () => a });
var r = n(98076),
    i = n(4757);
function a(e) {
    if ("boolean" == typeof e) return Number(e);
    let t = "string" == typeof e ? parseFloat(e) : e;
    if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) {
        i.X &&
            r.kg.warn(
                `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
            );
        return;
    }
    return t;
}
