i.d(t, { captureConjureProfileWidget: () => P, k: () => y });
var r = i(477900),
    a = i(582128),
    n = i(598748),
    l = i(941426),
    o = i(382483),
    u = i(385113),
    d = i(288610),
    s = i(201718),
    c = i(287809),
    p = i(238490),
    f = i(409478),
    h = i(979892);
let w = new l.Vy("VibegrationsWidgetCapture"),
    g = new Map();
function m() {
    return new Promise((e) => requestAnimationFrame(() => e()));
}
function b(e) {
    let { applicationId: t, generateImageRef: i } = e,
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
                        t || i(e));
                })(e).catch(() => {}),
                () => {
                    t = !0;
                }
            );
        }, [i]),
        (0, r.jsx)("div", { ref: n, className: h.P, children: (0, r.jsx)(f.A, { applicationId: t }) })
    );
}
function y(e, t) {
    let { generateImage: i } = (0, d.R)({
            renderComponent: (e) => (null == t ? null : (0, r.jsx)(b, { ...e, applicationId: t })),
            imageOptions: { pixelRatio: 2, cacheBust: !1 },
        }),
        l = a.useRef(i);
    (a.useLayoutEffect(() => {
        l.current = i;
    }),
        a.useEffect(() => {
            if (null == e || null == t) return;
            let i = async () => {
                let e = c.default.getCurrentUser();
                if (null == e) throw Error("no signed-in user to render the widget for");
                let i = Date.now();
                await v(
                    Promise.all([(0, o.un)(t, { force: !0 }), s.A.fetchUserApplicationIdentitiesWithProfiles(e.id)]),
                    4e3,
                    "refreshing the widget data timed out",
                ).catch((e) => w.warn("widget data refresh skipped", { err: e }));
                let r = u.A.getConfig(t)?.surfaces;
                if (
                    !(0, p.yZ)({
                        widgetTop: r?.[n.m.WIDGET_TOP] != null,
                        widgetBottom: r?.[n.m.WIDGET_BOTTOM] != null,
                        miniProfile: r?.[n.m.MINI_PROFILE] != null,
                    }).hasAny
                )
                    throw Error("the deployed preview app has no profile widget surfaces");
                let a = await v(
                        l.current(),
                        12e3 - (Date.now() - i),
                        "rendering the widget took longer than the capture allows",
                    ),
                    d = await createImageBitmap(a),
                    f = { width: d.width / 2, height: d.height / 2 };
                return (d.close(), { blob: a, ...f });
            };
            return (
                g.set(e, i),
                () => {
                    g.get(e) === i && g.delete(e);
                }
            );
        }, [e, t]));
}
function v(e, t, i) {
    return new Promise((r, a) => {
        let n = setTimeout(() => a(Error(i)), t);
        e.then(
            (e) => {
                (clearTimeout(n), r(e));
            },
            (e) => {
                (clearTimeout(n), a(e));
            },
        );
    });
}
async function P(e, t) {
    let i,
        r,
        a = g.get(e);
    if (null == a) return { status: "unavailable" };
    try {
        [i, r] = await Promise.all([a(), v(t.resolveUploadUrl(), 12e3, "resolving the upload URL timed out")]);
    } catch (e) {
        return (
            w.warn("widget capture preparation failed", { err: e }),
            { status: "failed", message: e instanceof Error ? e.message : "preparing the widget capture failed" }
        );
    }
    let n = null == t.onAccepted ? { uploadToken: void 0 } : await t.onAccepted();
    if (null == n) return { status: "unavailable" };
    let l = Math.round(i.width),
        o = Math.round(i.height),
        u = {
            mode: "widget",
            bounds: { x: 0, y: 0, width: l, height: o },
            viewport: { width: l, height: o },
            scale: 2,
            devicePixelRatio: window.devicePixelRatio,
            ...(null == t.build ? {} : { build: t.build }),
            source: "dom",
        },
        d = {
            "content-type": i.blob.type,
            "x-vibegrations-capture-id": t.captureId,
            "x-vibegrations-capture-meta": encodeURIComponent(JSON.stringify(u)),
        };
    (null != t.build && (d["x-vibegrations-build"] = t.build),
        null != n.uploadToken && (d["x-vibegrations-capture-token"] = n.uploadToken));
    try {
        let e = await fetch(r, { method: "POST", headers: d, body: i.blob });
        if (!e.ok) return { status: "failed", message: `the widget upload was refused (${e.status})` };
    } catch (e) {
        return (w.warn("widget upload failed", { err: e }), { status: "failed", message: "the widget upload failed" });
    }
    return { status: "accepted" };
}
