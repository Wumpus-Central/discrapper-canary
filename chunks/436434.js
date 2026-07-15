async function i(l) {
    switch (l) {
        case "avatar-3d":
            return (
                await Promise.all([d.e("78279"), d.e("28750"), d.e("56083")]).then(d.bind(d, 610141))
            ).createProvider();
        case "avatar-2d":
            return (
                await Promise.all([d.e("78279"), d.e("20275"), d.e("56083")]).then(d.bind(d, 104862))
            ).createProvider();
        case "privacy-lens":
            return (await d.e("2778").then(d.bind(d, 223297))).createProvider();
        default:
            throw Error(`Unknown avatar variant: ${String(l)}`);
    }
}
async function e(l) {
    let t = await i(l.variant);
    try {
        await t.start(l.stream, { assets: l.assets, maxFps: l.maxFps }), l.initialState && t.setState?.(l.initialState);
    } catch (l) {
        throw (t.stop(), l);
    }
    return {
        get canvas() {
            return t.getCanvas();
        },
        setState(l) {
            t.setState?.(l);
        },
        stop() {
            t.stop();
        },
    };
}
d.d(t, { t: () => e });
