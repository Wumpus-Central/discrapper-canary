let i = [
    { height: 720 },
    { width: 3840, height: 2160 },
    { width: 1920, height: 1080 },
    { width: 640, height: 480 },
    { width: 800, height: 480 },
    {},
];
d.d(
    t,
    {},
    {
        a: function (l) {
            for (let t of l.getTracks()) t.stop();
        },
        i: async function (l, t = i) {
            if ("u" < typeof navigator || !navigator.mediaDevices) throw Error("MediaDevices API not available");
            let d = l.video;
            for (let i = 0; i < t.length; i++) {
                let e = t[i],
                    c = { ...d };
                (e.width && (c.width = { ideal: e.width }),
                    e.height && (c.height = { ideal: e.height }),
                    e.width || e.height || (delete c.width, delete c.height));
                try {
                    return await navigator.mediaDevices.getUserMedia({ ...l, video: c });
                } catch (l) {
                    if (i === t.length - 1) throw l;
                }
            }
            throw Error("All camera resolution fallbacks failed");
        },
        n: async function () {
            return "u" < typeof navigator || !navigator.mediaDevices
                ? []
                : (await navigator.mediaDevices.enumerateDevices()).filter((l) => "videoinput" === l.kind);
        },
        r: async function (l) {
            if ("u" < typeof navigator || !navigator.mediaDevices) throw Error("MediaDevices API not available");
            return navigator.mediaDevices.getUserMedia(l);
        },
        t: async function (l, t) {
            await l.applyConstraints(t);
        },
    },
);
