i.d(t, { captureConjureProfileWidget: () => T, k: () => v });
var a = i(477900),
    r = i(582128),
    n = i(598748),
    l = i(941426),
    u = i(382483),
    o = i(385113),
    s = i(288610),
    d = i(201718),
    c = i(287809),
    p = i(238490),
    f = i(409478),
    h = i(979892);
let w = new l.Vy("ConjureWidgetCapture"),
    g = new Map();
function m() {
    return new Promise((e) => requestAnimationFrame(() => e()));
}
function b(e) {
    let { applicationId: t, generateImageRef: i } = e,
        n = r.useRef(null);
    return (
        r.useEffect(() => {
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
        (0, a.jsx)("div", { ref: n, className: h.P, children: (0, a.jsx)(f.A, { applicationId: t }) })
    );
}
function v(e, t) {
    let { generateImage: i } = (0, s.R)({
            renderComponent: (e) => (null == t ? null : (0, a.jsx)(b, { ...e, applicationId: t })),
            imageOptions: { scale: 2, dpr: 1 },
        }),
        l = r.useRef(i);
    (r.useLayoutEffect(() => {
        l.current = i;
    }),
        r.useEffect(() => {
            if (null == e || null == t) return;
            let i = async () => {
                let e = c.default.getCurrentUser();
                if (null == e) throw Error("no signed-in user to render the widget for");
                let i = Date.now();
                await A(
                    Promise.all([(0, u.un)(t, { force: !0 }), d.A.fetchUserApplicationIdentitiesWithProfiles(e.id)]),
                    4e3,
                    "refreshing the widget data timed out",
                ).catch((e) => w.warn("widget data refresh skipped", { err: e }));
                let a = o.A.getConfig(t)?.surfaces;
                if (
                    !(0, p.yZ)({
                        widgetTop: a?.[n.m.WIDGET_TOP] != null,
                        widgetBottom: a?.[n.m.WIDGET_BOTTOM] != null,
                        miniProfile: a?.[n.m.MINI_PROFILE] != null,
                    }).hasAny
                )
                    throw Error("the deployed preview app has no profile widget surfaces");
                let r = await A(
                        l.current(),
                        12e3 - (Date.now() - i),
                        "rendering the widget took longer than the capture allows",
                    ),
                    s = await createImageBitmap(r),
                    f = { width: s.width / 2, height: s.height / 2 };
                return (s.close(), { blob: r, ...f });
            };
            return (
                g.set(e, i),
                () => {
                    g.get(e) === i && g.delete(e);
                }
            );
        }, [e, t]));
}
function A(e, t, i) {
    return new Promise((a, r) => {
        let n = setTimeout(() => r(Error(i)), t);
        e.then(
            (e) => {
                (clearTimeout(n), a(e));
            },
            (e) => {
                (clearTimeout(n), r(e));
            },
        );
    });
}
async function T(e, t) {
    let i,
        a,
        r = g.get(e);
    if (null == r) return { status: "unavailable" };
    try {
        [i, a] = await Promise.all([r(), A(t.resolveUploadUrl(), 12e3, "resolving the upload URL timed out")]);
    } catch (e) {
        return (
            w.warn("widget capture preparation failed", { err: e }),
            { status: "failed", message: e instanceof Error ? e.message : "preparing the widget capture failed" }
        );
    }
    let n = null == t.onAccepted ? { uploadToken: void 0 } : await t.onAccepted();
    if (null == n) return { status: "unavailable" };
    let l = Math.round(i.width),
        u = Math.round(i.height),
        o = {
            mode: "widget",
            bounds: { x: 0, y: 0, width: l, height: u },
            viewport: { width: l, height: u },
            scale: 2,
            devicePixelRatio: window.devicePixelRatio,
            ...(null == t.build ? {} : { build: t.build }),
            source: "dom",
        },
        s = {
            "content-type": i.blob.type,
            "x-vibegrations-capture-id": t.captureId,
            "x-vibegrations-capture-meta": encodeURIComponent(JSON.stringify(o)),
        };
    (null != t.build && (s["x-vibegrations-build"] = t.build),
        null != n.uploadToken && (s["x-vibegrations-capture-token"] = n.uploadToken));
    try {
        let e = await fetch(a, { method: "POST", headers: s, body: i.blob });
        if (!e.ok) return { status: "failed", message: `the widget upload was refused (${e.status})` };
    } catch (e) {
        return (w.warn("widget upload failed", { err: e }), { status: "failed", message: "the widget upload failed" });
    }
    return { status: "accepted" };
}
