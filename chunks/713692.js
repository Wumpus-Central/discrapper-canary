d.d(t, { n: () => G, r: () => u, t: () => W });
var i = d(749378),
    e = d(305463),
    c = d(550155);
let a = [
    "rear",
    "back",
    "r\xfcck",
    "arri\xe8re",
    "trasera",
    "tr\xe1s",
    "traseira",
    "posteriore",
    "\u540E\u9762",
    "\u5F8C\u9762",
    "\u80CC\u9762",
    "\u540E\u7F6E",
    "\u5F8C\u7F6E",
    "\u80CC\u7F6E",
    "\u0437\u0430\u0434\u043D\u0435\u0439",
    "\u0627\u0644\u062E\u0644\u0641\u064A\u0629",
    "\uD6C4",
    "arka",
    "achterzijde",
    "\u0E2B\u0E25\u0E31\u0E07",
    "baksidan",
    "bagside",
    "sau",
    "bak",
    "tylny",
    "takakamera",
    "belakang",
    "\u05D0\u05D7\u05D5\u05E8\u05D9\u05EA",
    "\u03C0\u03AF\u03C3\u03C9",
    "spate",
    "h\xe1ts\xf3",
    "zadn\xed",
    "darrere",
    "zadn\xe1",
    "\u0437\u0430\u0434\u043D\u044F",
    "stra\u017Enja",
    "\u092C\u0948\u0915",
];
function s(l) {
    let t = l.toLowerCase();
    return a.some((l) => t.includes(l));
}
async function n() {
    let l = await (0, e.n)(),
        t = l.map((t, d) => {
            var i;
            let e;
            return (
                (i = l.length),
                (e = "" === t.label ? (1 === i || d + 1 <= i / 2 ? "front" : "back") : s(t.label) ? "back" : "front"),
                { deviceId: t.deviceId, label: t.label, cameraType: e }
            );
        });
    if (t.length > 1 && !t.some((l) => "back" === l.cameraType)) {
        let l = t.map((l) => {
                let t = l.label.match(/\b([0-9]+)MP?\b/i);
                return t ? parseInt(t[1], 10) : NaN;
            }),
            d = t.length - 1;
        l.some(isNaN) || (d = l.lastIndexOf(Math.max(...l))), (t[d].cameraType = "back");
    }
    return t;
}
function Z(l) {
    let t = { resizeMode: "none", facingMode: "environment" };
    switch (l) {
        case 0:
            return { ...t, height: { ideal: 720 } };
        case 1:
            return {
                ...t,
                width: { min: 3200, ideal: 3840, max: 4096 },
                height: { min: 1800, ideal: 2160, max: 2400 },
            };
        case 2:
            return { ...t, width: { min: 1400, ideal: 1920, max: 2160 }, height: { min: 900, ideal: 1080, max: 1440 } };
        case 3:
            return { ...t, width: { min: 800, ideal: 1400, max: 1920 }, height: { min: 600, ideal: 900, max: 1080 } };
        case 4:
            return { ...t, width: { min: 640, ideal: 800, max: 1400 }, height: { min: 480, ideal: 480, max: 900 } };
        case 5:
            return { ...t, width: { min: 640, ideal: 640, max: 800 }, height: { min: 480, ideal: 480, max: 600 } };
        default:
            return {};
    }
}
async function b(l = 0) {
    if (l > 5) throw Error("Failed to get camera after all fallback attempts");
    try {
        let t = await (0, e.r)({ video: Z(l) }),
            d = t.getVideoTracks()[0],
            i = (function (l, t) {
                let d = l.getSettings(),
                    i = t.find((t) => t.deviceId === d.deviceId || ("" !== t.label && t.label === l.label));
                if (i) {
                    if (("environment" === d.facingMode || s(l.label)) && t.length > 1)
                        return (
                            t.forEach((l) => {
                                l.deviceId === i.deviceId
                                    ? (l.cameraType = "back")
                                    : s(l.label) || (l.cameraType = "front");
                            }),
                            (function (l) {
                                if (0 === l.length) return;
                                if (1 === l.length) return l[0];
                                let t = l.map((l) => {
                                        let t = l.label.match(/\b([0-9]+)\s*MP?\b/i);
                                        return { camera: l, mp: t ? parseInt(t[1], 10) : 0 };
                                    }),
                                    d = Math.max(...t.map((l) => l.mp));
                                if (d > 0) {
                                    let l = t.find((l) => l.mp === d);
                                    if (l) return l.camera;
                                }
                                let [i] = [...l].sort((l, t) => l.label.localeCompare(t.label));
                                return i;
                            })(t.filter((l) => "back" === l.cameraType))
                        );
                    if (1 === t.length) return i;
                }
            })(d, await n());
        if (((0, e.a)(t), !i)) throw Error("Could not identify main camera");
        return {
            stream: await (0, e.r)({
                video: (function (l, t) {
                    let d = { deviceId: { exact: l.deviceId }, resizeMode: "none" };
                    if (t <= 1) return { ...d, width: { ideal: 1920 }, height: { ideal: 1080 } };
                    let i = Z(t);
                    return { ...d, width: i.width, height: i.height };
                })(i, l),
            }),
            fallbackLevel: l,
        };
    } catch (i) {
        let t = i instanceof Error ? i.name : "UnknownError",
            d = Math.min(l + 1, 5);
        if ("NotReadableError" === t) return await (0, c.t)(300), b(d);
        if ("AbortError" === t) return await (0, c.t)(300), b(l);
        return b(d);
    }
}
async function m(l) {
    let t = l.getVideoTracks()[0];
    try {
        await (0, e.t)(t, { advanced: [{ focusDistance: 1 }] });
    } catch {}
}
async function o() {
    let l = await (0, e.r)({
        audio: !1,
        video: { resizeMode: "none", facingMode: "environment", height: { ideal: (0, i.a)() ? 1080 : 720 } },
    });
    return await m(l), l;
}
async function u(l, t = 0) {
    if (t > 5) throw Error("Failed to get desktop camera after all fallback attempts");
    let d = (function (l, t = 0) {
        let { deviceId: d, facingMode: e = "user" } = l,
            c = (function (l) {
                switch (l) {
                    case 0:
                        return {
                            width: { min: 3200, ideal: 3840, max: 4096 },
                            height: { min: 1800, ideal: 2160, max: 2400 },
                        };
                    case 1:
                        return {
                            width: { min: 1400, ideal: 1920, max: 2160 },
                            height: { min: 900, ideal: 1080, max: 1440 },
                        };
                    case 2:
                        return {
                            width: { min: 800, ideal: 1400, max: 1920 },
                            height: { min: 600, ideal: 900, max: 1080 },
                        };
                    case 3:
                        return {
                            width: { min: 640, ideal: 800, max: 1400 },
                            height: { min: 480, ideal: 480, max: 900 },
                        };
                    case 4:
                        return {
                            width: { min: 640, ideal: 640, max: 800 },
                            height: { min: 480, ideal: 480, max: 600 },
                        };
                    default:
                        return {};
                }
            })(t);
        return { audio: (0, i.o)(), video: { facingMode: e, deviceId: d ? { exact: d } : void 0, ...c } };
    })(l, t);
    try {
        return await (0, e.r)(d);
    } catch (i) {
        let d = t + 1;
        if (d > 5) throw i;
        return u(l, d);
    }
}
async function h(l) {
    if (l) return u({ deviceId: l });
    let t = await u({ facingMode: "environment" }),
        d = t.getVideoTracks()[0];
    if (d && s(d.label)) return t;
    let i = (await (0, e.n)()).filter((l) => s(l.label));
    if (0 === i.length) return t;
    let c = (function (l) {
        if (1 === l.length) return l[0];
        let t = l.map((l) => {
                let t = l.label.match(/\b([0-9]+)\s*MP?\b/i);
                return { device: l, mp: t ? parseInt(t[1], 10) : 0 };
            }),
            d = Math.max(...t.map((l) => l.mp)),
            i = t.find((l) => l.mp === d);
        return i ? i.device : l[0];
    })(i);
    if (d && d.getSettings().deviceId === c.deviceId) return t;
    try {
        let l = await u({ deviceId: c.deviceId });
        return (0, e.a)(t), l;
    } catch {
        return t;
    }
}
async function W(l) {
    let t = await l(),
        d = t.getVideoTracks()[0];
    if (!d || !s(d.label)) return t;
    let i = (await (0, e.n)()).filter((l) => !s(l.label));
    if (0 === i.length) return t;
    let c = i[0];
    if (d.getSettings().deviceId === c.deviceId) return t;
    try {
        let d = await l(c.deviceId);
        return (0, e.a)(t), d;
    } catch {
        return t;
    }
}
async function G(l) {
    return (0, i.r)() ? { stream: await o() } : (0, i.t)() ? b(0) : { stream: await h(l) };
}
