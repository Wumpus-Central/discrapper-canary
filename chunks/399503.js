i.d(t, { captureConjureProfileWidget: () => v, k: () => I });
var r = i(477900),
    a = i(582128),
    n = i(598748),
    l = i(941426),
    u = i(382483),
    o = i(385113),
    s = i(288610),
    d = i(201718),
    c = i(287809),
    p = i(238490),
    f = i(409478),
    h = i(420928),
    w = i(979892);
let g = new l.Vy("ConjureWidgetCapture"),
    m = new Map();
function A() {
    return new Promise((e) => requestAnimationFrame(() => e()));
}
function T(e) {
    let { applicationId: t, generateImageRef: i } = e,
        n = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = n.current;
            if (null == e) return;
            let t = !1;
            return (
                (async function (e) {
                    (await A(),
                        await A(),
                        await Promise.all(Array.from(e.querySelectorAll("img")).map((e) => e.decode().catch(() => {}))),
                        t || i(e));
                })(e).catch(() => {}),
                () => {
                    t = !0;
                }
            );
        }, [i]),
        (0, r.jsx)("div", { ref: n, className: w.P, children: (0, r.jsx)(f.A, { applicationId: t }) })
    );
}
function I(e, t) {
    let { generateImage: i } = (0, s.R)({
            renderComponent: (e) => (null == t ? null : (0, r.jsx)(T, { ...e, applicationId: t })),
            imageOptions: { scale: 2, dpr: 1 },
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
                await P(
                    Promise.all([(0, u.un)(t, { force: !0 }), d.A.fetchUserApplicationIdentitiesWithProfiles(e.id)]),
                    4e3,
                    "refreshing the widget data timed out",
                ).catch((e) => g.warn("widget data refresh skipped", { err: e }));
                let r = o.A.getConfig(t)?.surfaces;
                if (
                    !(0, p.yZ)({
                        widgetTop: r?.[n.m.WIDGET_TOP] != null,
                        widgetBottom: r?.[n.m.WIDGET_BOTTOM] != null,
                        miniProfile: r?.[n.m.MINI_PROFILE] != null,
                    }).hasAny
                )
                    throw Error("the deployed preview app has no profile widget surfaces");
                let a = await P(
                        l.current(),
                        12e3 - (Date.now() - i),
                        "rendering the widget took longer than the capture allows",
                    ),
                    s = await createImageBitmap(a),
                    f = { width: s.width / 2, height: s.height / 2 };
                return (s.close(), { blob: a, ...f });
            };
            return (
                m.set(e, i),
                () => {
                    m.get(e) === i && m.delete(e);
                }
            );
        }, [e, t]));
}
function P(e, t, i) {
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
async function v(e, t) {
    let i,
        r,
        a = m.get(e);
    if (null == a) return { status: "unavailable" };
    try {
        [i, r] = await Promise.all([a(), P(t.resolveUploadUrl(), 12e3, "resolving the upload URL timed out")]);
    } catch (e) {
        return (
            g.warn("widget capture preparation failed", { err: e }),
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
        };
    try {
        let e = await (0, h.e)(r, i.blob, {
            captureId: t.captureId,
            meta: encodeURIComponent(JSON.stringify(o)),
            build: t.build,
            uploadToken: n.uploadToken,
        });
        if (!e.ok) return { status: "failed", message: `the widget upload was refused (${e.status})` };
    } catch (e) {
        return (g.warn("widget upload failed", { err: e }), { status: "failed", message: "the widget upload failed" });
    }
    return { status: "accepted" };
}
