r.d(t, { captureConjureProfileWidget: () => P, k: () => v });
var i = r(477900),
    a = r(582128),
    n = r(598748),
    l = r(941426),
    u = r(382483),
    o = r(385113),
    d = r(288610),
    s = r(201718),
    c = r(287809),
    p = r(238490),
    f = r(409478),
    w = r(979892);
let g = new l.Vy("VibegrationsWidgetCapture"),
    h = new Map();
function m() {
    return new Promise((e) => requestAnimationFrame(() => e()));
}
function b(e) {
    let { applicationId: t, generateImageRef: r } = e,
        n = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = n.current;
            if (null == e) return;
            let t = !1;
            return (
                (async function (e) {
                    (await m(),
                        await m(),
                        await Promise.all(Array.from(e.querySelectorAll("img")).map((e) => e.decode().catch(() => {}))),
                        t || r(e));
                })(e).catch(() => {}),
                () => {
                    t = !0;
                }
            );
        }, [r]),
        (0, i.jsx)("div", { ref: n, className: w.P, children: (0, i.jsx)(f.A, { applicationId: t }) })
    );
}
function v(e, t) {
    let { generateImage: r } = (0, d.R)({
            renderComponent: (e) => (null == t ? null : (0, i.jsx)(b, { ...e, applicationId: t })),
            imageOptions: { pixelRatio: 2, cacheBust: !1 },
        }),
        l = a.useRef(r);
    (a.useLayoutEffect(() => {
        l.current = r;
    }),
        a.useEffect(() => {
            if (null == e || null == t) return;
            let r = async () => {
                let e = c.default.getCurrentUser();
                if (null == e) throw Error("no signed-in user to render the widget for");
                let r = Date.now();
                await y(
                    Promise.all([(0, u.un)(t, { force: !0 }), s.A.fetchUserApplicationIdentitiesWithProfiles(e.id)]),
                    4e3,
                    "refreshing the widget data timed out",
                ).catch((e) => g.warn("widget data refresh skipped", { err: e }));
                let i = o.A.getConfig(t)?.surfaces;
                if (
                    !(0, p.yZ)({
                        widgetTop: i?.[n.m.WIDGET_TOP] != null,
                        widgetBottom: i?.[n.m.WIDGET_BOTTOM] != null,
                        miniProfile: i?.[n.m.MINI_PROFILE] != null,
                    }).hasAny
                )
                    throw Error("the deployed preview app has no profile widget surfaces");
                let a = await y(
                        l.current(),
                        12e3 - (Date.now() - r),
                        "rendering the widget took longer than the capture allows",
                    ),
                    d = await createImageBitmap(a),
                    f = { width: d.width / 2, height: d.height / 2 };
                return (d.close(), { blob: a, ...f });
            };
            return (
                h.set(e, r),
                () => {
                    h.get(e) === r && h.delete(e);
                }
            );
        }, [e, t]));
}
function y(e, t, r) {
    return new Promise((i, a) => {
        let n = setTimeout(() => a(Error(r)), t);
        e.then(
            (e) => {
                (clearTimeout(n), i(e));
            },
            (e) => {
                (clearTimeout(n), a(e));
            },
        );
    });
}
async function P(e, t) {
    let r,
        i,
        a = h.get(e);
    if (null == a) return { status: "unavailable" };
    try {
        [r, i] = await Promise.all([a(), y(t.resolveUploadUrl(), 12e3, "resolving the upload URL timed out")]);
    } catch (e) {
        return (
            g.warn("widget capture preparation failed", { err: e }),
            { status: "failed", message: e instanceof Error ? e.message : "preparing the widget capture failed" }
        );
    }
    let n = null == t.onAccepted ? { uploadToken: void 0 } : await t.onAccepted();
    if (null == n) return { status: "unavailable" };
    let l = Math.round(r.width),
        u = Math.round(r.height),
        o = {
            mode: "widget",
            bounds: { x: 0, y: 0, width: l, height: u },
            viewport: { width: l, height: u },
            scale: 2,
            devicePixelRatio: window.devicePixelRatio,
            ...(null == t.build ? {} : { build: t.build }),
            source: "dom",
        },
        d = {
            "content-type": r.blob.type,
            "x-vibegrations-capture-id": t.captureId,
            "x-vibegrations-capture-meta": encodeURIComponent(JSON.stringify(o)),
        };
    (null != t.build && (d["x-vibegrations-build"] = t.build),
        null != n.uploadToken && (d["x-vibegrations-capture-token"] = n.uploadToken));
    try {
        let e = await fetch(i, { method: "POST", headers: d, body: r.blob });
        if (!e.ok) return { status: "failed", message: `the widget upload was refused (${e.status})` };
    } catch (e) {
        return (g.warn("widget upload failed", { err: e }), { status: "failed", message: "the widget upload failed" });
    }
    return { status: "accepted" };
}
