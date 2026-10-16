a.d(t, { captureConjureProfileWidget: () => v, k: () => I });
var r = a(477900),
    i = a(582128),
    l = a(598748),
    n = a(941426),
    u = a(382483),
    s = a(385113),
    o = a(288610),
    d = a(201718),
    c = a(287809),
    p = a(238490),
    f = a(409478),
    h = a(420928),
    w = a(979892);
let g = new n.Vy("ConjureWidgetCapture"),
    m = new Map();
function A() {
    return new Promise((e) => requestAnimationFrame(() => e()));
}
function T(e) {
    let { applicationId: t, generateImageRef: a } = e,
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = l.current;
            if (null == e) return;
            let t = !1;
            return (
                (async function (e) {
                    (await A(),
                        await A(),
                        await Promise.all(Array.from(e.querySelectorAll("img")).map((e) => e.decode().catch(() => {}))),
                        t || a(e));
                })(e).catch(() => {}),
                () => {
                    t = !0;
                }
            );
        }, [a]),
        (0, r.jsx)("div", { ref: l, className: w.P, children: (0, r.jsx)(f.A, { applicationId: t }) })
    );
}
function I(e, t) {
    let { generateImage: a } = (0, o.R)({
            renderComponent: (e) => (null == t ? null : (0, r.jsx)(T, { ...e, applicationId: t })),
            imageOptions: { scale: 2, dpr: 1 },
        }),
        n = i.useRef(a);
    (i.useLayoutEffect(() => {
        n.current = a;
    }),
        i.useEffect(() => {
            if (null == e || null == t) return;
            let a = async () => {
                let e = c.default.getCurrentUser();
                if (null == e) throw Error("no signed-in user to render the widget for");
                let a = Date.now();
                await P(
                    Promise.all([(0, u.un)(t, { force: !0 }), d.A.fetchUserApplicationIdentitiesWithProfiles(e.id)]),
                    4e3,
                    "refreshing the widget data timed out",
                ).catch((e) => g.warn("widget data refresh skipped", { err: e }));
                let r = s.A.getConfig(t)?.surfaces;
                if (
                    !(0, p.yZ)({
                        widgetTop: r?.[l.m.WIDGET_TOP] != null,
                        widgetBottom: r?.[l.m.WIDGET_BOTTOM] != null,
                        miniProfile: r?.[l.m.MINI_PROFILE] != null,
                    }).hasAny
                )
                    throw Error("the deployed preview app has no profile widget surfaces");
                let i = await P(
                        n.current(),
                        12e3 - (Date.now() - a),
                        "rendering the widget took longer than the capture allows",
                    ),
                    o = await createImageBitmap(i),
                    f = { width: o.width / 2, height: o.height / 2 };
                return (o.close(), { blob: i, ...f });
            };
            return (
                m.set(e, a),
                () => {
                    m.get(e) === a && m.delete(e);
                }
            );
        }, [e, t]));
}
function P(e, t, a) {
    return new Promise((r, i) => {
        let l = setTimeout(() => i(Error(a)), t);
        e.then(
            (e) => {
                (clearTimeout(l), r(e));
            },
            (e) => {
                (clearTimeout(l), i(e));
            },
        );
    });
}
async function v(e, t) {
    let a,
        r,
        i = m.get(e);
    if (null == i) return { status: "unavailable" };
    try {
        [a, r] = await Promise.all([i(), P(t.resolveUploadUrl(), 12e3, "resolving the upload URL timed out")]);
    } catch (e) {
        return (
            g.warn("widget capture preparation failed", { err: e }),
            { status: "failed", message: e instanceof Error ? e.message : "preparing the widget capture failed" }
        );
    }
    let l = null == t.onAccepted ? { uploadToken: void 0 } : await t.onAccepted();
    if (null == l) return { status: "unavailable" };
    let n = Math.round(a.width),
        u = Math.round(a.height),
        s = {
            mode: "widget",
            bounds: { x: 0, y: 0, width: n, height: u },
            viewport: { width: n, height: u },
            scale: 2,
            devicePixelRatio: window.devicePixelRatio,
            ...(null == t.build ? {} : { build: t.build }),
            source: "dom",
        };
    try {
        let e = await (0, h.e)(r, a.blob, {
            captureId: t.captureId,
            meta: encodeURIComponent(JSON.stringify(s)),
            build: t.build,
            uploadToken: l.uploadToken,
        });
        if (!e.ok) return { status: "failed", message: `the widget upload was refused (${e.status})` };
    } catch (e) {
        return (g.warn("widget upload failed", { err: e }), { status: "failed", message: "the widget upload failed" });
    }
    return { status: "accepted" };
}
