async function i(l) {
    switch (l) {
        case "avatar-3d":
            return (
                await Promise.all([d.e("50711"), d.e("23450"), d.e("18112")]).then(d.bind(d, 244321))
            ).createProvider();
        case "avatar-2d":
            return (
                await Promise.all([d.e("50711"), d.e("40862"), d.e("18112")]).then(d.bind(d, 599533))
            ).createProvider();
        case "privacy-lens":
            return (await d.e("3028").then(d.bind(d, 98143))).createProvider();
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
